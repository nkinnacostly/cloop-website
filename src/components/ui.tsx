import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonVariant = "primary" | "ghost" | "ember";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-tight transition-all duration-200 will-change-transform";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-cream-50 text-ink-900 px-6 py-3 hover:bg-white hover:-translate-y-0.5 hover:shadow-lift",
  ghost:
    "border border-cream-200/20 bg-cream-100/5 text-cream-100 px-6 py-3 backdrop-blur-sm hover:bg-cream-100/10 hover:border-cream-200/35 hover:-translate-y-0.5",
  ember:
    "bg-ember-500 text-ink-950 px-6 py-3 hover:bg-ember-400 hover:-translate-y-0.5 hover:shadow-lift",
};

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">) {
  const isExternal = /^(https?:|mailto:|tel:)/.test(href);
  const classes = `${base} ${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes} {...(rest as ComponentProps<"a">)}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

export function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-cream-200/15 bg-cream-100/5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-cream-100/75 backdrop-blur-sm ${className}`}
    >
      {children}
    </span>
  );
}

export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <p
      className={`mb-4 flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] ${
        tone === "dark" ? "text-ember-400" : "text-ember-600"
      }`}
    >
      <span
        className={`h-px w-6 ${
          tone === "dark" ? "bg-ember-400/50" : "bg-ember-600/40"
        }`}
      />
      {children}
    </p>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 8h10m0 0-4-4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative px-5 sm:px-8 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
