"use client";

import React, { useState, useEffect } from 'react';
import { Terminal, Code, Database, Cpu, Award } from 'lucide-react';

export default function ComputerTrainingWidget() {
  const [activeCourse, setActiveCourse] = useState('mern');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const timer = setInterval(() => {
      setProgress(p => (p < 85 ? p + 1 : 85));
    }, 20);
    return () => clearInterval(timer);
  }, [activeCourse]);

  const courses = {
    mern: {
      name: "MERN Fullstack",
      modules: [
        { name: "MongoDB & Mongoose", icon: Database, done: true },
        { name: "Express.js Routing", icon: Terminal, done: true },
        { name: "React Hooks & State", icon: Code, done: true },
        { name: "Node.js Architecture", icon: Cpu, done: false },
      ],
      cert: "Fullstack Developer Certification"
    },
    python: {
      name: "Python Data Science",
      modules: [
        { name: "Python Basics", icon: Code, done: true },
        { name: "Pandas & NumPy", icon: Database, done: true },
        { name: "Data Visualization", icon: Terminal, done: false },
        { name: "Machine Learning", icon: Cpu, done: false },
      ],
      cert: "Data Scientist Certification"
    }
  };

  const current = courses[activeCourse as keyof typeof courses];

  return (
    <div className="max-w-3xl mx-auto bg-slate-900 rounded-xl overflow-hidden shadow-2xl font-mono text-slate-300">
      {/* Terminal Header */}
      <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-slate-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-slate-500">bash - student@academy:~</div>
        <Terminal className="w-4 h-4 text-slate-500" />
      </div>

      <div className="p-6">
        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setActiveCourse('mern')}
            className={`px-4 py-2 rounded text-sm transition-colors ${activeCourse === 'mern' ? 'bg-green-900/30 text-green-400 border border-green-500/30' : 'bg-slate-800 hover:bg-slate-700'}`}
          >
            $ ./load_course mern
          </button>
          <button 
            onClick={() => setActiveCourse('python')}
            className={`px-4 py-2 rounded text-sm transition-colors ${activeCourse === 'python' ? 'bg-blue-900/30 text-blue-400 border border-blue-500/30' : 'bg-slate-800 hover:bg-slate-700'}`}
          >
            $ ./load_course python
          </button>
        </div>

        <div className="space-y-6">
          <div className="flex justify-between items-end mb-2">
            <h3 className="text-lg font-bold text-white">&gt; {current.name}</h3>
            <span className="text-green-400 text-sm">[{progress}% COMPLETED]</span>
          </div>
          
          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-300 ease-out ${activeCourse === 'mern' ? 'bg-green-500' : 'bg-blue-500'}`}
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {current.modules.map((mod, i) => {
              const Icon = mod.icon;
              return (
                <div key={i} className={`p-4 rounded border ${mod.done ? 'border-slate-700 bg-slate-800/50' : 'border-slate-800 border-dashed opacity-50'}`}>
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${mod.done ? 'text-slate-100' : 'text-slate-500'}`} />
                    <span className="text-sm">{mod.name}</span>
                  </div>
                  <div className="mt-2 text-xs text-slate-500 pl-8">
                    Status: {mod.done ? <span className="text-green-400">PASSED</span> : <span className="text-yellow-500">PENDING</span>}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-4 bg-slate-950 rounded border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-yellow-500" />
              <div>
                <p className="text-xs text-slate-500">Target Certification</p>
                <p className="text-sm font-semibold text-slate-200">{current.cert}</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-white text-black text-xs font-bold rounded hover:bg-slate-200 transition">
              VIEW PATH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
