/**
 * Abstract hero illustration: a system of orbits closing on a single core —
 * the "universe" and the "loop" in the company name, rendered as one figure.
 * Pure SVG so it stays crisp at any size and costs no network request.
 */
export function HeroArt({ className = "" }: { className?: string }) {
  const stars = [
    [64, 88, 1.6, 0],
    [128, 44, 1.1, 700],
    [214, 96, 1.4, 1400],
    [452, 62, 1.8, 400],
    [508, 148, 1.2, 1100],
    [40, 236, 1.3, 1800],
    [498, 300, 1.5, 250],
    [96, 342, 1.1, 900],
    [372, 40, 1.2, 1500],
    [24, 148, 1.4, 2100],
  ] as const;

  return (
    <svg
      viewBox="0 0 560 560"
      className={className}
      role="img"
      aria-label="Illustration of orbiting systems converging on a single core"
    >
      <defs>
        <radialGradient id="ha-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f4b389" />
          <stop offset="45%" stopColor="#e4703a" />
          <stop offset="100%" stopColor="#c85a2a" />
        </radialGradient>
        <radialGradient id="ha-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e4703a" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#e4703a" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#e4703a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ha-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f4efe4" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#5cc0b1" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#f4efe4" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient
          id="ha-planet"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="424"
          x2="0"
          y2="600"
        >
          <stop offset="0%" stopColor="#1a5270" />
          <stop offset="45%" stopColor="#0d3149" />
          <stop offset="100%" stopColor="#071e2e" />
        </linearGradient>
        <clipPath id="ha-planet-clip">
          <circle cx="280" cy="760" r="336" />
        </clipPath>
      </defs>

      {/* Ambient glow behind the core */}
      <circle cx="280" cy="256" r="230" fill="url(#ha-glow)" />

      {/* Starfield */}
      <g fill="#f4efe4">
        {stars.map(([cx, cy, r, delay]) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={r}
            className="animate-pulse-soft"
            style={{ animationDelay: `${delay}ms` }}
          />
        ))}
      </g>

      {/* Orbits — three planes, slowly counter-rotating */}
      <g className="animate-spin-slow" style={{ transformOrigin: "280px 256px" }}>
        <ellipse
          cx="280"
          cy="256"
          rx="212"
          ry="86"
          fill="none"
          stroke="url(#ha-ring)"
          strokeWidth="1.5"
        />
        <circle cx="492" cy="256" r="7" fill="#5cc0b1" />
      </g>

      <g
        className="animate-spin-slow"
        style={{
          transformOrigin: "280px 256px",
          animationDirection: "reverse",
          animationDuration: "52s",
        }}
      >
        <ellipse
          cx="280"
          cy="256"
          rx="212"
          ry="86"
          fill="none"
          stroke="url(#ha-ring)"
          strokeWidth="1.5"
          transform="rotate(60 280 256)"
        />
        <circle cx="386" cy="72" r="9" fill="#f4efe4" />
      </g>

      <g
        className="animate-spin-slow"
        style={{ transformOrigin: "280px 256px", animationDuration: "64s" }}
      >
        <ellipse
          cx="280"
          cy="256"
          rx="212"
          ry="86"
          fill="none"
          stroke="url(#ha-ring)"
          strokeWidth="1.5"
          transform="rotate(-60 280 256)"
        />
        <circle cx="174" cy="72" r="5.5" fill="#ee9058" />
      </g>

      {/* Core */}
      <g className="animate-drift" style={{ transformOrigin: "280px 256px" }}>
        <circle
          cx="280"
          cy="256"
          r="62"
          fill="none"
          stroke="#f4efe4"
          strokeOpacity="0.18"
          strokeWidth="1.25"
          strokeDasharray="4 9"
        />
        <circle cx="280" cy="256" r="42" fill="url(#ha-core)" />
        <circle
          cx="280"
          cy="256"
          r="42"
          fill="none"
          stroke="#faf7f1"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        {/* The loop mark, echoed inside the core */}
        <circle
          cx="280"
          cy="256"
          r="20"
          fill="none"
          stroke="#05161f"
          strokeOpacity="0.55"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="94 32"
          transform="rotate(-38 280 256)"
        />
      </g>

      {/* Horizon: the curve of a world, contoured like a topographic map */}
      <g clipPath="url(#ha-planet-clip)">
        <circle cx="280" cy="760" r="336" fill="url(#ha-planet)" />
        <g
          fill="none"
          stroke="#5cc0b1"
          strokeOpacity="0.16"
          strokeWidth="1"
        >
          {[304, 272, 240, 208, 176].map((r) => (
            <circle key={r} cx="280" cy="760" r={r} />
          ))}
        </g>
        {/* Rim light along the horizon */}
        <circle
          cx="280"
          cy="760"
          r="336"
          fill="none"
          stroke="#f4b389"
          strokeOpacity="0.45"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}
