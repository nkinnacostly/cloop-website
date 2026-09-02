import { company } from "@/lib/site";

/**
 * The CLOOP mark: an open ring closing on itself, with the travelling
 * node at the seam — the "loop" the company is named for.
 */
export function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle
        cx="16"
        cy="16"
        r="11"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeDasharray="52 17"
        transform="rotate(-38 16 16)"
      />
      <circle cx="24.6" cy="9.4" r="3.4" fill="currentColor" />
    </svg>
  );
}

export function Logo({
  className = "",
  showSuffix = true,
}: {
  className?: string;
  showSuffix?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-[1.35em] w-[1.35em] text-ember-500" />
      <span className="font-display text-[1.15em] leading-none tracking-tight text-cream-50">
        {company.shortName}
        {showSuffix && (
          <span className="text-cream-100/45"> Universe</span>
        )}
      </span>
    </span>
  );
}
