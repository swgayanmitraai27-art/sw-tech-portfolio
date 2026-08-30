import { niches } from '@/data/niches';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return Object.keys(niches).map((niche) => ({ niche }));
}

export default async function NicheLayout(props: {
  children: React.ReactNode;
  params: Promise<{ niche: string }>;
}) {
  const { niche } = await props.params;
  const nicheData = niches[niche];
  
  if (!nicheData) return notFound();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 relative selection:bg-slate-800 selection:text-white">
      {/* Interactive Global Glassmorphic Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href={`/templates/${niche}`} className="text-xl font-bold tracking-tight">
            {nicheData.name}
            <span className={`text-${nicheData.accent}`}>.</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <Link href={`/templates/${niche}`} className="hover:text-white transition-colors">Home</Link>
            <Link href={`/templates/${niche}/about`} className="hover:text-white transition-colors">About Us</Link>
            <Link href={`/templates/${niche}/services`} className="hover:text-white transition-colors">Services</Link>
            <Link href={`/templates/${niche}/gallery`} className="hover:text-white transition-colors">Gallery</Link>
            <Link href={`/templates/${niche}/contact`} className={`px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10 hover:border-${nicheData.accent}/50`}>
              Book Now
            </Link>
          </div>
        </div>
      </nav>
      {props.children}
    </div>
  );
}
