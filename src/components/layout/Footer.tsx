import React from 'react';
import { Sparkles, Shield, Cpu, Award, Lock, CheckCircle2, Globe, FileText, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-[#050811] text-slate-400 text-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          
          {/* Brand & Mission Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-brand-500/20 border border-brand-500/40 flex items-center justify-center shadow-glow-cyan">
                <Sparkles className="w-5 h-5 text-brand-400" />
              </div>
              <div>
                <span className="font-display font-extrabold text-xl text-white tracking-tight">
                  Vidya <span className="gradient-text-cyan-purple">AI</span>
                </span>
                <span className="ml-2 text-[10px] font-mono px-2 py-0.5 rounded bg-brand-500/10 text-brand-300 border border-brand-500/30">
                  ENTERPRISE
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              The Cognitive Learning Operating System for higher education, competitive aspirants, and universities. Turning massive syllabi into adaptive, day-by-day game plans with guaranteed concept retention.
            </p>

            {/* Enterprise Security Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-mono">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-mono">
                <Shield className="w-3 h-3 text-cyan-400" />
                <span>SOC-2 Type II Compliant</span>
              </div>
            </div>
          </div>

          {/* Product Modules */}
          <div>
            <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-wider font-mono">AI Platform</h3>
            <ul className="space-y-2.5 text-xs">
              <li className="hover:text-brand-300 transition-colors cursor-pointer flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-brand-400" /> Day-wise Adaptive Roadmap
              </li>
              <li className="hover:text-brand-300 transition-colors cursor-pointer flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-indigo-400" /> Dynamic Shift Rebalancer
              </li>
              <li className="hover:text-brand-300 transition-colors cursor-pointer flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" /> Negative Marking Exam Engine
              </li>
              <li className="hover:text-brand-300 transition-colors cursor-pointer flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Snap & Solve Doubt Studio
              </li>
            </ul>
          </div>

          {/* Institutional Wings */}
          <div>
            <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-wider font-mono">Curriculums</h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="hover:text-white transition-colors cursor-pointer">B.Tech & BCA Semester Hub</li>
              <li className="hover:text-white transition-colors cursor-pointer">Class 12th CBSE & State Boards</li>
              <li className="hover:text-white transition-colors cursor-pointer">GATE CSE & Engineering Stream</li>
              <li className="hover:text-white transition-colors cursor-pointer">SSC CGL & Govt Exam Track</li>
            </ul>
          </div>

          {/* Resources & Open Standards */}
          <div>
            <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-wider font-mono">Resources</h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1">
                Open Academic Library <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1">
                Public API Integrations <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">Whitepaper on Spaced Decay</li>
              <li className="hover:text-white transition-colors cursor-pointer">Educator Radar Portal</li>
            </ul>
          </div>

        </div>

        {/* Sub-footer Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Vidya AI Inc. All rights reserved. Enterprise Cognitive Learning System.</p>
          <div className="flex items-center gap-4">
            <span className="text-emerald-400 flex items-center gap-1.5 font-mono text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              All Systems Operational (99.98% SLA)
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

