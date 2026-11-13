import { ArrowRight, Check } from 'lucide-react';
import {
  ABOUT_CONTENT,
  ABOUT_TEAM_IMAGE,
  COMPANY_STATS,
  INDUSTRIES_SERVED,
} from '../data/siteData';
import { PageRoute } from '../types';
import SafeImage from './SafeImage';
import Testimonials from './Testimonials';

interface AboutViewProps {
  onNavigate: (route: PageRoute) => void;
}

export default function AboutView({ onNavigate }: AboutViewProps) {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Corporate About Hero */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <p className="text-xs font-medium text-[#1D4ED8] mb-3">
                About MZT Services
              </p>
              <h1
                className="font-display font-bold tracking-tight text-[#0F172A] leading-[1.1]"
                style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.25rem)', textWrap: 'balance' }}
              >
                {ABOUT_CONTENT.headline}
              </h1>
              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                {ABOUT_CONTENT.lead}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'contact' })}
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 text-sm font-medium text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'services' })}
                  className="inline-flex items-center justify-center min-h-[44px] px-4 py-3 text-sm font-medium text-[#0F172A] hover:text-[#1D4ED8] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Explore All 13 Services
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-64 sm:h-80 lg:h-full min-h-[320px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <SafeImage
                  src={ABOUT_TEAM_IMAGE}
                  alt="MZT Services senior engineering team collaborating over network and cloud architecture"
                  fallbackLabel="MZT Services Engineering Leadership"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* BTS-Aligned Reliability Metrics */}
          <div className="mt-12 pt-10 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {COMPANY_STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-2xl sm:text-3xl font-semibold text-[#1D4ED8] tabular-nums">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-[#0F172A] mt-1">{stat.label}</p>
                <p className="text-xs text-slate-500 mt-0.5">{stat.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story & Commitment */}
      <section className="py-14 lg:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium text-[#1D4ED8] mb-2">Who We Are</p>
            <h2
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A]"
              style={{ textWrap: 'balance' }}
            >
              A Dedicated Technology Partner Focused on Trust, Value & Uptime
            </h2>
            <div className="mt-6 space-y-2.5 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" aria-hidden="true" />
                <span>All 7 IT Services & 6 Voice Services unified under one roof</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" aria-hidden="true" />
                <span>Direct US-based Tier 1–3 engineers—zero outsourced call queues</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" aria-hidden="true" />
                <span>Legacy Avaya/Nortel maintenance alongside modern 3CX & Microsoft 365</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4">
            {ABOUT_CONTENT.storyParagraphs.map((paragraph, index) => (
              <p key={index} className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-14 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-medium text-[#1D4ED8] mb-2">How We Operate</p>
            <h2
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A]"
              style={{ textWrap: 'balance' }}
            >
              Why Organizations Stay With MZT Services Long-Term
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ABOUT_CONTENT.principles.map((item) => (
              <div
                key={item.number}
                className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 sm:p-7"
              >
                <p className="font-mono text-xs font-medium text-[#1D4ED8] tabular-nums mb-2">
                  {item.number}. Operating Standard
                </p>
                <h3 className="font-display text-lg font-bold text-[#0F172A]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews & Success Stories */}
      <Testimonials onNavigate={onNavigate} variant="full" surface="slate" />

      {/* Industries Served + Regional Offices */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <div className="max-w-2xl mb-8">
              <p className="text-xs font-medium text-[#1D4ED8] mb-2">Industries We Support</p>
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">
                12 Core Verticals Across the Midwest & Southeast
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {INDUSTRIES_SERVED.map((sector) => (
                <div
                  key={sector.name}
                  className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-4"
                >
                  <p className="font-display text-sm font-bold text-[#0F172A]">{sector.name}</p>
                  <p className="text-xs text-slate-600 mt-1">{sector.focus}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-8 border-t border-slate-200">
            <div className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 sm:p-8">
              <p className="text-xs font-medium text-[#1D4ED8] mb-2">Service Footprint</p>
              <h3 className="font-display text-2xl font-bold text-[#0F172A]">
                Regional Offices & Field Coverage
              </h3>
              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                Serving Illinois, Wisconsin, Indiana, North Carolina, and South Carolina with direct onsite engineering dispatch and 24/7 remote operations.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-5 border-t border-slate-200">
                {ABOUT_CONTENT.serviceFootprint.map((hub) => (
                  <div key={hub.region}>
                    <p className="font-display text-sm font-bold text-[#0F172A]">
                      {hub.region}
                    </p>
                    <p className="text-sm text-slate-600 mt-1">{hub.address}</p>
                    <p className="text-xs text-slate-500 mt-1">{hub.states}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0F172A] text-white rounded-xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <p className="text-xs font-medium text-blue-300 mb-2">Ready to Switch?</p>
                <h3 className="font-display text-xl font-bold">
                  Consolidate Your IT & Voice Systems With One Accountable Team
                </h3>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  Request a no-obligation infrastructure, security, or telecom expense review from our senior engineers.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate({ page: 'contact' })}
                className="mt-6 inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-medium text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
