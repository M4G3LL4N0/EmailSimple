import Link from 'next/link';

export function DashboardSidebar() {
  return (
    <aside className="hidden lg:block w-[220px]">
      <nav className="space-y-1">
        {[
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Calendar', href: '/calendar' },
          { label: 'Actions', href: '/actions' },
          { label: 'Follow-ups', href: '/follow-ups' },
          { label: 'Settings', href: '/settings' },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-4 py-2.5 text-muted hover:text-white transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
