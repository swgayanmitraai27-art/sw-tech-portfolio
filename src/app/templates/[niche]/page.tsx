import { niches } from '@/data/niches';
import { notFound } from 'next/navigation';
import * as React from 'react';

export default async function NicheHome(props: { params: Promise<{ niche: string }> }) {
  const { niche } = await props.params;
  const data = niches[niche];
  if (!data) return notFound();

  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      {/* Media Hero Layer */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          {data.isVideo ? (
            <video autoPlay loop muted playsInline className="w-full h-full object-cover pointer-events-none opacity-40 mix-blend-screen" src={data.mediaSrc} />
          ) : (
            <img src={data.mediaSrc} alt={data.name} className="w-full h-full object-cover pointer-events-none opacity-40 mix-blend-screen" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
            <div className={`inline-flex items-center px-4 py-2 rounded-full border border-${data.accent}/30 bg-${data.accent}/10 text-${data.accent} text-sm font-bold tracking-wide uppercase`}>
              Premium Custom Architecture
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight leading-[1.1]">
              {data.tagline}
            </h1>
            <p className="text-xl text-slate-300 font-light max-w-xl leading-relaxed">
              Experience the next generation of {data.name.toLowerCase()} management and booking. A seamless, high-end digital presence built for conversion.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href={`/templates/${niche}/contact`} className="px-8 py-4 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-200 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Initialize Build
              </a>
              <a href="#features" className="px-8 py-4 rounded-xl border border-white/20 text-white font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
                View Custom Modules
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Features Engine */}
      <section id="features" className="relative z-10 py-32 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Built Exclusively for {data.name}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">We don't use generic templates. Every component is engineered specifically for the operational workflow of your industry.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.features && data.features.map((feat: any, idx: number) => (
              <div key={idx} className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-10 hover:bg-slate-900 transition-colors">
                <div className={`absolute top-0 right-0 w-64 h-64 bg-${data.accent}/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-${data.accent}/10 transition-colors`} />
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-${data.accent}/10 border border-${data.accent}/20 flex items-center justify-center mb-8`}>
                    <div className={`w-6 h-6 rounded-full bg-${data.accent}`} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{feat.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global AI Infrastructure Callout */}
      <section className="relative z-10 py-32 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800/50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className={`inline-flex items-center px-4 py-2 rounded-full border border-${data.accent}/30 bg-${data.accent}/10 text-${data.accent} text-sm font-bold tracking-wide uppercase mb-8`}>
            100+ AI Agents Integration
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Automate Your Entire Operation</h2>
          <p className="text-xl text-slate-300 font-light mb-12">
            Beyond just a stunning UI, your {data.name.toLowerCase()} platform will be powered by our backend AI workforce, handling leads, bookings, and customer support 24/7.
          </p>
          <a href="/" className={`inline-block px-10 py-5 rounded-2xl bg-${data.accent} text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-[0_0_40px_rgba(255,255,255,0.1)]`}>
            Return to Agency Master Console
          </a>
        </div>
      </section>
    </main>
  );
}
