"use client";

import React, { useState } from 'react';
import { Calendar, Clock, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CoachingWidget() {
  const [step, setStep] = useState(1);
  const [selectedBatch, setSelectedBatch] = useState<string | null>(null);

  const batches = [
    { id: '1', name: 'Morning Zenith', time: '06:00 AM - 08:00 AM', seats: 5, total: 40 },
    { id: '2', name: 'Afternoon Apex', time: '02:00 PM - 04:00 PM', seats: 12, total: 40 },
    { id: '3', name: 'Evening Elite', time: '05:00 PM - 07:00 PM', seats: 2, total: 40 },
  ];

  return (
    <div className="p-6 bg-white rounded-xl shadow-xl max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-center border-b pb-4">
        <h2 className="text-2xl font-bold text-slate-800">Batch Availability & Admission</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            Live Batch Matrix
          </h3>
          <div className="space-y-4">
            {batches.map((batch) => (
              <div 
                key={batch.id} 
                className={`p-4 rounded-lg border transition-all cursor-pointer ${selectedBatch === batch.id ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-blue-300'}`}
                onClick={() => setSelectedBatch(batch.id)}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-slate-700">{batch.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${batch.seats < 10 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                    {batch.seats} seats left
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {batch.time}</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {batch.total} total</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
          <h3 className="text-lg font-semibold mb-6">Admission Query</h3>
          <div className="flex gap-2 mb-6">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex-1 h-2 rounded-full bg-slate-200 overflow-hidden">
                <motion.div 
                  className="h-full bg-blue-600" 
                  initial={{ width: 0 }} 
                  animate={{ width: step >= s ? '100%' : '0%' }}
                />
              </div>
            ))}
          </div>
          
          <div className="space-y-4 min-h-[200px]">
            {step === 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <input type="text" placeholder="Student Name" className="w-full p-3 rounded-md border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                <input type="email" placeholder="Email Address" className="w-full p-3 rounded-md border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
              </motion.div>
            )}
            {step === 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <select className="w-full p-3 rounded-md border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none">
                  <option>Select Target Exam</option>
                  <option>JEE Main & Advanced</option>
                  <option>NEET UG</option>
                  <option>Foundation (Class 9-10)</option>
                </select>
                <input type="tel" placeholder="Phone Number" className="w-full p-3 rounded-md border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
              </motion.div>
            )}
            {step === 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center h-full text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-green-500" />
                <p className="font-medium text-slate-700">Ready to Submit!</p>
                <p className="text-sm text-slate-500">Selected Batch: {batches.find(b => b.id === selectedBatch)?.name || 'None'}</p>
              </motion.div>
            )}
          </div>

          <div className="mt-6 flex justify-between">
            <button 
              onClick={() => setStep(s => Math.max(1, s - 1))}
              disabled={step === 1}
              className="px-4 py-2 text-slate-500 disabled:opacity-50"
            >
              Back
            </button>
            <button 
              onClick={() => setStep(s => Math.min(3, s + 1))}
              className="px-6 py-2 bg-blue-600 text-white rounded-md flex items-center gap-2 hover:bg-blue-700 transition-colors"
            >
              {step === 3 ? 'Submit Query' : 'Next'} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
