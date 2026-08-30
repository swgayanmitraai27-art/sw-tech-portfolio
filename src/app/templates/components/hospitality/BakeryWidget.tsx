'use client';
import React, { useState } from 'react';
import { Cake, CheckCircle2 } from 'lucide-react';

const FLAVOURS = [
  { id: 'vanilla', name: 'Madagascar Vanilla', price: 30 },
  { id: 'chocolate', name: 'Belgian Chocolate', price: 40 },
  { id: 'redvelvet', name: 'Red Velvet', price: 45 },
];

const WEIGHTS = [
  { kg: 1, multiplier: 1 },
  { kg: 2, multiplier: 1.8 },
  { kg: 3, multiplier: 2.5 },
];

export default function BakeryWidget() {
  const [flavour, setFlavour] = useState(FLAVOURS[0]);
  const [weight, setWeight] = useState(WEIGHTS[0]);
  const [date, setDate] = useState('');

  const total = (flavour.price * weight.multiplier).toFixed(2);

  return (
    <div className="max-w-xl mx-auto bg-pink-50 rounded-3xl p-8 shadow-sm border border-pink-100">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-pink-500 p-3 rounded-full text-white">
          <Cake size={24} />
        </div>
        <h2 className="text-2xl font-bold text-pink-900">Custom Cake Builder</h2>
      </div>

      <div className="space-y-8">
        <section>
          <h3 className="text-sm font-semibold text-pink-800 uppercase tracking-wider mb-4">1. Select Flavour</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {FLAVOURS.map(f => (
              <button
                key={f.id}
                onClick={() => setFlavour(f)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  flavour.id === f.id ? 'border-pink-500 bg-white shadow-md' : 'border-transparent bg-pink-100/50 hover:bg-pink-100 text-pink-800'
                }`}
              >
                <div className="font-medium">{f.name}</div>
                <div className="text-sm text-pink-600/70 mt-1">Base: ${f.price}</div>
              </button>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold text-pink-800 uppercase tracking-wider mb-4">2. Select Weight</h3>
          <div className="flex gap-4">
            {WEIGHTS.map(w => (
              <label key={w.kg} className="flex-1 cursor-pointer">
                <input type="radio" name="weight" className="peer sr-only" checked={weight.kg === w.kg} onChange={() => setWeight(w)} />
                <div className="text-center p-4 rounded-xl border-2 border-pink-200 bg-white peer-checked:border-pink-500 peer-checked:bg-pink-50 hover:border-pink-300 transition-colors">
                  <span className="block text-xl font-bold text-pink-900">{w.kg} Kg</span>
                </div>
              </label>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold text-pink-800 uppercase tracking-wider mb-4">3. Delivery Date</h3>
          <input 
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-white border border-pink-200 text-pink-900 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </section>
      </div>

      <div className="mt-10 bg-white rounded-2xl p-6 shadow-sm border border-pink-100 flex justify-between items-center">
        <div>
          <div className="text-sm text-pink-500 font-medium">Estimated Total</div>
          <div className="text-3xl font-black text-pink-900">${total}</div>
        </div>
        <button className="bg-pink-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-pink-700 transition-colors flex items-center gap-2">
          <CheckCircle2 size={20} /> Checkout
        </button>
      </div>
    </div>
  );
}
