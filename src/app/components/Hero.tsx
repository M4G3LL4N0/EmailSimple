import { TrustStrip } from './TrustStrip';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[84px] pb-[54px]">
      <div className="hero-grid" />
      <div className="container">
        <div className="grid grid-cols-[1.15fr_0.85fr] gap-7 items-center">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Inbox clarity, without inbox chaos
            </div>

            <h1 className="mt-5 mb-5 text-[clamp(3.2rem,7vw,6.2rem)] leading-[0.95] tracking-tight max-w-[840px]">
              Your inbox,
              <br />
              simplified into
              <br />
              what matters.
            </h1>

            <p className="text-muted text-[1.12rem] leading-[1.85] max-w-[720px]">
              EmailSimple turns overwhelming email into a clean daily brief with
              priorities, deadlines, replies, follow-ups, and calendar-ready
              actions so you can stop scanning everything and start handling the
              few things that count.
            </p>

            <div className="flex gap-3.5 mt-7 flex-wrap">
              <Link href="#waitlist" className="primary-btn">
                Join the waitlist
              </Link>
              <Link href="#dashboard" className="secondary-btn">
                See the product
              </Link>
            </div>

            <TrustStrip />
          </div>

          <DashboardPreview />
        </div>

        <ValueMetrics />
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <div id="dashboard" className="glass mock-card">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-muted text-[13px]">Today's briefing</div>
          <div className="mt-1.5 text-[28px] font-bold tracking-tight">
            Good morning
          </div>
        </div>
        <div className="glass-soft px-3.5 py-2.5 rounded-[16px] text-blue-2 text-[14px]">
          7 items need attention
        </div>
      </div>

      <div className="grid gap-3.5">
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
            className="glass-soft rounded-[22px] p-4.5"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="m-0 text-[17px] leading-[1.2] tracking-tight">
                {item.title}
              </h3>
              <span className="whitespace-nowrap text-gold text-[12px] uppercase tracking-wider">
                flagged
              </span>
            </div>
            <div className="mt-2 text-blue-2 text-[13px]">
              {item.meta}
            </div>
            <p className="mt-2.5 text-muted text-[14px] leading-[1.7]">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ValueMetrics() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
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
          className="glass-soft rounded-[24px] p-6"
        >
          <p className="metric-value">{item.value}</p>
          <div className="metric-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
