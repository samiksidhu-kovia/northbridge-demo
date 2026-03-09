import { useState, useRef, useEffect } from "react";

function useVisible(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return visible;
}

export default function CaseStudySection() {
  const ref = useRef(null);
  const visible = useVisible(ref);

  const blocks = [
    {
      title: "Challenge",
      desc: "A B2B SaaS company had strong product-market fit but stalled growth.\n\nRevenue had plateaued at $12M ARR and leadership teams were debating priorities rather than executing them.",
    },
    {
      title: "Approach",
      desc: "Northbridge embedded with the executive team to diagnose pipeline friction and clarify market positioning.\n\nTogether we defined three strategic priorities for the next 12 months.",
    },
    {
      title: "Execution",
      desc: "We rebuilt the sales narrative, redesigned the enterprise pipeline structure, and aligned product, marketing, and sales leadership around a single growth plan.",
    },
    {
      title: "Outcome",
      desc: "Within six months the company closed multiple enterprise deals and unlocked $4.2M in new pipeline opportunities.",
    },
  ];

  return (
    <section
      id="case-study"
      ref={ref}
      style={{
        background: "#f8f9fb",
        padding: "88px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div style={{ marginBottom: 56, textAlign: "center" }}>
          <span className="section-label">Case Study</span>
          <h2 className="section-title" style={{ marginBottom: 20 }}>
            How strategic clarity unlocked $4.2M in enterprise revenue.
          </h2>
          <div className="divider" style={{ margin: "20px auto 0 auto" }} />
          <p style={{
            fontSize: 17,
            color: "#64748b",
            lineHeight: 1.75,
            marginTop: 32,
            maxWidth: 620,
            margin: "32px auto 0",
          }}>
            A real example of how focused strategic direction can turn stalled growth into measurable results.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column - stacked blocks */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {blocks.map((block, idx) => (
                <div key={idx}>
                  <h3 style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#0d1b2a",
                    marginBottom: 12,
                    letterSpacing: "0.5px",
                  }}>
                    {block.title}
                  </h3>
                  <p style={{
                    fontSize: 15,
                    color: "#64748b",
                    lineHeight: 1.7,
                    margin: 0,
                    whiteSpace: "pre-wrap",
                  }}>
                    {block.desc}
                  </p>
                </div>
              ))}
              <div style={{
                marginTop: 48,
                paddingTop: 32,
                borderTop: "1px solid #e2e8f0",
              }}>
                <p style={{
                  fontSize: 14,
                  color: "#64748b",
                  margin: "0 0 12px 0",
                }}>
                  Want to see what this process would look like for your company?
                </p>
                <a
                  href="#lead-capture"
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#c9a84c",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => e.target.style.color = "#e2c97e"}
                  onMouseLeave={(e) => e.target.style.color = "#c9a84c"}
                >
                  Book a strategy call →
                </a>
              </div>
            </div>
          </div>

          {/* Right column - metrics card */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(24px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}
          >
            <div
              style={{
                background: "linear-gradient(135deg, #0a1520 0%, #0d1b2a 60%, #111e2e 100%)",
                borderRadius: 8,
                padding: 40,
                color: "white",
              }}
            >
              <span style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#c9a84c",
                display: "block",
                marginBottom: 24,
              }}>
                Result
              </span>

              {/* Metrics */}
              <div style={{ display: "flex", flexDirection: "column", gap: 32, marginBottom: 40 }}>
                <div>
                  <div style={{
                    fontSize: "clamp(32px, 5vw, 48px)",
                    fontWeight: 700,
                    color: "#c9a84c",
                    lineHeight: 1.2,
                    marginBottom: 8,
                  }}>
                    $4.2M
                  </div>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", margin: 0 }}>
                    New enterprise pipeline generated
                  </p>
                </div>

                <div>
                  <div style={{
                    fontSize: "clamp(32px, 5vw, 48px)",
                    fontWeight: 700,
                    color: "#c9a84c",
                    lineHeight: 1.2,
                    marginBottom: 8,
                  }}>
                    3
                  </div>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", margin: 0 }}>
                    Strategic priorities aligned across leadership
                  </p>
                </div>

                <div>
                  <div style={{
                    fontSize: "clamp(32px, 5vw, 48px)",
                    fontWeight: 700,
                    color: "#c9a84c",
                    lineHeight: 1.2,
                    marginBottom: 8,
                  }}>
                    6 months
                  </div>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", margin: 0 }}>
                    Time to measurable revenue impact
                  </p>
                </div>
              </div>

              {/* Client note */}
              <div style={{
                borderTop: "1px solid rgba(255,255,255,0.1)",
                paddingTop: 24,
              }}>
                <p style={{
                  fontSize: 15,
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  margin: "0 0 16px 0",
                }}>
                  "Before this work we had good ideas but no clear direction. The strategy process forced alignment and helped us move faster than we had in years."
                </p>
                <p style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.5)",
                  margin: 0,
                  fontWeight: 600,
                }}>
                  — Marcus Tan<br />
                  <span style={{ fontWeight: 400, fontSize: 13 }}>COO, Professional Services Firm</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}