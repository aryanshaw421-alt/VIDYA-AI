import React from 'react';
import { FileCheck, Layers, HelpCircle, Timer, CheckCircle2 } from 'lucide-react';

export const ActivityTimeline = ({ activities = [] }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'mock':
        return { icon: FileCheck, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-950/60' };
      case 'flashcards':
        return { icon: Layers, color: 'text-indigo-600 dark:text-indigo-400', bg: 'bg-indigo-50 dark:bg-indigo-950/60' };
      case 'doubt':
        return { icon: HelpCircle, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-950/60' };
      case 'focus':
        return { icon: Timer, color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-950/60' };
      default:
        return { icon: CheckCircle2, color: 'text-neutral-600 dark:text-neutral-400', bg: 'bg-black/[0.04] dark:bg-white/[0.06]' };
    }
  };

  return (
    <div className="p-6 rounded-3xl bg-white dark:bg-[#12151D] border border-black/[0.08] dark:border-white/[0.08] shadow-sm space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-black/[0.05] dark:border-white/[0.06]">
        <div>
          <div className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider">
            Verified Study Trail
          </div>
          <h3 className="font-bold text-base text-neutral-900 dark:text-white font-display">
            Recent Activity & Milestone Stream
          </h3>
        </div>
        <span className="text-xs font-mono text-neutral-400">Past 48 Hours</span>
      </div>

      <div className="space-y-3">
        {activities.map((act) => {
          const { icon: Icon, color, bg } = getIcon(act.type);

          return (
            <div
              key={act.id}
              className="p-3.5 rounded-2xl bg-[#FBFBF9] dark:bg-[#0A0C10] border border-black/[0.04] dark:border-white/[0.05] flex items-center justify-between gap-3 text-xs"
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-xl ${bg} ${color} flex items-center justify-center shrink-0`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-neutral-900 dark:text-white">
                    {act.title}
                  </div>
                  <div className="text-[10px] font-mono text-neutral-400 mt-0.5">
                    {act.time} • Status: <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{act.status}</span>
                  </div>
                </div>
              </div>

              <div className="font-bold font-mono text-blue-600 dark:text-blue-400 shrink-0 text-right">
                {act.score}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
