import React from 'react';
import { 
  FileText, 
  CalendarDays, 
  HelpCircle, 
  TrendingUp, 
  ArrowRight,
  Sparkles,
  CheckCircle,
  Camera,
  Activity
} from 'lucide-react';
import { useStudy } from '../../context/StudyContext';

export const CoreLoopSection: React.FC = () => {
  const { setActiveTab } = useStudy();

  const steps = [
    {
      step: '01',
      title: 'Syllabus / Exam Select',
      subtitle: 'Upload PDF or Pick Target',
      desc: 'Select your university exam (e.g. B.Tech 3rd Sem MAKAUT), CBSE 12th, or SSC CGL. Authentix maps out all modules instantly.',
      icon: FileText,
      badge: 'Input Phase',
      color: 'border-blue-500/40 text-blue-400 bg-blue-500/10'
    },
    {
      step: '02',
      title: 'AI Day-wise Roadmap',
      subtitle: 'Know What to Study Today',
      desc: 'Calculates remaining days, ranks high-priority topics by weightage, and gives a realistic 2-3 hr actionable daily study block.',
      icon: CalendarDays,
      badge: 'Planning Phase',
      color: 'border-brand-500/40 text-brand-400 bg-brand-500/10'
    },
    {
      step: '03',
      title: 'Practice & Snap Doubts',
      subtitle: 'Real Constraints & Instant Solutions',
      desc: 'Solve mock questions with negative marking or snap a photo of any tough math or coding derivation for step-by-step verified explanations.',
      icon: Camera,
      badge: 'Active Mastery',
      color: 'border-amber-500/40 text-amber-400 bg-amber-500/10'
    },
    {
      step: '04',
      title: 'Adaptive Feedback & Auto-Revision',
      subtitle: 'Schedule Auto-Updates',
      desc: 'Score low in "Calculus" or "CPU Scheduling"? Authentix flags it as weak and auto-inserts a revision day into your upcoming schedule.',
      icon: Activity,
      badge: 'Continuous Loop',
      color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10'
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>The 4-Step Intelligent Engine</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            How Authentix Works: The 4-Step Core Loop
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            A closed-loop learning system that plans, tests, resolves doubts, and adapts to your performance.
          </p>
        </div>

        {/* Step Grid with Arrows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-brand-500/50 transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 font-bold">
                      STEP {item.step}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.color}`}>
                      {item.badge}
                    </span>
                  </div>

                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                  <div className="text-xs font-semibold text-brand-300 mb-2">{item.subtitle}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Interactive Trigger */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">Autonomous</span>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>

              </div>
            );
          })}
        </div>

        {/* Action Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setActiveTab('roadmap')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-sm shadow-glow-cyan transition-all transform active:scale-95"
          >
            <span>Experience The Live Demo Loop</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
