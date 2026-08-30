"use client";

import React, { useState } from "react";
import { Filter, X, Ruler } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PRODUCTS = [
  { id: 1, name: "Silk Crepe Blouse", category: "Tops", price: "$295", sizes: ["XS", "S", "M"], img: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "Tailored Wool Trouser", category: "Bottoms", price: "$420", sizes: ["S", "M", "L"], img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "Cashmere Turtleneck", category: "Knitwear", price: "$550", sizes: ["M", "L", "XL"], img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600&auto=format&fit=crop" },
  { id: 4, name: "Oversized Blazer", category: "Outerwear", price: "$680", sizes: ["S", "M", "L", "XL"], img: "https://images.unsplash.com/photo-1591369822096-114cb1951cce?q=80&w=600&auto=format&fit=crop" },
  { id: 5, name: "Pleated Midi Skirt", category: "Bottoms", price: "$340", sizes: ["XS", "S", "M"], img: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=600&auto=format&fit=crop" },
  { id: 6, name: "Cotton Poplin Dress", category: "Dresses", price: "$490", sizes: ["S", "M", "L"], img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop" },
];

const CATEGORIES = ["All", "Tops", "Bottoms", "Knitwear", "Outerwear", "Dresses"];
const SIZES = ["XS", "S", "M", "L", "XL"];

export default function BoutiqueWidget() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSize, setActiveSize] = useState<string | null>(null);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchCategory = activeCategory === "All" || p.category === activeCategory;
    const matchSize = !activeSize || p.sizes.includes(activeSize);
    return matchCategory && matchSize;
  });

  return (
    <div className="w-full max-w-7xl mx-auto bg-white text-neutral-900 font-sans p-4 md:p-8 flex flex-col md:flex-row gap-8">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 flex-shrink-0">
        <div className="sticky top-8">
          <div className="flex items-center gap-2 mb-8 pb-4 border-b border-neutral-200">
            <Filter size={20} />
            <h2 className="text-xl font-light uppercase tracking-widest">Filter By</h2>
          </div>

          <div className="mb-8">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-4">Categories</h3>
            <div className="flex flex-col gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-left text-sm py-1 transition-colors ${activeCategory === cat ? 'font-medium text-black' : 'text-neutral-500 hover:text-black'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-4">Sizes</h3>
            <div className="flex flex-wrap gap-2">
              {SIZES.map(size => (
                <button
                  key={size}
                  onClick={() => setActiveSize(activeSize === size ? null : size)}
                  className={`w-10 h-10 text-xs flex items-center justify-center border transition-all ${activeSize === size ? 'border-black bg-black text-white' : 'border-neutral-200 text-neutral-600 hover:border-black'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={() => setShowSizeGuide(true)}
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-500 hover:text-black transition-colors"
          >
            <Ruler size={16} />
            <span>Size Guide</span>
          </button>
        </div>
      </aside>

      {/* Grid */}
      <main className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map(product => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] mb-4 bg-neutral-100 overflow-hidden">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium">{product.name}</h3>
                    <p className="text-xs text-neutral-500 mt-1">{product.category}</p>
                  </div>
                  <span className="text-sm">{product.price}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {filteredProducts.length === 0 && (
            <div className="col-span-full py-20 text-center text-neutral-500">
              No products found matching your criteria.
            </div>
          )}
        </div>
      </main>

      {/* Size Guide Modal */}
      <AnimatePresence>
        {showSizeGuide && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white p-8 max-w-2xl w-full"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-light uppercase tracking-widest">Women's Sizing</h2>
                <button onClick={() => setShowSizeGuide(false)} className="text-neutral-500 hover:text-black">
                  <X size={24} />
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-neutral-50 text-neutral-500 text-xs uppercase">
                    <tr>
                      <th className="px-4 py-3 font-medium">Size</th>
                      <th className="px-4 py-3 font-medium">US</th>
                      <th className="px-4 py-3 font-medium">Bust (in)</th>
                      <th className="px-4 py-3 font-medium">Waist (in)</th>
                      <th className="px-4 py-3 font-medium">Hip (in)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    <tr className="hover:bg-neutral-50">
                      <td className="px-4 py-3 font-medium">XS</td>
                      <td className="px-4 py-3">0-2</td>
                      <td className="px-4 py-3">32-33</td>
                      <td className="px-4 py-3">24-25</td>
                      <td className="px-4 py-3">34.5-35.5</td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="px-4 py-3 font-medium">S</td>
                      <td className="px-4 py-3">4-6</td>
                      <td className="px-4 py-3">34-35</td>
                      <td className="px-4 py-3">26-27</td>
                      <td className="px-4 py-3">36.5-37.5</td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="px-4 py-3 font-medium">M</td>
                      <td className="px-4 py-3">8-10</td>
                      <td className="px-4 py-3">36-37.5</td>
                      <td className="px-4 py-3">28-29.5</td>
                      <td className="px-4 py-3">38.5-40</td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="px-4 py-3 font-medium">L</td>
                      <td className="px-4 py-3">12-14</td>
                      <td className="px-4 py-3">39-40.5</td>
                      <td className="px-4 py-3">31-32.5</td>
                      <td className="px-4 py-3">41.5-43</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
