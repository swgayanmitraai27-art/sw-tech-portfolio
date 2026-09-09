import type { Metadata } from 'next';
import { Playfair_Display, Outfit } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Elite Enterprise Suite | AI Agents',
  description: 'Premium AI-driven platforms across 17 niches',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.variable} ${playfair.variable} font-sans antialiased bg-slate-950 text-slate-50 min-h-screen selection:bg-orange-500/30 selection:text-orange-200`}>
        {children}
      </body>
    </html>
  );
}
