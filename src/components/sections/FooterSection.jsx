export default function FooterSection() {
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

  const handleLogoScroll = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#07111b", padding: "64px 0 40px 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 12 }}>
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ada9bf23180332a6401811/7a3bc88df_norhbridgelogo2.png"
                alt="Northbridge Strategy"
                style={{ height: 44, width: "auto" }} />

            </div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: 240 }}>
              Strategy and execution support for leadership teams that need clarity, not more complexity.
            </p>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 16 }}>
              Navigation
            </div>
            {[
            { label: "How We Work", href: "#problem" },
            { label: "Services", href: "#services" },
            { label: "Case Study", href: "#case-study" },
            { label: "Results", href: "#testimonials" },
            { label: "Contact", href: "#lead-capture" }].
            map((link) =>
            <a
              key={link.label}
              href={link.href}
              onClick={handleSmoothScroll}
              style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,0.5)", textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
              onMouseEnter={(e) => e.target.style.color = "white"}
              onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.5)"}>

                {link.label}
              </a>
            )}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 16 }}>
              Contact
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href="mailto:support@northbridgestrategy.com"
                style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => e.target.style.color = "var(--accent)"}
                onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.55)"}>

                support@northbridgestrategy.com
              </a>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.4)" }}>New York, NY</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.25)" }}>
            © 2026 Northbridge Strategy. All rights reserved.
          </span>

          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.2)" }}>
            Strategy · Clarity · Results
          </span>
        </div>
      </div>
    </footer>);

}