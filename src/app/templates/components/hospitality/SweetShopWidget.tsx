'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ChevronRight, Gift, Star, Clock, Heart } from 'lucide-react';

const SWEET_ITEMS = [
  { id: 1, name: 'Artisan Truffles', price: 24.99, image: 'https://images.unsplash.com/photo-1548883354-94bcfe321cfa?auto=format&fit=crop&q=80&w=800', type: 'chocolate', description: 'Handcrafted dark chocolate truffles infused with Madagascar vanilla.' },
  { id: 2, name: 'Rose Turkish Delight', price: 18.50, image: 'https://images.unsplash.com/photo-1579372785664-964205dc1120?auto=format&fit=crop&q=80&w=800', type: 'delight', description: 'Traditional lokum scented with pure rose water and dusted in icing sugar.' },
  { id: 3, name: 'Pistachio Baklava', price: 32.00, image: 'https://images.unsplash.com/photo-1599598425947-330026e6d5e1?auto=format&fit=crop&q=80&w=800', type: 'pastry', description: 'Layers of crispy phyllo dough filled with chopped pistachios and sweetened with syrup.' },
  { id: 4, name: 'Macaron Selection', price: 28.00, image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=800', type: 'macaron', description: 'Assortment of delicate French macarons in seasonal flavors.' },
  { id: 5, name: 'Gold Leaf Pralines', price: 45.00, image: 'https://images.unsplash.com/photo-1605615707736-548e64e52bf1?auto=format&fit=crop&q=80&w=800', type: 'chocolate', description: 'Hazelnut pralines adorned with edible 24k gold leaf.' },
  { id: 6, name: 'Honeycomb Crunch', price: 15.00, image: 'https://images.unsplash.com/photo-1621236378699-8597faf6a176?auto=format&fit=crop&q=80&w=800', type: 'candy', description: 'Light, airy honeycomb smothered in rich milk chocolate.' },
];

export default function SweetShopWidget() {
  const [hamperItems, setHamperItems] = useState<number[]>([]);
  const [isHamperOpen, setIsHamperOpen] = useState(false);

  const toggleHamperItem = (id: number) => {
    setHamperItems(prev => 
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  const hamperTotal = hamperItems.reduce((total, id) => {
    const item = SWEET_ITEMS.find(i => i.id === id);
    return total + (item?.price || 0);
  }, 0);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-900 font-sans selection:bg-amber-200">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1499540633125-484965b60031?auto=format&fit=crop&q=80&w=2000" 
            alt="Confectionery Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-amber-400 font-medium tracking-widest uppercase text-sm mb-4 block">Est. 1894</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
              The Art of <br/><span className="text-amber-200 italic">Fine Confectionery</span>
            </h1>
            <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
              Discover our masterfully crafted sweets, where century-old traditions meet contemporary culinary artistry.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-4 rounded-full font-medium transition-colors inline-flex items-center gap-2"
              onClick={() => document.getElementById('hamper-builder')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Curate a Hamper
              <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                <Star className="text-amber-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Premium Ingredients</h3>
              <p className="text-slate-600 leading-relaxed">Sourced from the finest growers globally, ensuring unparalleled taste and quality in every bite.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-6">
                <Heart className="text-rose-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Handcrafted with Care</h3>
              <p className="text-slate-600 leading-relaxed">Each confection is meticulously formed by our master chocolatiers and sugar artists.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                <Clock className="text-emerald-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Time-Honored Recipes</h3>
              <p className="text-slate-600 leading-relaxed">Using secret family recipes passed down through four generations of confectioners.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hamper Builder Section */}
      <section id="hamper-builder" className="py-24 bg-[#FDFBF7] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Assemble Your Festive Hamper</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Select your favorite treats to create a personalized gift box. The perfect gesture for any celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {SWEET_ITEMS.map((item, index) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 ${
                      hamperItems.includes(item.id) ? 'ring-4 ring-amber-400' : 'hover:shadow-xl'
                    }`}
                    onClick={() => toggleHamperItem(item.id)}
                  >
                    <div className="aspect-[4/5] relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        <span className="uppercase text-xs font-semibold tracking-wider text-amber-300 mb-2 block">{item.type}</span>
                        <h3 className="text-xl font-serif mb-1">{item.name}</h3>
                        <p className="text-sm text-slate-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">${item.price.toFixed(2)}</span>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                            hamperItems.includes(item.id) ? 'bg-amber-400 border-amber-400 text-slate-900' : 'border-white/50 text-white'
                          }`}>
                            {hamperItems.includes(item.id) ? '???' : '+'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-8 bg-white rounded-3xl p-6 shadow-2xl border border-slate-100">
                <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                  <h3 className="text-2xl font-serif flex items-center gap-2">
                    <Gift className="text-amber-500" />
                    Your Hamper
                  </h3>
                  <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">
                    {hamperItems.length} items
                  </span>
                </div>

                <div className="min-h-[200px] max-h-[400px] overflow-y-auto mb-6 pr-2">
                  <AnimatePresence>
                    {hamperItems.length === 0 ? (
                      <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                        className="text-slate-400 text-center py-10 flex flex-col items-center gap-4"
                      >
                        <ShoppingBag className="w-12 h-12 opacity-20" />
                        <p>Your hamper is empty.<br/>Select items to begin assembling.</p>
                      </motion.div>
                    ) : (
                      hamperItems.map(id => {
                        const item = SWEET_ITEMS.find(i => i.id === id);
                        if (!item) return null;
                        return (
                          <motion.div 
                            key={id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex items-center gap-4 mb-4 bg-slate-50 p-3 rounded-xl"
                          >
                            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                            <div className="flex-1">
                              <h4 className="font-medium text-sm leading-tight mb-1">{item.name}</h4>
                              <p className="text-slate-500 text-sm">${item.price.toFixed(2)}</p>
                            </div>
                            <button 
                              onClick={() => toggleHamperItem(id)}
                              className="text-slate-400 hover:text-red-500 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-50"
                            >
                              ???
                            </button>
                          </motion.div>
                        );
                      })
                    )}
                  </AnimatePresence>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-slate-500">Subtotal</span>
                    <span className="text-2xl font-serif">${hamperTotal.toFixed(2)}</span>
                  </div>
                  <button 
                    disabled={hamperItems.length === 0}
                    className="w-full bg-slate-900 text-white py-4 rounded-xl font-medium hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    Complete Assembly
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Widget */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1548883354-94bcfe321cfa?auto=format&fit=crop&q=80&w=2000" alt="Background Texture" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 text-amber-100">Need a Corporate Order?</h2>
          <p className="text-slate-400 mb-10 text-lg">
            We specialize in large-scale bespoke gifting for corporate events, weddings, and special celebrations. Contact our concierges for customized packaging and volume pricing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-slate-950 px-8 py-4 rounded-full font-medium hover:bg-amber-100 transition-colors">
              Contact Concierge
            </button>
            <button className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
