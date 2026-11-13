import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import {
  ABOUT_CONTENT,
  ABOUT_TEAM_IMAGE,
  BLOG_POSTS,
  CASE_STUDIES,
  COMPANY_STATS,
  HERO_IMAGE,
  INDUSTRIES_SERVED,
  SERVICES,
} from '../data/siteData';
import { PageRoute } from '../types';
import SafeImage from './SafeImage';
import ContactFormCard from './ContactFormCard';
import Testimonials from './Testimonials';
import FAQ from './FAQ';

interface HomeViewProps {
  onNavigate: (route: PageRoute) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const itServices = SERVICES.filter((s) => s.pillar === 'IT Services');
  const voiceServices = SERVICES.filter((s) => s.pillar === 'Voice Services');
  const featuredStudies = CASE_STUDIES.slice(0, 3);
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  return (
    <div>
      {/* Hero Split Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <p className="text-xs font-medium tracking-wide text-[#1D4ED8] mb-3">
                Business Technology & Voice Solutions
              </p>
              <h1
                className="font-display font-bold tracking-tight text-[#0F172A] leading-[1.08]"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', textWrap: 'balance' }}
              >
                Managed IT Services & Enterprise Voice Built for Reliability
              </h1>
              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Backed by over 40 years of engineering reliability, MZT Services delivers Managed IT, Cybersecurity, Cloud, SD-WAN, BDR, Microsoft Services, Web/App Development, Hosted VoIP, 3CX, Avaya/Nortel maintenance, SIP Trunking, and TEM across Illinois, North Carolina, South Carolina, Wisconsin, and Indiana.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'contact' })}
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 text-sm font-medium text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1D4ED8]"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'about' })}
                  className="inline-flex items-center justify-center gap-1.5 min-h-[44px] px-4 py-3 text-sm font-medium text-[#0F172A] hover:text-[#1D4ED8] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>About MZT Services</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#1D4ED8]" aria-hidden="true" />
                  <span>100% live call answering</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#1D4ED8]" aria-hidden="true" />
                  <span>IT & Voice under one roof</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#1D4ED8]" aria-hidden="true" />
                  <span>98% first-call resolution</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-64 sm:h-80 lg:h-full min-h-[340px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <SafeImage
                  src={HERO_IMAGE}
                  alt="MZT Services operations and engineering center"
                  fallbackLabel="MZT Services Engineering Operations"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* BTS-Aligned 4-column Reliability Strip */}
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

      {/* Complete Two-Pillar Services Catalog (All 13 Services) */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-xs font-medium text-[#1D4ED8] mb-2">Complete Service Catalog</p>
              <h2
                className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F172A]"
                style={{ textWrap: 'balance' }}
              >
                All 13 IT Infrastructure & Business Voice Services
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate({ page: 'services' })}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1D4ED8] hover:text-[#1E40AF] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Open Full Service Directory</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Pillar 1: IT Services (7) */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3 mb-6">
              <h3 className="font-display text-lg font-bold text-[#0F172A]">
                IT Services (7 Specialized Practices)
              </h3>
              <span className="text-xs text-slate-500">
                Managed IT · Cybersecurity · Cloud · SD-WAN · BDR · Microsoft · Web & App Dev
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itServices.map((service, idx) => (
                <article
                  key={service.id}
                  className={`bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-slate-300 transition-colors ${
                    idx === 0 ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 text-xs text-slate-500 mb-2.5">
                      <span className="font-mono font-medium text-[#1D4ED8] tabular-nums">
                        {service.number}. {service.pillar}
                      </span>
                      <span className="font-mono tabular-nums">
                        {service.slaMetrics[0].value}
                      </span>
                    </div>
                    <h4 className="font-display text-lg font-bold text-[#0F172A]">
                      {service.title}
                    </h4>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {service.summary}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 truncate max-w-[190px]">
                      {service.technologies.slice(0, 2).join(' · ')}
                    </span>
                    <button
                      type="button"
                      onClick={() => onNavigate({ page: 'services', slug: service.slug })}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0F172A] hover:text-[#1D4ED8] shrink-0 cursor-pointer"
                    >
                      <span>View Page</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Pillar 2: Voice Services (6) */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3 mb-6">
              <h3 className="font-display text-lg font-bold text-[#0F172A]">
                Voice Services (6 Telephony & Expense Practices)
              </h3>
              <span className="text-xs text-slate-500">
                Hosted VoIP/UCaaS · 3CX · On-Premises · Avaya/Nortel/3CX · SIP Trunking · TEM
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {voiceServices.map((service) => (
                <article
                  key={service.id}
                  className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-slate-300 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 text-xs text-slate-500 mb-2.5">
                      <span className="font-mono font-medium text-[#1D4ED8] tabular-nums">
                        {service.number}. {service.pillar}
                      </span>
                      <span className="font-mono tabular-nums">
                        {service.slaMetrics[0].value}
                      </span>
                    </div>
                    <h4 className="font-display text-lg font-bold text-[#0F172A]">
                      {service.title}
                    </h4>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {service.summary}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 truncate max-w-[190px]">
                      {service.technologies.slice(0, 2).join(' · ')}
                    </span>
                    <button
                      type="button"
                      onClick={() => onNavigate({ page: 'services', slug: service.slug })}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0F172A] hover:text-[#1D4ED8] shrink-0 cursor-pointer"
                    >
                      <span>View Page</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About MZT Services Preview Band */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-5">
            <div className="h-64 sm:h-80 lg:h-full min-h-[280px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <SafeImage
                src={ABOUT_TEAM_IMAGE}
                alt="MZT Services systems engineers collaborating on client infrastructure"
                fallbackLabel="MZT Services Engineering Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-xs font-medium text-[#1D4ED8] mb-2">About MZT Services</p>
            <h2
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A]"
              style={{ textWrap: 'balance' }}
            >
              {ABOUT_CONTENT.headline}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              {ABOUT_CONTENT.storyParagraphs[0]}
            </p>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              {ABOUT_CONTENT.storyParagraphs[1]}
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => onNavigate({ page: 'about' })}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1D4ED8] hover:text-[#1E40AF] cursor-pointer"
              >
                <span>Read Our Full Story & Operating Principles</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served (All 12 Sectors from btssolutions.us) */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-medium text-[#1D4ED8] mb-2">Industries Served</p>
            <h2
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A]"
              style={{ textWrap: 'balance' }}
            >
              Tailored IT & Voice Support Across 12 Core Sectors
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {INDUSTRIES_SERVED.map((sector) => (
              <div
                key={sector.name}
                className="bg-white border border-slate-200 rounded-xl p-5"
              >
                <h3 className="font-display text-sm font-bold text-[#0F172A]">
                  {sector.name}
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                  {sector.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews & Success Stories */}
      <Testimonials onNavigate={onNavigate} variant="compact" surface="white" />

      {/* Featured Portfolio / Proof of Impact */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-xs font-medium text-[#1D4ED8] mb-2">Verified Deployments</p>
              <h2
                className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F172A]"
                style={{ textWrap: 'balance' }}
              >
                Selected Infrastructure & Voice Portfolio
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate({ page: 'portfolio' })}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1D4ED8] hover:text-[#1E40AF] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Browse Full Portfolio</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredStudies.map((study) => (
              <article
                key={study.slug}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] bg-slate-200 overflow-hidden border-b border-slate-200">
                    <SafeImage
                      src={study.image}
                      alt={study.imageAlt}
                      fallbackLabel={study.client}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <span>{study.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{study.industry}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{study.timeline}</span>
                    </div>
                    <p className="font-mono text-sm font-semibold text-[#1D4ED8] tabular-nums mb-1.5">
                      {study.headlineMetric}
                    </p>
                    <h3 className="font-display text-lg font-bold text-[#0F172A] leading-snug">
                      {study.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                      {study.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3">
                  <button
                    type="button"
                    onClick={() => onNavigate({ page: 'portfolio', slug: study.slug })}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0F172A] hover:text-[#1D4ED8] transition-colors cursor-pointer"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-xs font-medium text-[#1D4ED8] mb-2">MZT Blog</p>
              <h2
                className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F172A]"
                style={{ textWrap: 'balance' }}
              >
                Articles on Security, Cloud & Telecom Spend
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate({ page: 'blog' })}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1D4ED8] hover:text-[#1E40AF] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Read All Blog Posts</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-3">
                    <span className="font-medium text-[#1D4ED8]">{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.publishedAt}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#0F172A] leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-500">{post.author.name}</span>
                  <button
                    type="button"
                    onClick={() => onNavigate({ page: 'blog', slug: post.slug })}
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#0F172A] hover:text-[#1D4ED8] cursor-pointer"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <FAQ onNavigate={onNavigate} />

      {/* Embedded Consultation Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-medium text-[#1D4ED8] mb-2">Book a Consultation</p>
              <h2
                className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A]"
                style={{ textWrap: 'balance' }}
              >
                Schedule Your IT, Security, or Voice Assessment
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether you are auditing telecom bills via TEM, deploying Duo MFA and BDR, migrating Microsoft 365, or maintaining an Avaya/Nortel system, our engineers deliver clear answers and fixed monthly pricing.
              </p>

              <div className="mt-8 space-y-4 pt-6 border-t border-slate-200 text-sm">
                <div>
                  <p className="font-medium text-[#0F172A]">What Your Consultation Covers</p>
                  <ul className="mt-3 space-y-2.5 text-slate-600">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>External perimeter, DNS & Dark Web security posture review</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Line-by-line Telecom Expense Management (TEM) & SIP savings audit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Fixed-fee SLA proposal tailored to your locations and staff</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactFormCard compact />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
