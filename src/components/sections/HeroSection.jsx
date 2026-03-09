import { TrendingUp, Zap, Globe } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ada9bf23180332a6401811/392d3d43a_image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
        minHeight: "88vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 80,
      }}
    >
      {/* Navy overlay to align photo with site color scheme */}
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(10, 22, 48, 0.80)",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(2px)",
        pointerEvents: "none",
      }} />

      <div className="max-w-6xl mx-auto px-6 py-14 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Core messaging */}
          <div>
            {/* Label */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginBottom: 28,
              padding: "6px 14px",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: 3,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--accent)" }}>
                Management Consulting
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: "clamp(32px, 4.5vw, 58px)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.12,
              marginBottom: 24,
              letterSpacing: "-0.5px",
            }}>
              Strategy for Companies That Need{" "}
              <span style={{
                color: "var(--accent)",
                position: "relative",
                display: "inline",
              }}>
                Clarity
              </span>
              . Not Another Consultant.
            </h1>

            {/* Subheadline */}
            <p style={{
              fontSize: "clamp(15px, 1.8vw, 18px)",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.75,
              marginBottom: 40,
              maxWidth: 520,
            }}>
              We help founders and leadership teams solve growth, operational, and strategic challenges with practical execution. Not theory.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 44 }}>
              <a href="#lead-capture" className="btn-primary">
                Book a Strategy Call
              </a>
              <a href="#problem" className="btn-outline">
                See How We Work
              </a>
            </div>

            {/* Credibility line */}
            <div style={{
              paddingTop: 28,
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.6, margin: 0 }}>
                Designed for firms where clarity and credibility drive growth.
              </p>
            </div>
          </div>

          {/* RIGHT: Strategic insight panel */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <div style={{
              width: "100%",
              maxWidth: 480,
              background: "rgba(10,20,40,0.94)",
              backdropFilter: "blur(14px)",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 45px 100px rgba(0,0,0,0.65)",
              padding: 32,
            }}>
              {/* Strategic Focus Areas */}
              <div style={{ marginBottom: 72 }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 24 }}>
                  Strategic Focus
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }}>
                  {[
                    { label: "Revenue Growth Strategy", Icon: TrendingUp },
                    { label: "Operational Efficiency", Icon: Zap },
                    { label: "Market Expansion", Icon: Globe },
                  ].map((area, idx) => (
                    <div key={area.label} style={{
                      padding: "0 16px",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      borderRight: idx < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    }}>
                      <area.Icon size={40} color="rgba(255,255,255,0.5)" strokeWidth={1.5} style={{ marginBottom: 16 }} />
                      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.4, fontWeight: 500 }}>
                        {area.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Priorities */}
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 24 }}>
                  Strategic Priorities
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { name: "Market Expansion", status: "In Progress", color: "var(--accent)" },
                    { name: "Operational Redesign", status: "Complete", color: "#4ade80" },
                    { name: "Revenue Diversification", status: "Planning", color: "rgba(255,255,255,0.25)" },
                  ].map(priority => (
                    <div key={priority.name} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "center" }}>
                      <span style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", fontWeight: 500, textAlign: "left" }}>
                        {priority.name}
                      </span>
                      <span style={{ fontSize: 13, color: priority.color, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", textAlign: "right", whiteSpace: "nowrap" }}>
                        {priority.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}