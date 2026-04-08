import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "EmailSimple",
  description:
    "EmailSimple turns email overload into priorities, deadlines, actions, and follow-ups.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const supabase = createClient();
  
  const { data: { session } } = await supabase.auth.getSession();
  const { data: syncStatus } = await supabase
    .from('sync_status')
    .select('*')
    .eq('account_id', session?.user.id)
    .single();

  return (
    <html lang="en" className={inter.variable}>
      <body>
        <AuthProvider session={session}>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
