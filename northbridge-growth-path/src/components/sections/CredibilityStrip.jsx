import { useEffect, useRef, useState } from "react";
import { Zap, Briefcase, Factory, Network } from "lucide-react";

const stats = [
  { number: "10+", label: "Years Leadership Experience" },
  { number: "$20M+", label: "Combined Client Revenue" },
  { number: "100+", label: "Strategic Engagements" },
];

const industries = [
  { label: "SaaS", Icon: Zap },
  { label: "Professional Services", Icon: Briefcase },
  { label: "Manufacturing", Icon: Factory },
  { label: "B2B Technology", Icon: Network },
];

function useVisible(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return visible;
}

export default function CredibilityStrip() {
  const ref = useRef(null);
  const visible = useVisible(ref);

  return (
    <section
      ref={ref}
      style={{ background: "var(--navy)", padding: "56px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="text-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
              }}
            >
              <div style={{ fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 700, color: "var(--accent)", lineHeight: 1 }}>
                {s.number}
              </div>
              <div style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", marginTop: 10, fontWeight: 400 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 36 }}>
          <p style={{ textAlign: "center", fontSize: 12, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 28, fontWeight: 600 }}>
            Industry Focus
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {industries.map((ind, i) => (
              <div
                key={ind.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "10px 20px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 4,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.5s ease ${0.3 + i * 0.1}s, transform 0.5s ease ${0.3 + i * 0.1}s`,
                }}
              >
                <ind.Icon size={15} color="rgba(255,255,255,0.5)" strokeWidth={1.5} />
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", fontWeight: 500 }}>{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}