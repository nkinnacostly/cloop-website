/**
 * Single source of truth for company facts and page copy.
 * Registration details are taken verbatim from the CAC filings
 * (Certificate of Incorporation, Memorandum & Articles, Status Report).
 */

export const company = {
  name: "CLOOP UNIVERSE TECH",
  legalName: "CLOOP UNIVERSE TECH LTD",
  shortName: "CLOOP",
  tagline: "Technology that closes the loop.",
  rcNumber: "9771867",
  incorporated: "13 August 2026",
  companyType: "Private Company Limited by Shares",
  status: "Active",
  /* Deliberately not published: TIN, share capital, the registered
     street address (which is a residential address on the CAC filing)
     and the direct phone line. Certified extracts carrying those
     particulars go out on request instead. */
  location: "Lagos, Nigeria",
  locality: "Lagos",
  email: "hello@cloopuniverse.com",
  whatsapp: "https://wa.me/2348122204698",
  founder: {
    name: "Ayang Costly Okon",
    role: "Founder & Managing Director",
  },
} as const;

export const nav = [
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/**
 * Products CLOOP has shipped and runs itself.
 *
 * NOTE FOR MAINTAINERS: the "MyEstateAccess" entry below is still an
 * UNVERIFIED DRAFT — replace every field marked with a TODO before this page
 * goes live. Paidly and Get Any Number are confirmed.
 */
export type Product = {
  slug: string;
  name: string;
  url: string;
  domain: string;
  category: string;
  tagline: string;
  blurb: string;
  features: string[];
  audience: string;
};

export const products: Product[] = [
  {
    slug: "paidly",
    name: "Paidly",
    url: "https://getpaidly.co",
    domain: "getpaidly.co",
    category: "Payments & commerce",
    tagline: "Stop the DM chaos. Get paid to confirm.",
    blurb:
      "Social sellers lose orders in the back-and-forth: price, availability, account number, proof of payment, repeat. Paidly gives every product its own payment link. Paste it in an Instagram caption, a TikTok bio or a WhatsApp status, and the customer opens a branded checkout on their phone — no app, no account — pays a deposit or the full amount, and the money lands with the seller along with an email carrying the order and the customer's details.",
    features: [
      "A payment link for every product",
      "Branded mobile checkout — no app, no signup",
      "Take a deposit or the full amount upfront",
      "Instant order alerts with customer contact details",
      "Product photos, prices and variations",
      "2.5% per sale, nothing monthly",
    ],
    audience: "Instagram, TikTok and WhatsApp sellers",
  },
  {
    slug: "get-any-number",
    name: "Get Any Number",
    url: "https://getanynumberonline.com",
    domain: "getanynumberonline.com",
    category: "Telecoms & connectivity",
    tagline: "Numbers and data, without the SIM.",
    blurb:
      "Two everyday problems, solved in one place. A sign-up demands an SMS code you cannot receive — a service that does not cover your country, a second account, a number you would rather not hand out — so you buy a virtual number and take the code online. Or you just want to be online: an eSIM data plan gets you connected without hunting down a shop, a physical SIM or a contract you did not ask for.",
    // TODO: add the countries covered and the pricing model once confirmed.
    features: [
      "Virtual numbers for SMS verification",
      "Receive codes online — no SIM, no second phone",
      "eSIM data-only plans",
      "Get connected without a physical SIM or a store visit",
      "Buy what you need, when you need it",
    ],
    audience:
      "people verifying accounts online, and travellers who want data without a SIM",
  },
  {
    slug: "myestateaccess",
    name: "MyEstateAccess",
    url: "https://myestateaccess.com",
    domain: "myestateaccess.com",
    category: "Proptech & security",
    // TODO: replace tagline, blurb, features and audience with the real copy.
    tagline: "Access management for gated estates.",
    blurb:
      "TODO — one paragraph on what MyEstateAccess actually does: visitor access codes, resident directories, security-post workflow, dues and levies, or whatever the real scope is, and who it is sold to (estate managers, residents' associations, developers).",
    features: [
      "TODO — feature one",
      "TODO — feature two",
      "TODO — feature three",
      "TODO — feature four",
    ],
    audience: "TODO — who buys this",
  },
];

/** The nine objects registered in the Memorandum of Association. */
export type Service = {
  slug: string;
  title: string;
  short: string;
  blurb: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "software-development",
    title: "Software Development",
    short: "Custom systems built to fit how you actually work.",
    blurb:
      "We design, build, customise, license and maintain software for businesses that have outgrown spreadsheets and off-the-shelf tools. Every system ships with documentation, handover and a maintenance path.",
    deliverables: [
      "Custom business applications",
      "Product design and architecture",
      "Software customisation and licensing",
      "Long-term maintenance and support",
    ],
  },
  {
    slug: "web-development",
    title: "Web Design & Development",
    short: "Sites and web apps that load fast and convert.",
    blurb:
      "From marketing sites to complex web applications, we handle design, build, hosting and domain registration end to end — so you have one team accountable for the whole thing.",
    deliverables: [
      "Website and landing page design",
      "Web application development",
      "Managed hosting and deployment",
      "Domain registration and DNS",
    ],
  },
  {
    slug: "mobile-development",
    title: "Mobile Applications",
    short: "iOS and Android products, from idea to the store.",
    blurb:
      "We design, develop, deploy and maintain mobile applications — including store submission, release management and the update cycle that keeps them healthy after launch.",
    deliverables: [
      "iOS and Android app development",
      "Cross-platform builds",
      "App Store and Play Store deployment",
      "Versioning, updates and monitoring",
    ],
  },
  {
    slug: "ict-consulting",
    title: "ICT Consultancy & Advisory",
    short: "Straight answers before you spend the budget.",
    blurb:
      "Technology decisions are expensive to reverse. We audit what you have, map what you need, and give you a costed plan you can act on — with or without us.",
    deliverables: [
      "Technology audits and assessments",
      "Systems and vendor selection",
      "Digital transformation roadmaps",
      "Technical due diligence",
    ],
  },
  {
    slug: "cloud-managed-it",
    title: "Cloud & Managed IT",
    short: "Infrastructure that stays up while you sleep.",
    blurb:
      "Cloud computing, data storage, backup and fully managed IT services. We set up the infrastructure, automate the backups, watch the alerts and fix things before you notice.",
    deliverables: [
      "Cloud migration and setup",
      "Data storage and backup strategy",
      "Managed IT and monitoring",
      "Disaster recovery planning",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing & Branding",
    short: "Get found, get remembered, get chosen.",
    blurb:
      "Branding, digital marketing, social media management and online advertising — built on the same measurement discipline we bring to engineering.",
    deliverables: [
      "Brand identity and positioning",
      "Social media management",
      "Paid advertising campaigns",
      "SEO and content strategy",
    ],
  },
  {
    slug: "design-multimedia",
    title: "Design & Multimedia",
    short: "Everything your brand needs to look the part.",
    blurb:
      "Graphics design, multimedia production, animation, video editing and content creation — produced in-house so the visual language stays consistent everywhere.",
    deliverables: [
      "Graphic design and collateral",
      "Motion graphics and animation",
      "Video production and editing",
      "Content creation",
    ],
  },
  {
    slug: "data-automation",
    title: "Data & Business Automation",
    short: "Stop paying people to copy and paste.",
    blurb:
      "Data processing, database management, systems integration and business automation. We connect the tools you already pay for and remove the manual steps between them.",
    deliverables: [
      "Database design and management",
      "Systems and API integration",
      "Workflow automation",
      "Reporting and dashboards",
    ],
  },
  {
    slug: "ai-emerging-tech",
    title: "AI & Emerging Technology",
    short: "Applied AI, not science projects.",
    blurb:
      "Artificial intelligence, machine learning, blockchain and emerging technology solutions — scoped against a real business outcome, with the cost and the limits stated upfront.",
    deliverables: [
      "AI assistants and copilots",
      "Machine learning models",
      "Blockchain and Web3 solutions",
      "Intelligent document processing",
    ],
  },
  {
    slug: "procurement-supplies",
    title: "Procurement & Supplies",
    short: "Hardware and general contracts, handled.",
    blurb:
      "General contracts, procurement, supplies, importation and exportation — sourcing the equipment and services that sit alongside the systems we build.",
    deliverables: [
      "IT hardware procurement",
      "General contracts and supplies",
      "Importation and exportation",
      "Vendor management",
    ],
  },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    body: "We start with your business, not your tech stack. Sessions with the people doing the work, a written scope, and a fixed picture of what success looks like.",
  },
  {
    step: "02",
    title: "Design",
    body: "Architecture, interface and data model on paper before a line of code. You approve the direction while changing it is still cheap.",
  },
  {
    step: "03",
    title: "Build",
    body: "Short delivery cycles with something working at the end of each one. You see progress weekly instead of waiting months for a reveal.",
  },
  {
    step: "04",
    title: "Launch",
    body: "Deployment, migration, training and documentation. Your team knows how to run it, and we are on the phone while everyone settles in.",
  },
  {
    step: "05",
    title: "Loop",
    body: "The part most agencies skip. Monitoring, maintenance, iteration on real usage data — the loop that keeps software valuable after go-live.",
  },
] as const;

export const differentiators = [
  {
    title: "One accountable team",
    body: "Software, design, cloud and marketing under a single roof. No finger-pointing between three vendors when something breaks.",
  },
  {
    title: "We ship our own products",
    body: "Paidly, Get Any Number and MyEstateAccess are ours — built, launched and run by this team. We carry the pager for our own software, which is a different discipline from billing for someone else's.",
  },
  {
    title: "Registered and accountable",
    body: `Incorporated with the Corporate Affairs Commission as ${company.legalName}, RC ${company.rcNumber}. Proper contracts, proper invoices, proper recourse.`,
  },
  {
    title: "Built to be handed over",
    body: "Documented code, your accounts, your repositories. We want you to stay because the work is good, not because you are locked in.",
  },
  {
    title: "Priced for Nigerian businesses",
    body: "Global engineering standards, scoped and priced for the market we operate in. We tell you what a thing costs before you commit.",
  },
] as const;

export const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Flutter",
  "React Native",
  "Python",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Figma",
  "Tailwind CSS",
] as const;

export const industries = [
  "Fintech & payments",
  "Retail & e-commerce",
  "Logistics",
  "Healthcare",
  "Education",
  "Real estate",
  "Hospitality",
  "Public sector",
] as const;

export const siteUrl = "https://cloopuniverse.com";
