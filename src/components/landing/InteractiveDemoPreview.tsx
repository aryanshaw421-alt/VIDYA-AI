import React, { useState } from 'react';
import { useStudy } from '../../context/StudyContext';
import { 
  Sparkles, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Flame,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const InteractiveDemoPreview: React.FC = () => {
  const { goal, stream, setActiveTab, applyMissedDaysShift } = useStudy();
  const [simulatedDays, setSimulatedDays] = useState(2);
  const [rebalanced, setRebalanced] = useState(false);
  const [rebalanceMsg, setRebalanceMsg] = useState('');

  const handleSimulate = () => {
    const res = applyMissedDaysShift(simulatedDays, 'College Fest / Sick Leave');
    setRebalanced(true);
    setRebalanceMsg(res.explanation);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#080d19] to-[#060a13] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Description Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-semibold">
              <Zap className="w-3.5 h-3.5 text-brand-400" />
              <span>Live Interactive Simulator</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
              Test The Dynamic Shift Engine Right Now
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              Suppose you fall sick or have a college cultural fest for 2 days. 
              In traditional apps, your entire timetable crumbles. 
              <strong> Click below to watch Authentix rebalance your schedule in real-time.</strong>
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero guilt: Doesn't yell or show red failure streaks</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Distributes +25 mins/day evenly without burnout</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Protects your high-priority scoring chapters</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setActiveTab('roadmap')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition-all"
              >
                <span>Open Full Study Planner</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Live Interactive Simulator Card */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 border border-slate-700/80 shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2">authentix://rebalance-engine</span>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-brand-500/20 text-brand-300 border border-brand-500/30">
                  Target: {goal.title}
                </span>
              </div>

              {/* Simulation Controls */}
              <div className="my-6 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold text-white mb-1">Simulate Interruption:</div>
                    <p className="text-xs text-slate-400">Select how many days were missed:</p>
                  </div>

                  <div className="flex items-center gap-2">
                    {[1, 2, 3].map((num) => (
                      <button
                        key={num}
                        onClick={() => {
                          setSimulatedDays(num);
                          setRebalanced(false);
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                          simulatedDays === num
                            ? 'bg-brand-500/20 border-brand-500 text-brand-300'
                            : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white'
                        }`}
                      >
                        {num} {num === 1 ? 'Day' : 'Days'} Missed
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleSimulate}
                  className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-glow-cyan flex items-center justify-center gap-2 transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Execute AI Schedule Rebalance ({simulatedDays} Days)</span>
                </button>
              </div>

              {/* Dynamic Feedback Result */}
              {rebalanced ? (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 animate-fade-in">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-emerald-300">Schedule Recalculated Seamlessly!</h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {rebalanceMsg}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-2.5 text-xs text-slate-400">
                  <Clock className="w-4 h-4 text-brand-400" />
                  <span>Click the button above to simulate how the AI intelligently absorbs missed study hours.</span>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
