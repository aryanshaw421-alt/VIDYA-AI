import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const AIInsightCard = ({ insight, onViewAnalysis }) => {
  if (!insight) return null;

  return (
    <div className="p-6 rounded-3xl bg-[#0E1015] dark:bg-[#07090E] text-white border border-neutral-800 shadow-xl space-y-4 relative overflow-hidden">
      {/* Subtle Aurora Glow in the corner */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />

      <div className="flex items-center justify-between relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D4F038] text-xs font-mono font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>VIDYA AI COGNITIVE INSIGHT</span>
        </div>
        <span className="text-[10px] font-mono text-neutral-400">Telemetry Trigger</span>
      </div>

      <div className="space-y-2 relative z-10">
        <blockquote className="text-sm sm:text-base font-normal leading-relaxed text-neutral-200">
          "{insight.quote}"
        </blockquote>
        {insight.recommendation && (
          <p className="text-xs text-neutral-400 font-mono">
            💡 Recommended: {insight.recommendation}
          </p>
        )}
      </div>

      <div className="pt-1 flex items-center justify-between relative z-10">
        <span className="text-[11px] font-mono text-neutral-500">Based on 143 tested sessions</span>
        <Button
          variant="secondary"
          size="sm"
          showArrow
          onClick={onViewAnalysis}
          className="bg-white/10 text-white border-white/20 hover:bg-white/20 text-xs py-1.5 px-3.5"
        >
          {insight.actionLabel || 'View Analysis'}
        </Button>
      </div>
    </div>
  );
};
