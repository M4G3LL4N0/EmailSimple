const features = [
  {
    title: "Daily Brief",
    copy:
      "See the few emails that actually matter today, instead of digging through a noisy inbox.",
  },
  {
    title: "Deadline Detection",
    copy:
      "Catch dates, due times, hidden asks, approvals, and commitments buried inside long threads.",
  },
  {
    title: "Action Extraction",
    copy:
      "Turn messy conversations into a clean list of next steps, reply needs, and follow-ups.",
  },
  {
    title: "Calendar Ready",
    copy:
      "Convert important email moments into events, reminders, and organized scheduling suggestions.",
  },
  {
    title: "Priority Intelligence",
    copy:
      "Understand what is urgent, what is strategic, what can wait, and what should never be missed.",
  },
  {
    title: "Fast Clarity",
    copy:
      "Read one screen and know what matters, what needs action, and what you can safely ignore.",
  },
];

const steps = [
  {
    number: "01",
    title: "Connect your inbox",
    copy:
      "EmailSimple securely reads your email activity and starts organizing what matters most.",
  },
  {
    number: "02",
    title: "AI finds the signals",
    copy:
      "Important senders, deadlines, requests, approvals, and follow-ups are pulled into one clean layer.",
  },
  {
    number: "03",
    title: "Start your day with clarity",
    copy:
      "Open a simple command center that tells you what needs attention now and what can wait.",
  },
];

const pricing = [
  {
    tier: "Starter",
    price: "Free",
    description: "For trying the daily brief and simplified inbox summaries.",
    bullets: [
      "One inbox connection",
      "Basic daily brief",
      "Important thread summaries",
      "Simple action extraction",
    ],
  },
  {
    tier: "Pro",
    price: "$19/mo",
    description: "For professionals who want deadlines, follow-ups, and deeper organization.",
    bullets: [
      "Everything in Starter",
      "Deadline detection",
      "Calendar suggestions",
      "Priority scoring",
      "Follow-up reminders",
    ],
    featured: true,
  },
  {
    tier: "Team",
    price: "$49/user",
    description: "For companies that need shared visibility, faster response, and better coordination.",
    bullets: [
      "Everything in Pro",
      "Shared workflows",
      "Admin controls",
      "Team-level summaries",
      "Collaboration insights",
    ],
  },
];

function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        background: "rgba(7, 17, 31, 0.45)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="container"
        style={{
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#top"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            fontSize: "1.05rem",
          }}
        >
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 12,
              background:
                "linear-gradient(180deg, rgba(126,196,255,1) 0%, rgba(75,166,255,1) 100%)",
              boxShadow: "0 10px 24px rgba(103, 183, 255, 0.3)",
            }}
          />
          <span>EmailSimple</span>
        </a>

        <nav
          className="hide-mobile"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            color: "var(--muted)",
            fontSize: 15,
          }}
        >
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#waitlist">Waitlist</a>
        </nav>

        <a href="#waitlist" className="secondary-btn" style={{ height: 44 }}>
          Join waitlist
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "84px 0 54px",
      }}
    >
      <div className="hero-grid" />
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: 28,
            alignItems: "center",
          }}
          className="hero-wrap"
        >
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Inbox clarity, without inbox chaos
            </div>

            <h1
              style={{
                margin: "18px 0 18px",
                fontSize: "clamp(3.2rem, 7vw, 6.2rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.07em",
                maxWidth: 840,
              }}
            >
              Your inbox,
              <br />
              simplified into
              <br />
              what matters.
            </h1>

            <p
              style={{
                margin: 0,
                maxWidth: 720,
                fontSize: "1.12rem",
                lineHeight: 1.85,
                color: "var(--muted)",
              }}
            >
              EmailSimple turns overwhelming email into a clean daily brief with
              priorities, deadlines, replies, follow-ups, and calendar-ready
              actions so you can stop scanning everything and start handling the
              few things that count.
            </p>

            <div
              style={{
                display: "flex",
                gap: 14,
                marginTop: 28,
                flexWrap: "wrap",
              }}
            >
              <a href="#waitlist" className="primary-btn">
                Join the waitlist
              </a>
              <a href="#dashboard" className="secondary-btn">
                See the product
              </a>
            </div>

            <div
              style={{
                marginTop: 34,
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                color: "var(--muted)",
                fontSize: 14,
              }}
            >
              <span className="glass-soft" style={{ padding: "10px 14px", borderRadius: 999 }}>
                Daily brief
              </span>
              <span className="glass-soft" style={{ padding: "10px 14px", borderRadius: 999 }}>
                Deadline detection
              </span>
              <span className="glass-soft" style={{ padding: "10px 14px", borderRadius: 999 }}>
                Action extraction
              </span>
              <span className="glass-soft" style={{ padding: "10px 14px", borderRadius: 999 }}>
                Calendar suggestions
              </span>
            </div>
          </div>

          <div id="dashboard" className="glass mock-card">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 18,
              }}
            >
              <div>
                <div style={{ fontSize: 13, color: "var(--muted)" }}>
                  Today’s briefing
                </div>
                <div
                  style={{
                    marginTop: 6,
                    fontSize: 28,
                    fontWeight: 700,
                    letterSpacing: "-0.05em",
                  }}
                >
                  Good morning
                </div>
              </div>
              <div
                className="glass-soft"
                style={{
                  padding: "10px 14px",
                  borderRadius: 16,
                  color: "var(--blue-2)",
                  fontSize: 14,
                }}
              >
                7 items need attention
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gap: 14,
              }}
            >
              {[
                {
                  title: "Client contract needs approval",
                  meta: "Due today • High priority",
                  body: "The sender is waiting on your confirmation before moving forward.",
                },
                {
                  title: "Schedule request for Thursday",
                  meta: "Calendar suggestion • Medium priority",
                  body: "An email thread includes a clear proposed time and should be reviewed.",
                },
                {
                  title: "Invoice follow-up missing response",
                  meta: "2 days old • Needs reply",
                  body: "A payment-related conversation may stall if you do not respond soon.",
                },
                {
                  title: "Recruiter reached back out",
                  meta: "Important sender • Opportunity",
                  body: "A career-related thread resurfaced and likely deserves quick attention.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="glass-soft"
                  style={{
                    borderRadius: 22,
                    padding: 18,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 16,
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontSize: 17,
                        lineHeight: 1.2,
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {item.title}
                    </h3>
                    <span
                      style={{
                        whiteSpace: "nowrap",
                        color: "var(--gold)",
                        fontSize: 12,
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                      }}
                    >
                      flagged
                    </span>
                  </div>
                  <div
                    style={{
                      marginTop: 8,
                      color: "var(--blue-2)",
                      fontSize: 13,
                    }}
                  >
                    {item.meta}
                  </div>
                  <p
                    style={{
                      margin: "10px 0 0",
                      color: "var(--muted)",
                      fontSize: 14,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 16,
            marginTop: 26,
          }}
        >
          {[
            {
              value: "1 screen",
              label: "Open one clear briefing instead of re-reading your entire inbox.",
            },
            {
              value: "Less miss",
              label: "Catch hidden deadlines, buried asks, and follow-ups before they slip.",
            },
            {
              value: "More action",
              label: "Know what matters now, what can wait, and what should hit your calendar.",
            },
          ].map((item) => (
            <div
              key={item.value}
              className="glass-soft"
              style={{ padding: 24, borderRadius: 24 }}
            >
              <p className="metric-value">{item.value}</p>
              <div className="metric-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureSection() {
  return (
    <section id="features" style={{ padding: "42px 0 48px" }}>
      <div className="container">
        <div style={{ maxWidth: 760 }}>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Features
          </div>
          <h2 className="section-title" style={{ marginTop: 18 }}>
            Built to make email feel light again.
          </h2>
          <p className="section-copy" style={{ maxWidth: 720, marginTop: 18 }}>
            EmailSimple is not another cluttered inbox. It is a calm command
            layer that translates email into priorities, actions, and daily
            clarity.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 18,
            marginTop: 28,
          }}
        >
          {features.map((feature) => (
            <div key={feature.title} className="glass feature-card">
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  background:
                    "linear-gradient(180deg, rgba(126,196,255,0.95) 0%, rgba(75,166,255,0.9) 100%)",
                  boxShadow: "0 10px 30px rgba(103,183,255,0.18)",
                }}
              />
              <h3
                style={{
                  margin: "20px 0 12px",
                  fontSize: 22,
                  lineHeight: 1.1,
                  letterSpacing: "-0.04em",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "var(--muted)",
                  fontSize: 15,
                  lineHeight: 1.8,
                }}
              >
                {feature.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" style={{ padding: "42px 0 48px" }}>
      <div className="container">
        <div
          className="glass"
          style={{
            borderRadius: 34,
            padding: 30,
          }}
        >
          <div style={{ maxWidth: 760 }}>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              How it works
            </div>
            <h2 className="section-title" style={{ marginTop: 18 }}>
              From inbox chaos to one clear operating view.
            </h2>
            <p className="section-copy" style={{ marginTop: 18 }}>
              EmailSimple helps users move from scanning and guessing to
              instantly knowing what matters, why it matters, and what to do
              next.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 18,
              marginTop: 26,
            }}
          >
            {steps.map((step) => (
              <div key={step.number} className="glass-soft step-card">
                <div className="number-pill">{step.number}</div>
                <h3
                  style={{
                    margin: "18px 0 10px",
                    fontSize: 22,
                    lineHeight: 1.1,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: "var(--muted)",
                    fontSize: 15,
                    lineHeight: 1.8,
                  }}
                >
                  {step.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" style={{ padding: "42px 0 48px" }}>
      <div className="container">
        <div style={{ maxWidth: 760 }}>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Pricing
          </div>
          <h2 className="section-title" style={{ marginTop: 18 }}>
            Start simple, upgrade when your inbox gets serious.
          </h2>
          <p className="section-copy" style={{ marginTop: 18 }}>
            A freemium entry makes the product easy to try, while Pro and Team
            tiers scale with the value of faster decisions and fewer missed
            opportunities.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 18,
            marginTop: 28,
          }}
        >
          {pricing.map((plan) => (
            <div
              key={plan.tier}
              className={plan.featured ? "glass pricing-card" : "glass-soft pricing-card"}
              style={
                plan.featured
                  ? {
                      border: "1px solid rgba(126,196,255,0.28)",
                      boxShadow: "0 20px 60px rgba(103,183,255,0.12)",
                    }
                  : undefined
              }
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: 24,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {plan.tier}
                </h3>
                {plan.featured ? (
                  <span
                    style={{
                      padding: "8px 12px",
                      borderRadius: 999,
                      background: "rgba(103,183,255,0.14)",
                      color: "var(--blue-2)",
                      fontSize: 12,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                    }}
                  >
                    Most popular
                  </span>
                ) : null}
              </div>

              <div
                style={{
                  marginTop: 18,
                  fontSize: 42,
                  lineHeight: 1,
                  fontWeight: 700,
                  letterSpacing: "-0.06em",
                }}
              >
                {plan.price}
              </div>

              <p
                style={{
                  margin: "14px 0 0",
                  color: "var(--muted)",
                  lineHeight: 1.8,
                  fontSize: 15,
                }}
              >
                {plan.description}
              </p>

              <div
                style={{
                  marginTop: 20,
                  display: "grid",
                  gap: 12,
                }}
              >
                {plan.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    style={{
                      display: "flex",
                      gap: 12,
                      color: "var(--muted)",
                      fontSize: 14,
                      lineHeight: 1.7,
                    }}
                  >
                    <span style={{ color: "var(--gold)" }}>•</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <a
                href="#waitlist"
                className={plan.featured ? "primary-btn" : "secondary-btn"}
                style={{ marginTop: 24, width: "100%" }}
              >
                Get early access
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WaitlistSection() {
  return (
    <section id="waitlist" style={{ padding: "42px 0 72px" }}>
      <div className="container">
        <div
          className="glass"
          style={{
            borderRadius: 34,
            padding: "34px 28px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -80,
              right: -60,
              width: 260,
              height: 260,
              borderRadius: 999,
              background: "radial-gradient(circle, rgba(103,183,255,0.22), transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 0.9fr",
              gap: 20,
              alignItems: "center",
            }}
          >
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Early access
              </div>
              <h2 className="section-title" style={{ marginTop: 18 }}>
                Be first to try EmailSimple.
              </h2>
              <p className="section-copy" style={{ marginTop: 18, maxWidth: 620 }}>
                Join the waitlist to get early access, product updates, and the
                first release of the inbox briefing experience.
              </p>
            </div>

            <form
              style={{
                display: "grid",
                gap: 14,
              }}
            >
              <input
                type="text"
                placeholder="Your name"
                style={{
                  height: 54,
                  borderRadius: 18,
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.05)",
                  color: "white",
                  padding: "0 16px",
                  outline: "none",
                }}
              />
              <input
                type="email"
                placeholder="Email address"
                style={{
                  height: 54,
                  borderRadius: 18,
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.05)",
                  color: "white",
                  padding: "0 16px",
                  outline: "none",
                }}
              />
              <button type="button" className="primary-btn" style={{ width: "100%" }}>
                Join the waitlist
              </button>
              <p
                style={{
                  margin: 0,
                  color: "var(--muted-2)",
                  fontSize: 13,
                  lineHeight: 1.6,
                }}
              >
                This is the front-end waitlist section for now. Next we can wire
                it to Supabase and store signups for real.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ padding: "0 0 36px" }}>
      <div className="container">
        <div className="footer-line" />
        <div
          style={{
            paddingTop: 20,
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            color: "var(--muted)",
            fontSize: 14,
          }}
        >
          <div>© {new Date().getFullYear()} EmailSimple</div>
          <div style={{ display: "flex", gap: 18 }}>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#waitlist">Waitlist</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <FeatureSection />
      <HowItWorks />
      <PricingSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
