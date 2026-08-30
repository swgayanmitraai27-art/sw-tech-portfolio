'use client';
import React, { useState } from 'react';
import { Package, PlusCircle, MinusCircle, Gift } from 'lucide-react';

const SWEETS = [
  { id: 's1', name: 'Kaju Katli', color: 'bg-emerald-100', price: 15 },
  { id: 's2', name: 'Ladoo', color: 'bg-amber-100', price: 10 },
  { id: 's3', name: 'Gulab Jamun', color: 'bg-rose-100', price: 12 },
  { id: 's4', name: 'Barfi', color: 'bg-indigo-100', price: 14 },
];

export default function SweetShopWidget() {
  const [box, setBox] = useState<Record<string, number>>({});
  
  const totalItems = Object.values(box).reduce((a,b) => a+b, 0);
  const totalPrice = SWEETS.reduce((sum, item) => sum + (box[item.id] || 0) * item.price, 0);

  const update = (id: string, delta: number) => {
    setBox(prev => {
      const current = prev[id] || 0;
      if (current + delta < 0) return prev;
      return { ...prev, [id]: current + delta };
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-b from-purple-50 to-white p-8 rounded-3xl shadow-xl">
      <div className="text-center mb-8">
        <Gift className="mx-auto text-purple-600 mb-3" size={40} />
        <h2 className="text-3xl font-bold text-purple-900">Festive Hamper</h2>
        <p className="text-purple-600/70 mt-2">Build your custom sweet box</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {SWEETS.map(sweet => (
          <div key={sweet.id} className={`${sweet.color} rounded-2xl p-4 flex flex-col items-center border border-white/50 shadow-sm relative overflow-hidden`}>
            <div className="w-16 h-16 bg-white/40 rounded-full mb-3 flex items-center justify-center font-bold text-lg text-black/60 shadow-inner">
              ${sweet.price}
            </div>
            <h3 className="font-semibold text-gray-800 mb-4">{sweet.name}</h3>
            
            <div className="flex items-center gap-3 bg-white/60 px-3 py-1.5 rounded-full shadow-sm backdrop-blur-sm">
              <button onClick={() => update(sweet.id, -1)} className="text-gray-600 hover:text-black">
                <MinusCircle size={20} />
              </button>
              <span className="font-bold w-4 text-center">{box[sweet.id] || 0}</span>
              <button onClick={() => update(sweet.id, 1)} className="text-gray-600 hover:text-black">
                <PlusCircle size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-purple-900 text-white p-6 rounded-2xl flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-4">
          <div className="bg-purple-800 p-3 rounded-xl relative">
            <Package size={24} />
            {totalItems > 0 && (
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-purple-900">
                {totalItems}
              </div>
            )}
          </div>
          <div>
            <div className="text-sm text-purple-300 font-medium uppercase tracking-wide">Box Total</div>
            <div className="text-2xl font-bold">${totalPrice}</div>
          </div>
        </div>
        <button disabled={totalItems === 0} className="bg-yellow-400 text-purple-900 px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
          Pack Box
        </button>
      </div>
    </div>
  );
}
