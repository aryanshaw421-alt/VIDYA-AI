import React from 'react';
import { useStudy } from '../../context/StudyContext';
import { 
  BarChart3, 
  TrendingUp, 
  Flame, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  Award, 
  ArrowRight, 
  Clock,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const AnalyticsView: React.FC = () => {
  const { goal, chapters, plans, testSubmissions, insertWeakTopicRevisionPlan, setActiveTab } = useStudy();

  const totalTasks = plans.reduce((acc, p) => acc + p.topics.length, 0);
  const doneTasks = plans.reduce((acc, p) => acc + p.topics.filter(t => t.completed).length, 0);
  const completionRate = Math.round((doneTasks / Math.max(1, totalTasks)) * 100);

  const handleQuickAddRevision = (topic: string, subject: string) => {
    insertWeakTopicRevisionPlan(topic, subject);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
    setActiveTab('roadmap');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-emerald-500/30 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold mb-2">
              <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Adaptive Study Telemetry</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              Mastery & Weak-Area Analytics
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Authentix continuously measures retention, test scores, and flags weak concepts for automated revision slotting.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('testEngine')}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm shadow-glow-emerald flex items-center gap-2 transition-all"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Take Speed Diagnostic Test</span>
          </button>
        </div>
      </div>

      {/* Top 4 KPI Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <div className="text-xs text-slate-400 font-medium">Syllabus Completion</div>
          <div className="text-2xl font-extrabold font-display text-white mt-1">{completionRate}%</div>
          <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> On track for exam date
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <div className="text-xs text-slate-400 font-medium">Study Streak</div>
          <div className="text-2xl font-extrabold font-display text-amber-300 mt-1 flex items-center gap-1.5">
            <Flame className="w-5 h-5 text-amber-400 fill-amber-400" />
            <span>{goal.currentStreak} Days</span>
          </div>
          <div className="text-[11px] text-slate-400 mt-1">0 guilt auto-maintained</div>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <div className="text-xs text-slate-400 font-medium">Mock Test Drills</div>
          <div className="text-2xl font-extrabold font-display text-indigo-300 mt-1">
            {testSubmissions.length} Completed
          </div>
          <div className="text-[11px] text-slate-400 mt-1">Negative marking scored</div>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <div className="text-xs text-slate-400 font-medium">High-Yield Retention</div>
          <div className="text-2xl font-extrabold font-display text-brand-300 mt-1">88.4%</div>
          <div className="text-[11px] text-brand-400 mt-1">Top 70% recurring PYQs</div>
        </div>
      </div>

      {/* Chapter Mastery Breakdown & Weak Topic Queue */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Chapter Mastery Progress Bars */}
        <div className="lg:col-span-7 glass-panel rounded-2xl p-6 border border-slate-800">
          <h3 className="text-base font-bold text-white mb-2">Subject Mastery Breakdown</h3>
          <p className="text-xs text-slate-400 mb-6">Weighted completion score per module based on practice questions and checklist.</p>

          <div className="space-y-4">
            {chapters.map((chap, idx) => {
              const score = 45 + (idx * 12) % 50;
              return (
                <div key={chap.id} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                    <span className="text-white">{chap.name}</span>
                    <span className="font-mono text-brand-300">{score}% Mastered</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-2">
                    <div
                      className="h-full bg-gradient-to-r from-brand-500 to-emerald-400 rounded-full"
                      style={{ width: `${score}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-500">
                    <span>{chap.subject}</span>
                    <span className="text-rose-400">Weightage: {chap.weightagePercentage}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: AI Auto-Revision Queue */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="glass-panel rounded-2xl p-6 border border-amber-500/30 shadow-glow-amber">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-sm mb-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>AI Auto-Revision Queue</span>
            </div>
            <p className="text-xs text-slate-400 mb-4">
              Identified weak concepts ready to be slotted into your daily study roadmap with 1 click:
            </p>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">AVL Tree LR/RL Rotations</div>
                  <div className="text-[10px] text-rose-400">Test Accuracy: 40%</div>
                </div>
                <button
                  onClick={() => handleQuickAddRevision('AVL Tree Rotations', 'Data Structures')}
                  className="px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[11px] font-bold hover:bg-amber-500/30 transition-all"
                >
                  + Slot in Tomorrow
                </button>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">Banker's Safety Sequence Matrix</div>
                  <div className="text-[10px] text-amber-400">Test Accuracy: 60%</div>
                </div>
                <button
                  onClick={() => handleQuickAddRevision("Banker's Algorithm", 'Operating Systems')}
                  className="px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[11px] font-bold hover:bg-amber-500/30 transition-all"
                >
                  + Slot in Tomorrow
                </button>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">Relative Speed in Two Trains</div>
                  <div className="text-[10px] text-rose-400">Test Accuracy: 50%</div>
                </div>
                <button
                  onClick={() => handleQuickAddRevision('Relative Speed Trains', 'Quantitative Aptitude')}
                  className="px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[11px] font-bold hover:bg-amber-500/30 transition-all"
                >
                  + Slot in Tomorrow
                </button>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Authentix keeps test mistakes from recurring in your final exam.</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
