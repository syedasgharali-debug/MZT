import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { ABOUT_CONTENT, DEPARTMENT_CONTACTS } from '../data/siteData';
import ContactFormCard from './ContactFormCard';

interface ContactViewProps {
  preselectedService?: string;
}

export default function ContactView({ preselectedService }: ContactViewProps) {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <section className="bg-white border-b border-slate-200 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium text-[#1D4ED8] mb-2">Contact MZT Services</p>
          <h1
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A] max-w-3xl"
            style={{ textWrap: 'balance' }}
          >
            Book a Consultation or Reach Our Support Desks
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Connect directly with our Service, Sales, or Accounting departments—or request a tailored Managed IT, Cybersecurity, VoIP, or Telecom Expense Management assessment below.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <ContactFormCard preselectedService={preselectedService} />
          </div>

          <div className="lg:col-span-5 space-y-6">
            {/* Departmental Phone & Email Contacts matching btssolutions.us */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
              <h2 className="font-display text-lg font-bold text-[#0F172A] mb-5">
                Departmental Contacts
              </h2>

              <div className="space-y-5 text-sm">
                {DEPARTMENT_CONTACTS.map((dept) => (
                  <div
                    key={dept.department}
                    className="pb-4 last:pb-0 border-b last:border-b-0 border-slate-100"
                  >
                    <p className="font-semibold text-[#0F172A]">{dept.department}</p>
                    <div className="mt-1.5 space-y-1 text-slate-600">
                      <p className="inline-flex items-center gap-2 font-mono tabular-nums">
                        <Phone className="w-3.5 h-3.5 text-[#1D4ED8]" aria-hidden="true" />
                        <span>{dept.phone}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-[#1D4ED8]" aria-hidden="true" />
                        <span>{dept.email}</span>
                      </p>
                      <p className="flex items-center gap-2 text-xs text-slate-500">
                        <Clock className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                        <span>{dept.hours}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
              <h2 className="font-display text-lg font-bold text-[#0F172A] mb-5">
                Corporate & Regional Offices
              </h2>
              <div className="space-y-5 text-sm">
                {ABOUT_CONTENT.serviceFootprint.map((hub) => (
                  <div key={hub.region} className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-medium text-[#0F172A]">{hub.region}</p>
                      <p className="text-slate-600 mt-0.5">{hub.address}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{hub.states}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
