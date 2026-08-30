'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ChevronRight, X, Plus, Minus, Send, Star, Clock, MapPin, ChefHat, Utensils, GlassWater } from 'lucide-react';

const MENU_CATEGORIES = ['Tasting Menu', 'A La Carte', 'Wine Pairing', 'Desserts'];

const MENU_ITEMS = [
  { id: '1', category: 'Tasting Menu', name: 'Truffle Caviar Symphony', description: 'Beluga caviar, white truffle emulsion, gold leaf', price: 250, image: 'https://images.pexels.com/photos/1036814/pexels-photo-1036814.jpeg' },
  { id: '2', category: 'Tasting Menu', name: 'Wagyu A5 Striploin', description: 'Charcoal grilled wagyu, black garlic puree, seasonal mushrooms', price: 350, image: 'https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg' },
  { id: '3', category: 'A La Carte', name: 'Lobster Thermidor', description: 'Wild caught lobster, cognac cream, gruyere crust', price: 180, image: 'https://images.pexels.com/photos/5631110/pexels-photo-5631110.jpeg' },
  { id: '4', category: 'A La Carte', name: 'Foie Gras Terrine', description: 'Duck liver, fig compote, brioche toast', price: 120, image: 'https://images.pexels.com/photos/12396113/pexels-photo-12396113.jpeg' },
  { id: '5', category: 'Wine Pairing', name: 'Ch??teau Margaux 2015', description: 'Bordeaux blend, France', price: 850, image: 'https://images.pexels.com/photos/2912163/pexels-photo-2912163.jpeg' },
  { id: '6', category: 'Desserts', name: 'Valrhona Chocolate Sphere', description: 'Dark chocolate, hazelnut praline, gold dust', price: 85, image: 'https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg' }
];

export default function RestaurantWidget() {
  const [activeTab, setActiveTab] = useState(MENU_CATEGORIES[0]);
  const [cart, setCart] = useState<{item: any, quantity: number}[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = (item: any) => {
    setCart(prev => {
      const existing = prev.find(p => p.item.id === item.id);
      if (existing) {
        return prev.map(p => p.item.id === item.id ? { ...p, quantity: p.quantity + 1 } : p);
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(p => {
      if (p.item.id === id) {
        return { ...p, quantity: Math.max(0, p.quantity + delta) };
      }
      return p;
    }).filter(p => p.quantity > 0));
  };

  const cartTotal = cart.reduce((sum, {item, quantity}) => sum + (item.price * quantity), 0);
  const cartCount = cart.reduce((sum, {quantity}) => sum + quantity, 0);

  const checkoutWhatsApp = () => {
    const orderDetails = cart.map(c => `${c.quantity}x ${c.item.name} ($${c.item.price * c.quantity})`).join('%0A');
    const total = `Total: $${cartTotal}`;
    const text = `Hello Chef! I would like to place an order:%0A%0A${orderDetails}%0A%0A${total}`;
    window.open(`https://wa.me/1234567890?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-amber-500/30">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-serif tracking-widest text-amber-500">L'ATELIER</div>
          <div className="flex items-center space-x-8 text-sm uppercase tracking-widest text-slate-300">
            <a href="#experience" className="hover:text-amber-500 transition-colors">Experience</a>
            <a href="#menu" className="hover:text-amber-500 transition-colors">Menu</a>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center space-x-2 bg-amber-500/10 px-4 py-2 rounded-full hover:bg-amber-500/20 transition-colors"
            >
              <ShoppingBag size={18} className="text-amber-500" />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-slate-950 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src="https://videos.pexels.com/video-files/3205917/3205917-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/80 z-10"></div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-amber-500 text-sm md:text-base uppercase tracking-[0.5em] mb-4">Michelin Starred Excellence</h2>
            <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 leading-tight">
              Culinary Artistry <br />
              <span className="italic text-slate-300">Redefined</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-light mb-12 max-w-2xl mx-auto">
              An immersive gastronomic journey curated by Executive Chef Laurent, featuring seasonal ingredients and avant-garde techniques.
            </p>
            <a 
              href="#menu"
              className="inline-flex items-center space-x-3 bg-amber-500 text-slate-950 px-8 py-4 rounded-full text-sm uppercase tracking-wider font-semibold hover:bg-amber-400 transition-colors"
            >
              <span>Explore Menu</span>
              <ChevronRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-slate-950 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-amber-500 text-sm uppercase tracking-widest mb-2">The Philosophy</h3>
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">Nature's Canvas</h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Every dish is a testament to the purity of nature, sourced directly from artisanal producers and our own organic gardens. We believe in minimal intervention to let the true essence of each ingredient shine through in a symphony of flavors and textures.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <ChefHat className="text-amber-500 mb-3" size={32} />
                  <h4 className="text-lg font-serif mb-2">Masterful Technique</h4>
                  <p className="text-sm text-slate-500">Decades of refinement in classical French techniques combined with modern innovation.</p>
                </div>
                <div>
                  <Utensils className="text-amber-500 mb-3" size={32} />
                  <h4 className="text-lg font-serif mb-2">Sourced Locally</h4>
                  <p className="text-sm text-slate-500">Partnering with regional farmers for the freshest seasonal produce available.</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="relative h-[600px] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" alt="Chef plating" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-8">
                <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-xl border border-white/10 w-full flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-1 text-amber-500 mb-1">
                      {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-sm text-slate-300 font-medium">"A transcendent dining experience."</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500 uppercase tracking-wider">The Times</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 bg-slate-900 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-amber-500 text-sm uppercase tracking-widest mb-2">Gastronomy</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-8">Curated Selections</h2>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {MENU_CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-2 rounded-full text-sm tracking-wider transition-all duration-300 ${
                    activeTab === category 
                      ? 'bg-amber-500 text-slate-950 font-semibold' 
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {MENU_ITEMS.filter(item => item.category === activeTab).map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-950 rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-500 border border-white/5"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <span className="bg-slate-950/80 backdrop-blur-md text-amber-500 px-3 py-1 rounded text-sm font-semibold border border-amber-500/20">
                        ${item.price}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-serif mb-2">{item.name}</h4>
                    <p className="text-slate-400 text-sm mb-6 h-10">{item.description}</p>
                    <button 
                      onClick={() => addToCart(item)}
                      className="w-full py-3 rounded-xl border border-amber-500/30 text-amber-500 font-medium tracking-wide hover:bg-amber-500 hover:text-slate-950 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Plus size={16} />
                      <span>Add to Order</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-20 border-t border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <div className="text-2xl font-serif tracking-widest text-amber-500 mb-6">L'ATELIER</div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Elevating gastronomy through passion, precision, and an unwavering commitment to excellence.
            </p>
          </div>
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin size={16} className="text-amber-500" />
                <span>123 Culinary Blvd, Epicurean District</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <Clock size={16} className="text-amber-500" />
                <span>Tue - Sun: 17:00 - 23:00</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Newsletter</h4>
            <div className="flex border border-white/10 rounded-full overflow-hidden">
              <input type="email" placeholder="Email address" className="bg-transparent px-4 py-2 w-full text-sm focus:outline-none" />
              <button className="bg-amber-500 text-slate-950 px-6 font-medium hover:bg-amber-400 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Shopping Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-slate-900 shadow-2xl z-[70] flex flex-col border-l border-white/10"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-slate-950">
                <h2 className="text-xl font-serif text-amber-500">Your Order</h2>
                <button onClick={() => setIsCartOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-slate-500 space-y-4">
                    <ShoppingBag size={48} className="opacity-20" />
                    <p>Your culinary journey awaits.</p>
                  </div>
                ) : (
                  cart.map((c) => (
                    <div key={c.item.id} className="flex space-x-4 bg-slate-950 p-4 rounded-xl border border-white/5">
                      <img src={c.item.image} alt={c.item.name} className="w-20 h-20 object-cover rounded-lg" />
                      <div className="flex-1">
                        <h4 className="font-serif text-sm text-slate-200 mb-1">{c.item.name}</h4>
                        <p className="text-amber-500 font-semibold mb-3">${c.item.price}</p>
                        <div className="flex items-center space-x-3 bg-slate-900 rounded-lg w-fit px-2 py-1">
                          <button onClick={() => updateQuantity(c.item.id, -1)} className="text-slate-400 hover:text-white">
                            <Minus size={14} />
                          </button>
                          <span className="text-sm w-4 text-center">{c.quantity}</span>
                          <button onClick={() => updateQuantity(c.item.id, 1)} className="text-slate-400 hover:text-white">
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 bg-slate-950 border-t border-white/10">
                  <div className="flex justify-between items-center mb-6 text-lg font-serif">
                    <span className="text-slate-400">Total</span>
                    <span className="text-amber-500 font-semibold">${cartTotal}</span>
                  </div>
                  <button 
                    onClick={checkoutWhatsApp}
                    className="w-full bg-amber-500 text-slate-950 py-4 rounded-xl font-bold tracking-wide flex items-center justify-center space-x-2 hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
                  >
                    <span>Checkout via WhatsApp</span>
                    <Send size={18} />
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
