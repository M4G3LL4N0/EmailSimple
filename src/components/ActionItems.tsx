export function ActionItems() {
  return (
    <section className="glass rounded-[28px] p-6">
      <h2 className="text-[22px] font-bold tracking-tight mb-5">
        Action Items
      </h2>
      
      <div className="grid gap-3.5">
        {[
          {
            title: "Approve vendor contract",
            meta: "Due today • Legal Team",
            status: "Pending your approval"
          },
          {
            title: "Review marketing budget",
            meta: "Due tomorrow • Finance Team",
            status: "Needs your feedback"
          },
          {
            title: "Schedule team meeting",
            meta: "Follow-up • Next week",
            status: "Needs time slot"
          }
        ].map((item) => (
          <div
            key={item.title}
            className="glass-soft rounded-[22px] p-4.5"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="m-0 text-[17px] leading-[1.2] tracking-tight">
                {item.title}
              </h3>
              <span className="text-gold text-[12px] uppercase tracking-wider">
                Action needed
              </span>
            </div>
            <div className="mt-2 text-blue-2 text-[13px]">
              {item.meta}
            </div>
            <p className="mt-2.5 text-muted text-[14px] leading-[1.7]">
              {item.status}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
