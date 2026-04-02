export function ImportantThreads() {
  return (
    <section className="glass rounded-[28px] p-6">
      <h2 className="text-[22px] font-bold tracking-tight mb-5">
        Important Threads
      </h2>
      
      <div className="grid gap-3.5">
        {[
          {
            title: "Q1 Budget Approval",
            meta: "Finance Team • 3 participants",
            status: "Needs your input",
            priority: "High"
          },
          {
            title: "New Marketing Campaign",
            meta: "Marketing Team • 5 participants",
            status: "Active discussion",
            priority: "Medium"
          },
          {
            title: "Product Launch Timeline",
            meta: "Product Team • 4 participants",
            status: "Finalizing details",
            priority: "High"
          }
        ].map((thread) => (
          <div
            key={thread.title}
            className="glass-soft rounded-[22px] p-4.5"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="m-0 text-[17px] leading-[1.2] tracking-tight">
                {thread.title}
              </h3>
              <span className={`text-[12px] uppercase tracking-wider ${
                thread.priority === 'High' ? 'text-red-400' : 'text-gold'
              }`}>
                {thread.priority}
              </span>
            </div>
            <div className="mt-2 text-blue-2 text-[13px]">
              {thread.meta}
            </div>
            <p className="mt-2.5 text-muted text-[14px] leading-[1.7]">
              {thread.status}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
