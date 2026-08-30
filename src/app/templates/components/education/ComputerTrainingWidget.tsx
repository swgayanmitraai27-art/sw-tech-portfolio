"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const terminalCommands = [
  { cmd: "$ init_course_progression", output: "Initializing syllabus protocols..." },
  { cmd: "$ load_module --id=0x01", output: "Module 0x01: Advanced Data Structures loaded. Status: OK" },
  { cmd: "$ analyze_metrics", output: "Student proficiency at 84.3%. Progression array updated." },
  { cmd: "$ fetch_assignments", output: "Retrieving encrypted payloads... 3 pending tasks found." },
];

const courses = [
  { id: 1, name: "Quantum Computing Foundations", progress: 100, status: "Completed" },
  { id: 2, name: "Machine Learning Optimization", progress: 65, status: "In Progress" },
  { id: 3, name: "Blockchain Architecture", progress: 15, status: "Started" },
  { id: 4, name: "Neural Network Deployment", progress: 0, status: "Locked" },
];

export default function ComputerTrainingWidget() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const [terminalHistory, setTerminalHistory] = useState<{cmd: string, output: string}[]>([]);
  const [commandIndex, setCommandIndex] = useState(0);

  useEffect(() => {
    if (commandIndex < terminalCommands.length) {
      const timer = setTimeout(() => {
        setTerminalHistory((prev) => [...prev, terminalCommands[commandIndex]]);
        setCommandIndex(commandIndex + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [commandIndex]);

  return (
    <div className="relative w-full h-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      
      {/* SECTION 1: Hero */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://player.vimeo.com/external/372338575.sd.mp4?s=eb57b60098dfc381f964a2750e50c436603a1fc6&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
        </motion.div>
        
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
        
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500"
          >
            Nexus Tech Institute
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl"
          >
            Redefining technical pedagogy through hyper-immersive environments and adaptive intelligence protocols.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: Syllabus Tracker (Terminal Themed) */}
      <section className="relative w-full min-h-screen py-24 px-4 bg-slate-950 z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Course Progression <span className="text-emerald-500">Array</span>
            </h2>
            <p className="text-lg text-slate-400">
              Monitor your active syllabus vectors. Our decentralized curriculum adapts to your cognitive latency and execution speed.
            </p>
            
            <div className="space-y-6">
              {courses.map((course) => (
                <div key={course.id} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 backdrop-blur-sm">
                  <div className="flex justify-between items-end mb-2">
                    <h3 className="font-semibold text-slate-200">{course.name}</h3>
                    <span className="text-xs font-mono text-emerald-400">{course.status} ({course.progress}%)</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-1.5 rounded-full transition-all duration-1000" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black/90 p-6 rounded-lg border border-slate-800 shadow-2xl font-mono text-sm h-[500px] flex flex-col relative overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-slate-500 text-xs">root@nexus-institute:~</span>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-4">
              {terminalHistory.map((item, i) => (
                <div key={i} className="animate-fade-in-up">
                  <div className="text-emerald-400">{item.cmd}</div>
                  <div className="text-slate-400 mt-1 pl-4">{item.output}</div>
                </div>
              ))}
              <div className="flex items-center text-emerald-400">
                <span>$ </span>
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }} 
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2 h-4 bg-emerald-400 ml-2 inline-block"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 3: Features & Metrics */}
      <section className="relative w-full py-32 bg-slate-900 border-y border-slate-800 z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Neural Synchronization", desc: "Sync your workflow with our AI-driven learning pathways, accelerating knowledge retention by 340%." },
              { title: "Distributed Compute Labs", desc: "Access quantum-tier processing power directly from your browser. No local hardware constraints." },
              { title: "Holographic Mentorship", desc: "Engage with volumetric projections of industry leaders via WebXR integrated environments." }
            ].map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6 text-emerald-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-emerald-400 transition-colors">{feat.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Interactive Widgets Array */}
      <section className="relative w-full min-h-screen py-32 flex items-center justify-center z-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 w-full">
           <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-slate-100">Performance <span className="text-cyan-500">Telemetry</span></h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-[400px] bg-slate-900 rounded-3xl border border-slate-800 p-8 flex flex-col">
                <h4 className="text-lg text-slate-400 mb-6">Cognitive Load Index</h4>
                <div className="flex-1 flex items-end gap-2">
                  {[40, 60, 35, 80, 55, 90, 45, 70, 30, 85].map((val, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${val}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className="flex-1 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-sm"
                    />
                  ))}
                </div>
              </div>
              <div className="h-[400px] bg-slate-900 rounded-3xl border border-slate-800 p-8 flex flex-col justify-center items-center text-center">
                 <div className="relative w-48 h-48 rounded-full border-4 border-slate-800 flex items-center justify-center">
                    <motion.svg className="absolute inset-0 w-full h-full -rotate-90">
                      <motion.circle 
                        cx="96" cy="96" r="92" 
                        fill="none" 
                        stroke="#10b981" 
                        strokeWidth="8"
                        strokeDasharray="578"
                        initial={{ strokeDashoffset: 578 }}
                        whileInView={{ strokeDashoffset: 144 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      />
                    </motion.svg>
                    <div className="text-4xl font-bold text-white">75<span className="text-lg text-slate-400">%</span></div>
                 </div>
                 <h4 className="text-lg text-slate-400 mt-6">Overall Competency Matrix</h4>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 5: Footer / Deep Dive CTA */}
      <section className="relative w-full py-40 overflow-hidden bg-black z-20">
         <div className="absolute inset-0 opacity-20">
           <video autoPlay loop muted playsInline className="w-full h-full object-cover">
             <source src="https://player.vimeo.com/external/4942514.hd.mp4?s=34a5d809ec011d87e0766a56e72e1286c757c9cc&profile_id=175" type="video/mp4" />
           </video>
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
         
         <div className="relative z-10 text-center px-4">
           <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">Initiate Protocol</h2>
           <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">Join the next cohort of engineers building the infrastructure of tomorrow.</p>
           <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.7)]">
             Boot Sequence Start
           </button>
         </div>
      </section>
    </div>
  );
}
