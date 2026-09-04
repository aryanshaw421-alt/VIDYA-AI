import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileCheck, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  BookOpen, 
  HelpCircle, 
  Play, 
  RotateCcw, 
  Award, 
  GraduationCap, 
  Layers, 
  Send,
  Eye,
  Check,
  ChevronRight,
  Filter,
  Bookmark,
  ChevronLeft,
  Sliders,
  Download,
  Printer,
  FileText,
  Search,
  ArrowRight,
  Flame,
  CheckCircle,
  XCircle,
  HelpCircle as QuestionIcon
} from 'lucide-react';
import { examStreams, sampleMockPapers } from '../data/examPatterns';
import { 
  BRANCHES, 
  EXAM_MODES, 
  getSubjectsForSemesterAndBranch, 
  generateTargetedMockPaper 
} from '../utils/mockExamGenerator';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

export const MockTestEngine = ({ user, initialSubject }) => {
  // Setup State (User Inputs)
  const [selectedStreamId, setSelectedStreamId] = useState(() => {
    return localStorage.getItem('vidya_selected_exam') || 'btech_makaut';
  });
  const [selectedBranch, setSelectedBranch] = useState('cse');
  const [selectedSemester, setSelectedSemester] = useState(3);
  const [selectedSubjectCode, setSelectedSubjectCode] = useState('');
  const [selectedExamMode, setSelectedExamMode] = useState('full_70m');
  const [subjectSearchQuery, setSubjectSearchQuery] = useState('');

  // Active Test State
  const [activeTestPaper, setActiveTestPaper] = useState(null);
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [markedForReview, setMarkedForReview] = useState({});
  const [showAnswers, setShowAnswers] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [scoreResult, setScoreResult] = useState(null);
  const [viewMode, setViewMode] = useState('cbt'); // 'cbt' | 'hall_paper'
  
  // Timer State (3 Hours = 10800s, 30m = 1800s, etc.)
  const [secondsRemaining, setSecondsRemaining] = useState(10800);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Available subjects for the currently selected branch & semester
  const availableSubjects = useMemo(() => {
    if (selectedStreamId === 'btech_makaut') {
      return getSubjectsForSemesterAndBranch(selectedSemester, selectedBranch);
    }
    const stream = examStreams.find(s => s.id === selectedStreamId) || examStreams[0];
    return stream.subjects.map(sub => ({
      code: sub.slice(0, 8),
      name: sub,
      credits: 4,
      category: 'Specialization Core',
      modules: ['General Curriculum', 'Advanced Applications'],
      hasPredictedPaper: false
    }));
  }, [selectedStreamId, selectedSemester, selectedBranch]);

  // Set default subject when available subjects change
  useEffect(() => {
    if (availableSubjects.length > 0) {
      if (initialSubject) {
        const found = availableSubjects.find(
          s => s.name.toLowerCase().includes(initialSubject.toLowerCase()) ||
               s.code.toLowerCase() === initialSubject.toLowerCase()
        );
        if (found) {
          setSelectedSubjectCode(found.code);
          return;
        }
      }
      // If currently selected is not in available, default to first
      if (!availableSubjects.some(s => s.code === selectedSubjectCode)) {
        setSelectedSubjectCode(availableSubjects[0].code);
      }
    }
  }, [availableSubjects, initialSubject]);

  // Active Subject object
  const activeSubjectObj = useMemo(() => {
    return availableSubjects.find(s => s.code === selectedSubjectCode) || availableSubjects[0];
  }, [availableSubjects, selectedSubjectCode]);

  // Timer countdown
  useEffect(() => {
    let timer;
    if (isTimerRunning && secondsRemaining > 0) {
      timer = setInterval(() => {
        setSecondsRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmitPaper();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, secondsRemaining]);

  const formatTimer = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentStream = examStreams.find(s => s.id === selectedStreamId) || examStreams[0];

  // Handle stream change
  const handleStreamChange = (streamId) => {
    setSelectedStreamId(streamId);
    setActiveTestPaper(null);
    setScoreResult(null);
    setShowAnswers(false);
    setUserAnswers({});
    setMarkedForReview({});
  };

  // Launch targeted mock paper
  const handleLaunchPaper = () => {
    setIsEvaluating(true);
    toast.info(`Configuring Official ${currentStream.patternName}...`, {
      description: `Target: ${activeSubjectObj?.name || 'Subject'} (${selectedExamMode === 'full_70m' ? 'Full 70-Mark' : 'Targeted'})`
    });

    setTimeout(() => {
      setIsEvaluating(false);
      const paper = generateTargetedMockPaper({
        streamId: selectedStreamId,
        branch: selectedBranch,
        semester: selectedSemester,
        subjectCodeOrName: selectedSubjectCode,
        examMode: selectedExamMode
      });

      setActiveTestPaper(paper);
      setActiveGroupIndex(0);
      setCurrentQuestionIndex(0);
      setUserAnswers({});
      setMarkedForReview({});
      setShowAnswers(false);
      setScoreResult(null);
      setViewMode('cbt');

      // Set timer based on duration minutes
      const totalSecs = (paper.durationMinutes || 180) * 60;
      setSecondsRemaining(totalSecs);
      setIsTimerRunning(true);

      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      toast.success('Examination Paper Generated with Complete Official Questions!');
    }, 450);
  };

  // Reconfigure / Back to Setup
  const handleReconfigure = () => {
    if (Object.keys(userAnswers).length > 0 && !scoreResult) {
      if (!window.confirm('You have unanswered/in-progress questions. Are you sure you want to exit and reconfigure?')) {
        return;
      }
    }
    setActiveTestPaper(null);
    setIsTimerRunning(false);
    setScoreResult(null);
    setShowAnswers(false);
  };

  const handleSelectOption = (questionId, option) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: option }));
  };

  const handleTextAnswerChange = (questionId, text) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: text }));
  };

  const toggleMarkForReview = (questionId) => {
    setMarkedForReview(prev => ({ ...prev, [questionId]: !prev[questionId] }));
    toast.info('Question status updated in palette.');
  };

  const handleSubmitPaper = () => {
    setIsTimerRunning(false);
    let score = 0;
    let totalMcq = 0;
    let correctCount = 0;
    let incorrectCount = 0;

    if (activeTestPaper) {
      activeTestPaper.groups.forEach(g => {
        g.questions.forEach(q => {
          if (q.type === 'mcq') {
            totalMcq += q.marks;
            if (userAnswers[q.id]) {
              if (userAnswers[q.id] === q.correct) {
                score += q.marks;
                correctCount++;
              } else {
                // Negative marking
                const penalty = selectedStreamId === 'ssc_cgl' ? 0.50 : selectedStreamId === 'gate_2027' ? (q.marks === 1 ? 0.33 : 0.66) : selectedStreamId === 'jee_main' ? 1.0 : 0;
                score = Math.max(0, score - penalty);
                incorrectCount++;
              }
            }
          }
        });
      });
    }

    setShowAnswers(true);
    setScoreResult({ score, totalMcq, correctCount, incorrectCount });
    confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
    toast.success('Examination Paper Evaluated!', {
      description: `Objective Score: ${score.toFixed(1)} Marks. Step-marking evaluation rubrics now unlocked.`
    });
  };

  // PDF Print
  const handleDownloadPDF = (includeSolutions = false) => {
    if (!activeTestPaper) {
      toast.error('Please generate a paper first before downloading!');
      return;
    }

    toast.info('Preparing Official Examination PDF...', {
      description: includeSolutions ? 'Generating Question Paper with Model Solutions & Marking Scheme.' : 'Generating Standard Examination Paper (Printable A4).'
    });

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      toast.error('Popup blocker prevented opening PDF window. Please allow popups.');
      return;
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${activeTestPaper.title} - VIDYA AI Official Paper</title>
        <style>
          @page { size: A4; margin: 18mm; }
          body { font-family: 'Times New Roman', serif; color: #111; line-height: 1.45; padding: 10px; }
          .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 15px; }
          .inst-box { border: 1px solid #444; padding: 10px; margin-bottom: 20px; font-size: 13px; background: #fafafa; }
          .meta-row { display: flex; justify-content: space-between; font-weight: bold; margin-bottom: 8px; font-size: 14px; }
          .group-header { font-weight: bold; font-size: 15px; text-decoration: underline; margin-top: 20px; margin-bottom: 8px; text-transform: uppercase; }
          .q-block { margin-bottom: 15px; page-break-inside: avoid; font-size: 14px; }
          .q-text { font-weight: 600; margin-bottom: 4px; }
          .options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-left: 20px; margin-top: 4px; }
          .solution-box { background: #f0fdf4; border-left: 4px solid #16a34a; padding: 8px; margin-top: 6px; font-family: monospace; font-size: 12px; }
          .watermark { position: fixed; bottom: 10px; right: 10px; font-size: 10px; color: #888; font-family: sans-serif; }
          @media print { .no-print { display: none; } }
        </style>
      </head>
      <body>
        <div class="header">
          <h2 style="margin: 0; text-transform: uppercase; font-size: 20px;">${currentStream.name}</h2>
          <h3 style="margin: 4px 0; font-size: 16px;">${activeTestPaper.title}</h3>
          <div style="font-size: 13px; margin-top: 4px;">Subject: <strong>${activeTestPaper.subject}</strong> | Paper Code: <strong>${activeTestPaper.paperCode}</strong></div>
        </div>

        <div class="meta-row">
          <div>Time Allowed: <strong>${activeTestPaper.duration}</strong></div>
          <div>Roll No: ____________________</div>
          <div>Full Marks: <strong>${activeTestPaper.totalMarks}</strong></div>
        </div>

        <div class="inst-box">
          <strong>GENERAL INSTRUCTIONS:</strong>
          <ul style="margin: 4px 0 0 0; padding-left: 20px;">
            <li>The figures in the margin indicate full marks for the questions.</li>
            <li>Candidates are required to give their answers in their own words as far as practicable.</li>
            <li>Use of scientific calculators is permitted where required by university regulations.</li>
            ${includeSolutions ? '<li style="color: green;"><strong>[OFFICIAL MODEL ANSWER KEY & STEP-MARKING RUBRIC INCLUDED]</strong></li>' : ''}
          </ul>
        </div>

        ${activeTestPaper.groups.map((group) => `
          <div class="group-header">${group.name}</div>
          <div style="font-size: 12px; font-style: italic; margin-bottom: 10px;">${group.instructions || ''}</div>
          
          ${group.questions.map((q) => `
            <div class="q-block">
              <div class="q-text">
                <span>${q.text}</span>
                <span style="float: right; font-weight: bold;">[${q.marks} Mark${q.marks > 1 ? 's' : ''}]</span>
              </div>
              
              ${q.subparts ? `
                <ul style="margin: 4px 0; padding-left: 25px; font-size: 13px;">
                  ${q.subparts.map(sp => `<li>${sp}</li>`).join('')}
                </ul>
              ` : ''}

              ${q.type === 'mcq' && q.options ? `
                <div class="options-grid">
                  ${q.options.map(opt => `<div>${opt}</div>`).join('')}
                </div>
              ` : ''}

              ${includeSolutions ? `
                <div class="solution-box">
                  <strong>Model Answer / Step-Marking Rubric:</strong><br/>
                  ${q.correct ? `<strong>Correct Choice:</strong> ${q.correct}<br/>` : ''}
                  ${q.explanation ? `<div>${q.explanation}</div>` : ''}
                  ${q.modelAnswer ? `<div style="white-space: pre-wrap; margin-top: 4px;">${q.modelAnswer}</div>` : ''}
                </div>
              ` : ''}
            </div>
          `).join('')}
        `).join('')}

        <div class="watermark">Generated via VIDYA AI Autonomous Exam Intelligence • ${new Date().toLocaleDateString()}</div>
        <script>
          window.onload = function() {
            setTimeout(function() { window.print(); }, 400);
          };
        </script>
      </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();

    confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
    toast.success('Question Paper Ready for PDF Print!');
  };

  const currentQuestions = activeTestPaper ? activeTestPaper.groups[activeGroupIndex].questions : [];
  const currentQ = currentQuestions[currentQuestionIndex] || currentQuestions[0];

  // Filtered subject list based on search
  const filteredSubjects = useMemo(() => {
    if (!subjectSearchQuery.trim()) return availableSubjects;
    const q = subjectSearchQuery.toLowerCase();
    return availableSubjects.filter(
      s => s.name.toLowerCase().includes(q) || s.code.toLowerCase().includes(q)
    );
  }, [availableSubjects, subjectSearchQuery]);

  // Total questions count & answered count
  const stats = useMemo(() => {
    if (!activeTestPaper) return { total: 0, answered: 0, review: 0 };
    let total = 0;
    activeTestPaper.groups.forEach(g => {
      total += g.questions.length;
    });
    const answered = Object.keys(userAnswers).length;
    const review = Object.values(markedForReview).filter(Boolean).length;
    return { total, answered, review };
  }, [activeTestPaper, userAnswers, markedForReview]);

  return (
    <div className="w-full fluid-container py-6 sm:py-10 animate-fade-in space-y-8">
      
      {/* Header Banner */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 text-xs font-bold mb-2 border border-blue-200 dark:border-blue-900/50">
            <GraduationCap className="w-3.5 h-3.5 text-blue-500" />
            <span>Autonomous Examination Engine • Multi-Branch & All-Semester</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
            Targeted Examination & Mock Test Studio
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            Configure your exact branch, semester, and curriculum subject. Generates authenticated full-length question papers with Course Outcomes, Bloom's Taxonomy, and step-marking evaluation rubrics.
          </p>
        </div>

        {activeTestPaper && (
          <div className="flex items-center gap-2">
            <button
              onClick={handleReconfigure}
              className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Change Subject / New Test</span>
            </button>
          </div>
        )}
      </div>

      {/* VIEW A: IF NO ACTIVE TEST — RENDER PROFESSIONAL STEP-BY-STEP CONFIGURATOR */}
      {!activeTestPaper ? (
        <div className="space-y-8">
          
          {/* Step 1: Target Stream / Board Switcher */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono text-blue-500 uppercase font-bold tracking-wider">Step 1</span>
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  Select Examination Pattern / Curriculum
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {examStreams.map((stream) => {
                const isSelected = selectedStreamId === stream.id;
                return (
                  <button
                    key={stream.id}
                    onClick={() => handleStreamChange(stream.id)}
                    className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 font-bold'
                        : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    <span className="text-sm">{stream.boardLogo}</span>
                    <span>{stream.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2 & 3: For B.Tech — Branch & Semester Selectors */}
          {selectedStreamId === 'btech_makaut' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Branch Selector (5 cols) */}
              <div className="lg:col-span-5 p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-4">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono text-blue-500 uppercase font-bold tracking-wider">Step 2</span>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    Select Engineering Branch
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {BRANCHES.map((b) => {
                    const isSelected = selectedBranch === b.id;
                    return (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => setSelectedBranch(b.id)}
                        className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                          isSelected
                            ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-500 text-blue-900 dark:text-blue-200 shadow-sm ring-1 ring-blue-500'
                            : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                        }`}
                      >
                        <span className="text-xl p-1.5 rounded-xl bg-white dark:bg-slate-800 shadow-xs">{b.icon}</span>
                        <div className="truncate">
                          <div className="font-bold text-xs flex items-center gap-1.5">
                            <span>{b.code}</span>
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />}
                          </div>
                          <div className="text-[10px] text-slate-500 truncate">{b.badge}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Semester Selector (7 cols) */}
              <div className="lg:col-span-7 p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-blue-500 uppercase font-bold tracking-wider">Step 3</span>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      Select Academic Semester (Sem 1 - 8)
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/80 px-2.5 py-1 rounded-lg">
                    {selectedSemester <= 2 ? '🌱 1st Year' : selectedSemester <= 4 ? '💻 2nd Year' : selectedSemester <= 6 ? '⚡ 3rd Year' : '🚀 4th Year'}
                  </span>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => {
                    const isSelected = selectedSemester === sem;
                    return (
                      <button
                        key={sem}
                        type="button"
                        onClick={() => setSelectedSemester(sem)}
                        className={`py-3 px-2 rounded-2xl font-mono text-center transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/30 scale-105 font-bold'
                            : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                        }`}
                      >
                        <div className="text-xs font-bold">Sem {sem}</div>
                        <div className="text-[9px] opacity-75 mt-0.5">
                          {sem % 2 === 1 ? 'Odd' : 'Even'}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Info strip */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                  <span>Semester {selectedSemester} curriculum loaded</span>
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
                    {availableSubjects.length} Core Subjects Indexed
                  </span>
                </div>
              </div>

            </div>
          )}

          {/* Step 4: Subject Selection from Real Database */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono text-blue-500 uppercase font-bold tracking-wider">
                  {selectedStreamId === 'btech_makaut' ? 'Step 4' : 'Step 2'}
                </span>
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  Choose Subject for Mock Test
                </h3>
              </div>

              {/* Search filter for subjects */}
              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter subjects or codes..."
                  value={subjectSearchQuery}
                  onChange={(e) => setSubjectSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs outline-none border border-transparent focus:border-blue-500 text-slate-800 dark:text-slate-200"
                />
              </div>
            </div>

            {/* Subject Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredSubjects.map((subj) => {
                const isSelected = selectedSubjectCode === subj.code;
                return (
                  <div
                    key={subj.code}
                    onClick={() => setSelectedSubjectCode(subj.code)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer relative flex flex-col justify-between space-y-3 ${
                      isSelected
                        ? 'bg-blue-50/80 dark:bg-blue-950/50 border-blue-500 shadow-md ring-2 ring-blue-500/20'
                        : 'bg-slate-50/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-blue-600 dark:text-blue-300">
                          {subj.code}
                        </span>
                        {subj.hasPredictedPaper && (
                          <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1">
                            <Flame className="w-2.5 h-2.5 text-amber-500 fill-amber-500" />
                            <span>70M Paper Ready</span>
                          </span>
                        )}
                      </div>

                      <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-snug line-clamp-2">
                        {subj.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                        {subj.category} • {subj.credits} Credits
                      </p>
                    </div>

                    {/* Modules tags */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {subj.modules?.slice(0, 3).map((mod, mi) => (
                        <span key={mi} className="text-[9px] px-2 py-0.5 rounded-md bg-white/80 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-800 truncate max-w-[150px]">
                          {mod}
                        </span>
                      ))}
                    </div>

                    {/* Selection Radio Badge */}
                    <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-[11px]">
                      <span className={isSelected ? 'text-blue-600 dark:text-blue-300 font-bold' : 'text-slate-400'}>
                        {isSelected ? '✓ Selected for Mock Test' : 'Click to Select'}
                      </span>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        isSelected ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 dark:border-slate-600'
                      }`}>
                        {isSelected && <Check className="w-2.5 h-2.5" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 5: Examination Mode & Testing Format */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Mode Cards (7 cols) */}
            <div className="lg:col-span-7 p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-4">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono text-blue-500 uppercase font-bold tracking-wider">
                  {selectedStreamId === 'btech_makaut' ? 'Step 5' : 'Step 3'}
                </span>
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  Select Testing Mode & Evaluation Depth
                </h3>
              </div>

              <div className="space-y-2.5">
                {EXAM_MODES.map((mode) => {
                  const isSelected = selectedExamMode === mode.id;
                  return (
                    <div
                      key={mode.id}
                      onClick={() => setSelectedExamMode(mode.id)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                        isSelected
                          ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-500 shadow-sm ring-1 ring-blue-500'
                          : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                      }`}
                    >
                      <div className={`mt-0.5 w-4 h-4 rounded-full border shrink-0 flex items-center justify-center ${
                        isSelected ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-400'
                      }`}>
                        {isSelected && <Check className="w-2.5 h-2.5" />}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-bold text-xs text-slate-900 dark:text-white">
                            {mode.title}
                          </span>
                          <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-800 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700">
                            {mode.marks} Marks • {mode.duration}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                          {mode.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Exam Blueprint & Readiness Launch Box (5 cols) */}
            <div className="lg:col-span-5 p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl border border-indigo-900/50 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-wider">
                    Official Examination Blueprint
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Ready to Generate
                  </span>
                </div>

                <div>
                  <div className="text-xs text-slate-400">Target Subject:</div>
                  <h3 className="text-base font-bold font-display text-white mt-0.5">
                    {activeSubjectObj?.name || 'Selected Subject'}
                  </h3>
                  <div className="text-xs text-blue-300 font-mono mt-1">
                    Code: {activeSubjectObj?.code} • B.Tech {selectedBranch.toUpperCase()} (Sem {selectedSemester})
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-slate-400 block text-[10px]">Full Marks:</span>
                    <strong className="text-white text-sm">
                      {selectedExamMode === 'full_70m' ? '70 Marks' : selectedExamMode === 'speed_mcq' ? '25 Marks' : '30 Marks'}
                    </strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-slate-400 block text-[10px]">Time Allowed:</span>
                    <strong className="text-white text-sm">
                      {selectedExamMode === 'full_70m' ? '3 Hours' : selectedExamMode === 'speed_mcq' ? '30 Mins' : '45 Mins'}
                    </strong>
                  </div>
                </div>

                <div className="text-[11px] text-slate-300 space-y-1 pt-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Bloom's Taxonomy Mapped (L1 to L4)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Step-by-Step Marking Rubrics Included</span>
                  </div>
                </div>
              </div>

              {/* Primary Launch Action */}
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={handleLaunchPaper}
                  disabled={isEvaluating}
                  className="w-full py-3 px-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-glow-blue flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>
                    {isEvaluating ? 'Synthesizing Official Paper...' : '🚀 Initialize & Start Examination'}
                  </span>
                </button>
              </div>

            </div>

          </div>

        </div>
      ) : (
        /* VIEW B: ACTIVE EXAMINATION CANVAS & EVALUATOR */
        <div className="space-y-6">
          
          {/* Top Exam Status Toolbar */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <span>Code: {activeTestPaper.paperCode}</span>
                <span>•</span>
                <span className="text-blue-500 font-bold">{activeTestPaper.subject}</span>
              </div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                {activeTestPaper.title}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-between md:justify-end">
              {/* Countdown Clock */}
              <div className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold flex items-center gap-2 border ${
                secondsRemaining < 600
                  ? 'bg-rose-50 dark:bg-rose-950/60 text-rose-600 border-rose-200 animate-pulse'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
              }`}>
                <Clock className="w-3.5 h-3.5 text-blue-500" />
                <span>{formatTimer(secondsRemaining)}</span>
              </div>

              {/* View Switcher: Interactive CBT vs Hall Paper */}
              <div className="flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <button
                  onClick={() => setViewMode('cbt')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    viewMode === 'cbt'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  Interactive CBT
                </button>
                <button
                  onClick={() => setViewMode('hall_paper')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    viewMode === 'hall_paper'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  📄 Hall Paper View
                </button>
              </div>

              {/* Print / Download Buttons */}
              <button
                onClick={() => handleDownloadPDF(false)}
                title="Download Clean Question Paper (Printable A4)"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 text-xs font-bold cursor-pointer"
              >
                <Printer className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mode 1: Interactive CBT Mode */}
          {viewMode === 'cbt' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column (8 cols): Question Canvas */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Section / Group Tabs */}
                <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2 overflow-x-auto no-scrollbar">
                  {activeTestPaper.groups.map((group, idx) => {
                    const isActive = activeGroupIndex === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          setActiveGroupIndex(idx);
                          setCurrentQuestionIndex(0);
                        }}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                          isActive
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                        }`}
                      >
                        {group.name}
                      </button>
                    );
                  })}
                </div>

                {/* Question Card */}
                {currentQ && (
                  <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-6">
                    
                    <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 font-mono">
                          Question {currentQuestionIndex + 1} of {currentQuestions.length} ({activeTestPaper.groups[activeGroupIndex].name})
                        </span>
                        {currentQ.co && (
                          <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                              Outcome: {currentQ.co}
                            </span>
                            {currentQ.bloom && (
                              <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300">
                                Level: {currentQ.bloom}
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                          [{currentQ.marks} Mark{currentQ.marks > 1 ? 's' : ''}]
                        </span>
                        <button
                          onClick={() => toggleMarkForReview(currentQ.id)}
                          className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 cursor-pointer ${
                            markedForReview[currentQ.id]
                              ? 'bg-purple-50 text-purple-700 border-purple-300 font-bold dark:bg-purple-950/60 dark:text-purple-300'
                              : 'text-slate-400 border-slate-200 hover:bg-slate-50 dark:border-slate-700'
                          }`}
                        >
                          <Bookmark className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Review</span>
                        </button>
                      </div>
                    </div>

                    {/* Question Text */}
                    <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-relaxed">
                      {currentQ.text}
                    </div>

                    {/* Subparts if subjective */}
                    {currentQ.subparts && (
                      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-2">
                        <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Sub-Questions & Mark Allocation:</div>
                        <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-mono">
                          {currentQ.subparts.map((sp, sidx) => (
                            <li key={sidx} className="flex items-start gap-2">
                              <span className="text-blue-500 font-bold">•</span>
                              <span>{sp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* MCQ Options Grid */}
                    {currentQ.type === 'mcq' && currentQ.options && (
                      <div className="space-y-2.5 pt-2">
                        {currentQ.options.map((opt, optIdx) => {
                          const isSelected = userAnswers[currentQ.id] === opt;
                          const isCorrect = showAnswers && opt === currentQ.correct;
                          const isWrong = showAnswers && isSelected && opt !== currentQ.correct;

                          return (
                            <button
                              key={optIdx}
                              onClick={() => !showAnswers && handleSelectOption(currentQ.id, opt)}
                              disabled={showAnswers}
                              className={`w-full p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 text-xs sm:text-sm font-medium ${
                                isCorrect
                                  ? 'bg-emerald-500/10 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold'
                                  : isWrong
                                  ? 'bg-rose-500/10 border-rose-500 text-rose-700 dark:text-rose-300 font-bold'
                                  : isSelected
                                  ? 'bg-blue-600/10 border-blue-600 text-blue-800 dark:text-blue-200 font-bold'
                                  : 'bg-slate-50/50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200'
                              }`}
                            >
                              <span>{opt}</span>
                              {isSelected && !showAnswers && (
                                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                              )}
                              {isCorrect && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                              )}
                              {isWrong && (
                                <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Subjective Notes / Drafting Box */}
                    {currentQ.type === 'subjective' && (
                      <div className="space-y-2 pt-2">
                        <label className="text-[11px] font-mono text-slate-400">
                          Draft your numerical answer / pseudocode / notes:
                        </label>
                        <textarea
                          rows={4}
                          value={userAnswers[currentQ.id] || ''}
                          onChange={(e) => handleTextAnswerChange(currentQ.id, e.target.value)}
                          placeholder="Type your derivation steps, final value with units, or proof notes here..."
                          className="w-full p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-slate-200"
                        />
                      </div>
                    )}

                    {/* Model Answer & Step-Marking Rubric (Unlocked after submit or toggle) */}
                    {showAnswers && (
                      <div className="p-4 sm:p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 dark:text-emerald-200 text-xs space-y-2">
                        <div className="font-bold flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Official Evaluator Model Solution & Step-Marking Rubric:</span>
                        </div>
                        {currentQ.correct && (
                          <div><strong>Correct Choice:</strong> {currentQ.correct}</div>
                        )}
                        {currentQ.explanation && (
                          <div className="text-slate-700 dark:text-slate-300 font-sans">{currentQ.explanation}</div>
                        )}
                        {currentQ.modelAnswer && (
                          <div className="font-mono text-[11px] whitespace-pre-wrap bg-white/60 dark:bg-black/30 p-3 rounded-xl border border-emerald-500/20 mt-2">
                            {currentQ.modelAnswer}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                      <button
                        onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                        disabled={currentQuestionIndex === 0}
                        className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 disabled:opacity-40 flex items-center gap-1 cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Previous</span>
                      </button>

                      <button
                        onClick={() => setCurrentQuestionIndex(prev => Math.min(currentQuestions.length - 1, prev + 1))}
                        disabled={currentQuestionIndex === currentQuestions.length - 1}
                        className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold disabled:opacity-40 flex items-center gap-1 cursor-pointer"
                      >
                        <span>Next Question</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                )}

              </div>

              {/* Right Column (4 cols): Question Palette & Progress */}
              <div className="lg:col-span-4 space-y-6">
                
                <div className="p-6 rounded-3xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">Question Navigator</h3>
                    <span className="text-xs font-mono text-slate-400">
                      {stats.answered} / {stats.total} Answered
                    </span>
                  </div>

                  {/* Palette Grid */}
                  <div className="grid grid-cols-5 gap-2">
                    {currentQuestions.map((q, qIdx) => {
                      const isAns = userAnswers[q.id];
                      const isRev = markedForReview[q.id];
                      const isCur = currentQuestionIndex === qIdx;

                      let badgeColor = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300';
                      if (isRev) badgeColor = 'bg-purple-600 text-white font-bold';
                      else if (isAns) badgeColor = 'bg-emerald-600 text-white font-bold';

                      return (
                        <button
                          key={q.id}
                          onClick={() => setCurrentQuestionIndex(qIdx)}
                          className={`h-10 rounded-xl text-xs transition-all border cursor-pointer ${badgeColor} ${
                            isCur ? 'ring-2 ring-blue-500 scale-105 border-blue-500' : 'border-transparent'
                          }`}
                        >
                          {qIdx + 1}
                        </button>
                      );
                    })}
                  </div>

                  {/* Legend */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2 text-[11px] text-slate-500">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-emerald-600"></span>
                      <span>Answered ({stats.answered})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-purple-600"></span>
                      <span>Marked for Review ({stats.review})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-slate-200 dark:bg-slate-700"></span>
                      <span>Not Answered Yet ({stats.total - stats.answered})</span>
                    </div>
                  </div>

                  {/* Score summary if submitted */}
                  {scoreResult && (
                    <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 space-y-2 animate-fade-in">
                      <div className="text-xs font-bold text-emerald-800 dark:text-emerald-200">Evaluation Result:</div>
                      <div className="text-2xl font-extrabold font-display text-emerald-600 dark:text-emerald-400">
                        {scoreResult.score.toFixed(1)} / {scoreResult.totalMcq} Marks
                      </div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-300">
                        Correct: {scoreResult.correctCount} • Incorrect: {scoreResult.incorrectCount}
                      </div>
                    </div>
                  )}

                  {/* Submit Examination Button */}
                  {!scoreResult ? (
                    <button
                      type="button"
                      onClick={handleSubmitPaper}
                      className="w-full py-3 px-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-glow-blue flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Full Examination & Score</span>
                    </button>
                  ) : (
                    <div className="space-y-2">
                      <button
                        type="button"
                        onClick={() => handleDownloadPDF(true)}
                        className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <FileText className="w-4 h-4" />
                        <span>Print Evaluated Paper with Solutions</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleReconfigure}
                        className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <RotateCcw className="w-4 h-4" />
                        <span>Take Another Subject Mock Test</span>
                      </button>
                    </div>
                  )}

                </div>

              </div>

            </div>
          )}

          {/* Mode 2: Hall Paper View (View all questions like printed sheet) */}
          {viewMode === 'hall_paper' && (
            <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-8 font-serif">
              
              {/* Paper Header */}
              <div className="text-center pb-6 border-b-2 border-slate-800 dark:border-slate-600 space-y-2">
                <div className="text-xs font-sans uppercase font-bold tracking-wider text-slate-500">
                  {currentStream.name}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {activeTestPaper.title}
                </h2>
                <div className="text-xs font-sans text-slate-600 dark:text-slate-400">
                  Subject: <strong>{activeTestPaper.subject}</strong> | Paper Code: <strong>{activeTestPaper.paperCode}</strong>
                </div>
                <div className="flex items-center justify-between text-xs font-sans pt-2 border-t border-slate-200 dark:border-slate-800">
                  <span>Time Allowed: <strong>{activeTestPaper.duration}</strong></span>
                  <span>Full Marks: <strong>{activeTestPaper.totalMarks}</strong></span>
                </div>
              </div>

              {/* All Groups */}
              {activeTestPaper.groups.map((group, gIdx) => (
                <div key={gIdx} className="space-y-4">
                  <div className="pb-1 border-b border-slate-200 dark:border-slate-800">
                    <h3 className="font-bold text-base text-slate-900 dark:text-white uppercase font-sans">
                      {group.name}
                    </h3>
                    <p className="text-xs italic text-slate-500 font-sans mt-0.5">
                      {group.instructions}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {group.questions.map((q, qIdx) => (
                      <div key={q.id} className="space-y-2 text-sm text-slate-900 dark:text-slate-100">
                        <div className="flex items-start justify-between gap-4 font-semibold">
                          <span>{q.text}</span>
                          <span className="shrink-0 font-sans text-xs font-bold text-slate-600 dark:text-slate-400">
                            [{q.marks}M]
                          </span>
                        </div>

                        {q.subparts && (
                          <ul className="pl-6 space-y-1 text-xs font-sans text-slate-600 dark:text-slate-300">
                            {q.subparts.map((sp, spi) => (
                              <li key={spi}>• {sp}</li>
                            ))}
                          </ul>
                        )}

                        {q.type === 'mcq' && q.options && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4 text-xs font-sans">
                            {q.options.map((opt, oi) => (
                              <div key={oi} className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                {opt}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => handleDownloadPDF(false)}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-sans text-xs font-bold flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download / Print Clean PDF</span>
                </button>
              </div>

            </div>
          )}

        </div>
      )}

    </div>
  );
};
