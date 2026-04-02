import React from 'react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-[20px] bg-[rgba(7,17,31,0.5)] border-b border-gray-800">
      <div className="container h-[72px] flex items-center justify-between">
        <Link href="#top" className="flex items-center gap-3 font-bold text-lg tracking-tight hover">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-b from-[#7ec4ff] to-[#4ba6ff] shadow-[0 2px 4px rgba(0,0,0,0.1)]">
            EmailSimple
          </div>
          EmailSimple
        </Link>
      </div>
    </header>
  );
}
