import { useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { CASE_STUDIES, CLIENT_REVIEWS } from '../data/siteData';
import { PageRoute } from '../types';

type ReviewFilter = 'All' | 'IT & Cybersecurity' | 'Voice & Telecom' | 'Cloud & Web';

interface TestimonialsProps {
  onNavigate: (route: PageRoute) => void;
  variant?: 'compact' | 'full';
  surface?: 'white' | 'slate';
}

const FILTER_TABS: ReviewFilter[] = [
  'All',
  'IT & Cybersecurity',
  'Voice & Telecom',
  'Cloud & Web',
];

function matchesReviewFilter(serviceArea: string, filter: ReviewFilter): boolean {
  if (filter === 'All') return true;
  const lower = serviceArea.toLowerCase();
  if (filter === 'IT & Cybersecurity') {
    return lower.includes('managed it') || lower.includes('cybersecurity');
  }
  if (filter === 'Voice & Telecom') {
    return (
      lower.includes('voip') ||
      lower.includes('tem') ||
      lower.includes('avaya') ||
      lower.includes('sip')
    );
  }
  return lower.includes('microsoft') || lower.includes('portal') || lower.includes('cloud');
}

export default function Testimonials({
  onNavigate,
  variant = 'full',
  surface = 'white',
}: TestimonialsProps) {
  const [activeFilter, setActiveFilter] = useState<ReviewFilter>('All');

  const filteredReviews = CLIENT_REVIEWS.filter((review) =>
    matchesReviewFilter(review.serviceArea, activeFilter)
  );
  const displayedReviews =
    variant === 'compact' && activeFilter === 'All'
      ? filteredReviews.slice(0, 3)
      : filteredReviews;

  const successStories = CASE_STUDIES.slice(0, 3);
  const sectionBg = surface === 'white' ? 'bg-white' : 'bg-[#F8FAFC]';
  const cardBg = surface === 'white' ? 'bg-[#F8FAFC]' : 'bg-white';

  return (
    <section className={`py-16 lg:py-24 ${sectionBg} border-b border-slate-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-[#1D4ED8] mb-2">
              Client Reviews & Success Stories
            </p>
            <h2
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F172A]"
              style={{ textWrap: 'balance' }}
            >
              Trusted by Long-Term Business Partners
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Verified feedback and measurable operational outcomes across Managed IT, Cybersecurity, Hosted VoIP, and Microsoft cloud deployments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg">
              {FILTER_TABS.map((tab) => {
                const isActive = activeFilter === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveFilter(tab)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-white text-[#0F172A] shadow-sm'
                        : 'text-slate-600 hover:text-[#0F172A]'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {variant === 'compact' && (
              <button
                type="button"
                onClick={() => onNavigate({ page: 'about' })}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1D4ED8] hover:text-[#1E40AF] whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>All Reviews</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {/* Client Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((review) => (
            <article
              key={review.id}
              className={`${cardBg} border border-slate-200 rounded-xl p-6 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-3">
                  <span className="font-medium text-[#1D4ED8]">{review.serviceArea}</span>
                  <span className="inline-flex items-center gap-1 font-mono text-[#0F172A] tabular-nums">
                    <Star
                      className="w-3.5 h-3.5 fill-amber-500 text-amber-500"
                      aria-hidden="true"
                    />
                    <span>{review.rating}</span>
                  </span>
                </div>
                <blockquote className="text-sm text-slate-700 leading-relaxed">
                  “{review.quote}”
                </blockquote>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <p className="font-display text-sm font-bold text-[#0F172A]">
                  {review.author}
                </p>
                <p className="text-xs text-slate-600 mt-0.5">
                  {review.role} · {review.organization}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">{review.tenure}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Verified Success Stories Highlight Band */}
        <div className="mt-10 bg-[#0F172A] text-white rounded-xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <p className="text-xs font-medium text-blue-300">Measured Client Impact</p>
              <h3 className="font-display text-lg sm:text-xl font-bold mt-1">
                Highlighted Success Stories
              </h3>
            </div>
            <button
              type="button"
              onClick={() => onNavigate({ page: 'portfolio' })}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-300 hover:text-white whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story) => (
              <div
                key={story.slug}
                className="flex flex-col justify-between pt-2 md:pt-0 md:border-r md:last:border-r-0 md:border-slate-800 md:pr-6 md:last:pr-0"
              >
                <div>
                  <p className="font-mono text-base font-semibold text-blue-300 tabular-nums">
                    {story.headlineMetric}
                  </p>
                  <p className="font-display text-sm font-bold text-white mt-1.5">
                    {story.client}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {story.industry} · {story.location}
                  </p>
                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                    {story.summary}
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => onNavigate({ page: 'portfolio', slug: story.slug })}
                    className="inline-flex items-center gap-1 text-xs font-medium text-white hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    <span>Read Success Story</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
