import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Registration"
        title="Register for the Conference"
        subtitle="Includes conference kit, breakfast, lunch, and participation certificate. Early bird rates available until 1 June 2026."
      />

      <section style={{ background:"#dceef8", padding:"5rem 1rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", width:"100%" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"3rem", alignItems:"start", width:"100%" }} className="reg-grid">

            {/* LEFT — Fee tables */}
            <ScrollReveal direction="left">
              <div className="section-tag">Conference Fee</div>
              <h2 style={{ fontFamily:"Georgia,serif", fontSize:"2rem", fontWeight:600, color:"#1a3a6b", marginBottom:"1.5rem" }}>Registration Fees</h2>

              <div style={{ overflowX:"auto", borderRadius:12, boxShadow:"0 2px 18px rgba(20,144,200,0.08)" }}>
                <table style={{ width:"100%", borderCollapse:"collapse", fontSize:"0.88rem" }}>
                  <thead>
                    <tr>
                      {["Category","Early Bird (before 1 Jun)","Regular","On-Spot"].map((h,i) => (
                        <th key={h} style={{
                          background:"#1a3a6b", color:"rgba(255,255,255,0.88)",
                          padding:"0.85rem 1rem", textAlign:"left",
                          fontSize:"0.7rem", fontWeight:700,
                          letterSpacing:"0.05em", textTransform:"uppercase",
                          borderRadius: i===0?"8px 0 0 0": i===3?"0 8px 0 0":0,
                        }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { cat:"Students",     early:"₹2,000", reg:"₹2,500", spot:"₹3,000" },
                      { cat:"Professionals",early:"₹3,000", reg:"₹3,500", spot:"₹4,000" },
                      { cat:"IAMH Members", early:"₹2,500", reg:"₹3,000", spot:"₹3,500" },
                    ].map((r,i) => (
                      <tr key={r.cat}>
                        <td style={{ padding:"0.85rem 1rem", borderBottom:"1px solid rgba(20,144,200,0.12)", fontWeight:600, color:"#1a3a6b", background: i%2===0?"#fff":"#eaf5fb" }}>{r.cat}</td>
                        <td style={{ padding:"0.85rem 1rem", borderBottom:"1px solid rgba(20,144,200,0.12)", color:"#1490c8", fontWeight:700, background: i%2===0?"#fff":"#eaf5fb" }}>{r.early}</td>
                        <td style={{ padding:"0.85rem 1rem", borderBottom:"1px solid rgba(20,144,200,0.12)", color:"#2c4a70", background: i%2===0?"#fff":"#eaf5fb" }}>{r.reg}</td>
                        <td style={{ padding:"0.85rem 1rem", borderBottom:"1px solid rgba(20,144,200,0.12)", color:"#2c4a70", background: i%2===0?"#fff":"#eaf5fb" }}>{r.spot}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p style={{ fontSize:"0.78rem", color:"#4a6585", marginTop:"0.85rem", lineHeight:1.65 }}>
                <strong>Bank Transfer:</strong> Bank of Baroda · Account No. 27790100029395 · Branch: SS Hospital, IMS-BHU, Varanasi 221005
              </p>

              {/* Workshop fee */}
              <div style={{ background:"#1a3a6b", borderRadius:12, padding:"1.5rem", marginTop:"2rem" }}>
                <div style={{ fontSize:"0.68rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"#7dd4f5", marginBottom:"1rem" }}>
                  Pre-Conference Workshop Fee · 10 July 2026
                </div>
                {[{ label:"Students", price:"₹500" },{ label:"Professionals", price:"₹1,000" }].map((r,i) => (
                  <div key={r.label} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"0.65rem 0", borderBottom: i===0?"1px solid rgba(255,255,255,0.08)":"none", fontSize:"0.9rem", color:"rgba(255,255,255,0.82)" }}>
                    <span>{r.label}</span>
                    <span style={{ fontFamily:"Georgia,serif", fontSize:"1.4rem", fontWeight:600, color:"#7dd4f5" }}>{r.price}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop:"1.25rem", background:"#fff8e1", border:"1px solid #f0c84a", borderRadius:8, padding:"0.85rem 1rem", fontSize:"0.82rem", color:"#7a5a00" }}>
                📌 Registration includes: Conference kit, Breakfast, Lunch & Participation Certificate.<br />
                <strong>Accommodation is not included.</strong>
              </div>
              <div style={{ marginTop:"0.75rem", background:"#eaf5fb", border:"1px solid rgba(20,144,200,0.25)", borderRadius:8, padding:"0.85rem 1rem", fontSize:"0.83rem", color:"#2c4a70", lineHeight:1.65 }}>
                📝 &nbsp; <strong>Note:</strong> Abstract submission opens after registration. Once registered, you may submit your abstract at <a href="mailto:iamhcon2026@gmail.com" style={{ color:"#1490c8" }}>iamhcon2026@gmail.com</a> before 20 June 2026.
              </div>
            </ScrollReveal>

            {/* RIGHT — QR + contact + dates */}
            <div style={{ display:"flex", flexDirection:"column", gap:"1.5rem" }}>

              {/* QR + Register button */}
              <ScrollReveal direction="right">
                <div style={{ background:"#fff", border:"1px solid rgba(20,144,200,0.18)", borderRadius:14, padding:"2rem", textAlign:"center", boxShadow:"0 2px 20px rgba(20,144,200,0.08)" }}>
                  <h3 style={{ fontFamily:"Georgia,serif", fontSize:"1.4rem", fontWeight:600, color:"#1a3a6b", marginBottom:"0.4rem" }}>
                    Register Now
                  </h3>
                  <p style={{ fontSize:"0.85rem", color:"#4a6585", marginBottom:"1.5rem", lineHeight:1.6 }}>
                    Scan the QR code below or click the button to open the registration form.
                  </p>

                  {/* QR Code image */}
                  <div style={{ display:"flex", justifyContent:"center", marginBottom:"1.5rem" }}>
                    <div style={{ background:"#f5f5f5", borderRadius:12, padding:"0.25rem", display:"inline-block", border:"1px solid rgba(20,144,200,0.15)" }}>
                      <Image
                        src="/qrcode_352017270_88a978e08259ffc13d17efd6a67848ef.png"
                        alt="Registration QR Code — Scan to register"
                        width={180}
                        height={220}
                        style={{ display:"block", borderRadius:6 }}
                      />
                    </div>
                  </div>
                  <p style={{ fontSize:"0.75rem", color:"#4a6585", marginBottom:"1.25rem", letterSpacing:"0.03em" }}>
                    📱 Scan with your phone camera to open registration form
                  </p>

                  <a
                    href="https://forms.gle/1rzX5EWff6NhvWHa8"
                    target="_blank" rel="noopener noreferrer"
                    style={{ display:"block", background:"#1490c8", color:"#fff", padding:"0.9rem 1.5rem", borderRadius:8, textDecoration:"none", fontSize:"0.9rem", fontWeight:700, letterSpacing:"0.03em" }}
                  >
                    Open Registration Form →
                  </a>
                </div>
              </ScrollReveal>

              {/* Contact */}
              <ScrollReveal direction="right" delay={0.1}>
                <div style={{ background:"#fff", border:"1px solid rgba(20,144,200,0.15)", borderRadius:14, padding:"1.75rem" }}>
                  <h4 style={{ fontFamily:"Georgia,serif", fontSize:"1.2rem", fontWeight:600, color:"#1a3a6b", marginBottom:"1.25rem" }}>Contact & Queries</h4>
                  {[
                    { icon:"📞", label:"+91 9696384984", href:"tel:9696384984" },
                    { icon:"📞", label:"+91 9628279780", href:"tel:9628279780" },
                    { icon:"📧", label:"iamhcon2026@gmail.com", href:"mailto:iamhcon2026@gmail.com" },
                    { icon:"📍", label:"K.N. Udupa Auditorium, IMS-BHU, Varanasi", href:undefined },
                  ].map((c,i,arr) => (
                    <div key={c.label} style={{ display:"flex", gap:"0.75rem", padding:"0.6rem 0", borderBottom: i<arr.length-1?"1px solid rgba(20,144,200,0.08)":"none", fontSize:"0.85rem", color:"#4a6585", alignItems:"flex-start" }}>
                      <span>{c.icon}</span>
                      {c.href
                        ? <a href={c.href} style={{ color:"#1490c8", textDecoration:"none" }}>{c.label}</a>
                        : <span>{c.label}</span>}
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Important dates */}
              <ScrollReveal direction="right" delay={0.2}>
                <div
  style={{
    background: "#c4e2f4",
    border: "1px solid rgba(20,144,200,0.2)",
    borderRadius: 14,
    padding: "1.75rem",
  }}
>
  <h4
    style={{
      fontFamily: "Georgia,serif",
      fontSize: "1.2rem",
      fontWeight: 600,
      color: "#1a3a6b",
      marginBottom: "1rem",
    }}
  >
    Important Dates
  </h4>

  {[
    {
      date: "1 June 2026",
      label: "Early bird registration deadline",
    },
    {
      date: (
        <>
          <span
            style={{
              textDecoration: "line-through",
              color: "#7d8793",
              marginRight: "8px",
            }}
          >
            20 June 2026
          </span>
          <span
            style={{
              color: "#15803d",
              fontWeight: 700,
            }}
          >
            25 June 2026
          </span>
        </>
      ),
      label: "Abstract submission deadline",
    },
    {
      date: "10 July 2026",
      label: "Pre-conference workshop",
    },
    {
      date: "11–12 July 2026",
      label: "Main conference",
    },
  ].map((d, i, arr) => (
    <div
      key={i}
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0.6rem 0",
        borderBottom:
          i < arr.length - 1
            ? "1px solid rgba(20,144,200,0.15)"
            : "none",
        fontSize: "0.85rem",
        flexWrap: "wrap",
        gap: "0.25rem",
      }}
    >
      <span
        style={{
          fontWeight: 700,
          color: "#1490c8",
        }}
      >
        {d.date}
      </span>

      <span
        style={{
          color: "#4a6585",
        }}
      >
        {d.label}
      </span>
    </div>
  ))}
</div>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>

      <Footer />
      <style>{`
  @media(max-width:760px){
    .reg-grid {
      grid-template-columns: 1fr !important;
    }
  }
  @media(max-width:480px){
    .reg-grid {
      grid-template-columns: 1fr !important;
      padding: 0 !important;
    }
    table.fee-table th,
    table.fee-table td {
      padding: 0.5rem 0.5rem !important;
      font-size: 0.72rem !important;
    }
  }
`}</style>
    </>
  );
}
