import Link from 'next/link';

export function DashboardSidebar() {
  return (
    <aside className="hidden lg:block w-[220px]">
      <nav className="space-y-1">
        <div className="px-4 pb-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs uppercase tracking-[0.1em] text-white/45">
              Intelligence Hubs
            </p>
            <span className="text-[10px] bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded">
              NEW
            </span>
          </div>
          {[
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Calendar', href: '/calendar' },
            { label: 'Actions', href: '/actions' },
            { label: 'Follow-ups', href: '/follow-ups' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2.5 text-muted hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="px-4 pt-3 border-t border-white/10">
          <p className="text-xs uppercase tracking-[0.1em] text-white/45 mb-2">
            Configuration
          </p>
          <Link
            href="/settings"
            className="flex items-center gap-3 px-4 py-2.5 text-muted hover:text-white transition-colors rounded-lg hover:bg-white/5"
          >
            Settings
          </Link>
        </div>
      </nav>
    </aside>
  );
}
