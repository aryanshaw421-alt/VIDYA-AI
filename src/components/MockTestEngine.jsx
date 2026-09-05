import React, { useState, useEffect } from 'react';
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
  FileText
} from 'lucide-react';
import { examStreams, sampleMockPapers } from '../data/examPatterns';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

export const MockTestEngine = () => {
  const [selectedStreamId, setSelectedStreamId] = useState('btech_makaut');
  const [selectedSubject, setSelectedSubject] = useState('Data Structures & Algorithms');
  const [activeTestPaper, setActiveTestPaper] = useState(null);
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [markedForReview, setMarkedForReview] = useState({});
  const [showAnswers, setShowAnswers] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [scoreResult, setScoreResult] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentStream = examStreams.find(s => s.id === selectedStreamId) || examStreams[0];

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
          @page { size: A4; margin: 20mm; }
          body { font-family: 'Times New Roman', serif; color: #111; line-height: 1.4; padding: 10px; }
          .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 15px; }
          .inst-box { border: 1px solid #444; padding: 10px; margin-bottom: 20px; font-size: 13px; background: #fafafa; }
          .meta-row { display: flex; justify-content: space-between; font-weight: bold; margin-bottom: 8px; font-size: 14px; }
          .group-header { font-weight: bold; font-size: 15px; text-decoration: underline; margin-top: 20px; margin-bottom: 8px; text-transform: uppercase; }
          .q-block { margin-bottom: 15px; page-break-inside: avoid; font-size: 14px; }
          .q-text { font-weight: 600; margin-bottom: 4px; }
          .options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-left: 20px; margin-top: 4px; }
          .solution-box { background: #f0fdf4; border-left: 4px solid #16a34a; padding: 8px; margin-top: 6px; font-family: monospace; font-size: 12px; }
          .watermark { position: fixed; bottom: 10px; right: 10px; font-size: 10px; color: #888; font-family: sans-serif; }
          @media print {
            .no-print { display: none; }
          }
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
            ${includeSolutions ? '<li style="color: green;"><strong>[OFFICIAL MODEL ANSWER KEY & MARKING SCHEME INCLUDED]</strong></li>' : ''}
          </ul>
        </div>

        ${activeTestPaper.groups.map((group, gIdx) => `
          <div class="group-header">${group.name}</div>
          <div style="font-size: 12px; font-style: italic; margin-bottom: 10px;">${group.instructions || ''}</div>
          
          ${group.questions.map((q, qIdx) => `
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
                  <strong>Model Answer / Rubric:</strong><br/>
                  ${q.correct ? `<strong>Correct Option:</strong> ${q.correct}<br/>` : ''}
                  ${q.explanation || q.modelAnswer || 'Step-marking applied based on standard derivation.'}
                </div>
              ` : ''}
            </div>
          `).join('')}
        `).join('')}

        <div class="watermark">Generated via VIDYA AI Cognitive Study Suite • ${new Date().toLocaleDateString()}</div>

        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 400);
          };
        </script>
      </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();

    confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
    toast.success('Question Paper PDF Ready for Download / Printing!');
  };

  const handleStreamChange = (streamId) => {
    setSelectedStreamId(streamId);
    const newStream = examStreams.find(s => s.id === streamId);
    if (newStream && newStream.subjects.length > 0) {
      setSelectedSubject(newStream.subjects[0]);
    }
    setActiveTestPaper(null);
    setScoreResult(null);
    setShowAnswers(false);
    setUserAnswers({});
    setMarkedForReview({});
  };

  const handleGeneratePaper = () => {
    setIsEvaluating(true);
    toast.info(`Generating full ${currentStream.patternName} model paper...`, {
      description: `Loading complete question set for ${selectedSubject}.`
    });

    setTimeout(() => {
      setIsEvaluating(false);
      const papers = sampleMockPapers[selectedStreamId] || sampleMockPapers.btech_makaut;
      const paper = papers[0];
      setActiveTestPaper(paper);
      setActiveGroupIndex(0);
      setCurrentQuestionIndex(0);
      setUserAnswers({});
      setMarkedForReview({});
      setShowAnswers(false);
      setScoreResult(null);

      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      toast.success('Full Examination Paper Generated with All Questions!');
    }, 500);
  };

  const handleSelectOption = (questionId, option) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: option }));
  };

  const handleTextAnswerChange = (questionId, text) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: text }));
  };

  const toggleMarkForReview = (questionId) => {
    setMarkedForReview(prev => ({ ...prev, [questionId]: !prev[questionId] }));
    toast.info('Question marked for review.');
  };

  const handleSubmitPaper = () => {
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
                // Negative penalty
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
    confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    toast.success('Mock Paper Evaluated!', {
      description: `Final Score: ${score.toFixed(1)} Marks. Detailed step-marking rubric now visible.`
    });
  };

  const currentQuestions = activeTestPaper ? activeTestPaper.groups[activeGroupIndex].questions : [];
  const currentQ = currentQuestions[currentQuestionIndex] || currentQuestions[0];

  return (
    <div className="w-full fluid-container py-6 sm:py-10 animate-fade-in space-y-8">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#407E8C]/10 text-[#407E8C] dark:text-[#6BB0C0] text-xs font-bold mb-2 border border-[#407E8C]/20">
            <FileCheck className="w-3.5 h-3.5 text-[#407E8C]" />
            <span>Full Examination & Official Pattern Paper Studio</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-[#083A4F] dark:text-white">
            Full-Length Mock Paper Generator
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 max-w-2xl">
            Complete question papers generated with exact official question counts, negative marking, and step-marking schemes.
          </p>
        </div>
      </div>

      {/* Board & University Stream Switcher with Animated Pill */}
      <div className="p-2 rounded-2xl bg-[#FAF9F7] dark:bg-[#062432] border border-[#083A4F]/10 dark:border-[#407E8C]/20 shadow-sm flex flex-wrap items-center gap-2 relative">
        {examStreams.map((stream) => {
          const isSelected = selectedStreamId === stream.id;
          return (
            <button
              key={stream.id}
              onClick={() => handleStreamChange(stream.id)}
              className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-colors duration-150 z-10 ${
                isSelected
                  ? 'text-white'
                  : 'text-neutral-600 dark:text-neutral-300 hover:text-[#083A4F] dark:hover:text-white'
              }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="streamTogglePill"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="absolute inset-0 bg-[#407E8C] rounded-xl shadow-sm -z-10"
                />
              )}
              <motion.span whileHover={{ scale: 1.2 }}>{stream.boardLogo}</motion.span>
              <span>{stream.name}</span>
            </button>
          );
        })}
      </div>

      {/* Pattern Breakdown Banner & Generator Controls */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#083A4F] text-white shadow-xl border border-[#407E8C]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#407E8C]/20 blur-3xl rounded-full pointer-events-none" />
        <div className="space-y-2 relative z-10">
          <div className="text-xs font-mono text-[#A58D66] font-bold uppercase tracking-wider">
            Pattern: {currentStream.patternName}
          </div>
          <h3 className="text-xl font-bold font-display text-white">
            {currentStream.name} • {currentStream.totalMarks} Total Marks ({currentStream.durationMinutes} Mins)
          </h3>
          <div className="flex flex-wrap gap-2 pt-2">
            {currentStream.structure.map((st, i) => (
              <span key={i} className="px-2.5 py-1 rounded-lg bg-white/10 text-[11px] font-mono text-[#E5E1DD] border border-white/10">
                <strong>{st.name}:</strong> {st.marks} ({st.count})
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0 relative z-10">
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="px-3.5 py-2.5 rounded-xl bg-[#052735] border border-[#407E8C]/40 text-white text-xs font-semibold outline-none focus:ring-2 focus:ring-[#407E8C]"
          >
            {currentStream.subjects.map((sub, i) => (
              <option key={i} value={sub}>{sub}</option>
            ))}
          </select>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGeneratePaper}
            disabled={isEvaluating}
            className="px-5 py-2.5 rounded-xl bg-[#407E8C] hover:bg-[#346875] text-white font-bold text-xs shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            <Sparkles className="w-4 h-4 text-[#A58D66]" />
            <span>Generate Full Paper</span>
          </motion.button>
        </div>
      </div>

      {/* Main Test Paper Simulation Canvas */}
      {activeTestPaper ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column (8 cols): Active Question & Answering Stage */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Header info with PDF Download actions */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#062432] border border-[#083A4F]/10 dark:border-white/10 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-[11px] font-mono text-neutral-400">Code: {activeTestPaper.paperCode}</div>
                <h2 className="text-base font-bold text-[#083A4F] dark:text-white">{activeTestPaper.title}</h2>
              </div>
              
              <div className="flex flex-wrap items-center gap-2">
                <div className="px-3 py-1.5 rounded-xl bg-[#083A4F]/5 dark:bg-white/5 text-xs font-mono font-bold text-[#083A4F] dark:text-neutral-300 flex items-center gap-1.5 border border-[#083A4F]/10 dark:border-white/10">
                  <Clock className="w-3.5 h-3.5 text-[#407E8C]" />
                  <span>02:45:10</span>
                </div>

                <button
                  onClick={() => handleDownloadPDF(false)}
                  title="Download standard question paper PDF for offline practice"
                  className="px-3 py-1.5 rounded-xl bg-[#083A4F]/10 text-[#083A4F] dark:text-[#6BB0C0] hover:bg-[#083A4F]/20 text-xs font-bold transition-all flex items-center gap-1.5 border border-[#083A4F]/20 dark:border-[#407E8C]/30 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#407E8C]" />
                  <span>Download PDF</span>
                </button>

                <button
                  onClick={() => handleDownloadPDF(true)}
                  title="Download question paper with full step-marking model answer key"
                  className="px-3 py-1.5 rounded-xl bg-[#A58D66]/20 text-[#A58D66] dark:text-[#C5AF88] hover:bg-[#A58D66]/30 text-xs font-bold transition-all flex items-center gap-1.5 border border-[#A58D66]/30 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-[#A58D66]" />
                  <span className="hidden sm:inline">PDF + Solutions</span>
                </button>
              </div>
            </div>

            {/* Section / Group Tabs with Sliding Pill */}
            <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2 relative">
              {activeTestPaper.groups.map((group, idx) => {
                const isActive = activeGroupIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveGroupIndex(idx);
                      setCurrentQuestionIndex(0);
                    }}
                    className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-colors duration-150 z-10 ${
                      isActive
                        ? 'text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="groupTogglePill"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="absolute inset-0 bg-blue-600 rounded-xl shadow-sm -z-10"
                      />
                    )}
                    <span>{group.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Question Display Card */}
            {currentQ && (
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-5">
                
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 font-mono">
                    Question {currentQuestionIndex + 1} of {currentQuestions.length} ({activeTestPaper.groups[activeGroupIndex].name})
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-mono font-bold text-slate-600 dark:text-slate-300">
                      [{currentQ.marks} Mark{currentQ.marks > 1 ? 's' : ''}]
                    </span>
                    <button
                      onClick={() => toggleMarkForReview(currentQ.id)}
                      className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 ${
                        markedForReview[currentQ.id]
                          ? 'bg-purple-50 text-purple-700 border-purple-300 font-bold'
                          : 'text-slate-400 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Review</span>
                    </button>
                  </div>
                </div>

                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-relaxed whitespace-pre-line">
                  {currentQ.text}
                </h3>

                {currentQ.subparts && (
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 list-disc list-inside bg-slate-50 dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800">
                    {currentQ.subparts.map((sub, sIdx) => (
                      <li key={sIdx}>{sub}</li>
                    ))}
                  </ul>
                )}

                {/* MCQ Options */}
                {currentQ.type === 'mcq' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {currentQ.options.map((opt, oIdx) => {
                      const isSelected = userAnswers[currentQ.id] === opt;
                      const isThisCorrect = opt === currentQ.correct;

                      let btnStyle = 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-blue-400';
                      if (isSelected) {
                        btnStyle = 'bg-blue-50 dark:bg-blue-950 border-blue-500 text-blue-900 dark:text-blue-100 font-bold shadow-sm';
                      }
                      if (showAnswers) {
                        if (isThisCorrect) {
                          btnStyle = 'bg-emerald-50 dark:bg-emerald-950 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
                        } else if (isSelected && !isThisCorrect) {
                          btnStyle = 'bg-rose-50 dark:bg-rose-950 border-rose-500 text-rose-900 dark:text-rose-200';
                        }
                      }

                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleSelectOption(currentQ.id, opt)}
                          className={`p-4 rounded-2xl border text-left text-xs transition-all flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {isSelected && <Check className="w-4 h-4 text-blue-600 shrink-0 ml-2" />}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Subjective Answering Box */}
                {currentQ.type === 'subjective' && (
                  <div className="space-y-2 pt-2">
                    <textarea
                      rows={5}
                      placeholder="Write your step-by-step mathematical proof, derivation, or code here..."
                      value={userAnswers[currentQ.id] || ''}
                      onChange={(e) => handleTextAnswerChange(currentQ.id, e.target.value)}
                      className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}

                {/* Official Step-Marking Model Answer Solution */}
                {showAnswers && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs space-y-2"
                  >
                    <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Official Step-Marking Solution:</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-mono whitespace-pre-line">
                      {currentQ.explanation || currentQ.modelAnswer}
                    </p>
                  </motion.div>
                )}

                {/* Previous / Next Navigation Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    disabled={currentQuestionIndex === 0}
                    onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
                    className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold disabled:opacity-30 flex items-center gap-1.5"
                  >
                    <ChevronLeft className="w-4 h-4" /> Previous
                  </button>

                  <button
                    disabled={currentQuestionIndex === currentQuestions.length - 1}
                    onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold disabled:opacity-30 flex items-center gap-1.5"
                  >
                    Next <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            )}

            {/* Bottom Actions */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowAnswers(!showAnswers)}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-200 flex items-center gap-1.5"
                >
                  <Eye className="w-4 h-4 text-blue-500" />
                  <span>{showAnswers ? 'Hide Solution Key' : 'Reveal Model Answer Key'}</span>
                </button>

                <button
                  onClick={() => handleDownloadPDF(false)}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-200 flex items-center gap-1.5"
                >
                  <Printer className="w-4 h-4 text-slate-500" />
                  <span>Print Paper</span>
                </button>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleSubmitPaper}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-glow-blue flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Full Paper & Check Score</span>
              </motion.button>
            </div>

          </div>

          {/* Right Column (4 cols): Full Question Navigator Palette */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-4">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">Question Navigator Palette</h3>
              
              <div className="grid grid-cols-5 gap-2">
                {currentQuestions.map((q, qIdx) => {
                  const isAns = userAnswers[q.id];
                  const isRev = markedForReview[q.id];
                  const isCur = currentQuestionIndex === qIdx;

                  let badgeColor = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300';
                  if (isRev) badgeColor = 'bg-purple-500 text-white font-bold';
                  else if (isAns) badgeColor = 'bg-emerald-500 text-white font-bold';

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentQuestionIndex(qIdx)}
                      className={`h-10 rounded-xl text-xs transition-all border ${badgeColor} ${
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
                  <span className="w-3 h-3 rounded bg-emerald-500"></span>
                  <span>Answered Question</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-purple-500"></span>
                  <span>Marked for Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-slate-200 dark:bg-slate-700"></span>
                  <span>Not Answered Yet</span>
                </div>
              </div>

              {/* Score summary if submitted */}
              {scoreResult && (
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 space-y-2">
                  <div className="text-xs font-bold text-emerald-800 dark:text-emerald-200">Evaluation Result:</div>
                  <div className="text-2xl font-extrabold font-display text-emerald-600 dark:text-emerald-400">
                    {scoreResult.score.toFixed(1)} Marks
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-300">
                    Correct: {scoreResult.correctCount} • Incorrect: {scoreResult.incorrectCount}
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      ) : (
        /* Empty State */
        <div className="p-12 rounded-3xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm text-center space-y-4">
          <div className="w-14 h-14 rounded-3xl bg-blue-50 dark:bg-blue-950 text-blue-600 flex items-center justify-center mx-auto shadow-sm">
            <GraduationCap className="w-7 h-7" />
          </div>
          <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white">
            Generate Complete Official Model Paper for {currentStream.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
            Select your subject and click <strong>"Generate Full Paper"</strong> to simulate authentic full-length examination papers with complete question banks.
          </p>
          <button
            onClick={handleGeneratePaper}
            className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-glow-blue inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Generate Full Official Paper</span>
          </button>
        </div>
      )}

    </div>
  );
};
