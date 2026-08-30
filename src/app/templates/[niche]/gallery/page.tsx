import { niches } from '@/data/niches';
import { notFound } from 'next/navigation';
import * as React from 'react';

export default async function GalleryPage(props: { params: Promise<{ niche: string }> }) {
  const { niche } = await props.params;
  const data = niches[niche];
  if (!data) return notFound();

  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1551024506-0cb4a1cb1c26?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 relative z-10 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Visual Features</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          A glimpse into the cinematic aesthetic of {data.name}.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div 
            key={i} 
            className="group relative aspect-[4/5] rounded-3xl overflow-hidden animate-in fade-in zoom-in-95 duration-1000 fill-mode-both"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <img 
              src={img} 
              alt="Gallery item"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className={`w-10 h-1 bg-${data.accent} mb-4 rounded-full`} />
              <h3 className="text-xl font-bold text-white">Feature Insight {i + 1}</h3>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
