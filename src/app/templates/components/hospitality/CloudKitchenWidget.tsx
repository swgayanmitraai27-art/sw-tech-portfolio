'use client';
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CloudKitchenWidget = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  // Sample data for rapid cart
  const [cart, setCart] = useState<{id: number, name: string, price: number}[]>([]);
  const [total, setTotal] = useState(0);

  const menuItems = [
    { id: 1, name: "Spicy Miso Ramen", price: 14.99, image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=800" },
    { id: 2, name: "Truffle Burger", price: 18.50, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800" },
    { id: 3, name: "Dragon Roll", price: 16.00, image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800" },
    { id: 4, name: "Matcha Lava Cake", price: 9.50, image: "https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&q=80&w=800" }
  ];

  const addToCart = (item: any) => {
    setCart([...cart, item]);
    setTotal(total + item.price);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[100svh] w-full flex flex-col justify-end">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img 
            style={{ y: y1 }}
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1920" 
            alt="Cloud Kitchen Hero" 
            className="w-full h-[120%] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent z-10" />
        </div>
        
        <div className="relative z-20 p-6 pb-12 flex flex-col gap-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black tracking-tighter leading-[0.9]"
          >
            DARK<br/>KITCHEN<br/><span className="text-emerald-400">PRIME</span>
          </motion.h1>
          <p className="text-slate-300 text-lg max-w-sm">
            Hyper-fast delivery from our ghost kitchens straight to your door.
          </p>
        </div>
      </section>

      {/* Quick Order / Menu Section */}
      <section className="relative z-30 -mt-6 bg-slate-950 rounded-t-[2.5rem] pt-8 px-4 pb-32 shadow-[0_-20px_40px_rgba(0,0,0,0.5)]">
        <div className="w-12 h-1.5 bg-slate-800 rounded-full mx-auto mb-8" />
        
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-end mb-2">
            <h2 className="text-3xl font-bold tracking-tight">Popular</h2>
            <span className="text-emerald-400 font-medium">See all</span>
          </div>

          {menuItems.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex gap-4 bg-slate-900/50 p-3 rounded-3xl border border-slate-800/50 backdrop-blur-sm relative overflow-hidden"
            >
              <img src={item.image} alt={item.name} className="w-24 h-24 rounded-2xl object-cover shadow-lg" />
              <div className="flex flex-col justify-center flex-1">
                <h3 className="font-semibold text-lg leading-tight">{item.name}</h3>
                <p className="text-emerald-400 font-bold mt-1">${item.price.toFixed(2)}</p>
              </div>
              <button 
                onClick={() => addToCart(item)}
                className="absolute bottom-3 right-3 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold text-xl active:scale-95 transition-transform shadow-lg"
              >
                +
              </button>
            </motion.div>
          ))}
        </div>

        {/* Features / Process */}
        <div className="mt-16 mb-8">
          <h2 className="text-3xl font-bold tracking-tight mb-8">How it works</h2>
          <div className="flex flex-col gap-8 relative before:absolute before:left-[1.35rem] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
            {['Prep', 'Cook', 'Deliver'].map((step, i) => (
              <motion.div 
                key={step} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start relative z-10"
              >
                <div className="w-11 h-11 rounded-full bg-slate-900 border-2 border-emerald-400 flex items-center justify-center font-bold text-emerald-400 shrink-0 shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                  {i + 1}
                </div>
                <div className="pt-2">
                  <h4 className="font-bold text-xl">{step}</h4>
                  <p className="text-slate-400 text-sm mt-1">Lightning fast execution at every stage of the process.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Rapid Cart */}
      <div className="fixed bottom-0 left-0 right-0 p-4 z-50 bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent pb-8 pt-12 pointer-events-none">
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: cart.length > 0 ? 0 : 100, opacity: cart.length > 0 ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="bg-emerald-400 text-slate-950 p-4 rounded-3xl flex justify-between items-center shadow-[0_0_40px_rgba(52,211,153,0.3)] pointer-events-auto"
        >
          <div className="flex items-center gap-3">
            <div className="bg-slate-950 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
              {cart.length}
            </div>
            <div className="font-bold text-lg">
              ${total.toFixed(2)}
            </div>
          </div>
          <button className="bg-slate-950 text-white px-6 py-3 rounded-2xl font-bold active:scale-95 transition-transform flex gap-2 items-center">
            Checkout
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CloudKitchenWidget;
