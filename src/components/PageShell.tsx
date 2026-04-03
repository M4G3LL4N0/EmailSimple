import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface PageShellProps {
  children: ReactNode;
  /** Whether to show the standard background gradient */
  showBackground?: boolean;
  /** Additional classes for the main container */
  className?: string;
}

export function PageShell({ 
  children, 
  showBackground = true,
  className = ""
}: PageShellProps) {
  return (
    <main className={`min-h-screen text-white ${className} ${
      showBackground 
        ? "bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_30%),linear-gradient(180deg,#061018_0%,#05070b_45%,#030405_100%)]" 
        : ""
    }`}>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
