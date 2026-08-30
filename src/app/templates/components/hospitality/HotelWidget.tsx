"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, User, Star, Wifi, Coffee, MapPin } from "lucide-react";

const PEXELS_VIDEO = "https://player.vimeo.com/external/371433846.sd.mp4?s=236e3789069d35a8bc3eef2500fae45b149b1836&profile_id=139&oauth2_token_id=57447761";

// Mock Data
const ROOM_TIERS = [
  { id: 'standard', name: 'Deluxe Room', price: 299, image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Elegant comfort with city views.' },
  { id: 'premium', name: 'Ocean Suite', price: 549, image: 'https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Spacious suite with panoramic ocean views.' },
  { id: 'luxury', name: 'Presidential Penthouse', price: 1299, image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'The pinnacle of luxury and exclusivity.' }
];

export default function HotelWidget() {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState(2);
  const [selectedTier, setSelectedTier] = useState(ROOM_TIERS[0]);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // Simple bill estimator
  const getNights = () => {
    if (!checkIn || !checkOut) return 0;
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const nights = getNights();
  const totalBill = nights > 0 ? nights * selectedTier.price : 0;

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50 font-sans overflow-x-hidden">
      
      {/* Hero Section with Video Background */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={PEXELS_VIDEO} type="video/mp4" />
        </video>
        
        {/* Gradient Overlay as requested */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent z-10" />

        <div className="relative z-20 container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-light tracking-widest uppercase mb-6"
          >
            Lumina <span className="font-serif italic text-amber-400">Resort</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-2xl text-slate-300 font-light max-w-2xl mx-auto"
          >
            Where elegance meets the edge of the world. Experience uncompromised luxury.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-slate-400"
        >
          <ChevronRight className="w-8 h-8 rotate-90" />
        </motion.div>
      </section>

      {/* Booking Widget Section */}
      <section className="relative z-30 -mt-24 container mx-auto px-4 md:px-8">
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            
            {/* Dates */}
            <div className="relative col-span-1 md:col-span-2">
              <label className="block text-xs uppercase tracking-widest text-slate-400 mb-2">Select Dates</label>
              <div 
                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                className="flex items-center justify-between bg-slate-800/50 border border-slate-700 rounded-xl p-4 cursor-pointer hover:bg-slate-800 transition"
              >
                <div className="flex items-center gap-3">
                  <CalendarIcon className="w-5 h-5 text-amber-400" />
                  <span className="text-sm">
                    {checkIn ? checkIn.toLocaleDateString() : "Check-in"} &rarr; {checkOut ? checkOut.toLocaleDateString() : "Check-out"}
                  </span>
                </div>
              </div>
              
              {/* Dummy Calendar Dropdown */}
              <AnimatePresence>
                {isCalendarOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-4 w-full bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-2xl z-50"
                  >
                    <div className="text-center text-sm text-slate-400 mb-4">Interactive Calendar (Mock)</div>
                    <div className="grid grid-cols-2 gap-4">
                      <button 
                        onClick={() => { setCheckIn(new Date()); setIsCalendarOpen(false); }}
                        className="p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition text-sm"
                      >
                        Set Check-in (Today)
                      </button>
                      <button 
                        onClick={() => { 
                          const d = new Date(); d.setDate(d.getDate() + 3); 
                          setCheckOut(d); 
                          setIsCalendarOpen(false); 
                        }}
                        className="p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition text-sm"
                      >
                        Set Check-out (+3 Days)
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Guests */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-slate-400 mb-2">Guests</label>
              <div className="flex items-center justify-between bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-amber-400" />
                  <span className="text-sm">{guests} Guests</span>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setGuests(Math.max(1, guests - 1))} className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center hover:bg-slate-600">-</button>
                  <button onClick={() => setGuests(guests + 1)} className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center hover:bg-slate-600">+</button>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div>
              <button className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold py-4 rounded-xl transition shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                Check Availability
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Room Tiers */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-4">Curated <span className="font-serif italic text-amber-400">Accommodations</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Select your sanctuary. Each suite is designed with meticulous attention to detail.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROOM_TIERS.map((tier) => (
            <motion.div 
              key={tier.id}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedTier(tier)}
              className={`group cursor-pointer rounded-2xl overflow-hidden border ${selectedTier.id === tier.id ? 'border-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.15)]' : 'border-slate-800'}`}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition duration-500 z-10" />
                <img src={tier.image} alt={tier.name} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                
                {selectedTier.id === tier.id && (
                  <div className="absolute top-4 right-4 z-20 bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">
                    SELECTED
                  </div>
                )}
              </div>
              <div className="p-8 bg-slate-900/50 backdrop-blur-sm relative">
                <h3 className="text-xl font-medium mb-2">{tier.name}</h3>
                <p className="text-slate-400 text-sm mb-6">{tier.description}</p>
                <div className="flex justify-between items-end border-t border-slate-800 pt-6">
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-widest block mb-1">Starting from</span>
                    <span className="text-2xl text-amber-400 font-light">${tier.price}</span>
                    <span className="text-slate-500 text-sm"> / night</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-light mb-8">Unparalleled <span className="font-serif italic text-amber-400">Amenities</span></h2>
              <div className="space-y-6">
                {[
                  { icon: Star, title: "Michelin-starred Dining", desc: "Savor exquisite culinary creations by world-renowned chefs." },
                  { icon: Wifi, title: "Hyper-fast Connectivity", desc: "Seamless gigabit internet throughout the entire resort." },
                  { icon: Coffee, title: "Artisan Coffee Bar", desc: "Complimentary single-origin brews available 24/7." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="p-3 bg-slate-800 rounded-lg text-amber-400">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500 blur-[100px] opacity-20 rounded-full" />
              <img src="https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Dining" className="relative z-10 rounded-3xl border border-slate-800 shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Bill Estimator / Checkout Summary */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-2xl font-light mb-8 flex items-center gap-3">
            <MapPin className="text-amber-400" />
            Your Reservation Summary
          </h2>
          
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-slate-800 pb-6">
              <div>
                <p className="text-sm text-slate-400 uppercase tracking-wider mb-1">Room Tier</p>
                <p className="text-lg">{selectedTier.name}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-400 uppercase tracking-wider mb-1">Rate</p>
                <p className="text-lg">${selectedTier.price} <span className="text-sm text-slate-500">/ night</span></p>
              </div>
            </div>

            <div className="flex justify-between items-center border-b border-slate-800 pb-6">
              <div>
                <p className="text-sm text-slate-400 uppercase tracking-wider mb-1">Stay Duration</p>
                <p className="text-lg">{nights} {nights === 1 ? 'Night' : 'Nights'}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-400 uppercase tracking-wider mb-1">Guests</p>
                <p className="text-lg">{guests} Guests</p>
              </div>
            </div>

            <div className="pt-4 flex justify-between items-end">
              <div>
                <p className="text-sm text-slate-400 uppercase tracking-wider mb-2">Estimated Total</p>
                <p className="text-xs text-slate-500 max-w-xs">Includes taxes and standard resort fees. Additional services not included.</p>
              </div>
              <div className="text-right">
                <p className="text-4xl md:text-5xl font-light text-amber-400">${totalBill.toLocaleString()}</p>
              </div>
            </div>
            
            <div className="pt-8">
               <button className="w-full bg-slate-50 hover:bg-white text-slate-950 font-bold tracking-widest uppercase py-5 rounded-xl transition shadow-xl">
                Confirm Reservation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12 text-center text-slate-500 text-sm">
        <p>&copy; 2026 Lumina Resort. All rights reserved.</p>
      </footer>
    </div>
  );
}
