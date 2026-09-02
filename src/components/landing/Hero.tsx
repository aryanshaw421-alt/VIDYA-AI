import React from 'react';
import { useStudy } from '../../context/StudyContext';
import { 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Flame, 
  ShieldCheck, 
  Cpu, 
  GraduationCap, 
  Target,
  RefreshCw,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const Hero: React.FC = () => {
  const { stream, setStream, goal, setActiveTab } = useStudy();

  const handleLaunch = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    setActiveTab('roadmap');
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="bg-aurora-glow w-96 h-96 bg-brand-500 top-0 left-1/4 -translate-x-1/2"></div>
      <div className="bg-aurora-glow w-[500px] h-[500px] bg-purple-600 top-20 right-10"></div>
      <div className="bg-aurora-glow w-80 h-80 bg-emerald-500 bottom-10 left-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Pitch Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-brand-500/30 shadow-glow-cyan text-brand-300 text-xs font-semibold backdrop-blur-md animate-float">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>AI Study Co-Pilot & Adaptive Test Engine</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
            <span className="text-slate-400 font-normal">Zero Guilt Dynamic Rescheduling</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
            Stop Wandering Through PDFs. <br className="hidden sm:inline" />
            <span className="gradient-text-cyan-purple">Study With An Intelligent Game Plan.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Authentix takes your college, 12th board, or competitive syllabus and turns it into a day-by-day roadmap with realistic daily targets, instant snap-to-solve doubt clearing, and auto-rescheduling when life happens.
          </p>
        </div>

        {/* Interactive Stream Switcher Pills */}
        <div className="max-w-2xl mx-auto mb-10 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl flex flex-wrap sm:flex-nowrap gap-1 backdrop-blur-xl">
          <button
            onClick={() => setStream('btech')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              stream === 'btech'
                ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-glow-cyan'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>B.Tech / BCA Semesters</span>
          </button>

          <button
            onClick={() => setStream('cbse12')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              stream === 'cbse12'
                ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-glow-cyan'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Class 12th Board</span>
          </button>

          <button
            onClick={() => setStream('ssc')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              stream === 'ssc'
                ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-glow-cyan'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Target className="w-4 h-4" />
            <span>SSC CGL / Govt</span>
          </button>
        </div>

        {/* Live Active Goal Preview Banner */}
        <div className="max-w-3xl mx-auto mb-10 glass-panel rounded-2xl p-5 border border-brand-500/20 shadow-glass">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-brand-500/20 text-brand-300 border border-brand-500/30">
                  {goal.streamBadge}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  Exam Date: <strong>{goal.targetExamDate}</strong> ({goal.daysRemaining} days left)
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mt-1.5">{goal.title}</h3>
              <p className="text-xs text-slate-400">{goal.subtitle}</p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <div className="text-right">
                <div className="text-[11px] text-slate-400">Daily Target</div>
                <div className="text-sm font-bold text-brand-300">{goal.dailyHoursTarget} hrs/day</div>
              </div>
              <button
                onClick={handleLaunch}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 via-indigo-500 to-purple-600 hover:from-brand-400 hover:to-indigo-400 text-white text-xs sm:text-sm font-bold shadow-glow-cyan flex items-center gap-1.5 transition-all transform active:scale-95"
              >
                <span>View Roadmap</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Core Value Props Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          
          <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-brand-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 mb-3">
              <Calendar className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Day-by-Day Game Plan</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              No more guessing chapter weightages. Authentix marks 🔥 High-Yield chapters and calculates exact daily targets.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-brand-accent/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-3">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Dynamic Auto-Reschedule</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Missed 2 days for college fest or illness? 1-click rebalances the workload seamlessly across upcoming days with zero guilt.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Real Exam Test Engine</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Timed mock tests with negative marking (-0.25/-0.33) and instant weak-area detection that slots revisions right into tomorrow's plan.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
