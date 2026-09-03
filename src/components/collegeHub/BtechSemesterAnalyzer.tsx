import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { TopicNotesModal } from './TopicNotesModal';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Search, 
  Sparkles, 
  BookOpen, 
  FileCheck, 
  CheckCircle2, 
  Flame, 
  ArrowRight, 
  Copy, 
  Calendar, 
  Award, 
  Cpu, 
  Layers, 
  HelpCircle,
  Clock,
  Download,
  FlaskConical,
  BookMarked,
  BarChart3,
  X,
  Check
} from 'lucide-react';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';
import { 
  BTECH_SEMESTER_DATA, 
  analyzeSemesterSyllabus,
  SemesterSubject,
  RepeatedPYQ,
  FormulaItem,
  PassStrategyStep,
  LabVivaItem,
  R25_COURSES,
  R25_CREDIT_DISTRIBUTION,
  queryR25Syllabus,
  R25Course
} from '../../data/btechSemesterSyllabusData';

interface BtechSemesterAnalyzerProps {
  setActiveTab?: (tab: any) => void;
  onSelectTopic?: (topic: string) => void;
  onOpenMockTest?: (subject: string, streamId?: string) => void;
  initialSemester?: number;
}

export const BtechSemesterAnalyzer: React.FC<BtechSemesterAnalyzerProps> = ({ 
  setActiveTab, 
  onSelectTopic,
  onOpenMockTest,
  initialSemester = 3
}) => {
  const [selectedSem, setSelectedSem] = useState<number>(initialSemester || 3);
  const [searchInput, setSearchInput] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [activeAnalysisTab, setActiveAnalysisTab] = useState<'subjects' | 'labs' | 'textbooks' | 'pyqs' | 'formulas' | 'strategy' | 'credits'>('subjects');
  const [selectedTopic, setSelectedTopic] = useState<{ topicName: string; subjectCode: string; subjectName: string; semesterNum: number } | null>(null);

  const handleTopicClick = useCallback((topicName: string, subjectCode: string, subjectName: string, semesterNum: number) => {
    setSelectedTopic({ topicName, subjectCode, subjectName, semesterNum });
  }, []);

  useEffect(() => {
    if (initialSemester && initialSemester >= 1 && initialSemester <= 8) {
      setSelectedSem(initialSemester);
    }
  }, [initialSemester]);

  const semesterData = analyzeSemesterSyllabus(selectedSem);

  // Get all official R-25 courses for the active semester
  const semesterR25Courses = useMemo(() => {
    return R25_COURSES.filter(c => c.semester === selectedSem);
  }, [selectedSem]);

  const semesterTheoryCourses = useMemo(() => {
    return semesterR25Courses.filter(c => c.type === 'Theory');
  }, [semesterR25Courses]);

  const semesterPracticalCourses = useMemo(() => {
    return semesterR25Courses.filter(c => c.type === 'Practical');
  }, [semesterR25Courses]);

  // Real-time query result based on search input
  const liveSearchResult = useMemo(() => {
    if (!searchInput.trim()) return null;
    return queryR25Syllabus(searchInput);
  }, [searchInput]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchInput.trim()) return;

    const result = analyzeSemesterSyllabus(searchInput);
    setSelectedSem(result.semesterNumber);

    const queryRes = queryR25Syllabus(searchInput);
    if (queryRes.matchedCourses.length > 0) {
      const topCourse = queryRes.matchedCourses[0];
      setSelectedSem(topCourse.semester);
      toast.success(`Found ${topCourse.code}: ${topCourse.name}!`, {
        description: `Switched to Semester ${topCourse.semester} Syllabus.`
      });
    } else {
      toast.success(`Analyzed Semester ${result.semesterNumber} Syllabus!`, {
        description: `Loaded ${result.subjects.length} core subjects & syllabus blueprint.`
      });
    }
    setIsSearching(false);
  };

  const handleSemClick = (semNum: number) => {
    setSelectedSem(semNum);
    confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
    toast.info(`Switched to Semester ${semNum} Syllabus Matrix`);
  };

  const handleCopyFormula = (f: FormulaItem) => {
    navigator.clipboard.writeText(f.formula);
    toast.success(`Copied ${f.topic} formula to clipboard!`);
  };

  return (
    <>
    <div className="w-full space-y-6">
      
      {/* 1. Header Banner & Universal Search Bar */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#12151D] border border-black/[0.08] dark:border-white/[0.08] shadow-sm space-y-6">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-mono font-bold">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>NIT Autonomous / MAKAUT [Regulation-25] Official Curriculum (NEP 2020)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 dark:text-white">
              B.Tech CSE <span className="text-blue-600 dark:text-blue-400">Regulation-25 Intelligence Engine</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl font-sans">
              100% verified syllabus across all 8 Semesters (160 Credits). Search any course code (e.g. CS302, CS401), topic (e.g. Dijkstra, K-Maps, Booth), or lab experiment.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative max-w-md w-full">
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
              <div className="relative flex-grow">
                <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchInput}
                  onFocus={() => setIsSearching(true)}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                    setIsSearching(true);
                  }}
                  placeholder="Search subject code, module topic, lab..."
                  className="w-full pl-9 pr-8 py-2.5 rounded-2xl text-xs bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.1] text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                />
                {searchInput && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchInput('');
                      setIsSearching(false);
                    }}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              <button
                type="submit"
                className="px-4 py-2.5 rounded-2xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-mono font-bold hover:opacity-90 transition-all shrink-0 cursor-pointer shadow-sm"
              >
                Search
              </button>
            </form>

            {/* Instant Search Results Dropdown / Modal */}
            <AnimatePresence>
              {isSearching && liveSearchResult && searchInput.trim().length > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl bg-white dark:bg-[#151922] border border-black/10 dark:border-white/10 shadow-2xl z-50 max-h-[380px] overflow-y-auto space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-black/[0.05] dark:border-white/[0.06] pb-2">
                    <span className="text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase">
                      100% Accuracy R-25 Results ({liveSearchResult.matchedCourses.length} Courses Found)
                    </span>
                    <button
                      onClick={() => setIsSearching(false)}
                      className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-xs font-mono"
                    >
                      Close ✕
                    </button>
                  </div>

                  {liveSearchResult.matchedCourses.slice(0, 4).map((c) => (
                    <div
                      key={c.code}
                      onClick={() => {
                        setSelectedSem(c.semester);
                        setIsSearching(false);
                        toast.success(`Loaded ${c.code}: ${c.name} (Semester ${c.semester})`);
                      }}
                      className="p-3 rounded-xl bg-[#FBFBF9] dark:bg-[#0A0C10] border border-black/[0.04] dark:border-white/[0.06] hover:border-blue-500 transition-all cursor-pointer space-y-1"
                    >
                      <div className="flex items-center justify-between text-xs font-mono font-bold text-neutral-900 dark:text-white">
                        <span className="text-blue-600 dark:text-blue-400">{c.code}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">
                          Sem {c.semester} • {c.credits} Credits ({c.contact})
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                        {c.name}
                      </div>
                      {c.modules && (
                        <div className="text-[11px] text-neutral-500 dark:text-neutral-400 line-clamp-1 font-sans">
                          Modules: {c.modules.map(m => m.title).join(', ')}
                        </div>
                      )}
                    </div>
                  ))}

                  {liveSearchResult.matchedLabs.length > 0 && (
                    <div className="pt-2 border-t border-black/[0.05] dark:border-white/[0.06] space-y-1.5">
                      <div className="text-[10px] font-mono text-neutral-400 font-bold uppercase">
                        Matching Lab Experiments:
                      </div>
                      {liveSearchResult.matchedLabs.slice(0, 3).map((l, idx) => (
                        <div key={idx} className="text-xs text-neutral-700 dark:text-neutral-300 font-mono flex items-start gap-1.5">
                          <FlaskConical className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                          <span><strong>{l.course.code}:</strong> {l.experiment}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* 8-Semester Interactive Switcher Tabs */}
        <div className="space-y-2 pt-2 border-t border-black/[0.05] dark:border-white/[0.06]">
          <div className="text-[11px] font-mono text-neutral-400 font-semibold uppercase tracking-wider flex items-center justify-between">
            <span>Select Semester (All 8 Semesters Verified):</span>
            <span className="text-blue-600 dark:text-blue-400 font-bold">
              Active: Semester {selectedSem} • Total Degree: 160 Credits
            </span>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => {
              const isSelected = selectedSem === sem;
              const semCredits = R25_CREDIT_DISTRIBUTION.semesterCredits.find(s => s.sem === sem)?.credits || 20;
              return (
                <button
                  key={sem}
                  type="button"
                  onClick={() => handleSemClick(sem)}
                  className={`p-3 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all cursor-pointer select-none ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-[1.03] border border-blue-400'
                      : 'bg-[#FBFBF9] dark:bg-[#0A0C10] border border-black/[0.06] dark:border-white/[0.08] hover:bg-black/[0.03] dark:hover:bg-white/[0.05] text-neutral-700 dark:text-neutral-300'
                  }`}
                >
                  <span className="text-xs font-mono font-bold">Sem {sem}</span>
                  <span className="text-[10px] font-mono opacity-90 font-semibold">
                    {semCredits} Cr
                  </span>
                  <span className="text-[9px] opacity-75 uppercase tracking-tighter truncate w-full text-center">
                    {sem <= 2 ? '1st Year' : sem <= 4 ? '2nd Year' : sem <= 6 ? '3rd Year' : '4th Year'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* 2. Active Semester Academic Blueprint Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#12151D] border border-black/[0.08] dark:border-white/[0.08] shadow-sm space-y-6">
        
        {/* Semester Meta Summary */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-black/[0.05] dark:border-white/[0.06]">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              {semesterData.academicYear}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-neutral-900 dark:text-white">
              {semesterData.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans max-w-3xl">
              {semesterData.summary}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="p-3 rounded-2xl bg-[#FBFBF9] dark:bg-[#0A0C10] border border-black/[0.05] dark:border-white/[0.06] text-center min-w-[90px]">
              <div className="text-xs font-mono text-neutral-400 font-bold uppercase">Credits</div>
              <div className="text-lg font-bold font-display text-blue-600 dark:text-blue-400">{semesterData.totalCredits}</div>
            </div>

            <div className="p-3 rounded-2xl bg-[#FBFBF9] dark:bg-[#0A0C10] border border-black/[0.05] dark:border-white/[0.06] text-center min-w-[90px]">
              <div className="text-xs font-mono text-neutral-400 font-bold uppercase">Courses</div>
              <div className="text-lg font-bold font-display text-neutral-900 dark:text-white">{semesterR25Courses.length}</div>
            </div>

            <div className="p-3 rounded-2xl bg-[#FBFBF9] dark:bg-[#0A0C10] border border-black/[0.05] dark:border-white/[0.06] text-center min-w-[120px]">
              <div className="text-xs font-mono text-neutral-400 font-bold uppercase">Difficulty</div>
              <div className="text-sm font-bold font-display text-amber-600 dark:text-amber-400">{semesterData.difficultyRating}</div>
            </div>

            {onOpenMockTest && (
              <button
                type="button"
                onClick={() => {
                  const firstSubj = semesterData.subjects[0]?.name || 'Data Structures';
                  toast.success(`Launching 70-Mark University Mock Test for Semester ${selectedSem}!`);
                  onOpenMockTest(firstSubj, 'btech_makaut');
                }}
                className="px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-mono font-bold shadow-md flex items-center gap-1.5 cursor-pointer transition-all shrink-0"
              >
                <FileCheck className="w-4 h-4" />
                <span>Semester Mock Test</span>
              </button>
            )}
          </div>
        </div>

        {/* 7 Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-black/[0.05] dark:border-white/[0.06]">
          {[
            { id: 'subjects' as const, label: `Core Theory (${semesterTheoryCourses.length})`, icon: BookOpen },
            { id: 'labs' as const, label: `Lab Practicals (${semesterPracticalCourses.length})`, icon: FlaskConical },
            { id: 'textbooks' as const, label: 'Prescribed Books', icon: BookMarked },
            { id: 'pyqs' as const, label: `Top Repeated PYQs (${semesterData.topRepeatedPYQs.length})`, icon: FileCheck },
            { id: 'formulas' as const, label: `Formula Matrix (${semesterData.formulaMatrix.length})`, icon: Layers },
            { id: 'strategy' as const, label: '30-Day Pass Blueprint', icon: Calendar },
            { id: 'credits' as const, label: '160-Credit Matrix', icon: BarChart3 }
          ].map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeAnalysisTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveAnalysisTab(tab.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-medium transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-bold shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-400 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]'
                }`}
              >
                <TabIcon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Core Theory Subjects & Full Modules */}
        {activeAnalysisTab === 'subjects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
            {semesterTheoryCourses.map((course: R25Course) => (
              <div
                key={course.code}
                className="p-5 rounded-2xl bg-[#FBFBF9] dark:bg-[#0A0C10] border border-black/[0.06] dark:border-white/[0.06] space-y-3 flex flex-col justify-between hover:border-black/[0.12] dark:hover:border-white/[0.12] transition-all shadow-sm"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-bold uppercase">
                      {course.code} • {course.category}
                    </span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-black/[0.05] dark:bg-white/[0.08] text-neutral-700 dark:text-neutral-300 font-bold">
                      {course.credits} Credits ({course.contact})
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-neutral-900 dark:text-white font-display">
                    {course.name}
                  </h4>

                  {course.contactHours && (
                    <div className="text-[11px] font-mono text-neutral-500">
                      Total Contact Hours: {course.contactHours} Hours
                    </div>
                  )}

                  {/* Modules with exact lecture counts — ALL TOPICS CLICKABLE */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[10px] font-mono text-neutral-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <span>Course Modules ({course.modules?.length || 0}):</span>
                      <span className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-[9px] font-bold">Click topic → Full Notes</span>
                    </div>
                    <div className="space-y-2">
                      {course.modules?.map((mod, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-white dark:bg-[#12151D] border border-black/[0.04] dark:border-white/[0.05] text-xs space-y-1.5">
                          <div className="font-bold text-neutral-800 dark:text-neutral-200 font-mono flex items-center justify-between">
                            <span>Mod {mod.moduleNumber}: {mod.title}</span>
                            {mod.lectures && <span className="text-[10px] text-blue-600 dark:text-blue-400">{mod.lectures}</span>}
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {mod.topics.map((t, tIdx) => (
                              <button
                                key={tIdx}
                                type="button"
                                onClick={() => handleTopicClick(t, course.code, course.name, selectedSem)}
                                className="px-2 py-1 rounded-lg text-[11px] bg-slate-50 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-blue-950/60 hover:text-blue-700 dark:hover:text-blue-300 text-neutral-700 dark:text-neutral-300 border border-black/[0.06] dark:border-white/[0.08] hover:border-blue-300 dark:hover:border-blue-700 transition-all cursor-pointer text-left font-sans leading-tight flex items-center gap-1 group"
                              >
                                <span className="text-[9px] text-blue-400 dark:text-blue-500 group-hover:text-blue-600 dark:group-hover:text-blue-300">📖</span>
                                <span>{t}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center gap-2">
                  {(setActiveTab || onSelectTopic) && (
                    <button
                      type="button"
                      onClick={() => {
                        toast.success(`Opening Study Room for ${course.name}`);
                        if (onSelectTopic) onSelectTopic(course.name);
                        if (setActiveTab) setActiveTab('studyHub');
                      }}
                      className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold border border-black/10 dark:border-white/15 bg-transparent hover:bg-black/5 dark:hover:bg-white/10 text-neutral-900 dark:text-white transition-all cursor-pointer text-center truncate"
                    >
                      Study Notes →
                    </button>
                  )}
                  {onOpenMockTest && (
                    <button
                      type="button"
                      onClick={() => {
                        toast.info(`Configuring Mock Test Paper for ${course.name}...`);
                        onOpenMockTest(course.name, 'btech_makaut');
                      }}
                      className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all cursor-pointer text-center truncate"
                    >
                      Take Mock Test →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Lab Practicals & Experiments */}
        {activeAnalysisTab === 'labs' && (
          <div className="space-y-4 animate-fade-in">
            <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/40 text-xs text-indigo-800 dark:text-indigo-200 font-mono">
              🧪 <strong>Official Lab Syllabus:</strong> Verified experiments and hands-on laboratory modules prescribed in Regulation-25 for Semester {selectedSem}.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {semesterPracticalCourses.map((lab: R25Course) => (
                <div
                  key={lab.code}
                  className="p-5 rounded-2xl bg-[#FBFBF9] dark:bg-[#0A0C10] border border-black/[0.06] dark:border-white/[0.06] space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-bold uppercase">
                      {lab.code} • {lab.category}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold">
                      {lab.credits} Credits ({lab.contact})
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white font-display">
                    {lab.name}
                  </h4>

                  {lab.labExperiments && (
                    <div className="space-y-1.5 pt-2">
                      <div className="text-[10px] font-mono text-neutral-400 font-bold uppercase">
                        Prescribed Experiments / Tasks ({lab.labExperiments.length}):
                      </div>
                      <ol className="text-xs text-neutral-700 dark:text-neutral-300 space-y-1.5 list-decimal pl-4 font-sans leading-relaxed">
                        {lab.labExperiments.map((exp, idx) => (
                          <li key={idx}>{exp}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Prescribed Textbooks & References */}
        {activeAnalysisTab === 'textbooks' && (
          <div className="space-y-4 animate-fade-in">
            <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 text-xs text-blue-800 dark:text-blue-200 font-mono">
              📖 <strong>Prescribed Academic Bibliography:</strong> Official textbook and reference reading recommendations approved by the Board of Studies.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {semesterR25Courses.filter(c => (c.textBooks && c.textBooks.length > 0) || (c.referenceBooks && c.referenceBooks.length > 0)).map((c) => (
                <div
                  key={c.code}
                  className="p-5 rounded-2xl bg-[#FBFBF9] dark:bg-[#0A0C10] border border-black/[0.06] dark:border-white/[0.06] space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                      {c.code}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">
                      {c.category}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                    {c.name}
                  </h4>

                  {c.textBooks && c.textBooks.length > 0 && (
                    <div className="space-y-1 pt-1">
                      <div className="text-[10px] font-mono text-neutral-400 font-bold uppercase">
                        Prescribed Text Books:
                      </div>
                      <ul className="text-xs text-neutral-700 dark:text-neutral-300 list-disc pl-4 space-y-1 font-sans">
                        {c.textBooks.map((tb, idx) => (
                          <li key={idx}>{tb}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {c.referenceBooks && c.referenceBooks.length > 0 && (
                    <div className="space-y-1 pt-2 border-t border-black/[0.04] dark:border-white/[0.05]">
                      <div className="text-[10px] font-mono text-neutral-400 font-bold uppercase">
                        Reference Books:
                      </div>
                      <ul className="text-[11px] text-neutral-600 dark:text-neutral-400 list-disc pl-4 space-y-0.5 font-sans">
                        {c.referenceBooks.map((rb, idx) => (
                          <li key={idx}>{rb}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Top Repeated PYQs */}
        {activeAnalysisTab === 'pyqs' && (
          <div className="space-y-4 animate-fade-in">
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-800 dark:text-amber-200 font-mono">
              ⚡ <strong>Examiner Insight:</strong> These questions have repeated consistently in university papers. Preparing their exact step-wise derivation guarantees 40+ passing marks.
            </div>

            <div className="space-y-3">
              {semesterData.topRepeatedPYQs.map((pyq: RepeatedPYQ) => (
                <div
                  key={pyq.id}
                  className="p-5 rounded-2xl bg-[#FBFBF9] dark:bg-[#0A0C10] border border-black/[0.06] dark:border-white/[0.06] space-y-3"
                >
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                      {pyq.subject}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 font-bold border border-rose-200/50">
                        <Flame className="w-3 h-3 inline mr-1" />
                        {pyq.frequency}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 font-bold">
                        {pyq.marks} Marks
                      </span>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-neutral-900 dark:text-white leading-relaxed font-sans">
                    {pyq.question}
                  </p>

                  <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.05] space-y-1 text-xs">
                    <div className="text-[10px] font-mono text-neutral-400 font-bold uppercase">
                      Exact Examiner Marking Rubric & Key Steps:
                    </div>
                    <div className="text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
                      {pyq.expectedAnswerFormat}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: Formula & Theorem Matrix */}
        {activeAnalysisTab === 'formulas' && (
          <div className="space-y-4 animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {semesterData.formulaMatrix.map((item: FormulaItem, idx: number) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#FBFBF9] dark:bg-[#0A0C10] border border-black/[0.06] dark:border-white/[0.06] space-y-2 flex flex-col justify-between"
                >
                  <div className="text-[11px] font-mono font-bold text-neutral-500 dark:text-neutral-400 uppercase">
                    {item.topic}
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-[#12151D] border border-black/[0.05] dark:border-white/[0.08] text-xs font-mono text-neutral-900 dark:text-white select-all break-words leading-relaxed font-semibold">
                    {item.formula}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyFormula(item)}
                    className="self-end text-[10px] font-mono text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer pt-1"
                  >
                    <Copy className="w-3 h-3" />
                    <span>Copy Formula</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 6: 30-Day Passing Strategy Blueprint */}
        {activeAnalysisTab === 'strategy' && (
          <div className="space-y-4 animate-fade-in">
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40 text-xs text-emerald-800 dark:text-emerald-200 font-mono">
              🎯 <strong>Zero-Stress Pass Plan:</strong> Designed for students starting with 30 days remaining. Follow weekly priorities to clear all theory papers with 8.0+ SGPA.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {semesterData.thirtyDayPassStrategy.map((step: PassStrategyStep, idx: number) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#FBFBF9] dark:bg-[#0A0C10] border border-black/[0.06] dark:border-white/[0.06] space-y-3 relative overflow-hidden"
                >
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-md">
                    W{idx + 1}
                  </div>
                  <div className="text-sm font-bold font-display text-neutral-900 dark:text-white">
                    {step.week}
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
                    {step.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 7: Official 160-Credit Matrix */}
        {activeAnalysisTab === 'credits' && (
          <div className="space-y-6 animate-fade-in">
            <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 text-xs text-blue-800 dark:text-blue-200 font-mono">
              📊 <strong>Regulation-25 (NEP 2020) Total Degree Distribution:</strong> 160.0 Credits across 8 semesters with complete major, minor, and multidisciplinary categories.
            </div>

            {/* Semester-wise breakdown table */}
            <div className="overflow-x-auto rounded-2xl border border-black/[0.06] dark:border-white/[0.08]">
              <table className="w-full text-xs font-mono text-left">
                <thead className="bg-black/[0.03] dark:bg-white/[0.04] text-neutral-600 dark:text-neutral-400 border-b border-black/[0.06] dark:border-white/[0.08]">
                  <tr>
                    <th className="p-3">Semester</th>
                    <th className="p-3">Academic Year</th>
                    <th className="p-3">Credits</th>
                    <th className="p-3">Cumulative</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.04] dark:divide-white/[0.06] text-neutral-800 dark:text-neutral-200">
                  {R25_CREDIT_DISTRIBUTION.semesterCredits.map((s) => {
                    const cumCredits = R25_CREDIT_DISTRIBUTION.semesterCredits
                      .filter(x => x.sem <= s.sem)
                      .reduce((acc, curr) => acc + curr.credits, 0);
                    return (
                      <tr key={s.sem} className={s.sem === selectedSem ? 'bg-blue-50/50 dark:bg-blue-950/30 font-bold text-blue-600 dark:text-blue-400' : ''}>
                        <td className="p-3">Semester {s.sem}</td>
                        <td className="p-3">{s.year}</td>
                        <td className="p-3">{s.credits} Credits</td>
                        <td className="p-3">{cumCredits} / 160</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* NEP Category Split */}
            <div className="p-5 rounded-2xl bg-[#FBFBF9] dark:bg-[#0A0C10] border border-black/[0.06] dark:border-white/[0.06] space-y-3">
              <div className="text-xs font-mono font-bold uppercase text-neutral-500">
                NEP 2020 Course Category Breakdown:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white dark:bg-[#12151D] border border-black/[0.05] dark:border-white/[0.08]">
                  <div className="text-neutral-400 text-[10px]">Major (Core)</div>
                  <div className="text-base font-bold text-blue-600">{R25_CREDIT_DISTRIBUTION.categoryTotals.major} Cr</div>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-[#12151D] border border-black/[0.05] dark:border-white/[0.08]">
                  <div className="text-neutral-400 text-[10px]">Minor</div>
                  <div className="text-base font-bold text-indigo-600">{R25_CREDIT_DISTRIBUTION.categoryTotals.minor} Cr</div>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-[#12151D] border border-black/[0.05] dark:border-white/[0.08]">
                  <div className="text-neutral-400 text-[10px]">Multi-Disciplinary</div>
                  <div className="text-base font-bold text-emerald-600">{R25_CREDIT_DISTRIBUTION.categoryTotals.multiDisciplinary} Cr</div>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-[#12151D] border border-black/[0.05] dark:border-white/[0.08]">
                  <div className="text-neutral-400 text-[10px]">Projects (I, II, III)</div>
                  <div className="text-base font-bold text-purple-600">{R25_CREDIT_DISTRIBUTION.categoryTotals.project} Cr</div>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-[#12151D] border border-black/[0.05] dark:border-white/[0.08]">
                  <div className="text-neutral-400 text-[10px]">Skill Enhancement (SEC)</div>
                  <div className="text-base font-bold text-amber-600">{R25_CREDIT_DISTRIBUTION.categoryTotals.skillEnhancement} Cr</div>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-[#12151D] border border-black/[0.05] dark:border-white/[0.08]">
                  <div className="text-neutral-400 text-[10px]">Value Added (VAC)</div>
                  <div className="text-base font-bold text-cyan-600">{R25_CREDIT_DISTRIBUTION.categoryTotals.valueAdded} Cr</div>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-[#12151D] border border-black/[0.05] dark:border-white/[0.08]">
                  <div className="text-neutral-400 text-[10px]">Ability Enhancement (AEC)</div>
                  <div className="text-base font-bold text-teal-600">{R25_CREDIT_DISTRIBUTION.categoryTotals.abilityEnhancement} Cr</div>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-[#12151D] border border-black/[0.05] dark:border-white/[0.08]">
                  <div className="text-neutral-400 text-[10px]">Internship & Grand Viva</div>
                  <div className="text-base font-bold text-rose-600">4.0 Cr</div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>

    {/* Topic Notes Modal — opens when any topic is clicked */}
    {selectedTopic && (
      <TopicNotesModal
        topicName={selectedTopic.topicName}
        subjectCode={selectedTopic.subjectCode}
        subjectName={selectedTopic.subjectName}
        semesterNum={selectedTopic.semesterNum}
        onClose={() => setSelectedTopic(null)}
      />
    )}
    </>
  );
};
