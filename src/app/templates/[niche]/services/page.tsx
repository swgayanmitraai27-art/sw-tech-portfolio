import { niches } from '@/data/niches';
import { notFound } from 'next/navigation';
import * as React from 'react';

export default async function ServicesPage(props: { params: Promise<{ niche: string }> }) {
  const { niche } = await props.params;
  const data = niches[niche];
  if (!data) return notFound();

  const services = [
    { title: "Premium Strategy", desc: "End-to-end operational blueprint designed for scale." },
    { title: "Digital Integration", desc: "Seamless API architecture for real-time syncing." },
    { title: "User Experience", desc: "Award-winning interface design and interactions." },
    { title: "Growth Marketing", desc: "Data-driven funnels to maximize ROI." },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 relative z-10 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Capabilities & Offerings</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Discover the suite of advanced features powering the {data.name} platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((svc, i) => (
          <div 
            key={i} 
            className="group relative p-1 rounded-3xl overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/5 rounded-[22px] p-10 h-full hover:border-white/20 transition-colors duration-500">
              <div className={`w-14 h-14 rounded-2xl bg-${data.accent}/20 flex items-center justify-center mb-8`}>
                <div className={`w-6 h-6 bg-${data.accent} rounded-md`} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{svc.title}</h3>
              <p className="text-slate-400 leading-relaxed">{svc.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
