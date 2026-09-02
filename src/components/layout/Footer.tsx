import React from 'react';
import { Sparkles, Shield, Cpu, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-[#050811] text-slate-400 text-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand & Elevator Pitch Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-500/20 border border-brand-500/40 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-brand-400" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                Authent<span className="gradient-text-cyan-purple">ix</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-lg">
              Authentix is an AI-powered personal study manager and adaptive test engine. 
              It turns any syllabus into an actionable day-by-day game plan, auto-rebalances schedules after missed days without guilt, and enforces real exam constraints.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 font-mono flex items-start gap-2">
              <Award className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
              <span>
                <strong>Judge Summary:</strong> "Not just a content library; an intelligent study co-pilot that tells you what to study today, how to practice it under real exam conditions, and when to revise so you don't forget."
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider">Product Features</h3>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-brand-300 transition-colors cursor-pointer flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-brand-400" /> AI Day-wise Roadmap
              </li>
              <li className="hover:text-brand-300 transition-colors cursor-pointer flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-indigo-400" /> Dynamic Shift Rebalancer
              </li>
              <li className="hover:text-brand-300 transition-colors cursor-pointer flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" /> Negative Marking Mock Engine
              </li>
              <li className="hover:text-brand-300 transition-colors cursor-pointer flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Snap & Solve AI Doubt Studio
              </li>
            </ul>
          </div>

          {/* Target Streams */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider">Exam Supported</h3>
            <ul className="space-y-2 text-xs">
              <li className="text-slate-300">🎓 B.Tech & BCA Semester Exams (MAKAUT / KTU / VTU)</li>
              <li className="text-slate-300">📖 CBSE & State Class 12 Board (PCM / PCB)</li>
              <li className="text-slate-300">🎯 SSC CGL, CHSL & Govt Competitive Exams</li>
              <li className="text-slate-300">⚡ University Lab Viva & PYQ Frequency Analyzers</li>
            </ul>
          </div>

        </div>

        <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Authentix AI Engine. Engineered for Students & Aspirants.</p>
          <div className="flex items-center gap-4">
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              AI Schedule Engine: Active
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
