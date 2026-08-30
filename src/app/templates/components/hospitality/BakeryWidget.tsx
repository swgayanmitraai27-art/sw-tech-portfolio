'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BakeryWidget = () => {
  const [flavor, setFlavor] = useState('Vanilla');
  const [weight, setWeight] = useState(1);
  const [date, setDate] = useState('');
  const basePrice = 50;

  const calculatePrice = () => {
    let price = basePrice * weight;
    if (flavor === 'Chocolate') price += 10;
    if (flavor === 'Red Velvet') price += 15;
    return price;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=2000&auto=format&fit=crop"
            alt="Bakery Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white p-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">La P??tisserie</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">Artisanal cakes, crafted with passion and precision.</p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: 'Organic Ingredients', desc: 'Sourced from local farms.' },
            { title: 'Master Bakers', desc: 'Decades of combined experience.' },
            { title: 'Custom Designs', desc: 'Your vision, brought to life.' }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-xl text-center"
            >
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cake Configurator Widget */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Design Your Cake</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl">
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium mb-4 text-slate-300">Select Flavor</label>
                <div className="flex flex-wrap gap-4">
                  {['Vanilla', 'Chocolate', 'Red Velvet', 'Matcha'].map(f => (
                    <button
                      key={f}
                      onClick={() => setFlavor(f)}
                      className={`px-6 py-2 rounded-full border transition-colors ${flavor === f ? 'bg-white text-slate-900 border-white' : 'border-slate-600 hover:border-slate-400'}`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-4 text-slate-300">Weight (kg)</label>
                <input 
                  type="range" 
                  min="1" max="5" step="0.5"
                  value={weight}
                  onChange={(e) => setWeight(parseFloat(e.target.value))}
                  className="w-full accent-white"
                />
                <div className="text-right mt-2 font-mono">{weight} kg</div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-4 text-slate-300">Pickup Date</label>
                <input 
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-slate-700 border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-white"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center bg-slate-700/50 p-8 rounded-2xl">
              <div className="text-slate-400 mb-2">Estimated Total</div>
              <div className="text-6xl font-bold mb-8">${calculatePrice().toFixed(2)}</div>
              <button className="w-full bg-white text-slate-900 font-bold py-4 rounded-xl hover:bg-slate-200 transition-colors">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Widget 3 */}
      <footer className="py-12 text-center text-slate-500 bg-slate-950">
        <p>&copy; 2026 La P??tisserie. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BakeryWidget;
