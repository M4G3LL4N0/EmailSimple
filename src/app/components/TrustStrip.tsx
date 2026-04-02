interface TrustItem {
  label: string;
  icon: string;
}

export function TrustStrip() {
  const items: TrustItem[] = [
    { label: "Daily Brief", icon: "📅" },
    { label: "Deadline Detection", icon: "⏰" },
    { label: "Action Extraction", icon: "✅" },
    { label: "Calendar Sync", icon: "📆" },
    { label: "Priority Scoring", icon: "⭐️" },
    { label: "Reply Assistant", icon: "💬" }
  ];
  
  return (
    <div className="mt-10 flex flex-wrap gap-3 text-[15px]">
      {items.map(({label, icon}) => (
        <div
          key={label}
          className="glass-soft px-4 py-2.5 rounded-full border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.15)] transition-all flex items-center gap-2"
        >
          <span>{icon}</span>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
