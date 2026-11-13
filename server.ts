import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ContactPayload {
  fullName?: string;
  email?: string;
  phone?: string;
  company?: string;
  serviceInterest?: string;
  teamSize?: string;
  message?: string;
}

interface StoredInquiry {
  referenceId: string;
  submittedAt: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  serviceInterest: string;
  teamSize: string;
  message: string;
}

const recentInquiries: StoredInquiry[] = [];

async function startServer() {
  const app = express();
  const port = Number(process.env.PORT) || 3000;

  app.use(express.json());

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', service: 'mzt-services-web' });
  });

  app.post('/api/contact', (req, res) => {
    const body = (req.body || {}) as ContactPayload;
    const fullName = (body.fullName || '').trim();
    const email = (body.email || '').trim();
    const phone = (body.phone || '').trim();
    const company = (body.company || '').trim();
    const serviceInterest = (body.serviceInterest || 'Managed IT Services').trim();
    const teamSize = (body.teamSize || '25-100 employees').trim();
    const message = (body.message || '').trim();

    const errors: Record<string, string> = {};

    if (fullName.length < 2) {
      errors.fullName = 'Please enter your full name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please provide a valid business email address.';
    }
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 7) {
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
    const record: StoredInquiry = {
      referenceId,
      submittedAt: new Date().toISOString(),
      fullName,
      email,
      phone,
      company,
      serviceInterest,
      teamSize,
      message,
    };

    recentInquiries.unshift(record);
    if (recentInquiries.length > 50) {
      recentInquiries.pop();
    }

    res.status(201).json({
      ok: true,
      referenceId: record.referenceId,
      submittedAt: record.submittedAt,
      estimatedResponse: 'Under 2 business hours',
      summary: {
        fullName: record.fullName,
        company: record.company,
        serviceInterest: record.serviceInterest,
      },
    });
  });

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`MZT Services server listening on http://0.0.0.0:${port}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start MZT Services server:', err);
  process.exit(1);
});
