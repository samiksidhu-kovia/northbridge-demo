import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    quote: "For the first time, our leadership team was aligned on where we were actually going. Northbridge gave us the clarity to stop debating and start moving.",
    name: "Sarah Klein",
    title: "CEO, Series B SaaS Company",
    metric: "Sharper Focus",
    metricLabel: "across the leadership team",
  },
  {
    quote: "We had the right people but no coherent direction. After working with them, decisions that used to take weeks were happening in days.",
    name: "Marcus Tan",
    title: "COO, Professional Services Firm",
    metric: "Faster Decisions",
    metricLabel: "at every level of the org",
  },
  {
    quote: "They helped us see where we were losing deals we should have won. The positioning work alone changed how prospects responded to us.",
    name: "James Rivera",
    title: "Founder, B2B Technology Company",
    metric: "Stronger Positioning",
    metricLabel: "in a crowded market",
  },
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

export default function TestimonialsSection() {
  const ref = useRef(null);
  const visible = useVisible(ref);

  return (
    <section
      id="testimonials"
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #0d1b2a 0%, #1b2d42 100%)",
        padding: "88px 0",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label" style={{ display: "block", textAlign: "center" }}>Client Results</span>
          <h2 className="section-title light" style={{ textAlign: "center", margin: "0 auto", maxWidth: 480 }}>
            Outcomes that speak for themselves
          </h2>
          <div className="divider" style={{ margin: "20px auto 0" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 6,
                padding: "40px 36px",
                display: "flex",
                flexDirection: "column",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
              }}
            >
              {/* Metric callout */}
              <div style={{ marginBottom: 28 }}>
                <div style={{ fontSize: 36, fontWeight: 700, color: "var(--accent)", lineHeight: 1 }}>
                  {t.metric}
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>
                  {t.metricLabel}
                </div>
              </div>

              {/* Quote */}
              <p style={{
                fontSize: 15,
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.8,
                fontStyle: "italic",
                flex: 1,
                margin: "0 0 32px 0",
              }}>
                "{t.quote}"
              </p>

              {/* Attribution */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "white" }}>{t.name}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 3 }}>{t.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}