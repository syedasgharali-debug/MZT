import { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { PageRoute } from '../types';

type FaqCategory = 'All' | 'Pricing & Billing' | 'Support Hours' | 'SLAs & Onboarding';

interface FaqItem {
  id: string;
  category: Exclude<FaqCategory, 'All'>;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-pricing',
    category: 'Pricing & Billing',
    question: 'How does MZT Services structure pricing for Managed IT and Voice Services?',
    answer:
      'Managed IT is billed on a predictable, fixed monthly fee based on your active user count, endpoints, and server/network footprint—covering 24/7 monitoring, unlimited remote helpdesk support, automated patch management, and core cybersecurity tooling with no surprise hourly surcharges. Hosted VoIP and 3CX are priced cleanly per extension or concurrent call path, while Telecom Expense Management (TEM) audits identify immediate carrier savings on your existing bills.',
  },
  {
    id: 'faq-hours',
    category: 'Support Hours',
    question: 'What are your support hours, and who answers the phone when we call?',
    answer:
      'Our Service & NOC Desk operates 24/7/365 with 100% live call answering by US-based Tier 1–3 technicians—never automated voicemail trees or outsourced call centers. Standard consultation and billing hours run Monday through Friday from 7:30 AM to 6:30 PM CT, with around-the-clock emergency response and scheduled onsite field engineering across Illinois, Wisconsin, Indiana, North Carolina, and South Carolina.',
  },
  {
    id: 'faq-sla',
    category: 'SLAs & Onboarding',
    question: 'What Service-Level Agreements (SLAs) do you guarantee?',
    answer:
      'Every Managed Services Agreement is backed by published operational benchmarks: under 15-minute average ticket response time, 98% first-call resolution rate, 99.98% managed infrastructure uptime, 99.99% VoIP voice availability, and under 4-minute automated endpoint threat containment via 24/7 Managed Detection & Response (MDR).',
  },
  {
    id: 'faq-co-managed',
    category: 'Pricing & Billing',
    question: 'Can we use MZT Services alongside our existing internal IT manager?',
    answer:
      'Yes. Our Co-Managed IT model is tailored for organizations with an internal IT lead or coordinator. You retain full administrative control while offloading 24/7 after-hours alerting, routine Tier 1–2 user tickets, patch compliance, and security monitoring into one shared RMM and ticketing platform—paying only for the co-managed tier your team needs.',
  },
  {
    id: 'faq-legacy-pbx',
    category: 'SLAs & Onboarding',
    question: 'Do we have to replace our Avaya or Nortel phones to work with MZT Services?',
    answer:
      'No. Backed by over 40 years of voice engineering experience, we maintain legacy Avaya, Nortel, and 3CX on-premises systems with certified parts and programming support. When you are ready to lower monthly carrier bills, we can replace costly copper PRI lines with redundant SIP trunks without replacing working desk phones—or stage a zero-downtime migration to Hosted VoIP.',
  },
  {
    id: 'faq-onboarding',
    category: 'SLAs & Onboarding',
    question: 'How long does onboarding take, and will switching disrupt our team?',
    answer:
      'Standard Managed IT onboarding takes 2 to 4 weeks, beginning with network documentation, agent deployment, Duo MFA rollout, and BDR backup verification completed outside peak business hours. Microsoft 365 migrations and VoIP number porting are scheduled over weekends or off-peak windows so staff start Monday morning with zero disruption.',
  },
];

const FAQ_CATEGORIES: FaqCategory[] = [
  'All',
  'Pricing & Billing',
  'Support Hours',
  'SLAs & Onboarding',
];

interface FAQProps {
  onNavigate: (route: PageRoute) => void;
}

export default function FAQ({ onNavigate }: FAQProps) {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>('All');
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  const visibleItems =
    activeCategory === 'All'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  const handleCategoryChange = (category: FaqCategory) => {
    setActiveCategory(category);
    const nextList =
      category === 'All'
        ? FAQ_ITEMS
        : FAQ_ITEMS.filter((item) => item.category === category);
    if (nextList.length > 0 && !nextList.some((item) => item.id === openId)) {
      setOpenId(nextList[0].id);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Sticky Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <p className="text-xs font-medium text-[#1D4ED8] mb-2">
              Frequently Asked Questions
            </p>
            <h2
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A]"
              style={{ textWrap: 'balance' }}
            >
              Pricing, Support Hours & SLA Commitments
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              Clear answers on how we price Managed IT and Voice services, staff our 24/7 live support desk, and guarantee response times.
            </p>

            <div className="mt-6 pt-6 border-t border-slate-200 space-y-2 text-xs text-slate-600">
              <p>
                <span className="font-semibold text-[#0F172A]">24/7 Service Desk:</span>{' '}
                <span className="font-mono tabular-nums">(773) 555-3400</span>
              </p>
              <p>
                <span className="font-semibold text-[#0F172A]">Response SLA:</span>{' '}
                <span className="font-mono tabular-nums">&lt; 15 min average</span>
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate({ page: 'contact' })}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#1D4ED8] hover:text-[#1E40AF] cursor-pointer"
            >
              <span>Ask a Question With an Engineer</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Right Accordion Column */}
          <div className="lg:col-span-8">
            <div className="mb-6 inline-flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 rounded-lg">
              {FAQ_CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryChange(category)}
                    className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-white text-[#0F172A] shadow-sm'
                        : 'text-slate-600 hover:text-[#0F172A]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="space-y-3">
              {visibleItems.map((item) => {
                const isOpen = openId === item.id;
                const panelId = `${item.id}-panel`;
                return (
                  <div
                    key={item.id}
                    className="bg-white border border-slate-200 rounded-xl overflow-hidden"
                  >
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenId(isOpen ? '' : item.id)}
                        className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 hover:bg-slate-50/60 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1D4ED8]"
                      >
                        <div>
                          <span className="block text-xs font-medium text-[#1D4ED8] mb-1">
                            {item.category}
                          </span>
                          <span className="font-display text-base sm:text-lg font-bold text-[#0F172A] leading-snug">
                            {item.question}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-slate-500 shrink-0 mt-1 transition-transform duration-150 ${
                            isOpen ? 'rotate-180 text-[#1D4ED8]' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </h3>

                    {isOpen && (
                      <div
                        id={panelId}
                        className="px-6 pb-6 pt-2 border-t border-slate-100 text-sm sm:text-base text-slate-600 leading-relaxed"
                      >
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
