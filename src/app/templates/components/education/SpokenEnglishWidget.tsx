"use client";

import React, { useState, useRef } from 'react';
import { Volume2, Play, Pause, Mic, Star, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SpokenEnglishWidget() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [level, setLevel] = useState('intermediate');

  const levels = [
    { id: 'beginner', label: 'A1-A2 Beginner', desc: 'Basic vocabulary & simple sentences' },
    { id: 'intermediate', label: 'B1-B2 Intermediate', desc: 'Conversational fluency & grammar' },
    { id: 'advanced', label: 'C1-C2 Advanced', desc: 'Native-like pronunciation & idioms' }
  ];

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    // In real widget, handle actual audio playing here
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden">
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <Globe className="w-6 h-6 text-indigo-500" />
              Spoken English
            </h2>
            <p className="text-slate-500 text-sm mt-1">Master pronunciation & fluency</p>
          </div>
          <div className="bg-indigo-50 text-indigo-600 p-3 rounded-2xl">
            <Mic className="w-6 h-6" />
          </div>
        </div>

        <div className="grid gap-3 mb-8">
          {levels.map((lvl) => (
            <div 
              key={lvl.id}
              onClick={() => setLevel(lvl.id)}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${level === lvl.id ? 'border-indigo-500 bg-indigo-50' : 'border-slate-100 hover:border-indigo-100'}`}
            >
              <div>
                <h4 className={`font-semibold ${level === lvl.id ? 'text-indigo-900' : 'text-slate-700'}`}>{lvl.label}</h4>
                <p className="text-xs text-slate-500 mt-1">{lvl.desc}</p>
              </div>
              {level === lvl.id && <Star className="w-5 h-5 text-indigo-500 fill-indigo-500" />}
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
          
          <div className="flex items-center justify-between mb-6 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                <Volume2 className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <p className="text-sm font-medium">Sample Conversation</p>
                <p className="text-xs text-slate-400">Business English - Unit 4</p>
              </div>
            </div>
            <span className="text-xs font-mono bg-slate-800 px-2 py-1 rounded">01:24</span>
          </div>

          <div className="relative z-10">
            {/* Audio wave simulation */}
            <div className="flex items-center justify-center gap-1 h-12 mb-6">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={isPlaying ? {
                    height: ['20%', '80%', '40%', '100%', '30%'][i % 5],
                    transition: { repeat: Infinity, duration: 0.5 + (i % 3) * 0.2, repeatType: "mirror" }
                  } : { height: '20%' }}
                  className="w-1.5 bg-indigo-400 rounded-full"
                  style={{ opacity: 0.3 + (Math.random() * 0.7) }}
                />
              ))}
            </div>

            <div className="flex items-center justify-center gap-6">
              <button className="text-slate-400 hover:text-white transition">15s ↺</button>
              <button 
                onClick={handlePlay}
                className="w-14 h-14 rounded-full bg-indigo-500 flex items-center justify-center hover:bg-indigo-400 transition shadow-lg shadow-indigo-500/30"
              >
                {isPlaying ? <Pause className="w-6 h-6 fill-white" /> : <Play className="w-6 h-6 fill-white ml-1" />}
              </button>
              <button className="text-slate-400 hover:text-white transition">↻ 15s</button>
            </div>
          </div>
        </div>
        
        <button className="w-full mt-6 bg-slate-800 text-white font-semibold py-4 rounded-xl hover:bg-slate-700 transition">
          Start Assessment Test
        </button>
      </div>
    </div>
  );
}
