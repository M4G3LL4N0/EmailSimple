type ActionItem = {
  id: string;
  title: string;
  meta: string;
  status: "High" | "Medium" | "Low";
};

const actionItems: ActionItem[] = [
  {
    id: "1",
    title: "Reply to client contract thread",
    meta: "Approval needed today",
    status: "High",
  },
  {
    id: "2",
    title: "Send invoice follow-up",
    meta: "Payment conversation is waiting on response",
    status: "High",
  },
  {
    id: "3",
    title: "Confirm Thursday meeting",
    meta: "Calendar suggestion detected in email",
    status: "Medium",
  },
  {
    id: "4",
    title: "Review recruiter message",
    meta: "Opportunity thread resurfaced",
    status: "Low",
  },
];

const badgeClasses: Record<ActionItem["status"], string> = {
  High: "border border-red-400/20 bg-red-500/10 text-red-200",
  Medium: "border border-amber-400/20 bg-amber-500/10 text-amber-200",
  Low: "border border-emerald-400/20 bg-emerald-500/10 text-emerald-200",
};

export function ActionItems() {
  return (
    <section className="glass rounded-[28px] p-6">
      <div className="mb-5">
        <p className="text-xs uppercase tracking-[0.18em] text-white/45">
          Action items
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
          What needs action
        </h2>
      </div>

      <div className="grid gap-4">
        {actionItems.map((item) => (
          <article key={item.id} className="glass-soft rounded-[22px] p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/65">
                  {item.meta}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${badgeClasses[item.status]}`}
              >
                {item.status}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
