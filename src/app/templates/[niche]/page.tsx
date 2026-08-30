import { niches } from '@/data/niches';
import { notFound } from 'next/navigation';
import * as React from 'react';

export default async function NicheHome(props: { params: Promise<{ niche: string }> }) {
  const { niche } = await props.params;
  const data = niches[niche];
  if (!data) return notFound();

  return (
    <main className="relative min-h-screen pt-20 overflow-hidden">
      {/* Media Layer */}
      <div className="absolute inset-0 z-0">
        {data.isVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover pointer-events-none opacity-40 mix-blend-screen"
            src={data.mediaSrc}
          />
        ) : (
          <img
            src={data.mediaSrc}
            alt={data.name}
            className="w-full h-full object-cover pointer-events-none opacity-40 mix-blend-screen"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-[calc(100vh-5rem)] flex flex-col justify-center">
        <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
          <div className={`inline-flex items-center px-3 py-1 rounded-full border border-${data.accent}/30 bg-${data.accent}/10 text-${data.accent} text-sm font-medium tracking-wide uppercase`}>
            Premium Showcase
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight leading-[1.1]">
            {data.tagline}
          </h1>
          <p className="text-xl text-slate-300 font-light max-w-xl leading-relaxed">
            Experience the next generation of {data.name.toLowerCase()} management and booking. A seamless, high-end digital presence built for conversion.
          </p>
          <div className="flex items-center space-x-4 pt-4">
            <a href={`/templates/${niche}/contact`} className={`px-8 py-4 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-200 transition-all duration-300 transform hover:scale-105`}>
              Explore Platform
            </a>
            <a href={`/templates/${niche}/services`} className="px-8 py-4 rounded-xl border border-white/20 text-white font-medium hover:bg-white/5 transition-all duration-300 backdrop-blur-md">
              View Capabilities
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
