'use client';
import React, { useState } from 'react';
import { Calendar, Bed, Star, ChevronRight } from 'lucide-react';

const ROOMS = [
  { id: 'standard', name: 'Standard Room', price: 150, rating: 4.2 },
  { id: 'deluxe', name: 'Deluxe Suite', price: 280, rating: 4.7 },
  { id: 'penthouse', name: 'Penthouse', price: 850, rating: 5.0 },
];

export default function HotelWidget() {
  const [nights, setNights] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(ROOMS[0]);

  return (
    <div className="max-w-3xl mx-auto bg-slate-50 p-6 rounded-2xl shadow-xl flex flex-col md:flex-row gap-8">
      <div className="flex-1 space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">Book Your Stay</h2>
        
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <label className="block text-sm font-medium text-slate-600 mb-2 flex items-center gap-2">
            <Calendar size={16} /> Number of Nights
          </label>
          <div className="flex items-center gap-4">
            <input 
              type="range" min="1" max="14" value={nights} 
              onChange={(e) => setNights(Number(e.target.value))}
              className="flex-1 accent-indigo-600"
            />
            <span className="font-bold text-lg w-8 text-center text-indigo-700">{nights}</span>
          </div>
        </div>

        <div className="space-y-3">
          {ROOMS.map(room => (
            <button
              key={room.id}
              onClick={() => setSelectedRoom(room)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all flex justify-between items-center ${
                selectedRoom.id === room.id ? 'border-indigo-600 bg-indigo-50' : 'border-transparent bg-white hover:border-slate-200 shadow-sm'
              }`}
            >
              <div>
                <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                  <Bed size={18} className="text-slate-500" /> {room.name}
                </h3>
                <div className="flex items-center gap-1 mt-1 text-sm text-slate-500">
                  <Star size={14} className="fill-amber-400 text-amber-400" /> {room.rating}
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg text-slate-800">${room.price}</div>
                <div className="text-xs text-slate-500">/ night</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="w-full md:w-72 bg-indigo-900 text-white rounded-xl p-6 flex flex-col justify-between shadow-lg">
        <div>
          <h3 className="text-indigo-200 text-sm font-medium uppercase tracking-wider mb-4">Pricing Summary</h3>
          <div className="space-y-4 mb-8 border-b border-indigo-700/50 pb-6">
            <div className="flex justify-between items-center text-indigo-100">
              <span>Room Rate</span>
              <span>${selectedRoom.price} × {nights}</span>
            </div>
            <div className="flex justify-between items-center text-indigo-100">
              <span>Taxes (12%)</span>
              <span>${(selectedRoom.price * nights * 0.12).toFixed(0)}</span>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <span className="text-lg">Total</span>
            <span className="text-4xl font-bold">${(selectedRoom.price * nights * 1.12).toFixed(0)}</span>
          </div>
        </div>
        
        <button className="w-full bg-white text-indigo-900 py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-indigo-50 transition-colors mt-8">
          Reserve Now <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
