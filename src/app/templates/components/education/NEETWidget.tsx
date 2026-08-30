"use client";

import React, { useState } from 'react';
import { Activity, Calendar as CalIcon, Users, Stethoscope, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NEETWidget() {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);

  const slots = [
    { id: 1, day: "Tuesday", date: "Oct 15", time: "10:00 AM", topic: "Biology: Human Physiology", seats: 12 },
    { id: 2, day: "Thursday", date: "Oct 17", time: "02:00 PM", topic: "Chemistry: Organic Reactions", seats: 4 },
    { id: 3, day: "Saturday", date: "Oct 19", time: "11:00 AM", topic: "Physics: Optics & Modern", seats: 0 },
  ];

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-teal-50">
      <div className="bg-gradient-to-r from-teal-600 to-emerald-600 p-8 text-white relative overflow-hidden">
        <Activity className="absolute right-0 bottom-0 w-64 h-64 opacity-10 transform translate-x-1/4 translate-y-1/4" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium mb-4">
            <Stethoscope className="w-4 h-4" /> Medical Entrance Prep
          </div>
          <h2 className="text-3xl font-bold mb-2">NEET UG Masterclass & Counseling</h2>
          <p className="text-teal-50 max-w-xl">Join our specialized weekly seminars focused on high-weightage topics and stress management for medical aspirants.</p>
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
          <CalIcon className="w-5 h-5 text-teal-600" /> Available Seminar Slots
        </h3>

        <div className="space-y-4">
          {slots.map((slot) => {
            const isFull = slot.seats === 0;
            const isSelected = selectedSlot === slot.id;
            
            return (
              <motion.div 
                key={slot.id}
                whileHover={!isFull ? { scale: 1.01 } : {}}
                onClick={() => !isFull && setSelectedSlot(slot.id)}
                className={`flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl border-2 transition-all cursor-pointer
                  ${isFull ? 'bg-slate-50 border-slate-100 opacity-75 cursor-not-allowed' : 
                    isSelected ? 'border-teal-500 bg-teal-50 shadow-md shadow-teal-100' : 'border-slate-100 hover:border-teal-200'}`}
              >
                <div className="flex items-center gap-5 mb-4 sm:mb-0">
                  <div className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center font-bold ${isFull ? 'bg-slate-200 text-slate-500' : 'bg-teal-100 text-teal-700'}`}>
                    <span className="text-xs uppercase">{slot.day.slice(0,3)}</span>
                    <span className="text-lg leading-none">{slot.date.split(' ')[1]}</span>
                  </div>
                  <div>
                    <h4 className={`font-bold ${isFull ? 'text-slate-500' : 'text-slate-800'}`}>{slot.topic}</h4>
                    <p className="text-sm text-slate-500 flex items-center gap-2 mt-1">
                      <CalIcon className="w-3 h-3" /> {slot.time}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 sm:w-1/3">
                  <div className="flex flex-col items-end">
                    <span className={`text-sm font-semibold flex items-center gap-1 ${isFull ? 'text-red-500' : 'text-teal-600'}`}>
                      <Users className="w-4 h-4" />
                      {isFull ? 'Full' : `${slot.seats} spots left`}
                    </span>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                    ${isFull ? 'border-slate-300' : isSelected ? 'border-teal-500 bg-teal-500' : 'border-slate-300'}`}>
                    {isSelected && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            {selectedSlot ? `Selected: ${slots.find(s => s.id === selectedSlot)?.topic}` : 'Select a slot to continue'}
          </p>
          <button 
            disabled={!selectedSlot}
            className="px-6 py-3 bg-teal-600 text-white font-medium rounded-xl hover:bg-teal-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            Book Seminar <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
