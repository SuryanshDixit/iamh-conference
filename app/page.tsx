import Link from "next/link";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import Typewriter from "@/components/Typewriter";
import LottiePlayer from "@/components/LottiePlayer";
import Image from "next/image";
import { feSpotLight } from "framer-motion/client";


export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        background: "linear-gradient(135deg, #1a3a6b 0%, #0d5a8a 55%, #1490c8 100%)",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        alignItems: "center", position: "relative", overflow: "hidden",
        paddingTop: "2rem",
      }} className="hero-grid">

        {/* Decorative circles */}
        <div style={{ position:"absolute", top:-80, right:"42%", width:280, height:280, borderRadius:"50%", background:"rgba(255,255,255,0.04)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:40, right:60, width:180, height:180, borderRadius:"50%", background:"rgba(20,144,200,0.15)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", top:"30%", right:"10%", width:120, height:120, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.08)", pointerEvents:"none" }} className="spin-slow" />

        {/* LEFT */}
        <div style={{ padding:"4rem 3rem 4rem 4rem", position:"relative", zIndex:2 }}>
          <div style={{
            fontSize:"0.68rem", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase",
            color:"#a8d8f0", display:"flex", alignItems:"center", gap:"0.75rem", marginBottom:"1.5rem",
          }}>
            <span style={{ display:"block", width:30, height:2, background:"#a8d8f0" }} />
            National Conference · KC-BHU × IAMH
          </div>

          <h1 style={{
            fontFamily:"Georgia, serif", fontSize:"clamp(1rem,2.5vw,2.5rem)",
            fontWeight:600, lineHeight:1.12, color:"#fff", marginBottom:"0.75rem",
          }}>
            Mental Health Care<br />
            in the{" "}
            <span style={{ color:"#7dd4f5", fontStyle:"italic" }}>
              <Typewriter words={["Contemporary Era", "Digital Age", "Changing World"]} />
            </span>
          </h1>

          <p style={{
            fontFamily:"Georgia, serif", fontSize:"1.05rem", fontStyle:"italic",
            color:"rgba(200,230,248,0.82)", marginBottom:"2.5rem", lineHeight:1.6, maxWidth:480,
          }}>
            Bridging Mind, Science, and Technology for Holistic Well-being
          </p>

          <div style={{ display:"flex", flexDirection:"column", gap:"0.7rem", marginBottom:"2.5rem" }}>
            {[
              { icon:"🗓", bold:"10–12 July 2026", rest:" · Workshop + Conference" },
              { icon:"📍", bold:"K.N. Udupa Auditorium, IMS-BHU", rest:", Varanasi" },
              { icon:"📄", bold:"Abstract deadline:", rest:" 20 June 2026" },
            ].map((m,i) => (
              <div key={i} style={{ display:"flex", alignItems:"center", gap:"0.75rem", color:"rgba(255,255,255,0.82)", fontSize:"0.9rem" }}>
                <div style={{ width:30, height:30, borderRadius:"50%", background:"rgba(255,255,255,0.12)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.8rem", flexShrink:0 }}>{m.icon}</div>
                <span><strong style={{ color:"#fff" }}>{m.bold}</strong>{m.rest}</span>
              </div>
            ))}
          </div>

          <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
            <Link href="/register" style={{
              background:"#fff", color:"#1a3a6b",
              padding:"0.8rem 1.75rem", borderRadius:7,
              textDecoration:"none", fontSize:"0.88rem", fontWeight:700,
              letterSpacing:"0.04em", transition:"transform 0.2s",
            }}>Register Now →</Link>
            <Link href="/papers" style={{
              border:"1.5px solid rgba(255,255,255,0.5)", color:"#fff",
              padding:"0.8rem 1.75rem", borderRadius:7,
              textDecoration:"none", fontSize:"0.88rem", fontWeight:500,
            }}>Submit Abstract</Link>
          </div>
        </div>

        {/* RIGHT — floating schedule card */}
        {/* RIGHT — illustration on top, schedule card below */}
<div style={{
  padding:"2rem 3rem 4rem",
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  gap:"2rem",
  position:"relative",
  zIndex:2
}} className="hero-right">

  {/* Lottie illustration with white background */}
  <div style={{
  background:"#ffffff",
  borderRadius:20,
  padding:"0.5rem",
  width:"100%",
  maxWidth:500,
  height:300,
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  overflow:"hidden",
  boxShadow:"0 8px 32px rgba(0,0,0,0.15)",
}}>
  <LottiePlayer src="/lottie/welcome.json" style={{
    width:"100%",
    height:"100%"   
  }}/>
</div>

  
</div>
      </section>

      {/* Wave */}
      <div style={{ background:"linear-gradient(135deg,#1a3a6b,#1490c8)", marginTop:-1 }}>
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" style={{ display:"block", width:"100%", height:70 }}>
          <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="#dceef8" />
        </svg>
      </div>

      {/* ── STATS STRIP ── */}
      <section style={{ background:"#dceef8", padding:"4rem 2rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1.5rem" }} className="stats-grid">
          {[
            { target:3,  suffix:"",   label:"Conference Days",      icon:"📅" },
            { target:15, suffix:"+",  label:"Research Sub-Themes",  icon:"🧠" },
            { target:14, suffix:"",   label:"States Represented",   icon:"🗺" },
            { target:500,suffix:"+",  label:"Expected Delegates",   icon:"👥" },
          ].map((s,i) => (
            <ScrollReveal key={s.label} delay={i*0.1} direction="up">
              <div style={{ background:"#fff", border:"1px solid rgba(20,144,200,0.18)", borderRadius:14, padding:"1.75rem 1.5rem", textAlign:"center", boxShadow:"0 2px 16px rgba(20,144,200,0.08)" }}>
                <div style={{ fontSize:"1.8rem", marginBottom:"0.5rem" }}>{s.icon}</div>
                <div style={{ fontFamily:"Georgia,serif", fontSize:"2.2rem", fontWeight:600, color:"#1490c8", lineHeight:1 }}>
                  <AnimatedCounter target={s.target} suffix={s.suffix} />
                </div>
                <div style={{ fontSize:"0.8rem", color:"#4a6585", marginTop:"0.3rem", fontWeight:500 }}>{s.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section style={{ background:"#fff", padding:"5.5rem 2rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <ScrollReveal>
            <div className="about-header-flex" style={{
              display:"flex",
              flexDirection:"row",
              alignItems:"center",
              gap:"1rem",
            }}>
              <div style={{ flex:1 }}>
                <div className="section-tag">About the Conference</div>
                <h2 style={{ fontFamily:"Georgia,serif", fontSize:"2.2rem", fontWeight:600, color:"#1a3a6b", marginBottom:"1rem", lineHeight:1.25 }}>
                  Where Traditional Wisdom Meets Modern Science
                </h2>
                <p style={{ fontSize:"1rem", color:"#4a6585", maxWidth:680, lineHeight:1.85, marginBottom:"2.75rem" }}>
                  In a world reshaped by digital environments and rising psychosocial stressors, this conference fosters discourse on integrating traditional healing, evidence-based therapies, and emerging technologies for truly holistic mental health care.
                </p>
              </div>

              <div className="brain-img" style={{ flexShrink:0 }}>
                <Image
                  src="/brain sides-amico.svg"
                  alt=""
                  width={220}
                  height={220}
                  style={{ display:"block", width:220, height:"auto" }}
                />
              </div>
            </div>
          </ScrollReveal>

          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"2rem" }} className="about-grid">
            {[
              { badge:"Organising Institution", title:"Dept. of Kayachikitsa, IMS-BHU", text:"Established in 1963, dedicated to Ayurvedic Internal Medicine. The Manas Roga section (est. 1988) focuses on schizophrenia, depression, anxiety and psychosomatic disorders through research and clinical service.", delay:0 },
              { badge:"Collaborating Body",     title:"Indian Academy of Mental Health", text:"A multidisciplinary professional body promoting psychological well-being through collaboration among psychologists, psychiatrists, counselors, and allied professionals across India.", delay:0.15 },
            ].map((c) => (
              <ScrollReveal key={c.badge} delay={c.delay} direction="up">
                <div style={{ background:"#eaf5fb", border:"1px solid rgba(20,144,200,0.18)", borderRadius:14, padding:"2rem" }}>
                  <span style={{ display:"inline-block", fontSize:"0.63rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", background:"#c4e2f4", color:"#1490c8", padding:"0.3rem 0.75rem", borderRadius:4, marginBottom:"1rem" }}>{c.badge}</span>
                  <h3 style={{ fontFamily:"Georgia,serif", fontSize:"1.3rem", fontWeight:600, color:"#1a3a6b", marginBottom:"0.75rem" }}>{c.title}</h3>
                  <p style={{ fontSize:"0.88rem", color:"#4a6585", lineHeight:1.8 }}>{c.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div style={{ marginTop:"2rem" }}>
            <Link href="/about" style={{ display:"inline-flex", alignItems:"center", gap:"0.4rem", color:"#1490c8", fontWeight:700, fontSize:"0.88rem", textDecoration:"none" }}>
              Read more about the conference →
            </Link>
          </div>
        </div>
      </section>

      {/* Wave */}
      <div style={{ background:"#fff" }}>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" style={{ display:"block", width:"100%", height:64 }}>
          <path d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" fill="#c4e2f4" />
        </svg>
      </div>

      {/* ── THEMES ── */}
      <section style={{ background:"#c4e2f4", padding:"5.5rem 2rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <ScrollReveal>
            <div className="section-tag">Conference Themes</div>
            <h2 style={{ fontFamily:"Georgia,serif", fontSize:"2.2rem", fontWeight:600, color:"#1a3a6b", marginBottom:"1rem" }}>
              Three Broad Pillars
            </h2>
            <p style={{ color:"#4a6585", maxWidth:580, lineHeight:1.8, marginBottom:"3rem", fontSize:"0.95rem" }}>
              From integrative Ayurvedic approaches to AI and digital therapeutics — spanning the full spectrum of modern mental health.
            </p>
          </ScrollReveal>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.5rem" }} className="themes-grid">
  {[
    { lottie:"/lottie/meditation.json",    title:"Integrative Mental Health Care",       desc:"Traditional Ayurvedic systems blended with modern psychotherapy and community-based care." },
    { lottie:"/lottie/technology.json",  title:"Technology in Psychological Practice", desc:"AI, tele-health, digital therapeutics expanding mental health service delivery." },
    { lottie:"/lottie/challenges.json",  title:"Contemporary Psychosocial Challenges", desc:"Digital culture, social change, trauma, identity — addressed with cultural sensitivity." },
  ].map((t,i) => (
    <ScrollReveal key={t.title} delay={i*0.12} direction="up">
      <div style={{ background:"#fff", border:"1px solid rgba(20,144,200,0.2)", borderRadius:14, padding:"2rem", height:"100%", boxShadow:"0 2px 18px rgba(20,144,200,0.08)", display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center" }}>
        
        {/* Lottie animation — small, centered */}
        <div style={{ width:150, height:150, marginBottom:"1.25rem", flexShrink:0, overflow:"hidden" }}>
          <LottiePlayer src={t.lottie} />
        </div>

        <h3 style={{ fontFamily:"Georgia,serif", fontSize:"1.2rem", fontWeight:600, color:"#1a3a6b", marginBottom:"0.6rem" }}>{t.title}</h3>
        <p style={{ fontSize:"0.87rem", color:"#4a6585", lineHeight:1.75 }}>{t.desc}</p>
      </div>
    </ScrollReveal>
  ))}
</div>
          <div style={{ marginTop:"2.5rem" }}>
            <Link href="/themes" style={{ background:"#1a3a6b", color:"#fff", padding:"0.8rem 1.75rem", borderRadius:7, textDecoration:"none", fontSize:"0.88rem", fontWeight:700 }}>
              View All Sub-Themes →
            </Link>
          </div>
        </div>
      </section>

      {/* Wave */}
      <div style={{ background:"#c4e2f4" }}>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" style={{ display:"block", width:"100%", height:64 }}>
          <path d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" fill="#dceef8" />
        </svg>
      </div>

      {/* ── CTA STRIP ── */}
      <section style={{ background:"#dceef8", padding:"4.5rem 2rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <ScrollReveal direction="none">
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"2rem" }}>
              <div>
                <h2 style={{ fontFamily:"Georgia,serif", fontSize:"1.9rem", fontWeight:600, color:"#1a3a6b", marginBottom:"0.5rem" }}>
                  Ready to Join Us in Varanasi?
                </h2>
                <p style={{ color:"#4a6585", fontSize:"0.93rem" }}>Abstract deadline: 20 June 2026 · Early bird closes: 1 June 2026</p>
              </div>
              <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
                <Link href="/register" style={{ background:"#1a3a6b", color:"#fff", padding:"0.85rem 1.75rem", borderRadius:7, textDecoration:"none", fontSize:"0.88rem", fontWeight:700 }}>
                  Register Now
                </Link>
                <Link href="/papers" style={{ background:"#1490c8", color:"#fff", padding:"0.85rem 1.75rem", borderRadius:7, textDecoration:"none", fontSize:"0.88rem", fontWeight:700 }}>
                  Submit Abstract
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />

      <style>{`
      @media(max-width:860px) {
        .hero-grid { grid-template-columns: 1fr !important; }
        .hero-right { 
          display: flex !important;
          padding: 1rem 1.5rem 3rem !important;
        }
        .stats-grid { grid-template-columns: 1fr 1fr !important; }
        .about-grid { grid-template-columns: 1fr !important; }
        .themes-grid { grid-template-columns: 1fr !important; }
      }
      @media(max-width:480px) {
        .stats-grid { grid-template-columns: 1fr !important; }
      }
    `}
      </style>
      <style>{`
      @media(max-width:760px){
        .about-grid { grid-template-columns:1fr !important; }
        .about-header-flex { flex-direction: column !important; align-items: center !important; text-align: center !important; }
        .brain-img { order: -1; }
        .brain-img img { width: min(180px, 55vw) !important; }
      }
      @media(max-width:480px){
        .about-header-flex {
          flex-direction: column-reverse !important;
          align-items: center !important;
          text-align: center !important;
        }
        .about-header-flex .section-tag {
          justify-content: center;
        }
      }
    `}</style>
    </>
  );
}
