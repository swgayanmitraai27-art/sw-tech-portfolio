'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Info, Phone, Grid, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export function FloatingDock({ niche, accent }: { niche: string, accent: string }) {
  const pathname = usePathname();
  
  const links = [
    { name: 'Home', href: `/templates/${niche}`, icon: Home },
    { name: 'About', href: `/templates/${niche}/about`, icon: Info },
    { name: 'Services', href: `/templates/${niche}/services`, icon: Layers },
    { name: 'Gallery', href: `/templates/${niche}/gallery`, icon: Grid },
    { name: 'Contact', href: `/templates/${niche}/contact`, icon: Phone },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300, delay: 1 }}
        className="flex items-center space-x-2 px-4 py-3 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl"
      >
        {links.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          return (
            <Link key={link.name} href={link.href} className="relative group px-4 py-2 rounded-full transition-all">
              {isActive && (
                <motion.div 
                  layoutId="dock-bubble" 
                  className={`absolute inset-0 bg-${accent}/20 border border-${accent}/30 rounded-full z-0`} 
                />
              )}
              <div className={`relative z-10 flex items-center space-x-2 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                <Icon size={16} />
                <span className="text-sm font-medium hidden md:block">{link.name}</span>
              </div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
