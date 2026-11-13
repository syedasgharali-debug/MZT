import { FormEvent, useEffect, useState } from 'react';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/siteData';
import { ContactReceipt } from '../types';

interface ContactFormCardProps {
  preselectedService?: string;
  compact?: boolean;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  serviceInterest: string;
  teamSize: string;
  message: string;
}

export default function ContactFormCard({
  preselectedService,
  compact = false,
}: ContactFormCardProps) {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: preselectedService || SERVICES[0].title,
    teamSize: '25–100 employees',
    message: '',
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [receipt, setReceipt] = useState<ContactReceipt | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setForm((prev) => ({ ...prev, serviceInterest: preselectedService }));
    }
  }, [preselectedService]);

  const validateClient = (): Record<string, string> => {
    const errors: Record<string, string> = {};
    if (form.fullName.trim().length < 2) {
      errors.fullName = 'Please enter your full name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errors.email = 'Please enter a valid business email address.';
    }
    if (form.phone.replace(/\D/g, '').length < 7) {
      errors.phone = 'Please enter a valid 7+ digit phone number.';
    }
    if (form.company.trim().length < 2) {
      errors.company = 'Please enter your organization name.';
    }
    if (form.message.trim().length < 10) {
      errors.message = 'Please share a brief summary of your IT or voice requirements.';
    }
    return errors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    const errors = validateClient();
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok || !data.ok) {
        if (data.fields) {
          setFieldErrors(data.fields);
        }
        setSubmitError(data.error || 'Unable to submit inquiry. Please review the form.');
        return;
      }

      setReceipt({
        referenceId: data.referenceId,
        submittedAt: data.submittedAt,
        estimatedResponse: data.estimatedResponse,
        summary: data.summary,
      });
    } catch {
      setSubmitError('Network error while submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setReceipt(null);
    setFieldErrors({});
    setSubmitError(null);
    setForm({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      serviceInterest: preselectedService || SERVICES[0].title,
      teamSize: '25–100 employees',
      message: '',
    });
  };

  if (receipt) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="text-xs font-medium text-emerald-800">
              Request Confirmed · <span className="font-mono tabular-nums">{receipt.referenceId}</span>
            </p>
            <h3 className="font-display text-xl font-bold text-[#0F172A] mt-1">
              Assessment Request Received
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Thank you, <span className="font-medium text-[#0F172A]">{receipt.summary.fullName}</span>. A senior solutions engineer at MZT Services will review your environment details for{' '}
              <span className="font-medium text-[#0F172A]">{receipt.summary.company}</span> and respond within{' '}
              <span className="font-medium text-[#0F172A]">{receipt.estimatedResponse}</span>.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-xs text-slate-500">Selected Practice</p>
            <p className="font-medium text-[#0F172A] mt-0.5">{receipt.summary.serviceInterest}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Reference Timestamp</p>
            <p className="font-mono text-xs text-[#0F172A] mt-1 tabular-nums">
              {new Date(receipt.submittedAt).toLocaleString()}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={resetForm}
          className="mt-6 px-4 py-2 text-sm font-medium text-[#1D4ED8] hover:text-[#1E40AF] border border-slate-200 hover:border-slate-300 rounded-lg transition-colors cursor-pointer"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8"
    >
      {!compact && (
        <div className="mb-6">
          <h3 className="font-display text-xl font-bold text-[#0F172A]">
            Request a Technical Consultation
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Speak directly with a solutions engineer—no scripted sales handoffs.
          </p>
        </div>
      )}

      {submitError && (
        <div
          role="alert"
          className="mb-5 p-3.5 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2.5 text-sm text-red-800"
        >
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{submitError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="mzt-fullName" className="block text-sm font-medium text-[#0F172A] mb-1.5">
            Full Name
          </label>
          <input
            id="mzt-fullName"
            type="text"
            value={form.fullName}
            onChange={(e) => {
              setForm({ ...form, fullName: e.target.value });
              if (fieldErrors.fullName) setFieldErrors({ ...fieldErrors, fullName: '' });
            }}
            placeholder="Alex Morgan"
            aria-invalid={Boolean(fieldErrors.fullName)}
            className={`w-full min-h-[44px] px-3.5 py-2 text-sm rounded-lg border bg-white text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] ${
              fieldErrors.fullName ? 'border-red-500' : 'border-slate-300'
            }`}
          />
          {fieldErrors.fullName && (
            <p className="mt-1 text-xs text-red-700 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{fieldErrors.fullName}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="mzt-email" className="block text-sm font-medium text-[#0F172A] mb-1.5">
            Work Email
          </label>
          <input
            id="mzt-email"
            type="email"
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
              if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: '' });
            }}
            placeholder="alex@company.com"
            aria-invalid={Boolean(fieldErrors.email)}
            className={`w-full min-h-[44px] px-3.5 py-2 text-sm rounded-lg border bg-white text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] ${
              fieldErrors.email ? 'border-red-500' : 'border-slate-300'
            }`}
          />
          {fieldErrors.email && (
            <p className="mt-1 text-xs text-red-700 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{fieldErrors.email}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="mzt-phone" className="block text-sm font-medium text-[#0F172A] mb-1.5">
            Phone Number
          </label>
          <input
            id="mzt-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => {
              setForm({ ...form, phone: e.target.value });
              if (fieldErrors.phone) setFieldErrors({ ...fieldErrors, phone: '' });
            }}
            placeholder="(847) 555-0142"
            aria-invalid={Boolean(fieldErrors.phone)}
            className={`w-full min-h-[44px] px-3.5 py-2 text-sm rounded-lg border bg-white text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] ${
              fieldErrors.phone ? 'border-red-500' : 'border-slate-300'
            }`}
          />
          {fieldErrors.phone && (
            <p className="mt-1 text-xs text-red-700 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{fieldErrors.phone}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="mzt-company" className="block text-sm font-medium text-[#0F172A] mb-1.5">
            Organization
          </label>
          <input
            id="mzt-company"
            type="text"
            value={form.company}
            onChange={(e) => {
              setForm({ ...form, company: e.target.value });
              if (fieldErrors.company) setFieldErrors({ ...fieldErrors, company: '' });
            }}
            placeholder="Midwest Logistics Inc."
            aria-invalid={Boolean(fieldErrors.company)}
            className={`w-full min-h-[44px] px-3.5 py-2 text-sm rounded-lg border bg-white text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] ${
              fieldErrors.company ? 'border-red-500' : 'border-slate-300'
            }`}
          />
          {fieldErrors.company && (
            <p className="mt-1 text-xs text-red-700 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{fieldErrors.company}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="mzt-service" className="block text-sm font-medium text-[#0F172A] mb-1.5">
            Primary Service
          </label>
          <select
            id="mzt-service"
            value={form.serviceInterest}
            onChange={(e) => setForm({ ...form, serviceInterest: e.target.value })}
            className="w-full min-h-[44px] px-3.5 py-2 text-sm rounded-lg border border-slate-300 bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
          >
            {SERVICES.map((svc) => (
              <option key={svc.id} value={svc.title}>
                {svc.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="mzt-teamSize" className="block text-sm font-medium text-[#0F172A] mb-1.5">
            Team Size
          </label>
          <select
            id="mzt-teamSize"
            value={form.teamSize}
            onChange={(e) => setForm({ ...form, teamSize: e.target.value })}
            className="w-full min-h-[44px] px-3.5 py-2 text-sm rounded-lg border border-slate-300 bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
          >
            <option value="10–25 employees">10–25 employees</option>
            <option value="25–100 employees">25–100 employees</option>
            <option value="100–350 employees">100–350 employees</option>
            <option value="350+ employees">350+ employees</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="mzt-message" className="block text-sm font-medium text-[#0F172A] mb-1.5">
          Project Scope or Support Needs
        </label>
        <textarea
          id="mzt-message"
          rows={compact ? 3 : 4}
          value={form.message}
          onChange={(e) => {
            setForm({ ...form, message: e.target.value });
            if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: '' });
          }}
          placeholder="Tell us about your locations, endpoints, phone system, or upcoming IT priorities..."
          aria-invalid={Boolean(fieldErrors.message)}
          className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] ${
            fieldErrors.message ? 'border-red-500' : 'border-slate-300'
          }`}
        />
        {fieldErrors.message && (
          <p className="mt-1 text-xs text-red-700 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>{fieldErrors.message}</span>
          </p>
        )}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-2.5 text-sm font-medium text-white bg-[#1D4ED8] hover:bg-[#1E40AF] disabled:opacity-60 rounded-lg transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1D4ED8]"
        >
          <span>{isSubmitting ? 'Submitting Request...' : 'Book a Consultation'}</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
        <p className="text-xs text-slate-500">
          Direct engineer response within 2 business hours.
        </p>
      </div>
    </form>
  );
}
