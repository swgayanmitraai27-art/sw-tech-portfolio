'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  Utensils, Cake, Dumbbell, Scissors, ShoppingCart,
  BookOpen, Stethoscope, Building, Hammer, Shirt,
  Car, Camera, Tent, Wrench, Scale, Hotel, Truck,
  Code2, Database, Globe, Layers, Server, Cpu, CheckCircle2,
  Phone, MessageSquare, Zap, Target, CreditCard, Bot, Cloud, Smartphone
} from 'lucide-react';

const frameworks = [
  { name: 'Next.js & React', icon: Globe },
  { name: 'Node.js & Express', icon: Server },
  { name: 'TypeScript & Python', icon: Code2 },
  { name: 'iOS & Android App Dev', icon: Smartphone },
  { name: 'Payment Gateways', icon: CreditCard },
  { name: 'AI Servers & LLMs', icon: Bot },
  { name: 'VPS & Cloud Hosting', icon: Cloud },
  { name: 'Tailwind CSS', icon: Layers },
  { name: 'PostgreSQL & MongoDB', icon: Database },
  { name: 'Cloudflare Workers', icon: Cpu },
  { name: 'Playwright Web Scraping', icon: Target }
];

const metrics = [
  { value: '100+', label: 'Specialized AI Agents Ready to Handle Your Operations' },
  { value: '150+', label: 'Custom Web & App Solutions Successfully Delivered' },
  { value: '24-Hour', label: 'Express Development Time Guarantee' },
  { value: '100%', label: 'Mobile Responsive Optimization Rating' }
];

const categories = [
  { id: 1, name: 'Restaurants & Cafes', icon: Utensils, route: '/templates/restaurant', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800', mockFeature: 'WhatsApp Ordering System' },
  { id: 2, name: 'Bakeries & Cake Shops', icon: Cake, route: '/templates/bakery', image: 'https://images.unsplash.com/photo-1551024506-0cb4a1cb1c26?auto=format&fit=crop&q=80&w=800', mockFeature: 'Custom Cake Builder' },
  { id: 3, name: 'Fitness Gyms', icon: Dumbbell, route: '#', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800', mockFeature: 'Class Scheduling & Memberships' },
  { id: 4, name: 'Hair Salons & Spas', icon: Scissors, route: '#', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800', mockFeature: 'Appointment Booking' },
  { id: 5, name: 'Local Kirana', icon: ShoppingCart, route: '#', image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=800', mockFeature: 'Same-day Delivery Cart' },
  { id: 6, name: 'Tuition Classes', icon: BookOpen, route: '#', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800', mockFeature: 'Video Course Portal' },
  { id: 7, name: 'Doctors & Clinics', icon: Stethoscope, route: '#', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800', mockFeature: 'Tele-consultation' },
  { id: 8, name: 'Real Estate', icon: Building, route: '#', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800', mockFeature: 'Virtual 3D Tours' },
  { id: 9, name: 'Hardware Shops', icon: Hammer, route: '#', image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=800', mockFeature: 'Bulk Order Quotation' },
  { id: 10, name: 'Boutiques', icon: Shirt, route: '#', image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800', mockFeature: 'Lookbook Gallery' },
  { id: 11, name: 'Automobile', icon: Car, route: '#', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800', mockFeature: 'Test Drive Booking' },
  { id: 12, name: 'Photography', icon: Camera, route: '#', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800', mockFeature: 'Client Portfolio Access' },
  { id: 13, name: 'Wedding Lawns', icon: Tent, route: '#', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800', mockFeature: 'Event Date Availability' },
  { id: 14, name: 'Electronics Repair', icon: Wrench, route: '#', image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80&w=800', mockFeature: 'Repair Status Tracker' },
  { id: 15, name: 'Legal/CA', icon: Scale, route: '#', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800', mockFeature: 'Document Vault' },
  { id: 16, name: 'Hotels', icon: Hotel, route: '#', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800', mockFeature: 'Room Reservation Engine' },
  { id: 17, name: 'Packers & Movers', icon: Truck, route: '#', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800', mockFeature: 'Instant Cost Estimator' }
];

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2560"
          alt="Abstract Mesh"
          fill
          className="object-cover opacity-10 mix-blend-screen"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/95 to-slate-950" />
      </div>

      <div className="relative z-10">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 text-purple-400 border border-purple-500/20 px-4 py-2 rounded-full text-sm font-semibold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              <Bot className="w-4 h-4" />
              <span>The First AI Agenting Agency</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-200 to-indigo-500 mb-8 tracking-tight">
              Hyper-Premium B2B Portfolio
            </h1>
            
            <div className="max-w-4xl mx-auto bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 mb-12 shadow-2xl">
              <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-6">
                <strong className="text-white font-medium">Full-Stack Software & App Architecture</strong> + <strong className="text-white font-medium">100+ AI Agents Workforce</strong> + <strong className="text-white font-medium">Automated Lead Scraping</strong> + <strong className="text-white font-medium">VPS Servers</strong>
              </p>
              <p className="text-slate-400 text-lg">
                We handle everything from App Development, scratch infrastructure scripting, VPS deployment, AI LLM configurations, Razorpay/Stripe integrations, to premium UI rendering. Our fleet of <strong className="text-white">100+ AI Agents</strong> is ready to handle and automate your entire operational workflow.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center px-4"
                >
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-3">
                    {metric.value}
                  </div>
                  <div className="text-slate-400 font-medium text-sm uppercase tracking-wide">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Full-Stack Mastery Console</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Advanced technical frameworks executed with absolute precision and mastery.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {frameworks.map((fw, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative w-48"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="relative h-full flex flex-col items-center justify-center p-6 bg-slate-900/80 border border-slate-800 rounded-xl hover:border-blue-500/50 transition-colors backdrop-blur-sm">
                  <fw.icon className="w-8 h-8 text-slate-400 group-hover:text-blue-400 mb-4 transition-colors" />
                  <span className="text-slate-200 font-medium text-center text-sm">{fw.name}</span>
                  
                  <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                    <div className="bg-blue-500 text-white text-xs font-bold py-1.5 px-3 rounded shadow-xl whitespace-nowrap">
                      5+ Years Expert Mastery
                    </div>
                    <div className="w-2 h-2 bg-blue-500 rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-slate-800/50">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Industry-Specific Master Templates</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Hyper-optimized layouts engineered for maximum conversion in specific local niches.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover="hover"
                className="h-full"
              >
                <Link href={cat.route} className="block h-full">
                  <div className="relative h-72 rounded-2xl overflow-hidden group border border-slate-800 bg-slate-900 shadow-2xl transition-all duration-500 hover:border-blue-500 hover:shadow-blue-500/20">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                    
                    <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end h-full">
                      <div className="flex items-center space-x-3 mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="p-2.5 bg-blue-500/20 backdrop-blur-md rounded-lg text-blue-400 border border-blue-500/30">
                          <cat.icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                          {cat.name}
                        </h3>
                      </div>
                      
                      <motion.div
                        variants={{
                          hover: { height: 'auto', opacity: 1 },
                        }}
                        initial={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-slate-950/80 backdrop-blur-xl rounded-lg p-3.5 text-sm text-slate-300 border border-slate-700/50 shadow-inner mt-2">
                          <div className="flex items-center space-x-2 text-blue-400 font-semibold text-xs uppercase tracking-wider mb-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Core Feature</span>
                          </div>
                          {cat.mockFeature}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="bg-slate-900/50 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-extrabold text-white mb-4">Initialize Project</h2>
                <p className="text-slate-400 text-lg mb-8">Deploy state-of-the-art infrastructure for your business in under 24 hours.</p>
                
                <div className="space-y-4">
                  <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="flex items-center space-x-4 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 p-4 rounded-2xl transition-colors group">
                    <div className="bg-green-500 p-3 rounded-xl text-white group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">WhatsApp Direct</h4>
                      <p className="text-green-400 text-sm">Instant Chat Protocol</p>
                    </div>
                  </a>
                  
                  <a href="tel:+1234567890" className="flex items-center space-x-4 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 p-4 rounded-2xl transition-colors group">
                    <div className="bg-blue-500 p-3 rounded-xl text-white group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Active Calling Dial</h4>
                      <p className="text-blue-400 text-sm">Speak with the Architect</p>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 md:p-8">
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Client Name</label>
                    <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Business Category</label>
                    <select className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 appearance-none">
                      <option value="">Select Niche Target</option>
                      {categories.map(c => (
                        <option key={c.id} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Contact Number</label>
                    <input type="tel" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Mission Requirements</label>
                    <textarea rows="3" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Detail your project objectives..." />
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/25 transition-all active:scale-[0.98]">
                    Deploy Request Sequence
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
