import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { SERVICES } from '../data/siteData';
import { PageRoute } from '../types';

interface NavbarProps {
  currentPage: PageRoute['page'];
  onNavigate: (route: PageRoute) => void;
}

const NAV_ITEMS: { label: string; page: PageRoute['page'] }[] = [
  { label: 'About', page: 'about' },
  { label: 'Services', page: 'services' },
  { label: 'Portfolio', page: 'portfolio' },
  { label: 'Blog', page: 'blog' },
  { label: 'Contact', page: 'contact' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const menuContainerRef = useRef<HTMLDivElement>(null);

  const itServices = SERVICES.filter((s) => s.pillar === 'IT Services');
  const voiceServices = SERVICES.filter((s) => s.pillar === 'Voice Services');

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuContainerRef.current &&
        !menuContainerRef.current.contains(event.target as Node)
      ) {
        setServicesMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesMenuOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleLinkClick = (route: PageRoute) => {
    onNavigate(route);
    setServicesMenuOpen(false);
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header
      ref={menuContainerRef}
      className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick({ page: 'home' });
          }}
          className="font-display text-lg font-bold tracking-tight text-[#0F172A] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] rounded"
        >
          MZT Services
        </a>

        {/* Zone 2: 5 concise single-line nav links with interactive Services mega-menu */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.page;

            if (item.page === 'services') {
              return (
                <div
                  key={item.page}
                  className="relative"
                  onMouseEnter={() => setServicesMenuOpen(true)}
                  onMouseLeave={() => setServicesMenuOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={servicesMenuOpen}
                    aria-haspopup="true"
                    onClick={() => setServicesMenuOpen((prev) => !prev)}
                    className={`relative py-2 inline-flex items-center gap-1 text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] rounded ${
                      isActive || servicesMenuOpen
                        ? 'text-[#0F172A]'
                        : 'text-slate-600 hover:text-[#0F172A]'
                    }`}
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-150 ${
                        servicesMenuOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute left-0 right-0 bottom-0.5 h-0.5 bg-[#1D4ED8]"
                      />
                    )}
                  </button>

                  {servicesMenuOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[620px] max-w-[90vw] z-50">
                      <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-6">
                        <div className="grid grid-cols-2 gap-8">
                          <div>
                            <p className="text-xs font-semibold text-[#1D4ED8] pb-2 mb-3 border-b border-slate-100">
                              IT Services
                            </p>
                            <ul className="space-y-1.5">
                              {itServices.map((svc) => (
                                <li key={svc.id}>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleLinkClick({ page: 'services', slug: svc.slug })
                                    }
                                    className="w-full text-left px-2.5 py-1.5 rounded-md text-sm text-slate-700 hover:text-[#0F172A] hover:bg-slate-50 transition-colors cursor-pointer"
                                  >
                                    {svc.title}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <p className="text-xs font-semibold text-[#1D4ED8] pb-2 mb-3 border-b border-slate-100">
                              Voice Services
                            </p>
                            <ul className="space-y-1.5">
                              {voiceServices.map((svc) => (
                                <li key={svc.id}>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleLinkClick({ page: 'services', slug: svc.slug })
                                    }
                                    className="w-full text-left px-2.5 py-1.5 rounded-md text-sm text-slate-700 hover:text-[#0F172A] hover:bg-slate-50 transition-colors cursor-pointer"
                                  >
                                    {svc.shortTitle}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-xs text-slate-500">
                            40+ years of unified IT & Voice reliability
                          </span>
                          <button
                            type="button"
                            onClick={() => handleLinkClick({ page: 'services' })}
                            className="text-xs font-semibold text-[#1D4ED8] hover:text-[#1E40AF] cursor-pointer"
                          >
                            View All 13 Services →
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={item.page}
                href={`#${item.page}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick({ page: item.page });
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-2 text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] rounded ${
                  isActive
                    ? 'text-[#0F172A]'
                    : 'text-slate-600 hover:text-[#0F172A]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 right-0 bottom-0.5 h-0.5 bg-[#1D4ED8]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary CTA + mobile drawer button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleLinkClick({ page: 'contact' })}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1D4ED8]"
          >
            Book a Consultation
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          <button
            type="button"
            onClick={() => handleLinkClick({ page: 'home' })}
            className={`w-full text-left px-3 min-h-[44px] flex items-center text-base font-medium rounded-lg transition-colors cursor-pointer ${
              currentPage === 'home'
                ? 'bg-slate-100 text-[#0F172A]'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => handleLinkClick({ page: 'about' })}
            className={`w-full text-left px-3 min-h-[44px] flex items-center text-base font-medium rounded-lg transition-colors cursor-pointer ${
              currentPage === 'about'
                ? 'bg-slate-100 text-[#0F172A]'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            About
          </button>

          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen((prev) => !prev)}
              aria-expanded={mobileServicesOpen}
              className={`w-full text-left px-3 min-h-[44px] flex items-center justify-between text-base font-medium rounded-lg transition-colors cursor-pointer ${
                currentPage === 'services'
                  ? 'bg-slate-100 text-[#0F172A]'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileServicesOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {mobileServicesOpen && (
              <div className="mt-1 ml-3 pl-3 border-l border-slate-200 space-y-3 py-2">
                <button
                  type="button"
                  onClick={() => handleLinkClick({ page: 'services' })}
                  className="block w-full text-left py-1.5 text-sm font-semibold text-[#1D4ED8] cursor-pointer"
                >
                  All 13 Services Directory
                </button>
                <div>
                  <p className="text-xs font-semibold text-slate-500 mb-1">IT Services</p>
                  <div className="space-y-1">
                    {itServices.map((svc) => (
                      <button
                        key={svc.id}
                        type="button"
                        onClick={() =>
                          handleLinkClick({ page: 'services', slug: svc.slug })
                        }
                        className="block w-full text-left py-1.5 text-sm text-slate-700 hover:text-[#0F172A] cursor-pointer"
                      >
                        {svc.shortTitle}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 mb-1">Voice Services</p>
                  <div className="space-y-1">
                    {voiceServices.map((svc) => (
                      <button
                        key={svc.id}
                        type="button"
                        onClick={() =>
                          handleLinkClick({ page: 'services', slug: svc.slug })
                        }
                        className="block w-full text-left py-1.5 text-sm text-slate-700 hover:text-[#0F172A] cursor-pointer"
                      >
                        {svc.shortTitle}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {(['portfolio', 'blog', 'contact'] as const).map((pageKey) => {
            const label =
              pageKey === 'portfolio'
                ? 'Portfolio'
                : pageKey === 'blog'
                ? 'Blog'
                : 'Contact';
            const isActive = currentPage === pageKey;
            return (
              <button
                key={pageKey}
                type="button"
                onClick={() => handleLinkClick({ page: pageKey })}
                className={`w-full text-left px-3 min-h-[44px] flex items-center text-base font-medium rounded-lg transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-slate-100 text-[#0F172A]'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {label}
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => handleLinkClick({ page: 'contact' })}
              className="w-full min-h-[44px] px-4 py-2.5 text-sm font-medium text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors cursor-pointer"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
