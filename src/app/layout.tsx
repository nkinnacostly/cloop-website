import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { company, siteUrl } from "@/lib/site";

const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} — Software, Cloud & AI Company in Lagos, Nigeria`,
    template: `%s — ${company.name}`,
  },
  description:
    "CLOOP UNIVERSE TECH LTD builds software, websites, mobile apps, cloud infrastructure, automation and AI systems for businesses in Nigeria and beyond. CAC registered, RC 9771867.",
  keywords: [
    "software development Nigeria",
    "web development Lagos",
    "mobile app development Nigeria",
    "ICT consultancy Lagos",
    "cloud computing Nigeria",
    "AI solutions Nigeria",
    "CLOOP UNIVERSE TECH",
  ],
  authors: [{ name: company.legalName }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: company.name,
    title: `${company.name} — ${company.tagline}`,
    description:
      "Software, web and mobile development, cloud, automation and AI — built by one accountable team in Lagos, Nigeria.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — ${company.tagline}`,
    description:
      "Software, web and mobile development, cloud, automation and AI — built by one accountable team in Lagos, Nigeria.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#071e2e",
};

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.legalName,
  alternateName: company.name,
  url: siteUrl,
  email: company.email,
  foundingDate: "2026-08-13",
  identifier: `RC ${company.rcNumber}`,
  founder: { "@type": "Person", name: company.founder.name },
  address: {
    "@type": "PostalAddress",
    addressLocality: company.locality,
    addressRegion: "Lagos State",
    addressCountry: "NG",
  },
  description:
    "Software, web and mobile development, cloud, automation and AI for businesses in Nigeria and beyond.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink-900">
        {/* Scroll-reveal never fires without JavaScript, so show everything. */}
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-cream-50 focus:px-5 focus:py-2.5 focus:text-sm focus:text-ink-900"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organisationSchema),
          }}
        />
      </body>
    </html>
  );
}
