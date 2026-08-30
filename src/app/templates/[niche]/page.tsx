import { niches } from '@/data/niches';
import { notFound } from 'next/navigation';
import * as React from 'react';

// Education
import CoachingWidget from '../components/education/CoachingWidget';
import SchoolWidget from '../components/education/SchoolWidget';
import ComputerTrainingWidget from '../components/education/ComputerTrainingWidget';
import IITJEEWidget from '../components/education/IITJEEWidget';
import NEETWidget from '../components/education/NEETWidget';
import SpokenEnglishWidget from '../components/education/SpokenEnglishWidget';
import CompetitiveExamsWidget from '../components/education/CompetitiveExamsWidget';

// Hospitality
import RestaurantWidget from '../components/hospitality/RestaurantWidget';
import CafeWidget from '../components/hospitality/CafeWidget';
import HotelWidget from '../components/hospitality/HotelWidget';
import BanquetWidget from '../components/hospitality/BanquetWidget';
import BakeryWidget from '../components/hospitality/BakeryWidget';
import CloudKitchenWidget from '../components/hospitality/CloudKitchenWidget';
import SweetShopWidget from '../components/hospitality/SweetShopWidget';
import FamilyRestaurantWidget from '../components/hospitality/FamilyRestaurantWidget';

// Retail
import JewelryWidget from '../components/retail/JewelryWidget';
import BoutiqueWidget from '../components/retail/BoutiqueWidget';

export default async function NicheHome(props: { params: Promise<{ niche: string }> }) {
  const { niche } = await props.params;
  const data = niches[niche];
  if (!data) return notFound();

  // Helper to render the specific widget
  const renderWidget = () => {
    switch (niche) {
      case 'coaching': return <CoachingWidget />;
      case 'schools': return <SchoolWidget />;
      case 'computer-training': return <ComputerTrainingWidget />;
      case 'iit-jee': return <IITJEEWidget />;
      case 'neet': return <NEETWidget />;
      case 'spoken-english': return <SpokenEnglishWidget />;
      case 'competitive-exams': return <CompetitiveExamsWidget />;
      case 'restaurant': return <RestaurantWidget />;
      case 'cafe': return <CafeWidget />;
      case 'hotel': return <HotelWidget />;
      case 'banquet': return <BanquetWidget />;
      case 'bakery': return <BakeryWidget />;
      case 'cloud-kitchen': return <CloudKitchenWidget />;
      case 'sweet-shop': return <SweetShopWidget />;
      case 'family-restaurant': return <FamilyRestaurantWidget />;
      case 'jewelry': return <JewelryWidget />;
      case 'boutique': return <BoutiqueWidget />;
      default: return null;
    }
  };

  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      {/* Media Hero Layer */}
      <section className="relative h-[80vh] flex items-center justify-center">
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
          </div>
        </div>
      </section>

      {/* DYNAMIC WIDGET INJECTION */}
      <section className="relative z-20 -mt-20 px-6 max-w-7xl mx-auto mb-32">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
            {renderWidget() || (
              <div className="py-20 text-center">
                <h2 className="text-3xl font-bold text-slate-300">Custom Module Loading...</h2>
                <p className="text-slate-500 mt-4">This niche is currently using a standard layout.</p>
              </div>
            )}
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
