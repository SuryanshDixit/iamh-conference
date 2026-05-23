import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const guidelines = [
  "Abstract submission open only to registered delegates",
  "Presenting author must complete registration prior to submission",
  "Maximum one oral and one poster presentation per delegate",
  "Certificates issued only to the presenting author",
  "Include full author names, designations, and institutional affiliations",
  "Structured format: Title · Authors · Affiliation · Objectives · Methodology · Results · Conclusion",
  "Word limit: 250–300 words",
  "Title centered in bold capitals, 14pt Times New Roman",
  "Author names centered in bold, 12pt Times New Roman",
  "Include 5–10 keywords (no duplication with title)",
];

const audience = [
  "Psychiatrists & clinical psychologists","Ayurvedic physicians & practitioners",
  "Counselors & therapists","Researchers in mental health & neuroscience",
  "Public health professionals","Postgraduate students & research scholars",
  "Allied health & social work professionals","Educators & policymakers in mental health",
];

export default function PapersPage() {
  return (
    <>
      <PageHeader eyebrow="Call for Papers" title="Submit Your Research" subtitle="We invite abstracts from clinicians, researchers, students, and allied professionals across all areas of mental health care." />

      <div style={{ background:"#1490c8", padding:"1rem 2rem", textAlign:"center" }}>
        <div style={{ marginTop:"1.5rem", background:"#fff8e1", border:"1px solid #f0c84a", borderRadius:8, padding:"0.85rem 1.1rem", fontSize:"0.85rem", fontWeight:700, color:"#7a5a00" }}>
          ⏰ &nbsp; Deadline: 20th June, 2026
        </div>
        <div style={{ marginTop:"0.75rem", background:"#eaf5fb", border:"1px solid rgba(20,144,200,0.25)", borderRadius:8, padding:"0.85rem 1.1rem", fontSize:"0.83rem", color:"#2c4a70", lineHeight:1.65 }}>
          📌 &nbsp; <strong>Note:</strong> You can submit your abstract after completing your registration. Please register first, then proceed with abstract submission.
        </div>
      </div>

      <section style={{ background:"#dceef8", padding:"5rem 2rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"2.5rem" }} className="papers-grid">
            <ScrollReveal direction="left">
              <div style={{ background:"#fff", border:"1px solid rgba(20,144,200,0.15)", borderRadius:14, padding:"2.25rem", boxShadow:"0 2px 18px rgba(20,144,200,0.07)" }}>
                <h3 style={{ fontFamily:"Georgia,serif", fontSize:"1.4rem", fontWeight:600, color:"#1a3a6b", marginBottom:"1.25rem", paddingBottom:"0.75rem", borderBottom:"1px solid rgba(20,144,200,0.15)" }}>Submission Guidelines</h3>
                <ul style={{ listStyle:"none" }}>
                  {guidelines.map(g => (
                    <li key={g} style={{ display:"flex", alignItems:"flex-start", gap:"0.6rem", padding:"0.55rem 0", fontSize:"0.87rem", color:"#4a6585", lineHeight:1.65, borderBottom:"1px solid rgba(0,0,0,0.04)" }}>
                      <span style={{ color:"#1490c8", flexShrink:0, marginTop:1 }}>→</span>{g}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop:"1.5rem", background:"#fff8e1", border:"1px solid #f0c84a", borderRadius:8, padding:"0.85rem 1.1rem", fontSize:"0.85rem", fontWeight:700, color:"#7a5a00" }}>
                  ⏰ &nbsp; Deadline: 20th June, 2026
                </div>
                <a href="mailto:iamhcon2026@gmail.com" style={{ display:"block", marginTop:"1rem", background:"#1a3a6b", color:"#dceef8", padding:"0.8rem 1rem", borderRadius:7, fontSize:"0.85rem", fontWeight:700, textAlign:"center", textDecoration:"none" }}>
                  📧 &nbsp; Submit to: iamhcon2026@gmail.com
                </a>
              </div>
            </ScrollReveal>

            <div style={{ display:"flex", flexDirection:"column", gap:"2rem" }}>
              <ScrollReveal direction="right">
                <div style={{ background:"#c4e2f4", border:"1px solid rgba(20,144,200,0.2)", borderRadius:14, padding:"2rem" }}>
                  <h3 style={{ fontFamily:"Georgia,serif", fontSize:"1.3rem", fontWeight:600, color:"#1a3a6b", marginBottom:"1.25rem" }}>Presentation Categories</h3>
                  {[
                    { type:"Oral Presentation", icon:"🎤", desc:"Full verbal presentation with Q&A before a live audience" },
                    { type:"Poster Presentation", icon:"🖼", desc:"Visual display of research in a dedicated poster session" },
                  ].map(c => (
                    <div key={c.type} style={{ display:"flex", gap:"1rem", alignItems:"flex-start", marginBottom:"1.25rem" }}>
                      <div style={{ width:44, height:44, background:"#fff", borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.2rem", flexShrink:0 }}>{c.icon}</div>
                      <div>
                        <strong style={{ fontSize:"0.9rem", color:"#1a3a6b" }}>{c.type}</strong>
                        <p style={{ fontSize:"0.82rem", color:"#4a6585", marginTop:"0.2rem" }}>{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.1}>
                <div style={{ background:"#fff", border:"1px solid rgba(20,144,200,0.15)", borderRadius:14, padding:"2rem" }}>
                  <h3 style={{ fontFamily:"Georgia,serif", fontSize:"1.3rem", fontWeight:600, color:"#1a3a6b", marginBottom:"1.25rem" }}>Who Should Attend</h3>
                  <ul style={{ listStyle:"none" }}>
                    {audience.map(a => (
                      <li key={a} style={{ display:"flex", alignItems:"center", gap:"0.6rem", padding:"0.45rem 0", fontSize:"0.87rem", color:"#4a6585", borderBottom:"1px solid rgba(0,0,0,0.04)" }}>
                        <span style={{ width:6, height:6, borderRadius:"50%", background:"#1490c8", flexShrink:0 }} />{a}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <style>{`@media(max-width:760px){.papers-grid{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}
