"use client";
import Link from "next/link";

const quickLinks = [
  { href:"/about", label:"About the Conference" },
  { href:"/themes", label:"Themes & Sub-Themes" },
  { href:"/papers", label:"Call for Papers" },
  { href:"/register", label:"Registration" },
  { href:"/committee", label:"Organising Committee" },
  { href:"/venue", label:"Venue & Travel" },
];

export default function Footer() {
  return (
    <footer style={{ background:"#1a3a6b", color:"rgba(255,255,255,0.55)", padding:"3.5rem 2rem 2rem" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr", gap:"3rem", paddingBottom:"2.5rem", borderBottom:"1px solid rgba(255,255,255,0.1)", marginBottom:"2rem" }} className="footer-grid">
          <div>
            <div style={{ fontFamily:"Georgia,serif", fontSize:"1.2rem", color:"#dceef8", marginBottom:"0.75rem", lineHeight:1.35, fontWeight:600 }}>
              BHU–IAMH National Conference 2026<br />on Mental Health Care
            </div>
            <p style={{ fontSize:"0.82rem", lineHeight:1.75, maxWidth:320 }}>
              Organised by the Department of Kayachikitsa, IMS-BHU, Varanasi, in collaboration with the Indian Academy of Mental Health (IAMH). 10–12 July 2026, K.N. Udupa Auditorium, Varanasi.
            </p>
          </div>
          <div>
            <h5 style={{ fontSize:"0.68rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"rgba(255,255,255,1.0)", marginBottom:"1rem" }}>Quick Links</h5>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:"0.5rem" }}>
              {quickLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color:"rgba(255,255,255,0.5)", textDecoration:"none", fontSize:"0.82rem" }}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 style={{ fontSize:"0.68rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"rgba(255,255,255,1.0)", marginBottom:"1rem" }}>Contact</h5>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:"0.5rem" }}>
              {[
                { href:"mailto:iamhcon2026@gmail.com", label:"iamhcon2026@gmail.com" },
                { href:"tel:9696384984", label:"+91 9696384984" },
                { href:"tel:9628279780", label:"+91 9628279780" },
                { href:"https://forms.gle/1rzX5EWff6NhvWHa8", label:"Register Online" },
              ].map(l => (
                <li key={l.href}>
                  <a href={l.href} style={{ color:"rgba(255,255,255,0.5)", textDecoration:"none", fontSize:"0.82rem" }}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ display:"flex", justifyContent:"space-between", fontSize:"0.75rem", flexWrap:"wrap", gap:"0.5rem" }}>
          <span>© 2026 IMS-BHU &amp; IAMH · All rights reserved</span>
          <span>Abstract Deadline: <Link href="/papers" style={{ color:"#7dd4f5", textDecoration:"none" }}>20 June 2026</Link></span>
        </div>
      </div>
      <style>{`@media(max-width:700px){.footer-grid{grid-template-columns:1fr!important;gap:2rem!important}}`}</style>
    </footer>
  );
}
