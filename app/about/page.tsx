import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

const objectives = [
  { num:"01", title:"Integrative Approaches",  img:"/objectives/image1.svg", desc:"Promote integration of diverse therapeutic approaches — Ayurvedic, psychological, and technological — in mental health care." },
  { num:"02", title:"Technology & Practice",   img:"/objectives/image2.svg", desc:"Explore the role of AI, tele-mental health, and digital therapeutics in psychological assessment and clinical intervention." },
  { num:"03", title:"Knowledge Exchange",      img:"/objectives/image3.svg", desc:"Facilitate academic and clinical dialogue, creating platforms for interdisciplinary collaboration and skill development." },
  { num:"04", title:"Research & Innovation",   img:"/objectives/image4.svg", desc:"Encourage dissemination of cutting-edge research and innovation in mental health interventions and delivery systems." },
  { num:"05", title:"Emerging Challenges",     img:"/objectives/image5.svg", desc:"Address contemporary issues — digital dependency, youth mental health, trauma, identity — with culturally sensitive frameworks." },
  { num:"06", title:"Professional Competency", img:"/objectives/image6.svg", desc:"Strengthen clinical skills and foster interdisciplinary collaboration to build future-ready mental health professionals." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About the Conference" title="Where Traditional Wisdom Meets Modern Science" subtitle="An integrated discourse on mental health care — bridging human cognition, contemporary psychology, and emerging technology." />

      <section style={{ background:"#dceef8", padding:"5rem 2rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <ScrollReveal>
            <p style={{ fontSize:"1rem", color:"#4a6585", maxWidth:750, lineHeight:1.9, marginBottom:"3.5rem" }}>
              In an era defined by rapid technological change and evolving psychosocial realities, mental health care is undergoing a significant shift. Increased exposure to digital environments, changing interpersonal dynamics, and rising psychological stressors have amplified the need for adaptive, integrative, and accessible solutions.
            </p>
          </ScrollReveal>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"2.5rem" }} className="about-grid">
            {[
              { badge:"Organising Institution", title:"Department of Kayachikitsa, IMS-BHU",
                paras:["The Department of Kayachikitsa, established in 1963, is dedicated to postgraduate education, research, and patient care in Ayurvedic Internal Medicine — spanning cardiology, gastroenterology, psychiatry, geriatrics, and neurology.",
                       "The \"Manas Roga section\" (est. 1988) plays a significant role in mental health care, supported by a dedicated clinic and Satvavajaya laboratory. It focuses on schizophrenia, depression, anxiety, and psychosomatic disorders."], delay:0 },
              { badge:"Collaborating Body", title:"Indian Academy of Mental Health (IAMH)",
                paras:["IAMH is a professional body committed to promoting psychological well-being through a multidisciplinary approach involving psychologists, psychiatrists, counselors, and allied professionals.",
                       "The organization works towards spreading awareness, reducing stigma, and improving access to mental health services through workshops, training programs, and conferences."], delay:0.15 },
            ].map(c => (
              <ScrollReveal key={c.badge} delay={c.delay} direction="up">
                <div style={{ background:"#fff", border:"1px solid rgba(20,144,200,0.15)", borderRadius:14, padding:"2.25rem", boxShadow:"0 2px 20px rgba(20,144,200,0.07)" }}>
                  <span style={{ display:"inline-block", fontSize:"0.63rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", background:"#c4e2f4", color:"#1490c8", padding:"0.3rem 0.75rem", borderRadius:4, marginBottom:"1rem" }}>{c.badge}</span>
                  <h3 style={{ fontFamily:"Georgia,serif", fontSize:"1.4rem", fontWeight:600, color:"#1a3a6b", marginBottom:"1rem" }}>{c.title}</h3>
                  {c.paras.map((p,i) => <p key={i} style={{ fontSize:"0.88rem", color:"#4a6585", lineHeight:1.82, marginBottom:"0.75rem" }}>{p}</p>)}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div style={{ background:"#dceef8" }}>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" style={{ display:"block", width:"100%", height:64 }}>
          <path d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" fill="#c4e2f4" />
        </svg>
      </div>

      <section style={{ background:"#c4e2f4", padding:"5rem 2rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <ScrollReveal>
            <div className="section-tag">Objectives</div>
            <h2 style={{ fontFamily:"Georgia,serif", fontSize:"2.2rem", fontWeight:600, color:"#1a3a6b", marginBottom:"2.5rem", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center" }}>
              What This Conference Aims to Achieve
              <Image
                src="/curiosity brain-rafiki.svg"
                alt=""
                width={110}
                height={10}
                style={{ display:"block", marginTop:"0.4rem" }}
              />
            </h2>
          </ScrollReveal>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"1.5rem" }}>
            {objectives.map((o,i) => (
              <ScrollReveal key={o.num} delay={(i%3)*0.1} direction="up">
                <div style={{ background:"#fff", border:"1px solid rgba(20,144,200,0.15)", borderRadius:12, padding:"1.75rem", position:"relative", overflow:"hidden", height:"100%" }}>
  
                  {/* Left accent bar */}
                  <div style={{ position:"absolute", top:0, left:0, width:4, height:"100%", background:"#1490c8", borderRadius:"4px 0 0 4px" }} />
                  
                  {/* SVG icon — top right */}
                  <div style={{ position:"absolute", top:16, right:16, width:100, height:100, opacity:0.85 }}>
                    <Image
                      src={o.img}
                      alt={o.title}
                      width={100}
                      height={100}
                      style={{ width:"100%", height:"100%", objectFit:"contain" }}
                    />
                  </div>

                  <div style={{ fontFamily:"Georgia,serif", fontSize:"2.5rem", fontWeight:600, color:"#1490c8", lineHeight:1, marginBottom:"0.5rem" }}>{o.num}</div>
                  <h4 style={{ fontSize:"0.95rem", fontWeight:700, color:"#1a3a6b", marginBottom:"0.4rem" }}>{o.title}</h4>
                  <p style={{ fontSize:"0.85rem", color:"#4a6585", lineHeight:1.72 }}>{o.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        
         {/* Download brochure button */}
        <div style={{ textAlign:"center", marginTop:"3rem" }}>
            <a
            href="/BHU-IAMH Conference July 2026 .pdf"
            download="BHU-IAMH Conference July 2026 .pdf"
            style={{
              display:"inline-flex",
              alignItems:"center",
              gap:"0.6rem",
              background:"#1a3a6b",
              color:"#fff",
              padding:"0.9rem 2rem",
              borderRadius:8,
              textDecoration:"none",
              fontSize:"0.92rem",
              fontWeight:700,
              letterSpacing:"0.03em",
              boxShadow:"0 4px 16px rgba(26,58,107,0.2)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Conference Brochure
          </a>
        </div>

      </section>

      <Footer />
      <style>{`@media(max-width:760px){.about-grid{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}
