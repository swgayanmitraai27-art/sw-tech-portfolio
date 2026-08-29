'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function RestaurantTemplate() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="relative h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000"
          alt="Premium Restaurant"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        
        <div className="absolute top-8 left-8 z-20">
          <Link href="/" className="inline-flex items-center text-slate-300 hover:text-white transition-colors bg-slate-900/50 p-2 rounded-full backdrop-blur-md">
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Fine Dining Experience</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">The Gourmet Lounge</h1>
            <div className="flex flex-wrap gap-6 text-slate-300">
              <div className="flex items-center space-x-2"><MapPin className="w-5 h-5 text-amber-500" /> <span>Downtown District</span></div>
              <div className="flex items-center space-x-2"><Clock className="w-5 h-5 text-amber-500" /> <span>11:00 AM - 11:00 PM</span></div>
              <div className="flex items-center space-x-2"><Phone className="w-5 h-5 text-amber-500" /> <span>+1 234 567 890</span></div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-6 border-b border-slate-800 pb-4">Our Specialities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex space-x-4 bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0">
                      <Image src="https://images.unsplash.com/photo-1544025162-836814c1eb16?auto=format&fit=crop&q=80&w=400" alt="Gourmet Food Plate" fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-white">Signature Platter {item}</h4>
                      <p className="text-sm text-slate-400 mt-1 line-clamp-2">Exquisite blend of flavors crafted by our master chefs.</p>
                      <span className="text-amber-500 font-medium mt-2 block">$34.00</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sticky top-8">
              <h3 className="text-xl font-bold text-white mb-4">Book a Table</h3>
              <p className="text-slate-400 text-sm mb-6">Instantly reserve your spot or order via WhatsApp.</p>
              
              <button className="w-full bg-green-600 hover:bg-green-500 text-white font-medium py-4 rounded-xl flex items-center justify-center space-x-2 transition-colors mb-4">
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Ordering</span>
              </button>
              
              <button className="w-full bg-amber-600 hover:bg-amber-500 text-white font-medium py-4 rounded-xl flex items-center justify-center space-x-2 transition-colors">
                <span>Reserve Online</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
