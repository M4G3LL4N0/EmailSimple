export function TrustStrip() {
  return (
    <div className="mt-10 flex flex-wrap gap-3 text-[15px]">
      {[
        "Daily brief",
        "Deadline detection", 
        "Action extraction",
        "Calendar suggestions"
      ].map((item) => (
        <div
          key={item}
          className="glass-soft px-4 py-2.5 rounded-full border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.15)] transition-all"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
