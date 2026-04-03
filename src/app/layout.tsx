import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EmailSimple",
  description:
    "EmailSimple turns your inbox into a clean daily brief with priorities, deadlines, follow-ups, and calendar-ready actions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
