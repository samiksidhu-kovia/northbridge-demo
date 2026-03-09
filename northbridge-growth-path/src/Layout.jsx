import { useState, useEffect } from "react";
import { createPageUrl } from "@/utils";

export default function Layout({ children, currentPageName }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSmoothScroll = (e) => {
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const targetPos = target.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top: targetPos, behavior: "smooth" });
        setMenuOpen(false);
      }
    }
  };

  const navLinks = [
    { label: "How We Work", href: "#problem" },
    { label: "Services", href: "#services" },
    { label: "Case Study", href: "#case-study" },
    { label: "Results", href: "#testimonials" },
    { label: "Contact", href: "#lead-capture" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <style>{`
        :root {
          --navy: #0d1b2a;
          --navy-mid: #1b2d42;
          --navy-light: #243b55;
          --charcoal: #2d3748;
          --accent: #c9a84c;
          --accent-light: #e2c97e;
          --gray-soft: #f8f9fb;
          --gray-mid: #e2e8f0;
          --text-muted: #64748b;
        }
        body { font-family: 'Inter', sans-serif; }
        .btn-primary {
          background: var(--accent);
          color: var(--navy);
          font-weight: 600;
          padding: 14px 32px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          display: inline-block;
          text-decoration: none;
          font-size: 15px;
          letter-spacing: 0.3px;
        }
        .btn-primary:hover {
          background: var(--accent-light);
          transform: translateY(-1px);
        }
        .btn-outline {
          background: transparent;
          color: white;
          font-weight: 500;
          padding: 13px 30px;
          border-radius: 4px;
          border: 1.5px solid rgba(255,255,255,0.5);
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
          display: inline-block;
          text-decoration: none;
          font-size: 15px;
        }
        .btn-outline:hover {
          border-color: white;
          background: rgba(255,255,255,0.08);
        }
        .section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 16px;
          display: block;
        }
        .section-title {
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 700;
          color: var(--navy);
          line-height: 1.2;
        }
        .section-title.light {
          color: white;
        }
        .divider {
          width: 48px;
          height: 3px;
          background: var(--accent);
          margin: 20px 0 32px 0;
        }
      `}</style>

      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(13,27,42,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
          padding: scrolled ? "16px 0" : "24px 0",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", cursor: "pointer" }}>
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ada9bf23180332a6401811/7a3bc88df_norhbridgelogo2.png"
              alt="Northbridge Strategy"
              style={{ height: 52, width: "auto" }}
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleSmoothScroll}
                className="text-sm font-medium transition-colors"
                style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none" }}
                onMouseEnter={e => e.target.style.color = "white"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.75)"}
              >
                {link.label}
              </a>
            ))}
            <a href="#lead-capture" onClick={handleSmoothScroll} className="btn-primary" style={{ padding: "10px 22px", fontSize: "14px" }}>
              Book a Call
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}
          >
            <div style={{ width: 22, height: 2, background: "white", marginBottom: 5, transition: "0.2s" }} />
            <div style={{ width: 22, height: 2, background: "white", marginBottom: 5 }} />
            <div style={{ width: 22, height: 2, background: "white" }} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: "var(--navy)", borderTop: "1px solid rgba(255,255,255,0.1)", padding: "16px 24px" }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleSmoothScroll}
                className="block py-3 text-sm"
                style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
              >
                {link.label}
              </a>
            ))}
            <a href="#lead-capture" onClick={handleSmoothScroll} className="btn-primary block mt-4 text-center">
              Book a Call
            </a>
          </div>
        )}
      </nav>

      <main>{children}</main>
    </div>
  );
}