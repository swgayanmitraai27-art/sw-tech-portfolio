import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BoutiqueWidget() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');

  const categories = ['All', 'Outerwear', 'Dresses', 'Accessories'];
  const sizes = ['All', 'XS', 'S', 'M', 'L', 'XL'];

  const items = [
    { id: 1, name: 'Obsidian Trench', category: 'Outerwear', size: 'M', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop' },
    { id: 2, name: 'Silk Serenade', category: 'Dresses', size: 'S', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop' },
    { id: 3, name: 'Leather Harness', category: 'Accessories', size: 'All', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop' },
    { id: 4, name: 'Cashmere Wrap', category: 'Outerwear', size: 'L', image: 'https://images.unsplash.com/photo-1588147820791-c1f96da6a3b2?q=80&w=1000&auto=format&fit=crop' },
    { id: 5, name: 'Midnight Gown', category: 'Dresses', size: 'M', image: 'https://images.unsplash.com/photo-1566160983993-80b6a22ffdb1?q=80&w=1000&auto=format&fit=crop' },
    { id: 6, name: 'Silver Cuff', category: 'Accessories', size: 'All', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop' },
  ];

  const filteredItems = items.filter(item => 
    (selectedCategory === 'All' || item.category === selectedCategory) &&
    (selectedSize === 'All' || item.size === 'All' || item.size === selectedSize)
  );

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-white selection:text-slate-950">
      
      {/* PAGE 1: HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col">
        <motion.div 
          style={{ y: yHero, opacity: opacityHero }}
          className="absolute inset-0 z-0"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-walking-in-slow-motion-42512-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
        </motion.div>
        
        <header className="relative z-20 flex justify-between items-center p-8 uppercase tracking-widest text-xs font-semibold">
          <div>Agent 17 / Atelier</div>
          <nav className="hidden md:flex gap-8">
            <a href="#concept" className="hover:text-slate-400 transition">Concept</a>
            <a href="#lookbook" className="hover:text-slate-400 transition">Lookbook</a>
            <a href="#editorial" className="hover:text-slate-400 transition">Editorial</a>
          </nav>
          <div>Cart (0)</div>
        </header>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-7xl md:text-[10rem] font-light tracking-tighter uppercase leading-none mix-blend-overlay"
          >
            Void
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 text-sm md:text-base font-light tracking-[0.3em] uppercase text-slate-300 max-w-xl"
          >
            Embracing the absence of color. The ultimate form of expression.
          </motion.p>
        </div>
      </section>

      {/* PAGE 2: CONCEPT / MANIFESTO */}
      <section id="concept" className="relative min-h-screen flex items-center py-24 z-20 bg-slate-950">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative aspect-square"
          >
            <img 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop" 
              alt="Concept Texture" 
              className="w-full h-full object-cover grayscale opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-light uppercase tracking-tighter">Form & Void</h2>
            <div className="w-12 h-[1px] bg-white"></div>
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              We deconstruct the boundaries between architecture and anatomy. Each garment is meticulously drafted to obscure the line where skin ends and fabric begins. 
              Our pieces are not worn; they are inhabited.
            </p>
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              The use of negative space allows the silhouette to breathe, transforming the wearer into a structural entity moving through the urban expanse.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PAGE 3: LOOKBOOK / SHOP */}
      <section id="lookbook" className="relative min-h-screen w-full max-w-screen-2xl mx-auto px-4 md:px-8 py-24 flex flex-col md:flex-row gap-12 z-20 bg-slate-950">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-shrink-0 flex flex-col gap-12 sticky top-24 h-fit border-l border-slate-900 pl-8">
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 mb-6 border-b border-slate-900 pb-4">Category</h3>
            <ul className="space-y-3">
              {categories.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs tracking-widest uppercase transition-colors hover:text-white ${selectedCategory === cat ? 'text-white' : 'text-slate-500'}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 mb-6 border-b border-slate-900 pb-4">Size</h3>
            <div className="flex flex-wrap gap-2">
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 border text-xs tracking-wider transition-all ${
                    selectedSize === size 
                      ? 'border-white bg-white text-slate-950' 
                      : 'border-slate-800 text-slate-400 hover:border-slate-400 hover:text-white'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Lookbook Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {filteredItems.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (index % 2) * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-slate-900 mb-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 flex justify-between items-end">
                  <span className="text-xs font-semibold tracking-widest uppercase border-b border-white pb-1">Acquire</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-300">{item.size !== 'All' ? `Size ${item.size}` : 'OS'}</span>
                </div>
              </div>
              <h4 className="text-base font-light tracking-widest uppercase">{item.name}</h4>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">{item.category}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* PAGE 4: EDITORIAL GALLERY */}
      <section id="editorial" className="relative min-h-screen w-full bg-slate-900 py-32 z-20 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className="text-center mb-24">
            <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-slate-400 mb-4">Editorial</h2>
            <p className="text-4xl md:text-5xl font-light uppercase tracking-tighter">Shadow Play</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="md:col-span-2 aspect-[16/9] relative group overflow-hidden"
            >
              <img src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105" alt="Editorial 1" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="aspect-[3/4] relative group overflow-hidden md:mt-32"
            >
              <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105" alt="Editorial 2" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PAGE 5: FOOTER */}
      <footer className="relative min-h-[70vh] flex flex-col justify-between pt-32 pb-12 z-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 w-full flex-1 flex flex-col md:flex-row justify-between gap-16">
          <div className="max-w-sm">
            <h2 className="text-3xl font-light uppercase tracking-tighter mb-6">Maison Void</h2>
            <p className="text-sm text-slate-500 font-light leading-loose">
              Join the syndicate to receive exclusive access to capsule drops and private viewings.
            </p>
            <div className="mt-8 flex border-b border-slate-800 pb-2">
              <input type="email" placeholder="Email Address" className="bg-transparent outline-none flex-1 text-sm tracking-widest placeholder-slate-700" />
              <button className="text-xs uppercase tracking-widest text-slate-400 hover:text-white transition">Subscribe</button>
            </div>
          </div>
          
          <div className="flex gap-16 text-sm">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600 mb-2">Connect</span>
              <a href="#" className="text-slate-400 hover:text-white transition">Instagram</a>
              <a href="#" className="text-slate-400 hover:text-white transition">Twitter</a>
              <a href="#" className="text-slate-400 hover:text-white transition">Pinterest</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600 mb-2">Client Services</span>
              <a href="#" className="text-slate-400 hover:text-white transition">Shipping</a>
              <a href="#" className="text-slate-400 hover:text-white transition">Returns</a>
              <a href="#" className="text-slate-400 hover:text-white transition">Contact</a>
            </div>
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 w-full mt-24 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-slate-600">
          <p>&copy; {new Date().getFullYear()} Maison Void. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-400">Privacy</a>
            <a href="#" className="hover:text-slate-400">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
