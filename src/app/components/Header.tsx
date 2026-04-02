import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-[20px] bg-[rgba(7,17,31,0.5)] border-b border-[rgba(255,255,255,0.08)]">
      <div className="container h-[72px] flex items-center justify-between">
        <Link href="#top" className="flex items-center gap-3 font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-b from-[#7ec4ff] to-[#4ba6ff] shadow-[0_10px_24px_rgba(103,183,255,0.3)]" />
          EmailSimple
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-[15px] text-muted">
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="#how" className="hover:text-white transition-colors">How it works</Link>
          <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="#waitlist" className="hover:text-white transition-colors">Waitlist</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            href="/dashboard" 
            className="secondary-btn h-11 hover:bg-white/10 transition-colors"
          >
            Product Demo
          </Link>
          <Link 
            href="#waitlist" 
            className="primary-btn h-11 hover:bg-blue-500/90 transition-colors"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}
