import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Star } from 'lucide-react';
import { CASE_STUDIES, CLIENT_REVIEWS, SERVICES } from '../data/siteData';
import { PageRoute, ServicePillar } from '../types';
import SafeImage from './SafeImage';

interface ServicesViewProps {
  selectedSlug?: string;
  onNavigate: (route: PageRoute) => void;
}

type PillarFilter = 'All' | ServicePillar;

export default function ServicesView({ selectedSlug, onNavigate }: ServicesViewProps) {
  const [pillarFilter, setPillarFilter] = useState<PillarFilter>('All');

  const activeService = selectedSlug
    ? SERVICES.find((s) => s.slug === selectedSlug) || SERVICES[0]
    : null;

  if (activeService) {
    const relatedStudy =
      CASE_STUDIES.find((c) => c.slug === activeService.relatedCaseStudySlug) ||
      CASE_STUDIES[0];

    return (
      <div className="bg-[#F8FAFC] min-h-screen">
        {/* Service Switcher Strip */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between gap-4 mb-3">
              <button
                type="button"
                onClick={() => onNavigate({ page: 'services' })}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-[#0F172A] cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                <span>All 13 IT & Voice Services</span>
              </button>
              <span className="text-xs text-slate-500 font-mono tabular-nums">
                {activeService.pillar} · Service {activeService.number} of 13
              </span>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {SERVICES.map((svc) => {
                const isSelected = svc.slug === activeService.slug;
                return (
                  <button
                    key={svc.id}
                    type="button"
                    onClick={() => onNavigate({ page: 'services', slug: svc.slug })}
                    className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-[#0F172A] text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {svc.number}. {svc.shortTitle}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dedicated Service Page Body */}
        <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
              <div className="lg:col-span-7 flex flex-col justify-center">
                <p className="font-mono text-xs font-medium text-[#1D4ED8] mb-2 tabular-nums">
                  {activeService.pillar} · Practice {activeService.number}
                </p>
                <h1
                  className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A] leading-[1.1]"
                  style={{ textWrap: 'balance' }}
                >
                  {activeService.title}
                </h1>
                <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  {activeService.overview}
                </p>
                <p className="mt-4 text-sm text-slate-500">
                  <span className="font-medium text-[#0F172A]">Built For:</span>{' '}
                  {activeService.idealFor}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      onNavigate({
                        page: 'contact',
                        preselectedService: activeService.title,
                      })
                    }
                    className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 text-sm font-medium text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Book {activeService.shortTitle} Consultation</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="h-64 sm:h-80 lg:h-full min-h-[300px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                  <SafeImage
                    src={activeService.image}
                    alt={activeService.imageAlt}
                    fallbackLabel={activeService.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* SLA Benchmarks Strip */}
            <div className="mt-12 pt-10 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {activeService.slaMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-5"
                >
                  <p className="font-mono text-2xl font-semibold text-[#1D4ED8] tabular-nums">
                    {metric.value}
                  </p>
                  <p className="text-sm text-slate-600 mt-1">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables + Adjacent Case Study */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <h2 className="font-display text-2xl font-bold text-[#0F172A] mb-6">
                Core Deliverables & Architecture
              </h2>
              <div className="space-y-4">
                {activeService.deliverables.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white border border-slate-200 rounded-xl p-6"
                  >
                    <div className="flex items-start gap-3">
                      <Check
                        className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div>
                        <h3 className="font-display text-base font-bold text-[#0F172A]">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-xs font-medium text-slate-500 mb-2">
                  Supported Platforms & Tooling
                </p>
                <p className="text-sm text-[#0F172A] font-medium">
                  {activeService.technologies.join(' · ')}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden sticky top-24">
                <div className="aspect-[4/3] bg-slate-100 border-b border-slate-200">
                  <SafeImage
                    src={relatedStudy.image}
                    alt={relatedStudy.imageAlt}
                    fallbackLabel={relatedStudy.client}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium text-[#1D4ED8]">
                    Verified Case Study · {relatedStudy.industry}
                  </p>
                  <h3 className="font-display text-lg font-bold text-[#0F172A] mt-1.5">
                    {relatedStudy.title}
                  </h3>
                  <p className="font-mono text-sm font-semibold text-[#0F172A] mt-2 tabular-nums">
                    {relatedStudy.headlineMetric}
                  </p>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {relatedStudy.summary}
                  </p>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() =>
                        onNavigate({ page: 'portfolio', slug: relatedStudy.slug })
                      }
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1D4ED8] hover:text-[#1E40AF] cursor-pointer"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const visibleServices =
    pillarFilter === 'All'
      ? SERVICES
      : SERVICES.filter((s) => s.pillar === pillarFilter);

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <section className="bg-white border-b border-slate-200 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium text-[#1D4ED8] mb-2">All 13 Service Practices</p>
          <h1
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A] max-w-3xl"
            style={{ textWrap: 'balance' }}
          >
            IT Services & Voice Services Built for Modern Business
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Browse all 7 IT Services and 6 Voice Services—including Managed IT, Cybersecurity, Cloud, SD-WAN, BDR, Microsoft Services, Web/App Development, Hosted VoIP/UCaaS, 3CX, On-Premises Phones, Avaya/Nortel Maintenance, SIP Trunking, and TEM.
          </p>

          <div className="mt-8 inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg">
            {(['All', 'IT Services', 'Voice Services'] as PillarFilter[]).map((pillar) => {
              const isActive = pillarFilter === pillar;
              return (
                <button
                  key={pillar}
                  type="button"
                  onClick={() => setPillarFilter(pillar)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#0F172A] shadow-sm'
                      : 'text-slate-600 hover:text-[#0F172A]'
                  }`}
                >
                  {pillar === 'All'
                    ? 'All Services (13)'
                    : pillar === 'IT Services'
                    ? 'IT Services (7)'
                    : 'Voice Services (6)'}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleServices.map((service) => (
            <article
              key={service.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="aspect-[16/9] bg-slate-100 border-b border-slate-200 overflow-hidden">
                  <SafeImage
                    src={service.image}
                    alt={service.imageAlt}
                    fallbackLabel={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-mono font-medium text-[#1D4ED8] tabular-nums">
                      {service.number}. {service.pillar}
                    </span>
                    <span className="font-mono tabular-nums">
                      {service.slaMetrics[0].value}
                    </span>
                  </div>
                  <h2 className="font-display text-xl font-bold text-[#0F172A]">
                    {service.title}
                  </h2>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {service.summary}
                  </p>
                  <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                    {service.deliverables.slice(0, 3).map((d) => (
                      <li key={d.title} className="flex items-start gap-2">
                        <Check
                          className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{d.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'services', slug: service.slug })}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1D4ED8] hover:text-[#1E40AF] cursor-pointer"
                >
                  <span>Open Service Page</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    onNavigate({ page: 'contact', preselectedService: service.title })
                  }
                  className="text-xs font-medium text-slate-600 hover:text-[#0F172A] cursor-pointer"
                >
                  Book Consultation
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Client Service Reviews Strip */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <p className="text-xs font-medium text-[#1D4ED8] mb-2">Service Reviews</p>
            <h2 className="font-display text-2xl font-bold text-[#0F172A]">
              What Clients Say About Our IT & Voice Support
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLIENT_REVIEWS.slice(0, 3).map((review) => (
              <article
                key={review.id}
                className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-medium text-[#1D4ED8]">{review.serviceArea}</span>
                    <span className="inline-flex items-center gap-1 font-mono text-[#0F172A] tabular-nums">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" aria-hidden="true" />
                      <span>{review.rating}</span>
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">“{review.quote}”</p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <p className="font-display text-sm font-bold text-[#0F172A]">{review.author}</p>
                  <p className="text-xs text-slate-600">
                    {review.role} · {review.organization}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
