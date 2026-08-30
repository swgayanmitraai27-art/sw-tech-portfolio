import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, Calendar, CheckCircle2, Star, Users, 
  BookOpen, Trophy, ArrowRight, ArrowLeft, Clock, MapPin, 
  GraduationCap, Target 
} from 'lucide-react';

export default function CoachingWidget() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedBatch, setSelectedBatch] = useState<number | null>(null);

  const batches = [
    { id: 1, name: "JEE Advanced Target 2027", schedule: "Mon-Wed-Fri", time: "16:00 - 19:00", capacity: 40, enrolled: 35, instructor: "Dr. H.C. Verma" },
    { id: 2, name: "NEET Elite Batch", schedule: "Tue-Thu-Sat", time: "15:00 - 18:30", capacity: 50, enrolled: 50, instructor: "Dr. A. K. Singh" },
    { id: 3, name: "Foundation Class 10", schedule: "Mon-Thu", time: "17:00 - 19:00", capacity: 30, enrolled: 12, instructor: "Prof. R. Kumar" },
    { id: 4, name: "Crash Course Olympiad", schedule: "Sat-Sun", time: "10:00 - 14:00", capacity: 25, enrolled: 18, instructor: "V. Sharma" }
  ];

  const steps = [
    { title: "Personal Details", id: "personal" },
    { title: "Course Selection", id: "course" },
    { title: "Academic Background", id: "academic" },
    { title: "Review & Submit", id: "review" }
  ];

  const handleNext = () => setActiveStep(prev => Math.min(prev + 1, steps.length - 1));
  const handlePrev = () => setActiveStep(prev => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop" 
            alt="Students collaborating" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium text-emerald-400 bg-emerald-400/10 ring-1 ring-inset ring-emerald-400/20 mb-8">
              Admissions Open 2026-27
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg">
              Forge Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Academic Future</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              Premium coaching methodologies combined with state-of-the-art learning infrastructure to unlock your maximum potential.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-full font-semibold text-white shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 transition-all"
                onClick={() => document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Journey <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full font-semibold text-white border border-white/20 transition-all flex items-center justify-center gap-2"
                onClick={() => document.getElementById('batches')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Batches <Calendar className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 z-10"
        >
          <div className="w-[30px] h-[50px] rounded-full border-2 border-slate-400 flex justify-center p-2">
            <div className="w-1 h-3 bg-slate-400 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Features Matrix */}
      <section className="py-24 relative z-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Pedagogy Advantage</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Precision Targeting", desc: "Adaptive curriculum tailored to individual cognitive maps and testing patterns." },
              { icon: Users, title: "Micro-Batches", desc: "1:15 faculty to student ratio ensuring personalized attention and doubt resolution." },
              { icon: Trophy, title: "Proven Legacy", desc: "Consistent top-tier ranks in national level competitive examinations since 2010." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Batch Availability Matrix */}
      <section id="batches" className="py-24 bg-slate-900 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2940&auto=format&fit=crop')] opacity-5 mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Batch Availability Matrix</h2>
              <p className="text-slate-400 max-w-2xl">Real-time capacity tracking for upcoming academic sessions.</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-4">
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-emerald-500" /> Open</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-amber-500" /> Filling Fast</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-500" /> Full</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {batches.map((batch) => {
              const occupancyRate = batch.enrolled / batch.capacity;
              const statusColor = occupancyRate >= 1 ? 'bg-red-500' : occupancyRate > 0.8 ? 'bg-amber-500' : 'bg-emerald-500';
              const isSelected = selectedBatch === batch.id;
              
              return (
                <motion.div 
                  key={batch.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedBatch(batch.id)}
                  className={`cursor-pointer rounded-2xl p-6 border transition-all ${isSelected ? 'border-blue-500 bg-blue-500/10' : 'border-slate-800 bg-slate-950/50 hover:border-slate-700'}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{batch.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {batch.schedule}</span>
                        <span className="flex items-center gap-1"><GraduationCap className="w-4 h-4" /> {batch.instructor}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{batch.time}</div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Capacity: {batch.enrolled}/{batch.capacity}</span>
                      <span className={`${occupancyRate >= 1 ? 'text-red-400' : occupancyRate > 0.8 ? 'text-amber-400' : 'text-emerald-400'} font-medium`}>
                        {occupancyRate >= 1 ? 'Waitlist Only' : occupancyRate > 0.8 ? 'Few Seats Left' : 'Available'}
                      </span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(batch.enrolled / batch.capacity) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full ${statusColor}`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Admission Inquiry Stepper */}
      <section id="admissions" className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Begin Your Journey</h2>
            <p className="text-slate-400">Complete the inquiry form to schedule counseling.</p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl">
            {/* Stepper Header */}
            <div className="flex justify-between mb-12 relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -z-10 -translate-y-1/2" />
              <motion.div 
                className="absolute top-1/2 left-0 h-1 bg-blue-500 -z-10 -translate-y-1/2" 
                initial={false}
                animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
              
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${idx <= activeStep ? 'bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-slate-800 text-slate-500'}`}>
                    {idx < activeStep ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                  </div>
                  <span className={`text-xs font-medium hidden md:block ${idx <= activeStep ? 'text-blue-400' : 'text-slate-500'}`}>{step.title}</span>
                </div>
              ))}
            </div>

            {/* Stepper Content */}
            <div className="min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeStep === 0 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-400">Full Name</label>
                          <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-400">Email Address</label>
                          <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <label className="text-sm font-medium text-slate-400">Phone Number</label>
                          <input type="tel" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="+91 98765 43210" />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStep === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Select Program</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {['Engineering (JEE)', 'Medical (NEET)', 'Foundation (Class 8-10)', 'Olympiads'].map((course, idx) => (
                          <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:border-blue-500 transition-colors">
                            <div className="w-5 h-5 rounded-full border border-slate-600 flex-shrink-0" />
                            <span className="text-white font-medium">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Academic Background</h3>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-400">Current Grade/Class</label>
                          <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 appearance-none">
                            <option>Class 10</option>
                            <option>Class 11</option>
                            <option>Class 12</option>
                            <option>Dropper</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-400">Previous School Name</label>
                          <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Enter school name" />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div className="space-y-6 text-center py-10">
                      <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Star className="w-10 h-10 text-blue-400" />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">Ready to Submit!</h3>
                      <p className="text-slate-400 max-w-md mx-auto">Please review your details. Our academic counselors will reach out to you within 24 hours.</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Stepper Controls */}
            <div className="flex justify-between mt-12 pt-6 border-t border-slate-800">
              <button
                onClick={handlePrev}
                disabled={activeStep === 0}
                className={`px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-colors ${activeStep === 0 ? 'text-slate-600 cursor-not-allowed' : 'text-white bg-slate-800 hover:bg-slate-700'}`}
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              
              <button
                onClick={handleNext}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all"
              >
                {activeStep === steps.length - 1 ? 'Submit Application' : 'Next Step'} {activeStep !== steps.length - 1 && <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center">
        <p className="text-slate-500 text-sm">© 2026 Academic Excellence Institute. All rights reserved.</p>
      </footer>
    </div>
  );
}
