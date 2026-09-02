import React from 'react';
import { useStudy } from '../../context/StudyContext';
import { ExamStream } from '../../types';
import { 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  HelpCircle, 
  GraduationCap, 
  BarChart3, 
  Zap, 
  Flame,
  Layers
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { stream, setStream, goal, activeTab, setActiveTab } = useStudy();

  const streams: { id: ExamStream; label: string; badge: string; icon: string }[] = [
    { id: 'btech', label: 'B.Tech / College', badge: 'Engineering', icon: '💻' },
    { id: 'cbse12', label: 'Class 12th Board', badge: 'CBSE / State', icon: '📚' },
    { id: 'ssc', label: 'SSC CGL / Govt', badge: 'Competitive', icon: '🎯' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#070b14]/85 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setActiveTab('landing')}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-brand-accent to-purple-500 p-0.5 shadow-glow-cyan transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-brand-400 animate-pulse-subtle" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-white">
                  Authent<span className="gradient-text-cyan-purple">ix</span>
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-brand-500/10 text-brand-300 border border-brand-500/30 font-semibold tracking-wide">
                  AI CO-PILOT
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">Personal Study Manager & Test Engine</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => setActiveTab('landing')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'landing'
                  ? 'bg-slate-800/90 text-white shadow-inner'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              Overview
            </button>

            <button
              onClick={() => setActiveTab('roadmap')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'roadmap'
                  ? 'bg-brand-600/20 text-brand-300 border border-brand-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <Calendar className="w-4 h-4 text-brand-400" />
              AI Roadmap
            </button>

            <button
              onClick={() => setActiveTab('testEngine')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'testEngine'
                  ? 'bg-brand-accent/20 text-indigo-300 border border-indigo-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-indigo-400" />
              Exam Simulator
            </button>

            <button
              onClick={() => setActiveTab('doubtSolver')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'doubtSolver'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-amber-400" />
              Snap & Solve
            </button>

            <button
              onClick={() => setActiveTab('collegeHub')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'collegeHub'
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-purple-400" />
              College Zone
            </button>

            <button
              onClick={() => setActiveTab('analytics')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'analytics'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <BarChart3 className="w-4 h-4 text-emerald-400" />
              Mastery
            </button>
          </nav>

          {/* Right Controls: Stream Switcher & Streak */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Stream Selector Pill */}
            <div className="relative group">
              <select
                value={stream}
                onChange={(e) => setStream(e.target.value as ExamStream)}
                aria-label="Select Exam Goal"
                className="appearance-none bg-slate-900/90 border border-slate-700/80 hover:border-brand-500/50 text-slate-200 text-xs sm:text-sm font-semibold rounded-xl pl-3 pr-8 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500/50 cursor-pointer transition-all shadow-sm"
              >
                {streams.map((s) => (
                  <option key={s.id} value={s.id} className="bg-slate-900 text-slate-100 py-1">
                    {s.icon} {s.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <Layers className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Streak Counter */}
            <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold shadow-sm">
              <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-bounce" />
              <span>{goal.currentStreak}d Streak</span>
            </div>

            {/* Action Button */}
            {activeTab === 'landing' && (
              <button
                onClick={() => setActiveTab('roadmap')}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-glow-cyan transition-all transform active:scale-95"
              >
                <Zap className="w-4 h-4" />
                Launch Co-Pilot
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="md:hidden flex items-center justify-around py-2 border-t border-slate-800/60 overflow-x-auto text-xs">
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`flex flex-col items-center gap-1 px-2 py-1 ${activeTab === 'roadmap' ? 'text-brand-400 font-bold' : 'text-slate-400'}`}
          >
            <Calendar className="w-4 h-4" />
            <span>Roadmap</span>
          </button>
          <button
            onClick={() => setActiveTab('testEngine')}
            className={`flex flex-col items-center gap-1 px-2 py-1 ${activeTab === 'testEngine' ? 'text-indigo-400 font-bold' : 'text-slate-400'}`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Test</span>
          </button>
          <button
            onClick={() => setActiveTab('doubtSolver')}
            className={`flex flex-col items-center gap-1 px-2 py-1 ${activeTab === 'doubtSolver' ? 'text-amber-400 font-bold' : 'text-slate-400'}`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Doubts</span>
          </button>
          <button
            onClick={() => setActiveTab('collegeHub')}
            className={`flex flex-col items-center gap-1 px-2 py-1 ${activeTab === 'collegeHub' ? 'text-purple-400 font-bold' : 'text-slate-400'}`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>College</span>
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex flex-col items-center gap-1 px-2 py-1 ${activeTab === 'analytics' ? 'text-emerald-400 font-bold' : 'text-slate-400'}`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Mastery</span>
          </button>
        </div>

      </div>
    </header>
  );
};
