'use client';
import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Send } from 'lucide-react';

const MENU_ITEMS = {
  Burgers: [
    { id: 'b1', name: 'Classic Burger', price: 10 },
    { id: 'b2', name: 'Cheese Burger', price: 12 },
  ],
  Pizzas: [
    { id: 'p1', name: 'Margherita', price: 15 },
    { id: 'p2', name: 'Pepperoni', price: 18 },
  ]
};

export default function RestaurantWidget() {
  const [activeTab, setActiveTab] = useState('Burgers');
  const [cart, setCart] = useState<Record<string, number>>({});

  const updateCart = (id: string, delta: number) => {
    setCart(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta)
    }));
  };

  const getCartTotal = () => {
    let total = 0;
    Object.values(MENU_ITEMS).flat().forEach(item => {
      total += (cart[item.id] || 0) * item.price;
    });
    return total;
  };

  const generateWhatsApp = () => {
    const items = Object.values(MENU_ITEMS).flat().filter(i => cart[i.id]);
    const text = items.map(i => `${cart[i.id]}x ${i.name}`).join(', ');
    const url = `https://wa.me/1234567890?text=${encodeURIComponent(`I want to order: ${text}`)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-xl shadow-lg relative">
      <div className="flex space-x-4 mb-6 border-b">
        {Object.keys(MENU_ITEMS).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 px-4 ${activeTab === tab ? 'border-b-2 border-orange-500 text-orange-600 font-bold' : 'text-gray-500'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-4 mb-24">
        {MENU_ITEMS[activeTab as keyof typeof MENU_ITEMS].map(item => (
          <div key={item.id} className="flex justify-between items-center p-4 border rounded-lg">
            <div>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
            <div className="flex items-center space-x-3">
              <button onClick={() => updateCart(item.id, -1)} className="p-1 rounded-full bg-gray-100 hover:bg-gray-200">
                <Minus size={20} />
              </button>
              <span className="w-6 text-center font-medium">{cart[item.id] || 0}</span>
              <button onClick={() => updateCart(item.id, 1)} className="p-1 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200">
                <Plus size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="sticky bottom-4 left-0 right-0 bg-orange-600 text-white p-4 rounded-xl shadow-xl flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <ShoppingCart />
          <span className="font-bold text-lg">${getCartTotal()}</span>
        </div>
        <button onClick={generateWhatsApp} className="flex items-center space-x-2 bg-white text-orange-600 px-6 py-2 rounded-full font-bold hover:bg-orange-50">
          <span>Checkout via WA</span>
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
