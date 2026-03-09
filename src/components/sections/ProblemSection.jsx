import { useRef, useState, useEffect } from "react";
import { Crosshair, BarChart2, Layers } from "lucide-react";

const problems = [
  {
    Icon: Crosshair,
    title: "Strategic Clarity",
    desc: "Helping leadership teams define clear priorities and direction so every decision reinforces the same goal.",
  },
  {
    Icon: BarChart2,
    title: "Growth Bottlenecks",
    desc: "Identifying what's slowing revenue and removing friction across your pipeline, product, and positioning.",
  },
  {
    Icon: Layers,
    title: "Operational Efficiency",
    desc: "Fixing internal processes that prevent companies from scaling without adding overhead.",
  },
];

function useVisible(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return visible;
}

export default function ProblemSection() {
  const ref = useRef(null);
  const visible = useVisible(ref);

  return (
    <section id="problem" ref={ref} style={{ background: "var(--gray-soft)", padding: "88px 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16" style={{ maxWidth: 640 }}>
          <span className="section-label">The Problem</span>
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            Most consulting firms talk theory. We focus on decisions that actually move the business.
          </h2>
          <div className="divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {problems.map((p, i) => (
            <div
              key={p.title}
              style={{
                background: "white",
                padding: "40px 36px",
                borderRadius: 6,
                borderTop: "3px solid var(--accent)",
                boxShadow: "0 2px 24px rgba(0,0,0,0.05)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
              }}
            >
              <div style={{ marginBottom: 20 }}>
                <p.Icon size={22} color="var(--navy)" strokeWidth={1.5} />
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 700, color: "var(--navy)", marginBottom: 14 }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.75, margin: 0 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}