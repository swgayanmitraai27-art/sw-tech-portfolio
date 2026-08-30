'use client';
"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function IITJEEWidget() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // High-pressure Countdown Timer
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2027-01-24T00:00:00Z').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const rankers = [
    { rank: 'AIR 1', name: 'Aarav Sharma', score: '360/360', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { rank: 'AIR 4', name: 'Riya Gupta', score: '355/360', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { rank: 'AIR 9', name: 'Kabir Singh', score: '350/360', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { rank: 'AIR 15', name: 'Sneha Patel', score: '345/360', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: yHero, opacity: opacityHero }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 drop-shadow-lg"
          >
            CRACK IIT JEE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-3xl font-light text-slate-300 mb-10 max-w-3xl mx-auto"
          >
            The ultimate elite preparation ecosystem for the nation's toughest engineering entrance examination.
          </motion.p>
        </div>
      </section>

      {/* Countdown Canvas */}
      <section className="relative z-20 -mt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-center text-sm md:text-base uppercase tracking-widest text-red-500 font-bold mb-8 animate-pulse">
              Mission JEE Advanced 2027
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-20 h-24 md:w-32 md:h-36 bg-slate-800 rounded-xl md:rounded-2xl flex items-center justify-center shadow-inner relative overflow-hidden border border-slate-700/50">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-700/20 to-transparent" />
                    <span className="text-4xl md:text-7xl font-mono font-black text-white relative z-10 drop-shadow-md">
                      {item.value.toString().padStart(2, '0')}
                    </span>
                    <div className="absolute w-full h-[1px] bg-slate-950/50 top-1/2 left-0 transform -translate-y-1/2 shadow-[0_1px_0_rgba(255,255,255,0.1)]" />
                  </div>
                  <span className="mt-4 text-xs md:text-sm font-semibold tracking-wider text-slate-400 uppercase">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hall of Fame Scorecard Grid */}
      <section className="relative z-20 py-24 px-4 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ranker's Hall of Fame</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Our legacy of producing top ranks consistently year after year. Join the elite club.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rankers.map((ranker, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.2)]"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                  <img 
                    src={ranker.image} 
                    alt={ranker.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-indigo-600 text-white text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    {ranker.rank}
                  </div>
                </div>
                <div className="p-6 relative z-20">
                  <h3 className="text-xl font-bold text-white mb-1">{ranker.name}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-slate-400 font-medium">Final Score</span>
                    <span className="text-lg font-mono font-bold text-green-400">{ranker.score}</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full mt-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                      style={{ width: `${(parseInt(ranker.score.split('/')[0]) / 360) * 100}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum / Features */}
      <section className="relative z-20 py-24 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Adaptive Learning Architecture</h2>
            <ul className="space-y-6">
              {[
                { title: 'AI-Powered Analytics', desc: 'Pinpoint weak concepts with cognitive mapping and predictive scoring.' },
                { title: 'Elite Test Series', desc: 'Simulated CBTs mirroring the exact difficulty and interface of JEE Advanced.' },
                { title: 'Masterclass Replays', desc: 'On-demand high-definition lectures from HODs and top faculty.' }
              ].map((feature, i) => (
                <li key={i} className="flex gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-indigo-900/50 text-indigo-400 flex items-center justify-center flex-shrink-0 border border-indigo-500/20">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-200 mb-1">{feature.title}</h4>
                    <p className="text-slate-400">{feature.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 group">
             <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <img 
               src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
               alt="Analytics Dashboard" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
          </div>
        </div>
      </section>
      
    </div>
  );
}
