import { useState, useRef, useEffect } from "react";

const times = ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"];
const days = [
  { day: "Mon", date: "Mar 10" },
  { day: "Tue", date: "Mar 11" },
  { day: "Wed", date: "Mar 12" },
  { day: "Thu", date: "Mar 13" },
  { day: "Fri", date: "Mar 14" },
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

export default function BookingSection() {
  const ref = useRef(null);
  const visible = useVisible(ref);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [booked, setBooked] = useState(false);

  const handleBook = () => {
    if (selectedDay && selectedTime) setBooked(true);
  };

  return (
    <section
      id="booking"
      ref={ref}
      style={{ background: "var(--gray-soft)", padding: "88px 0" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label" style={{ display: "block", textAlign: "center" }}>Book a Call</span>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Serious about solving the problem?
          </h2>
          <div className="divider" style={{ margin: "20px auto 0" }} />
          <p style={{ fontSize: 17, color: "var(--text-muted)", marginTop: 20, maxWidth: 480, margin: "20px auto 0" }}>
            Schedule a 30-minute strategy call. No pitch — just a focused conversation about your situation.
          </p>
        </div>

        <div
          style={{
            background: "white",
            borderRadius: 8,
            boxShadow: "0 4px 40px rgba(0,0,0,0.08)",
            overflow: "hidden",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {booked ? (
            <div style={{ padding: "80px 40px", textAlign: "center" }}>
              <div style={{ fontSize: 56, marginBottom: 24 }}>📅</div>
              <h3 style={{ fontSize: 26, fontWeight: 700, color: "var(--navy)", marginBottom: 12 }}>
                You're confirmed.
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: 16 }}>
                {selectedDay?.day}, {selectedDay?.date} at {selectedTime} — a calendar invite is on its way.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left info panel */}
              <div style={{ background: "var(--navy)", padding: "48px 40px", color: "white" }}>
                <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Strategy Call</div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 32 }}>30 minutes · Video call</div>
                {[
                  { icon: "⏱", text: "30-minute focused session" },
                  { icon: "🎯", text: "Tailored to your situation" },
                  { icon: "📋", text: "Strategic starting point provided" },
                  { icon: "🔒", text: "Fully confidential" },
                ].map(item => (
                  <div key={item.text} style={{ display: "flex", gap: 14, marginBottom: 18, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 16, marginTop: 1 }}>{item.icon}</span>
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.65)" }}>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Right picker */}
              <div style={{ padding: "48px 40px" }}>
                <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>
                  Select a Day
                </p>
                <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
                  {days.map(d => (
                    <button
                      key={d.day}
                      onClick={() => setSelectedDay(d)}
                      style={{
                        padding: "10px 14px",
                        borderRadius: 4,
                        border: selectedDay?.day === d.day ? "2px solid var(--accent)" : "1.5px solid var(--gray-mid)",
                        background: selectedDay?.day === d.day ? "var(--navy)" : "white",
                        color: selectedDay?.day === d.day ? "white" : "var(--charcoal)",
                        cursor: "pointer",
                        fontSize: 13,
                        fontWeight: 600,
                        fontFamily: "inherit",
                        textAlign: "center",
                        minWidth: 60,
                        transition: "all 0.15s",
                      }}
                    >
                      <div>{d.day}</div>
                      <div style={{ fontSize: 11, fontWeight: 400, marginTop: 2, opacity: 0.7 }}>{d.date}</div>
                    </button>
                  ))}
                </div>

                <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>
                  Select a Time (EST)
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 36 }}>
                  {times.map(t => (
                    <button
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      style={{
                        padding: "12px 16px",
                        borderRadius: 4,
                        border: selectedTime === t ? "2px solid var(--accent)" : "1.5px solid var(--gray-mid)",
                        background: selectedTime === t ? "var(--navy)" : "white",
                        color: selectedTime === t ? "white" : "var(--charcoal)",
                        cursor: "pointer",
                        fontSize: 14,
                        fontWeight: 500,
                        fontFamily: "inherit",
                        textAlign: "left",
                        transition: "all 0.15s",
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleBook}
                  disabled={!selectedDay || !selectedTime}
                  className="btn-primary"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    opacity: (!selectedDay || !selectedTime) ? 0.45 : 1,
                    cursor: (!selectedDay || !selectedTime) ? "not-allowed" : "pointer",
                  }}
                >
                  Schedule a Strategy Call
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}