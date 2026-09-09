import { niches } from '@/data/niches';
import { notFound } from 'next/navigation';
import * as React from 'react';

export default async function ContactPage(props: { params: Promise<{ niche: string }> }) {
  const { niche } = await props.params;
  const data = niches[niche];
  if (!data) return notFound();

  return (
    <main className="min-h-screen pt-32 pb-32 relative z-10 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-[30rem] h-[30rem] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000 fill-mode-both">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-300">Executive Support</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">
            Connect & <br/>
            <span className={`text-${data.accent} italic`}>Engage</span>
          </h2>
          <div className="w-20 h-1 bg-white/20 rounded-full" />
          <p className="text-xl text-slate-300 font-light leading-relaxed max-w-md">
            Ready to deploy this hyper-premium {data.name} architecture? Book a private consultation or leave a detailed inquiry.
          </p>
          <div className="space-y-8 pt-8">
            <div className="flex items-center space-x-6 group cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-serif text-2xl group-hover:bg-white group-hover:text-black transition-all">
                @
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-[0.1em] font-bold mb-1">Direct Email</div>
                <div className="text-xl text-white font-serif">hello@hyperpremium.dev</div>
              </div>
            </div>
            <div className="flex items-center space-x-6 group cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-serif text-2xl group-hover:bg-white group-hover:text-black transition-all">
                W
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-[0.1em] font-bold mb-1">WhatsApp Desk</div>
                <div className="text-xl text-white font-serif">+91 8303 994 616</div>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-in fade-in slide-in-from-right-8 duration-1000 fill-mode-both delay-300">
          <form className="bg-slate-900/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 space-y-8 shadow-2xl relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-2 bg-${data.accent}`} />
            <h3 className="text-3xl font-serif text-white mb-8">Send an Inquiry</h3>
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.1em] font-bold text-slate-400">Full Name</label>
              <input type="text" className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white font-serif focus:outline-none focus:border-white/40 transition-colors" placeholder="John Doe" />
            </div>
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.1em] font-bold text-slate-400">Email Address</label>
              <input type="email" className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white font-serif focus:outline-none focus:border-white/40 transition-colors" placeholder="john@example.com" />
            </div>
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.1em] font-bold text-slate-400">Message / Request</label>
              <textarea rows={5} className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white font-serif focus:outline-none focus:border-white/40 transition-colors resize-none" placeholder="How can we assist you?" />
            </div>
            <button type="button" className={`w-full py-5 rounded-2xl bg-white text-slate-950 font-bold tracking-wider uppercase hover:bg-slate-200 transition-all hover:scale-[1.02] mt-4`}>
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
