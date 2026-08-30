'use client';
import React, { useState } from 'react';
import { Users, Maximize, Map, Mail } from 'lucide-react';

export default function BanquetWidget() {
  const [guests, setGuests] = useState(50);
  const spaceRequired = guests * 15; // sq ft per guest

  return (
    <div className="max-w-4xl mx-auto bg-stone-100 p-8 rounded-xl shadow-lg border border-stone-200">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-serif text-stone-800 mb-2">Grand Event Space Planner</h2>
        <p className="text-stone-500">Calculate spatial requirements for your upcoming event</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
            <div className="flex justify-between items-center mb-6">
              <label className="font-semibold flex items-center gap-2 text-stone-700">
                <Users className="text-stone-400" /> Guest Count
              </label>
              <span className="text-3xl font-light text-stone-900">{guests}</span>
            </div>
            <input
              type="range" min="20" max="500" step="10"
              value={guests} onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full accent-stone-800"
            />
            <div className="flex justify-between text-xs text-stone-400 mt-2">
              <span>Intimate (20)</span>
              <span>Gala (500)</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-stone-800 text-stone-100 p-4 rounded-xl">
              <Maximize className="mb-2 text-stone-400" size={24} />
              <div className="text-sm text-stone-400">Required Space</div>
              <div className="text-2xl font-semibold">{spaceRequired} sq.ft</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-stone-200">
              <Map className="mb-2 text-stone-400" size={24} />
              <div className="text-sm text-stone-500">Recommended Hall</div>
              <div className="text-xl font-semibold text-stone-800">
                {guests < 100 ? 'Crystal Room' : guests < 250 ? 'Grand Ballroom' : 'Imperial Pavilion'}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100">
          <h3 className="text-xl font-serif text-stone-800 mb-6 flex items-center gap-2">
            <Mail className="text-stone-400" /> Request a Quote
          </h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm text-stone-600 mb-1">Event Date</label>
              <input type="date" className="w-full border border-stone-300 p-2.5 rounded-lg focus:ring-2 focus:ring-stone-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm text-stone-600 mb-1">Email Address</label>
              <input type="email" placeholder="you@example.com" className="w-full border border-stone-300 p-2.5 rounded-lg focus:ring-2 focus:ring-stone-500 outline-none" />
            </div>
            <button className="w-full bg-stone-900 text-white py-3 rounded-lg font-medium hover:bg-stone-800 transition-colors mt-4">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
