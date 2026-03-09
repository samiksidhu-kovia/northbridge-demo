import { useState, useRef, useEffect } from "react";
import { base44 } from "@/api/base44Client";

function useVisible(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return visible;
}

export default function LeadCaptureSection() {
  const ref = useRef(null);
  const visible = useVisible(ref);
  const [form, setForm] = useState({ name: "", email: "", company: "", challenge: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.entities.Lead.create({ ...form, source: "assessment_form" });
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    fontSize: 15,
    border: "1.5px solid rgba(255,255,255,0.15)",
    borderRadius: 4,
    background: "rgba(255,255,255,0.06)",
    color: "white",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  };

  return (
    <section
      id="lead-capture"
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #0a1520 0%, #0d1b2a 60%, #111e2e 100%)",
        padding: "88px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <span className="section-label">Free Assessment</span>
            <h2 className="section-title light" style={{ marginBottom: 20 }}>
              Get a Free Strategic Assessment
            </h2>
            <div className="divider" />
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, marginBottom: 40 }}>
              Share your biggest business challenge and we'll provide a strategic starting point. No obligation, no sales pressure.
            </p>

            {/* Trust bullets */}
            {[
              "Response within 1 business day",
              "Personalized, not templated",
              "No pitch decks or bloated proposals",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: 11, color: "var(--navy)", fontWeight: 700 }}>✓</span>
                </div>
                <span style={{ fontSize: 15, color: "rgba(255,255,255,0.65)" }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 8,
              padding: "48px 40px",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(24px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 20 }}>✓</div>
                <h3 style={{ fontSize: 24, fontWeight: 700, color: "white", marginBottom: 12 }}>
                  We'll be in touch shortly.
                </h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15 }}>
                  Expect a personalized response within 1 business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "1.5px", textTransform: "uppercase", display: "block", marginBottom: 8 }}>Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "var(--accent)"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.15)"}
                  />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "1.5px", textTransform: "uppercase", display: "block", marginBottom: 8 }}>Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="your@company.com"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "var(--accent)"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.15)"}
                  />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "1.5px", textTransform: "uppercase", display: "block", marginBottom: 8 }}>Company</label>
                  <input
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                    placeholder="Company name"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "var(--accent)"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.15)"}
                  />
                </div>
                <div style={{ marginBottom: 32 }}>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "1.5px", textTransform: "uppercase", display: "block", marginBottom: 8 }}>Biggest Challenge</label>
                  <textarea
                    rows={4}
                    value={form.challenge}
                    onChange={e => setForm({ ...form, challenge: e.target.value })}
                    placeholder="Describe your biggest strategic or operational challenge..."
                    style={{ ...inputStyle, resize: "vertical", minHeight: 110 }}
                    onFocus={e => e.target.style.borderColor = "var(--accent)"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.15)"}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ width: "100%", textAlign: "center", opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? "Submitting..." : "Get My Assessment →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}