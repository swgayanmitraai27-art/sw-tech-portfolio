import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, ChevronRight, ChevronLeft, BookOpen, Users, Calendar, Award, Bell, Search, Menu } from 'lucide-react';

// Main Component
export default function SchoolWidget() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentSlide, setCurrentSlide] = useState(0);

  const curriculum = [
    { title: "Advanced Mathematics", grade: "Grade 10-12", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800" },
    { title: "Quantum Physics Introduction", grade: "Grade 11-12", image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800" },
    { title: "World History", grade: "Grade 9-12", image: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&q=80&w=800" }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % curriculum.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + curriculum.length) % curriculum.length);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <BookOpen className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">EduPortal</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => setActiveTab('dashboard')} className={`text-sm font-medium ${activeTab === 'dashboard' ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'}`}>Dashboard</button>
            <button onClick={() => setActiveTab('curriculum')} className={`text-sm font-medium ${activeTab === 'curriculum' ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'}`}>Curriculum</button>
            <button onClick={() => setActiveTab('registration')} className={`text-sm font-medium ${activeTab === 'registration' ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'}`}>Admissions</button>
          </div>
          <div className="flex items-center gap-4">
            <Search className="w-5 h-5 text-slate-500 cursor-pointer" />
            <Bell className="w-5 h-5 text-slate-500 cursor-pointer" />
            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100" alt="User" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000" alt="Campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 text-indigo-200 text-sm font-medium mb-6 border border-indigo-500/30 backdrop-blur-sm">
            Excellence in Education Since 1924
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Empowering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Next Generation</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            A comprehensive digital ecosystem for students, educators, and administrators to thrive together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all shadow-lg shadow-indigo-600/30">
              Explore Programs
            </button>
            <button className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-all backdrop-blur-md border border-white/20">
              Virtual Tour
            </button>
          </div>
        </motion.div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-20 relative z-20">
        
        {/* Dual Dashboard View */}
        {activeTab === 'dashboard' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Student Dashboard */}
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
              <div className="p-6 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                <h2 className="text-xl font-bold flex items-center gap-2"><Users className="text-indigo-600"/> Student Overview</h2>
                <span className="text-sm font-medium text-slate-500">Fall Semester 2026</span>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100">
                    <div className="text-indigo-600 text-sm font-medium mb-1">Current GPA</div>
                    <div className="text-3xl font-bold text-slate-900">3.84</div>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                    <div className="text-emerald-600 text-sm font-medium mb-1">Attendance</div>
                    <div className="text-3xl font-bold text-slate-900">98%</div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Upcoming Assignments</h3>
                  <div className="space-y-3">
                    {[1, 2, 3].map((_, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                        <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                          {i + 1}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">Calculus Midterm prep</div>
                          <div className="text-sm text-slate-500">Due in {i * 2 + 1} days</div>
                        </div>
                        <ChevronRight className="text-slate-400 w-5 h-5" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Admin Dashboard */}
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
              <div className="p-6 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                <h2 className="text-xl font-bold flex items-center gap-2"><Award className="text-cyan-600"/> Faculty Portal</h2>
                <span className="text-sm font-medium text-slate-500">Dept. of Sciences</span>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-cyan-50 border border-cyan-100">
                    <div className="text-cyan-600 text-sm font-medium mb-1">Classes Today</div>
                    <div className="text-3xl font-bold text-slate-900">4</div>
                  </div>
                  <div className="p-4 rounded-xl bg-purple-50 border border-purple-100">
                    <div className="text-purple-600 text-sm font-medium mb-1">Pending Grading</div>
                    <div className="text-3xl font-bold text-slate-900">24</div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Schedule</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-4 p-3 rounded-lg border-l-4 border-cyan-500 bg-slate-50">
                      <div className="text-sm font-bold text-slate-600 w-16 pt-1">09:00</div>
                      <div>
                        <div className="font-semibold text-slate-900">AP Physics C</div>
                        <div className="text-sm text-slate-500">Room 302 • 28 Students</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-3 rounded-lg border-l-4 border-slate-200 hover:bg-slate-50 transition-colors">
                      <div className="text-sm font-bold text-slate-400 w-16 pt-1">11:30</div>
                      <div>
                        <div className="font-semibold text-slate-600">Department Meeting</div>
                        <div className="text-sm text-slate-400">Conference Room B</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Curriculum Slider */}
        {activeTab === 'curriculum' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full"
          >
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Academic Programs</h2>
                <p className="text-slate-500 mt-2">Explore our world-class curriculum designed for the future.</p>
              </div>
              <div className="flex gap-2">
                <button onClick={prevSlide} className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600"><ChevronLeft /></button>
                <button onClick={nextSlide} className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600"><ChevronRight /></button>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-3xl overflow-hidden group">
              <motion.img 
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={curriculum[currentSlide].image} 
                alt="Course" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <motion.div
                  key={`text-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="inline-block py-1 px-3 rounded-md bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider mb-4">
                    {curriculum[currentSlide].grade}
                  </span>
                  <h3 className="text-4xl font-bold text-white mb-2">{curriculum[currentSlide].title}</h3>
                  <div className="flex items-center gap-4 text-slate-300 text-sm">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4"/> 2 Semesters</span>
                    <span className="flex items-center gap-1"><Users className="w-4 h-4"/> Max 25 Students</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Dynamic Registration Upload */}
        {activeTab === 'registration' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100"
          >
            <div className="bg-indigo-600 p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000')] opacity-10 bg-cover bg-center"></div>
              <h2 className="text-3xl font-bold text-white relative z-10 mb-2">Student Registration</h2>
              <p className="text-indigo-100 relative z-10">Upload required documents to complete enrollment</p>
            </div>
            
            <div className="p-8 space-y-8">
              {/* Progress Steps */}
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2 text-indigo-600 font-semibold"><div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-sm">1</div> Details</div>
                <div className="w-12 h-px bg-slate-200"></div>
                <div className="flex items-center gap-2 text-indigo-600 font-semibold"><div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm">2</div> Documents</div>
                <div className="w-12 h-px bg-slate-200"></div>
                <div className="flex items-center gap-2 text-slate-400 font-medium"><div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-sm">3</div> Review</div>
              </div>

              {/* Upload Zone */}
              <div className="border-2 border-dashed border-indigo-200 rounded-2xl p-10 text-center bg-indigo-50/50 hover:bg-indigo-50 transition-colors cursor-pointer group">
                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Upload className="w-8 h-8 text-indigo-500" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Drag & Drop files here</h3>
                <p className="text-slate-500 text-sm mb-6">Support for PDF, JPG, PNG up to 10MB</p>
                <button className="px-6 py-2 rounded-full bg-white border border-slate-200 text-slate-700 font-medium shadow-sm hover:shadow-md transition-shadow">
                  Browse Files
                </button>
              </div>

              {/* File List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 rounded-xl border border-emerald-100 bg-emerald-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">previous_school_transcript.pdf</div>
                      <div className="text-xs text-slate-500">2.4 MB • Uploaded complete</div>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-red-500">Remove</button>
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-white">
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 animate-pulse">
                      <div className="w-5 h-5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <div className="text-sm font-semibold text-slate-900">medical_records.pdf</div>
                        <div className="text-xs text-indigo-600 font-medium">45%</div>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5">
                        <div className="bg-indigo-600 h-1.5 rounded-full w-[45%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-slate-100">
                <button className="px-8 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-colors flex items-center gap-2">
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

      </main>
    </div>
  );
}
