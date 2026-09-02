import { ImageResponse } from "next/og";
import { company } from "@/lib/site";

export const alt = `${company.name} — ${company.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 78% 18%, #164863 0%, #0a2a3f 45%, #05161f 100%)",
          padding: "72px",
          color: "#f4efe4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: 999,
              border: "6px solid #e4703a",
              borderRightColor: "transparent",
              transform: "rotate(-38deg)",
              display: "flex",
            }}
          />
          <div style={{ display: "flex", gap: 10, fontSize: 34, letterSpacing: -0.5 }}>
            <div style={{ display: "flex" }}>CLOOP</div>
            <div style={{ display: "flex", opacity: 0.45 }}>Universe Tech</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1.02,
              letterSpacing: -2.5,
              maxWidth: 900,
            }}
          >
            Technology that closes the loop.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 30,
              opacity: 0.6,
              maxWidth: 820,
            }}
          >
            Software · Web · Mobile · Cloud · Automation · AI
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            opacity: 0.5,
            borderTop: "1px solid rgba(244,239,228,0.18)",
            paddingTop: 26,
          }}
        >
          <div style={{ display: "flex" }}>Lagos, Nigeria</div>
          <div style={{ display: "flex" }}>{`RC ${company.rcNumber}`}</div>
        </div>
      </div>
    ),
    size
  );
}
