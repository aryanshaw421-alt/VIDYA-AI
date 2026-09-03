import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, ArrowUpRight } from 'lucide-react';

export const MetricCard = ({
  title,
  value,
  growth,
  isPositive = true,
  subtext,
  progress,
  progressColor = 'bg-blue-600',
  icon: Icon,
  badgeText,
  onClick
}) => {
  return (
    <motion.div
      whileHover={onClick ? { y: -2 } : undefined}
      onClick={onClick}
      className={`p-5 rounded-3xl bg-white dark:bg-[#12151D] border border-black/[0.08] dark:border-white/[0.08] shadow-sm hover:shadow-md transition-all space-y-3 ${
        onClick ? 'cursor-pointer hover:border-black/[0.15] dark:hover:border-white/[0.15]' : ''
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold">
          {title}
        </span>
        {badgeText ? (
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] text-neutral-700 dark:text-neutral-300">
            {badgeText}
          </span>
        ) : Icon ? (
          <div className="w-7 h-7 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] flex items-center justify-center text-neutral-600 dark:text-neutral-300">
            <Icon className="w-3.5 h-3.5" />
          </div>
        ) : null}
      </div>

      <div className="flex items-baseline justify-between gap-2">
        <span className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-neutral-900 dark:text-white">
          {value}
        </span>
        {growth && (
          <span className={`inline-flex items-center gap-1 text-xs font-mono font-semibold ${
            isPositive ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-500 dark:text-rose-400'
          }`}>
            {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            <span>{growth}</span>
          </span>
        )}
      </div>

      {progress !== undefined && (
        <div className="w-full h-1.5 rounded-full bg-black/[0.05] dark:bg-white/[0.08] overflow-hidden">
          <div
            className={`h-full rounded-full ${progressColor} transition-all duration-500`}
            style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          />
        </div>
      )}

      {subtext && (
        <p className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 leading-tight">
          {subtext}
        </p>
      )}
    </motion.div>
  );
};
