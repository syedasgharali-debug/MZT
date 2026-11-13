import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/siteData';
import { PageRoute, PortfolioCategory } from '../types';
import SafeImage from './SafeImage';

interface PortfolioViewProps {
  selectedSlug?: string;
  onNavigate: (route: PageRoute) => void;
}

const CATEGORIES: PortfolioCategory[] = [
  'All',
  'Managed IT',
  'Cybersecurity',
  'VoIP & Telecom',
  'Cloud & Dev',
];

export default function PortfolioView({ selectedSlug, onNavigate }: PortfolioViewProps) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');

  const selectedStudy = selectedSlug
    ? CASE_STUDIES.find((c) => c.slug === selectedSlug) || null
    : null;

  if (selectedStudy) {
    return (
      <div className="bg-[#F8FAFC] min-h-screen">
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() => onNavigate({ page: 'portfolio' })}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-[#0F172A] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to Portfolio</span>
            </button>
            <span className="text-xs text-slate-500">
              {selectedStudy.category} · {selectedStudy.location}
            </span>
          </div>
        </div>

        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-3">
            <span className="font-medium text-[#1D4ED8]">{selectedStudy.client}</span>
            <span aria-hidden="true">·</span>
            <span>{selectedStudy.industry}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">{selectedStudy.timeline}</span>
          </div>

          <h1
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]"
            style={{ textWrap: 'balance' }}
          >
            {selectedStudy.title}
          </h1>

          <div className="mt-8 aspect-[16/9] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
            <SafeImage
              src={selectedStudy.image}
              alt={selectedStudy.imageAlt}
              fallbackLabel={selectedStudy.client}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Verified Outcome Metrics */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {selectedStudy.outcomes.map((o) => (
              <div
                key={o.label}
                className="bg-white border border-slate-200 rounded-xl p-6"
              >
                <p className="font-mono text-2xl sm:text-3xl font-semibold text-[#1D4ED8] tabular-nums">
                  {o.metric}
                </p>
                <p className="text-sm font-semibold text-[#0F172A] mt-1">{o.label}</p>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{o.context}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
            <div>
              <h2 className="font-display text-lg font-bold text-[#0F172A] mb-3">
                Operational Challenge
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {selectedStudy.challenge}
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-[#0F172A] mb-3">
                MZT Engineering Solution
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {selectedStudy.solution}
              </p>
            </div>
          </div>

          <div className="mt-6 bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
            <p className="text-xs font-medium text-slate-500 mb-2">
              Deployed Technologies & Architecture
            </p>
            <p className="text-sm font-medium text-[#0F172A]">
              {selectedStudy.stack.join(' · ')}
            </p>
          </div>

          {/* Client Testimonial */}
          <div className="mt-8 bg-[#0F172A] text-white rounded-xl p-6 sm:p-8">
            <blockquote className="text-base sm:text-lg leading-relaxed text-slate-100">
              “{selectedStudy.testimonial.quote}”
            </blockquote>
            <div className="mt-5 pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-display text-sm font-bold text-white">
                  {selectedStudy.testimonial.author}
                </p>
                <p className="text-xs text-slate-300">
                  {selectedStudy.testimonial.role}, {selectedStudy.testimonial.organization}
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate({ page: 'contact' })}
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-medium text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Plan Similar Deployment</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </article>
      </div>
    );
  }

  const filteredStudies =
    activeCategory === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.category === activeCategory);

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <section className="bg-white border-b border-slate-200 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium text-[#1D4ED8] mb-2">Client Portfolio</p>
          <h1
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A] max-w-3xl"
            style={{ textWrap: 'balance' }}
          >
            Proven Deployments Across Healthcare, Logistics & Manufacturing
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Inspect how MZT Services reduces carrier expenses, hardens endpoints for strict compliance audits, and modernizes multi-site networks.
          </p>

          {/* Interactive Filter Controls */}
          <div className="mt-8 inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
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
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredStudies.map((study) => (
            <article
              key={study.slug}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="aspect-[16/10] bg-slate-100 border-b border-slate-200 overflow-hidden">
                  <SafeImage
                    src={study.image}
                    alt={study.imageAlt}
                    fallbackLabel={study.client}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-2">
                    <span>{study.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{study.client}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{study.timeline}</span>
                  </div>
                  <p className="font-mono text-base font-semibold text-[#1D4ED8] tabular-nums">
                    {study.headlineMetric}
                  </p>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0F172A] mt-1">
                    {study.title}
                  </h2>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {study.summary}
                  </p>

                  <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-3 gap-4">
                    {study.outcomes.map((outcome) => (
                      <div key={outcome.label}>
                        <p className="font-mono text-lg font-semibold text-[#0F172A] tabular-nums">
                          {outcome.metric}
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5">{outcome.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex items-center justify-between">
                <span className="text-xs text-slate-500">{study.location}</span>
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'portfolio', slug: study.slug })}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1D4ED8] hover:text-[#1E40AF] cursor-pointer"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
