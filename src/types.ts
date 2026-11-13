export type PageRoute =
  | { page: 'home' }
  | { page: 'about' }
  | { page: 'services'; slug?: string }
  | { page: 'portfolio'; slug?: string }
  | { page: 'blog'; slug?: string }
  | { page: 'contact'; preselectedService?: string };

export type ServicePillar = 'IT Services' | 'Voice Services';

export interface ServiceDeliverable {
  title: string;
  detail: string;
}

export interface ServiceMetric {
  label: string;
  value: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  slug: string;
  pillar: ServicePillar;
  title: string;
  shortTitle: string;
  summary: string;
  overview: string;
  idealFor: string;
  image: string;
  imageAlt: string;
  slaMetrics: ServiceMetric[];
  deliverables: ServiceDeliverable[];
  technologies: string[];
  relatedCaseStudySlug: string;
}

export type PortfolioCategory =
  | 'All'
  | 'Managed IT'
  | 'Cybersecurity'
  | 'VoIP & Telecom'
  | 'Cloud & Dev';

export interface CaseStudyOutcome {
  metric: string;
  label: string;
  context: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: Exclude<PortfolioCategory, 'All'>;
  timeline: string;
  location: string;
  headlineMetric: string;
  summary: string;
  challenge: string;
  solution: string;
  image: string;
  imageAlt: string;
  outcomes: CaseStudyOutcome[];
  stack: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    organization: string;
  };
}

export type BlogCategory =
  | 'All'
  | 'Cybersecurity'
  | 'Cloud & M365'
  | 'Voice & VoIP'
  | 'IT Strategy';

export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  category: Exclude<BlogCategory, 'All'>;
  publishedAt: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  excerpt: string;
  image: string;
  imageAlt: string;
  keyTakeaways: string[];
  sections: BlogSection[];
}

export interface ContactReceipt {
  referenceId: string;
  submittedAt: string;
  estimatedResponse: string;
  summary: {
    fullName: string;
    company: string;
    serviceInterest: string;
  };
}
