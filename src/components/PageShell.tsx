import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface PageShellProps {
  children: ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_30%),linear-gradient(180deg,#061018_0%,#05070b_45%,#030405_100%)] text-white">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
