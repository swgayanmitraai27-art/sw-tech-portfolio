import { niches } from '@/data/niches';
import { notFound } from 'next/navigation';
import * as React from 'react';

export default async function ContactPage(props: { params: Promise<{ niche: string }> }) {
  const { niche } = await props.params;
  const data = niches[niche];
  if (!data) return notFound();

  return (
    <main className="min-h-screen pt-32 pb-20 relative z-10 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000 fill-mode-both">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Connect & <br/>
            <span className={`text-${data.accent}`}>Engage</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-md">
            Ready to deploy this hyper-premium {data.name} architecture? Book a consultation or leave an inquiry.
          </p>
          <div className="space-y-6 pt-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold">
                @
              </div>
              <div>
                <div className="text-sm text-slate-500 font-medium">Email</div>
                <div className="text-lg text-white">hello@hyperpremium.dev</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold">
                W
              </div>
              <div>
                <div className="text-sm text-slate-500 font-medium">WhatsApp</div>
                <div className="text-lg text-white">+1 (555) 000-0000</div>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-in fade-in slide-in-from-right-8 duration-1000 fill-mode-both delay-300">
          <form className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Send an Inquiry</h3>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">Full Name</label>
              <input type="text" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">Email Address</label>
              <input type="email" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">Message / Request</label>
              <textarea rows={4} className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="How can we help?" />
            </div>
            <button type="button" className={`w-full py-4 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-200 transition-colors mt-4`}>
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
