import Link from 'next/link';

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(7,17,31,0.5)] backdrop-blur-[24px]">
      <div className="container flex h-[72px] items-center justify-between">
        <Link
          href="#top"
          className="flex items-center gap-3 text-lg font-bold tracking-tight text-white"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-b from-[#7ec4ff] to-[#4ba6ff] shadow-[0_0_30px_-5px_rgba(65,158,255,0.3)]">
            E
          </div>
          EmailSimple
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#features" className="text-sm font-medium hover:text-white/80 transition-colors">
            Features
          </Link>
          <Link href="/dashboard" className="text-sm font-medium hover:text-white/80 transition-colors">
            Dashboard
          </Link>
          <Link href="/#waitlist" className="text-sm font-medium hover:text-white/80 transition-colors">
            Join Waitlist
          </Link>
        </nav>
      </div>
    </header>
  );
}
