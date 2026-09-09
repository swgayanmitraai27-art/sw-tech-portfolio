'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  Utensils, Cake, BookOpen, Shirt, Tent, Hotel, Code2, Database, Globe, Layers, Server, Cpu, CheckCircle2,
  Phone, MessageSquare, Target, CreditCard, Bot, Cloud, Smartphone,
  Coffee, GraduationCap, Library, Gem, Users, Gift, Stethoscope, 
  Car, ShoppingBag, Truck, Zap, Activity, ShieldCheck, Check
} from 'lucide-react';

const technologies = [
  { name: 'Next.js & React', icon: Globe, color: 'text-blue-400' },
  { name: 'Node.js & Express', icon: Server, color: 'text-green-400' },
  { name: 'TypeScript & Python', icon: Code2, color: 'text-yellow-400' },
  { name: 'iOS & Android (React Native)', icon: Smartphone, color: 'text-cyan-400' },
  { name: 'Stripe & Razorpay Integration', icon: CreditCard, color: 'text-indigo-400' },
  { name: 'Custom AI & LLMs', icon: Bot, color: 'text-purple-400' },
  { name: 'AWS & Cloud Hosting', icon: Cloud, color: 'text-orange-400' },
  { name: 'Tailwind CSS & GSAP', icon: Layers, color: 'text-teal-400' },
  { name: 'PostgreSQL & MongoDB', icon: Database, color: 'text-emerald-400' },
  { name: 'Cloudflare Workers (Edge)', icon: Cpu, color: 'text-amber-400' },
  { name: 'Playwright Web Scraping', icon: Target, color: 'text-rose-400' },
  { name: 'Secure Architecture', icon: ShieldCheck, color: 'text-slate-300' }
];

const capabilities = [
  { title: 'Mobile Apps (iOS & Android)', desc: 'Native-feel applications for App Store & Play Store.', icon: Smartphone },
  { title: 'E-Commerce Platforms', desc: 'High-conversion multi-vendor & single-brand stores.', icon: ShoppingBag },
  { title: 'Food & Grocery Delivery', desc: 'Swiggy/Zomato style platforms with live tracking.', icon: Utensils },
  { title: 'Ride-Hailing & Logistics', desc: 'Uber-clone taxi apps & fleet management systems.', icon: Car },
  { title: 'AI Automation & Integrations', desc: 'Custom chatbots, GPT workflows & AI agents.', icon: Bot },
  { title: 'SaaS & Custom Dashboards', desc: 'Complex web applications with real-time analytics.', icon: Activity },
  { title: 'FinTech & Payment Tools', desc: 'Custom wallets, subscription billing & gateways.', icon: CreditCard },
  { title: 'Logistics & Supply Chain', desc: 'Warehouse tracking & automated dispatch routes.', icon: Truck },
];

const pricing = [
  { 
    title: '5-Page Website', 
    price: '?1,999', 
    desc: 'Perfect for startups & local businesses.',
    features: ['Premium Bespoke Design', 'Mobile Responsive', 'Contact Form', 'Fast Delivery']
  },
  { 
    title: 'Custom Web App', 
    price: '?4,499', 
    desc: 'Advanced logic & databases for SaaS.',
    features: ['User Authentication', 'Database Integration', 'Payment Gateways', 'Admin Dashboard']
  },
  { 
    title: 'Android & iOS App', 
    price: '?9,999', 
    desc: 'Full-fledged mobile application.',
    features: ['App Store Deployment', 'Push Notifications', 'Native Animations', 'Cloud Sync']
  }
];

const categories = [
  { id: 1, name: 'Coaching Institutes', icon: BookOpen, route: '/templates/coaching', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800', mockFeature: 'Batch Availability Matrix' },
  { id: 2, name: 'Private Schools', icon: GraduationCap, route: '/templates/schools', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800', mockFeature: 'Dual Dashboard Portal' },
  { id: 3, name: 'Computer Training', icon: Code2, route: '/templates/computer-training', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800', mockFeature: 'Terminal Syllabus Tracker' },
  { id: 4, name: 'IIT JEE Elite', icon: Target, route: '/templates/iit-jee', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800', mockFeature: 'Ranker Hall of Fame' },
  { id: 5, name: 'Medical NEET', icon: Stethoscope, route: '/templates/neet', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800', mockFeature: 'Live Slot Booking' },
  { id: 6, name: 'Spoken English', icon: MessageSquare, route: '/templates/spoken-english', image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800', mockFeature: 'Audio-Player Cards' },
  { id: 7, name: 'Govt & Comp Exams', icon: Library, route: '/templates/competitive-exams', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800', mockFeature: 'Mock Quiz Engine' },
  { id: 8, name: 'Luxury Restaurants', icon: Utensils, route: '/templates/restaurant', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800', mockFeature: 'WhatsApp Cart Checkout' },
  { id: 9, name: 'Aesthetic Cafes', icon: Coffee, route: '/templates/cafe', image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800', mockFeature: 'Coffee Origin Slider' },
  { id: 10, name: 'Premium Hotels', icon: Hotel, route: '/templates/hotel', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800', mockFeature: 'Room Luxury Tiers' },
  { id: 11, name: 'Banquet Halls', icon: Tent, route: '/templates/banquet', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800', mockFeature: 'Capacity Quotes Matrix' },
  { id: 12, name: 'Custom Bakeries', icon: Cake, route: '/templates/bakery', image: 'https://images.unsplash.com/photo-1551024506-0cb4a1cb1c26?auto=format&fit=crop&q=80&w=800', mockFeature: 'Multi-tier Cake Builder' },
  { id: 13, name: 'Cloud Kitchens', icon: Smartphone, route: '/templates/cloud-kitchen', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800', mockFeature: 'Rapid Checkout UI' },
  { id: 14, name: 'Sweet Shops', icon: Gift, route: '/templates/sweet-shop', image: 'https://images.unsplash.com/photo-1589114471286-90bc1f308940?auto=format&fit=crop&q=80&w=800', mockFeature: 'Festive Hamper Assembly' },
  { id: 15, name: 'Family Dine-In', icon: Users, route: '/templates/family-restaurant', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800', mockFeature: 'Visual Table Selector' },
  { id: 16, name: 'Jewelry Showrooms', icon: Gem, route: '/templates/jewelry', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800', mockFeature: 'VIP Scheduler' },
  { id: 17, name: 'High-Fashion Boutiques', icon: Shirt, route: '/templates/boutique', image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800', mockFeature: 'Lookbook Filtering' }
];

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-950 text-slate-100 font-sans">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2560"
          alt="Abstract Mesh"
          fill
          className="object-cover opacity-[0.15] mix-blend-screen"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/95 to-slate-950" />
      </div>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-2 animate-pulse"></span>
              The Ultimate Tech Architecture
            </div>
            
            <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight text-white leading-tight">
              We Build The <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-rose-500">
                Impossible.
              </span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-400 font-light">
              From high-performance E-Commerce & Ride-Hailing Apps to Custom AI Platforms. 
              We engineer enterprise-grade solutions for every industry.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center pt-8 gap-6">
              <a href="https://wa.me/918303994616?text=Hello%20Team!%20I%20want%20to%20build%20a%20project." target="_blank" rel="noreferrer" className="flex items-center space-x-4 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 p-4 rounded-2xl transition-all hover:scale-105 group w-full sm:w-auto">
                <div className="h-12 w-12 bg-green-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-500/20">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-green-400 font-medium">WhatsApp Discuss</p>
                  <p className="text-lg font-bold text-slate-200 group-hover:text-white">+91 8303994616</p>
                </div>
              </a>
              <a href="tel:+918303994616" className="flex items-center space-x-4 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 p-4 rounded-2xl transition-all hover:scale-105 group w-full sm:w-auto">
                <div className="h-12 w-12 bg-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-blue-400 font-medium">Book a Call</p>
                  <p className="text-lg font-bold text-slate-200 group-hover:text-white">+91 8303994616</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* WHAT WE BUILD SECTION */}
        <section className="py-24 bg-slate-900/40 backdrop-blur-3xl border-t border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">What We Build</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">We don't just build websites; we engineer complete business ecosystems, mobile apps, and automated platforms.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-3xl bg-slate-900/60 border border-white/5 hover:border-orange-500/30 transition-colors group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                      <Icon className="text-slate-400 group-hover:text-orange-400" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{cap.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{cap.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Transparent Pricing</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                No hidden fees. Premium architectures accessible for everyone. 
                <br className="hidden md:block"/> <span className="text-orange-400 font-medium">Note: Prices may increase depending on your specific custom requirements.</span>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricing.map((plan, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative p-8 rounded-3xl bg-slate-900/50 border border-white/10 hover:border-orange-500/50 transition-all flex flex-col group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Zap size={120} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 relative z-10">{plan.title}</h3>
                  <p className="text-slate-400 mb-6 relative z-10">{plan.desc}</p>
                  <div className="mb-8 relative z-10">
                    <span className="text-sm text-slate-500 uppercase tracking-widest font-bold">Starting At</span>
                    <div className="text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mt-2">
                      {plan.price}
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1 relative z-10">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center text-slate-300">
                        <Check size={18} className="text-orange-500 mr-3" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="https://wa.me/918303994616?text=Hi!%20I%20saw%20your%20pricing%20plans." target="_blank" rel="noreferrer" className="w-full py-4 text-center rounded-2xl bg-white text-slate-950 font-bold hover:bg-slate-200 transition-colors relative z-10">
                    Inquire Now
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK SECTION */}
        <section className="py-24 bg-slate-900/40 backdrop-blur-3xl border-t border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Elite Tech Stack</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Powered by modern, highly scalable, and secure technologies.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {technologies.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <motion.div 
                    key={tech.name} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center p-8 bg-slate-900/30 border border-white/5 rounded-[2rem] hover:bg-slate-800/50 hover:border-white/10 transition-all group shadow-xl"
                  >
                    <Icon className={`h-10 w-10 ${tech.color} mb-4 group-hover:scale-110 transition-transform`} />
                    <span className="text-sm font-medium text-slate-300 text-center">{tech.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* NICHE TEMPLATES GALLERY */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Explore Live Architectures</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Browse our 17 bespoke industry layouts.</p>
            </div>
            
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
                      <div className="relative h-[250px] rounded-3xl overflow-hidden border border-slate-700 hover:border-orange-500/50 transition-colors bg-slate-900 shadow-2xl">
                        <div className="absolute inset-0 z-0">
                          <Image src={cat.image} alt={cat.name} fill className="object-cover opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                        </div>
                        
                        <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
                          <div className="bg-orange-500/20 w-12 h-12 rounded-xl flex items-center justify-center text-orange-400 mb-4 backdrop-blur-md border border-orange-500/30">
                            <Icon size={24} />
                          </div>
                          <h3 className="text-2xl font-bold font-serif text-white mb-2">{cat.name}</h3>
                          <div className="flex items-center space-x-2 text-slate-300 text-sm">
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

      </div>
    </main>
  );
}
