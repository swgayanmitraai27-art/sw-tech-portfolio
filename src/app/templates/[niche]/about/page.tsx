import { niches } from '@/data/niches';
import { notFound } from 'next/navigation';

export default async function AboutPage(props: { params: Promise<{ niche: string }> }) {
  const { niche } = await props.params;
  const data = niches[niche];
  if (!data) return notFound();

  return (
    <main className="min-h-screen pt-32 pb-32 relative z-10 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000 fill-mode-both">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-300">Our Heritage & Vision</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">
            The Vision Behind <br/>
            <span className={`text-${data.accent} italic`}>{data.name}</span>
          </h2>
          <div className="w-20 h-1 bg-white/20 rounded-full" />
          <p className="text-xl text-slate-300 font-light leading-relaxed">
            We are redefining the industry standard. By merging cinematic aesthetics with hyper-optimized engineering, this platform provides an unmatched user experience that drives unparalleled engagement and conversion rates.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
            <div className="group cursor-default">
              <div className="text-5xl font-serif text-white mb-2 group-hover:scale-105 transition-transform origin-left">99%</div>
              <div className="text-sm text-slate-500 uppercase tracking-[0.2em] font-medium">Conversion Rate</div>
            </div>
            <div className="group cursor-default">
              <div className="text-5xl font-serif text-white mb-2 group-hover:scale-105 transition-transform origin-left">24/7</div>
              <div className="text-sm text-slate-500 uppercase tracking-[0.2em] font-medium">Automated Operations</div>
            </div>
          </div>
        </div>
        
        <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900/50 backdrop-blur-3xl animate-in fade-in slide-in-from-right-8 duration-1000 fill-mode-both delay-300 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-transparent to-transparent z-10" />
          <img 
            src={data.isVideo ? 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200' : data.mediaSrc} 
            alt="About Vision"
            className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal hover:scale-110 transition-all duration-1000"
          />
          <div className="absolute bottom-8 left-8 right-8 z-20">
            <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl p-6">
              <p className="text-white font-serif text-xl italic">"Excellence is not an act, but a habit."</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
