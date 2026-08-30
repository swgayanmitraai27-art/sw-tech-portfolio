import { niches } from '@/data/niches';
import { notFound } from 'next/navigation';

export default async function AboutPage(props: { params: Promise<{ niche: string }> }) {
  const { niche } = await props.params;
  const data = niches[niche];
  if (!data) return notFound();

  return (
    <main className="min-h-screen pt-32 pb-20 relative z-10 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000 fill-mode-both">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            The Vision Behind <br/>
            <span className={`text-${data.accent}`}>{data.name}</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            We are redefining the industry standard. By merging cinematic aesthetics with hyper-optimized engineering, this platform provides an unmatched user experience that drives unparalleled engagement and conversion rates.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-6">
            <div>
              <div className="text-4xl font-extrabold text-white mb-2">99%</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider font-medium">Conversion Rate</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-white mb-2">24/7</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider font-medium">Automated Operations</div>
            </div>
          </div>
        </div>
        
        <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-slate-900/50 backdrop-blur-3xl animate-in fade-in slide-in-from-right-8 duration-1000 fill-mode-both delay-300">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10" />
          <img 
            src={data.isVideo ? 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200' : data.mediaSrc} 
            alt="About Vision"
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal hover:scale-105 transition-all duration-700"
          />
        </div>
      </div>
    </main>
  );
}
