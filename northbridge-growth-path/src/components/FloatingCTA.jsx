import { useState, useEffect, useRef } from "react";

const handleSmoothScroll = (e) => {
  const href = e.currentTarget.getAttribute("href");
  if (href && href.startsWith("#")) {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const targetPos = target.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: targetPos, behavior: "smooth" });
    }
  }
};

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const closeModal = () => {
    setClosing(true);
    setTimeout(() => { setModalOpen(false); setClosing(false); }, 200);
  };

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setVisible(scrolled >= 0.42);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating Button */}
      <div
        style={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 100,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.35s ease, transform 0.35s ease",
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        <button
          onClick={() => setModalOpen(true)}
          style={{
            background: "var(--navy)",
            color: "var(--accent)",
            border: "1.5px solid rgba(201,168,76,0.4)",
            borderRadius: 50,
            padding: "14px 26px",
            fontSize: 14,
            fontWeight: 700,
            fontFamily: "inherit",
            cursor: "pointer",
            boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
            letterSpacing: "0.3px",
            transition: "background 0.2s, box-shadow 0.2s, transform 0.15s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "#1b2d42";
            e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.45)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "var(--navy)";
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.35)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Book a Strategy Call →
        </button>
      </div>

      {/* Modal Overlay */}
      {modalOpen && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(7,17,27,0.72)",
            backdropFilter: "blur(6px)",
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            animation: closing ? "fadeOutOverlay 0.2s ease forwards" : "fadeInOverlay 0.2s ease forwards",
          }}
        >
          <style>{`
            @keyframes fadeInOverlay {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes popUpModal {
              from { opacity: 0; transform: scale(0.92) translateY(12px); }
              to { opacity: 1; transform: scale(1) translateY(0); }
            }
            @keyframes popDownModal {
              from { opacity: 1; transform: scale(1) translateY(0); }
              to { opacity: 0; transform: scale(0.92) translateY(12px); }
            }
            @keyframes fadeOutOverlay {
              from { opacity: 1; }
              to { opacity: 0; }
            }
          `}</style>
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: "white",
              borderRadius: 10,
              padding: "52px 48px",
              maxWidth: 480,
              width: "100%",
              boxShadow: "0 40px 100px rgba(0,0,0,0.3)",
              textAlign: "center",
              position: "relative",
              animation: closing ? "popDownModal 0.2s ease forwards" : "popUpModal 0.28s cubic-bezier(0.34, 1.4, 0.64, 1) forwards",
            }}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: 16,
                right: 18,
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 20,
                color: "#94a3b8",
                lineHeight: 1,
                fontFamily: "inherit",
              }}
            >
              ×
            </button>

            {/* Accent dot */}
            <div style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--accent)",
              margin: "0 auto 20px",
            }} />

            <h2 style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: 700,
              color: "var(--navy)",
              lineHeight: 1.25,
              marginBottom: 14,
            }}>
              Ready to bring clarity to your growth strategy?
            </h2>

            <p style={{
              fontSize: 15,
              color: "#64748b",
              lineHeight: 1.7,
              marginBottom: 36,
              maxWidth: 360,
              margin: "0 auto 36px",
            }}>
              Schedule a strategy call and we'll help identify where your company may be leaving revenue on the table.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href="#booking"
                onClick={(e) => { closeModal(); handleSmoothScroll(e); }}
                style={{
                  background: "var(--navy)",
                  color: "var(--accent)",
                  fontWeight: 700,
                  fontSize: 15,
                  padding: "15px 24px",
                  borderRadius: 5,
                  textDecoration: "none",
                  display: "block",
                  transition: "background 0.2s",
                  letterSpacing: "0.3px",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "#1b2d42"}
                onMouseLeave={e => e.currentTarget.style.background = "var(--navy)"}
              >
                Book Strategy Call
              </a>
              <a
                href="#lead-capture"
                onClick={(e) => { closeModal(); handleSmoothScroll(e); }}
                style={{
                  background: "transparent",
                  color: "var(--navy)",
                  fontWeight: 600,
                  fontSize: 15,
                  padding: "14px 24px",
                  borderRadius: 5,
                  border: "1.5px solid #e2e8f0",
                  textDecoration: "none",
                  display: "block",
                  transition: "border-color 0.2s, background 0.2s",
                  letterSpacing: "0.3px",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#c9a84c"; e.currentTarget.style.background = "#fdfaf3"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.background = "transparent"; }}
              >
                Send Us a Message
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}