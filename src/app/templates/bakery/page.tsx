'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CakeSlice, Instagram } from 'lucide-react';

export default function BakeryTemplate() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="relative h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1551024506-0cb4a1cb1c26?auto=format&fit=crop&q=80&w=2000"
          alt="Premium Cake Design"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        
        <div className="absolute top-8 left-8 z-20">
          <Link href="/" className="inline-flex items-center text-slate-300 hover:text-white transition-colors bg-slate-900/50 p-2 rounded-full backdrop-blur-md">
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-pink-400 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Artisan Patisserie</span>
            <h1 className="text-5xl md:text-8xl font-serif italic text-white mb-6">Sweet Bliss</h1>
            <div className="flex flex-wrap justify-center gap-6 text-slate-300 font-light">
              <div className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-pink-400" /> <span>Heritage Avenue</span></div>
              <div className="flex items-center space-x-2"><Clock className="w-4 h-4 text-pink-400" /> <span>08:00 AM - 08:00 PM</span></div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Masterpieces</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Handcrafted with love, finest ingredients, and an eye for perfection.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Velvet Chocolate", price: "$45", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600" },
            { name: "Berry Cheesecake", price: "$55", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=600" },
            { name: "Classic Vanilla", price: "$40", img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=600" }
          ].map((cake, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800"
            >
              <div className="relative h-64">
                <Image src={cake.img} alt={cake.name} fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2">{cake.name}</h3>
                <p className="text-pink-400 font-medium mb-6">{cake.price}</p>
                <button className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-full transition-colors text-sm font-semibold uppercase tracking-wider">
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 bg-gradient-to-r from-pink-900/20 to-purple-900/20 border border-pink-500/20 rounded-3xl p-12 text-center relative overflow-hidden">
           <div className="relative z-10">
             <h3 className="text-2xl font-bold text-white mb-4">Custom Cake Builder</h3>
             <p className="text-slate-400 mb-8 max-w-lg mx-auto">Design your dream cake for weddings, birthdays, and special occasions with our interactive builder.</p>
             <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-bold transition-colors">
               Start Designing
             </button>
           </div>
        </div>
      </div>
    </main>
  );
}
