import Link from 'next/link';
import { TrustStrip } from './TrustStrip';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[140px] pb-[120px]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 hero-grid opacity-[0.08]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(7,11,23,0.7)] to-[rgba(7,11,23,0.95)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--glow),_transparent_80%)] opacity-[0.2]" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,_var(--glow),_transparent_70%)] opacity-30 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,_var(--glow-gold),_transparent_70%)] opacity-20 blur-[100px] pointer-events-none" />
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <div className="eyebrow mb-6">
              <span className="eyebrow-dot" />
              Inbox clarity, without inbox chaos
            </div>

            <h1 className="mb-8 text-[clamp(3.5rem,8vw,6.5rem)] leading-[0.95] tracking-tight max-w-[840px] font-semibold">
              Your inbox,
              <br />
              simplified into
              <br />
              what matters.
            </h1>

            <p className="text-muted text-[1.15rem] leading-[1.8] max-w-[720px]">
              EmailSimple turns overwhelming email into a clean daily brief with
              priorities, deadlines, replies, follow-ups, and calendar-ready
              actions so you can stop scanning everything and start handling the
              few things that count.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <Link 
                href="#waitlist" 
                className="primary-btn px-8 hover:bg-blue-500/90 transition-colors"
              >
                Join the Waitlist
              </Link>
              <Link 
                href="/dashboard" 
                className="secondary-btn px-8 hover:bg-white/10 transition-colors"
              >
                See the Product
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
    <div id="dashboard" className="glass mock-card border border-[rgba(255,255,255,0.1)] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
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
          className="glass-soft rounded-[26px] p-7 border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.12)] transition-all"
        >
          <p className="metric-value">{item.value}</p>
          <div className="metric-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
