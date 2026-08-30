"use client";

import React, { useState } from 'react';
import { FileText, Download, CheckCircle2, XCircle, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CompetitiveExamsWidget() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const quiz = [
    {
      q: "Which constitutional amendment is known as the 'Mini Constitution' of India?",
      options: ["42nd Amendment", "44th Amendment", "73rd Amendment", "86th Amendment"],
      correct: 0
    },
    {
      q: "Who was the first Governor-General of independent India?",
      options: ["C. Rajagopalachari", "Lord Mountbatten", "Rajendra Prasad", "Jawaharlal Nehru"],
      correct: 1
    }
  ];

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setTimeout(() => {
      if (index === quiz[currentQuestion].correct) setScore(s => s + 1);
      
      if (currentQuestion < quiz.length - 1) {
        setCurrentQuestion(c => c + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const reset = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-6">
      
      {/* Quiz Section */}
      <div className="md:col-span-3 bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col">
        <div className="bg-purple-600 p-6 text-white flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BrainCircuit className="w-6 h-6" />
            <h2 className="font-bold text-lg">Daily Mock Quiz</h2>
          </div>
          {!showResult && (
            <span className="text-purple-200 text-sm font-medium">
              Q {currentQuestion + 1} / {quiz.length}
            </span>
          )}
        </div>

        <div className="p-6 flex-1 flex flex-col justify-center">
          {!showResult ? (
            <motion.div key={currentQuestion} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <h3 className="text-lg font-semibold text-slate-800 mb-6 leading-relaxed">
                {quiz[currentQuestion].q}
              </h3>
              <div className="space-y-3">
                {quiz[currentQuestion].options.map((opt, i) => {
                  let stateClass = "border-slate-200 hover:border-purple-300 hover:bg-purple-50";
                  if (selectedAnswer !== null) {
                    if (i === quiz[currentQuestion].correct) stateClass = "border-green-500 bg-green-50 text-green-700";
                    else if (i === selectedAnswer) stateClass = "border-red-500 bg-red-50 text-red-700";
                    else stateClass = "border-slate-200 opacity-50";
                  }

                  return (
                    <button
                      key={i}
                      disabled={selectedAnswer !== null}
                      onClick={() => handleAnswer(i)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all flex justify-between items-center ${stateClass}`}
                    >
                      <span>{opt}</span>
                      {selectedAnswer !== null && i === quiz[currentQuestion].correct && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                      {selectedAnswer === i && i !== quiz[currentQuestion].correct && <XCircle className="w-5 h-5 text-red-500" />}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-8">
              <div className="w-24 h-24 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl font-bold text-purple-600">{score}/{quiz.length}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Quiz Completed!</h3>
              <p className="text-slate-500 mb-6">Keep practicing to improve your speed and accuracy.</p>
              <button onClick={reset} className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                Retake Quiz
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Syllabus PDF Downloads */}
      <div className="md:col-span-2 space-y-4">
        <div className="bg-slate-900 rounded-2xl p-6 text-white">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-purple-400" />
            Official Syllabus
          </h3>
          <div className="space-y-3">
            {['UPSC Civil Services 2024', 'SSC CGL Tier 1', 'IBPS PO Prelims'].map((doc, i) => (
              <div key={i} className="group flex items-center justify-between p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition cursor-pointer border border-slate-700 hover:border-purple-500/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-700 group-hover:bg-purple-500/20 rounded-lg">
                    <FileText className="w-4 h-4 text-slate-400 group-hover:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-200">{doc}</p>
                    <p className="text-xs text-slate-500">PDF • 2.4 MB</p>
                  </div>
                </div>
                <Download className="w-4 h-4 text-slate-400 group-hover:text-purple-400" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
          <h4 className="font-bold text-purple-900 mb-2">Next All India Mock</h4>
          <p className="text-sm text-purple-700 mb-4">UPSC Prelims GS Paper 1</p>
          <button className="w-full py-2 bg-white text-purple-700 font-semibold rounded-lg border border-purple-200 hover:bg-purple-50 transition shadow-sm">
            Register for Free
          </button>
        </div>
      </div>

    </div>
  );
}
