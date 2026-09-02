import React, { useState } from 'react';
import { useStudy } from '../../context/StudyContext';
import { SAMPLE_DOUBTS } from '../../data/sampleDoubts';
import { DoubtCase } from '../../types';
import { 
  Camera, 
  Upload, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  BookOpen, 
  HelpCircle, 
  Code, 
  ArrowRight,
  Zap,
  Image as ImageIcon
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const SnapSolveStudio: React.FC = () => {
  const { stream, goal } = useStudy();
  
  const doubts: DoubtCase[] = SAMPLE_DOUBTS.filter(d => d.stream === stream);
  const activeList = doubts.length > 0 ? doubts : SAMPLE_DOUBTS;

  const [selectedDoubt, setSelectedDoubt] = useState<DoubtCase>(activeList[0]);
  const [customQuestionInput, setCustomQuestionInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSelectSample = (doubt: DoubtCase) => {
    setSelectedDoubt(doubt);
  };

  const handleSimulateSnap = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 700);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border border-amber-500/30 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Step-by-Step AI Derivations</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              Snap & Solve AI Doubt Studio
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Snap a photo or paste any tough math numerical, tree rotation, or coding doubt for an instant verified breakdown.
            </p>
          </div>

          <button
            onClick={handleSimulateSnap}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold text-xs sm:text-sm shadow-glow-amber flex items-center gap-2 transition-all transform active:scale-95"
          >
            <Camera className="w-4 h-4" />
            <span>Snap Photo / Upload</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Sample Preloaded Questions & Snap Simulator */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Quick Preload Selector */}
          <div className="glass-panel rounded-2xl p-5 border border-slate-800">
            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-brand-400" />
              <span>Select High-Yield Doubt Cases</span>
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Explore step-by-step solutions for frequent university exam bottlenecks:
            </p>

            <div className="space-y-2.5">
              {activeList.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelectSample(item)}
                  className={`w-full p-3 rounded-xl text-left border transition-all ${
                    selectedDoubt.id === item.id
                      ? 'bg-amber-500/20 border-amber-500 text-amber-200 shadow-glow-amber'
                      : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                    <span>{item.subject}</span>
                    <span className="px-1.5 py-0.5 rounded bg-slate-800 text-brand-300">{item.tag}</span>
                  </div>
                  <div className="text-xs font-bold text-white line-clamp-2">{item.title}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Camera / Image Upload Dropzone */}
          <div className="glass-panel rounded-2xl p-5 border border-dashed border-slate-700 text-center">
            <div className="w-12 h-12 mx-auto rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-2">
              <Camera className="w-6 h-6" />
            </div>
            <h4 className="text-xs font-bold text-white">Snap Any Numerical / Code</h4>
            <p className="text-[11px] text-slate-400 mt-1 mb-3">
              Upload handwritten physics numericals, circuit diagrams, or C++ code snippets.
            </p>
            <button
              onClick={handleSimulateSnap}
              className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 flex items-center justify-center gap-1.5"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Simulate Camera Scan</span>
            </button>
          </div>

        </div>

        {/* Right Column: Deep AI Breakdown Panel */}
        <div className="lg:col-span-8 space-y-6">
          
          {isAnalyzing ? (
            <div className="glass-panel rounded-2xl p-12 text-center border border-amber-500/40">
              <Sparkles className="w-10 h-10 text-amber-400 animate-spin mx-auto mb-3" />
              <h3 className="text-base font-bold text-white">Authentix OCR Analyzing Problem...</h3>
              <p className="text-xs text-slate-400 mt-1">Extracting variables, formulas, and edge cases.</p>
            </div>
          ) : (
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-glass">
              
              {/* Problem Title & Tag */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {selectedDoubt.subject}
                </span>
                <span className="text-xs text-slate-400 font-mono">[{selectedDoubt.tag}]</span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-white mb-3">
                {selectedDoubt.title}
              </h2>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                {selectedDoubt.problemStatement}
              </div>

              {/* Code or Math Matrix preview */}
              {selectedDoubt.codeOrMath && (
                <div className="p-4 rounded-xl bg-[#060a13] border border-slate-800 text-xs font-mono text-brand-300 mb-6 overflow-x-auto whitespace-pre">
                  {selectedDoubt.codeOrMath}
                </div>
              )}

              {/* Step by Step Breakdown Cards */}
              <div className="space-y-4 mb-6">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Step-by-Step AI Derivation</span>
                </h3>

                {selectedDoubt.aiExplanation.stepByStep.map((step) => (
                  <div
                    key={step.stepNumber}
                    className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 relative"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-brand-300 mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/40 flex items-center justify-center text-[10px]">
                        {step.stepNumber}
                      </span>
                      <span>{step.label}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{step.text}</p>
                    {step.subDetail && (
                      <div className="mt-2 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20">
                        💡 Key Insight: {step.subDetail}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Formula Card & Common Pitfall Callouts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                
                <div className="p-3.5 rounded-xl bg-indigo-950/20 border border-indigo-500/30 text-xs">
                  <div className="font-bold text-indigo-300 flex items-center gap-1.5 mb-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Key Exam Formula:</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {selectedDoubt.aiExplanation.keyFormulaOrRule}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/30 text-xs">
                  <div className="font-bold text-rose-300 flex items-center gap-1.5 mb-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Mistake To Avoid:</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {selectedDoubt.aiExplanation.commonMistakeToAvoid}
                  </p>
                </div>

              </div>

              {/* Examiner Pro Tip */}
              <div className="mt-4 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2">
                <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Examiner Marking Tip:</strong> {selectedDoubt.aiExplanation.proExamTip}
                </span>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
};
