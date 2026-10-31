import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = "Jobqode — HCM, CRM & Data Analytics Products | Custom Software Services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#020617",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "linear-gradient(135deg, #6366f1, #7c3aed)",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            J.
          </div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 800 }}>
            Job<span style={{ color: "#818cf8" }}>qode</span>
            <span style={{ color: "#fbbf24" }}>.</span>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 800, lineHeight: 1.12, marginTop: 36, maxWidth: 940 }}>
          Business software for people, customers & data.
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#cbd5e1", marginTop: 20, maxWidth: 880, lineHeight: 1.45 }}>
          {siteConfig.description}
        </div>
        <div style={{ display: "flex", fontSize: 20, color: "#a5b4fc", letterSpacing: 3, marginTop: 36 }}>
          HCM · CRM · DATA ANALYTICS · CUSTOM SOFTWARE
        </div>
      </div>
    ),
    size,
  );
}
