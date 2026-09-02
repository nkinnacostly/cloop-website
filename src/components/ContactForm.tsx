"use client";

import { useState, type FormEvent } from "react";
import { ArrowIcon } from "./ui";
import { company, services } from "@/lib/site";

const budgets = [
  "Under ₦500,000",
  "₦500,000 – ₦2,000,000",
  "₦2,000,000 – ₦10,000,000",
  "Above ₦10,000,000",
  "Not sure yet",
];

const fieldClass =
  "w-full rounded-xl border border-cream-200/15 bg-cream-100/[0.04] px-4 py-3 text-[0.95rem] text-cream-50 placeholder:text-cream-100/35 transition-colors focus:border-ember-400/60 focus:outline-none";

const labelClass =
  "mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-cream-100/45";

/**
 * Composes the enquiry into a pre-filled email and hands it to the visitor's
 * mail client — no backend, no third-party data processor.
 *
 * To switch to a hosted form service or your own API route later, replace the
 * body of `handleSubmit` with a fetch() to that endpoint; the markup and the
 * `sent` success state can stay exactly as they are.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    const subject = `New enquiry — ${get("service") || "General"} — ${get("name")}`;
    const body = [
      `Name: ${get("name")}`,
      `Company: ${get("company") || "—"}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone") || "—"}`,
      `Service: ${get("service") || "—"}`,
      `Budget: ${get("budget") || "—"}`,
      "",
      "Project details:",
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className={labelClass}>
          Your name *
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          placeholder="Ada Obi"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          Company
        </label>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          placeholder="Acme Ltd"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="ada@acme.com"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+234 800 000 0000"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          What do you need?
        </label>
        <select
          id="service"
          name="service"
          defaultValue=""
          className={`${fieldClass} appearance-none`}
        >
          <option value="" className="bg-ink-900">
            Select a service
          </option>
          {services.map((service) => (
            <option
              key={service.slug}
              value={service.title}
              className="bg-ink-900"
            >
              {service.title}
            </option>
          ))}
          <option value="Something else" className="bg-ink-900">
            Something else
          </option>
        </select>
      </div>

      <div>
        <label htmlFor="budget" className={labelClass}>
          Budget range
        </label>
        <select
          id="budget"
          name="budget"
          defaultValue=""
          className={`${fieldClass} appearance-none`}
        >
          <option value="" className="bg-ink-900">
            Select a range
          </option>
          {budgets.map((budget) => (
            <option key={budget} value={budget} className="bg-ink-900">
              {budget}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className={labelClass}>
          Tell us about the project *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you trying to build or fix? What is the deadline?"
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-ember-500 px-6 py-3 text-sm font-medium tracking-tight text-ink-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-ember-400 hover:shadow-lift"
        >
          Send enquiry
          <ArrowIcon />
        </button>
        <p
          role="status"
          aria-live="polite"
          className="text-sm text-cream-100/50"
        >
          {sent
            ? "Your mail app should now be open with the message ready to send."
            : "Opens in your mail app, addressed to us."}
        </p>
      </div>
    </form>
  );
}
