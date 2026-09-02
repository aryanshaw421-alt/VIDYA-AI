import React, { useState } from 'react';
import { 
  X, 
  RotateCcw, 
  Sparkles, 
  PartyPopper, 
  HeartPulse, 
  Briefcase, 
  HelpCircle, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { useStudy } from '../../context/StudyContext';
import confetti from 'canvas-confetti';

interface DynamicShiftModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DynamicShiftModal: React.FC<DynamicShiftModalProps> = ({ isOpen, onClose }) => {
  const { applyMissedDaysShift } = useStudy();
  const [days, setDays] = useState(2);
  const [reason, setReason] = useState('College Fest / Hackathon');
  const [isCalculated, setIsCalculated] = useState(false);
  const [feedback, setFeedback] = useState('');

  if (!isOpen) return null;

  const reasons = [
    { label: 'College Fest / Hackathon', icon: PartyPopper },
    { label: 'Illness / Health Recovery', icon: HeartPulse },
    { label: 'Family Event / Travel', icon: Briefcase },
    { label: 'Burnt Out / Needed Rest', icon: HelpCircle }
  ];

  const handleApply = () => {
    const result = applyMissedDaysShift(days, reason);
    setIsCalculated(true);
    setFeedback(result.explanation);
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0b1120] border border-slate-700 p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-500/20 border border-brand-500/40 flex items-center justify-center text-brand-300">
              <RotateCcw className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Dynamic Schedule Rebalancer</h3>
              <p className="text-xs text-slate-400">Zero-Guilt Automated Timetable Shift</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isCalculated ? (
          <div className="mt-6 space-y-6">
            
            {/* Number of days missed */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                How many study days did you miss?
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    onClick={() => setDays(num)}
                    className={`py-3 rounded-xl font-bold text-sm border transition-all ${
                      days === num
                        ? 'bg-brand-600 text-white border-brand-400 shadow-glow-cyan'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {num} {num === 1 ? 'Day' : 'Days'}
                  </button>
                ))}
              </div>
            </div>

            {/* Reason selector */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Reason for interruption:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {reasons.map((r, idx) => {
                  const Icon = r.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => setReason(r.label)}
                      className={`flex items-center gap-2.5 p-3 rounded-xl text-xs font-medium border text-left transition-all ${
                        reason === r.label
                          ? 'bg-indigo-600/20 border-indigo-500 text-indigo-200'
                          : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      <Icon className="w-4 h-4 text-brand-400 shrink-0" />
                      <span>{r.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Formula Preview explanation */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
              <div className="font-bold text-brand-300 flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Authentix Smart Absorption:</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Instead of demanding 14 continuous cramming hours tomorrow, the AI will spread the remaining high-weightage chapters across your next study sessions (+25 mins/day) and preserve your target exam date.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs"
              >
                Cancel
              </button>
              <button
                onClick={handleApply}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-xs shadow-glow-cyan flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Recalculate Roadmap</span>
              </button>
            </div>

          </div>
        ) : (
          <div className="mt-6 space-y-5 animate-fade-in text-center">
            
            <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-lg font-bold text-white">Roadmap Recalculated!</h4>
              <p className="text-xs text-slate-400 mt-1">Zero guilt, zero stress.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/30 text-xs text-slate-300 text-left leading-relaxed">
              {feedback}
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm shadow-glow-emerald flex items-center justify-center gap-2"
            >
              <span>View Updated Roadmap</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>
        )}

      </div>
    </div>
  );
};
