import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Network, 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  Activity, 
  CheckCircle2, 
  Zap,
  Layers,
  ChevronRight,
  Target,
  Clock,
  Terminal,
  Shield
} from 'lucide-react';
import { AIStatusBadge } from '../ui/AIStatusBadge';
import { Button } from '../ui/Button';

export const CognitivePreview = ({ setActiveTab, onOpenTopic, user }) => {
  const [activeView, setActiveView] = useState('twin'); // 'twin' | 'retention' | 'prereq'

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-3xl bg-white dark:bg-[#12151D] border border-black/[0.08] dark:border-white/[0.08] shadow-2xl text-left overflow-hidden relative"
      >
        {/* Ambient Subtle Indigo/Blue Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/[0.06] dark:bg-blue-500/[0.09] blur-3xl pointer-events-none -z-0" />

        {/* 1. macOS / Linear-Style Window Header */}
        <div className="px-5 py-3.5 border-b border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-black/15 dark:bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-black/15 dark:bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-black/15 dark:bg-white/20" />
            </div>
            <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 ml-2 hidden sm:inline">
              vidya-ai / cognitive-twin / {user?.name ? user.name.toLowerCase().replace(' ', '_') : 'aryan_shaw'}.synced
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-[10px] font-mono font-semibold border border-emerald-200/50 dark:border-emerald-800/50">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Telemetry Synchronized (12ms)</span>
            </span>
          </div>
        </div>

        {/* 2. Top Profile Bar & Interactive Tab Switcher */}
        <div className="p-5 sm:p-6 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/[0.05] dark:border-white/[0.05] relative z-10">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.1] shadow-sm shrink-0">
              <img 
                src={user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"} 
                alt="User Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">Cognitive Learning Twin</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white font-display">
                Good morning, {user?.name ? user.name.split(' ')[0] : 'Aryan'}
              </div>
            </div>
          </div>

          {/* Interactive Mode Pills */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.05] dark:border-white/[0.06]">
            <button
              type="button"
              onClick={() => setActiveView('twin')}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                activeView === 'twin'
                  ? 'bg-white dark:bg-[#0A0C10] text-neutral-900 dark:text-white font-bold shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Telemetry
            </button>
            <button
              type="button"
              onClick={() => setActiveView('retention')}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                activeView === 'retention'
                  ? 'bg-white dark:bg-[#0A0C10] text-neutral-900 dark:text-white font-bold shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Retention Curve
            </button>
            <button
              type="button"
              onClick={() => setActiveView('prereq')}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                activeView === 'prereq'
                  ? 'bg-white dark:bg-[#0A0C10] text-neutral-900 dark:text-white font-bold shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Knowledge DAG
            </button>
          </div>
        </div>

        {/* 3. Dynamic Interactive Body */}
        <div className="p-5 sm:p-6 space-y-4">
          <AnimatePresence mode="wait">
            {activeView === 'twin' && (
              <motion.div
                key="twin"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {/* 3 Telemetry Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  
                  {/* Metric 1 */}
                  <div className="p-4 rounded-2xl bg-[#FBFBF9] dark:bg-[#0A0C10] border border-black/[0.05] dark:border-white/[0.06] space-y-1">
                    <div className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase font-semibold">
                      Prerequisite Readiness
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-2xl font-bold font-display text-neutral-900 dark:text-white">87%</span>
                      <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">+4.2% this week</span>
                    </div>
                    <div className="w-full bg-black/5 dark:bg-white/10 h-1.5 rounded-full overflow-hidden mt-2">
                      <div className="bg-blue-600 dark:bg-blue-500 h-full rounded-full" style={{ width: '87%' }} />
                    </div>
                    <div className="text-[10px] font-mono text-neutral-400 pt-1">
                      Optimal focus window (42m left)
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="p-4 rounded-2xl bg-[#FBFBF9] dark:bg-[#0A0C10] border border-black/[0.05] dark:border-white/[0.06] space-y-1">
                    <div className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase font-semibold">
                      Memory Retention
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-2xl font-bold font-display text-neutral-900 dark:text-white">92.4%</span>
                      <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold">18d half-life</span>
                    </div>
                    <div className="w-full bg-black/5 dark:bg-white/10 h-1.5 rounded-full overflow-hidden mt-2">
                      <div className="bg-emerald-600 dark:bg-emerald-500 h-full rounded-full" style={{ width: '92.4%' }} />
                    </div>
                    <div className="text-[10px] font-mono text-neutral-400 pt-1">
                      SM-2 Spaced Interval: 4 days until review
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div className="p-4 rounded-2xl bg-[#FBFBF9] dark:bg-[#0A0C10] border border-black/[0.05] dark:border-white/[0.06] space-y-1">
                    <div className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase font-semibold">
                      AI Performance Forecast
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-2xl font-bold font-display text-neutral-900 dark:text-white">AIR 1,420</span>
                      <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">99.12 %ile</span>
                    </div>
                    <div className="text-[11px] text-neutral-500 dark:text-neutral-400 font-mono mt-2">
                      Target: <strong>Top 500</strong> in GATE 2027
                    </div>
                    <div className="text-[10px] font-mono text-neutral-400">
                      Velocity: +3.2 rank steps/wk
                    </div>
                  </div>

                </div>

                {/* Next Best Action Banner */}
                <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-start sm:items-center gap-2.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#D4F038] text-neutral-900 shrink-0 mt-0.5 sm:mt-0">
                      Next Best Action
                    </span>
                    <span className="text-neutral-800 dark:text-neutral-200">
                      Revise: <strong>Combinational Circuits & Boolean Minimization</strong> (Est. mastery gain: <span className="text-emerald-600 dark:text-emerald-400 font-bold font-mono">+8.4%</span>)
                    </span>
                  </div>
                  <Button
                    size="sm"
                    variant="primary"
                    showArrow
                    onClick={() => {
                      if (onOpenTopic) onOpenTopic('Combinational Circuits');
                      else setActiveTab('studyHub');
                    }}
                    className="shrink-0 w-full sm:w-auto text-xs py-1.5 px-3.5"
                  >
                    Start AI Session
                  </Button>
                </div>
              </motion.div>
            )}

            {activeView === 'retention' && (
              <motion.div
                key="retention"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-2xl bg-[#FBFBF9] dark:bg-[#0A0C10] border border-black/[0.05] dark:border-white/[0.06] space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-mono font-semibold text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-blue-600" />
                    <span>Ebbinghaus Memory Decay vs. Spaced Recall Interventions</span>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded-full">
                    Zero Forgetting Enabled
                  </span>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500">
                    <span>Day 1 (100%)</span>
                    <span>Day 3 (72%) • Review #1</span>
                    <span>Day 7 (88%) • Review #2</span>
                    <span>Day 21 (96% Mastered)</span>
                  </div>
                  <div className="h-2 w-full bg-black/5 dark:bg-white/10 rounded-full overflow-hidden flex">
                    <div className="w-[30%] bg-blue-600 h-full" />
                    <div className="w-[30%] bg-indigo-500 h-full" />
                    <div className="w-[40%] bg-emerald-500 h-full" />
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans pt-1">
                    Instead of 4-hour cramming sessions that decay within 7 days, VIDYA prompts <strong>5-minute micro-recalls</strong> precisely when retention dips to 68%.
                  </p>
                </div>
              </motion.div>
            )}

            {activeView === 'prereq' && (
              <motion.div
                key="prereq"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-2xl bg-[#FBFBF9] dark:bg-[#0A0C10] border border-black/[0.05] dark:border-white/[0.06] space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-mono font-semibold text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5">
                    <Network className="w-3.5 h-3.5 text-blue-600" />
                    <span>Knowledge Dependency DAG (Direct Acyclic Graph)</span>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setActiveTab('conceptGraph')}
                    className="text-[11px] py-1 px-2.5 h-7"
                  >
                    Open Graph Studio
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#12151D] border border-emerald-500/30 text-neutral-800 dark:text-neutral-200">
                    <div className="text-[10px] text-emerald-600 font-bold uppercase">FOUNDATION (MASTERED)</div>
                    <div className="font-bold text-xs mt-0.5">Matrix Determinants</div>
                    <div className="text-[10px] text-neutral-400">Class 12 Maths</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#12151D] border border-amber-500/40 text-neutral-800 dark:text-neutral-200">
                    <div className="text-[10px] text-amber-600 font-bold uppercase">CURRENT BRIDGE (REVISE)</div>
                    <div className="font-bold text-xs mt-0.5">Eigenvalues & Vectors</div>
                    <div className="text-[10px] text-neutral-400">B.Tech Sem 1</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#12151D] border border-blue-500/30 text-neutral-800 dark:text-neutral-200">
                    <div className="text-[10px] text-blue-600 font-bold uppercase">TARGET (READY TO UNLOCK)</div>
                    <div className="font-bold text-xs mt-0.5">PCA & Dimensionality</div>
                    <div className="text-[10px] text-neutral-400">GATE / ML Core</div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </motion.div>
    </div>
  );
};
