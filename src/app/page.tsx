'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  Utensils, Cake, BookOpen, Shirt, Tent, Hotel, Code2, Database, Globe, Layers, Server, Cpu, CheckCircle2,
  Phone, MessageSquare, Target, CreditCard, Bot, Cloud, Smartphone,
  Coffee, GraduationCap, Library, Gem, Users, Gift, Stethoscope, 
  Car, ShoppingBag, Truck, Zap, Activity, ShieldCheck, Check, ArrowRight, MapPin
} from 'lucide-react';

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

const technologies = [
  { name: 'Next.js & React', icon: Globe, color: 'text-blue-400' },
  { name: 'Node.js & Express', icon: Server, color: 'text-green-400' },
  { name: 'TypeScript & Python', icon: Code2, color: 'text-yellow-400' },
  { name: 'Android (React Native)', icon: Smartphone, color: 'text-cyan-400' },
  { name: 'Stripe & Razorpay Integration', icon: CreditCard, color: 'text-indigo-400' },
  { name: 'Custom AI & LLMs', icon: Bot, color: 'text-purple-400' },
  { name: 'AWS & Cloud Hosting', icon: Cloud, color: 'text-orange-400' },
  { name: 'Tailwind CSS & GSAP', icon: Layers, color: 'text-teal-400' },
];

const capabilities = [
  { title: 'Android Mobile Apps', desc: 'Native-feel applications delivered on Google Play Store.', icon: Smartphone },
  { title: 'E-Commerce Platforms', desc: 'High-conversion multi-vendor & single-brand stores.', icon: ShoppingBag },
  { title: 'Food & Grocery Delivery', desc: 'Swiggy/Zomato style platforms with live tracking.', icon: Utensils },
  { title: 'Ride-Hailing & Logistics', desc: 'Uber-clone taxi apps & fleet management systems.', icon: Car },
];

const pricing = [
  { 
    title: '5-Page Website (100% FREE)', 
    price: '?1,999', 
    desc: 'You pay ZERO for development. The ?1,999 is only for Server, Hosting, and Domain charges.',
    features: ['Delivered in 24 Hours', '1 Year Free Domain (.com/.in)', '1 Year Premium Hosting', '5 Professional Business Emails', '24/7 Dedicated Customer Support']
  },
  { 
    title: 'Custom Web App (Full Stack)', 
    price: '?4,499', 
    desc: 'Advanced database-driven web application tailored for businesses & SaaS.',
    features: ['Delivered in 7 Days (With Full Testing)', 'Free Custom Admin Control Panel', 'Payment Gateway Integration', '1 Year Domain & Cloud Hosting Included', 'Secure Database Integration (MongoDB/SQL)']
  },
  { 
    title: 'Android App (Play Store)', 
    price: '?9,999', 
    desc: 'Full-fledged Android mobile application. Publishing is 100% FREE on our Developer Account.',
    features: ['Live in 30 Days (Includes 14-day Google Testing)', '1 Free Website Included (With Domain/Hosting)', 'Live Cloud Sync & Push Notifications', 'Native High-Speed Animations', 'Direct Google Play Store Deployment']
  }
];

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-950 text-slate-100 font-sans selection:bg-orange-500/30 selection:text-orange-200">
      
      {/* CINEMATIC BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2560"
          alt="Abstract Mesh"
          fill
          className="object-cover opacity-[0.25] mix-blend-screen"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/20 blur-[150px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10">
        
        {/* ULTRA-PREMIUM HERO SECTION */}
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-in fade-in zoom-in-95 duration-1000 fill-mode-both max-w-5xl mx-auto">
            <div className="inline-flex items-center px-5 py-2.5 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-400 text-sm font-bold tracking-widest uppercase backdrop-blur-md shadow-[0_0_30px_rgba(249,115,22,0.2)]">
              <span className="flex h-2.5 w-2.5 rounded-full bg-orange-500 mr-3 animate-pulse"></span>
              The Future of Digital Business
            </div>
            
            <h1 className="text-6xl md:text-9xl font-serif font-extrabold tracking-tight text-white leading-[1.1] drop-shadow-2xl">
              Launch Your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-400 to-rose-500 italic">
                Empire.
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-xl md:text-3xl text-slate-300 font-light drop-shadow-md">
              Choose your industry below and experience a live, hyper-optimized 
              business platform engineered to convert.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center pt-8 gap-6">
              <a href="#templates" className="flex items-center space-x-4 bg-white hover:bg-slate-200 text-slate-950 px-8 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 group shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                <span>View Live Templates</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://wa.me/918303994616?text=Hello%20Team!%20I%20want%20to%20build%20a%20project." target="_blank" rel="noreferrer" className="flex items-center space-x-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 backdrop-blur-md">
                <MessageSquare size={20} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
          >
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 text-center">Scroll to Explore</div>
            <ArrowRight className="mx-auto rotate-90 text-slate-400" />
          </motion.div>
        </section>

        {/* 1. FRONT AND CENTER: NICHE TEMPLATES GALLERY */}
        <section id="templates" className="py-24 relative">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Select Your Industry</h2>
              <p className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto font-light">Click any card below to instantly launch a fully-functional, ultra-premium web application tailored for your niche.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((cat, index) => {
                const Icon = cat.icon;
                return (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: (index % 4) * 0.1, duration: 0.5 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="group relative"
                  >
                    <Link href={cat.route} className="block h-full">
                      <div className="relative h-[320px] rounded-[2rem] overflow-hidden border border-slate-700/50 hover:border-orange-500/70 transition-all duration-500 bg-slate-900 shadow-2xl hover:shadow-[0_0_40px_rgba(249,115,22,0.3)] hover:-translate-y-2">
                        <div className="absolute inset-0 z-0">
                          <Image src={cat.image} alt={cat.name} fill className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-1000 ease-out" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                        </div>
                        
                        <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                          <div className="bg-black/40 w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-5 backdrop-blur-xl border border-white/20 group-hover:bg-orange-500 group-hover:border-orange-400 group-hover:scale-110 transition-all duration-500 shadow-lg">
                            <Icon size={28} />
                          </div>
                          <h3 className="text-3xl font-bold font-serif text-white mb-3 leading-tight">{cat.name}</h3>
                          <div className="flex items-center space-x-3 text-orange-400 text-sm font-bold bg-black/40 w-max px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                            <CheckCircle2 size={16} />
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

        {/* 2. TRANSPARENT PRICING */}
        <section className="py-32 bg-slate-900/40 backdrop-blur-3xl border-t border-b border-slate-800 relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Investment Plans</h2>
              <p className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto font-light">
                No hidden fees. Premium architectures accessible for everyone. 
                <br className="hidden md:block"/> <span className="text-orange-400 font-medium text-lg">Note: Prices may increase depending on your specific custom requirements.</span>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
              {pricing.map((plan, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`relative p-10 rounded-[2.5rem] bg-slate-950/60 backdrop-blur-xl border hover:border-orange-500/50 transition-all duration-500 flex flex-col group overflow-hidden ${i === 0 ? 'border-orange-500/40 shadow-[0_0_50px_rgba(249,115,22,0.15)] -translate-y-4' : 'border-white/10'}`}
                >
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Zap size={160} />
                  </div>
                  <h3 className="text-3xl font-bold font-serif text-white mb-4 relative z-10">{plan.title}</h3>
                  <p className="text-slate-400 mb-8 relative z-10 text-lg leading-relaxed">{plan.desc}</p>
                  <div className="mb-10 relative z-10 pb-8 border-b border-white/10">
                    <span className="text-xs text-slate-500 uppercase tracking-[0.2em] font-bold">Total Fees Only</span>
                    <div className="text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600 mt-2">
                      {plan.price}
                    </div>
                  </div>
                  <ul className="space-y-5 mb-10 flex-1 relative z-10">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start text-slate-300 text-lg">
                        <Check size={24} className="text-orange-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="https://wa.me/918303994616?text=Hi!%20I%20saw%20your%20pricing%20plans." target="_blank" rel="noreferrer" className={`w-full py-5 text-lg text-center rounded-2xl font-bold transition-all relative z-10 ${i === 0 ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-xl shadow-orange-500/20' : 'bg-white text-slate-950 hover:bg-slate-200'}`}>
                    Inquire Now
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. ADDITIONAL CAPABILITIES & TECH STACK */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Beyond Websites</h2>
              <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light">We engineer Android mobile apps, complex databases, AI workflows, and enterprise architectures.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-8">What We Can Build</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {capabilities.map((cap, i) => {
                    const Icon = cap.icon;
                    return (
                      <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/5 flex items-start space-x-4">
                        <Icon className="text-orange-400 shrink-0" size={24} />
                        <div>
                          <h4 className="text-white font-bold mb-1">{cap.title}</h4>
                          <p className="text-sm text-slate-400">{cap.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-8">Elite Tech Stack</h3>
                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((tech, i) => {
                    const Icon = tech.icon;
                    return (
                      <div key={tech.name} className="flex items-center space-x-3 p-4 bg-white/5 border border-white/5 rounded-2xl">
                        <Icon className={`${tech.color}`} size={20} />
                        <span className="text-sm font-medium text-slate-300">{tech.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER - AGENCY INFO */}
        <footer className="bg-slate-950 border-t border-slate-800 py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 mb-2">
                  SW TECH SOLUTION
                </h2>
                <p className="text-slate-400 text-lg mb-8">Engineering Digital Empires.</p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-orange-500 mt-1 shrink-0" />
                    <div>
                      <p className="text-slate-300 font-medium text-lg">Office Location:</p>
                      <p className="text-slate-400 leading-relaxed">
                        Garima Studio<br />
                        Neori Bajar, Ramnagar Road<br />
                        Ambedkarnagar, UP
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Phone className="text-orange-500 shrink-0" />
                    <p className="text-slate-300 font-medium text-lg">+91 8303994616</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/10 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to start your project?</h3>
                <p className="text-slate-400 mb-8">Visit our office or message us directly on WhatsApp to get a free consultation.</p>
                <a href="https://wa.me/918303994616?text=Hi%20SW%20Tech%20Solution,%20I%20want%20to%20build%20a%20project." target="_blank" rel="noreferrer" className="inline-flex items-center justify-center space-x-2 w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-xl font-bold transition-colors">
                  <MessageSquare size={20} />
                  <span>Message Us Now</span>
                </a>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-slate-800 text-center flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
              <p>&copy; {new Date().getFullYear()} SW Tech Solution. All rights reserved.</p>
              <p className="mt-2 md:mt-0">Built with ?? and ??</p>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}
