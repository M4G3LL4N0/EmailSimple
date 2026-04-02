'use client';

import Link from 'next/link';

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-[16px] bg-[rgba(7,17,31,0.45)] border-b border-[rgba(255,255,255,0.06)]">
      <div className="container h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-bold text-lg tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-b from-[#7ec4ff] to-[#4ba6ff] shadow-[0_10px_24px_rgba(103,183,255,0.3)]" />
          EmailSimple
        </Link>

        <nav className="flex items-center gap-7 text-[15px] text-muted">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/settings">Settings</Link>
          <Link href="/help">Help</Link>
        </nav>
      </div>
    </header>
  );
}
