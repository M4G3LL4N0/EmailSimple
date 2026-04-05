'use client';

import Link from 'next/link';

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-[20px] bg-[rgba(7,11,23,0.5)] border-b border-[rgba(255,255,255,0.1)]">
      <div className="container h-20 flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-3 font-bold text-lg tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-b from-[#7ec4ff] to-[#4ba6ff] shadow-[0_10px_24px_rgba(103,183,255,0.3)]" />
          <span className="flex items-center gap-2">
            EmailSimple 
            <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">
              ALPHA
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-7 text-[15px] text-muted">
          <Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
          <Link href="/settings" className="hover:text-white transition-colors">Settings</Link>
          <Link href="/help" className="hover:text-white transition-colors">Help</Link>
          <div className="w-px h-6 bg-white/10" />
          <button className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Take Tour
          </button>
        </nav>
      </div>
    </header>
  );
}
