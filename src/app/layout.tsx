import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'B2B Portfolio',
  description: '17-Category Business Funnel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-slate-950 text-slate-50 min-h-screen">
        {children}
      </body>
    </html>
  );
}
