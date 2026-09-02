import { ArrowIcon, ButtonLink } from "@/components/ui";
import { LogoMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900 px-5 py-32 text-center sm:px-8 sm:py-44">
      <div className="grain absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(228,112,58,0.16),transparent_65%)] blur-2xl"
      />
      <div className="relative mx-auto max-w-lg">
        <LogoMark className="mx-auto h-12 w-12 animate-spin-slow text-ember-500" />
        <h1 className="mt-8 font-display text-[clamp(2.6rem,7vw,4rem)] leading-none tracking-tight text-cream-50">
          404
        </h1>
        <p className="mt-5 text-pretty leading-relaxed text-cream-100/60">
          This loop does not close. The page you are looking for has moved or
          never existed.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">
            Back home
            <ArrowIcon />
          </ButtonLink>
          <ButtonLink href="/contact" variant="ghost">
            Contact us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
