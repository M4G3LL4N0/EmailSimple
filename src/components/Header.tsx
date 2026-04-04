import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-[24px] bg-[rgba(7,11,23,0.6)] border-b border-[rgba(255,255,255,0.1)]">
      <div className="container h-[80px] flex items-center justify-between">
        <Link href="#top" className="flex items-center gap-3 font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-b from-[var(--blue)] to-[var(--indigo)] shadow-[0_8px_24px_rgba(109,140,255,0.3)] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="bg-gradient-to-b from-[var(--foreground)] to-[rgba(245,249,255,0.9)] bg-clip-text text-transparent">
            EmailSimple
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          <Link href="#features" className="text-muted hover:text-white transition-colors">Features</Link>
          <Link href="#how" className="text-muted hover:text-white transition-colors">How it works</Link>
          <Link href="#pricing" className="text-muted hover:text-white transition-colors">Pricing</Link>
          <Link href="#waitlist" className="text-muted hover:text-white transition-colors">Waitlist</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            href="/dashboard" 
            className="secondary-btn h-11 px-6 hover:bg-white/10 transition-colors"
          >
            Product Demo
          </Link>
          <Link 
            href="#waitlist" 
            className="primary-btn h-11 px-6 hover:bg-blue-500/90 transition-colors"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}
