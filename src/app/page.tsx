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

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeatureSection } from './components/FeatureSection';
import { HowItWorks } from './components/HowItWorks';
import { PricingSection } from './components/PricingSection';
import { WaitlistSection } from './components/WaitlistSection';
import { Footer } from './components/Footer';

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

import { WaitlistSection } from './components/WaitlistSection';

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
