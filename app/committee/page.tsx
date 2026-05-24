import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const patrons = [
  { initials:"SN", role:"Patron",     name:"Prof. S.N. Sankhwar", affil:"Director, IMS, BHU, Varanasi" },
  { initials:"PKG", role:"Co-Patron",  name:"Dr.(Prof) Pradip Kumar Goswami",  affil:"Dean, of Faculty of Ayurveda, IMS, BHU,
Varanasi" },
];
const members = [
  { role:"Organising Chairman",        name:"Dr. (Prof) K.N. Murthy",            affil:"Former HOD, Kayachikitsa, IMS-BHU" },
  { role:"Organising Chairman",        name:"Dr. (Prof) Satya Gopal Jee",        affil:"Former HOD, DAV PG College (BHU)" },
  { role:"Organising Vice-Chairman",   name:"Dr. (Prof) O.P. Singh",             affil:"Former HOD, Kayachikitsa, IMS-BHU" },
  { role:"Organising Vice-Chairperson",name:"Dr. (Prof) Richa Yadav",            affil:"HOD, Psychology, DAV PG College (BHU)" },
  { role:"HOD & Key Faculty",          name:"Dr. (Prof) Rajendra Prasad",        affil:"HOD, Kayachikitsa, IMS-BHU" },
  { role:"President, IAMH",            name:"Dr. (Prof) J.S. Tripathi",          affil:"Former HOD, Kayachikitsa, IMS-BHU" },
  { role:"Convener",                   name:"Dr. (Prof) Sunanda R. Pedhekar",    affil:"Kayachikitsa, IMS-BHU" },
  { role:"Treasurer",                  name:"Dr. (Prof) A.K. Pandey",            affil:"Kayachikitsa, IMS-BHU" },
  { role:"Co-Convener",                name:"Dr. Meera Antiwal",                 affil:"Asst. Prof., Kayachikitsa, IMS-BHU" },
  { role:"Co-Convener",                name:"Dr. Shalini",                       affil:"Asst. Prof., Kayachikitsa, IMS-BHU" },
  { role:"Organising Secretary",       name:"Dr. Laxman Yadav",                  affil:"Counseling Psychologist, IIT-BHU · Founder, Changing Minds" },
  { role:"Joint Org. Secretary",       name:"Ms. Soumya Srivastava",             affil:"Clinical Psychologist, IIT-BHU" },
  { role:"Joint Org. Secretary",       name:"Dr. Shri Lata",                     affil:"S.R., Kayachikitsa, IMS-BHU" },
  { role:"Joint Org. Secretary",       name:"Dr. Rajesh Jain",                   affil:"Ex. S.R., Kayachikitsa, IMS-BHU" },
  { role:"Joint Org. Secretary",       name:"Dr. Priyana",                       affil:"Post Doc Fellow (ICSSR), IMS-BHU" },
];
const advisory: Record<string,string[]> = {
  "Himachal Pradesh":["Prof. Vijay Choudhary","Prof. Suresh Kumar"],
  "Delhi":["Prof. R.K. Yadav","Prof. Riju Agarwal"],
  "Chhattisgarh":["Prof. Aruna Ojha","Prof. R.N. Tripathi"],
  "Haryana":["Prof. Raja Singla","Prof. B.C. Arya"],
  "Madhya Pradesh":["Prof. U.S. Nigam","Prof. Shradha Sharma"],
  "Uttarakhand":["Prof. V.K. Agnihotri","Dr. Rajeev Vaishya"],
  "Goa":["Prof. V.G. Huddar"],
  "Uttar Pradesh":["Prof. K.K. Dwivedi","Dr. Ajay Gupta"],
  "Maharashtra":["Prof. Hemlata R. Jalgaonkar","Dr. Sanjay A. Dhruve"],
  "Odisha":["Prof. B.S. Pal"],
  "Assam":["Prof. O.P. Gupta","Dr. Rupali Barua"],
  "West Bengal":["Prof. B. Mukhopadhyay"],
  "Rajasthan":["Prof. U.R. Saroj","Dr. Samidha Sharma"],
  "Gujarat":["Prof. Poonam Sawarkar"],
};

export default function CommitteePage() {
  return (
    <>
      <PageHeader eyebrow="Organising Committee" title="The People Behind the Conference" subtitle="A distinguished team from IMS-BHU and the Indian Academy of Mental Health." />

      <section style={{ background:"#dceef8", padding:"5rem 2rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <ScrollReveal><div className="section-tag">Patrons</div>
            <h2 style={{ fontFamily:"Georgia,serif", fontSize:"2rem", fontWeight:600, color:"#1a3a6b", marginBottom:"2rem" }}>Institutional Leadership</h2>
          </ScrollReveal>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1.5rem", marginBottom:"4rem" }} className="patron-grid">
            {patrons.map((p,i) => (
              <ScrollReveal key={p.name} delay={i*0.1} direction="up">
                <div style={{ background:"#1a3a6b", borderRadius:12, padding:"1.75rem", display:"flex", alignItems:"center", gap:"1.25rem" }}>
                  <div style={{ width:56, height:56, borderRadius:"50%", background:"rgba(20,144,200,0.25)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"Georgia,serif", fontSize:"1.1rem", fontWeight:600, color:"#7dd4f5", flexShrink:0, border:"1.5px solid rgba(20,144,200,0.4)" }}>{p.initials}</div>
                  <div>
                    <div style={{ fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:"#7dd4f5", marginBottom:"0.2rem" }}>{p.role}</div>
                    <div style={{ fontFamily:"Georgia,serif", fontSize:"1.05rem", fontWeight:600, color:"#fff", marginBottom:"0.2rem" }}>{p.name}</div>
                    <div style={{ fontSize:"0.78rem", color:"rgba(255,255,255,0.5)" }}>{p.affil}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal><div className="section-tag">Core Committee</div>
            <h2 style={{ fontFamily:"Georgia,serif", fontSize:"2rem", fontWeight:600, color:"#1a3a6b", marginBottom:"2rem" }}>Chairpersons, Conveners & Secretaries</h2>
          </ScrollReveal>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(210px,1fr))", gap:"1.1rem" }}>
            {members.map((m,i) => (
              <ScrollReveal key={m.name+m.role} delay={(i%4)*0.08} direction="up">
                <div style={{ background:"#fff", border:"1px solid rgba(20,144,200,0.15)", borderRadius:10, padding:"1.3rem" }}>
                  <div style={{ fontSize:"0.62rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#1490c8", marginBottom:"0.4rem" }}>{m.role}</div>
                  <div style={{ fontFamily:"Georgia,serif", fontSize:"0.98rem", fontWeight:600, color:"#1a3a6b", marginBottom:"0.25rem", lineHeight:1.3 }}>{m.name}</div>
                  <div style={{ fontSize:"0.75rem", color:"#4a6585", lineHeight:1.45 }}>{m.affil}</div>
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
          <ScrollReveal><div className="section-tag">Advisory Board</div>
            <h2 style={{ fontFamily:"Georgia,serif", fontSize:"2rem", fontWeight:600, color:"#1a3a6b", marginBottom:"2.5rem" }}>National Advisory Board</h2>
          </ScrollReveal>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:"1rem" }}>
            {Object.entries(advisory).map(([state,people],i) => (
              <ScrollReveal key={state} delay={(i%4)*0.08} direction="up">
                <div style={{ background:"#fff", border:"1px solid rgba(20,144,200,0.18)", borderRadius:10, padding:"1.25rem" }}>
                  <div style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#1490c8", marginBottom:"0.6rem" }}>{state}</div>
                  {people.map(p => <div key={p} style={{ fontSize:"0.83rem", color:"#1a3a6b", padding:"0.25rem 0", borderBottom:"1px solid rgba(0,0,0,0.04)", lineHeight:1.5 }}>{p}</div>)}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <style>{`@media(max-width:700px){.patron-grid{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}
