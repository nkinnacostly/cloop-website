import Link from "next/link";
import { HeroArt } from "@/components/HeroArt";
import { Reveal } from "@/components/Reveal";
import {
  ArrowIcon,
  Badge,
  ButtonLink,
  Eyebrow,
  ExternalIcon,
  Section,
} from "@/components/ui";
import {
  company,
  services,
  products,
  process,
  differentiators,
  stack,
  industries,
} from "@/lib/site";

const stats = [
  { value: `${products.length}`, label: "Products shipped and running" },
  { value: `${services.length}`, label: "Service lines, one team" },
  { value: `RC ${company.rcNumber}`, label: "CAC registered company" },
];

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative isolate overflow-hidden bg-ink-900">
        <div className="grain absolute inset-0 z-10" />
        <div
          aria-hidden="true"
          className="absolute -right-40 -top-52 h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(circle,rgba(228,112,58,0.22),transparent_62%)] blur-2xl"
        />
        <div
          aria-hidden="true"
          className="absolute -left-56 top-40 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(92,192,177,0.14),transparent_65%)] blur-2xl"
        />

        <div className="relative z-20 mx-auto w-full max-w-6xl px-5 pb-14 pt-16 sm:px-8 sm:pt-24 lg:pb-20 lg:pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
            <div>
              <Reveal>
                <Badge>
                  <span className="h-1.5 w-1.5 rounded-full bg-ember-500" />
                  Software · Cloud · AI
                </Badge>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-7 font-display text-[clamp(2.9rem,7.4vw,5rem)] font-normal leading-[0.95] tracking-[-0.02em] text-cream-50">
                  Technology that
                  <br />
                  <span className="text-cream-100/55">closes the loop.</span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-7 max-w-xl text-pretty text-[1.02rem] leading-relaxed text-cream-100/65">
                  {company.legalName} builds the software, websites, mobile
                  apps, cloud infrastructure and AI systems that Nigerian
                  businesses run on — designed, shipped and maintained by one
                  accountable team.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <ButtonLink href="/contact">
                    Start a project
                    <ArrowIcon />
                  </ButtonLink>
                  <ButtonLink href="/services" variant="ghost">
                    What we do
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cream-100/15">
                      <ArrowIcon className="h-3 w-3" />
                    </span>
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            {/* Illustration */}
            <Reveal delay={200} className="relative">
              <div className="relative mx-auto max-w-[30rem] lg:max-w-none">
                <HeroArt className="h-auto w-full" />
              </div>
            </Reveal>
          </div>

          {/* Stats + stack */}
          <Reveal delay={320}>
            <div className="mt-14 grid gap-10 border-t border-cream-200/10 pt-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <dl className="flex flex-wrap gap-x-12 gap-y-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block font-display text-[2.1rem] leading-none tracking-tight text-cream-50">
                        {stat.value}
                      </span>
                      <span className="mt-2 block text-xs tracking-wide text-cream-100/45">
                        {stat.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="lg:text-right">
                <p className="mb-3 text-[0.7rem] uppercase tracking-[0.2em] text-cream-100/35">
                  We build with
                </p>
                <ul className="flex flex-wrap gap-x-5 gap-y-2 lg:justify-end">
                  {stack.slice(0, 6).map((tech) => (
                    <li key={tech} className="text-sm text-cream-100/60">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------ Products */}
      <Section className="border-t border-cream-200/10 bg-ink-950 py-20 sm:py-28">
        <div className="grain absolute inset-0" />
        <div className="relative">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <Reveal>
              <Eyebrow>Our products</Eyebrow>
              <h2 className="max-w-2xl text-balance font-display text-[clamp(2rem,4.4vw,3.1rem)] leading-[1.05] tracking-[-0.015em] text-cream-50">
                Software we built, launched and still run.
              </h2>
              <p className="mt-5 max-w-xl text-pretty leading-relaxed text-cream-100/60">
                The quickest way to judge a technology partner is to look at
                what they have shipped for themselves. These are ours — live
                products with real users, not case studies.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ButtonLink href="/products" variant="ghost">
                All products
                <ArrowIcon />
              </ButtonLink>
            </Reveal>
          </div>

          <ul className="mt-14 grid gap-5 lg:grid-cols-3">
            {products.map((product, i) => (
              <Reveal
                as="li"
                key={product.slug}
                delay={i * 90}
                className="group relative overflow-hidden rounded-2xl border border-cream-200/12 bg-cream-100/[0.03] transition-colors duration-300 hover:border-ember-400/35"
              >
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col p-7"
                >
                  <span className="text-[0.7rem] uppercase tracking-[0.18em] text-ember-400/80">
                    {product.category}
                  </span>
                  <h3 className="mt-4 font-display text-[1.9rem] leading-tight tracking-tight text-cream-50">
                    {product.name}
                  </h3>
                  <p className="mt-2.5 text-[0.95rem] leading-snug text-cream-100/75">
                    {product.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-cream-100/50">
                    For {product.audience}.
                  </p>
                  <span className="mt-auto flex items-center gap-1.5 pt-7 text-sm text-cream-100/45 transition-colors group-hover:text-ember-400">
                    {product.domain}
                    <ExternalIcon className="h-3.5 w-3.5" />
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* ------------------------------------------------------------ Services */}
      <Section className="border-t border-cream-200/10 bg-ink-900 py-20 sm:py-28">
        <div className="grain absolute inset-0" />
        <div className="relative">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <Reveal>
              <Eyebrow>What we do</Eyebrow>
              <h2 className="max-w-2xl text-balance font-display text-[clamp(2rem,4.4vw,3.1rem)] leading-[1.05] tracking-[-0.015em] text-cream-50">
                Ten service lines. One team you can call.
              </h2>
              <p className="mt-5 max-w-xl text-pretty leading-relaxed text-cream-100/60">
                Most companies stitch together a developer, a designer, a
                marketer and an IT vendor — then spend their week translating
                between them. We do the whole stack, so the pieces are built to
                fit from day one.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ButtonLink href="/services" variant="ghost">
                All services
                <ArrowIcon />
              </ButtonLink>
            </Reveal>
          </div>

          <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-cream-200/10 bg-cream-200/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal
                as="li"
                key={service.slug}
                delay={(i % 3) * 90}
                className="group relative bg-ink-900"
              >
                <Link
                  href={`/services#${service.slug}`}
                  className="flex h-full flex-col gap-3 p-7 transition-colors duration-300 hover:bg-ink-800/70"
                >
                  <span className="font-mono text-xs tracking-widest text-ember-500/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[1.6rem] leading-tight tracking-tight text-cream-50">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-cream-100/55">
                    {service.short}
                  </p>
                  <span className="mt-auto pt-5 text-sm text-ember-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Read more &rarr;
                  </span>
                </Link>
              </Reveal>
            ))}

            {/* Fills the trailing cells of the grid rather than leaving a hole */}
            <Reveal
              as="li"
              delay={90}
              className="flex flex-col justify-center gap-4 bg-ink-950/60 p-7 sm:col-span-2"
            >
              <h3 className="font-display text-[1.6rem] leading-tight tracking-tight text-cream-50">
                Not sure which of these you need?
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-cream-100/55">
                Describe the problem in plain language and we will tell you what
                it maps to — and what it should cost.
              </p>
              <div className="pt-2">
                <ButtonLink href="/contact" variant="ember" className="!py-2.5">
                  Tell us the problem
                  <ArrowIcon />
                </ButtonLink>
              </div>
            </Reveal>
          </ul>
        </div>
      </Section>

      {/* ------------------------------------------------------------ Approach */}
      <Section className="bg-cream-100 py-20 text-ink-900 sm:py-28">
        <Reveal>
          <Eyebrow tone="light">How we work</Eyebrow>
          <h2 className="max-w-2xl text-balance font-display text-[clamp(2rem,4.4vw,3.1rem)] leading-[1.05] tracking-[-0.015em] text-ink-900">
            A loop, not a handover.
          </h2>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-ink-800/70">
            Software is not finished when it launches — that is when it starts
            earning. Our process is built to keep improving the thing after it
            is live.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900/10 md:grid-cols-2 lg:grid-cols-5">
          {process.map((phase, i) => (
            <Reveal
              as="li"
              key={phase.step}
              delay={i * 80}
              className="flex flex-col gap-3 bg-cream-100 p-7"
            >
              <span className="font-mono text-xs tracking-widest text-ember-600">
                {phase.step}
              </span>
              <h3 className="font-display text-2xl leading-tight tracking-tight text-ink-900">
                {phase.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-800/65">
                {phase.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* --------------------------------------------------------------- Why us */}
      <Section className="bg-ink-900 py-20 sm:py-28">
        <div className="grain absolute inset-0" />
        <div className="relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Eyebrow>Why CLOOP</Eyebrow>
            <h2 className="text-balance font-display text-[clamp(2rem,4.4vw,3.1rem)] leading-[1.05] tracking-[-0.015em] text-cream-50">
              A young company with old-fashioned accountability.
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-cream-100/60">
              We are new, and we are not going to pretend otherwise. What we
              offer instead of a decade of logos is three products you can open
              in a browser right now, a registered company, and a named person
              answering the phone.
            </p>
            <div className="mt-8">
              <ButtonLink href="/about" variant="ghost">
                About the company
                <ArrowIcon />
              </ButtonLink>
            </div>
          </Reveal>

          <ul className="grid gap-5 sm:grid-cols-2">
            {differentiators.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 90}
                className="rounded-2xl border border-cream-200/10 bg-cream-100/[0.03] p-6 transition-colors duration-300 last:sm:col-span-2 hover:border-ember-400/30"
              >
                <h3 className="font-display text-xl leading-snug tracking-tight text-cream-50">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-100/55">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* ----------------------------------------------------------- Industries */}
      <section className="relative overflow-hidden border-y border-cream-200/10 bg-ink-950 py-10">
        <div className="marquee-mask flex">
          <ul className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
            {[...industries, ...industries].map((industry, i) => (
              <li
                key={`${industry}-${i}`}
                className="flex shrink-0 items-center gap-10 whitespace-nowrap text-sm tracking-wide text-cream-100/45"
              >
                {industry}
                <span className="h-1 w-1 rounded-full bg-ember-500/60" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------------ CTA */}
      <Section className="relative overflow-hidden bg-ink-900 py-24 sm:py-32">
        <div className="grain absolute inset-0" />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(228,112,58,0.16),transparent_65%)] blur-2xl"
        />
        <Reveal className="relative text-center">
          <h2 className="mx-auto max-w-3xl text-balance font-display text-[clamp(2.2rem,5.6vw,4rem)] leading-[1.02] tracking-[-0.02em] text-cream-50">
            Tell us what is broken. We will tell you what it takes to fix it.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-pretty leading-relaxed text-cream-100/60">
            A 30-minute call, no charge and no obligation. You leave with a
            clear view of scope, timeline and cost — even if you build it with
            someone else.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="/contact" variant="ember">
              Book a free call
              <ArrowIcon />
            </ButtonLink>
            <ButtonLink href={`mailto:${company.email}`} variant="ghost">
              {company.email}
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
