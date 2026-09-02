import React, { useState } from 'react';
import { useStudy } from '../../context/StudyContext';
import { DailyTargetCard } from './DailyTargetCard';
import { DynamicShiftModal } from './DynamicShiftModal';
import { SyllabusUploader } from './SyllabusUploader';
import { 
  RotateCcw, 
  UploadCloud, 
  Sparkles, 
  Flame, 
  Calendar, 
  Clock, 
  BookOpen, 
  CheckCircle2, 
  Zap, 
  RefreshCw,
  Layers,
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';

export const RoadmapView: React.FC = () => {
  const { 
    goal, 
    stream, 
    plans, 
    chapters, 
    toggleTopicCompletion, 
    resetToDefaultSchedule, 
    lastShiftLog, 
    setActiveTab 
  } = useStudy();

  const [isShiftModalOpen, setIsShiftModalOpen] = useState(false);
  const [isUploaderOpen, setIsUploaderOpen] = useState(false);
  const [filterPriority, setFilterPriority] = useState<'ALL' | 'HIGH' | 'REVISION'>('ALL');

  const totalTopics = plans.reduce((acc, p) => acc + p.topics.length, 0);
  const completedTopics = plans.reduce((acc, p) => acc + p.topics.filter(t => t.completed).length, 0);
  const overallProgress = Math.round((completedTopics / Math.max(1, totalTopics)) * 100);

  const filteredPlans = plans.filter(p => {
    if (filterPriority === 'HIGH') return p.priority === 'HIGH';
    if (filterPriority === 'REVISION') return p.type === 'revision' || p.isAutoInsertedRevision;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      
      {/* Top Header Card */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-brand-500/20 shadow-glass mb-8 relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-500/20 text-brand-300 border border-brand-500/30">
                {goal.streamBadge}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                Target Exam Date: <strong>{goal.targetExamDate}</strong> ({goal.daysRemaining} days left)
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              {goal.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">{goal.subtitle}</p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            
            {/* The Killer Feature: Shift Timetable Modal Trigger */}
            <button
              onClick={() => setIsShiftModalOpen(true)}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-glow-cyan flex items-center justify-center gap-2 transition-all transform active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              <span>I Missed Study Days (Rebalance)</span>
            </button>

            {/* Upload Custom Syllabus Trigger */}
            <button
              onClick={() => setIsUploaderOpen(true)}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm border border-slate-700 flex items-center justify-center gap-2 transition-all"
            >
              <UploadCloud className="w-4 h-4 text-brand-400" />
              <span>Custom Syllabus</span>
            </button>

          </div>
        </div>

        {/* Global Progress & Quick Telemetry Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-800">
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-[11px] text-slate-400">Total Progress</div>
            <div className="text-base sm:text-lg font-bold text-white mt-0.5">{overallProgress}% Covered</div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-500 to-emerald-400 rounded-full"
                style={{ width: `${overallProgress}%` }}
              ></div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-[11px] text-slate-400">Daily Target</div>
            <div className="text-base sm:text-lg font-bold text-brand-300 mt-0.5">{goal.dailyHoursTarget} hrs/day</div>
            <div className="text-[10px] text-slate-500 mt-1">Realistic pacing</div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-[11px] text-slate-400">High-Yield Priority</div>
            <div className="text-base sm:text-lg font-bold text-rose-400 mt-0.5 flex items-center gap-1">
              <Flame className="w-4 h-4 fill-rose-400" />
              <span>Top 70% Marks</span>
            </div>
            <div className="text-[10px] text-slate-500 mt-1">Weightage-sorted</div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-[11px] text-slate-400">Study Streak</div>
            <div className="text-base sm:text-lg font-bold text-amber-300 mt-0.5 flex items-center gap-1">
              <Award className="w-4 h-4 text-amber-400" />
              <span>{goal.currentStreak} Days Active</span>
            </div>
            <div className="text-[10px] text-slate-500 mt-1">Keep the momentum</div>
          </div>
        </div>

        {/* Dynamic Shift Log Banner if user triggered recalculation */}
        {lastShiftLog && (
          <div className="mt-4 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs text-emerald-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>
                <strong>Schedule auto-rebalanced:</strong> {lastShiftLog.explanation}
              </span>
            </div>
            <button
              onClick={resetToDefaultSchedule}
              className="text-[11px] text-slate-400 hover:text-white underline ml-4 shrink-0"
            >
              Reset to original
            </button>
          </div>
        )}

      </div>

      {/* Main Content Layout: Chapter Weightage Sidebar + Daily Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Sidebar: Chapter Weightage Rankings & Fast Quick Actions */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="glass-panel rounded-2xl p-5 border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Flame className="w-4 h-4 text-rose-400 fill-rose-400" />
                <span>Chapter Weightage Ranker</span>
              </h3>
              <span className="text-[11px] font-mono text-brand-400">PYQ Analyzed</span>
            </div>
            <p className="text-xs text-slate-400 mb-4">
              Authentix prioritizes chapters with maximum historical marks yield so you never waste time on low-yield theory.
            </p>

            <div className="space-y-3">
              {chapters.map((chap) => (
                <div
                  key={chap.id}
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-all"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white truncate max-w-[190px]">{chap.name}</span>
                    <span className="text-xs font-bold font-mono text-brand-300">{chap.weightagePercentage}%</span>
                  </div>
                  <div className="text-[11px] text-slate-400">{chap.subject}</div>
                  
                  <div className="flex items-center justify-between text-[10px] text-slate-500 mt-2 pt-2 border-t border-slate-800/60">
                    <span>Est. {chap.estHours} hrs</span>
                    <span className="text-emerald-400">Pass Impact: {chap.passingImpactScore}/100</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Practice & Test Callout Banner */}
          <div className="rounded-2xl p-5 bg-gradient-to-br from-indigo-950/40 via-purple-950/30 to-slate-900 border border-indigo-500/30 shadow-glow-purple">
            <div className="flex items-center gap-2 text-indigo-300 font-bold text-xs mb-2">
              <Zap className="w-4 h-4 text-indigo-400" />
              <span>Verify What You Studied</span>
            </div>
            <h4 className="text-sm font-bold text-white mb-2">Take a Timed Mock with Negative Marking</h4>
            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              Solve exam questions with strict time limits. Weak areas will automatically be inserted into tomorrow's plan.
            </p>
            <button
              onClick={() => setActiveTab('testEngine')}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
            >
              <span>Launch Exam Simulator</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Right Area: Day-by-Day Dynamic Roadmap Timeline */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Timeline Filter Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-brand-400" />
                <span>Your Day-by-Day Game Plan</span>
              </h2>
              <p className="text-xs text-slate-400">Step-by-step actionable daily targets</p>
            </div>

            <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => setFilterPriority('ALL')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  filterPriority === 'ALL'
                    ? 'bg-slate-800 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All Days ({plans.length})
              </button>
              <button
                onClick={() => setFilterPriority('HIGH')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  filterPriority === 'HIGH'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🔥 High Yield
              </button>
              <button
                onClick={() => setFilterPriority('REVISION')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  filterPriority === 'REVISION'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🔄 Revisions
              </button>
            </div>
          </div>

          {/* Daily Target Cards List */}
          <div className="space-y-4">
            {filteredPlans.map((plan) => (
              <DailyTargetCard
                key={`${plan.dayNumber}-${plan.chapterId}`}
                plan={plan}
                onToggleTopic={toggleTopicCompletion}
              />
            ))}
          </div>

        </div>

      </div>

      {/* Modals */}
      <DynamicShiftModal
        isOpen={isShiftModalOpen}
        onClose={() => setIsShiftModalOpen(false)}
      />

      <SyllabusUploader
        isOpen={isUploaderOpen}
        onClose={() => setIsUploaderOpen(false)}
      />

    </div>
  );
};
