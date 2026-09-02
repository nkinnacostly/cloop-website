import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import {
  ArrowIcon,
  ButtonLink,
  Eyebrow,
  ExternalIcon,
  Section,
} from "@/components/ui";
import { company, products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Paidly, Get Any Number and MyEstateAccess — the products CLOOP UNIVERSE TECH LTD has built, launched and runs.",
};

export default function ProductsPage() {
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
            <Eyebrow>Our products</Eyebrow>
            <h1 className="max-w-3xl text-balance font-display text-[clamp(2.6rem,6.2vw,4.4rem)] leading-[0.98] tracking-[-0.02em] text-cream-50">
              We are our own hardest client.
            </h1>
            <p className="mt-7 max-w-xl text-pretty leading-relaxed text-cream-100/65">
              {company.legalName} does not only build software to order. We
              design, launch and operate our own products — which means we carry
              the support load, the uptime and the cost of every decision we
              make. It is the fastest way to stay honest about what software
              really takes.
            </p>
          </Reveal>
        </div>
      </section>

      <Section className="border-t border-cream-200/10 bg-ink-950 py-8 sm:py-12">
        <div className="grain absolute inset-0" />
        <ul className="relative divide-y divide-cream-200/10">
          {products.map((product, i) => (
            <Reveal
              as="li"
              key={product.slug}
              id={product.slug}
              className="scroll-mt-24 py-14 sm:py-20"
            >
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                <div>
                  <span className="font-mono text-xs tracking-widest text-ember-500/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 font-display text-[clamp(2.2rem,4.6vw,3.2rem)] leading-[1] tracking-[-0.02em] text-cream-50">
                    {product.name}
                  </h2>
                  <p className="mt-3 text-[1.05rem] leading-snug text-ember-400/90">
                    {product.tagline}
                  </p>

                  <dl className="mt-8 space-y-4 border-t border-cream-200/10 pt-6">
                    <div>
                      <dt className="text-[0.7rem] uppercase tracking-[0.18em] text-cream-100/40">
                        Category
                      </dt>
                      <dd className="mt-1.5 text-sm text-cream-100/75">
                        {product.category}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.7rem] uppercase tracking-[0.18em] text-cream-100/40">
                        Built for
                      </dt>
                      {/* audience reads as a sentence fragment on the home
                          cards ("For …"), so lift the case only here */}
                      <dd className="mt-1.5 text-sm text-cream-100/75 first-letter:uppercase">
                        {product.audience}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-8">
                    <ButtonLink
                      href={product.url}
                      variant="ghost"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit {product.domain}
                      <ExternalIcon />
                    </ButtonLink>
                  </div>
                </div>

                <div>
                  <p className="text-pretty text-[1.02rem] leading-relaxed text-cream-100/65">
                    {product.blurb}
                  </p>
                  <h3 className="mb-4 mt-9 text-[0.7rem] uppercase tracking-[0.18em] text-cream-100/40">
                    What it does
                  </h3>
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-cream-100/70"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500"
                        />
                        {feature}
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
          <Eyebrow tone="light">Build with us</Eyebrow>
          <h2 className="max-w-2xl text-balance font-display text-[clamp(2rem,4.4vw,3.1rem)] leading-[1.05] tracking-[-0.015em]">
            The same team is available for your product.
          </h2>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-ink-800/70">
            Everything above was designed, built, deployed and is maintained
            in-house. If you have a product idea — or an existing one that has
            stalled — that is the team you would be hiring.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="ember">
              Start a project
              <ArrowIcon />
            </ButtonLink>
            <ButtonLink
              href="/services"
              variant="ghost"
              className="!border-ink-900/15 !bg-ink-900/5 !text-ink-900 hover:!bg-ink-900/10"
            >
              What we do
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
