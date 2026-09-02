import Link from "next/link";
import { Logo } from "./Logo";
import { company, services } from "@/lib/site";

const columns = [
  {
    heading: "Company",
    links: [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "What we do",
    links: services.slice(0, 5).map((s) => ({
      href: `/services#${s.slug}`,
      label: s.title,
    })),
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cream-200/10 bg-ink-950">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="text-lg">
              <Logo />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-100/55">
              {company.tagline} Software, cloud, design and AI for businesses
              that need technology to actually work.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={`mailto:${company.email}`}
                className="rounded-full border border-cream-200/15 px-4 py-2 text-xs text-cream-100/75 transition-colors hover:border-ember-400/50 hover:text-cream-50"
              >
                {company.email}
              </a>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-cream-200/15 px-4 py-2 text-xs text-cream-100/75 transition-colors hover:border-ember-400/50 hover:text-cream-50"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h2 className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cream-100/40">
                {col.heading}
              </h2>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream-100/70 transition-colors hover:text-ember-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream-200/10 pt-8 text-xs text-cream-100/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {company.legalName}. All rights
            reserved.
          </p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>RC {company.rcNumber}</span>
            <span className="hidden sm:inline" aria-hidden="true">
              &middot;
            </span>
            <span>{company.location}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
