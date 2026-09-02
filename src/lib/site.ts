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
 * All three entries were written from each product's own live site on
 * 2 September 2026. Taglines are the products' own. Re-check the counts
 * (services, countries) and the payment partners when they change.
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
    category: "Invoicing & payments",
    tagline: "The admin side of freelancing, handled.",
    blurb:
      "Freelancers lose hours and money to their own back office — chasing an invoice, getting an agreement signed, remembering what actually came in, then reconstructing the year at tax time. Paidly puts invoicing, contracts and earnings in one place. Send a professional invoice with a Pay Now button in about a minute, get a service agreement e-signed in minutes, and have every payment tracked the moment it lands — then export the whole year as PDF or CSV.",
    features: [
      "Professional invoices with a Pay Now button",
      "Service agreements signed with built-in e-signatures",
      "Payments tracked automatically as they land",
      "Earnings dashboard, income sources and reports",
      "Annual income export as PDF or CSV",
      "Flutterwave and Paystack across Nigeria, Ghana, Kenya and South Africa",
    ],
    audience: "freelance designers, developers and writers across Africa",
  },
  {
    slug: "get-any-number",
    name: "Get Any Number",
    url: "https://getanynumberonline.com",
    domain: "getanynumberonline.com",
    category: "Telecoms & connectivity",
    tagline: "Verify anything. Instantly.",
    blurb:
      "Telegram, Tinder and Google all reject VoIP numbers, because cheap unlimited numbers are how fake accounts get made. Get Any Number sidesteps that by using the real thing: every number comes from a physical SIM on a mobile carrier, so lookup databases read it as an ordinary mobile line and it clears the same checks. Pick a service and a country, get a number in seconds, read the code in the dashboard — and pay only if a code actually arrives. Long-term rentals cover accounts you sign into repeatedly, and data-only eSIMs cover the trip.",
    features: [
      "Real SIM numbers, not VoIP ranges",
      "1,300+ services across 150+ countries",
      "Pay only when a code arrives",
      "Automatic refund if the 20-minute session expires empty",
      "Long-term rentals for repeat logins",
      "Data-only eSIMs in 190+ countries",
    ],
    audience:
      "developers and anyone signing up to platforms that reject VoIP numbers",
  },
  {
    slug: "myestateaccess",
    name: "MyEstateAccess",
    url: "https://myestateaccess.com",
    domain: "myestateaccess.com",
    category: "Proptech & security",
    tagline: "The gate book, replaced by a code that expires.",
    blurb:
      "A paper book at the boom is a queue, an illegible name and a phone number nobody will ever call. MyEstateAccess replaces it with a single-use code: the resident taps once and forwards the code however they already talk to their visitor, the guard types it in and gets a clear admit-or-refuse with the house name, and the code is spent the moment it is accepted. It also keeps working when the network does not — the guard's phone holds a local copy of the estate's live codes, so a signal outage never becomes a gate outage.",
    features: [
      "Single-use visitor codes that expire after six hours",
      "Verification works offline at the gate, then syncs",
      "Nothing for the visitor to install — no app, no account",
      "Searchable trail of every entry and every refusal",
      "Separate views for residents, guards, managers and operators",
      "Live codes visible only to the resident who created them",
    ],
    audience: "gated and security estates in South Africa",
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
