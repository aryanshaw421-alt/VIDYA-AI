import React from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const StudyPlan = ({ plan, onStartPlan, onSelectItem }) => {
  const items = plan?.items || [];
  const totalTime = plan?.totalTime || '1 hr 45 min';

  return (
    <div className="p-6 rounded-3xl bg-white dark:bg-[#12151D] border border-black/[0.08] dark:border-white/[0.08] shadow-sm space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-black/[0.05] dark:border-white/[0.06]">
        <div>
          <div className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider">
            Daily Adaptive Agenda
          </div>
          <h3 className="font-bold text-base text-neutral-900 dark:text-white font-display">
            Today's Learning Plan
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
          <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span>Total: <strong>{totalTime}</strong></span>
        </div>
      </div>

      <div className="space-y-2.5">
        {items.map((item, idx) => (
          <div
            key={item.id || idx}
            onClick={() => onSelectItem && onSelectItem(item)}
            className="p-3.5 rounded-2xl bg-[#FBFBF9] dark:bg-[#0A0C10] border border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between gap-3 hover:border-black/[0.12] dark:hover:border-white/[0.12] transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-black/[0.04] dark:bg-white/[0.06] text-neutral-800 dark:text-neutral-200 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                {idx + 1}
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </div>
                {item.type && (
                  <div className="text-[10px] font-mono text-neutral-400">
                    {item.type}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-black/[0.04] dark:bg-white/[0.06] text-neutral-700 dark:text-neutral-300">
                {item.duration}
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2">
        <Button
          variant="primary"
          size="md"
          showArrow
          icon={Play}
          onClick={onStartPlan}
          className="w-full shadow-sm"
        >
          Start Today's Session
        </Button>
      </div>
    </div>
  );
};
