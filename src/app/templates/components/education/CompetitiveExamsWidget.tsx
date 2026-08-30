"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  XCircle, 
  Trophy, 
  Timer, 
  BookOpen, 
  TrendingUp,
  Brain,
  ChevronRight,
  ArrowRight,
  PlayCircle,
  FileText,
  Target
} from 'lucide-react';

const MOCK_QUIZ_DATA = [
  {
    id: 1,
    question: "Which of the following articles of the Constitution of India deals with the 'Right to Equality'?",
    options: ["Article 14-18", "Article 19-22", "Article 23-24", "Article 25-28"],
    correctAnswer: 0,
    explanation: "Articles 14 to 18 of the Indian Constitution deal with the Right to Equality, ensuring equal rights before the law and prohibiting discrimination."
  },
  {
    id: 2,
    question: "Who is known as the 'Father of Indian Constitution'?",
    options: ["Jawaharlal Nehru", "Dr. B.R. Ambedkar", "Mahatma Gandhi", "Sardar Vallabhbhai Patel"],
    correctAnswer: 1,
    explanation: "Dr. B.R. Ambedkar is recognized as the Father of the Indian Constitution for his role as the chairman of the drafting committee."
  },
  {
    id: 3,
    question: "The 'Repo Rate' is the rate at which:",
    options: ["Banks lend to RBI", "RBI lends to commercial banks", "Banks lend to the public", "Government borrows from RBI"],
    correctAnswer: 1,
    explanation: "Repo rate is the rate at which the Reserve Bank of India (RBI) lends money to commercial banks in the event of any shortfall of funds."
  }
];

export default function CompetitiveExamsWidget() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              GovExamPro
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['home', 'dashboard', 'quiz', 'analytics', 'resources'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-medium transition-colors capitalize ${
                  activeTab === tab ? 'text-indigo-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button className="px-5 py-2 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-slate-200 transition-colors">
            Sign In
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pt-20">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && <HomeSection key="home" onStart={() => setActiveTab('quiz')} />}
          {activeTab === 'dashboard' && <DashboardSection key="dashboard" />}
          {activeTab === 'quiz' && <QuizSection key="quiz" />}
          {activeTab === 'analytics' && <AnalyticsSection key="analytics" />}
          {activeTab === 'resources' && <ResourcesSection key="resources" />}
        </AnimatePresence>
      </main>
    </div>
  );
}

// --- Home / Hero Section ---
function HomeSection({ onStart }: { onStart: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-[90vh] flex items-center"
    >
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/90" />
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-medium text-slate-300">UPSC 2026 Prelims Fast-Track</span>
          </motion.div>
          
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
          >
            Master Government <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Examinations.
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-lg leading-relaxed"
          >
            Hyper-realistic mock tests, AI-driven analytics, and curated resources designed to give you the competitive edge for UPSC, SSC, and Banking exams.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button 
              onClick={onStart}
              className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)]"
            >
              Take Free Mock Test
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-lg flex items-center gap-2 backdrop-blur-sm border border-white/10 transition-colors">
              <PlayCircle className="w-5 h-5" />
              Watch Demo
            </button>
          </motion.div>
        </div>

        {/* Floating Stats Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
          className="relative hidden md:block"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full" />
          <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-white">Live Performance Stream</h3>
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="space-y-4">
              {[
                { label: "Current Accuracy", value: "87.4%", color: "text-indigo-400", bg: "bg-indigo-400/20" },
                { label: "Questions Solved", value: "1,204", color: "text-purple-400", bg: "bg-purple-400/20" },
                { label: "National Rank", value: "#42", color: "text-pink-400", bg: "bg-pink-400/20" }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className={`w-12 h-12 rounded-lg ${stat.bg} flex items-center justify-center`}>
                    <Brain className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// --- Dashboard Section ---
function DashboardSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-7xl mx-auto px-6 py-12"
    >
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Welcome back, Aspirant.</h2>
          <p className="text-slate-400">Here's an overview of your preparation status.</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-slate-400 mb-1">Target Exam</div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-medium">
            UPSC CSE 2026
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Progress Cards */}
        <div className="col-span-2 grid grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-2xl rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150" />
            <Trophy className="w-8 h-8 text-emerald-400 mb-4" />
            <div className="text-3xl font-bold text-white mb-1">64%</div>
            <div className="text-sm text-slate-400">Syllabus Covered</div>
            <div className="mt-4 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-400 rounded-full" style={{ width: '64%' }} />
            </div>
          </div>
          <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150" />
            <Timer className="w-8 h-8 text-blue-400 mb-4" />
            <div className="text-3xl font-bold text-white mb-1">142h</div>
            <div className="text-sm text-slate-400">Time Spent Studying</div>
            <div className="mt-4 text-xs font-medium text-blue-400 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +12h this week
            </div>
          </div>
        </div>

        {/* Upcoming Action */}
        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 border border-indigo-500/30 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-2">Upcoming</div>
            <h3 className="text-xl font-bold text-white mb-2">All India Weekly Mock: GS Paper I</h3>
            <p className="text-sm text-indigo-200/70 line-clamp-2">Test your preparation against thousands of aspirants nationwide.</p>
          </div>
          <div className="mt-6">
            <div className="text-sm text-indigo-200 mb-3">Starts in: <span className="font-mono font-bold text-white">02:14:45</span></div>
            <button className="w-full py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition-colors">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// --- Interactive Quiz Section ---
function QuizSection() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const question = MOCK_QUIZ_DATA[currentQ];

  const handleSubmit = () => {
    if (selectedOpt === null) return;
    
    setIsSubmitted(true);
    if (selectedOpt === question.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQ < MOCK_QUIZ_DATA.length - 1) {
      setCurrentQ(c => c + 1);
      setSelectedOpt(null);
      setIsSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  if (quizFinished) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto px-6 py-20 text-center"
      >
        <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_-10px_rgba(52,211,153,0.5)]">
          <Trophy className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">Quiz Completed!</h2>
        <p className="text-slate-400 text-lg mb-8">You scored <span className="text-white font-bold">{score}</span> out of {MOCK_QUIZ_DATA.length}.</p>
        
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 mb-8 text-left">
          <h3 className="text-white font-semibold mb-4">Performance Analysis</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-400">Accuracy</span>
                <span className="text-white font-medium">{Math.round((score/MOCK_QUIZ_DATA.length)*100)}%</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full">
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${(score/MOCK_QUIZ_DATA.length)*100}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-400">Time Taken</span>
                <span className="text-white font-medium">02:15</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '45%' }} />
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={() => {
            setCurrentQ(0);
            setSelectedOpt(null);
            setIsSubmitted(false);
            setScore(0);
            setQuizFinished(false);
          }}
          className="px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
        >
          Retake Quiz
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-6 py-12"
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-medium border border-indigo-500/30">
            Indian Polity
          </div>
          <div className="text-slate-400 text-sm font-medium">
            Question {currentQ + 1} of {MOCK_QUIZ_DATA.length}
          </div>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <Timer className="w-4 h-4" />
          <span className="font-mono font-medium">14:59</span>
        </div>
      </div>

      <div className="bg-slate-900 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

        <h3 className="text-2xl md:text-3xl font-medium text-white mb-10 leading-tight relative z-10">
          {question.question}
        </h3>

        <div className="space-y-4 relative z-10">
          {question.options.map((opt, idx) => {
            const isSelected = selectedOpt === idx;
            const isCorrect = isSubmitted && idx === question.correctAnswer;
            const isWrong = isSubmitted && isSelected && idx !== question.correctAnswer;
            
            let btnClasses = "w-full text-left p-5 rounded-xl border-2 transition-all flex items-center justify-between ";
            
            if (!isSubmitted) {
              btnClasses += isSelected 
                ? "bg-indigo-500/20 border-indigo-500 text-white" 
                : "bg-slate-800/50 border-white/5 hover:border-white/20 text-slate-300 hover:bg-slate-800";
            } else {
              if (isCorrect) {
                btnClasses += "bg-emerald-500/20 border-emerald-500 text-white";
              } else if (isWrong) {
                btnClasses += "bg-red-500/20 border-red-500 text-white";
              } else {
                btnClasses += "bg-slate-800/20 border-transparent text-slate-500 opacity-50";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => !isSubmitted && setSelectedOpt(idx)}
                disabled={isSubmitted}
                className={btnClasses}
              >
                <span className="text-lg flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <span className="w-8 h-8 rounded-lg bg-black/20 flex items-center justify-center text-sm font-bold opacity-70">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {opt}
                </span>
                {isSubmitted && isCorrect && <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />}
                {isSubmitted && isWrong && <XCircle className="w-6 h-6 text-red-400 shrink-0" />}
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-8 overflow-hidden"
            >
              <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Explanation</h4>
                <p className="text-slate-200 leading-relaxed">{question.explanation}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-10 flex justify-end">
          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={selectedOpt === null}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                selectedOpt !== null 
                  ? 'bg-white text-slate-900 hover:bg-slate-200' 
                  : 'bg-white/5 text-slate-500 cursor-not-allowed'
              }`}
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-8 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold flex items-center gap-2 transition-colors"
            >
              {currentQ < MOCK_QUIZ_DATA.length - 1 ? 'Next Question' : 'View Results'}
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// --- Analytics Section (Placeholder) ---
function AnalyticsSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center justify-center text-center min-h-[60vh]">
      <div className="w-20 h-20 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
        <TrendingUp className="w-10 h-10 text-indigo-400" />
      </div>
      <h2 className="text-3xl font-bold text-white mb-4">Deep Performance Analytics</h2>
      <p className="text-slate-400 max-w-md">Detailed subject-wise breakdown, peer comparison, and predictive rank modeling will appear here after you complete your first full-length mock test.</p>
    </div>
  );
}

// --- Resources Section (Placeholder) ---
function ResourcesSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center justify-center text-center min-h-[60vh]">
      <div className="w-20 h-20 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
        <BookOpen className="w-10 h-10 text-purple-400" />
      </div>
      <h2 className="text-3xl font-bold text-white mb-4">Curated Study Material</h2>
      <p className="text-slate-400 max-w-md">Access premium NCERT summaries, daily current affairs capsules, and previous year question papers categorized by exam.</p>
    </div>
  );
}
