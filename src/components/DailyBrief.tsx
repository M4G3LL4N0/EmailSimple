export function DailyBrief() {
  return (
    <section className="glass rounded-[32px] p-7 border border-[rgba(255,255,255,0.1)]">
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
interface BriefItem {
  title: string;
  meta: string;
  body: string;
}

export function DailyBrief() {
  const items: BriefItem[] = [
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
    </section>
  );
}
