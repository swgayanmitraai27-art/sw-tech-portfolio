'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  Utensils, Cake, Dumbbell, Scissors, ShoppingCart,
  BookOpen, Stethoscope, Building, Hammer, Shirt,
  Car, Camera, Tent, Wrench, Scale, Hotel, Truck
} from 'lucide-react';

const categories = [
  { id: 1, name: 'Restaurants & Cafes', icon: Utensils, route: '/templates/restaurant', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600', mockFeature: 'WhatsApp Ordering System' },
  { id: 2, name: 'Bakeries & Cake Shops', icon: Cake, route: '/templates/bakery', image: 'https://images.unsplash.com/photo-1551024506-0cb4a1cb1c26?auto=format&fit=crop&q=80&w=600', mockFeature: 'Custom Cake Builder' },
  { id: 3, name: 'Fitness Gyms', icon: Dumbbell, route: '#', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600', mockFeature: 'Class Scheduling & Memberships' },
  { id: 4, name: 'Hair Salons & Spas', icon: Scissors, route: '#', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600', mockFeature: 'Appointment Booking' },
  { id: 5, name: 'Local Kirana', icon: ShoppingCart, route: '#', image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=600', mockFeature: 'Same-day Delivery Cart' },
  { id: 6, name: 'Tuition Classes', icon: BookOpen, route: '#', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600', mockFeature: 'Video Course Portal' },
  { id: 7, name: 'Doctors & Clinics', icon: Stethoscope, route: '#', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600', mockFeature: 'Tele-consultation' },
  { id: 8, name: 'Real Estate', icon: Building, route: '#', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600', mockFeature: 'Virtual 3D Tours' },
  { id: 9, name: 'Hardware Shops', icon: Hammer, route: '#', image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=600', mockFeature: 'Bulk Order Quotation' },
  { id: 10, name: 'Boutiques', icon: Shirt, route: '#', image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=600', mockFeature: 'Lookbook Gallery' },
  { id: 11, name: 'Automobile', icon: Car, route: '#', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=600', mockFeature: 'Test Drive Booking' },
  { id: 12, name: 'Photography', icon: Camera, route: '#', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600', mockFeature: 'Client Portfolio Access' },
  { id: 13, name: 'Wedding Lawns', icon: Tent, route: '#', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=600', mockFeature: 'Event Date Availability' },
  { id: 14, name: 'Electronics Repair', icon: Wrench, route: '#', image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80&w=600', mockFeature: 'Repair Status Tracker' },
  { id: 15, name: 'Legal/CA', icon: Scale, route: '#', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600', mockFeature: 'Document Vault' },
  { id: 16, name: 'Hotels', icon: Hotel, route: '#', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600', mockFeature: 'Room Reservation Engine' },
  { id: 17, name: 'Packers & Movers', icon: Truck, route: '#', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600', mockFeature: 'Instant Cost Estimator' }
];

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-950">
      {/* Background Mesh */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2560"
          alt="Abstract Mesh"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mb-6 tracking-tight">
              Hyper-Premium B2B Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 max-w-3xl mx-auto">
              Your business funnel, upgraded. Discover 17 industry-specific templates designed for high conversion.
            </p>
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-blue-500 blur-xl opacity-50 rounded-full animate-pulse" />
              <div className="relative bg-slate-900 border border-slate-700 px-8 py-4 rounded-full text-blue-400 font-semibold uppercase tracking-widest text-sm">
                Live in 24 Hours
              </div>
            </div>
          </motion.div>
        </div>

        {/* 17-Category Funnel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover="hover"
            >
              <Link href={cat.route} className="block h-full">
                <div className="relative h-64 rounded-2xl overflow-hidden group border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                        <cat.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                        {cat.name}
                      </h3>
                    </div>
                    
                    <motion.div
                      variants={{
                        hover: { height: 'auto', opacity: 1, marginTop: 12 },
                      }}
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-slate-800/80 backdrop-blur-md rounded-lg p-3 text-sm text-slate-300 border border-slate-700">
                        <span className="text-blue-400 font-medium text-xs uppercase tracking-wider block mb-1">Interactive Feature</span>
                        {cat.mockFeature}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
