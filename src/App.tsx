/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import PortfolioView from './components/PortfolioView';
import BlogView from './components/BlogView';
import ContactView from './components/ContactView';
import { PageRoute } from './types';

function parseHashRoute(hash: string): PageRoute {
  const cleaned = hash.replace(/^#\/?/, '').trim();
  if (!cleaned || cleaned === 'home') {
    return { page: 'home' };
  }

  const [section, slug] = cleaned.split('/');
  if (section === 'about') {
    return { page: 'about' };
  }
  if (section === 'services') {
    return { page: 'services', slug: slug || undefined };
  }
  if (section === 'portfolio') {
    return { page: 'portfolio', slug: slug || undefined };
  }
  if (section === 'blog' || section === 'insights') {
    return { page: 'blog', slug: slug || undefined };
  }
  if (section === 'contact') {
    return { page: 'contact' };
  }

  return { page: 'home' };
}

function routeToHash(route: PageRoute): string {
  switch (route.page) {
    case 'home':
      return '#home';
    case 'about':
      return '#about';
    case 'services':
      return route.slug ? `#services/${route.slug}` : '#services';
    case 'portfolio':
      return route.slug ? `#portfolio/${route.slug}` : '#portfolio';
    case 'blog':
      return route.slug ? `#blog/${route.slug}` : '#blog';
    case 'contact':
      return '#contact';
  }
}

export default function App() {
  const [route, setRoute] = useState<PageRoute>(() =>
    typeof window !== 'undefined' ? parseHashRoute(window.location.hash) : { page: 'home' }
  );

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseHashRoute(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleNavigate = useCallback((nextRoute: PageRoute) => {
    setRoute(nextRoute);
    const nextHash = routeToHash(nextRoute);
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, '', nextHash);
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      <Navbar currentPage={route.page} onNavigate={handleNavigate} />

      <main className="flex-1">
        {route.page === 'home' && <HomeView onNavigate={handleNavigate} />}
        {route.page === 'about' && <AboutView onNavigate={handleNavigate} />}
        {route.page === 'services' && (
          <ServicesView selectedSlug={route.slug} onNavigate={handleNavigate} />
        )}
        {route.page === 'portfolio' && (
          <PortfolioView selectedSlug={route.slug} onNavigate={handleNavigate} />
        )}
        {route.page === 'blog' && (
          <BlogView selectedSlug={route.slug} onNavigate={handleNavigate} />
        )}
        {route.page === 'contact' && (
          <ContactView preselectedService={route.preselectedService} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
