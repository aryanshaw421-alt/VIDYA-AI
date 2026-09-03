import React, { useState } from 'react';
import { 
  BTECH_STUDY_MATERIALS, 
  BtechSubjectMaterial, 
  SubjectModule, 
  SolvedPyq 
} from '../../data/btechStudyMaterialData';
import { 
  BookOpen, 
  Search, 
  CheckCircle2, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Award, 
  FileText, 
  Code, 
  Download, 
  Copy, 
  Flame, 
  Layers, 
  ExternalLink,
  GraduationCap,
  Cpu,
  Brain,
  Database,
  Network,
  Binary
} from 'lucide-react';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

export const BtechStudyMaterialView: React.FC = () => {
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('dsa');
  const [activeTab, setActiveTab] = useState<'modules' | 'pyqs' | 'cheatsheet' | 'viva' | 'books'>('modules');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedModule, setExpandedModule] = useState<number | null>(1);
  const [expandedPyq, setExpandedPyq] = useState<string | null>(null);

  const selectedSubject = BTECH_STUDY_MATERIALS.find(s => s.id === selectedSubjectId) || BTECH_STUDY_MATERIALS[0];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`Copied ${label} to clipboard!`);
  };

  const handleDownload = (subjectName: string) => {
    confetti({ particleCount: 35, spread: 60, origin: { y: 0.6 } });
    toast.success(`Downloaded Complete Study Notes for ${subjectName}!`);
  };

  const filteredSubjects = BTECH_STUDY_MATERIALS.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.subjectCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.modules.some(m => m.title.toLowerCase().includes(searchQuery.toLowerCase()) || m.keyTopics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
    <div className="w-full space-y-8 animate-fade-in">
      
      {/* 1. Header Banner & Search */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-semibold mb-2">
            <GraduationCap className="w-3.5 h-3.5 text-brand-400" />
            <span>B.Tech CSE / IT Core Academic Library</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
            Subject-Wise Study Material & PYQ Master
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Complete chapter-wise notes, 10-mark university solved answers, formula sheets, and lab viva banks.
          </p>
        </div>

        <div className="relative w-full lg:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search subjects, topics (e.g., AVL, Banker's, Subnetting)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
      </div>

      {/* 2. Subject Selection Horizontal Grid / Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {BTECH_STUDY_MATERIALS.map((subj) => {
          const isSelected = subj.id === selectedSubjectId;
          return (
            <button
              key={subj.id}
              onClick={() => {
                setSelectedSubjectId(subj.id);
                setExpandedModule(1);
              }}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between group ${
                isSelected
                  ? 'bg-slate-800/90 border-brand-500 shadow-glow-cyan'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                    isSelected ? 'bg-brand-500/20 text-brand-300' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {subj.subjectCode}
                  </span>
                </div>
                <h4 className={`text-xs font-bold transition-colors line-clamp-2 ${
                  isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                }`}>
                  {subj.name}
                </h4>
              </div>
              <span className="text-[10px] text-slate-400 font-mono mt-3">
                {subj.semester}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3. Selected Subject Detail Container */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
        
        {/* Subject Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-brand-500/20 text-brand-300 border border-brand-500/30">
                {selectedSubject.subjectCode}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {selectedSubject.category} • {selectedSubject.semester}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {selectedSubject.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
              {selectedSubject.syllabusOverview}
            </p>
          </div>

          <button
            onClick={() => handleDownload(selectedSubject.name)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold shadow-glow-cyan transition-all shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Download All Hand-Notes (PDF)</span>
          </button>
        </div>

        {/* Sub-Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800/80">
          {[
            { id: 'modules', label: `📖 Modules & Notes (${selectedSubject.modules.length})` },
            { id: 'pyqs', label: `🔥 Solved 10-Mark PYQs (${selectedSubject.topSolvedPyqs.length})` },
            { id: 'cheatsheet', label: `⚡ Formula Cheat Sheet` },
            { id: 'viva', label: `🎤 Lab Viva Focus` },
            { id: 'books', label: `📚 Standard Textbooks` }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-brand-600/20 text-brand-300 border border-brand-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: MODULES & DETAILED CHAPTER NOTES */}
        {activeTab === 'modules' && (
          <div className="space-y-4">
            {selectedSubject.modules.map((mod) => {
              const isOpen = expandedModule === mod.moduleNumber;
              return (
                <div
                  key={mod.moduleNumber}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedModule(isOpen ? null : mod.moduleNumber)}
                    className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-900/60 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-400 flex items-center justify-center font-mono font-bold text-xs">
                        M{mod.moduleNumber}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">
                          {mod.title}
                        </h4>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {mod.keyTopics.length} Core University Concepts
                        </span>
                      </div>
                    </div>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 border-t border-slate-800/80 space-y-4 mt-2">
                      
                      {/* Conceptual Summary */}
                      <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                        <strong className="text-cyan-400 block mb-1">Concept Summary & Core Theory:</strong>
                        {mod.summary}
                      </div>

                      {/* Key Topics Covered */}
                      <div>
                        <span className="text-xs font-bold text-slate-200 block mb-2">Key Topics Included in Syllabus:</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {mod.keyTopics.map((topic, i) => (
                            <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-slate-900/50 border border-slate-800/60 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Important Formulas & Theorems */}
                      {mod.importantFormulasOrTheorems && mod.importantFormulasOrTheorems.length > 0 && (
                        <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-900/30 space-y-2">
                          <span className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                            Key Formulas, Recurrences & Bounds:
                          </span>
                          <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                            {mod.importantFormulasOrTheorems.map((form, i) => (
                              <li key={i} className="flex items-start justify-between gap-2 p-1.5 rounded bg-slate-900/60 border border-slate-800">
                                <span>{form}</span>
                                <button 
                                  onClick={() => handleCopy(form, 'Formula')}
                                  className="text-slate-400 hover:text-cyan-300 p-1"
                                  title="Copy"
                                >
                                  <Copy className="w-3 h-3" />
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* University Exam Scoring Tip */}
                      <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 flex items-start gap-2">
                        <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <strong>Examiner's Scoring Tip: </strong>
                          {mod.examTips}
                        </div>
                      </div>

                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 2: SOLVED 10-MARK PYQS */}
        {activeTab === 'pyqs' && (
          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-xs text-brand-300 flex items-center justify-between">
              <span>These questions have appeared in university exams across the last 5 years with 90%+ recurrence frequency.</span>
              <span className="px-2 py-0.5 rounded bg-brand-500/20 text-[10px] font-mono font-bold">10-MARK FULL SOLUTIONS</span>
            </div>

            {selectedSubject.topSolvedPyqs.map((pyq) => (
              <div
                key={pyq.id}
                className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold font-mono bg-rose-500/20 text-rose-300 border border-rose-500/30">
                      {pyq.marks} MARKS
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold font-mono bg-emerald-500/20 text-emerald-300">
                      {pyq.frequency}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">
                    Repeated In: {pyq.repeatedInYears.join(', ')}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white leading-snug">
                  {pyq.question}
                </h4>

                {/* Step-by-step Solution */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-slate-200 leading-relaxed space-y-3">
                  <strong className="text-cyan-400 block">Step-by-Step Model University Answer:</strong>
                  <p className="whitespace-pre-line">{pyq.solution}</p>
                </div>

                {/* Diagram / Code if available */}
                {pyq.diagramOrCode && (
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 overflow-x-auto">
                    <pre>{pyq.diagramOrCode}</pre>
                  </div>
                )}

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-start gap-2">
                  <span className="text-amber-400 font-bold">Examiner Note:</span>
                  <span>{pyq.examinerNotes}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: FORMULA CHEAT SHEET */}
        {activeTab === 'cheatsheet' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-bold text-white">
                Quick Formula & Complexity Cheat Sheet
              </h4>
              <button
                onClick={() => handleCopy(selectedSubject.cheatSheetHighlights.join('\n'), 'Cheat Sheet')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy All Formulas</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedSubject.cheatSheetHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-start justify-between gap-3"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-cyan-400 font-bold">FORMULA #{idx + 1}</span>
                    <p className="text-xs font-mono text-slate-200 leading-relaxed">
                      {item}
                    </p>
                  </div>
                  <button
                    onClick={() => handleCopy(item, 'Formula')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 shrink-0"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: LAB VIVA FOCUS */}
        {activeTab === 'viva' && (
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white">
              Essential Lab Viva Topics (External Examiner's Favorites)
            </h4>
            <div className="space-y-3">
              {selectedSubject.labVivaFocusTopics.map((topic, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3 text-xs text-slate-300"
                >
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold font-mono text-xs shrink-0">
                    {idx + 1}
                  </div>
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: RECOMMENDED TEXTBOOKS */}
        {activeTab === 'books' && (
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white">
              Standard University Syllabus Reference Textbooks
            </h4>
            <div className="space-y-3">
              {selectedSubject.recommendedBooks.map((book, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-brand-400 shrink-0" />
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-white">{book}</h5>
                      <span className="text-[11px] text-slate-400">Prescribed Academic Text</span>
                    </div>
                  </div>
                  <span className="text-xs text-brand-400 font-mono font-semibold">Standard Reference</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
