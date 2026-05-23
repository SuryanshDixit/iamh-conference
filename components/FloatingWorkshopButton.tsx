"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingWorkshopButton() {
  const pathname = usePathname();

  // Don't show on the workshop page itself
  if (pathname === "/workshop") return null;

  return (
    <Link
      href="/workshop"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 999,
        background: "linear-gradient(135deg, #1a3a6b, #1490c8)",
        color: "#fff",
        padding: "0.75rem 1.25rem",
        borderRadius: 50,
        textDecoration: "none",
        fontSize: "0.8rem",
        fontWeight: 700,
        letterSpacing: "0.03em",
        boxShadow: "0 4px 20px rgba(20,144,200,0.4)",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        whiteSpace: "nowrap",
        animation: "floatBtn 3s ease-in-out infinite",
      }}
    >
      <span style={{ fontSize: "1rem" }}>🎓</span>
      Pre-Conference Workshop
      <style>{`
        @keyframes floatBtn {
          0%, 100% { transform: translateY(0px); box-shadow: 0 4px 20px rgba(20,144,200,0.4); }
          50%       { transform: translateY(-6px); box-shadow: 0 8px 28px rgba(20,144,200,0.55); }
        }
      `}</style>
    </Link>
  );
}
