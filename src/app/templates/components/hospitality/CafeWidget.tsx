'use client';
import React, { useState } from 'react';
import { Coffee, CreditCard, Gift } from 'lucide-react';

export default function CafeWidget() {
  const [roastLevel, setRoastLevel] = useState(50);
  const [giftBalance, setGiftBalance] = useState<number | null>(null);
  const [giftCode, setGiftCode] = useState('');

  const checkBalance = () => {
    if (giftCode.length > 5) setGiftBalance(Math.floor(Math.random() * 50) + 10);
  };

  return (
    <div className="max-w-md mx-auto bg-neutral-900 text-neutral-100 p-8 rounded-2xl shadow-2xl">
      <div className="flex items-center space-x-3 mb-8">
        <Coffee className="text-amber-500" size={32} />
        <h2 className="text-2xl font-serif">Noir Roasters</h2>
      </div>

      <div className="mb-10 space-y-4">
        <h3 className="text-lg font-medium text-neutral-300">Bean Origin & Roast Profile</h3>
        <p className="text-sm text-neutral-400">
          {roastLevel < 33 ? 'Light Roast - Ethiopian Yirgacheffe' : roastLevel < 66 ? 'Medium Roast - Colombian Supremo' : 'Dark Roast - Sumatran Mandheling'}
        </p>
        <input
          type="range"
          min="0"
          max="100"
          value={roastLevel}
          onChange={(e) => setRoastLevel(Number(e.target.value))}
          className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
        />
        <div className="flex justify-between text-xs text-neutral-500 uppercase tracking-wider">
          <span>Light</span>
          <span>Medium</span>
          <span>Dark</span>
        </div>
      </div>

      <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700">
        <div className="flex items-center space-x-2 mb-4">
          <Gift className="text-amber-500" size={20} />
          <h3 className="font-medium">Digital Gift Card</h3>
        </div>
        <div className="flex space-x-2">
          <div className="relative flex-1">
            <CreditCard className="absolute left-3 top-3 text-neutral-500" size={18} />
            <input
              type="text"
              placeholder="Enter card code..."
              value={giftCode}
              onChange={(e) => setGiftCode(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-700 rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
          <button onClick={checkBalance} className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2.5 rounded-lg font-medium transition-colors">
            Check
          </button>
        </div>
        {giftBalance !== null && (
          <div className="mt-4 p-3 bg-green-900/20 border border-green-500/30 rounded-lg text-green-400 text-center text-sm">
            Available Balance: <strong className="text-lg ml-1">${giftBalance.toFixed(2)}</strong>
          </div>
        )}
      </div>
    </div>
  );
}
