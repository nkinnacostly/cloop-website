import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ArrowIcon, ButtonLink, Eyebrow, Section } from "@/components/ui";
import { company, services, process } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software development, web and mobile apps, ICT consultancy, cloud and managed IT, digital marketing, design, data automation, AI and procurement — the ten service lines of CLOOP UNIVERSE TECH LTD.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-900 px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-24">
        <div className="grain absolute inset-0" />
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(228,112,58,0.18),transparent_65%)] blur-2xl"
        />
        <div className="relative mx-auto w-full max-w-6xl">
          <Reveal>
            <Eyebrow>Services</Eyebrow>
            <h1 className="max-w-3xl text-balance font-display text-[clamp(2.6rem,6.2vw,4.4rem)] leading-[0.98] tracking-[-0.02em] text-cream-50">
              Everything between the idea and the thing that works.
            </h1>
            <p className="mt-7 max-w-xl text-pretty leading-relaxed text-cream-100/65">
              These are the ten objects {company.legalName} is registered to
              carry out — and the ten things we actually do. Every engagement
              starts with a written scope and a fixed price for the first
              phase.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <ul className="mt-12 flex flex-wrap gap-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <a
                    href={`#${service.slug}`}
                    className="inline-flex rounded-full border border-cream-200/15 bg-cream-100/5 px-4 py-2 text-sm text-cream-100/70 transition-colors hover:border-ember-400/50 hover:text-cream-50"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Section className="border-t border-cream-200/10 bg-ink-950 py-8 sm:py-12">
        <div className="grain absolute inset-0" />
        <ul className="relative divide-y divide-cream-200/10">
          {services.map((service, i) => (
            <Reveal
              as="li"
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24 py-12 sm:py-16"
            >
              <div className="grid gap-8 lg:grid-cols-[auto_1fr_1fr] lg:gap-12">
                <span className="font-mono text-xs tracking-widest text-ember-500/70 lg:pt-3">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <h2 className="text-balance font-display text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.05] tracking-[-0.015em] text-cream-50">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-ember-400/90">{service.short}</p>
                </div>

                <div>
                  <p className="text-pretty leading-relaxed text-cream-100/60">
                    {service.blurb}
                  </p>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-cream-100/70"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="bg-cream-100 py-20 text-ink-900 sm:py-28">
        <Reveal>
          <Eyebrow tone="light">Engagement</Eyebrow>
          <h2 className="max-w-2xl text-balance font-display text-[clamp(2rem,4.4vw,3.1rem)] leading-[1.05] tracking-[-0.015em]">
            How a project actually runs.
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900/10 md:grid-cols-2 lg:grid-cols-5">
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
              <h3 className="font-display text-2xl leading-tight tracking-tight">
                {phase.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-800/65">
                {phase.body}
              </p>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={200}>
          <div className="mt-12 flex flex-wrap items-center gap-4 rounded-2xl border border-ink-900/10 bg-white/60 p-7">
            <p className="flex-1 text-pretty leading-relaxed text-ink-800/75">
              Not sure which of these you need? That is normal. Describe the
              problem in plain language and we will tell you what it maps to.
            </p>
            <ButtonLink href="/contact" variant="ember">
              Talk to us
              <ArrowIcon />
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
