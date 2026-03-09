import { useRef, useState, useEffect } from "react";

const steps = [
  { icon: "📝", label: "Visitor submits form", desc: "You fill out the assessment form with your challenge." },
  { icon: "⚡", label: "Instant response email", desc: "An acknowledgment email is sent within minutes." },
  { icon: "🔄", label: "Automated follow-up", desc: "Personalized follow-up within 1 business day." },
  { icon: "📅", label: "Strategy call booked", desc: "A focused 30-min call is scheduled at your convenience." },
];

function useVisible(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return visible;
}

export default function AutomationSection() {
  const ref = useRef(null);
  const visible = useVisible(ref);

  return (
    <section
      ref={ref}
      style={{ background: "white", padding: "88px 0" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <span className="section-label">How We Respond</span>
            <h2 className="section-title" style={{ marginBottom: 20 }}>
              We don't let good inquiries go cold.
            </h2>
            <div className="divider" />
            <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 0 }}>
              Every inbound inquiry is treated with urgency. We've built a simple but effective system to make sure you hear from us fast — and that we show up prepared for your situation.
            </p>
          </div>

          {/* Flow diagram */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(24px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}
          >
            {steps.map((step, i) => (
              <div key={step.label}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 20,
                    padding: "20px 24px",
                    background: "var(--gray-soft)",
                    borderRadius: 6,
                    border: "1px solid var(--gray-mid)",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(16px)",
                    transition: `opacity 0.5s ease ${0.2 + i * 0.12}s, transform 0.5s ease ${0.2 + i * 0.12}s`,
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "var(--navy)", display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: 20, flexShrink: 0,
                  }}>
                    {step.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "var(--navy)", marginBottom: 4 }}>
                      {step.label}
                    </div>
                    <div style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
                      {step.desc}
                    </div>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div style={{ display: "flex", justifyContent: "flex-start", paddingLeft: 42, margin: "4px 0" }}>
                    <div style={{ width: 2, height: 20, background: "var(--accent)", opacity: 0.4 }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}