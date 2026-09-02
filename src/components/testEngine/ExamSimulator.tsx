import React, { useState, useEffect } from 'react';
import { useStudy } from '../../context/StudyContext';
import { SAMPLE_QUESTIONS } from '../../data/sampleQuestions';
import { TestQuestion, TestSubmission } from '../../types';
import { 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  Bookmark, 
  RotateCcw, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Award, 
  X,
  Zap,
  TrendingDown
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ExamSimulator: React.FC = () => {
  const { stream, goal, addTestSubmission, setActiveTab } = useStudy();
  
  const questions: TestQuestion[] = SAMPLE_QUESTIONS[stream] || [];
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [id: string]: number }>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<{ [id: string]: boolean }>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(questions.length * 90); // 1.5 mins per question
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [testResult, setTestResult] = useState<TestSubmission | null>(null);

  // Countdown timer
  useEffect(() => {
    if (isSubmitted || timeLeftSeconds <= 0) return;
    const interval = setInterval(() => {
      setTimeLeftSeconds(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isSubmitted, timeLeftSeconds]);

  const currentQ = questions[currentQuestionIndex];

  const handleSelectOption = (optionIndex: number) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: optionIndex
    }));
  };

  const toggleFlag = (id: string) => {
    setFlaggedQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSubmit = () => {
    let score = 0;
    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;
    let maxMarks = 0;
    const weakTopics: string[] = [];

    questions.forEach(q => {
      maxMarks += q.marks;
      const selected = userAnswers[q.id];
      if (selected === undefined) {
        unattempted++;
      } else if (selected === q.correctOptionIndex) {
        correct++;
        score += q.marks;
      } else {
        incorrect++;
        score -= q.negativeMarks;
        if (!weakTopics.includes(q.topic)) {
          weakTopics.push(q.topic);
        }
      }
    });

    const accuracy = correct + incorrect > 0 ? Math.round((correct / (correct + incorrect)) * 100) : 0;
    const timeSpent = (questions.length * 90) - timeLeftSeconds;

    const submission: TestSubmission = {
      testId: 'test-' + Date.now(),
      stream,
      title: `${goal.title} — Topic Speed Mock`,
      timestamp: new Date().toLocaleTimeString(),
      totalQuestions: questions.length,
      score: Math.max(0, Math.round(score * 10) / 10),
      maxMarks,
      correctAnswers: correct,
      incorrectAnswers: incorrect,
      unattempted,
      accuracy,
      timeSpentSeconds: timeSpent,
      userAnswers,
      weakTopicsIdentified: weakTopics
    };

    setTestResult(submission);
    setIsSubmitted(true);
    addTestSubmission(submission);

    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleReset = () => {
    setUserAnswers({});
    setFlaggedQuestions({});
    setTimeLeftSeconds(questions.length * 90);
    setIsSubmitted(false);
    setTestResult(null);
    setCurrentQuestionIndex(0);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      
      {/* Test Engine Header */}
      <div className="glass-panel rounded-2xl p-5 border border-indigo-500/30 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              Exam Mode Active
            </span>
            <span className="text-xs text-slate-400 font-mono">
              {stream === 'ssc' ? 'Negative Marking: -0.50' : 'Strict University Constraints'}
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white mt-1">
            {goal.title} Speed Mock Drill
          </h1>
        </div>

        {/* Timer & Submit */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 font-mono text-sm font-bold text-white">
            <Clock className={`w-4 h-4 ${timeLeftSeconds < 60 ? 'text-rose-400 animate-ping' : 'text-brand-400'}`} />
            <span>{formatTime(timeLeftSeconds)}</span>
          </div>

          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-glow-emerald transition-all"
            >
              Submit Test
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 flex items-center gap-1.5 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Retake Mock
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Main Question Display Panel */}
        <div className="lg:col-span-8 space-y-6">
          
          <div className="glass-panel rounded-2xl p-6 border border-slate-800 relative">
            
            {/* Question Subheader */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </span>
                <span className="text-xs text-slate-400 font-mono">[{currentQ.subject} • {currentQ.topic}]</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  +{currentQ.marks} Marks
                </span>
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/30">
                  -{currentQ.negativeMarks} Neg
                </span>
                {!isSubmitted && (
                  <button
                    onClick={() => toggleFlag(currentQ.id)}
                    aria-label="Flag Question for Review"
                    className={`p-1.5 rounded-lg border transition-all ${
                      flaggedQuestions[currentQ.id]
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                        : 'text-slate-500 border-slate-800 hover:text-slate-300'
                    }`}
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* PYQ Tag */}
            {currentQ.pyqTag && (
              <div className="mb-3 inline-block px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-brand-300">
                ⭐ {currentQ.pyqTag}
              </div>
            )}

            {/* Question Text */}
            <p className="text-base text-slate-100 font-medium leading-relaxed mb-4 whitespace-pre-line">
              {currentQ.question}
            </p>

            {/* Code Snippet if applicable */}
            {currentQ.codeSnippet && (
              <div className="mb-5 p-3.5 rounded-xl bg-[#060a13] border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto">
                <pre>{currentQ.codeSnippet}</pre>
              </div>
            )}

            {/* Options List */}
            <div className="space-y-3">
              {currentQ.options.map((opt, idx) => {
                const isSelected = userAnswers[currentQ.id] === idx;
                const isCorrect = isSubmitted && currentQ.correctOptionIndex === idx;
                const isWrongSelection = isSubmitted && isSelected && !isCorrect;

                return (
                  <button
                    key={idx}
                    disabled={isSubmitted}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full p-4 rounded-xl text-left border flex items-start gap-3 transition-all ${
                      isCorrect
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-200'
                        : isWrongSelection
                        ? 'bg-rose-500/20 border-rose-500 text-rose-200'
                        : isSelected
                        ? 'bg-indigo-600/20 border-indigo-500 text-indigo-100 shadow-glow-cyan'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <span className="w-6 h-6 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-slate-300 shrink-0 mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-xs sm:text-sm font-medium leading-relaxed">{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-800">
              <button
                disabled={currentQuestionIndex === 0}
                onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs flex items-center gap-1.5 disabled:opacity-40"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Previous
              </button>

              <button
                disabled={currentQuestionIndex === questions.length - 1}
                onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs flex items-center gap-1.5 disabled:opacity-40 shadow-glow-cyan"
              >
                Next <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* AI Explanation Accordion (Visible after submission) */}
          {isSubmitted && (
            <div className="glass-panel rounded-2xl p-6 border border-brand-500/30 shadow-glass animate-fade-in">
              <div className="flex items-center gap-2 text-brand-300 font-bold text-sm mb-3">
                <Sparkles className="w-4 h-4 text-brand-400" />
                <span>Authentix Verified Step-by-Step Explanation</span>
              </div>
              
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 leading-relaxed mb-4">
                {currentQ.explanation}
              </div>

              {currentQ.stepByStepSolution && (
                <div className="space-y-2">
                  <div className="text-xs font-bold text-white">Step-by-Step Derivation:</div>
                  {currentQ.stepByStepSolution.map((step, sIdx) => (
                    <div key={sIdx} className="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800 text-xs text-slate-300 font-mono">
                      {step}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

        {/* Right Question Palette & Telemetry Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="glass-panel rounded-2xl p-5 border border-slate-800">
            <h3 className="text-sm font-bold text-white mb-3">Question Palette</h3>
            
            <div className="grid grid-cols-5 gap-2 mb-5">
              {questions.map((q, idx) => {
                const isCurrent = currentQuestionIndex === idx;
                const isAnswered = userAnswers[q.id] !== undefined;
                const isFlagged = flaggedQuestions[q.id];

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`h-10 rounded-xl font-bold text-xs font-mono transition-all border ${
                      isCurrent
                        ? 'ring-2 ring-brand-400 border-white text-white'
                        : isAnswered
                        ? 'bg-emerald-600/30 border-emerald-500 text-emerald-300'
                        : isFlagged
                        ? 'bg-amber-600/30 border-amber-500 text-amber-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="space-y-2 text-xs border-t border-slate-800 pt-3 text-slate-400">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> Answered
                </span>
                <span className="font-mono text-white">{Object.keys(userAnswers).length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span> Flagged
                </span>
                <span className="font-mono text-white">{Object.keys(flaggedQuestions).filter(k => flaggedQuestions[k]).length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span> Unattempted
                </span>
                <span className="font-mono text-white">{questions.length - Object.keys(userAnswers).length}</span>
              </div>
            </div>
          </div>

          {/* Test Result Card when completed */}
          {testResult && (
            <div className="glass-panel rounded-2xl p-5 border border-emerald-500/40 shadow-glow-emerald animate-fade-in">
              <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm mb-3">
                <Award className="w-4 h-4" />
                <span>Test Performance Report</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-center mb-4">
                <div className="text-3xl font-extrabold font-display text-white">
                  {testResult.score} <span className="text-sm font-normal text-slate-400">/ {testResult.maxMarks}</span>
                </div>
                <div className="text-xs text-emerald-400 mt-1">Accuracy: {testResult.accuracy}%</div>
              </div>

              {/* Weak Topics Auto-Detected */}
              {testResult.weakTopicsIdentified.length > 0 ? (
                <div className="space-y-2 mb-4">
                  <div className="text-xs font-bold text-rose-300 flex items-center gap-1.5">
                    <TrendingDown className="w-3.5 h-3.5" />
                    <span>Weak Areas Flagged by AI:</span>
                  </div>
                  {testResult.weakTopicsIdentified.map((topic, i) => (
                    <div key={i} className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/30 text-xs text-rose-200">
                      ⚠️ {topic} — Auto-slotted into tomorrow's plan!
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 text-center mb-4">
                  🌟 Perfect Accuracy! No weak spots detected.
                </div>
              )}

              <button
                onClick={() => setActiveTab('roadmap')}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <span>View Updated AI Roadmap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
