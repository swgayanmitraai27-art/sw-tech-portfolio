'use client';
import React, { useState } from 'react';
import { Phone, MapPin, Zap, ArrowRight, ChevronUp, ChevronDown } from 'lucide-react';

export default function CloudKitchenWidget() {
  const [count, setCount] = useState(1);
  return (
    <div className="max-w-sm mx-auto bg-black text-white rounded-3xl overflow-hidden shadow-2xl relative h-[650px] flex flex-col font-sans">
      <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-600 p-6 flex flex-col justify-end relative overflow-hidden">
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <Zap size={14} className="text-yellow-200" /> 15 MIN ETA
        </div>
        <h1 className="text-3xl font-black italic tracking-tighter shadow-sm">SPICY<br/>NOODLE<br/>BOX.</h1>
      </div>

      <div className="flex-1 p-6 flex flex-col">
        <div className="flex justify-between items-center border-b border-gray-800 pb-6 mb-6">
          <div>
            <h2 className="text-xl font-bold">Dan Dan Noodles</h2>
            <p className="text-gray-400 text-sm mt-1">Extra spicy chili oil</p>
          </div>
          <div className="text-2xl font-black text-yellow-400">$12</div>
        </div>

        <div className="flex items-center justify-between bg-gray-900 p-2 rounded-2xl mb-8 border border-gray-800">
          <button onClick={() => setCount(Math.max(1, count - 1))} className="p-4 hover:bg-gray-800 rounded-xl active:scale-95 transition-all text-gray-400"><ChevronDown size={24} /></button>
          <span className="text-3xl font-black">{count}</span>
          <button onClick={() => setCount(count + 1)} className="p-4 hover:bg-gray-800 rounded-xl active:scale-95 transition-all text-white"><ChevronUp size={24} /></button>
        </div>

        <div className="mt-auto space-y-4">
          <div className="flex gap-3 text-sm font-medium">
            <button className="flex-1 bg-gray-900 py-3 rounded-xl flex justify-center items-center gap-2 text-gray-300 border border-gray-800">
              <MapPin size={16} /> Locate Us
            </button>
            <button className="flex-1 bg-gray-900 py-3 rounded-xl flex justify-center items-center gap-2 text-gray-300 border border-gray-800">
              <Phone size={16} /> Call Direct
            </button>
          </div>
          
          <button className="w-full bg-yellow-500 text-black py-4 rounded-xl font-black text-lg flex justify-between items-center px-6 hover:bg-yellow-400 active:scale-95 transition-all">
            <span>PAY ${(count * 12).toFixed(2)}</span>
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
