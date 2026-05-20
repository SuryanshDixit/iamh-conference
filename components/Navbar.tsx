"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/themes", label: "Themes" },
  { href: "/papers", label: "Submit Paper" },
  { href: "/committee", label: "Committee" },
  { href: "/venue", label: "Venue" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.88)",
      backdropFilter: "blur(14px)",
      borderBottom: scrolled ? "1px solid rgba(20,144,200,0.2)" : "1px solid transparent",
      transition: "all 0.3s ease",
      boxShadow: scrolled ? "0 2px 20px rgba(20,144,200,0.1)" : "none",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0.85rem 2rem",
      }}>
        <Link href="/" style={{
          fontFamily: "Georgia, 'Cormorant Garamond', serif",
          fontSize: "1rem", color: "#1a3a6b",
          textDecoration: "none", fontWeight: 700, letterSpacing: "0.01em",
        }}>
          <span style={{ color: "#1490c8" }}>BHU–IAMH</span> Conference 2026
        </Link>

        <ul style={{ display: "flex", gap: "1.75rem", listStyle: "none", alignItems: "center" }}
          className="nav-desktop">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} style={{
                fontSize: "0.75rem", fontWeight: 600,
                letterSpacing: "0.08em", textTransform: "uppercase",
                color: pathname === l.href ? "#1490c8" : "#2c4a70",
                textDecoration: "none",
                borderBottom: pathname === l.href ? "2px solid #1490c8" : "2px solid transparent",
                paddingBottom: "2px",
                transition: "color 0.2s, border-color 0.2s",
              }}>{l.label}</Link>
            </li>
          ))}
          <li>
            <Link href="/register" style={{
              background: "#1a3a6b", color: "#fff",
              padding: "0.45rem 1.2rem", borderRadius: 6,
              fontSize: "0.75rem", fontWeight: 700,
              letterSpacing: "0.08em", textTransform: "uppercase",
              textDecoration: "none",
            }}>Register</Link>
          </li>
        </ul>

        <button onClick={() => setOpen(!open)} className="nav-burger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 4 }}
          aria-label="Menu">
          {[0,1,2].map(i => (
            <div key={i} style={{ width: 22, height: 2, background: "#1a3a6b", marginBottom: i < 2 ? 5 : 0 }} />
          ))}
        </button>
      </div>

      {open && (
        <div style={{ background: "#fff", borderTop: "1px solid rgba(20,144,200,0.15)", padding: "1rem 2rem 1.5rem" }}>
          {[...links, { href: "/register", label: "Register" }].map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: "block", padding: "0.6rem 0",
              fontSize: "0.88rem", fontWeight: 600,
              color: pathname === l.href ? "#1490c8" : "#2c4a70",
              textDecoration: "none",
              borderBottom: "1px solid rgba(20,144,200,0.08)",
            }}>{l.label}</Link>
          ))}
        </div>
      )}
      <style>{`
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
