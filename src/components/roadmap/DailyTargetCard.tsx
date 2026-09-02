import React from 'react';
import { DayPlan } from '../../types';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  Flame, 
  BookOpen, 
  Sparkles, 
  AlertCircle, 
  Layers, 
  RotateCcw,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface DailyTargetCardProps {
  plan: DayPlan;
  onToggleTopic: (dayNumber: number, topicId: string) => void;
}

export const DailyTargetCard: React.FC<DailyTargetCardProps> = ({ plan, onToggleTopic }) => {
  const isCompleted = plan.status === 'completed';
  const isMissed = plan.status === 'missed';
  const isInProgress = plan.status === 'in_progress';
  const isAutoRevision = plan.isAutoInsertedRevision;

  const completedCount = plan.topics.filter(t => t.completed).length;
  const progressPercent = Math.round((completedCount / plan.topics.length) * 100) || 0;

  const handleTopicClick = (topicId: string, currentStatus: boolean) => {
    onToggleTopic(plan.dayNumber, topicId);
    if (!currentStatus && completedCount + 1 === plan.topics.length) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  };

  const getPriorityBadge = () => {
    if (isAutoRevision) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse-subtle">
          <Sparkles className="w-3 h-3" /> Auto-Revision Booster
        </span>
      );
    }
    if (plan.priority === 'HIGH') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold badge-high-yield">
          <Flame className="w-3 h-3 text-rose-400 fill-rose-400" /> High Yield ({plan.weightageScore}%)
        </span>
      );
    }
    if (plan.priority === 'MEDIUM') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold badge-core-theory">
          <BookOpen className="w-3 h-3" /> Core Theory ({plan.weightageScore}%)
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold badge-practice">
        <Layers className="w-3 h-3" /> Practice ({plan.weightageScore}%)
      </span>
    );
  };

  return (
    <div
      className={`rounded-2xl p-5 sm:p-6 transition-all border ${
        isCompleted
          ? 'bg-slate-900/60 border-emerald-500/30'
          : isInProgress
          ? 'bg-slate-900/90 border-brand-500/50 shadow-glow-cyan'
          : isMissed
          ? 'bg-slate-900/40 border-rose-500/30 opacity-75'
          : isAutoRevision
          ? 'bg-amber-950/20 border-amber-500/40 shadow-glow-amber'
          : 'glass-panel border-slate-800 hover:border-slate-700'
      }`}
    >
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-slate-800 text-slate-200 border border-slate-700">
            {plan.dateStr}
          </span>
          <span className="text-xs font-semibold text-slate-400">{plan.subject}</span>
        </div>

        <div className="flex items-center gap-2">
          {getPriorityBadge()}
          <span className="flex items-center gap-1 text-xs text-slate-300 font-mono bg-slate-800/80 px-2 py-0.5 rounded">
            <Clock className="w-3.5 h-3.5 text-brand-400" />
            {plan.durationMinutes}m
          </span>
        </div>
      </div>

      {/* Main Title */}
      <h3 className="text-base sm:text-lg font-bold text-white mb-1">{plan.title}</h3>
      <p className="text-xs text-slate-400 mb-4">{plan.chapterName}</p>

      {/* Progress Bar for the day */}
      <div className="mb-4">
        <div className="flex justify-between text-[11px] text-slate-400 mb-1">
          <span>Daily Completion</span>
          <span className="font-mono text-slate-300">{completedCount} of {plan.topics.length} done ({progressPercent}%)</span>
        </div>
        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              progressPercent === 100
                ? 'bg-emerald-400 shadow-glow-emerald'
                : 'bg-gradient-to-r from-brand-500 to-indigo-500'
            }`}
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      {/* Topics Checklist */}
      <div className="space-y-2 mb-4">
        {plan.topics.map((topic) => (
          <div
            key={topic.id}
            onClick={() => handleTopicClick(topic.id, topic.completed)}
            className={`flex items-start gap-3 p-2.5 rounded-xl border cursor-pointer transition-all ${
              topic.completed
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
            }`}
          >
            <div className="mt-0.5">
              {topic.completed ? (
                <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-black">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
              ) : (
                <Circle className="w-4 h-4 text-slate-500 hover:text-brand-400" />
              )}
            </div>
            <span className={`text-xs font-medium leading-relaxed ${topic.completed ? 'line-through opacity-80' : ''}`}>
              {topic.name}
            </span>
          </div>
        ))}
      </div>

      {/* Notes / AI Recommendation Callout */}
      {plan.notes && (
        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 text-[11px] text-slate-300 flex items-start gap-2 font-mono">
          <Sparkles className="w-3.5 h-3.5 text-brand-400 shrink-0 mt-0.5" />
          <span>{plan.notes}</span>
        </div>
      )}

      {/* Missed Day Info */}
      {isMissed && (
        <div className="mt-2 p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-400" />
          <span>Topics were smoothly redistributed to subsequent days. No guilt!</span>
        </div>
      )}
    </div>
  );
};
