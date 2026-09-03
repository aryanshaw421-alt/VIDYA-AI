import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Shield, Terminal, CheckCircle2 } from 'lucide-react';

export const Footer = ({ setActiveTab }) => {
  return (
    <footer className="w-full mt-24 border-t border-black/[0.08] dark:border-white/[0.08] bg-[#FBFBF9] dark:bg-[#0A0C10] transition-colors overflow-hidden">
      
      {/* 1. Main Navigation & Links Grid */}
      <div className="w-full fluid-container py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl overflow-hidden border border-black/[0.08] dark:border-white/[0.1] bg-white p-0.5 flex items-center justify-center">
                <img 
                  src="/images/logos/vidya_ai_logo.jpg" 
                  alt="VIDYA AI Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-neutral-900 dark:text-white">
                VIDYA AI
              </span>
            </div>
            
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm leading-relaxed">
              The Cognitive Learning Operating System. Modeling human memory decay, prerequisite knowledge graphs, and authentic university step marking for India's top academic aspirants.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/60 text-[11px] font-mono font-semibold text-emerald-700 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All Systems Operational • v2.4</span>
            </div>
          </div>

          {/* Sitemap Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs">
            
            {/* Column 1: Core Platform */}
            <div className="space-y-3">
              <div className="font-mono uppercase font-bold tracking-wider text-neutral-400 text-[10px]">
                Platform
              </div>
              <ul className="space-y-2.5 text-neutral-600 dark:text-neutral-300 font-medium">
                <li>
                  <button onClick={() => setActiveTab('studyHub')} className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer flex items-center gap-1">
                    <span>Study Room</span>
                    <span className="px-1.5 py-0.2 rounded text-[9px] bg-[#D4F038] text-neutral-900 font-mono font-bold">New</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('dashboard')} className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer">
                    AIR Forecast Dashboard
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('mockTests')} className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer">
                    Mock Exam Simulators
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('doubtSolver')} className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer">
                    AI Doubt Solver
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Curriculums */}
            <div className="space-y-3">
              <div className="font-mono uppercase font-bold tracking-wider text-neutral-400 text-[10px]">
                Curriculums
              </div>
              <ul className="space-y-2.5 text-neutral-600 dark:text-neutral-300 font-medium">
                <li>
                  <button onClick={() => setActiveTab('collegeHub')} className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer">
                    B.Tech CSE / IT / ECE
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('mockTests')} className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer">
                    GATE 2027 Simulator
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('mockTests')} className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer">
                    CBSE Class 10 & 12
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('mockTests')} className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer">
                    SSC CGL Tier 1 & 2
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Intelligence Engine */}
            <div className="space-y-3">
              <div className="font-mono uppercase font-bold tracking-wider text-neutral-400 text-[10px]">
                Cognitive Engine
              </div>
              <ul className="space-y-2.5 text-neutral-600 dark:text-neutral-300 font-medium">
                <li>
                  <button onClick={() => setActiveTab('digitalTwin')} className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer">
                    Digital Memory Twin
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('conceptGraph')} className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer">
                    Prerequisite Knowledge DAG
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('vivaExaminer')} className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer">
                    AI Viva Voice Examiner
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('agentSwarm')} className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer">
                    Multi-Agent Swarm
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Standards */}
            <div className="space-y-3">
              <div className="font-mono uppercase font-bold tracking-wider text-neutral-400 text-[10px]">
                Standards & Trust
              </div>
              <ul className="space-y-2.5 text-neutral-600 dark:text-neutral-300 font-medium">
                <li className="flex items-center gap-1 text-neutral-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>MAKAUT Step Rubric</span>
                </li>
                <li className="flex items-center gap-1 text-neutral-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>CBSE Pyq Verified</span>
                </li>
                <li className="flex items-center gap-1 text-neutral-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Zero Hallucination Grounding</span>
                </li>
                <li className="flex items-center gap-1 text-neutral-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Public Research APIs</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* 2. Signature Full-Bleed High-Contrast Banner matching Figma Template */}
      <div className="w-full bg-[#D4F038] text-[#0E1015] px-6 sm:px-12 py-16 sm:py-24 relative overflow-hidden select-none">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8 relative z-10">
          
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E1015] text-white text-xs font-mono font-bold">
              <span>●</span>
              <span>Autonomous Exam Mastery</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-[1.05]">
              Syllabus intelligence, built for top rankers.
            </h2>
            <p className="text-sm sm:text-base font-medium text-neutral-800 leading-relaxed">
              Stop panicking over forgotten formulas. Turn every hour of preparation into verified long-term retention.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => setActiveTab('studyHub')}
              className="px-8 py-4 rounded-full bg-[#0E1015] hover:bg-neutral-900 text-white font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>Launch Study Room</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('dashboard')}
              className="px-7 py-4 rounded-full bg-white/70 hover:bg-white text-neutral-900 font-bold text-sm transition-all border border-black/15 flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>Explore Dashboard</span>
            </button>
          </div>

        </div>

        {/* Massive Decorative Typography Wordmark */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-black/15 flex flex-col sm:flex-row items-center justify-between text-xs font-mono font-bold text-neutral-800 gap-4">
          <div className="tracking-widest">
            © {new Date().getFullYear()} VIDYA AI TECHNOLOGIES • ALL RIGHTS RESERVED
          </div>
          <div className="flex items-center gap-6">
            <span>BUILT WITH COGNITIVE PRECISION</span>
            <span>•</span>
            <span>NEW DELHI / BENGALURU</span>
          </div>
        </div>

        {/* Watermark Brand Typography */}
        <div className="text-[14vw] sm:text-[16vw] font-extrabold font-display leading-none tracking-tighter opacity-15 pointer-events-none text-center -mb-8 sm:-mb-14 overflow-hidden">
          VIDYA AI
        </div>

      </div>

    </footer>
  );
};
