import type { Metadata } from 'next';
import './globals.css';
import { ProviderProvider } from '@/contexts/ProviderContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EmailSimple - Inbox Intelligence',
  description: 'Simplify your inbox with AI-powered briefs and action items.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderProvider>
          {children}
        </ProviderProvider>
      </body>
    </html>
  );
}
