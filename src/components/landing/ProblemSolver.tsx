import React from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  CalendarX2, 
  CalendarCheck2, 
  Code2, 
  BookOpen, 
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { useStudy } from '../../context/StudyContext';

export const ProblemSolver: React.FC = () => {
  const { setActiveTab } = useStudy();

  const problems = [
    {
      num: '01',
      tag: 'Weightage Paralysis',
      hindiQuote: '"Padhna kya hai, shuru kahan se karein?"',
      pain: 'Students waste 5-10 days just figuring out which chapter has maximum marks and how to split remaining time before the exam.',
      solutionTitle: 'AI-Prioritized High-Yield Roadmap',
      solution: 'Authentix auto-scans the syllabus, ranks chapters by PYQ frequency (🔥 High Yield vs ⚡ Theory), and assigns realistic daily targets.',
      icon: BookOpen,
      color: 'from-rose-500 to-amber-500'
    },
    {
      num: '02',
      tag: 'Rigid Timetable Failure',
      hindiQuote: '"Agar 3 din padhai chhoot gayi, toh poora timetable toot gaya."',
      pain: 'Traditional static timetables break when you fall sick or have college fests. Guilt and panic cause complete study abandonment.',
      solutionTitle: 'Dynamic Schedule Rebalancer',
      solution: 'One-click "I Missed Days" simulator smoothly redistributes remaining topics (+25 mins/day) without pushing back your exam date.',
      icon: CalendarCheck2,
      color: 'from-brand-500 to-indigo-500'
    },
    {
      num: '03',
      tag: 'Higher Ed Ignored',
      hindiQuote: '"Engineers and College students get ignored."',
      pain: 'Most EdTech apps only cater to K-12 school kids, ignoring engineering semesters, lab vivas, coding concepts, and university PYQs.',
      solutionTitle: 'Dedicated College & University Hub',
      solution: 'Built-in support for B.Tech/BCA semester exams, Lab Viva simulators, 1-Night-Before Emergency Cramming checklists, and Govt exams like SSC CGL.',
      icon: Code2,
      color: 'from-purple-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#080d19]/80 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold mb-3">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span>The 3 Real Problems We Solve</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Why Traditional Timetables Fail & How Authentix Fixes It
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Real students don’t need static PDF planners; they need an intelligent co-pilot that adapts to real-life interruptions.
          </p>
        </div>

        {/* 3 Problem & Solution Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {problems.map((p, idx) => (
            <div 
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col justify-between hover:border-brand-500/40 transition-all group"
            >
              <div>
                {/* Header with index badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-display text-slate-600 group-hover:text-brand-400 transition-colors">
                    {p.num}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-slate-300 font-semibold">
                    {p.tag}
                  </span>
                </div>

                {/* Problem Statement (Quote) */}
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-200 text-xs font-medium italic mb-4">
                  {p.hindiQuote}
                  <p className="text-[11px] text-slate-400 not-italic mt-1.5">{p.pain}</p>
                </div>

                {/* Solution Block */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-brand-500/30">
                  <div className="flex items-center gap-2 text-brand-300 text-xs font-bold mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{p.solutionTitle}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {p.solution}
                  </p>
                </div>
              </div>

              {/* Bottom CTA trigger */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-brand-400" /> Authentix Engine
                </span>
                <button 
                  onClick={() => setActiveTab('roadmap')}
                  className="text-brand-300 hover:text-white font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  Try in Demo <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
