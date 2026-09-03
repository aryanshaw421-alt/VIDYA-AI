import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Calendar, Zap, CheckCircle2 } from 'lucide-react';

export const LearningChart = ({ activity = [] }) => {
  const [activeDay, setActiveDay] = useState('Thu');

  const maxHours = Math.max(...activity.map(d => d.hours), 4.5);
  const selected = activity.find(d => d.day === activeDay) || activity[3];

  return (
    <div className="p-6 rounded-3xl bg-white dark:bg-[#12151D] border border-black/[0.08] dark:border-white/[0.08] shadow-sm space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-black/[0.05] dark:border-white/[0.06]">
        <div>
          <div className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider">
            Learning Intelligence
          </div>
          <h3 className="font-bold text-base text-neutral-900 dark:text-white font-display">
            Weekly Activity & Cognitive Consistency
          </h3>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-sm bg-blue-600" />
            <span>Study Hours</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-sm bg-emerald-500" />
            <span>Accuracy %</span>
          </span>
        </div>
      </div>

      {/* Bar Chart Visualization */}
      <div className="space-y-2">
        <div className="h-36 flex items-end justify-between gap-2 sm:gap-4 pt-4 px-2">
          {activity.map((item) => {
            const heightPercent = (item.hours / maxHours) * 100;
            const isSelected = item.day === activeDay;

            return (
              <button
                key={item.day}
                type="button"
                onClick={() => setActiveDay(item.day)}
                className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end cursor-pointer group focus:outline-none"
              >
                <div className="w-full flex items-end justify-center gap-1 h-full">
                  {/* Hours Bar */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${heightPercent}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className={`w-full max-w-[18px] rounded-t-md transition-all ${
                      isSelected
                        ? 'bg-blue-600 dark:bg-blue-500 shadow-sm'
                        : 'bg-black/10 dark:bg-white/15 group-hover:bg-blue-400'
                    }`}
                  />
                </div>
                <span className={`text-[10px] font-mono transition-colors ${
                  isSelected
                    ? 'font-bold text-neutral-900 dark:text-white'
                    : 'text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200'
                }`}>
                  {item.day}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Day Detailed Telemetry Strip */}
        {selected && (
          <div className="p-3 rounded-2xl bg-[#FBFBF9] dark:bg-[#0A0C10] border border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              <span className="font-bold text-neutral-900 dark:text-white">{selected.day} Breakdown:</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Duration: <strong className="text-neutral-900 dark:text-white">{selected.hours} hrs</strong></span>
              <span>Accuracy: <strong className="text-emerald-600 dark:text-emerald-400">{selected.accuracy}%</strong></span>
              <span>Concepts: <strong className="text-blue-600 dark:text-blue-400">{selected.concepts} Mastered</strong></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
