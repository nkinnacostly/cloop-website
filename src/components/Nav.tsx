"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ButtonLink } from "./ui";
import { nav } from "@/lib/site";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll behind the open sheet.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-cream-200/10 bg-ink-900/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[68px] w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        {/* Left: desktop links */}
        <div className="hidden flex-1 items-center gap-7 md:flex">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  active
                    ? "text-cream-50"
                    : "text-cream-100/60 hover:text-cream-50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Centre: wordmark */}
        <Link
          href="/"
          className="text-base md:absolute md:left-1/2 md:-translate-x-1/2"
          aria-label={`${"CLOOP"} Universe Tech — home`}
        >
          <Logo />
        </Link>

        {/* Right: CTA + mobile trigger */}
        <div className="flex flex-1 items-center justify-end gap-3">
          <ButtonLink
            href="/contact"
            variant="ghost"
            className="hidden !px-5 !py-2.5 sm:inline-flex"
          >
            Book a free call
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-200/15 text-cream-100 md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-[1.5px] w-4 bg-current transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-4 bg-current transition-transform duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-cream-200/10 bg-ink-900/95 backdrop-blur-xl md:hidden"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-5">
          {[{ href: "/", label: "Home" }, ...nav].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 font-display text-2xl text-cream-50 transition-colors hover:bg-cream-100/5"
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink
            href="/contact"
            variant="ember"
            className="mt-3 w-full"
            onClick={() => setOpen(false)}
          >
            Book a free call
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
