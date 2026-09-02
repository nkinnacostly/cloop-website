import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { LogoMark } from "@/components/Logo";
import { ArrowIcon, Badge, ButtonLink, Eyebrow, Section } from "@/components/ui";
import { company, differentiators, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "CLOOP UNIVERSE TECH LTD is a Nigerian technology company registered with the Corporate Affairs Commission (RC 9771867), building software, cloud and AI systems from Lagos.",
};

const registry = [
  { label: "Registered name", value: company.legalName },
  { label: "RC number", value: company.rcNumber },
  { label: "Company type", value: company.companyType },
  { label: "Date of incorporation", value: company.incorporated },
  { label: "Registrar", value: "Corporate Affairs Commission, Nigeria" },
  { label: "Status", value: company.status },
];

const principles = [
  {
    title: "Say the real number",
    body: "Estimates that turn out to be fiction help nobody. We would rather quote honestly and lose the job than win it and renegotiate at week six.",
  },
  {
    title: "Write it down",
    body: "Scope, decisions, architecture, handover notes. If it only lives in someone's head, it is not delivered.",
  },
  {
    title: "Ship something small, early",
    body: "The fastest way to be wrong cheaply is to put a working version in front of real users before the budget is spent.",
  },
  {
    title: "Leave clients able to leave",
    body: "Your accounts, your repositories, your data, documented. Lock-in is not a business model we are interested in.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-900 px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-24">
        <div className="grain absolute inset-0" />
        <div
          aria-hidden="true"
          className="absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(92,192,177,0.16),transparent_65%)] blur-2xl"
        />
        <div className="relative mx-auto w-full max-w-6xl">
          <Reveal>
            <Eyebrow>About us</Eyebrow>
            <h1 className="max-w-3xl text-balance font-display text-[clamp(2.6rem,6.2vw,4.4rem)] leading-[0.98] tracking-[-0.02em] text-cream-50">
              A Lagos technology company, built for the long run.
            </h1>
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal delay={120}>
              <div className="space-y-5 text-pretty leading-relaxed text-cream-100/65">
                <p>
                  {company.legalName} was incorporated in Nigeria on{" "}
                  {company.incorporated} as a private company limited by shares,
                  registered with the Corporate Affairs Commission under RC{" "}
                  {company.rcNumber}.
                </p>
                <p>
                  We exist because of a gap that anyone who has commissioned
                  software in this market will recognise: the developer blames
                  the designer, the designer blames the brief, the hosting
                  vendor is unreachable, and the business owner is left holding
                  a half-finished system nobody will own.
                </p>
                <p>
                  CLOOP is built the other way round. Software, web, mobile,
                  cloud, data, design, marketing and AI sit inside one company,
                  under one contract, with one person accountable for the
                  outcome. The name is the promise: a closed loop, where what we
                  build keeps getting better after it goes live instead of
                  quietly rotting.
                </p>
                <p>
                  We are early in our story and we are candid about that. What
                  we bring is engineering discipline, clear pricing, and the
                  kind of attention a new company can give that a large one
                  cannot.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-2xl border border-cream-200/12 bg-cream-100/[0.03] p-8">
                <LogoMark className="h-10 w-10 text-ember-500" />
                <p className="mt-6 font-display text-2xl leading-snug tracking-tight text-cream-50">
                  &ldquo;We wanted to build the kind of technology partner we
                  kept looking for and could not find.&rdquo;
                </p>
                <div className="mt-7 border-t border-cream-200/10 pt-5">
                  <p className="text-sm font-medium text-cream-50">
                    {company.founder.name}
                  </p>
                  <p className="mt-1 text-sm text-cream-100/50">
                    {company.founder.role}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Registration details */}
      <Section className="border-t border-cream-200/10 bg-ink-950 py-20 sm:py-24">
        <div className="grain absolute inset-0" />
        <div className="relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <Eyebrow>Corporate details</Eyebrow>
            <h2 className="text-balance font-display text-[clamp(1.9rem,4vw,2.8rem)] leading-[1.05] tracking-[-0.015em] text-cream-50">
              Everything you need to run due diligence.
            </h2>
            <p className="mt-5 max-w-sm text-pretty leading-relaxed text-cream-100/60">
              Our registration particulars as filed with the Corporate Affairs
              Commission. For procurement and vendor onboarding we provide the
              certified CAC extract, which carries the full particulars —
              including tax identification and registered office.
            </p>
            <Badge className="mt-7">
              <span className="h-1.5 w-1.5 rounded-full bg-sea-400" />
              Status: {company.status}
            </Badge>
          </Reveal>

          <Reveal delay={120}>
            <dl className="grid gap-px overflow-hidden rounded-2xl border border-cream-200/10 bg-cream-200/10 sm:grid-cols-2">
              {registry.map((row) => (
                <div key={row.label} className="bg-ink-950 p-6">
                  <dt className="text-[0.7rem] uppercase tracking-[0.18em] text-cream-100/40">
                    {row.label}
                  </dt>
                  <dd className="mt-2 text-[0.95rem] leading-snug text-cream-50">
                    {row.value}
                  </dd>
                </div>
              ))}
              <div className="bg-ink-950 p-6 sm:col-span-2">
                <dt className="text-[0.7rem] uppercase tracking-[0.18em] text-cream-100/40">
                  Registered office
                </dt>
                <dd className="mt-2 text-[0.95rem] leading-snug text-cream-50">
                  {company.location}
                  <span className="mt-1.5 block text-sm text-cream-100/45">
                    Full registered particulars are on the certified extract we
                    provide for vendor onboarding.
                  </span>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Section>

      {/* Principles */}
      <Section className="bg-cream-100 py-20 text-ink-900 sm:py-28">
        <Reveal>
          <Eyebrow tone="light">How we operate</Eyebrow>
          <h2 className="max-w-2xl text-balance font-display text-[clamp(2rem,4.4vw,3.1rem)] leading-[1.05] tracking-[-0.015em]">
            Four rules we do not bend.
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {principles.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 80}
              className="rounded-2xl border border-ink-900/10 bg-white/60 p-7"
            >
              <h3 className="font-display text-2xl leading-snug tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-800/70">
                {item.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Capability recap */}
      <Section className="bg-ink-900 py-20 sm:py-28">
        <div className="grain absolute inset-0" />
        <div className="relative">
          <Reveal>
            <Eyebrow>Capability</Eyebrow>
            <h2 className="max-w-2xl text-balance font-display text-[clamp(1.9rem,4vw,2.8rem)] leading-[1.05] tracking-[-0.015em] text-cream-50">
              What we are registered — and equipped — to do.
            </h2>
          </Reveal>
          <ul className="mt-10 flex flex-wrap gap-2.5">
            {services.map((service, i) => (
              <Reveal as="li" key={service.slug} delay={i * 40}>
                <a
                  href={`/services#${service.slug}`}
                  className="inline-flex rounded-full border border-cream-200/15 bg-cream-100/5 px-4 py-2 text-sm text-cream-100/70 transition-colors hover:border-ember-400/50 hover:text-cream-50"
                >
                  {service.title}
                </a>
              </Reveal>
            ))}
          </ul>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 80}
                className="border-t border-cream-200/15 pt-5"
              >
                <h3 className="font-display text-xl leading-snug tracking-tight text-cream-50">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-100/55">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={240}>
            <div className="mt-14">
              <ButtonLink href="/contact" variant="ember">
                Work with us
                <ArrowIcon />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
