import { BlogPost, CaseStudy, ServiceItem } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_operations_center_1794610336878.jpg';
export const ABOUT_TEAM_IMAGE = '/src/assets/images/portfolio_cloud_team_1794610338484.jpg';

export const COMPANY_STATS = [
  {
    value: '+99%',
    label: 'Client Retention Rate',
    context: 'Multi-year partnerships built on trust',
  },
  {
    value: '100%',
    label: 'Live Call Answering',
    context: 'Real technicians answer every inbound call',
  },
  {
    value: '98%',
    label: 'First-Call Resolution',
    context: 'Issues solved without multi-day callbacks',
  },
  {
    value: '< 15 min',
    label: 'Average Response Time',
    context: 'Rapid escalation across Tier 1–3 queues',
  },
];

export const INDUSTRIES_SERVED = [
  { name: 'Accounting Firms', focus: 'Tax-season uptime & encrypted client portals' },
  { name: 'Banks & Financial', focus: 'Zero-trust access & regulatory audit readiness' },
  { name: 'Auto Dealerships', focus: 'Multi-lot Wi-Fi, DMS & high-volume VoIP' },
  { name: 'Dental & Healthcare', focus: 'HIPAA security, imaging networks & EHR BDR' },
  { name: 'Education & Gov', focus: 'Campus switching, filtering & E-Rate planning' },
  { name: 'Law Firms', focus: 'Document security, MFA & remote billing access' },
  { name: 'Manufacturing', focus: 'Plant-floor SD-WAN & 24/7 co-managed support' },
  { name: 'Nonprofits', focus: 'Grant-conscious licensing & Microsoft 365 cloud' },
  { name: 'Real Estate & Legal', focus: 'Mobile softphones & cloud file collaboration' },
  { name: 'Retail & Small Business', focus: 'POS failover, VoIP queues & Wi-Fi reliability' },
  { name: 'Logistics & Freight', focus: 'Multi-hub dispatch voice & 5G SD-WAN failover' },
  { name: 'Professional Services', focus: 'Fixed-fee IT operations & rapid helpdesk SLAs' },
];

export interface ClientReview {
  id: string;
  serviceArea: string;
  rating: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  tenure: string;
}

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: 'rev-1',
    serviceArea: 'Managed IT & Helpdesk',
    rating: '5.0 / 5.0',
    quote:
      'MZT Services has supported our multi-office accounting practice for over seven years. Every call is answered live by an engineer who already knows our environment, and tax-season workstation issues are resolved in minutes instead of hours.',
    author: 'Karen Halvorsen',
    role: 'Managing Partner',
    organization: 'Halvorsen & Associates CPA',
    tenure: '7-Year Client',
  },
  {
    id: 'rev-2',
    serviceArea: 'Hosted VoIP & TEM Audit',
    rating: '5.0 / 5.0',
    quote:
      'Before MZT Services stepped in, every carrier outage stopped our dispatch floor cold and our phone bills were impossible to decode. Within six weeks we consolidated five locations onto 3CX and reduced monthly telecom spend by 68%.',
    author: 'David Kowalski',
    role: 'VP of Operations',
    organization: 'Lakeshore Freight & Distribution',
    tenure: '4-Year Client',
  },
  {
    id: 'rev-3',
    serviceArea: 'Cybersecurity & HIPAA',
    rating: '5.0 / 5.0',
    quote:
      'We faced an urgent cyber insurance renewal deadline across four outpatient clinics. MZT Services deployed Duo MFA, 24/7 endpoint MDR, and verified backups on schedule while keeping clinical workflows completely seamless.',
    author: 'Dr. Priya Nair',
    role: 'Medical Director',
    organization: 'Harborview Medical Partners',
    tenure: '5-Year Client',
  },
  {
    id: 'rev-4',
    serviceArea: 'Avaya / Nortel Maintenance & SIP',
    rating: '5.0 / 5.0',
    quote:
      'Most vendors told us we had to throw away working Avaya phones. MZT maintained our on-premises hardware, swapped expensive analog PRI lines for redundant SIP trunks, and saved us $1,450 every single month.',
    author: 'Gregory Benson',
    role: 'Facilities & Operations Manager',
    organization: 'Benson Automotive Group',
    tenure: '9-Year Client',
  },
  {
    id: 'rev-5',
    serviceArea: 'Co-Managed IT & SD-WAN',
    rating: '5.0 / 5.0',
    quote:
      'Co-managing with MZT Services freed our internal IT lead from daily password resets and switch alerts. Average ticket response dropped to eleven minutes and our overnight machining shifts stay online nonstop.',
    author: 'Thomas Lindqvist',
    role: 'Director of Plant Engineering',
    organization: 'Midwest Precision Tooling',
    tenure: '3-Year Client',
  },
  {
    id: 'rev-6',
    serviceArea: 'Microsoft 365 & Web Portal',
    rating: '5.0 / 5.0',
    quote:
      'MZT migrated 1.8 TB of client archives into Microsoft 365 over a single weekend and built a custom client intake portal that reclaimed eighteen hours of staff administration every week.',
    author: 'Rachel Vance',
    role: 'Chief Operating Officer',
    organization: 'Northstar Financial Advisory',
    tenure: '4-Year Client',
  },
];

export const DEPARTMENT_CONTACTS = [
  {
    department: 'Service & 24/7 Support Desk',
    phone: '(773) 555-3400',
    email: 'service@mztservices.com',
    hours: '24/7/365 Live Technician Coverage',
  },
  {
    department: 'Sales & New Assessments',
    phone: '(773) 555-5869',
    email: 'sales@mztservices.com',
    hours: 'Mon – Fri, 7:30 AM – 6:30 PM CT',
  },
  {
    department: 'Accounting & Billing',
    phone: '(773) 555-3415',
    email: 'billing@mztservices.com',
    hours: 'Mon – Fri, 8:30 AM – 5:00 PM CT',
  },
];

export const ABOUT_CONTENT = {
  headline: 'Over 40 Years of Proven IT & Voice Reliability',
  lead:
    'MZT Services is a dedicated business technology partner delivering unified Managed IT, cybersecurity, Microsoft cloud, and enterprise voice solutions for organizations across Illinois, North Carolina, South Carolina, Wisconsin, and Indiana.',
  storyParagraphs: [
    'Backed by over four decades of proven reliability and excellence, our team was built around a clear commitment: act as a dedicated technology partner that puts individual business needs first to deliver seamless IT and voice solutions, exceptional value, and lasting trust.',
    'Rather than outsourcing support to scripted call centers or forcing companies to juggle separate IT and phone vendors, MZT Services unifies network engineering, cybersecurity, Microsoft cloud administration, and business telephony under a single accountable roof.',
    'From 100% live call answering and 98% first-call resolution to +99% client retention, every SLA we publish reflects decades of long-term relationships with accounting firms, healthcare clinics, auto dealerships, manufacturers, schools, nonprofits, and growing businesses.',
  ],
  principles: [
    {
      number: '01',
      title: 'Single Point of Accountability',
      description:
        'IT networks, cybersecurity, Microsoft 365, and business phone systems live under one roof—eliminating vendor finger-pointing when an issue spans voice and data.',
    },
    {
      number: '02',
      title: 'Proactive Maintenance Over Reactive Fixes',
      description:
        'Automated patch management, 24/7 endpoint monitoring, dark web scanning, and daily backup verification stop downtime before employees feel an interruption.',
    },
    {
      number: '03',
      title: '100% Live Call Answering & 98% First-Call Resolution',
      description:
        'Every support line is answered live by trained US-based technicians who resolve 98% of tickets on the first call, supported by regional onsite field engineers.',
    },
    {
      number: '04',
      title: 'Honest Roadmaps & Telecom Cost Control',
      description:
        'Whether extending the life of Avaya/Nortel hardware or auditing carrier bills via Telecom Expense Management, we recommend what fits your budget—not unnecessary hardware swaps.',
    },
  ],
  serviceFootprint: [
    {
      region: 'Corporate Headquarters (Illinois)',
      address: '3924 W. Devon Ave, Suite 100, Lincolnwood, IL 60712',
      states: 'Serving Greater Chicago, Illinois, Wisconsin & Indiana',
    },
    {
      region: 'North & South Carolina Office',
      address: '227 W. 4th St, Charlotte, NC 28202',
      states: 'Serving Charlotte Metro, North Carolina & South Carolina',
    },
  ],
};

export const SERVICES: ServiceItem[] = [
  // IT SERVICES (7)
  {
    id: 'managed-it',
    number: '01',
    slug: 'managed-it-services',
    pillar: 'IT Services',
    title: 'Managed IT Services',
    shortTitle: 'Managed IT',
    summary:
      'Proactive maintenance, 24/7 network monitoring, patch management, and live Tier 1–3 IT support that minimizes costly downtime.',
    overview:
      'MZT Services acts as your complete outsourced IT department or co-managed engineering partner. We monitor workstations, servers, switches, and firewalls around the clock, automate patching, and provide 100% live call answering with < 15 minute average response times.',
    idealFor: 'Businesses seeking predictable monthly IT operations and proactive maintenance.',
    image: '/src/assets/images/hero_operations_center_1794610336878.jpg',
    imageAlt: 'MZT Services engineering operations floor with dual-monitor workstations',
    slaMetrics: [
      { label: 'Average Response Time', value: '< 15 min' },
      { label: 'First-Call Resolution', value: '98%' },
      { label: 'Client Retention Rate', value: '+99%' },
    ],
    deliverables: [
      {
        title: '24/7 Proactive Monitoring & Network Management',
        detail: 'Continuous telemetry on endpoints, servers, and switches to detect and resolve failures before staff are affected.',
      },
      {
        title: 'Live US-Based Helpdesk & Onsite Dispatch',
        detail: '100% live call answering with rapid remote remediation and scheduled onsite field technician visits.',
      },
      {
        title: 'Co-Managed IT Partnership',
        detail: 'Shared RMM, ticketing, and documentation tools supporting internal IT managers with 24/7 overflow and project scale.',
      },
      {
        title: 'Hardware Procurement & vCIO Roadmaps',
        detail: 'Lifecycle tracking, standardized laptop imaging, and quarterly executive technology budget planning.',
      },
    ],
    technologies: ['ConnectWise RMM', 'Microsoft Intune', 'Cisco Meraki', 'Dell Enterprise'],
    relatedCaseStudySlug: 'midwest-precision-manufacturing-zero-downtime',
  },
  {
    id: 'cybersecurity',
    number: '02',
    slug: 'cybersecurity',
    pillar: 'IT Services',
    title: 'Cybersecurity',
    shortTitle: 'Cybersecurity',
    summary:
      'Layered threat defense featuring email & DNS filtering, Managed MFA via Duo, Dark Web scanning, patch management, and security awareness training.',
    overview:
      'Ransomware and credential phishing target small and mid-sized businesses daily. MZT Services deploys multi-layered protection across identity, email, DNS, and endpoints—combining Duo Managed MFA, Dark Web monitoring, automated patching, and employee security training.',
    idealFor: 'Healthcare, financial, legal, and commercial teams requiring HIPAA or cyber insurance compliance.',
    image: '/src/assets/images/service_server_rack_1794610337386.jpg',
    imageAlt: 'Enterprise data center aisle with structured fiber cabling and server security cabinets',
    slaMetrics: [
      { label: 'Threat Containment Time', value: '< 4 min' },
      { label: 'SOC Telemetry Coverage', value: '24/7/365' },
      { label: 'Automated Patch Rate', value: '99.4%' },
    ],
    deliverables: [
      {
        title: 'Email & DNS Security Filtering',
        detail: 'Blocks phishing links, malicious attachments, spoofing (DMARC/DKIM), and malicious domains before reaching employee inboxes.',
      },
      {
        title: 'Managed Multi-Factor Authentication (Duo)',
        detail: 'Turnkey Duo MFA deployment and policy management across Microsoft 365, VPNs, servers, and line-of-business apps.',
      },
      {
        title: 'Dark Web Scanning & Endpoint MDR',
        detail: 'Continuous monitoring for leaked corporate credentials paired with 24/7 behavioral endpoint threat isolation.',
      },
      {
        title: 'Patch Management & Security Awareness Training',
        detail: 'Scheduled OS and third-party application patching alongside simulated phishing campaigns and staff training modules.',
      },
    ],
    technologies: ['Duo MFA', 'SentinelOne MDR', 'Huntress', 'Proofpoint / Defender', 'Dark Web ID'],
    relatedCaseStudySlug: 'harborview-medical-group-hipaa-hardening',
  },
  {
    id: 'cloud-services',
    number: '03',
    slug: 'cloud-services',
    pillar: 'IT Services',
    title: 'Cloud Services',
    shortTitle: 'Cloud Services',
    summary:
      'Cloud infrastructure architecture, zero-downtime server migrations, hybrid deployments, and cloud workload cost optimization.',
    overview:
      'Retire aging on-premises hardware without risking data loss or productivity stalls. MZT Services designs, migrates, and manages public, private, and hybrid cloud infrastructure—optimizing compute performance, security access, and monthly consumption.',
    idealFor: 'Multi-site businesses modernizing legacy file servers or scaling remote access.',
    image: '/src/assets/images/portfolio_cloud_team_1794610338484.jpg',
    imageAlt: 'Senior cloud architects reviewing cloud infrastructure architecture diagrams',
    slaMetrics: [
      { label: 'Cutover Downtime Window', value: '< 30 min' },
      { label: 'Cloud Spend Reduction', value: '28% avg.' },
      { label: 'Availability Target', value: '99.98%' },
    ],
    deliverables: [
      {
        title: 'Cloud Infrastructure & Migration',
        detail: 'Assessment, staging, and weekend cutover of legacy Windows servers, databases, and file shares to the cloud.',
      },
      {
        title: 'Hybrid Cloud Connectivity',
        detail: 'Secure site-to-site VPNs and identity synchronization connecting local office equipment to cloud workloads.',
      },
      {
        title: 'Cloud Security & Governance',
        detail: 'Role-based access controls, conditional location policies, and encrypted storage baselines.',
      },
      {
        title: 'Ongoing Cost & Performance Optimization',
        detail: 'Monthly right-sizing of virtual machines, storage tiers, and licensing to prevent unexpected cloud bills.',
      },
    ],
    technologies: ['Microsoft Azure', 'Azure Virtual Desktop', 'Entra ID', 'AWS / Hybrid Cloud'],
    relatedCaseStudySlug: 'northstar-advisory-azure-workspace',
  },
  {
    id: 'sd-wan',
    number: '04',
    slug: 'sd-wan',
    pillar: 'IT Services',
    title: 'SD-WAN',
    shortTitle: 'SD-WAN',
    summary:
      'Software-defined wide-area networking for automatic multi-ISP failover, jitter-free VoIP call quality, and unified branch connectivity.',
    overview:
      'Single internet circuits leave offices vulnerable to sudden outages and sluggish cloud apps. MZT Services deploys SD-WAN appliances that bond multiple fiber, broadband, and 5G wireless links—steering voice and business-critical traffic automatically across the cleanest path.',
    idealFor: 'Multi-branch enterprises, clinics, warehouses, and VoIP-dependent offices.',
    image: '/src/assets/images/service_server_rack_1794610337386.jpg',
    imageAlt: 'Structured enterprise fiber optic and SD-WAN network rack installation',
    slaMetrics: [
      { label: 'Carrier Failover Speed', value: '< 1.2 sec' },
      { label: 'Branch Uptime SLA', value: '99.99%' },
      { label: 'Voice Jitter Control', value: 'QoS Prioritized' },
    ],
    deliverables: [
      {
        title: 'Multi-Carrier ISP Failover & Bonding',
        detail: 'Seamless packet steering across fiber, cable, and LTE/5G backups without dropping active calls or cloud sessions.',
      },
      {
        title: 'Application & Voice QoS Prioritization',
        detail: 'Guarantees bandwidth for Hosted VoIP, 3CX, ERP, and video conferencing ahead of bulk background downloads.',
      },
      {
        title: 'Zero-Touch Branch VPN Mesh',
        detail: 'Encrypted site-to-site tunnels linking headquarters, regional hubs, and remote locations centrally.',
      },
      {
        title: 'ISP Procurement & Outage Escalation',
        detail: 'We broker carrier quotes, coordinate circuit installs, and handle ISP outage tickets end-to-end.',
      },
    ],
    technologies: ['Fortinet SD-WAN', 'Cisco Meraki MX', 'Cradlepoint 5G', 'Fiber & Broadband'],
    relatedCaseStudySlug: 'midwest-precision-manufacturing-zero-downtime',
  },
  {
    id: 'bdr',
    number: '05',
    slug: 'backup-disaster-recovery-bdr',
    pillar: 'IT Services',
    title: 'Backup & Disaster Recovery (BDR)',
    shortTitle: 'BDR',
    summary:
      'Immutable local and off-site backups, rapid server virtualization, and scheduled disaster recovery testing to protect critical business data.',
    overview:
      'Tape drives and unmonitored USB disks fail silently when needed most. MZT Services implements hybrid local + cloud BDR appliances alongside SaaS cloud-to-cloud backups—verifying restore integrity daily so servers and Microsoft 365 data recover in minutes.',
    idealFor: 'Any organization protecting financial records, EHR databases, CAD files, or Microsoft 365 data.',
    image: '/src/assets/images/service_server_rack_1794610337386.jpg',
    imageAlt: 'Enterprise backup and disaster recovery server cabinet',
    slaMetrics: [
      { label: 'Server Recovery RTO', value: '12 min' },
      { label: 'Snapshot Frequency', value: 'Every 15 min' },
      { label: 'Backup Verification', value: 'Daily Tested' },
    ],
    deliverables: [
      {
        title: 'Immutable Ransomware-Proof Snapshots',
        detail: 'Air-gapped off-site replication that cannot be altered or encrypted even during an active local network breach.',
      },
      {
        title: 'Instant Local & Cloud Virtualization',
        detail: 'Spin up failed physical or virtual servers directly from the BDR appliance in minutes to keep staff working.',
      },
      {
        title: 'Microsoft 365 & SaaS Backup',
        detail: 'Point-in-time recovery for Exchange Online mailboxes, SharePoint libraries, OneDrive, and Teams.',
      },
      {
        title: 'Automated Screenshot & DR Drills',
        detail: 'Daily boot-verification checks plus scheduled disaster recovery tabletop and failover tests.',
      },
    ],
    technologies: ['Datto SIRIS', 'Veeam Backup', 'Datto SaaS Protection', 'Immutable Cloud'],
    relatedCaseStudySlug: 'harborview-medical-group-hipaa-hardening',
  },
  {
    id: 'microsoft-services',
    number: '06',
    slug: 'microsoft-services',
    pillar: 'IT Services',
    title: 'Microsoft Services',
    shortTitle: 'Microsoft Services',
    summary:
      'End-to-end deployment, licensing, security hardening, and support for Microsoft 365, Azure, Dynamics 365, SharePoint, and Teams.',
    overview:
      'Most companies underutilize or misconfigure their Microsoft ecosystem. MZT Services delivers full-lifecycle Microsoft consulting—spanning Microsoft 365 migrations, Azure hosting, Dynamics 365 CRM/ERP support, SharePoint permissions, and Intune device management.',
    idealFor: 'Organizations standardizing productivity, identity, and CRM/ERP on Microsoft platforms.',
    image: '/src/assets/images/portfolio_cloud_team_1794610338484.jpg',
    imageAlt: 'Engineers configuring Microsoft Azure and Microsoft 365 deployment diagrams',
    slaMetrics: [
      { label: 'Mailbox Migration Accuracy', value: '100%' },
      { label: 'Licensing Audit Savings', value: '18–25%' },
      { label: 'Secure Score Target', value: '85%+' },
    ],
    deliverables: [
      {
        title: 'Microsoft 365 & Exchange Online Administration',
        detail: 'Tenant migrations, shared mailbox governance, Teams collaboration setup, and license cost optimization.',
      },
      {
        title: 'Azure & Entra ID Infrastructure',
        detail: 'Conditional access baselines, Windows Virtual Desktops, and scalable cloud SQL hosting.',
      },
      {
        title: 'Dynamics 365 & SharePoint Architecture',
        detail: 'Structured SharePoint document libraries, permission inheritance, and Dynamics 365 workflow integration.',
      },
      {
        title: 'Microsoft Intune Endpoint Compliance',
        detail: 'Zero-touch Windows autopilot provisioning, BitLocker encryption, and mobile device policy enforcement.',
      },
    ],
    technologies: ['Microsoft 365', 'Microsoft Azure', 'Dynamics 365', 'SharePoint & Teams', 'Intune'],
    relatedCaseStudySlug: 'northstar-advisory-azure-workspace',
  },
  {
    id: 'web-app-dev',
    number: '07',
    slug: 'web-app-development',
    pillar: 'IT Services',
    title: 'Web & App Development',
    shortTitle: 'Web & App Dev',
    summary:
      'Responsive web design, content management systems (CMS), custom eCommerce platforms, database design, and enterprise system integration.',
    overview:
      'Beyond infrastructure, MZT Services builds the customer-facing websites and internal applications that power revenue. Our engineering team develops fast responsive websites, CMS-driven portals, custom eCommerce stores, relational databases, and API integrations connecting ERP and CRM systems.',
    idealFor: 'Businesses modernizing public web presence, launching eCommerce, or automating custom databases.',
    image: '/src/assets/images/blog_desk_minimal_1794610338484.jpg',
    imageAlt: 'Application engineering workstation alongside structured network interface hardware',
    slaMetrics: [
      { label: 'Performance Benchmark', value: '98/100' },
      { label: 'Manual Entry Saved', value: '18 hrs/wk' },
      { label: 'Managed Hosting', value: '99.98%' },
    ],
    deliverables: [
      {
        title: 'Responsive Web Design & CMS Platforms',
        detail: 'Accessible, mobile-optimized websites with intuitive content management workflows for internal marketing teams.',
      },
      {
        title: 'Custom eCommerce Platforms',
        detail: 'B2B and B2C ordering portals with real-time catalog pricing, secure checkout, and inventory synchronization.',
      },
      {
        title: 'Database Design & System Integration',
        detail: 'Normalized SQL/PostgreSQL databases and automated API bridges linking accounting, ERP, and CRM software.',
      },
      {
        title: 'Managed Cloud Hosting & Security',
        detail: 'WAF firewalling, SSL management, automated database snapshots, and continuous application monitoring.',
      },
    ],
    technologies: ['React & TypeScript', 'Node.js', 'PostgreSQL', 'Custom CMS / eCommerce', 'REST & GraphQL APIs'],
    relatedCaseStudySlug: 'northstar-advisory-azure-workspace',
  },

  // VOICE SERVICES (6)
  {
    id: 'hosted-voip',
    number: '08',
    slug: 'hosted-voip-ucaas',
    pillar: 'Voice Services',
    title: 'Hosted VoIP & Unified Communications (UCaaS)',
    shortTitle: 'Hosted VoIP / UCaaS',
    summary:
      'Cloud-based business phone platforms unifying voice, video conferencing, team messaging, and file sharing across every device.',
    overview:
      'Replace rigid, expensive phone line contracts with flexible cloud communications. MZT Services engineers and supports Hosted VoIP and UCaaS platforms that bring crystal-clear calling, video meetings, instant messaging, and intelligent call routing to office desks and remote staff alike.',
    idealFor: 'Multi-location companies, hybrid workforces, and growing offices.',
    image: '/src/assets/images/portfolio_voip_office_1794610338754.jpg',
    imageAlt: 'Modern corporate conference table equipped with an enterprise VoIP conference phone',
    slaMetrics: [
      { label: 'Voice Uptime SLA', value: '99.99%' },
      { label: 'Number Porting Accuracy', value: '100%' },
      { label: 'Average Telecom Savings', value: '42–68%' },
    ],
    deliverables: [
      {
        title: 'Unified Voice, Video & Messaging',
        detail: 'Single business identity across desk phones, desktop softphones, and iOS/Android mobile apps.',
      },
      {
        title: 'Custom Auto-Attendants & Call Queues',
        detail: 'Business-hour schedules, department ring groups, call recording, and voicemail-to-email transcription.',
      },
      {
        title: 'Zero-Downtime Number Porting',
        detail: 'End-to-end DID and toll-free porting managed directly with carriers so zero inbound calls are missed.',
      },
      {
        title: 'End-to-End Hardware & QoS Setup',
        detail: 'Pre-configured Yealink and Poly phones shipped ready to plug in alongside router QoS voice prioritization.',
      },
    ],
    technologies: ['Cloud UCaaS', 'Yealink Hardware', 'Poly Voice', 'Microsoft Teams Routing'],
    relatedCaseStudySlug: 'lakeshore-logistics-voip-consolidation',
  },
  {
    id: '3cx',
    number: '09',
    slug: '3cx-communications',
    pillar: 'Voice Services',
    title: '3CX Business Communications',
    shortTitle: '3CX',
    summary:
      'Open-standards 3CX phone systems delivering enterprise calling, browser video conferencing, live website chat, and mobile apps without per-user license bloat.',
    overview:
      '3CX gives growing businesses enterprise call center capabilities at a fraction of traditional per-seat UCaaS pricing. As a certified 3CX partner, MZT Services deploys, hosts, and maintains 3CX instances featuring CRM integration, Microsoft 365 directory sync, and multi-device calling.',
    idealFor: 'Cost-conscious teams with 20–500 extensions wanting full PBX feature control.',
    image: '/src/assets/images/portfolio_voip_office_1794610338754.jpg',
    imageAlt: 'Executive workspace equipped with 3CX compatible IP conference hardware',
    slaMetrics: [
      { label: 'License Cost Savings', value: 'Up to 60%' },
      { label: 'Simultaneous Call Scaling', value: 'Unlimited' },
      { label: 'Remote App Sync', value: 'iOS / Android / Web' },
    ],
    deliverables: [
      {
        title: 'Dedicated Cloud or On-Prem 3CX Hosting',
        detail: 'High-availability 3CX server deployment with automated daily configuration backups and SSL provisioning.',
      },
      {
        title: 'Website Live Chat & Video Meetings',
        detail: 'Built-in browser video conferencing and live website visitor chat routed directly to internal agents.',
      },
      {
        title: 'CRM & Microsoft 365 Integration',
        detail: 'Click-to-dial, caller ID screen-pops, and automatic call logging with HubSpot, Salesforce, and M365.',
      },
      {
        title: '24/7 3CX Support & Maintenance',
        detail: 'Certified engineers handle ring-group changes, firmware updates, and trunk monitoring on demand.',
      },
    ],
    technologies: ['3CX Enterprise', 'Yealink / Fanvil / Poly', 'WebRTC Client', 'SIP Trunks'],
    relatedCaseStudySlug: 'lakeshore-logistics-voip-consolidation',
  },
  {
    id: 'on-prem-pbx',
    number: '10',
    slug: 'on-premises-phone-systems',
    pillar: 'Voice Services',
    title: 'On-Premises Phone Systems',
    shortTitle: 'On-Premises Phones',
    summary:
      'Tailored, secure, localized on-site telephony systems engineered for industries requiring local control, paging integration, and dedicated hardware.',
    overview:
      'Many schools, medical facilities, auto dealerships, and warehouses prefer the security and physical intercom/paging reliability of an on-premises phone system. MZT Services designs and installs tailored local PBX architectures built for multi-decade reliability.',
    idealFor: 'Facilities needing overhead paging, local survivability, or strict internal voice control.',
    image: '/src/assets/images/service_server_rack_1794610337386.jpg',
    imageAlt: 'On-premises telecommunications and structured cabling rack',
    slaMetrics: [
      { label: 'Local Survivability', value: '100%' },
      { label: 'Paging & Door Entry', value: 'Integrated' },
      { label: 'Hardware Reliability', value: '99.99%' },
    ],
    deliverables: [
      {
        title: 'Localized PBX Architecture & Install',
        detail: 'Custom-sized on-site phone servers configured for internal extensions, analog fax/alarm ports, and battery backup.',
      },
      {
        title: 'Overhead Paging & Intercom Integration',
        detail: 'Seamless integration with warehouse horns, school bells, reception door buzzers, and night-bell routing.',
      },
      {
        title: 'Hybrid Cloud & Mobile Extension Support',
        detail: 'Keep core voice equipment on-site while enabling remote mobile extensions and off-site call failover.',
      },
      {
        title: 'Structured Voice Cabling & Patching',
        detail: 'Clean MDF/IDF punch-downs, Cat6 cabling, and PoE switch provisioning for every workstation.',
      },
    ],
    technologies: ['Avaya IP Office', '3CX On-Prem', 'Algo Paging', 'PoE Switching'],
    relatedCaseStudySlug: 'lakeshore-logistics-voip-consolidation',
  },
  {
    id: 'avaya-nortel-maintenance',
    number: '11',
    slug: 'avaya-nortel-3cx-maintenance',
    pillar: 'Voice Services',
    title: 'Avaya / Nortel / 3CX Maintenance',
    shortTitle: 'Avaya / Nortel / 3CX',
    summary:
      'Specialized certified maintenance, parts replacement, and programming support backed by over 40 years of voice infrastructure expertise.',
    overview:
      'Do not let a vendor force an expensive rip-and-replace on dependable phone hardware you already own. Backed by 40+ years of telephony heritage, MZT Services maintains Avaya IP Office, Nortel BCM/Norstar, and 3CX installations—keeping existing systems running smoothly on your timeline.',
    idealFor: 'Organizations running legacy Avaya or Nortel systems seeking reliable maintenance & parts.',
    image: '/src/assets/images/blog_desk_minimal_1794610338484.jpg',
    imageAlt: 'Telecommunications diagnostics workstation and structured patch hardware',
    slaMetrics: [
      { label: 'Voice Heritage', value: '40+ Years' },
      { label: 'Emergency Dispatch', value: '24/7/365' },
      { label: 'First-Call Resolution', value: '98%' },
    ],
    deliverables: [
      {
        title: 'Avaya & Nortel Certified Programming',
        detail: 'Moves, adds, changes, holiday greetings, voicemail tree updates, and hunt-group adjustments.',
      },
      {
        title: 'Replacement Hardware & Spare Parts',
        detail: 'Tested handsets, trunk cards, power supplies, and expansion modules stocked for fast dispatch.',
      },
      {
        title: 'Preventative System Health Audits',
        detail: 'Database backups, battery backup checks, and firmware stabilization to prevent unexpected outages.',
      },
      {
        title: 'Phased Migration Planning (When Ready)',
        detail: 'Clear, pressure-free roadmap to transition onto SIP trunking or 3CX only when it makes financial sense.',
      },
    ],
    technologies: ['Avaya IP Office / Partner', 'Nortel Norstar / BCM', '3CX', 'Legacy Voice'],
    relatedCaseStudySlug: 'lakeshore-logistics-voip-consolidation',
  },
  {
    id: 'sip-trunking',
    number: '12',
    slug: 'sip-trunking',
    pillar: 'Voice Services',
    title: 'SIP Trunking',
    shortTitle: 'SIP Trunking',
    summary:
      'Internet-based virtual voice trunks replacing costly copper PRIs and analog lines with immediate savings, instant scalability, and automatic failover.',
    overview:
      'Traditional PRI circuits lock businesses into expensive, rigid 23-channel increments and aging copper maintenance surcharges. MZT Services delivers redundant SIP trunking directly to your on-premises or cloud PBX—cutting carrier bills immediately while adding geo-redundant disaster failover.',
    idealFor: 'Offices paying too much for legacy PRI, T1, or POTS voice circuits.',
    image: '/src/assets/images/service_server_rack_1794610337386.jpg',
    imageAlt: 'Enterprise network rack supporting redundant SIP trunking and fiber uplinks',
    slaMetrics: [
      { label: 'Average Monthly Savings', value: '45–65%' },
      { label: 'Channel Scalability', value: 'On-Demand' },
      { label: 'Disaster Call Routing', value: 'Automatic' },
    ],
    deliverables: [
      {
        title: 'PRI & Analog Line Replacement',
        detail: 'Eliminate high-cost copper PRI contracts while retaining every existing company DID and fax number.',
      },
      {
        title: 'Geo-Redundant Automatic Failover',
        detail: 'If local internet or power fails, inbound calls re-route automatically to secondary offices or mobile numbers.',
      },
      {
        title: 'Elastic Concurrent Call Paths',
        detail: 'Scale simultaneous call channels up or down seasonally without waiting weeks for carrier truck rolls.',
      },
      {
        title: 'E911 & Compliance Verification',
        detail: 'Accurate per-floor and multi-site E911 address registration across every active SIP endpoint.',
      },
    ],
    technologies: ['Redundant SIP Trunks', 'SBC Gateways', 'E911 Routing', 'PRI-to-SIP Bridges'],
    relatedCaseStudySlug: 'lakeshore-logistics-voip-consolidation',
  },
  {
    id: 'tem',
    number: '13',
    slug: 'telecom-expense-management-tem',
    pillar: 'Voice Services',
    title: 'Telecom Expense Management (TEM)',
    shortTitle: 'TEM',
    summary:
      'Full lifecycle ordering, provisioning, bill auditing, and cost control across corporate fixed/mobile telephony, data circuits, and UCaaS licenses.',
    overview:
      'Finance, procurement, and IT teams routinely overpay 25–45% on telecom due to auto-renewed contracts, disconnected lines still being billed, and duplicate UCaaS/mobile licenses. MZT Services provides full Telecom Expense Management (TEM) to audit invoices, recover overcharges, and manage every carrier relationship.',
    idealFor: 'Multi-site businesses, finance teams, and CFOs tired of opaque carrier invoices.',
    image: '/src/assets/images/portfolio_cloud_team_1794610338484.jpg',
    imageAlt: 'Specialists auditing multi-location telecom expenses and carrier contracts',
    slaMetrics: [
      { label: 'Carrier Spend Reduction', value: 'Up to 68%' },
      { label: 'Contract Visibility', value: '100% Indexed' },
      { label: 'Billing Disputes', value: 'Handled End-to-End' },
    ],
    deliverables: [
      {
        title: 'Line-by-Line Carrier Invoice Audits',
        detail: 'Identify unused POTS lines, legacy circuit rate escalations, erroneous taxes, and orphaned mobile devices.',
      },
      {
        title: 'Circuit Ordering & Provisioning',
        detail: 'Single point of contact to source competitive fiber/broadband quotes, track installs, and retire old circuits.',
      },
      {
        title: 'UCaaS & Mobile Fleet Optimization',
        detail: 'Right-size cellular plans, international roaming packages, and SaaS/UCaaS seat counts quarterly.',
      },
      {
        title: 'Centralized Contract Renewal Calendar',
        detail: 'Eliminate surprise auto-renewals with proactive 90-day renegotiation benchmarks across all carriers.',
      },
    ],
    technologies: ['TEM Auditing', 'Carrier Negotiation', 'Fixed & Mobile Inventory', 'Circuit Lifecycle'],
    relatedCaseStudySlug: 'lakeshore-logistics-voip-consolidation',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'lakeshore-logistics-voip-consolidation',
    title: 'Multi-Site VoIP Consolidation & Carrier Audit',
    client: 'Lakeshore Freight & Distribution',
    industry: 'Logistics & Transportation',
    category: 'VoIP & Telecom',
    timeline: '6 Weeks',
    location: 'Chicago & Milwaukee Hubs',
    headlineMetric: '-68% Telecom Spend in 90 Days',
    summary:
      'Replaced five disconnected legacy PBX phone systems and overlapping analog carrier contracts with a unified 3CX cloud voice architecture across 140 dispatch and warehouse extensions.',
    challenge:
      'Lakeshore Freight operated five regional dispatch offices on aging Nortel hardware and separate local carrier contracts totaling $9,400/month. Call transfers between hubs required dialing external numbers, and winter storm outages routinely knocked dispatch queues offline.',
    solution:
      'MZT Services conducted a full Telecom Expense Management audit, ported 84 DID numbers without a dropped call, deployed redundant SIP trunks paired with Fortinet SD-WAN failover, and provisioned Yealink desk phones alongside mobile softphones for yard supervisors.',
    image: '/src/assets/images/portfolio_voip_office_1794610338754.jpg',
    imageAlt: 'Executive conference room outfitted with unified VoIP hardware at Lakeshore Freight',
    outcomes: [
      {
        metric: '-68%',
        label: 'Monthly Telecom Cost',
        context: 'Reduced from $9,400/mo to $3,010/mo across 5 hubs',
      },
      {
        metric: '99.99%',
        label: 'Voice Availability',
        context: 'Zero dispatch downtime across dual-ISP SD-WAN links',
      },
      {
        metric: '140',
        label: 'Unified Extensions',
        context: 'Single 4-digit dialing directory across office & mobile',
      },
    ],
    stack: ['3CX Enterprise', 'SIP Trunking', 'Fortinet SD-WAN', 'Yealink T54W', 'TEM Audit'],
    testimonial: {
      quote:
        'Before MZT Services stepped in, every carrier outage stopped our dispatch floor cold and our phone bills were impossible to decode. Within six weeks we consolidated five locations onto one clean system and cut our monthly telecom expense by more than two-thirds.',
      author: 'David Kowalski',
      role: 'VP of Operations',
      organization: 'Lakeshore Freight & Distribution',
    },
  },
  {
    slug: 'harborview-medical-group-hipaa-hardening',
    title: 'Zero-Trust Endpoint Hardening & HIPAA Readiness',
    client: 'Harborview Medical Partners',
    industry: 'Dental & Healthcare',
    category: 'Cybersecurity',
    timeline: '8 Weeks',
    location: '4 Outpatient Clinics, Illinois',
    headlineMetric: '0 Breaches Across 420 Endpoints',
    summary:
      'Deployed 24/7 MDR threat containment, Duo Managed MFA, and immutable EHR BDR backups to pass annual HIPAA security audits and lower cyber insurance premiums.',
    challenge:
      'Rapid clinic expansion left Harborview Medical with inconsistent workstation patching, shared reception logins, and unverified local tape backups. Their cyber insurance underwriter issued a 60-day notice requiring MFA and 24/7 EDR to renew coverage.',
    solution:
      'MZT Services enrolled all 420 clinical workstations and EHR servers into Microsoft Intune and SentinelOne MDR, enforced Duo MFA for clinical logins, implemented DNS/email filtering and Dark Web monitoring, and deployed automated Datto BDR appliances.',
    image: '/src/assets/images/service_server_rack_1794610337386.jpg',
    imageAlt: 'Segmented healthcare network rack with structured cobalt fiber interconnects',
    outcomes: [
      {
        metric: '0',
        label: 'Security Incidents',
        context: 'Across 420 clinical & administrative endpoints over 18 months',
      },
      {
        metric: '100%',
        label: 'HIPAA Audit Pass',
        context: 'Completed technical safeguards & cyber insurance renewal on schedule',
      },
      {
        metric: '12 min',
        label: 'Recovery Time (RTO)',
        context: 'Verified quarterly EHR server virtualization failover',
      },
    ],
    stack: ['Duo MFA', 'SentinelOne MDR', 'Dark Web Scan', 'Datto BCDR', 'Cisco Meraki VLAN'],
    testimonial: {
      quote:
        'We faced an urgent cyber insurance deadline and fragmented security across four clinics. MZT Services standardized every endpoint, documented our HIPAA safeguards, and gave our medical staff fast support that never slows down patient intake.',
      author: 'Dr. Priya Nair',
      role: 'Medical Director',
      organization: 'Harborview Medical Partners',
    },
  },
  {
    slug: 'midwest-precision-manufacturing-zero-downtime',
    title: 'Shop-Floor SD-WAN & Co-Managed IT Modernization',
    client: 'Midwest Precision Tooling',
    industry: 'Manufacturing',
    category: 'Managed IT',
    timeline: '10 Weeks',
    location: 'Kenosha & Rockford Plants',
    headlineMetric: '11-Min Average Ticket Resolution',
    summary:
      'Rebuilt plant-floor network switching, added dual-carrier SD-WAN failover, and established co-managed 24/7 monitoring for CNC production lines.',
    challenge:
      'A single internal IT manager supported two 24-hour machining plants with aging unmanaged switches and frequent CAD file bottlenecks. Unplanned network drops halted CNC file transfers and cost $4,200 per hour in idle shift time.',
    solution:
      'MZT Services replaced legacy closets with redundant fiber-linked switches, engineered dual-ISP SD-WAN failover, and onboarded both facilities onto our co-managed RMM platform—handling after-hours alerts and Tier 1–2 user tickets while freeing the internal lead for ERP initiatives.',
    image: '/src/assets/images/hero_operations_center_1794610336878.jpg',
    imageAlt: 'Modern engineering and network operations workspace supporting plant infrastructure',
    outcomes: [
      {
        metric: '11 min',
        label: 'Mean Ticket Response',
        context: 'Down from 6.5 hours prior to co-managed onboarding',
      },
      {
        metric: '99.98%',
        label: 'Plant Network Uptime',
        context: 'Eliminated unplanned CNC file-server disconnects',
      },
      {
        metric: '10 Gbps',
        label: 'Core Fiber Backbone',
        context: '4x faster CAD/CAM assembly file synchronization',
      },
    ],
    stack: ['Cisco Meraki', 'Fortinet SD-WAN', 'ConnectWise RMM', '10GbE Fiber Switching', 'Veeam'],
    testimonial: {
      quote:
        'Our single IT coordinator was buried in daily password resets and switch issues while trying to modernize our ERP. Co-managing with MZT Services cut ticket response times to eleven minutes and kept our overnight machining shifts running without interruption.',
      author: 'Thomas Lindqvist',
      role: 'Director of Plant Engineering',
      organization: 'Midwest Precision Tooling',
    },
  },
  {
    slug: 'northstar-advisory-azure-workspace',
    title: 'Microsoft 365 Migration & Custom Client Web Portal',
    client: 'Northstar Financial Advisory',
    industry: 'Banks & Financial',
    category: 'Cloud & Dev',
    timeline: '12 Weeks',
    location: 'Charlotte, NC',
    headlineMetric: '18 Hrs/Wk Saved via Portal Automation',
    summary:
      'Migrated on-premises file servers to Microsoft 365 & Azure while building an encrypted custom web portal and database synced with internal accounting workflows.',
    challenge:
      'Advisors relied on a slow VPN into an aging office server to access tax and portfolio files, while clients emailed sensitive PDFs without encryption. Manual onboarding took staff nearly three hours per household.',
    solution:
      'MZT Services migrated 1.8 TB of structured archives to SharePoint Online with sensitivity labels, rolled out Azure Virtual Desktop for legacy portfolio software, and engineered a custom TypeScript/React client intake web portal with PostgreSQL database integration.',
    image: '/src/assets/images/portfolio_cloud_team_1794610338484.jpg',
    imageAlt: 'Engineers reviewing cloud migration and custom client portal schematics',
    outcomes: [
      {
        metric: '18 hrs/wk',
        label: 'Staff Time Reclaimed',
        context: 'Automated client document intake & CRM synchronization',
      },
      {
        metric: '28%',
        label: 'Lower Infrastructure Cost',
        context: 'Retired 3 physical servers & dedicated VPN circuits',
      },
      {
        metric: '< 25 min',
        label: 'Weekend Cutover Window',
        context: 'Zero missed advisory appointments Monday morning',
      },
    ],
    stack: ['Microsoft Azure', 'Microsoft 365', 'SharePoint Online', 'React / TypeScript', 'PostgreSQL'],
    testimonial: {
      quote:
        'Retiring our office server felt risky during tax season, but MZT Services executed the cloud cutover over a single weekend and built a client document portal that saved our advisors eighteen hours of manual sorting every week.',
      author: 'Rachel Vance',
      role: 'Chief Operating Officer',
      organization: 'Northstar Financial Advisory',
    },
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'cyber-insurance-renewal-checklist-2026',
    title: 'The 2026 Cyber Insurance Checklist: 5 Controls Underwriters Verify First',
    category: 'Cybersecurity',
    publishedAt: 'November 4, 2026',
    readTime: '6 min read',
    author: {
      name: 'Marcus T. Delgado',
      role: 'Principal Security Architect, MZT Services',
    },
    excerpt:
      'Underwriters no longer accept checkbox attestations. Here are the five technical controls—from Duo Managed MFA to immutable BDR backups—required to keep premiums low.',
    image: '/src/assets/images/service_server_rack_1794610337386.jpg',
    imageAlt: 'Enterprise server cabinets and fiber network infrastructure',
    keyTakeaways: [
      'Managed MFA via Duo is mandatory not just for email, but for all VPN, RMM, and backup consoles.',
      'DNS & email filtering plus 24/7 MDR have replaced standalone signature antivirus on policy applications.',
      'Immutable, air-gapped BDR backups tested via automated boot verification are required to prove ransomware resilience.',
    ],
    sections: [
      {
        heading: 'Why Underwriting Standards Shifted Permanently',
        paragraphs: [
          'Three years ago, securing a mid-market cyber liability policy required answering a ten-question form confirming you ran antivirus software and backed up your server once a night. Following waves of credential-based ransomware claims, carriers now audit technical controls directly using external attack-surface scanners before quoting renewal rates.',
          'At MZT Services, we routinely assist clients whose carriers threaten a 40% premium surcharge—or outright non-renewal—unless specific identity and endpoint protections are verified within 30 days. Planning for these requirements ahead of renewal saves both budget and emergency engineering hours.',
        ],
      },
      {
        heading: 'Control 1 & 2: Managed MFA, Dark Web Scanning & Endpoint MDR',
        paragraphs: [
          'Email multi-factor authentication alone is no longer sufficient. Underwriters check that MFA covers remote desktop gateways, VPN tunnels, cloud admin accounts, and privileged local workstation logins. Equally important, Dark Web credential monitoring and 24/7 Managed Detection & Response (MDR) catch compromised passwords before attackers escalate access.',
        ],
      },
      {
        heading: 'Control 3–5: Immutable BDR Backups, Patch SLAs, and Security Training',
        paragraphs: [
          'Ransomware routinely searches local network shares to encrypt attached NAS backup drives first. Policies now mandate immutable off-site snapshots, documented 14-day critical patch management SLAs, and recurring employee security awareness training.',
        ],
      },
    ],
  },
  {
    slug: 'hidden-cost-of-legacy-pbx-and-pri-lines',
    title: 'Auditing Legacy Telecom Bills: Why Aging PRI Lines Quietly Drain Opex',
    category: 'Voice & VoIP',
    publishedAt: 'October 22, 2026',
    readTime: '5 min read',
    author: {
      name: 'Hannah Lindstrom',
      role: 'Lead Unified Communications Engineer, MZT Services',
    },
    excerpt:
      'Many multi-office companies still pay $800+ per month for copper PRI circuits and unmaintained PBX contracts. Learn how SIP trunking and TEM cut voice spend in half.',
    image: '/src/assets/images/portfolio_voip_office_1794610338754.jpg',
    imageAlt: 'Modern conference room VoIP phone system on stone table',
    keyTakeaways: [
      'Legacy analog and PRI circuits regularly carry automatic post-contract rate escalations of 25–40% annually.',
      'SIP trunking + 3CX or cloud VoIP eliminates physical line bottlenecks while adding mobile softphones.',
      'Telecom Expense Management (TEM) identifies orphaned circuits and unused UCaaS seats immediately.',
    ],
    sections: [
      {
        heading: 'The Silent Escalation on Copper & PRI Contracts',
        paragraphs: [
          'Because office phone systems rarely change once installed, telecom invoices often auto-renew quietly in accounting departments for years. As carriers retire aging copper infrastructure, legacy PRI trunks and POTS fax/alarm lines incur steep maintenance surcharges—frequently doubling monthly spend without adding a single feature.',
        ],
      },
      {
        heading: 'How Modern Cloud VoIP, SIP Trunking & TEM Work Together',
        paragraphs: [
          'Our Telecom Expense Management (TEM) process starts with a line-by-line inventory of every circuit, DID block, and toll-free number. Whether keeping an existing Avaya/Nortel system via SIP trunking or migrating onto 3CX Hosted VoIP, businesses keep their exact phone numbers while gaining geo-redundant failover and dramatic monthly savings.',
        ],
      },
    ],
  },
  {
    slug: 'co-managed-it-vs-fully-outsourced-msp',
    title: 'Co-Managed IT vs. Fully Outsourced Support: Choosing the Right Model',
    category: 'IT Strategy',
    publishedAt: 'October 9, 2026',
    readTime: '5 min read',
    author: {
      name: 'Daniel Okafor',
      role: 'Director of Managed Operations, MZT Services',
    },
    excerpt:
      'Having an internal IT manager does not mean they should carry 24/7 alert fatigue alone. Explore how co-managed engineering combines internal context with MSP scale.',
    image: '/src/assets/images/hero_operations_center_1794610336878.jpg',
    imageAlt: 'Collaborative engineering studio with systems analysts',
    keyTakeaways: [
      'Internal IT leads thrive when focused on ERP, line-of-business apps, and executive initiatives—not password resets.',
      'Co-managed partnerships share the same RMM, ticketing queue, and documentation portal transparently.',
      '100% live call answering and 24/7 SOC monitoring eliminate single-point-of-failure staffing risk.',
    ],
    sections: [
      {
        heading: 'Breaking the Solo-Admin Bottleneck',
        paragraphs: [
          'Companies between 40 and 200 employees often hire one capable IT generalist who quickly becomes overwhelmed by daily helpdesk interruptions, workstation imaging, and after-hours server patches. Strategic projects—like ERP upgrades or warehouse automation—stall indefinitely.',
        ],
      },
      {
        heading: 'Shared Tooling Without Turf Friction',
        paragraphs: [
          'In a co-managed model with MZT Services, your internal team keeps full administrative control while offloading routine Tier 1–2 tickets, patch compliance, and 24/7 security monitoring. Both teams work inside one unified ticketing and documentation workspace, giving leadership measurable SLA reporting without replacing trusted internal staff.',
        ],
      },
    ],
  },
  {
    slug: 'microsoft-365-backup-gap-explained',
    title: 'The Microsoft 365 Shared Responsibility Gap Most Organizations Miss',
    category: 'Cloud & M365',
    publishedAt: 'September 28, 2026',
    readTime: '4 min read',
    author: {
      name: 'Elena Rostova',
      role: 'Cloud Infrastructure Lead, MZT Services',
    },
    excerpt:
      'Microsoft guarantees platform uptime—not permanent recovery of accidentally deleted SharePoint libraries or compromised mailboxes. Here is how to close the gap.',
    image: '/src/assets/images/blog_desk_minimal_1794610338484.jpg',
    imageAlt: 'Minimalist cloud engineering workstation and fiber patch module',
    keyTakeaways: [
      'Microsoft 365 native Recycle Bin retention expires in 30 to 93 days depending on workload.',
      'Departing employee license removal permanently purges mailbox data unless archived externally.',
      'Independent cloud-to-cloud backups enable point-in-time restoration for Exchange, Teams, and SharePoint.',
    ],
    sections: [
      {
        heading: 'Uptime Is Not Backup',
        paragraphs: [
          'Moving email and shared drives into Microsoft 365 removes physical server maintenance, leading many teams to assume backups are no longer necessary. However, Microsoft’s own Services Agreement explicitly states that customer data protection and point-in-time recovery remain the subscriber’s responsibility.',
        ],
      },
      {
        heading: 'Protecting Against Synced Ransomware & Accidental Purges',
        paragraphs: [
          'If a workstation syncs encrypted files up to OneDrive or SharePoint—or if a departed employee’s license is reassigned—native retention windows offer limited recourse. Implementing automated, independent SaaS backup snapshots ensures granular item-level recovery in minutes for pennies per user.',
        ],
      },
    ],
  },
];
