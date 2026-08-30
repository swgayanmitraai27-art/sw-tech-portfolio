import React, { useState } from 'react';
import { motion } from 'framer-motion';

const origins = [
  { id: 1, name: 'Ethiopia Yirgacheffe', notes: 'Floral, Citrus, Sweet', altitude: '1,700 - 2,200m' },
  { id: 2, name: 'Colombia Supremo', notes: 'Chocolate, Caramel, Fruity', altitude: '1,200 - 2,000m' },
  { id: 3, name: 'Guatemala Antigua', notes: 'Cocoa, Apple, Spice', altitude: '1,300 - 1,600m' },
];

export default function CafeWidget() {
  const [activeOrigin, setActiveOrigin] = useState(0);
  const [giftCardCode, setGiftCardCode] = useState('');
  const [giftCardBalance, setGiftCardBalance] = useState<number | null>(null);

  const checkGiftCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (giftCardCode.length > 5) {
      setGiftCardBalance(Math.floor(Math.random() * 100) + 15);
    } else {
      setGiftCardBalance(null);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-slate-950 text-slate-50 font-sans overflow-x-hidden selection:bg-amber-900 selection:text-amber-50">
      
      {/* Page 1: Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27ee851ba611c0356ed7adfa44081efb0ab7c5c&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 text-center max-w-4xl px-6"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-amber-100 to-amber-700">
            AESTHETIC BARISTA
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto">
            Experience the confluence of dark matter and roasted perfection.
          </p>
        </motion.div>
      </section>

      {/* Page 2: Origin Slider */}
      <section className="relative w-full min-h-screen flex items-center justify-center py-24 bg-slate-950">
        <div className="max-w-6xl w-full mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-amber-50">Origin Exploration</h2>
            <div className="space-y-4">
              {origins.map((origin, idx) => (
                <button
                  key={origin.id}
                  onClick={() => setActiveOrigin(idx)}
                  className={`block w-full text-left p-6 rounded-2xl transition-all duration-500 border ${
                    activeOrigin === idx 
                      ? 'border-amber-600 bg-amber-950/30' 
                      : 'border-slate-800 hover:border-slate-600 bg-slate-900/50'
                  }`}
                >
                  <h3 className="text-2xl font-semibold mb-2">{origin.name}</h3>
                  <div className={`overflow-hidden transition-all duration-500 ${activeOrigin === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-slate-400 mb-1">Notes: {origin.notes}</p>
                    <p className="text-slate-500 text-sm">Altitude: {origin.altitude}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="relative aspect-square rounded-full overflow-hidden border-8 border-slate-900 shadow-2xl">
             <motion.img 
                key={activeOrigin}
                initial={{ opacity: 0, scale: 1.1, rotate: 10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8 }}
                src={`https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3`}
                alt="Coffee origin"
                className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
             />
          </div>
        </div>
      </section>

      {/* Page 3: Digital Gift Card Checker */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center py-24 bg-slate-900">
         <div className="max-w-xl w-full mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Digital Gift Card</h2>
            <p className="text-slate-400 mb-8">Check your balance and unlock the dark roast.</p>
            
            <form onSubmit={checkGiftCard} className="relative">
              <input 
                type="text" 
                value={giftCardCode}
                onChange={(e) => setGiftCardCode(e.target.value)}
                placeholder="Enter card code..." 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-6 py-4 text-lg text-amber-50 placeholder:text-slate-600 focus:outline-none focus:border-amber-600 transition-colors"
              />
              <button 
                type="submit"
                className="mt-6 w-full bg-amber-700 hover:bg-amber-600 text-white font-semibold py-4 rounded-xl transition-colors shadow-lg shadow-amber-900/20"
              >
                Check Balance
              </button>
            </form>

            {giftCardBalance !== null && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 bg-slate-950 rounded-xl border border-amber-900/50"
              >
                <p className="text-slate-400 text-sm uppercase tracking-wider mb-2">Available Balance</p>
                <p className="text-5xl font-light text-amber-500">${giftCardBalance.toFixed(2)}</p>
              </motion.div>
            )}
         </div>
      </section>

      {/* Page 4: Visual Break / Ambient Video */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
        >
          <source src="https://player.vimeo.com/external/498425251.sd.mp4?s=d97a61d62c9c27943c2f9d854e4df9df602a6431&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-900" />
        <div className="absolute inset-0 flex items-center justify-center">
           <h2 className="text-3xl md:text-5xl font-light tracking-widest text-slate-300 mix-blend-overlay">ROASTED IN THE SHADOWS</h2>
        </div>
      </section>

      {/* Page 5: Footer / Widget Action */}
      <section className="relative w-full min-h-[50vh] flex flex-col items-center justify-center py-24 bg-slate-950 text-center">
         <div className="max-w-2xl px-6">
            <h2 className="text-4xl font-bold mb-6">Join the Syndicate</h2>
            <p className="text-slate-400 mb-10 text-lg">Subscribe for weekly rare bean drops and exclusive access to our reserve collections.</p>
            
            <div className="flex gap-4 flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="shadow@barista.co" 
                className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-6 py-4 focus:outline-none focus:border-amber-600 transition-colors"
              />
              <button className="bg-slate-100 hover:bg-white text-slate-950 font-bold px-8 py-4 rounded-xl transition-colors">
                Subscribe
              </button>
            </div>
         </div>
         <p className="mt-24 text-slate-700 text-sm">© 2026 Aesthetic Barista. Void where prohibited.</p>
      </section>

    </div>
  );
}
