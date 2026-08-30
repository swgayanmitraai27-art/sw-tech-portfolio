"use client";

import React, { useState } from 'react';
import { BookOpen, Upload, FileText, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SchoolWidget() {
  const [slide, setSlide] = useState(0);
  const [file, setFile] = useState<File | null>(null);

  const curriculum = [
    { title: "Primary Education", desc: "Foundational learning focusing on cognitive and social skills.", grades: "Grades 1-5" },
    { title: "Middle School", desc: "Exploratory curriculum encouraging critical thinking.", grades: "Grades 6-8" },
    { title: "High School", desc: "Advanced placement and college preparatory courses.", grades: "Grades 9-12" },
  ];

  return (
    <div className="bg-slate-50 rounded-2xl p-2 max-w-5xl mx-auto shadow-2xl flex flex-col md:flex-row gap-2 h-auto md:h-[500px]">
      {/* Dashboard Left - Curriculum Slider */}
      <div className="flex-1 bg-indigo-900 rounded-xl p-8 text-white relative overflow-hidden flex flex-col justify-between">
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <BookOpen className="w-64 h-64" />
        </div>
        
        <div>
          <h2 className="text-3xl font-light mb-2">Academic Curriculum</h2>
          <p className="text-indigo-200 text-sm">Explore our educational pathways</p>
        </div>

        <div className="relative h-48 my-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <span className="inline-block px-3 py-1 bg-indigo-800 rounded-full text-xs font-semibold w-max mb-4">
                {curriculum[slide].grades}
              </span>
              <h3 className="text-2xl font-bold mb-3">{curriculum[slide].title}</h3>
              <p className="text-indigo-200 leading-relaxed max-w-md">{curriculum[slide].desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-4 relative z-10">
          <button 
            onClick={() => setSlide((s) => (s > 0 ? s - 1 : curriculum.length - 1))}
            className="p-2 rounded-full bg-indigo-800 hover:bg-indigo-700 transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {curriculum.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all ${i === slide ? 'w-8 bg-white' : 'w-2 bg-indigo-800'}`} />
            ))}
          </div>
          <button 
            onClick={() => setSlide((s) => (s < curriculum.length - 1 ? s + 1 : 0))}
            className="p-2 rounded-full bg-indigo-800 hover:bg-indigo-700 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Dashboard Right - Upload Console */}
      <div className="w-full md:w-[400px] bg-white rounded-xl p-8 flex flex-col">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <FileText className="w-5 h-5 text-indigo-600" /> Secure Registration
        </h3>
        
        <form className="space-y-4 flex-1">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Student Name</label>
            <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Applying Grade</label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none">
              <option>Grade 1</option>
              <option>Grade 6</option>
              <option>Grade 9</option>
            </select>
          </div>

          <div className="pt-4">
            <label className="block text-sm font-medium text-slate-600 mb-2">Upload Birth Certificate / ID</label>
            <label className="border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors">
              <input 
                type="file" 
                className="hidden" 
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
              {file ? (
                <>
                  <Check className="w-8 h-8 text-green-500 mb-2" />
                  <span className="text-sm font-medium text-slate-700">{file.name}</span>
                </>
              ) : (
                <>
                  <Upload className="w-8 h-8 text-indigo-400 mb-2" />
                  <span className="text-sm font-medium text-slate-700">Click to browse or drag file</span>
                  <span className="text-xs text-slate-500 mt-1">PDF, JPG, PNG up to 5MB</span>
                </>
              )}
            </label>
          </div>
        </form>

        <button className="w-full mt-6 bg-indigo-600 text-white font-medium py-3 rounded-lg hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
          Submit Application
        </button>
      </div>
    </div>
  );
}
