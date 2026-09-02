import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, Section } from "@/components/ui";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to CLOOP UNIVERSE TECH LTD about software, web, mobile, cloud, automation or AI work. Based in Lagos, Nigeria. Free 30-minute scoping call.",
};

const channels = [
  {
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
    note: "Best for briefs and documents",
  },
  {
    label: "WhatsApp",
    value: "Message us",
    href: company.whatsapp,
    note: "Quick questions and voice notes, Mon–Fri 9am–6pm WAT",
  },
];

const faqs = [
  {
    q: "How quickly can you start?",
    a: "Discovery usually begins within a week of a signed scope. Smaller pieces of work — a website, an automation, an audit — can often start sooner.",
  },
  {
    q: "Do you work with clients outside Lagos?",
    a: "Yes. We work remotely with clients across Nigeria and internationally, and travel for on-site sessions when a project needs it.",
  },
  {
    q: "What does the first call cost?",
    a: "Nothing. Thirty minutes, no obligation. You leave with a view of scope, timeline and rough cost whether or not you hire us.",
  },
  {
    q: "Can you take over a project someone else started?",
    a: "Often, yes. We start with a short technical audit of the existing code and infrastructure, then tell you honestly whether continuing or rebuilding is cheaper.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-900 px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
        <div className="grain absolute inset-0" />
        <div
          aria-hidden="true"
          className="absolute -right-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(228,112,58,0.2),transparent_65%)] blur-2xl"
        />

        <div className="relative mx-auto w-full max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <Reveal>
                <Eyebrow>Contact</Eyebrow>
                <h1 className="text-balance font-display text-[clamp(2.6rem,6vw,4.2rem)] leading-[0.98] tracking-[-0.02em] text-cream-50">
                  Let&rsquo;s talk about the work.
                </h1>
                <p className="mt-6 max-w-md text-pretty leading-relaxed text-cream-100/65">
                  Tell us what you are trying to build or fix. We reply to every
                  serious enquiry within one business day.
                </p>
              </Reveal>

              <Reveal delay={120}>
                <ul className="mt-10 space-y-px overflow-hidden rounded-2xl border border-cream-200/10 bg-cream-200/10">
                  {channels.map((channel) => (
                    <li key={channel.label} className="bg-ink-900">
                      <a
                        href={channel.href}
                        className="flex items-center justify-between gap-4 p-5 transition-colors hover:bg-ink-800/70"
                        {...(channel.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        <span>
                          <span className="block text-[0.7rem] uppercase tracking-[0.18em] text-cream-100/40">
                            {channel.label}
                          </span>
                          <span className="mt-1.5 block text-[0.95rem] text-cream-50">
                            {channel.value}
                          </span>
                          <span className="mt-1 block text-xs text-cream-100/40">
                            {channel.note}
                          </span>
                        </span>
                        <span
                          aria-hidden="true"
                          className="text-ember-400"
                        >
                          &rarr;
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-8 rounded-2xl border border-cream-200/10 p-6">
                  <h2 className="text-[0.7rem] uppercase tracking-[0.18em] text-cream-100/40">
                    Where we are
                  </h2>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-cream-100/70">
                    {company.location}. We work remotely with clients across
                    Nigeria and internationally, and meet on site when a project
                    calls for it.
                  </p>
                  <p className="mt-4 text-xs text-cream-100/40">
                    {company.legalName} &middot; RC {company.rcNumber}
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={160}>
              <div className="rounded-3xl border border-cream-200/12 bg-cream-100/[0.03] p-6 sm:p-9">
                <h2 className="font-display text-3xl leading-tight tracking-tight text-cream-50">
                  Send us a brief
                </h2>
                <p className="mt-2 mb-8 text-sm text-cream-100/50">
                  Fields marked * are required.
                </p>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Section className="border-t border-cream-200/10 bg-ink-950 py-20 sm:py-24">
        <div className="grain absolute inset-0" />
        <div className="relative grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="text-balance font-display text-[clamp(1.9rem,4vw,2.6rem)] leading-[1.05] tracking-[-0.015em] text-cream-50">
              Before you write.
            </h2>
          </Reveal>
          <dl className="divide-y divide-cream-200/10">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 70} className="py-6 first:pt-0">
                <dt className="font-display text-xl leading-snug tracking-tight text-cream-50">
                  {faq.q}
                </dt>
                <dd className="mt-2.5 max-w-2xl text-pretty leading-relaxed text-cream-100/60">
                  {faq.a}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </Section>
    </>
  );
}
