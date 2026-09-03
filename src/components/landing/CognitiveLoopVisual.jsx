import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Brain, 
  Clock, 
  Radar, 
  RefreshCw, 
  Trophy, 
  ArrowRight,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

export const CognitiveLoopVisual = ({ setActiveTab }) => {
  const [activeStep, setActiveStep] = useState(3); // Default on "AI Detects"

  const steps = [
    {
      id: 0,
      title: 'Study',
      subtitle: 'Structured Curriculum',
      icon: BookOpen,
      badge: 'Step 01',
      description: 'You engage with university semester notes, PYQs, and verified YouTube lectures mapped directly to official syllabi.',
      stat: '100% Syllabus Traceability',
      color: 'blue'
    },
    {
      id: 1,
      title: 'Learn',
      subtitle: 'Active Step Working',
      icon: Brain,
      badge: 'Step 02',
      description: 'You solve 10-mark numericals with authentic step-by-step rubrics instead of passively reading answers.',
      stat: '4x Higher Encoding Depth',
      color: 'indigo'
    },
    {
      id: 2,
      title: 'Forget',
      subtitle: 'Ebbinghaus Decay',
      icon: Clock,
      badge: 'Step 03',
      description: 'Human memory naturally drops to 60% within 48 hours without timely retrieval practice.',
      stat: 'Exponential Half-Life Model',
      color: 'amber'
    },
    {
      id: 3,
      title: 'AI Detects',
      subtitle: 'Telemetry Trigger',
      icon: Radar,
      badge: 'Step 04 • AI Engine',
      description: 'VIDYA AI’s Cognitive Twin monitors your retention curve and spots the exact moment recall probability dips below 68%.',
      stat: 'Real-Time Neural Calibration',
      color: 'accent'
    },
    {
      id: 4,
      title: 'Revise',
      subtitle: '5-Min Spaced Recall',
      icon: RefreshCw,
      badge: 'Step 05',
      description: 'You receive a high-yield 5-minute micro-drill targeting your specific prerequisite gaps before memory decays completely.',
      stat: 'Zero Guilt Dynamic Scheduling',
      color: 'emerald'
    },
    {
      id: 5,
      title: 'Master',
      subtitle: 'Permanent Retention',
      icon: Trophy,
      badge: 'Step 06',
      description: 'After 3 calibrated spaced reviews, concepts transition into long-term crystalline memory for exam day.',
      stat: '99.4% Peak Recall in Finals',
      color: 'emerald'
    }
  ];

  const current = steps[activeStep];

  return (
    <section className="w-full fluid-container space-y-8">
      {/* Section Header */}
      <SectionHeader
        badge="Cognitive Loop Intelligence"
        badgeVariant="neutral"
        title="Your learning has a pattern."
        highlightText="VIDYA AI finds it."
        description="Traditional study platforms treat education as static video consumption. VIDYA AI models human memory decay, detects conceptual gaps before semester finals, and triggers automated spaced reviews."
      />

      {/* Interactive 6-Step Cognitive Pipeline Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-2">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = activeStep === idx;
          const isAccent = step.badge.includes('AI Engine');

          return (
            <button
              key={step.id}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`p-3.5 rounded-2xl text-left transition-all cursor-pointer border relative overflow-hidden ${
                isActive
                  ? 'bg-white dark:bg-[#12151D] border-neutral-900 dark:border-white shadow-md'
                  : 'bg-black/[0.02] dark:bg-white/[0.03] border-black/[0.05] dark:border-white/[0.06] hover:bg-white/60 dark:hover:bg-white/5'
              }`}
            >
              {isAccent && (
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#D4F038] animate-pulse" />
              )}
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-mono font-bold ${
                  isActive ? 'text-neutral-900 dark:text-white' : 'text-neutral-400'
                }`}>
                  {step.badge.split('•')[0]}
                </span>
                <Icon className={`w-4 h-4 ${
                  isActive ? 'text-blue-600 dark:text-blue-400' : 'text-neutral-400'
                }`} />
              </div>
              <div className={`font-bold text-sm ${
                isActive ? 'text-neutral-900 dark:text-white' : 'text-neutral-700 dark:text-neutral-300'
              }`}>
                {step.title}
              </div>
              <div className="text-[11px] text-neutral-400 font-sans truncate">
                {step.subtitle}
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Focused Step Showcase Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#12151D] border border-black/[0.08] dark:border-white/[0.08] shadow-sm relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] text-neutral-800 dark:text-neutral-200 text-xs font-mono font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4F038]" />
              <span>Phase {current.id + 1} of 6 • {current.subtitle}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-neutral-900 dark:text-white">
              {current.title}: {current.description}
            </h3>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1 rounded-full border border-emerald-200/50 dark:border-emerald-800/50">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{current.stat}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
            {activeStep < steps.length - 1 ? (
              <button
                type="button"
                onClick={() => setActiveStep(prev => prev + 1)}
                className="px-5 py-2.5 rounded-full bg-black/[0.04] hover:bg-black/[0.08] dark:bg-white/[0.08] dark:hover:bg-white/[0.12] text-neutral-900 dark:text-white font-medium text-xs border border-black/[0.08] dark:border-white/[0.1] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Next Phase</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : null}

            <button
              type="button"
              onClick={() => setActiveTab('digitalTwin')}
              className="px-6 py-2.5 rounded-full bg-[#0E1015] dark:bg-white text-white dark:text-[#0E1015] font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:opacity-90"
            >
              <span>Explore Memory Twin</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

    </section>
  );
};
