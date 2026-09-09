'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  Utensils, Cake, BookOpen, Shirt, Tent, Hotel, Code2, Database, Globe, Layers, Server, Cpu, CheckCircle2,
  Phone, MessageSquare, Target, CreditCard, Bot, Cloud, Smartphone,
  Coffee, GraduationCap, Library, Gem, Users, Gift, Stethoscope
} from 'lucide-react';

const frameworks = [
  { name: 'Next.js & React', icon: Globe },
  { name: 'Node.js & Express', icon: Server },
  { name: 'TypeScript & Python', icon: Code2 },
  { name: 'iOS & Android App Dev', icon: Smartphone },
  { name: 'Payment Gateways', icon: CreditCard },
  { name: 'AI Servers & LLMs', icon: Bot },
  { name: 'VPS & Cloud Hosting', icon: Cloud },
  { name: 'Tailwind CSS', icon: Layers },
  { name: 'PostgreSQL & MongoDB', icon: Database },
  { name: 'Cloudflare Workers', icon: Cpu },
  { name: 'Playwright Web Scraping', icon: Target }
];

const categories = [
  // Education
  { id: 1, name: 'Coaching Institutes', icon: BookOpen, route: '/templates/coaching', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800', mockFeature: 'Batch Availability Matrix' },
  { id: 2, name: 'Private Schools', icon: GraduationCap, route: '/templates/schools', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800', mockFeature: 'Dual Dashboard Portal' },
  { id: 3, name: 'Computer Training', icon: Code2, route: '/templates/computer-training', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800', mockFeature: 'Terminal Syllabus Tracker' },
  { id: 4, name: 'IIT JEE Elite', icon: Target, route: '/templates/iit-jee', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800', mockFeature: 'Ranker Hall of Fame' },
  { id: 5, name: 'Medical NEET', icon: Stethoscope, route: '/templates/neet', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800', mockFeature: 'Live Slot Booking' },
  { id: 6, name: 'Spoken English', icon: MessageSquare, route: '/templates/spoken-english', image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800', mockFeature: 'Audio-Player Cards' },
  { id: 7, name: 'Govt & Comp Exams', icon: Library, route: '/templates/competitive-exams', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800', mockFeature: 'Mock Quiz Engine' },
  // Hospitality
  { id: 8, name: 'Luxury Restaurants', icon: Utensils, route: '/templates/restaurant', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800', mockFeature: 'WhatsApp Cart Checkout' },
  { id: 9, name: 'Aesthetic Cafes', icon: Coffee, route: '/templates/cafe', image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800', mockFeature: 'Coffee Origin Slider' },
  { id: 10, name: 'Premium Hotels', icon: Hotel, route: '/templates/hotel', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800', mockFeature: 'Room Luxury Tiers' },
  { id: 11, name: 'Banquet Halls', icon: Tent, route: '/templates/banquet', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800', mockFeature: 'Capacity Quotes Matrix' },
  { id: 12, name: 'Custom Bakeries', icon: Cake, route: '/templates/bakery', image: 'https://images.unsplash.com/photo-1551024506-0cb4a1cb1c26?auto=format&fit=crop&q=80&w=800', mockFeature: 'Multi-tier Cake Builder' },
  { id: 13, name: 'Cloud Kitchens', icon: Smartphone, route: '/templates/cloud-kitchen', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800', mockFeature: 'Rapid Checkout UI' },
  { id: 14, name: 'Sweet Shops', icon: Gift, route: '/templates/sweet-shop', image: 'https://images.unsplash.com/photo-1589114471286-90bc1f308940?auto=format&fit=crop&q=80&w=800', mockFeature: 'Festive Hamper Assembly' },
  { id: 15, name: 'Family Dine-In', icon: Users, route: '/templates/family-restaurant', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800', mockFeature: 'Visual Table Selector' },
  // Retail
  { id: 16, name: 'Jewelry Showrooms', icon: Gem, route: '/templates/jewelry', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800', mockFeature: 'VIP Scheduler' },
  { id: 17, name: 'High-Fashion Boutiques', icon: Shirt, route: '/templates/boutique', image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800', mockFeature: 'Lookbook Filtering' }
];

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2560"
          alt="Abstract Mesh"
          fill
          className="object-cover opacity-10 mix-blend-screen"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/95 to-slate-950" />
      </div>

      <div className="relative z-10">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-2 animate-pulse"></span>
              Deploying Next-Gen Platforms Now
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Scale Your Business with <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">
                100+ AI Agents
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-xl text-slate-400">
              Select your industry below. Experience an automated UI built for high-ticket client acquisition, complete with custom booking and payment engines.
            </p>

            <div className="flex justify-center pt-4">
              <a href="https://wa.me/918303994616?text=Hello%20Team!%20I%20want%20to%20deploy%20a%20new%20project%20using%20your%20AI%20Agency." target="_blank" rel="noreferrer" className="flex items-center space-x-4 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 p-4 rounded-2xl transition-colors group">
                <div className="h-12 w-12 bg-green-500 rounded-xl flex items-center justify-center text-white">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-green-400 font-medium">WhatsApp Direct</p>
                  <p className="text-lg font-bold text-slate-200 group-hover:text-white">+91 8303994616</p>
                </div>
              </a>
              <div className="w-4"></div>
              <a href="tel:+918303994616" className="flex items-center space-x-4 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 p-4 rounded-2xl transition-colors group">
                <div className="h-12 w-12 bg-blue-500 rounded-xl flex items-center justify-center text-white">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-blue-400 font-medium">Active Calling Dial</p>
                  <p className="text-lg font-bold text-slate-200 group-hover:text-white">+91 8303994616</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Niche Selection Grid */}
        <section className="py-24 bg-slate-900/50 backdrop-blur-3xl border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat, index) => {
                const Icon = cat.icon;
                return (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <Link href={cat.route} className="block h-full">
                      <div className="relative h-[250px] rounded-3xl overflow-hidden border border-slate-700 hover:border-orange-500/50 transition-colors bg-slate-900">
                        <div className="absolute inset-0 z-0">
                          <Image src={cat.image} alt={cat.name} fill className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                        </div>
                        
                        <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
                          <div className="bg-orange-500/20 w-12 h-12 rounded-xl flex items-center justify-center text-orange-400 mb-4 backdrop-blur-md border border-orange-500/30">
                            <Icon size={24} />
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2">{cat.name}</h3>
                          <div className="flex items-center space-x-2 text-slate-400 text-sm">
                            <CheckCircle2 size={16} className="text-orange-500" />
                            <span>{cat.mockFeature}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Powered by Elite Enterprise Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {frameworks.map((fw) => {
                const Icon = fw.icon;
                return (
                  <div key={fw.name} className="flex flex-col items-center justify-center p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:bg-slate-800 transition-colors">
                    <Icon className="h-8 w-8 text-orange-400 mb-4" />
                    <span className="text-sm font-medium text-slate-300 text-center">{fw.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
