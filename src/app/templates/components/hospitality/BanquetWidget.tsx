'use client';
"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BanquetWidget() {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityHero = useTransform(scrollY, [0, 800], [1, 0]);

  const [guestCount, setGuestCount] = useState(100);
  const [eventDuration, setEventDuration] = useState(4);
  const [cateringTier, setCateringTier] = useState<"Silver" | "Gold" | "Platinum">("Gold");

  const baseRate = 5000;
  const perGuestRate = cateringTier === "Silver" ? 50 : cateringTier === "Gold" ? 120 : 250;
  const durationMultiplier = eventDuration / 4;
  
  const estimatedQuote = Math.round((baseRate + guestCount * perGuestRate) * durationMultiplier);

  return (
    <div className="relative w-full min-h-screen bg-slate-950 text-slate-50 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[100vh] overflow-hidden">
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2940&auto=format&fit=crop"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-wedding-reception-dinner-table-with-candles-and-flowers-4348-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent z-10" />
        </motion.div>
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 md:px-20 pt-32">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-extrabold tracking-tighter uppercase font-serif text-amber-50 drop-shadow-2xl"
          >
            The Grand <br /> Horizon Banquet
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 text-xl md:text-3xl max-w-3xl text-slate-200 font-light tracking-wide"
          >
            Where exceptional moments become timeless memories. Curate your perfect event with bespoke precision.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-12"
          >
            <a href="#quote-calculator" className="px-8 py-4 bg-amber-600/90 hover:bg-amber-500 text-white rounded-full uppercase tracking-widest text-sm font-semibold transition-all shadow-[0_0_40px_rgba(217,119,6,0.5)] backdrop-blur-md">
              Craft Your Experience
            </a>
          </motion.div>
        </div>
      </section>

      {/* Feature Section 1: The Venues */}
      <section className="relative z-30 py-32 px-4 md:px-20 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-6xl font-serif text-amber-500">Architectural Elegance</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Our versatile spaces transform to match your vision. From the ethereal Crystal Ballroom to the intimate Twilight Terrace, each venue boasts acoustic perfection, intelligent climate control, and programmable ambient lighting.
              </p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center gap-4"><span className="w-12 h-[1px] bg-amber-700"></span> 5,000 sq ft pillar-less design</li>
                <li className="flex items-center gap-4"><span className="w-12 h-[1px] bg-amber-700"></span> Floor-to-ceiling panoramic windows</li>
                <li className="flex items-center gap-4"><span className="w-12 h-[1px] bg-amber-700"></span> Private VIP suites and preparation lounges</li>
              </ul>
            </div>
            <div className="flex-1 w-full h-[600px] relative rounded-2xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=2940&auto=format&fit=crop" alt="Venue" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-serif text-white">The Crystal Ballroom</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Matrix / Quote Section */}
      <section id="quote-calculator" className="relative z-30 py-32 bg-slate-900 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-amber-500 mb-4">Capacity & Quote Matrix</h2>
            <p className="text-slate-400">Instantly configure your event parameters to receive a bespoke preliminary estimate.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Controls */}
            <div className="space-y-12 bg-slate-950/50 p-8 md:p-12 rounded-3xl border border-slate-800/50 backdrop-blur-xl">
              <div>
                <label className="flex justify-between text-sm uppercase tracking-widest text-slate-300 mb-4">
                  <span>Guest Capacity</span>
                  <span className="text-amber-500 font-bold">{guestCount} Guests</span>
                </label>
                <input 
                  type="range" 
                  min="50" max="1000" step="10" 
                  value={guestCount} 
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>Intimate (50)</span>
                  <span>Gala (1000+)</span>
                </div>
              </div>

              <div>
                <label className="flex justify-between text-sm uppercase tracking-widest text-slate-300 mb-4">
                  <span>Event Duration</span>
                  <span className="text-amber-500 font-bold">{eventDuration} Hours</span>
                </label>
                <input 
                  type="range" 
                  min="2" max="12" step="1" 
                  value={eventDuration} 
                  onChange={(e) => setEventDuration(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm uppercase tracking-widest text-slate-300 mb-4">
                  Gastronomy Tier
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {(["Silver", "Gold", "Platinum"] as const).map(tier => (
                    <button
                      key={tier}
                      onClick={() => setCateringTier(tier)}
                      className={`py-3 px-4 rounded-xl border transition-all ${cateringTier === tier ? 'bg-amber-900/40 border-amber-500 text-amber-400' : 'bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-600'}`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Instant Quote Block */}
            <div className="flex flex-col justify-center items-center text-center p-12 bg-gradient-to-br from-amber-950/20 to-slate-900 rounded-3xl border border-amber-900/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.1),transparent_50%)]" />
              
              <h3 className="text-sm uppercase tracking-widest text-slate-400 mb-8 relative z-10">Estimated Investment</h3>
              
              <div className="relative z-10 flex items-start justify-center gap-2 mb-8">
                <span className="text-4xl text-amber-600 mt-2">$</span>
                <motion.span 
                  key={estimatedQuote}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-7xl font-serif text-amber-100"
                >
                  {estimatedQuote.toLocaleString()}
                </motion.span>
              </div>
              
              <ul className="text-sm text-slate-400 space-y-3 mb-10 relative z-10 text-left w-full max-w-xs">
                <li className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Base Venue Fee</span>
                  <span>${baseRate.toLocaleString()}</span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Catering ({cateringTier})</span>
                  <span>${(guestCount * perGuestRate).toLocaleString()}</span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Duration Multiplier</span>
                  <span>x{durationMultiplier.toFixed(2)}</span>
                </li>
              </ul>
              
              <button className="relative z-10 w-full py-4 bg-white text-slate-950 font-bold uppercase tracking-wider rounded-xl hover:bg-amber-400 transition-colors">
                Request Formal Proposal
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2: Culinary Excellence */}
      <section className="relative z-30 py-32 px-4 md:px-20 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row gap-16 items-center">
            <div className="flex-1 w-full h-[600px] relative rounded-2xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2940&auto=format&fit=crop" alt="Culinary" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
            </div>
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-6xl font-serif text-amber-500">Haute Cuisine</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Led by Michelin-starred Executive Chef Alexandre Dubois, our culinary team crafts avant-garde menus tailored to your palate. From liquid nitrogen molecular gastronomy to classic dry-aged roasts.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <h4 className="text-white text-xl font-serif mb-2">Artisan Pairings</h4>
                  <p className="text-sm text-slate-500">In-house sommelier curated wine flights.</p>
                </div>
                <div>
                  <h4 className="text-white text-xl font-serif mb-2">Global Palate</h4>
                  <p className="text-sm text-slate-500">Authentic fusion from 14 global regions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Overlay */}
      <footer className="relative py-20 bg-slate-950 border-t border-slate-900 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-white mb-6">Begin Your Journey</h2>
          <p className="text-slate-400 mb-10">Our event directors are available for private consultations and venue tours.</p>
          <div className="flex justify-center gap-6 text-amber-500 text-sm uppercase tracking-widest">
            <a href="#" className="hover:text-amber-300">Concierge</a>
            <a href="#" className="hover:text-amber-300">Portfolio</a>
            <a href="#" className="hover:text-amber-300">Location</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
