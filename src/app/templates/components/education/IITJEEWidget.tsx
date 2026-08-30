"use client";

import React, { useState, useEffect } from 'react';
import { Target, Trophy, TrendingUp, Clock } from 'lucide-react';

export default function IITJEEWidget() {
  const [timeLeft, setTimeLeft] = useState({ d: 45, h: 12, m: 30, s: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { d, h, m, s } = prev;
        if (s > 0) s--;
        else {
          s = 59;
          if (m > 0) m--;
          else {
            m = 59;
            if (h > 0) h--;
            else {
              h = 23;
              if (d > 0) d--;
            }
          }
        }
        return { d, h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const rankers = [
    { name: "Rahul Sharma", rank: "AIR 45", score: "285/300", shift: "+12 from mock" },
    { name: "Priya Patel", rank: "AIR 112", score: "268/300", shift: "+8 from mock" },
    { name: "Amit Kumar", rank: "AIR 305", score: "245/300", shift: "+15 from mock" }
  ];

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl shadow-2xl text-white">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Countdown Section */}
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium border border-red-500/30">
            <Clock className="w-4 h-4" /> Live Countdown
          </div>
          <h2 className="text-4xl font-black tracking-tight">JEE Advanced 2025</h2>
          <p className="text-slate-400 text-sm">Intensive prep phase active. Make every second count.</p>
          
          <div className="grid grid-cols-4 gap-4 mt-6">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-slate-950/50 p-4 rounded-xl border border-slate-700 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
                <span className="text-3xl font-mono font-bold text-white tabular-nums">
                  {value.toString().padStart(2, '0')}
                </span>
                <span className="text-xs text-slate-500 uppercase font-semibold mt-1">{unit}</span>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold py-4 rounded-xl hover:opacity-90 transition shadow-[0_0_20px_rgba(220,38,38,0.3)]">
            Take Full Mock Test
          </button>
        </div>

        {/* Ranker Hall of Fame */}
        <div className="flex-1 bg-slate-950/40 rounded-xl p-6 border border-slate-700/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" /> Hall of Fame
            </h3>
            <span className="text-xs font-medium bg-slate-800 px-2 py-1 rounded text-slate-300">2024 Batch</span>
          </div>

          <div className="space-y-4">
            {rankers.map((ranker, i) => (
              <div key={i} className="bg-slate-800/50 p-4 rounded-lg flex items-center justify-between border border-slate-700 hover:border-slate-500 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center font-bold text-black shadow-inner">
                    #{i+1}
                  </div>
                  <div>
                    <h4 className="font-semibold">{ranker.name}</h4>
                    <span className="text-xs font-mono text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded">
                      {ranker.rank}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold font-mono">{ranker.score}</div>
                  <div className="text-xs text-green-400 flex items-center gap-1 justify-end mt-1">
                    <TrendingUp className="w-3 h-3" /> {ranker.shift}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-800 flex justify-between items-center text-sm text-slate-400">
            <span className="flex items-center gap-2"><Target className="w-4 h-4" /> Average Score: 210/300</span>
            <button className="hover:text-white transition">View All Results &rarr;</button>
          </div>
        </div>

      </div>
    </div>
  );
}
