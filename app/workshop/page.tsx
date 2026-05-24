import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const speakers = [
  {
    name: "Dr. Nishant Goyal",
    title: "Professor of Psychiatry",
    institution: "VMMC & Safdarjung Hospital, New Delhi-110029",
    topic: "Neuromodulation in Child and Adolescent: Future Perspectives of Non-Invasive Brain Stimulation",
    expertise: [
      "Child and Adolescent Psychiatry",
      "Neuromodulation (Non-invasive Brain Stimulation)",
      "Cognitive Neurosciences",
      "Digital Psychiatry",
      "Public Mental Health",
    ],
    highlights: [
      "200+ research publications with H-index 25 and Citation Score 2785 (as of March 2026)",
      "3 patents in the fields of depression, emotional processing, and autism",
      "Developed the first Neuroplasticity Lab and Precision Neuromodulation Lab in India at CIP",
      "14 funded research projects — national and international — including collaborations with Yale University, NIH USA, ICMR, and Wellcome-DBT",
      "Advisor to NCPCR and Member of Mental Health Task Force (DGHS)",
      "External member of Board of Studies at NIMHANS, LGBRIMH, RIMS Ranchi",
    ],
    contact: "psynishant@gmail.com",
    orcid: "https://orcid.org/0000-0002-9527-8261",
  },
  {
    name: "Dr. Sanjay Saxena",
    title: "Professor",
    institution: "School of Management Sciences, Varanasi, INDIA",
    topic: "Cognitive, Affective and Behavioral Skills for Leading a Wonderful Life",
    expertise: [
      "Emotional Intelligence",
      "Organizational Leadership",
      "Life Management Skills",
      "Persuasive Communication",
      "Geoeconomic Architecture",
    ],
    highlights: [
      "33 years of professional experience across India, Africa, Southeast Asia, and Europe",
      "10 published books including titles from PHI Delhi, KDP Amazon, and Garuda Prakashan",
      "Conducted 300+ workshops for students and corporate professionals in India and abroad",
      "Visiting Professor at Lithuanian University of Health Sciences and IIIT Ranchi",
      "Online Professor at UNICAF University, Cyprus",
      "Project Director & Behavior Scientist under the United Nations in Botswana, Africa",
    ],
    contact: "drsanjaysaxena@gmail.com",
    orcid: null,
  },
];

export default function WorkshopPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pre-Conference Workshop"
        title="Pre-Conference Workshop"
        subtitle="Friday, 10 July 2026 · K.N. Udupa Auditorium, IMS-BHU, Varanasi"
      />

      {/* Overview */}
      <section style={{ background:"#dceef8", padding:"5rem 2rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <ScrollReveal>
            <div className="section-tag">Workshop Overview</div>
            <h2 style={{ fontFamily:"Georgia,serif", fontSize:"2.2rem", fontWeight:600, color:"#1a3a6b", marginBottom:"1.5rem" }}>
              About the Workshop
            </h2>
          </ScrollReveal>

          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"2rem" }} className="workshop-overview-grid">
            {[
              { icon:"📅", label:"Date", value:"Friday, 10 July 2026" },
              { icon:"📍", label:"Venue", value:"K.N. Udupa Auditorium, IMS-BHU, Varanasi" },
              { icon:"🎓", label:"Registration Fee — Students", value:"₹500" },
              { icon:"👔", label:"Registration Fee — Professionals", value:"₹1,000" },
            ].map((item) => (
              <ScrollReveal key={item.label} direction="up">
                <div style={{ background:"#fff", border:"1px solid rgba(20,144,200,0.18)", borderRadius:12, padding:"1.5rem", display:"flex", alignItems:"flex-start", gap:"1rem" }}>
                  <div style={{ fontSize:"1.75rem", flexShrink:0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#1490c8", marginBottom:"0.3rem" }}>{item.label}</div>
                    <div style={{ fontSize:"1rem", fontWeight:600, color:"#1a3a6b" }}>{item.value}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wave */}
      <div style={{ background:"#dceef8" }}>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" style={{ display:"block", width:"100%", height:64 }}>
          <path d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" fill="#fff" />
        </svg>
      </div>

      {/* Speakers */}
      <section style={{ background:"#fff", padding:"5rem 2rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <ScrollReveal>
            <div className="section-tag">Featured Speakers</div>
            <h2 style={{ fontFamily:"Georgia,serif", fontSize:"2.2rem", fontWeight:600, color:"#1a3a6b", marginBottom:"3rem" }}>
              Workshop Speakers
            </h2>
          </ScrollReveal>

          <div style={{ display:"flex", flexDirection:"column", gap:"3rem" }}>
            {speakers.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 0.1} direction="up">
                <div style={{ background:"#eaf5fb", border:"1px solid rgba(20,144,200,0.18)", borderRadius:16, padding:"2.5rem", boxShadow:"0 2px 20px rgba(20,144,200,0.07)" }}>

                  {/* Speaker header */}
                  <div style={{ display:"flex", alignItems:"flex-start", gap:"1.5rem", marginBottom:"1.75rem", flexWrap:"wrap" }}>
                    <div style={{ width:72, height:72, borderRadius:"50%", background:"#1a3a6b", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"Georgia,serif", fontSize:"1.4rem", fontWeight:600, color:"#dceef8", flexShrink:0 }}>
                      {s.name.split(" ").filter((w: string) => !w.startsWith("(")).slice(-2).map((w: string) => w[0]).join("")}
                    </div>
                    <div style={{ flex:1 }}>
                      <h3 style={{ fontFamily:"Georgia,serif", fontSize:"1.6rem", fontWeight:600, color:"#1a3a6b", marginBottom:"0.25rem" }}>
                        {s.name}
                      </h3>
                      <div style={{ fontSize:"0.95rem", color:"#1490c8", fontWeight:600, marginBottom:"0.2rem" }}>{s.title}</div>
                      <div style={{ fontSize:"0.85rem", color:"#4a6585" }}>{s.institution}</div>
                    </div>
                  </div>

                  {/* Topic banner */}
                  <div style={{
                    background:"linear-gradient(135deg, #1a3a6b, #1490c8)",
                    borderRadius:10,
                    padding:"1rem 1.5rem",
                    marginBottom:"1.75rem",
                    display:"flex",
                    alignItems:"flex-start",
                    gap:"0.75rem",
                  }}>
                    <span style={{ fontSize:"1.1rem", flexShrink:0 }}>🎤</span>
                    <div>
                      <div style={{ fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:"rgba(255,255,255,0.6)", marginBottom:"0.25rem" }}>
                        Workshop Topic
                      </div>
                      <div style={{ fontSize:"0.92rem", fontWeight:600, color:"#fff", lineHeight:1.55 }}>
                        {s.topic}
                      </div>
                    </div>
                  </div>

                  {/* Expertise + Highlights */}
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"2rem" }} className="speaker-inner-grid">
                    <div>
                      <h4 style={{ fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:"#1490c8", marginBottom:"0.75rem" }}>
                        Areas of Expertise
                      </h4>
                      <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
                        {s.expertise.map((e: string) => (
                          <span key={e} style={{ background:"#c4e2f4", color:"#1a3a6b", padding:"0.35rem 0.85rem", borderRadius:100, fontSize:"0.78rem", fontWeight:600 }}>
                            {e}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 style={{ fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:"#1490c8", marginBottom:"0.75rem" }}>
                        Key Highlights
                      </h4>
                      <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:"0.5rem" }}>
                        {s.highlights.map((h: string) => (
                          <li key={h} style={{ display:"flex", alignItems:"flex-start", gap:"0.5rem", fontSize:"0.84rem", color:"#2c4a70", lineHeight:1.6 }}>
                            <span style={{ width:6, height:6, borderRadius:"50%", background:"#1490c8", flexShrink:0, marginTop:6 }} />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Contact */}
                  <div style={{ marginTop:"1.5rem", paddingTop:"1.25rem", borderTop:"1px solid rgba(20,144,200,0.15)", display:"flex", gap:"1.5rem", flexWrap:"wrap", fontSize:"0.82rem", color:"#4a6585" }}>
                    <span>📧 <a href={`mailto:${s.contact}`} style={{ color:"#1490c8", textDecoration:"none" }}>{s.contact}</a></span>
                    {s.orcid && (
                      <span>🔗 <a href={s.orcid} target="_blank" rel="noopener noreferrer" style={{ color:"#1490c8", textDecoration:"none" }}>ORCID Profile</a></span>
                    )}
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wave */}
      <div style={{ background:"#fff" }}>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" style={{ display:"block", width:"100%", height:64 }}>
          <path d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" fill="#dceef8" />
        </svg>
      </div>

      {/* Register CTA */}
      <section style={{ background:"#dceef8", padding:"4rem 2rem" }}>
        <div style={{ maxWidth:700, margin:"0 auto", textAlign:"center" }}>
          <ScrollReveal>
            <h2 style={{ fontFamily:"Georgia,serif", fontSize:"2rem", fontWeight:600, color:"#1a3a6b", marginBottom:"0.75rem" }}>
              Register for the Workshop
            </h2>
            <p style={{ color:"#4a6585", marginBottom:"2rem", fontSize:"0.95rem", lineHeight:1.75 }}>
              The pre-conference workshop is held on <strong>10 July 2026</strong>. Registration is separate from the main conference. Early bird rates apply before 1 June 2026.
            </p>
            <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
              <a
                href="https://forms.gle/1rzX5EWff6NhvWHa8"
                target="_blank" rel="noopener noreferrer"
                style={{ background:"#1a3a6b", color:"#fff", padding:"0.9rem 2rem", borderRadius:8, textDecoration:"none", fontSize:"0.9rem", fontWeight:700 }}
              >
                Register Now →
              </a>
              <a
                href="/register"
                style={{ background:"#fff", color:"#1a3a6b", border:"1.5px solid #1a3a6b", padding:"0.9rem 2rem", borderRadius:8, textDecoration:"none", fontSize:"0.9rem", fontWeight:700 }}
              >
                View All Fees
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <style>{`
        @media(max-width:760px){
          .workshop-overview-grid { grid-template-columns: 1fr !important; }
          .speaker-inner-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
