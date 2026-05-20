"use client";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { useEffect, useRef } from "react";

// Inline lottie player to avoid any double-render issues
function ThemeLottie({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let anim: any;
    import("lottie-web").then((lottie) => {
      if (!ref.current) return;
      ref.current.innerHTML = "";
      anim = lottie.default.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: src,
      });
    });
    return () => { anim?.destroy(); };
  }, [src]);

  return <div ref={ref} style={{ width:"100%", height:"100%" }} />;
}

const broadThemes = [
  { lottie:"/lottie/meditation.json",   title:"Integrative Mental Health Care",       desc:"Bridging traditional Ayurvedic systems with modern psychotherapy, pharmacology, and community-based approaches for holistic care." },
  { lottie:"/lottie/technology.json", title:"Technology in Psychological Practice", desc:"Harnessing AI, tele-health, digital therapeutics, and data-driven tools to expand mental health service delivery." },
  { lottie:"/lottie/challenges.json", title:"Contemporary Psychosocial Challenges", desc:"Understanding the psychological impact of digital culture, social change, climate stress, and evolving identities." },
];

const subThemes = [
  "Digital Mental Health & E-Therapies","Tele-Mental Health & Service Accessibility",
  "Artificial Intelligence in Mental Health Care","Youth, Academic Stress & Campus Mental Health",
  "Trauma, Stress & Coping Mechanisms","Role of Madhya Rasayana in Mental Disorders",
  "Behavioral Addictions & Digital Dependency","Neuropsychology & Cognitive Functioning",
  "Personality Dynamics & Identity Issues","Advances in Psychotherapy & Counseling",
  "Community Mental Health & Public Health Perspectives","Ethical & Legal Issues in Practice",
  "Rehabilitation & Psychosocial Interventions","Role of Sattvavajaya in Mental Disorders",
  "Manovikaras & Its Role in Mental Health Disorders",
];

export default function ThemesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Conference Themes"
        title="Broad Themes & Sub-Themes"
        subtitle="Three overarching pillars exploring the full spectrum of contemporary mental health care."
      />

      {/* Broad themes */}
      <section style={{ background:"#dceef8", padding:"5rem 2rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <ScrollReveal>
            <div className="section-tag">Broad Themes</div>
            <h2 style={{ fontFamily:"Georgia,serif", fontSize:"2.2rem", fontWeight:600, color:"#1a3a6b", marginBottom:"2.5rem" }}>
              Three Pillars of Discourse
            </h2>
          </ScrollReveal>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"2rem" }} className="broad-grid">
            {broadThemes.map((t, i) => (
              <ScrollReveal key={t.title} delay={i * 0.12} direction="up">
                <div style={{
                  background:"#fff",
                  border:"1px solid rgba(20,144,200,0.18)",
                  borderRadius:14,
                  padding:"2.25rem",
                  boxShadow:"0 2px 18px rgba(20,144,200,0.08)",
                  height:"100%",
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center",
                  textAlign:"center",
                }}>
                  {/* Fixed size container prevents overflow/doubling */}
                  <div style={{
                    width:150,
                    height:150,
                    flexShrink:0,
                    marginBottom:"1.25rem",
                    overflow:"hidden",
                  }}>
                    <ThemeLottie src={t.lottie} />
                  </div>

                  <h3 style={{ fontFamily:"Georgia,serif", fontSize:"1.25rem", fontWeight:600, color:"#1a3a6b", marginBottom:"0.75rem" }}>
                    {t.title}
                  </h3>
                  <p style={{ fontSize:"0.88rem", color:"#4a6585", lineHeight:1.8 }}>
                    {t.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wave */}
      <div style={{ background:"#dceef8" }}>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" style={{ display:"block", width:"100%", height:64 }}>
          <path d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" fill="#1a3a6b" />
        </svg>
      </div>

      {/* Sub-themes */}
      <section style={{ background:"#1a3a6b", padding:"5rem 2rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <ScrollReveal>
            <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", fontSize:"0.68rem", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:"#7dd4f5", marginBottom:"0.75rem" }}>
              <span style={{ width:22, height:2, background:"#7dd4f5", display:"block" }} />
              Sub-Themes
            </div>
            <h2 style={{ fontFamily:"Georgia,serif", fontSize:"2.2rem", fontWeight:600, color:"#fff", marginBottom:"0.75rem" }}>
              15 Focused Research Areas
            </h2>
            <p style={{ color:"rgba(200,230,248,0.65)", fontSize:"0.95rem", marginBottom:"3rem", maxWidth:560, lineHeight:1.75 }}>
              Abstracts may address any of the following sub-themes. Cross-disciplinary submissions are especially encouraged.
            </p>
          </ScrollReveal>

          <div style={{ display:"flex", flexWrap:"wrap", gap:"0.75rem" }}>
            {subThemes.map((s, i) => (
              <ScrollReveal key={s} delay={i * 0.04} direction="none">
                <span style={{
                  background:"rgba(220,238,248,0.1)",
                  border:"1px solid rgba(220,238,248,0.2)",
                  color:"rgba(255,255,255,0.78)",
                  padding:"0.55rem 1.1rem",
                  borderRadius:100,
                  fontSize:"0.82rem",
                  display:"block",
                }}>{s}</span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wave */}
      <div style={{ background:"#1a3a6b" }}>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" style={{ display:"block", width:"100%", height:64 }}>
          <path d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" fill="#dceef8" />
        </svg>
      </div>

      {/* CTA */}
      <section style={{ background:"#dceef8", padding:"4rem 2rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", textAlign:"center" }}>
          <ScrollReveal>
            <h2 style={{ fontFamily:"Georgia,serif", fontSize:"2rem", fontWeight:600, color:"#1a3a6b", marginBottom:"0.75rem" }}>
              Ready to Submit Your Research?
            </h2>
            <p style={{ color:"#4a6585", marginBottom:"2rem", fontSize:"0.95rem" }}>
              Abstracts due by 20 June 2026 · Email: iamhcon2026@gmail.com
            </p>
            <a href="/papers" style={{ background:"#1a3a6b", color:"#fff", padding:"0.85rem 2rem", borderRadius:7, textDecoration:"none", fontSize:"0.88rem", fontWeight:700 }}>
              View Submission Guidelines →
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <style>{`@media(max-width:760px){.broad-grid{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}
