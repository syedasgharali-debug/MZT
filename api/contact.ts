import type { IncomingMessage, ServerResponse } from 'http';

interface ContactPayload {
  fullName?: string;
  email?: string;
  phone?: string;
  company?: string;
  serviceInterest?: string;
  teamSize?: string;
  message?: string;
}

interface VercelRequest extends IncomingMessage {
  body?: unknown;
}

interface VercelResponse extends ServerResponse {
  status: (code: number) => VercelResponse;
  json: (data: unknown) => void;
}

async function readBody(req: VercelRequest): Promise<ContactPayload> {
  if (req.body && typeof req.body === 'object') {
    return req.body as ContactPayload;
  }
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body) as ContactPayload;
    } catch {
      return {};
    }
  }
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  const raw = Buffer.concat(chunks).toString('utf8').trim();
  if (!raw) return {};
  try {
    return JSON.parse(raw) as ContactPayload;
  } catch {
    return {};
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed.' });
    return;
  }

  const body = await readBody(req);
  const fullName = (body.fullName || '').trim();
  const email = (body.email || '').trim();
  const phone = (body.phone || '').trim();
  const company = (body.company || '').trim();
  const serviceInterest = (body.serviceInterest || 'Managed IT Services').trim();
  const message = (body.message || '').trim();

  const errors: Record<string, string> = {};

  if (fullName.length < 2) {
    errors.fullName = 'Please enter your full name.';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please provide a valid business email address.';
  }
  if (phone.replace(/\D/g, '').length < 7) {
    errors.phone = 'Please enter a valid contact phone number.';
  }
  if (company.length < 2) {
    errors.company = 'Please enter your organization name.';
  }
  if (message.length < 10) {
    errors.message = 'Please share at least a brief summary of your requirements.';
  }

  if (Object.keys(errors).length > 0) {
    res.status(400).json({
      ok: false,
      error: 'Validation failed. Please review the highlighted fields.',
      fields: errors,
    });
    return;
  }

  const referenceId = `MZT-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;

  res.status(201).json({
    ok: true,
    referenceId,
    submittedAt: new Date().toISOString(),
    estimatedResponse: 'Under 2 business hours',
    summary: {
      fullName,
      company,
      serviceInterest,
    },
  });
}
