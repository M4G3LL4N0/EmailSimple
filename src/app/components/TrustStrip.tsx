export function TrustStrip() {
  return (
    <div className="mt-8 flex flex-wrap gap-3 text-muted text-[14px]">
      {[
        "Daily brief",
        "Deadline detection", 
        "Action extraction",
        "Calendar suggestions"
      ].map((item) => (
        <div
          key={item}
          className="glass-soft px-3.5 py-2.5 rounded-full"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
