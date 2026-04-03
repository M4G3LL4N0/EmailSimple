import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(7,17,31,0.5)] backdrop-blur-[20px]">
      <div className="container flex h-[72px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-bold tracking-tight text-white"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-b from-[#7ec4ff] to-[#4ba6ff] text-sm font-bold text-[#04111f] shadow-[0_10px_24px_rgba(103,183,255,0.3)]">
            E
          </div>
          <span>EmailSimple</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <Link href="/#features" className="transition hover:text-white">
            Features
          </Link>
          <Link href="/#pricing" className="transition hover:text-white">
            Pricing
          </Link>
          <Link href="/#waitlist" className="transition hover:text-white">
            Waitlist
          </Link>
          <Link href="/dashboard" className="transition hover:text-white">
            Dashboard
          </Link>
        </nav>

        <Link 
          href="/#waitlist" 
          className="secondary-btn h-[44px] px-6 flex items-center justify-center"
        >
          Join waitlist
        </Link>
      </div>
    </header>
  );
}
