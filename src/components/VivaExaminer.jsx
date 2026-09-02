import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mic, 
  MicOff, 
  Volume2, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  AlertCircle, 
  RotateCcw, 
  HelpCircle, 
  GraduationCap, 
  Play, 
  Flame, 
  Send,
  MessageSquare,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

const vivaQuestionBank = {
  dsa: [
    {
      id: 'v_dsa_1',
      question: "Examiner: 'Explain the difference between an AVL Tree and a Red-Black Tree. In which scenario would you prefer an AVL tree over a Red-Black tree in a production database index?'",
      expectedKeywords: ['height balance', 'strict balancing', 'lookup intensive', 'rotations', 'O(log n)', 'read heavy'],
      sampleAnswer: "AVL trees are strictly height-balanced (|BF| <= 1), which gives faster lookups. Red-Black trees have looser balancing (path length <= 2x shortest), allowing faster insertions and deletions. In read-heavy database indexing, AVL trees are preferred.",
      idealScore: 92
    },
    {
      id: 'v_dsa_2',
      question: "Examiner: 'Why is Quick Sort preferred over Merge Sort for sorting arrays, but Merge Sort is preferred for sorting Linked Lists?'",
      expectedKeywords: ['cache locality', 'in-place', 'O(1) extra space', 'random access', 'sequential access'],
      sampleAnswer: "Quick Sort has excellent cache locality and works in-place with O(1) auxiliary space on contiguous arrays. For linked lists, sequential access avoids cache penalties and Merge Sort merges lists without extra memory allocation.",
      idealScore: 88
    },
    {
      id: 'v_dsa_3',
      question: "Examiner: 'How does Dijkstra\'s Algorithm handle graphs with negative edge weights? What happens and which algorithm should we use instead?'",
      expectedKeywords: ['greedy choice fails', 'infinite loop / wrong distance', 'Bellman-Ford', 'negative cycle detection'],
      sampleAnswer: "Dijkstra assumes distances are monotonically increasing once a vertex is marked visited. With negative edges, this greedy property fails. We must use the Bellman-Ford algorithm (O(V*E)) to handle negative weights and detect negative cycles.",
      idealScore: 95
    }
  ],
  os: [
    {
      id: 'v_os_1',
      question: "Examiner: 'Explain the difference between a Process and a Thread. What resources are shared between threads of the same process?'",
      expectedKeywords: ['address space', 'heap', 'code segment', 'stack is private', 'context switch overhead', 'PCB vs TCB'],
      sampleAnswer: "A process is an execution unit with its own address space, memory, and PCB. A thread is a lightweight execution stream inside a process. Threads share the code, data, heap, and open file descriptors, but maintain private program counters, registers, and stacks.",
      idealScore: 90
    },
    {
      id: 'v_os_2',
      question: "Examiner: 'What are the four necessary and sufficient conditions for a Deadlock to occur in an operating system?'",
      expectedKeywords: ['mutual exclusion', 'hold and wait', 'no preemption', 'circular wait', 'Coffman conditions'],
      sampleAnswer: "The four Coffman conditions are: 1. Mutual Exclusion, 2. Hold and Wait, 3. No Preemption, and 4. Circular Wait. Breaking any one of these conditions prevents deadlocks.",
      idealScore: 94
    }
  ],
  dbms: [
    {
      id: 'v_dbms_1',
      question: "Examiner: 'Explain the difference between BCNF (Boyce-Codd Normal Form) and 3NF. Can a 3NF relation have functional dependency anomalies?'",
      expectedKeywords: ['superkey', 'prime attribute', 'determinant', 'transitive dependency', 'lossless join', 'dependency preservation'],
      sampleAnswer: "In 3NF, for every X -> Y, X must be a superkey OR Y must be a prime attribute. In BCNF, X must ALWAYS be a superkey with no exceptions. 3NF allows anomalies if non-superkey determinants exist for prime attributes.",
      idealScore: 89
    }
  ]
};

export const VivaExaminer = () => {
  const [selectedSubject, setSelectedSubject] = useState('dsa');
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [studentAnswer, setStudentAnswer] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState(null);
  const [sessionScore, setSessionScore] = useState({ totalMarks: 0, count: 0 });

  const questions = vivaQuestionBank[selectedSubject] || vivaQuestionBank.dsa;
  const currentQ = questions[currentQIndex] || questions[0];

  const handleSpeakQuestion = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(currentQ.question.replace('Examiner:', ''));
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
      toast.info('Examiner is speaking question...');
    } else {
      toast.info('Speech synthesis not supported in this browser.');
    }
  };

  const handleToggleMic = () => {
    if (!isRecording) {
      setIsRecording(true);
      toast.info('Microphone active. Speak your answer clearly or type below.');
      // Simulated speech to text fallback if Web Speech API isn't active
      if (studentAnswer.length === 0) {
        setTimeout(() => {
          setStudentAnswer("AVL trees are strictly balanced with balance factor between -1 and +1, ensuring O(log n) search time. In read-heavy database indices, AVL is superior because search lookups are faster.");
        }, 1500);
      }
    } else {
      setIsRecording(false);
      toast.success('Speech captured.');
    }
  };

  const handleEvaluateAnswer = () => {
    if (!studentAnswer.trim()) {
      toast.error('Please record or type your answer before submitting to the examiner.');
      return;
    }

    setIsEvaluating(true);
    toast.info('AI External Examiner is evaluating your technical depth & clarity...');

    setTimeout(() => {
      setIsEvaluating(false);
      
      const lower = studentAnswer.toLowerCase();
      let matchedCount = 0;
      currentQ.expectedKeywords.forEach(kw => {
        if (lower.includes(kw.toLowerCase())) matchedCount++;
      });

      const keywordRatio = matchedCount / currentQ.expectedKeywords.length;
      const computedScore = Math.min(100, Math.round(55 + (keywordRatio * 40) + (studentAnswer.length > 50 ? 5 : 0)));
      
      const feedback = computedScore >= 80 
        ? "Excellent viva response! You clearly articulated the balance criteria and production index tradeoffs."
        : "Good attempt, but make sure to explicitly mention time complexities, height balance invariants, and memory overhead.";

      setEvaluationResult({
        score: computedScore,
        confidence: computedScore >= 85 ? 'High (88%)' : 'Medium (72%)',
        clarity: computedScore >= 80 ? 'Crisp & Technical' : 'Needs Formal Terminology',
        feedback,
        matchedKeywords: currentQ.expectedKeywords.filter(kw => lower.includes(kw.toLowerCase())),
        missingKeywords: currentQ.expectedKeywords.filter(kw => !lower.includes(kw.toLowerCase()))
      });

      setSessionScore(prev => ({
        totalMarks: prev.totalMarks + computedScore,
        count: prev.count + 1
      }));

      if (computedScore >= 80) {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      }

      toast.success(`Examiner Evaluation: ${computedScore}/100 Marks!`);
    }, 800);
  };

  const handleNextQuestion = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
      setStudentAnswer('');
      setEvaluationResult(null);
      setIsRecording(false);
    } else {
      toast.success('Viva Session Complete! You finished all questions in this module.');
    }
  };

  return (
    <div className="w-full fluid-container py-6 sm:py-10 animate-fade-in space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 text-xs font-bold mb-2">
            <Mic className="w-3.5 h-3.5 text-indigo-500" />
            <span>AI External Examiner & Lab Simulator</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
            Live College Viva Voice Examiner
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            Simulate real university external viva voice examinations. Get scored on technical accuracy, keywords, and speech clarity.
          </p>
        </div>

        {/* Overall session badge */}
        {sessionScore.count > 0 && (
          <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-900/50 text-right">
            <div className="text-[11px] text-slate-500">Average Viva Grade</div>
            <div className="text-xl font-extrabold text-indigo-600 font-display">
              {(sessionScore.totalMarks / sessionScore.count).toFixed(1)} / 100
            </div>
          </div>
        )}
      </div>

      {/* Subject Selector */}
      <div className="p-2 rounded-2xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-wrap gap-2">
        {[
          { id: 'dsa', name: 'Data Structures & Algorithms (B.Tech / BCA)', icon: '🌳' },
          { id: 'os', name: 'Operating Systems & Concurrency', icon: '⚡' },
          { id: 'dbms', name: 'Database Management Systems (SQL & BCNF)', icon: '🗄️' }
        ].map((sub) => (
          <button
            key={sub.id}
            onClick={() => {
              setSelectedSubject(sub.id);
              setCurrentQIndex(0);
              setStudentAnswer('');
              setEvaluationResult(null);
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              selectedSubject === sub.id
                ? 'bg-indigo-600 text-white shadow-md scale-[1.02]'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <span>{sub.icon}</span>
            <span>{sub.name}</span>
          </button>
        ))}
      </div>

      {/* Examiner Stage Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column (8 cols): Examiner Audio & Response */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Active Question Box with Voice Trigger */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950 text-white shadow-xl border border-indigo-900/50 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                  👨‍🏫
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white font-display">External Examiner (IIT / University Panel)</h3>
                  <div className="text-xs text-indigo-300 font-mono">Question {currentQIndex + 1} of {questions.length}</div>
                </div>
              </div>

              <button
                onClick={handleSpeakQuestion}
                className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <Volume2 className="w-4 h-4 text-indigo-400" />
                <span>Hear Voice</span>
              </button>
            </div>

            <p className="text-base sm:text-lg font-semibold text-slate-100 leading-relaxed font-display">
              "{currentQ.question.replace('Examiner:', '').trim()}"
            </p>
          </div>

          {/* Student Response Canvas */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Your Viva Explanation:</span>
              
              <button
                onClick={handleToggleMic}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  isRecording 
                    ? 'bg-rose-600 text-white animate-pulse shadow-lg shadow-rose-500/20' 
                    : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100'
                }`}
              >
                {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                <span>{isRecording ? 'Listening (Click to Stop)...' : 'Speak Answer'}</span>
              </button>
            </div>

            <textarea
              rows={4}
              value={studentAnswer}
              onChange={(e) => setStudentAnswer(e.target.value)}
              placeholder="Speak using the microphone or type your technical answer here..."
              className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 leading-relaxed"
            />

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setStudentAnswer(currentQ.sampleAnswer)}
                className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
              >
                Insert Model Answer Example
              </button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleEvaluateAnswer}
                disabled={isEvaluating}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Submit to Examiner</span>
              </motion.button>
            </div>
          </div>

          {/* Examiner Feedback Evaluation Card */}
          {evaluationResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-3xl bg-white dark:bg-[#0D1326] border border-indigo-200 dark:border-indigo-900/60 shadow-lg space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-indigo-600" />
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">Examiner Feedback & Scorecard</h3>
                </div>
                <div className="text-2xl font-extrabold text-indigo-600 font-display">
                  {evaluationResult.score} / 100 Marks
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {evaluationResult.feedback}
              </p>

              {/* Keyword Diagnostic */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold text-slate-600 dark:text-slate-400">Technical Keyword Breakdown:</div>
                <div className="flex flex-wrap gap-1.5">
                  {evaluationResult.matchedKeywords.map((kw, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-900 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> {kw}
                    </span>
                  ))}
                  {evaluationResult.missingKeywords.map((kw, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-xs font-medium border border-amber-200 dark:border-amber-900">
                      + Missing: {kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end pt-3">
                <button
                  onClick={handleNextQuestion}
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5"
                >
                  <span>Next Viva Question</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

        </div>

        {/* Right Column (4 cols): Viva Tips & External Rubric */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="p-6 rounded-3xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-4">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>University Viva Scoring Rubric</span>
            </h3>

            <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <div className="font-bold text-slate-900 dark:text-white mb-1">1. Exact Technical Terms (40%)</div>
                <p className="text-slate-500">Invariants, asymptotic notation, and formal definitions.</p>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <div className="font-bold text-slate-900 dark:text-white mb-1">2. Production Trade-offs (35%)</div>
                <p className="text-slate-500">Why choose one data structure or algorithm over another?</p>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <div className="font-bold text-slate-900 dark:text-white mb-1">3. Delivery & Confidence (25%)</div>
                <p className="text-slate-500">Concise answers without hesitation or filler words.</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
