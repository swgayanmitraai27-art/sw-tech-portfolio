'use client';
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Clock, ChevronRight, Stethoscope, Microscope, Brain, CheckCircle2 } from 'lucide-react';

export default function NEETWidget() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const days = ['Mon, Aug 30', 'Tue, Aug 31', 'Wed, Sep 1', 'Thu, Sep 2', 'Fri, Sep 3'];
  const slots = ['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM', '07:00 PM'];

  return (
    <div className="relative w-full min-h-screen bg-slate-950 text-slate-50 font-sans overflow-x-hidden selection:bg-teal-500/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2940" 
            alt="Medical Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>
        
        {/* Gradient overlay as requested */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 font-medium text-sm mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              2026 Admissions Open
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-200 via-emerald-100 to-cyan-200">
              Master the Medical Frontier
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Precision engineered curriculum for the next generation of top-tier medical professionals. Dive deep into biological sciences with state-of-the-art interactive modules.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(20,184,166,0.5)] flex items-center justify-center gap-2">
                Start Your Journey <ChevronRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-semibold backdrop-blur-sm transition-all duration-300">
                Explore Curriculum
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. BIOLOGY/FEATURES SECTION */}
      <section className="relative py-32 bg-slate-950 z-20">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-teal-50">Anatomy of Success</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Deconstructing the most complex topics into intuitive, immersive learning experiences.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Microscope, title: "Micro-Level Analysis", desc: "Detailed breakdown of cellular biology with 3D interactive models and real-time quizzes." },
              { icon: Stethoscope, title: "Clinical Correlation", desc: "Bridge the gap between theory and practice with weekly clinical case studies." },
              { icon: Brain, title: "Neurological Retention", desc: "AI-driven spaced repetition algorithms tailored to your individual memory curve." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-900/40 border border-slate-800 hover:border-teal-500/30 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-100">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VISUAL BREAK / QUOTE */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=2940" 
            alt="Laboratory Focus" 
            className="w-full h-full object-cover opacity-40 scale-105 transform hover:scale-100 transition-transform duration-[10s]"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/90"></div>
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <p className="text-3xl md:text-5xl font-serif italic text-teal-100/80 leading-relaxed">
            "Medicine is a science of uncertainty and an art of probability."
          </p>
          <div className="mt-8 text-teal-500 font-semibold tracking-widest uppercase text-sm">
            - William Osler
          </div>
        </div>
      </section>

      {/* 4. STATEFUL SLOT BOOKING */}
      <section className="relative py-32 bg-slate-950 z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">Weekly Prep Seminars</h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Secure your spot in our exclusive live mentorship sessions. Expert faculty will dissect high-yield NEET topics and address your doubts in real-time.
            </p>
            <ul className="space-y-4 mb-10">
              {['Live Doubt Resolution', 'High-Yield Topic Discussions', 'Strategic Mock Test Analysis'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-teal-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Calendar className="text-teal-400" /> Select a Date
              </h3>
              
              <div className="flex gap-3 overflow-x-auto pb-4 mb-6 scrollbar-hide">
                {days.map((day, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setSelectedDay(idx); setSelectedSlot(null); }}
                    className={`whitespace-nowrap px-5 py-3 rounded-xl border transition-all ${
                      selectedDay === idx 
                      ? 'bg-teal-500/20 border-teal-500/50 text-teal-300' 
                      : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4 mt-8 flex items-center gap-3 text-slate-200">
                <Clock className="w-5 h-5 text-teal-400" /> Available Slots
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {slots.map((slot, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-3 rounded-lg border text-sm font-medium transition-all ${
                      selectedSlot === slot
                      ? 'bg-teal-500 text-white border-teal-400 shadow-[0_0_15px_-3px_rgba(20,184,166,0.5)]'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
              
              <button 
                disabled={!selectedSlot}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                  selectedSlot 
                  ? 'bg-teal-600 hover:bg-teal-500 text-white shadow-lg' 
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                {selectedSlot ? `Confirm Booking for ${selectedSlot}` : 'Select a Slot'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER / CTA */}
      <section className="relative py-24 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to crack NEET 2026?</h2>
          <p className="text-slate-400 mb-10">Join thousands of successful candidates who have transformed their preparation with our platform.</p>
          <button className="px-10 py-5 bg-white text-slate-950 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300">
            Enroll Now
          </button>
        </div>
      </section>
      
    </div>
  );
}
