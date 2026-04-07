"use client";

import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-[14px] px-5 py-2.5 text-sm font-medium transition-all duration-200";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] text-white hover:shadow-[0_0_40px_-10px_rgba(236,72,153,0.3)] transition-all",
    secondary:
      "border border-white/20 bg-white/5 text-white hover:bg-white/[0.08] backdrop-blur-sm transition-all",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
