import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Target } from 'lucide-react';
import { Button } from '../ui/Button';

export const NextBestAction = ({ action, onLaunch }) => {
  if (!action) return null;

  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-purple-50/50 dark:from-blue-950/40 dark:via-indigo-950/25 dark:to-purple-950/30 border border-blue-200/70 dark:border-blue-800/50 shadow-sm relative overflow-hidden space-y-4">
      {/* Background Decorative Sparkle */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/[0.08] dark:bg-blue-500/[0.12] blur-3xl rounded-full pointer-events-none" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#D4F038] text-neutral-900 tracking-wider uppercase">
            {action.category || 'AI RECOMMENDATION'}
          </span>
          <span className="text-xs font-mono text-blue-700 dark:text-blue-300 font-semibold">
            {action.badge || 'High-Impact Fix'}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
          <Target className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span>Subject: <strong>{action.subject || 'Curriculum'}</strong></span>
        </div>
      </div>

      <div className="space-y-1.5">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-neutral-900 dark:text-white leading-tight">
          Your highest-impact improvement:{' '}
          <span className="text-blue-600 dark:text-blue-400">{action.topic}</span>
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed">
          {action.description}
        </p>
      </div>

      {/* Progress & Estimated Mastery Gain Ribbon */}
      <div className="p-4 rounded-2xl bg-white/80 dark:bg-[#12151D]/80 border border-black/[0.06] dark:border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-6 text-xs font-mono">
          <div>
            <div className="text-[10px] text-neutral-400 uppercase">Current Mastery</div>
            <div className="text-base font-bold text-neutral-900 dark:text-white font-display mt-0.5">
              {action.currentMastery}%
            </div>
          </div>
          <div>
            <div className="text-[10px] text-neutral-400 uppercase">Estimated Gain</div>
            <div className="text-base font-bold text-emerald-600 dark:text-emerald-400 font-display mt-0.5">
              {action.estimatedGain}
            </div>
          </div>
          <div>
            <div className="text-[10px] text-neutral-400 uppercase">Post-Drill Projected</div>
            <div className="text-base font-bold text-blue-600 dark:text-blue-400 font-display mt-0.5">
              {action.currentMastery + 8}%
            </div>
          </div>
        </div>

        <Button
          variant="primary"
          size="md"
          showArrow
          onClick={onLaunch}
          className="w-full sm:w-auto shadow-md"
        >
          {action.actionLabel || 'Launch 10-Q Fix Drill'}
        </Button>
      </div>
    </div>
  );
};
