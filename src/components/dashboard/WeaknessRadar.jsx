import React from 'react';
import { motion } from 'framer-motion';
import { Target, ArrowRight, AlertCircle, CheckCircle2, Clock } from 'lucide-react';
import { Button } from '../ui/Button';

export const WeaknessRadar = ({ weakTopics = [], onFixTopic }) => {
  const getStatusBadge = (status, mastery) => {
    if (mastery >= 80 || status === 'strong') {
      return {
        label: 'Strong',
        dot: 'bg-emerald-500',
        textColor: 'text-emerald-700 dark:text-emerald-300',
        bgColor: 'bg-emerald-50 dark:bg-emerald-950/60',
        borderColor: 'border-emerald-200/50 dark:border-emerald-800/50',
        barColor: 'bg-emerald-500'
      };
    }
    if (mastery >= 60 || status === 'moderate') {
      return {
        label: 'Moderate',
        dot: 'bg-amber-500',
        textColor: 'text-amber-700 dark:text-amber-300',
        bgColor: 'bg-amber-50 dark:bg-amber-950/60',
        borderColor: 'border-amber-200/50 dark:border-amber-800/50',
        barColor: 'bg-amber-500'
      };
    }
    return {
      label: 'Critical Gap',
      dot: 'bg-rose-500',
      textColor: 'text-rose-700 dark:text-rose-300',
      bgColor: 'bg-rose-50 dark:bg-rose-950/60',
      borderColor: 'border-rose-200/50 dark:border-rose-800/50',
      barColor: 'bg-rose-500'
    };
  };

  return (
    <div className="p-6 rounded-3xl bg-white dark:bg-[#12151D] border border-black/[0.08] dark:border-white/[0.08] shadow-sm space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-black/[0.05] dark:border-white/[0.06]">
        <div className="space-y-0.5">
          <div className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider">
            Diagnostic Health Radar
          </div>
          <h3 className="font-bold text-base text-neutral-900 dark:text-white font-display">
            Topic Health & Prerequisite Matrix
          </h3>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 text-[10px] font-mono text-neutral-500">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Strong (80-100%)</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span>Moderate (60-79%)</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            <span>Critical (&lt;60%)</span>
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {weakTopics.map((topic) => {
          const config = getStatusBadge(topic.status, topic.mastery);

          return (
            <div
              key={topic.id}
              className="p-4 rounded-2xl bg-[#FBFBF9] dark:bg-[#0A0C10] border border-black/[0.05] dark:border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-black/[0.12] dark:hover:border-white/[0.12] transition-all"
            >
              <div className="space-y-2 flex-grow">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase font-semibold">
                      {topic.subject}
                    </span>
                    <h4 className="font-bold text-sm text-neutral-900 dark:text-white">
                      {topic.topic}
                    </h4>
                  </div>

                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${config.bgColor} ${config.textColor} ${config.borderColor} flex items-center gap-1`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
                    <span>{config.label} • {topic.mastery}%</span>
                  </span>
                </div>

                {/* Progress Visual Bar */}
                <div className="space-y-1">
                  <div className="w-full h-1.5 rounded-full bg-black/[0.06] dark:bg-white/[0.08] overflow-hidden">
                    <div
                      className={`h-full rounded-full ${config.barColor}`}
                      style={{ width: `${topic.mastery}%` }}
                    />
                  </div>
                  {topic.unblocks && (
                    <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
                      Unblocks: <strong>{topic.unblocks}</strong>
                    </div>
                  )}
                </div>
              </div>

              <Button
                variant={topic.mastery < 60 ? 'primary' : 'secondary'}
                size="sm"
                showArrow
                onClick={() => onFixTopic(topic)}
                className="shrink-0 text-xs py-1.5 px-3.5"
              >
                Fix Now
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
