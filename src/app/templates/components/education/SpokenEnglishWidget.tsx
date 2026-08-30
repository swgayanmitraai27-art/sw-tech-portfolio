'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Pause, Volume2, SkipForward, SkipBack, Settings, BookOpen, Mic, Award, MessageCircle, BarChart2 } from 'lucide-react';

// SpokenEnglishWidget component
export default function SpokenEnglishWidget() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity1 = useTransform(scrollY, [0, 500], [1, 0]);

  const [activeLevel, setActiveLevel] = useState('Intermediate');
  const levels = ['Beginner', 'Elementary', 'Intermediate', 'Upper Intermediate', 'Advanced', 'Proficiency'];

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);
  
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: y1, opacity: opacity1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=3271&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wide uppercase mb-6 inline-block">
              Agent 6 Linguistics Coach
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-slate-400">
              Master the Art of <br/> Fluent Communication
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
              Bespoke language acquisition through active listening, neural-pattern matching, and dynamic contextual speaking exercises.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                Start Assessment
              </button>
              <button className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-md border border-white/10 transition-all">
                View Curriculum
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-slate-400"
        >
          <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Level Selection Matrix */}
      <section className="relative z-20 py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Select Your Proficiency</h2>
            <p className="text-slate-400">Adaptive curriculum tailored to your current matrix level.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {levels.map((level, i) => (
              <motion.button
                key={level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveLevel(level)}
                className={`relative group overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 border ${
                  activeLevel === level 
                  ? 'border-blue-500 bg-blue-900/20 shadow-[0_0_20px_rgba(37,99,235,0.15)]' 
                  : 'border-slate-800 bg-slate-900 hover:border-slate-700'
                }`}
              >
                <div className="relative z-10">
                  <div className={`w-3 h-3 rounded-full mb-4 ${activeLevel === level ? 'bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.8)]' : 'bg-slate-700'}`} />
                  <h3 className={`font-semibold text-lg ${activeLevel === level ? 'text-white' : 'text-slate-300'}`}>{level}</h3>
                  <p className="text-slate-500 text-sm mt-2">CEFR {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'][i]}</p>
                </div>
                {activeLevel === level && (
                  <motion.div 
                    layoutId="activeGlow"
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Audio Player & Features */}
      <section className="relative z-20 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516280440502-6c703aa51e70?q=80&w=3270&auto=format&fit=crop')] bg-cover bg-fixed opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950" />
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2 space-y-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Immersive Audio <br/> Processing</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Train your ear with native accents. Our dynamic playback engine analyzes phonetic stress, intonation patterns, and connected speech phenomena in real-time.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { icon: Mic, title: 'Pronunciation Mapping', desc: 'Real-time spectral analysis of your speech.' },
                { icon: MessageCircle, title: 'Contextual Dialogue', desc: 'Simulated real-world scenarios.' },
                { icon: BarChart2, title: 'Fluency Metrics', desc: 'Track words per minute and vocabulary range.' }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-slate-200">{feature.title}</h4>
                    <p className="text-slate-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Audio Player Card Component */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-slate-900/80 backdrop-blur-2xl border border-slate-700/50 p-8 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-800 text-xs font-medium text-slate-300 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Live Analysis
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-800 text-xs font-medium text-slate-300">
                      {activeLevel}
                    </span>
                  </div>
                  <Settings size={20} className="text-slate-500 hover:text-slate-300 cursor-pointer transition-colors" />
                </div>

                <div className="aspect-video bg-slate-950 rounded-2xl mb-8 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=3269&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold mb-1">Business Negotiation Strategies</h3>
                    <p className="text-sm text-slate-400">Module 4 ??? Vocabulary & Idioms</p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mb-8">
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden cursor-pointer">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400"
                      initial={{ width: '0%' }}
                      animate={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs font-medium text-slate-500 mt-2">
                    <span>03:24</span>
                    <span>12:45</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between">
                  <Volume2 size={20} className="text-slate-400 hover:text-white cursor-pointer" />
                  <div className="flex items-center gap-6">
                    <SkipBack size={24} className="text-slate-400 hover:text-white cursor-pointer" />
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-14 h-14 rounded-full bg-white text-slate-950 flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    >
                      {isPlaying ? <Pause size={24} className="ml-0" /> : <Play size={24} className="ml-1" />}
                    </button>
                    <SkipForward size={24} className="text-slate-400 hover:text-white cursor-pointer" />
                  </div>
                  <BookOpen size={20} className="text-slate-400 hover:text-white cursor-pointer" />
                </div>
                
                {/* Transcript snippet */}
                <div className="mt-8 p-4 rounded-xl bg-slate-950/50 border border-slate-800 text-sm leading-relaxed text-slate-300">
                  <span className="text-blue-400 font-semibold">Speaker A:</span> "If we analyze the quarterly projections, it becomes evident that..."
                  <div className="h-10 border-l-2 border-blue-500/30 ml-2 my-2 flex items-center px-4 text-xs text-slate-500 italic">
                    Analyzing phonetic stress...
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <section className="py-24 relative z-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Award size={48} className="mx-auto text-blue-500 mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to elevate your articulation?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of professionals mastering advanced linguistics with Agent 6.
          </p>
          <button className="px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold text-lg hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-shadow">
            Initialize Learning Path
          </button>
        </div>
      </section>
    </div>
  );
}
