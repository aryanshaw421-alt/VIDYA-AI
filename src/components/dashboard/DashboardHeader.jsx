import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, BookOpen } from 'lucide-react';

export const DashboardHeader = ({ user, aiStatus, upcomingExam }) => {
  const userName = user?.name ? user.name.split(' ')[0] : 'Aryan';
  const greeting = user?.greeting || 'Good morning';

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-black/[0.05] dark:border-white/[0.06]">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 font-semibold uppercase tracking-wider">
            Cognitive Learning Command Center
          </span>
          <span className="text-neutral-300 dark:text-neutral-700">•</span>
          <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">
            {user?.examTarget || 'B.Tech CSE & GATE'}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-neutral-900 dark:text-white">
          {greeting}, {userName}
        </h1>

        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-normal">
          Your Cognitive Learning Twin has analyzed your latest study sessions.
        </p>
      </div>

      <div className="flex items-center gap-2.5 shrink-0">
        {upcomingExam && (
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] text-xs font-mono">
            <Calendar className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-neutral-700 dark:text-neutral-300 font-medium">{upcomingExam.name}:</span>
            <strong className="text-neutral-900 dark:text-white font-bold">{upcomingExam.daysRemaining}d left</strong>
          </div>
        )}

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-semibold border border-emerald-200/60 dark:border-emerald-800/60 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>{aiStatus?.label || 'Session Synced'}</span>
        </div>
      </div>
    </div>
  );
};
