import { useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { ABOUT_CONTENT, DEPARTMENT_CONTACTS, SERVICES } from '../data/siteData';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

type LegalModalType = 'privacy' | 'terms' | 'cookies' | null;

export default function Footer({ onNavigate }: FooterProps) {
  const [legalModal, setLegalModal] = useState<LegalModalType>(null);
  const [functionalCookies, setFunctionalCookies] = useState(true);
  const [analyticsCookies, setAnalyticsCookies] = useState(false);
  const [doNotSellOptOut, setDoNotSellOptOut] = useState(true);
  const [savedNotice, setSavedNotice] = useState(false);

  const itServices = SERVICES.filter((s) => s.pillar === 'IT Services');
  const voiceServices = SERVICES.filter((s) => s.pillar === 'Voice Services');

  const handleSavePrivacyPrefs = () => {
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      setLegalModal(null);
    }, 900);
  };

  return (
    <footer className="bg-[#0F172A] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Top Footer Band */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          <div className="lg:col-span-1">
            <button
              type="button"
              onClick={() => onNavigate({ page: 'home' })}
              className="font-display text-lg font-bold tracking-tight text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
            >
              MZT Services
            </button>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Over 40 years of proven IT and voice reliability for businesses across Illinois, North Carolina, South Carolina, Wisconsin, and Indiana.
            </p>
            <p className="mt-4 text-xs text-slate-400">
              +99% Client Retention · 100% Live Answering
            </p>
            <button
              type="button"
              onClick={() => onNavigate({ page: 'contact' })}
              className="mt-5 inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              Book a Consultation
            </button>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">IT Services</h3>
            <ul className="space-y-2.5 text-sm">
              {itServices.map((service) => (
                <li key={service.id}>
                  <a
                    href={`#services/${service.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate({ page: 'services', slug: service.slug });
                    }}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Voice Services</h3>
            <ul className="space-y-2.5 text-sm">
              {voiceServices.map((service) => (
                <li key={service.id}>
                  <a
                    href={`#services/${service.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate({ page: 'services', slug: service.slug });
                    }}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {service.shortTitle}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate({ page: 'home' });
                  }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate({ page: 'about' });
                  }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate({ page: 'services' });
                  }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  All Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate({ page: 'portfolio' });
                  }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate({ page: 'blog' });
                  }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate({ page: 'contact' });
                  }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Locations & Desks</h3>
            <div className="space-y-4 text-xs text-slate-400">
              {ABOUT_CONTENT.serviceFootprint.map((hub) => (
                <div key={hub.region}>
                  <p className="text-white font-medium">{hub.region}</p>
                  <p className="mt-0.5 leading-relaxed">{hub.address}</p>
                </div>
              ))}
              <div className="pt-2 border-t border-slate-800 space-y-1.5 font-mono text-slate-300 tabular-nums">
                {DEPARTMENT_CONTACTS.map((dept) => (
                  <p key={dept.department}>
                    <span className="text-slate-400 font-sans">
                      {dept.department.split(' ')[0]}:{' '}
                    </span>
                    {dept.phone}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Privacy Compliance Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} MZT Services LLC. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <button
              type="button"
              onClick={() => setLegalModal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => setLegalModal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => setLegalModal('cookies')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Cookie & Opt-Out Preferences
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Privacy / Terms / Opt-Out Preferences Modal */}
      {legalModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="mzt-legal-modal-title"
          className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="bg-white text-[#0F172A] border border-slate-200 rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
              <h2 id="mzt-legal-modal-title" className="font-display text-xl font-bold">
                {legalModal === 'privacy'
                  ? 'Privacy Policy & Data Protection'
                  : legalModal === 'terms'
                  ? 'Terms of Service'
                  : 'Cookie & Privacy Opt-Out Preferences'}
              </h2>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                aria-label="Close modal"
                className="p-1.5 rounded-lg text-slate-500 hover:text-[#0F172A] hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {legalModal === 'privacy' && (
              <div className="mt-4 space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  MZT Services LLC respects your privacy and collects business contact information solely to respond to IT, cybersecurity, and voice service inquiries.
                </p>
                <p>
                  We do not sell personal contact records to third-party data brokers. Under applicable privacy frameworks (including CPRA), you may request access, data portability, or deletion of submitted contact records at any time by emailing{' '}
                  <span className="font-medium text-[#0F172A]">privacy@mztservices.com</span>.
                </p>
              </div>
            )}

            {legalModal === 'terms' && (
              <div className="mt-4 space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  Service Level Agreements (SLAs), response windows, and Managed IT or Hosted VoIP pricing are governed by your executed Master Services Agreement (MSA) with MZT Services LLC.
                </p>
                <p>
                  All technical consultations and telecom audits provided prior to contract execution are strictly confidential.
                </p>
              </div>
            )}

            {legalModal === 'cookies' && (
              <div className="mt-4 space-y-4 text-sm text-slate-600">
                <p className="leading-relaxed">
                  Manage technical, functional, and privacy opt-out preferences for this browser session.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <div>
                      <p className="font-medium text-[#0F172A]">Essential Technical Cookies</p>
                      <p className="text-xs text-slate-500">Required for navigation and form security</p>
                    </div>
                    <span className="text-xs font-medium text-slate-500">Always Active</span>
                  </div>

                  <label className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg cursor-pointer">
                    <div>
                      <p className="font-medium text-[#0F172A]">Functional Preferences</p>
                      <p className="text-xs text-slate-500">Remembers selected service inquiries</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={functionalCookies}
                      onChange={(e) => setFunctionalCookies(e.target.checked)}
                      className="w-4 h-4 accent-[#1D4ED8]"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg cursor-pointer">
                    <div>
                      <p className="font-medium text-[#0F172A]">Site Analytics</p>
                      <p className="text-xs text-slate-500">Aggregated page performance metrics</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={analyticsCookies}
                      onChange={(e) => setAnalyticsCookies(e.target.checked)}
                      className="w-4 h-4 accent-[#1D4ED8]"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg cursor-pointer">
                    <div>
                      <p className="font-medium text-[#0F172A]">
                        Opt Out of Personal Data Sharing (CPRA)
                      </p>
                      <p className="text-xs text-slate-500">
                        Restricts non-essential third-party sharing
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={doNotSellOptOut}
                      onChange={(e) => setDoNotSellOptOut(e.target.checked)}
                      className="w-4 h-4 accent-[#1D4ED8]"
                    />
                  </label>
                </div>

                {savedNotice && (
                  <p className="text-xs text-emerald-700 font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                    <span>Preferences saved.</span>
                  </p>
                )}

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleSavePrivacyPrefs}
                    className="px-4 py-2 text-sm font-medium text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors cursor-pointer"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            )}

            {legalModal !== 'cookies' && (
              <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
                <button
                  type="button"
                  onClick={() => setLegalModal(null)}
                  className="px-4 py-2 text-sm font-medium text-white bg-[#0F172A] hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
