import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const travel = [
  { icon:"✈️", title:"By Air — Lal Bahadur Shastri International Airport", details:["Distance: ~25 km from venue","Travel Time: 45–60 minutes","Transport: Prepaid taxis, app-based cabs"] },
  { icon:"🚂", title:"By Rail — Varanasi Junction (Cantt)", details:["Distance: ~8–10 km","Travel Time: 25–30 minutes"] },
  { icon:"🚂", title:"By Rail — Banaras Railway Station", details:["Distance: ~6–7 km","Travel Time: 20–25 minutes"] },
  { icon:"🚌", title:"By Road — Varanasi Bus Stand", details:["Distance: ~7–9 km","Travel Time: 25–30 minutes"] },
];

export default function VenuePage() {
  return (
    <>
      <PageHeader eyebrow="Venue & Travel" title="The Spiritual City of Varanasi" subtitle="One of the world's oldest living cities — a confluence of tradition, spirituality, and academic excellence." bgImage="/varanasi.jpg" />

      <section style={{ background:"#dceef8", padding:"5rem 2rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"3rem", alignItems:"start" }} className="venue-grid">
            <ScrollReveal direction="left">
              <div className="section-tag">About Varanasi</div>
              <h2 style={{ fontFamily:"Georgia,serif", fontSize:"2.2rem", fontWeight:600, color:"#1a3a6b", marginBottom:"1.25rem" }}>A City That Invites Reflection</h2>
              <blockquote style={{ fontFamily:"Georgia,serif", fontSize:"1.05rem", fontStyle:"italic", color:"#2c4a70", lineHeight:1.85, borderLeft:"3px solid #1490c8", paddingLeft:"1.25rem", marginBottom:"1.5rem" }}>
                Varanasi, among the world&apos;s oldest living cities, stands as a profound confluence of tradition, spirituality, and intellectual legacy. Situated on the banks of the sacred Ganga, it has long been a center for philosophical thought, healing practices, and cultural continuity.
              </blockquote>
              <p style={{ fontSize:"0.9rem", color:"#4a6585", lineHeight:1.85 }}>
                The city uniquely weaves together its ancient wisdom with contemporary academic excellence — embodied by institutions such as Banaras Hindu University — creating an environment that naturally invites reflection, dialogue, and deeper engagement with the human mind.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div style={{ background:"#1a3a6b", borderRadius:14, padding:"2.25rem", color:"rgba(255,255,255,0.8)" }}>
                <h3 style={{ fontFamily:"Georgia,serif", fontSize:"1.3rem", fontWeight:600, color:"#dceef8", marginBottom:"1.25rem" }}>📍 Conference Venue</h3>
                <div style={{ marginBottom:"1.5rem" }}>
                  <div style={{ fontSize:"0.68rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#7dd4f5", marginBottom:"0.4rem" }}>Auditorium</div>
                  <div style={{ fontSize:"1.1rem", fontWeight:600, color:"#fff" }}>K.N. Udupa Auditorium (KNUDUPA)</div>
                  <div style={{ fontSize:"0.85rem", color:"rgba(255,255,255,0.55)", marginTop:"0.25rem" }}>Institute of Medical Sciences (IMS), Banaras Hindu University</div>
                </div>
                <div style={{ borderTop:"1px solid rgba(255,255,255,0.1)", paddingTop:"1.25rem" }}>
                  <h4 style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#7dd4f5", marginBottom:"0.75rem" }}>How to Reach the Venue</h4>
                  <p style={{ fontSize:"0.85rem", lineHeight:1.75 }}>Enter through <strong style={{ color:"#fff" }}>BHU Main Gate (Lanka Gate)</strong> and proceed towards the Institute of Medical Sciences (IMS-BHU). The K.N. Udupa Auditorium is a prominent landmark within the campus.</p>
                  <div style={{ marginTop:"1rem", padding:"0.75rem 1rem", background:"rgba(20,144,200,0.15)", borderRadius:8, fontSize:"0.8rem", color:"#ffffff", fontStyle:"italic" }}>
                    ✅ Directional signages and on-site assistance available on all conference days.
                  </div>

                </div>
                {/* Google Map embed */}
                <div style={{ marginTop:"1.5rem", borderRadius:10, overflow:"hidden", border:"1px solid rgba(255,255,255,0.1)" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.684584684454!2d82.99716781001202!3d25.27363212850921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e318f3ee27011%3A0x5238de7cab6b932b!2sK%20N%20Udupa%20Auditorium!5e1!3m2!1sen!2sin!4v1779246648352!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border:0, display:"block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </ScrollReveal>
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
            <div className="section-tag">Getting Here</div>
            <h2 style={{ fontFamily:"Georgia,serif", fontSize:"2.2rem", fontWeight:600, color:"#1a3a6b", marginBottom:"2.5rem" }}>How to Reach IMS-BHU</h2>
          </ScrollReveal>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"1.5rem" }}>
            {travel.map((t,i) => (
              <ScrollReveal key={t.title} delay={i*0.1} direction="up">
                <div style={{ background:"#fff", border:"1px solid rgba(20,144,200,0.15)", borderRadius:12, padding:"1.5rem", height:"100%" }}>
                  <div style={{ fontSize:"1.75rem", marginBottom:"0.75rem" }}>{t.icon}</div>
                  <h4 style={{ fontSize:"0.9rem", fontWeight:700, color:"#1a3a6b", marginBottom:"0.75rem", lineHeight:1.4 }}>{t.title}</h4>
                  {t.details.map(d => (
                    <div key={d} style={{ fontSize:"0.82rem", color:"#4a6585", display:"flex", alignItems:"center", gap:"0.4rem", marginBottom:"0.3rem" }}>
                      <span style={{ width:5, height:5, borderRadius:"50%", background:"#1490c8", flexShrink:0 }} />{d}
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <style>{`@media(max-width:760px){.venue-grid{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}
