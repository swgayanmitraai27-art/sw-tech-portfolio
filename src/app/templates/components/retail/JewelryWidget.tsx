"use client";

import React, { useState, useRef, MouseEvent } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ChevronRight, Star } from "lucide-react";

export default function JewelryWidget() {
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const [showLens, setShowLens] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    // Boundary check
    if (x < 0 || y < 0 || x > width || y > height) {
      setShowLens(false);
      return;
    }
    
    setLensPos({ x, y });
    setShowLens(true);
  };

  const selectedDate = "Oct 15, 2026";
  const [time, setTime] = useState("10:00 AM");

  return (
    <div className="w-full max-w-6xl mx-auto bg-stone-950 text-amber-50 p-8 font-serif rounded-xl shadow-2xl flex flex-col md:flex-row gap-12">
      {/* Product Image & Magnifier */}
      <div className="flex-1 relative" onMouseLeave={() => setShowLens(false)}>
        <h2 className="text-3xl tracking-widest text-amber-400 mb-6 uppercase">Aura Collection</h2>
        <div 
          className="relative w-full aspect-square bg-stone-900 rounded-lg overflow-hidden cursor-crosshair border border-stone-800"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setShowLens(true)}
        >
          <img 
            ref={imgRef}
            src="https://images.unsplash.com/photo-1599643478524-fb66f70d00f0?q=80&w=1000&auto=format&fit=crop" 
            alt="Luxury Diamond Ring" 
            className="w-full h-full object-cover"
          />
          
          {showLens && (
            <motion.div 
              className="absolute pointer-events-none rounded-full border-2 border-amber-400 bg-no-repeat z-10 shadow-[0_0_20px_rgba(251,191,36,0.3)]"
              style={{
                width: 150,
                height: 150,
                left: lensPos.x - 75,
                top: lensPos.y - 75,
                backgroundImage: `url('https://images.unsplash.com/photo-1599643478524-fb66f70d00f0?q=80&w=2000&auto=format&fit=crop')`,
                backgroundPosition: `${(lensPos.x / (imgRef.current?.width || 1)) * 100}% ${(lensPos.y / (imgRef.current?.height || 1)) * 100}%`,
                backgroundSize: "300%",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
            />
          )}
        </div>
        <div className="mt-6 flex justify-between items-center text-sm text-stone-400 tracking-wider uppercase">
          <span>Hover to examine details</span>
          <span className="flex items-center gap-1"><Star size={14} className="text-amber-400" /> Flawless Clarity</span>
        </div>
      </div>

      {/* Booking Widget */}
      <div className="w-full md:w-96 flex flex-col justify-center">
        <div className="bg-stone-900 border border-stone-800 p-8 rounded-lg shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          
          <h3 className="text-2xl text-amber-400 mb-2">Book Private VIP Visit</h3>
          <p className="text-stone-400 text-sm mb-8 font-sans">Experience our collection with a dedicated concierge in our private viewing room.</p>
          
          <div className="space-y-6 font-sans">
            <div>
              <label className="text-xs uppercase tracking-widest text-stone-500 mb-2 block">Select Boutique</label>
              <div className="flex items-center gap-3 p-3 rounded bg-stone-950 border border-stone-800">
                <MapPin size={18} className="text-amber-500" />
                <span className="text-sm">5th Avenue Flagship, NY</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-widest text-stone-500 mb-2 block">Date</label>
                <div className="flex items-center gap-3 p-3 rounded bg-stone-950 border border-stone-800 cursor-pointer hover:border-amber-900 transition-colors">
                  <Calendar size={18} className="text-amber-500" />
                  <span className="text-sm">{selectedDate}</span>
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-stone-500 mb-2 block">Time</label>
                <div className="flex items-center gap-3 p-3 rounded bg-stone-950 border border-stone-800 cursor-pointer hover:border-amber-900 transition-colors">
                  <Clock size={18} className="text-amber-500" />
                  <span className="text-sm">{time}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {['10:00 AM', '1:30 PM', '4:00 PM'].map(t => (
                <button 
                  key={t}
                  onClick={() => setTime(t)}
                  className={`px-3 py-1.5 text-xs rounded transition-colors ${time === t ? 'bg-amber-900/50 text-amber-200 border border-amber-700' : 'bg-stone-950 border border-stone-800 text-stone-400 hover:border-stone-600'}`}
                >
                  {t}
                </button>
              ))}
            </div>

            <button className="w-full mt-4 bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold py-4 rounded tracking-widest uppercase text-sm transition-colors flex items-center justify-center gap-2 group">
              Confirm Appointment
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
