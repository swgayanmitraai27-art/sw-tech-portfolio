'use client';
import React, { useState } from 'react';
import { Users, Ticket, Tag } from 'lucide-react';

const TABLES = [
  { id: 't1', label: 'Window 1', capacity: 2, section: 'premium' },
  { id: 't2', label: 'Window 2', capacity: 2, section: 'premium' },
  { id: 't3', label: 'Booth A', capacity: 4, section: 'standard' },
  { id: 't4', label: 'Booth B', capacity: 4, section: 'standard' },
  { id: 't5', label: 'Family 1', capacity: 6, section: 'standard' },
  { id: 't6', label: 'Family 2', capacity: 8, section: 'standard' },
];

export default function FamilyRestaurantWidget() {
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [partySize, setPartySize] = useState(2);
  const [hasCoupon, setHasCoupon] = useState(false);

  const table = TABLES.find(t => t.id === selectedTable);
  const baseFee = table ? (table.section === 'premium' ? 25 : 15) * partySize : 0;
  const discount = hasCoupon && partySize >= 4 ? 0.2 : 0;
  const finalPrice = baseFee * (1 - discount);

  return (
    <div className="max-w-3xl mx-auto bg-green-50 p-8 rounded-3xl border border-green-200">
      <div className="flex justify-between items-end mb-8 border-b border-green-200 pb-6">
        <div>
          <h2 className="text-2xl font-bold text-green-900">Reserve Your Table</h2>
          <p className="text-green-700 mt-1">Select seating and apply group discounts</p>
        </div>
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-sm border border-green-100">
          <Users className="text-green-600" size={20} />
          <select 
            value={partySize} 
            onChange={(e) => setPartySize(Number(e.target.value))}
            className="bg-transparent font-bold text-lg text-green-900 outline-none cursor-pointer"
          >
            {[2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} Guests</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {TABLES.map(t => {
          const isValid = t.capacity >= partySize;
          const isSelected = selectedTable === t.id;
          
          return (
            <button
              key={t.id}
              disabled={!isValid}
              onClick={() => setSelectedTable(t.id)}
              className={`p-4 rounded-2xl border-2 transition-all text-left flex flex-col h-24 ${
                !isValid ? 'opacity-40 bg-gray-100 border-gray-200 cursor-not-allowed' :
                isSelected ? 'bg-green-600 border-green-600 text-white shadow-lg scale-105' :
                'bg-white border-green-200 hover:border-green-400 text-green-900 shadow-sm'
              }`}
            >
              <div className="font-bold">{t.label}</div>
              <div className="text-xs mt-auto flex items-center gap-1 opacity-80">
                <Users size={12} /> max {t.capacity}
              </div>
            </button>
          );
        })}
      </div>

      <div className="bg-white rounded-2xl p-6 border border-green-100 shadow-md">
        <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input 
              type="checkbox" 
              checked={hasCoupon} 
              onChange={(e) => setHasCoupon(e.target.checked)}
              className="w-5 h-5 rounded text-green-600 accent-green-600 cursor-pointer"
            />
            <span className="font-medium text-gray-700 flex items-center gap-2">
              <Ticket className="text-green-500" size={18} /> Apply Group Coupon (4+ guests)
            </span>
          </label>
          {discount > 0 && (
            <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
              <Tag size={12} /> 20% OFF
            </span>
          )}
        </div>

        <div className="flex justify-between items-center">
          <div>
            <div className="text-sm text-gray-500">Reservation Deposit</div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-gray-900">${finalPrice.toFixed(2)}</span>
              {discount > 0 && <span className="text-lg text-gray-400 line-through">${baseFee.toFixed(2)}</span>}
            </div>
          </div>
          <button 
            disabled={!selectedTable}
            className="bg-green-600 text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-green-700 disabled:opacity-50 transition-colors shadow-lg shadow-green-200"
          >
            Book Table
          </button>
        </div>
      </div>
    </div>
  );
}
