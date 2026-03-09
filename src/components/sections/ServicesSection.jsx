import { useRef, useState, useEffect } from "react";
import { Users, TrendingUp, Settings } from "lucide-react";

const services = [
  {
    Icon: Users,
    title: "Fractional Strategy Leadership",
    desc: "Ongoing executive-level strategy support for growing companies without the cost of a full-time hire. We embed into your leadership team and drive the work.",
    tag: "Most Popular",
  },
  {
    Icon: TrendingUp,
    title: "Growth Strategy",
    desc: "Data-driven plans to unlock new revenue opportunities. From market entry to pricing optimization, we identify where growth is being left on the table.",
    tag: null,
  },
  {
    Icon: Settings,
    title: "Operational Optimization",
    desc: "Improving systems, processes, and team alignment so your organization can execute at scale without chaos.",
    tag: null,
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

export default function ServicesSection() {
  const ref = useRef(null);
  const visible = useVisible(ref);

  return (
    <section id="services" ref={ref} style={{ background: "white", padding: "88px 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label" style={{ display: "block", textAlign: "center" }}>What We Do</span>
          <h2 className="section-title" style={{ textAlign: "center", margin: "0 auto", maxWidth: 520 }}>
            Services designed for real business outcomes
          </h2>
          <div className="divider" style={{ margin: "20px auto 0" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              style={{
                padding: "44px 36px",
                border: "1px solid var(--gray-mid)",
                borderRadius: 6,
                position: "relative",
                background: "white",
                transition: "box-shadow 0.25s, transform 0.25s",
                cursor: "default",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transitionDelay: `${i * 0.15}s`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = visible ? "translateY(0)" : "translateY(28px)";
              }}
            >
              {s.tag && (
                <span style={{
                  position: "absolute", top: 20, right: 20,
                  fontSize: 10, fontWeight: 700, letterSpacing: "1.5px",
                  textTransform: "uppercase", color: "var(--navy)",
                  background: "var(--accent)", padding: "4px 10px", borderRadius: 2,
                }}>
                  {s.tag}
                </span>
              )}
              <div style={{ marginBottom: 24 }}>
                <s.Icon size={24} color="var(--navy)" strokeWidth={1.5} />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--navy)", marginBottom: 14, lineHeight: 1.3 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.75, margin: "0 0 28px 0" }}>
                {s.desc}
              </p>
              <a
                href="#lead-capture"
                style={{
                  fontSize: 13, fontWeight: 600, color: "var(--navy)",
                  textDecoration: "none", borderBottom: "1.5px solid var(--accent)",
                  paddingBottom: 2, letterSpacing: "0.3px",
                }}
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}