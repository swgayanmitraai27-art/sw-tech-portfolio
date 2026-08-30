import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, ChevronRight, Clock, MapPin, Diamond } from 'lucide-react';

export default function JewelryWidget() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const gridImages = [
    "https://images.pexels.com/photos/2697608/pexels-photo-2697608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    "https://images.pexels.com/photos/177332/pexels-photo-177332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    "https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-amber-500/30">
      {/* 1. Hero Section */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative h-screen w-full flex items-center justify-center overflow-hidden sticky top-0"
      >
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://player.vimeo.com/external/498263721.hd.mp4?s=d00128913b7720970b6d214c7c88b776495fb6be&profile_id=175" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-amber-500 tracking-[0.3em] uppercase text-sm font-semibold mb-4">Maison de l'Éternité</h2>
            <h1 className="text-5xl md:text-8xl font-serif font-light text-white drop-shadow-2xl mb-6">
              A Symphony of <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">Light & Form</span>
            </h1>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="group flex items-center space-x-3 text-white border border-white/30 px-8 py-4 hover:bg-white hover:text-slate-950 transition-all duration-500 uppercase tracking-widest text-sm"
          >
            <span>Discover the Collection</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.section>

      {/* 2. Collection Grid */}
      <section className="relative z-20 bg-slate-950 py-32 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20 space-y-4">
            <Diamond className="w-8 h-8 text-amber-500 mb-4" />
            <h2 className="text-3xl md:text-5xl font-serif font-light text-white">The High Jewelry Collection</h2>
            <p className="text-slate-400 max-w-2xl text-lg font-light">
              Masterpieces born from the earth's rarest treasures, meticulously sculpted by our master artisans over thousands of hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gridImages.map((img, idx) => (
              <div key={idx} className="group relative overflow-hidden aspect-[4/5] bg-slate-900 cursor-none">
                <img 
                  src={img} 
                  alt={`Collection piece ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100 origin-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <div>
                    <h3 className="text-2xl font-serif text-white mb-2">L'Étoile du Soir</h3>
                    <p className="text-amber-500/80 font-light tracking-wider uppercase text-sm">View Details</p>
                  </div>
                  <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 transition-colors">
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Artisan Video Section */}
      <section className="relative h-[80vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://player.vimeo.com/external/517726487.sd.mp4?s=d00128913b7720970b6d214c7c88b776495fb6be&profile_id=164" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-slate-950/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Savoir-Faire: <br/>The Soul of Creation
          </h2>
          <p className="text-xl text-slate-300 font-light mb-10 max-w-2xl mx-auto">
            Every facet tells a story. Our master jewelers employ techniques passed down through generations, marrying traditional craftsmanship with visionary design.
          </p>
          <button className="border-b border-amber-500 pb-1 text-amber-500 uppercase tracking-widest text-sm hover:text-white hover:border-white transition-colors">
            Explore the Atelier
          </button>
        </div>
      </section>

      {/* 4. VIP Concierge Calendar Section */}
      <section className="py-32 bg-slate-950 px-4 md:px-12 relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }} />
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 border border-amber-500/30 text-amber-500 uppercase text-xs tracking-widest rounded-full">
              Private Consultation
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              A World-Class <br/>Personalized Experience
            </h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              Reserve an exclusive appointment at our flagship salon. Our high jewelry specialists will curate a selection tailored to your desires, offering absolute privacy and unparalleled expertise.
            </p>
            
            <div className="space-y-6 pt-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-900 rounded-lg">
                  <MapPin className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-white text-lg font-serif">Flagship Salon</h4>
                  <p className="text-slate-500">123 Avenue des Champs-Élysées, Paris</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-900 rounded-lg">
                  <Clock className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-white text-lg font-serif">Private Hours</h4>
                  <p className="text-slate-500">By appointment, 10:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-md p-8 md:p-12 border border-slate-800 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Diamond className="w-32 h-32 text-amber-500" />
            </div>
            
            <h3 className="text-2xl font-serif text-white mb-8">Request an Appointment</h3>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-slate-400 uppercase tracking-wider">First Name</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-slate-400 uppercase tracking-wider">Last Name</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 transition-colors" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-slate-400 uppercase tracking-wider">Preferred Date</label>
                <div className="relative">
                  <input 
                    type="date" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 transition-colors [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
                    onChange={(e) => setSelectedDate(new Date(e.target.value))}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-400 uppercase tracking-wider">Area of Interest</label>
                <select className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none">
                  <option>Bridal Collection</option>
                  <option>High Jewelry</option>
                  <option>Timepieces</option>
                  <option>Bespoke Commission</option>
                </select>
              </div>

              <button className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-widest py-4 rounded-lg transition-colors mt-8">
                Confirm Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900 text-center">
        <Diamond className="w-6 h-6 text-slate-700 mx-auto mb-6" />
        <p className="text-slate-600 font-light text-sm">
          &copy; {new Date().getFullYear()} Maison de l'Éternité. All rights reserved. <br/>
          Designed for the extraordinary.
        </p>
      </footer>
    </div>
  );
}
