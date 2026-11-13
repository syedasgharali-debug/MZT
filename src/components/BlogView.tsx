import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Search } from 'lucide-react';
import { BLOG_POSTS } from '../data/siteData';
import { BlogCategory, PageRoute } from '../types';
import SafeImage from './SafeImage';

interface BlogViewProps {
  selectedSlug?: string;
  onNavigate: (route: PageRoute) => void;
}

const BLOG_CATEGORIES: BlogCategory[] = [
  'All',
  'Cybersecurity',
  'Cloud & M365',
  'Voice & VoIP',
  'IT Strategy',
];

export default function BlogView({ selectedSlug, onNavigate }: BlogViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const activePost = selectedSlug
    ? BLOG_POSTS.find((p) => p.slug === selectedSlug) || null
    : null;

  if (activePost) {
    const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== activePost.slug).slice(0, 2);

    return (
      <div className="bg-[#F8FAFC] min-h-screen">
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() => onNavigate({ page: 'blog' })}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-[#0F172A] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to All Insights</span>
            </button>
            <span className="text-xs text-slate-500">
              {activePost.category} · {activePost.readTime}
            </span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <header>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-3">
              <span className="font-medium text-[#1D4ED8]">{activePost.category}</span>
              <span aria-hidden="true">·</span>
              <span>{activePost.publishedAt}</span>
              <span aria-hidden="true">·</span>
              <span>{activePost.readTime}</span>
            </div>
            <h1
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] leading-[1.15]"
              style={{ textWrap: 'balance' }}
            >
              {activePost.title}
            </h1>
            <div className="mt-5 pb-6 border-b border-slate-200">
              <p className="text-sm font-semibold text-[#0F172A]">{activePost.author.name}</p>
              <p className="text-xs text-slate-500 mt-0.5">{activePost.author.role}</p>
            </div>
          </header>

          <div className="mt-8 aspect-[16/9] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
            <SafeImage
              src={activePost.image}
              alt={activePost.imageAlt}
              fallbackLabel={activePost.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Executive Key Takeaways */}
          <div className="mt-8 bg-white border border-slate-200 rounded-xl p-6 sm:p-7">
            <h2 className="font-display text-sm font-bold text-[#0F172A] mb-3">
              Executive Summary
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-700">
              {activePost.keyTakeaways.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <Check
                    className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Body */}
          <div className="mt-10 space-y-8 max-w-[68ch]">
            {activePost.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0F172A] mb-3">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-base text-slate-700 leading-[1.7]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* CTA & Related Reading */}
          <div className="mt-12 pt-10 border-t border-slate-200">
            <div className="bg-[#0F172A] text-white rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-lg font-bold">
                  Need an engineering review of your environment?
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  Book a direct technical assessment with our operations team.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate({ page: 'contact' })}
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-medium text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Schedule Assessment</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-12">
              <h3 className="font-display text-lg font-bold text-[#0F172A] mb-5">
                Further Reading
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs text-slate-500 mb-2">
                        <span className="font-medium text-[#1D4ED8]">{post.category}</span>
                        <span aria-hidden="true"> · </span>
                        <span>{post.readTime}</span>
                      </div>
                      <h4 className="font-display text-base font-bold text-[#0F172A]">
                        {post.title}
                      </h4>
                    </div>
                    <button
                      type="button"
                      onClick={() => onNavigate({ page: 'blog', slug: post.slug })}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#0F172A] hover:text-[#1D4ED8] cursor-pointer"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesQuery =
      !normalizedQuery ||
      post.title.toLowerCase().includes(normalizedQuery) ||
      post.excerpt.toLowerCase().includes(normalizedQuery) ||
      post.category.toLowerCase().includes(normalizedQuery);
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <section className="bg-white border-b border-slate-200 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium text-[#1D4ED8] mb-2">MZT Insights & Blog</p>
          <h1
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A] max-w-3xl"
            style={{ textWrap: 'balance' }}
          >
            Practical Guides on IT Operations, Security & Telecom
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Technical briefings written by MZT Services engineers for operations leaders, CFOs, and internal IT managers.
          </p>

          <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg">
              {BLOG_CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
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

            <div className="relative w-full md:w-72">
              <Search
                className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search insights..."
                aria-label="Search blog articles"
                className="w-full min-h-[40px] pl-9 pr-3.5 py-2 text-sm rounded-lg border border-slate-300 bg-white text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-xl p-10 text-center">
              <p className="text-base font-medium text-[#0F172A]">
                No articles match “{searchQuery}”.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-4 px-4 py-2 text-sm font-medium text-[#1D4ED8] hover:text-[#1E40AF] cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-colors"
                >
                  <div>
                    <div className="aspect-[16/9] bg-slate-100 border-b border-slate-200 overflow-hidden">
                      <SafeImage
                        src={post.image}
                        alt={post.imageAlt}
                        fallbackLabel={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 sm:p-8">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-2.5">
                        <span className="font-medium text-[#1D4ED8]">{post.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{post.publishedAt}</span>
                        <span aria-hidden="true">·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0F172A] leading-snug">
                        {post.title}
                      </h2>
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-[#0F172A]">
                        {post.author.name}
                      </p>
                      <p className="text-xs text-slate-500">{post.author.role}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onNavigate({ page: 'blog', slug: post.slug })}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1D4ED8] hover:text-[#1E40AF] shrink-0 cursor-pointer"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
