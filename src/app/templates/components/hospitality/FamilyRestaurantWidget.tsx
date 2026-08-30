'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Users, Ticket, CalendarDays, Clock, MapPin, ChevronRight, CheckCircle2, Star, ChefHat, Info } from 'lucide-react';

// Types
type Page = 'home' | 'menu' | 'booking' | 'events' | 'about';
type Table = { id: string; seats: number; status: 'available' | 'booked' | 'selected'; x: number; y: number };

const FamilyRestaurantWidget = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [guests, setGuests] = useState<number>(2);
  const [tables, setTables] = useState<Table[]>([
    { id: 'T1', seats: 2, status: 'available', x: 20, y: 20 },
    { id: 'T2', seats: 4, status: 'booked', x: 50, y: 20 },
    { id: 'T3', seats: 6, status: 'available', x: 80, y: 30 },
    { id: 'T4', seats: 4, status: 'available', x: 20, y: 60 },
    { id: 'T5', seats: 8, status: 'booked', x: 60, y: 70 },
  ]);
  const [discountCode, setDiscountCode] = useState<string>('');
  const [appliedDiscount, setAppliedDiscount] = useState<string | null>(null);

  // Group discounts logic
  const handleApplyDiscount = () => {
    if (discountCode.toUpperCase() === 'FAMILY15' && guests >= 4) {
      setAppliedDiscount('15% off family dinner');
    } else if (discountCode.toUpperCase() === 'PARTY20' && guests >= 6) {
      setAppliedDiscount('20% off large group booking');
    } else {
      setAppliedDiscount('Invalid code or guest requirement not met');
    }
  };

  const handleTableSelect = (id: string) => {
    setTables(tables.map(t => {
      if (t.status === 'booked') return t;
      if (t.id === id) return { ...t, status: t.status === 'selected' ? 'available' : 'selected' };
      return { ...t, status: t.status === 'selected' ? 'available' : t.status }; // Single select
    }));
  };

  const renderNav = () => (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ChefHat className="text-amber-500 w-8 h-8" />
          <span className="text-2xl font-bold text-white tracking-wider">OAK & EMBER</span>
        </div>
        <div className="hidden md:flex gap-8">
          {(['home', 'menu', 'booking', 'events', 'about'] as Page[]).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`uppercase tracking-widest text-sm font-medium transition-colors ${
                currentPage === page ? 'text-amber-500' : 'text-slate-300 hover:text-white'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button 
          onClick={() => setCurrentPage('booking')}
          className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-2 rounded-full font-medium transition-all"
        >
          Book a Table
        </button>
      </div>
    </nav>
  );

  const renderHome = () => (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen relative"
    >
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay loop muted playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2015/09/25/827-140683407_tiny.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-serif text-white mb-6"
        >
          Taste the <br/><span className="text-amber-500 italic">Tradition</span>
        </motion.h1>
        <motion.p 
          initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
          className="text-xl text-slate-200 max-w-2xl mb-12 font-light"
        >
          Experience culinary excellence where family recipes meet modern gastronomy in the heart of the city.
        </motion.p>
        <motion.button 
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6 }}
          onClick={() => setCurrentPage('booking')}
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-amber-600 rounded-full overflow-hidden transition-all hover:bg-amber-500"
        >
          <span className="relative z-10 flex items-center gap-2">
            Reserve Your Experience <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </motion.button>
      </div>
    </motion.div>
  );

  const renderBooking = () => (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen pt-28 pb-20 px-6 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif text-white mb-12 text-center">Reserve Your Table</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-medium text-white mb-6 flex items-center gap-2">
              <CalendarDays className="text-amber-500" /> Booking Details
            </h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Date</label>
                  <input type="date" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500" />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Time</label>
                  <select className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500">
                    <option>18:00</option><option>19:00</option><option>20:00</option><option>21:00</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">Number of Guests</label>
                <div className="flex items-center gap-4">
                  <button onClick={() => setGuests(Math.max(1, guests - 1))} className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700">-</button>
                  <span className="text-2xl font-medium text-white w-8 text-center">{guests}</span>
                  <button onClick={() => setGuests(Math.min(20, guests + 1))} className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700">+</button>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800">
                <label className="block text-sm text-slate-400 mb-2">Group Discount Code (Groups 4+)</label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Ticket className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="text" 
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      placeholder="e.g. FAMILY15" 
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-amber-500 uppercase"
                    />
                  </div>
                  <button onClick={handleApplyDiscount} className="bg-slate-700 hover:bg-slate-600 px-6 rounded-lg text-white font-medium transition-colors">Apply</button>
                </div>
                {appliedDiscount && (
                  <p className={`mt-2 text-sm ${appliedDiscount.includes('Invalid') ? 'text-red-400' : 'text-green-400 flex items-center gap-1'}`}>
                    {!appliedDiscount.includes('Invalid') && <CheckCircle2 className="w-4 h-4" />} {appliedDiscount}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Table Selector */}
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-medium text-white flex items-center gap-2">
                <MapPin className="text-amber-500" /> Select a Table
              </h3>
              <div className="flex gap-4 text-sm">
                <span className="flex items-center gap-1 text-slate-400"><div className="w-3 h-3 rounded-full bg-slate-700"></div> Available</span>
                <span className="flex items-center gap-1 text-slate-400"><div className="w-3 h-3 rounded-full bg-red-900"></div> Booked</span>
                <span className="flex items-center gap-1 text-slate-400"><div className="w-3 h-3 rounded-full bg-amber-500"></div> Selected</span>
              </div>
            </div>

            <div className="relative flex-1 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden min-h-[400px]">
              {/* Floor Plan Elements */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 px-8 py-2 bg-slate-800 rounded-b-xl text-slate-400 text-sm font-medium border border-slate-700">KITCHEN</div>
              <div className="absolute bottom-4 left-4 px-4 py-8 bg-slate-800 rounded-xl text-slate-400 text-sm font-medium border border-slate-700" style={{ writingMode: 'vertical-rl' }}>BAR AREA</div>
              
              {/* Tables */}
              {tables.map((table) => (
                <button
                  key={table.id}
                  onClick={() => handleTableSelect(table.id)}
                  disabled={table.status === 'booked' || table.seats < guests}
                  className={`absolute flex items-center justify-center transition-all duration-300 shadow-lg ${
                    table.status === 'booked' ? 'bg-red-950/50 border-red-900/50 text-red-700 cursor-not-allowed' :
                    table.status === 'selected' ? 'bg-amber-500/20 border-amber-500 text-amber-500 shadow-amber-500/20' :
                    table.seats < guests ? 'bg-slate-800/30 border-slate-700/50 text-slate-600 cursor-not-allowed' :
                    'bg-slate-800 border-slate-600 text-slate-300 hover:border-amber-500/50 hover:bg-slate-700'
                  }`}
                  style={{
                    left: `${table.x}%`,
                    top: `${table.y}%`,
                    width: table.seats > 4 ? '120px' : '80px',
                    height: table.seats > 4 ? '80px' : '80px',
                    borderRadius: table.seats > 4 ? '40px' : '50%',
                    borderWidth: '2px',
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="text-center">
                    <span className="block text-xs font-bold">{table.id}</span>
                    <span className="block text-[10px] opacity-70 flex items-center justify-center gap-1">
                      <Users className="w-3 h-3" /> {table.seats}
                    </span>
                  </div>
                </button>
              ))}
            </div>
            
            <button 
              disabled={!tables.some(t => t.status === 'selected')}
              className="mt-6 w-full py-4 bg-amber-600 disabled:bg-slate-800 disabled:text-slate-500 hover:bg-amber-500 text-white font-bold rounded-xl transition-colors"
            >
              Confirm Reservation
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderPlaceholder = (title: string) => (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen pt-28 pb-20 px-6 bg-slate-950 flex flex-col items-center justify-center"
    >
      <Utensils className="w-16 h-16 text-slate-800 mb-6" />
      <h2 className="text-4xl font-serif text-white mb-4">{title}</h2>
      <p className="text-slate-400 max-w-md text-center">This section is currently being curated by our executive chefs. Check back soon for updates.</p>
      <button onClick={() => setCurrentPage('home')} className="mt-8 text-amber-500 hover:text-amber-400 font-medium">Return Home</button>
    </motion.div>
  );

  return (
    <div className="font-sans bg-slate-950 text-slate-50 min-h-screen selection:bg-amber-500/30">
      {renderNav()}
      <AnimatePresence mode="wait">
        {currentPage === 'home' && renderHome()}
        {currentPage === 'booking' && renderBooking()}
        {currentPage === 'menu' && renderPlaceholder('Our Menu')}
        {currentPage === 'events' && renderPlaceholder('Private Events')}
        {currentPage === 'about' && renderPlaceholder('Our Story')}
      </AnimatePresence>
    </div>
  );
};

export default FamilyRestaurantWidget;
