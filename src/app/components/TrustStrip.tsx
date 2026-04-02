interface TrustItem {
  label: string;
}

export function TrustStrip() {
  const items: TrustItem[] = [
    { label: "Daily brief" },
    { label: "Deadline detection" },
    { label: "Action extraction" },
    { label: "Calendar suggestions" }
  ];
  return (
    <div className="mt-10 flex flex-wrap gap-3 text-[15px]">
      {items.map(({label}) => (
        <div
          key={label}
          className="glass-soft px-4 py-2.5 rounded-full border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.15)] transition-all"
        >
          {label}
        </div>
      ))}
    </div>
  );
}
