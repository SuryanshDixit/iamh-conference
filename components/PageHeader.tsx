import { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  bgImage?: string;
}

export default function PageHeader({ eyebrow, title, subtitle, children, bgImage }: PageHeaderProps) {
  return (
    <div style={{
      background: bgImage
        ? `linear-gradient(to bottom, rgba(15,37,80,0.72) 0%, rgba(15,37,80,0.55) 100%), url('${bgImage}') center/cover no-repeat`
        : "linear-gradient(135deg, #1a3a6b 0%, #1490c8 100%)",
      paddingTop: "7rem", paddingBottom: 0,
      position: "relative", overflow: "hidden",
    }}>
      {/* Decorative circles */}
      <div style={{
        position: "absolute", top: -60, right: -60,
        width: 300, height: 300, borderRadius: "50%",
        background: "rgba(255,255,255,0.05)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: 20, left: -40,
        width: 200, height: 200, borderRadius: "50%",
        background: "rgba(255,255,255,0.04)", pointerEvents: "none",
      }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem 2rem 3.5rem", position: "relative", zIndex: 2 }}>
        <div style={{
          fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.18em",
          textTransform: "uppercase", color: "#a8d8f0",
          display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem",
        }}>
          <span style={{ display: "block", width: 22, height: 2, background: "#a8d8f0" }} />
          {eyebrow}
        </div>
        <h1 style={{
          fontFamily: "Georgia, serif", fontSize: "clamp(1.9rem, 4vw, 2.9rem)",
          fontWeight: 600, lineHeight: 1.2, color: "#fff", marginBottom: subtitle ? "0.75rem" : 0,
        }}>{title}</h1>
        {subtitle && (
          <p style={{
            fontFamily: "Georgia, serif", fontSize: "1.05rem", fontStyle: "italic",
            color: "rgba(220,238,248,0.85)", maxWidth: 620, lineHeight: 1.6,
          }}>{subtitle}</p>
        )}
        {children}
      </div>
      <svg viewBox="0 0 1440 64" preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: 64, marginBottom: -1 }}>
        <path d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" fill="#dceef8" />
      </svg>
    </div>
  );
}
