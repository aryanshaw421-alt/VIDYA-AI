import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Play, 
  ArrowRight, 
  CheckCircle2, 
  FileCheck, 
  Brain, 
  Mic, 
  FileText, 
  Timer, 
  BookOpen, 
  ChevronRight, 
  Zap,
  Check,
  Search,
  BookMarked,
  HelpCircle,
  Share2,
  Bookmark
} from 'lucide-react';
import { examStreams } from '../data/examPatterns';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';
import { GeminiShowcaseSection } from './GeminiShowcaseSection';
import { DiscoveryHeroSection } from './DiscoveryHeroSection';
import { NavigationPills } from './NavigationPills';

export const HomePage = ({ activeTab = 'home', setActiveTab, user }) => {
  const [activeCourseId, setActiveCourseId] = useState('btech_makaut');
  const [selectedTopicIdx, setSelectedTopicIdx] = useState(0);

  const activeCourse = examStreams.find(c => c.id === activeCourseId) || examStreams[0];

  const sampleNotebookTopics = [
    {
      topic: 'Process Scheduling & Deadlocks (B.Tech CSE)',
      badge: 'Operating Systems',
      summary: 'Deadlocks occur when processes enter a waiting state because requested system resources are held by other waiting processes. The 4 Coffman conditions (Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait) must hold simultaneously.',
      formulas: ['Banker\'s Algorithm: Need[i,j] = Max[i,j] - Allocation[i,j]', 'Safety Condition: Work >= Need[i]'],
      examTip: 'Official MAKAUT / University Exam: 5-mark question guaranteed every odd semester on Banker\'s algorithm safety verification.',
      actionTab: 'mockTests',
      actionLabel: 'Solve 15-Mark Question'
    },
    {
      topic: 'Fourier Series & Partial Differential Equations',
      badge: 'Engg Mathematics',
      summary: 'Orthogonality relations of sine and cosine allow decomposing any piecewise periodic function into harmonic components. Dirichlets conditions guarantee convergence.',
      formulas: ['a0 = (1/L) ∫ f(x)dx', 'an = (1/L) ∫ f(x) cos(nπx/L) dx', 'bn = (1/L) ∫ f(x) sin(nπx/L) dx'],
      examTip: 'GATE 2027 & Semester Exam: Step-marking requires explicit proof of even/odd function symmetry before integration.',
      actionTab: 'cheatSheets',
      actionLabel: 'Open 1-Page Cheat Sheet'
    },
    {
      topic: 'Fundamental Rights & Judicial Writs',
      badge: 'Indian Polity & SSC CGL',
      summary: 'Articles 12-35 in Part III form the cornerstone of constitutional remedies. Article 32 (Heart and Soul) empowers the Supreme Court to issue 5 distinct prerogative writs.',
      formulas: ['5 Writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto'],
      examTip: 'SSC CGL Tier-1: Guaranteed 2 MCQs on Articles 21, 21A, and 32 jurisdiction differences.',
      actionTab: 'liveTests',
      actionLabel: 'Take Tier-1 Mock Test'
    },
    {
      topic: 'Thermodynamics: Carnot Engine & Entropy',
      badge: 'Physics & Mech Engg',
      summary: 'The Carnot cycle represents the maximum theoretical efficiency obtainable for any cyclic heat engine operating between two thermal reservoirs at temperatures TH and TC.',
      formulas: ['η = 1 - (TC / TH)', 'Clausius Inequality: ∮ (dQ / T) ≤ 0'],
      examTip: 'CBSE 12th & JEE Main: Derivation of PV work done in isothermal vs adiabatic paths carries 5 marks.',
      actionTab: 'doubtSolver',
      actionLabel: 'Ask AI Step-by-Step Doubt'
    }
  ];

  const currentTopic = sampleNotebookTopics[selectedTopicIdx];

  const handleStartCourse = () => {
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    toast.success(`Starting personalized plan for ${activeCourse.name}!`, {
      description: 'Navigating to your AI-powered Mock Test and Roadmap studio.'
    });
    setActiveTab('mockTests');
  };

  return (
    <div className="w-full space-y-16 sm:space-y-24 pb-20 animate-fade-in bg-transparent text-slate-900 dark:text-[#E3E3E3] transition-colors duration-200">
      
      {/* 1. Hero Section */}
      <section className="w-full fluid-container pt-12 sm:pt-20 pb-8 sm:pb-12 text-center">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">

          {/* Headline - Exact visual aesthetic from Gemini Notebook: Solid Charcoal "Understand" + Gradient "Any Subject" */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[7.5rem] xl:text-[8.75rem] font-sans font-extrabold tracking-tight text-black dark:text-white leading-[1.04] sm:leading-[1.02]">
              Outsmart{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#047857] via-[#0284C7] to-[#1D4ED8] font-black">
                Any Syllabus
              </span>
            </h1>

            {/* Clear Catchy Dialogue Tagline */}
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight max-w-3xl mx-auto pt-3 sm:pt-4 leading-snug text-slate-800 dark:text-slate-100">
              Turn hours of confusion into minutes of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 font-extrabold">
                crystal-clear clarity
              </span>
              .
            </p>
          </motion.div>

          {/* Primary Action Button - Large White Try VIDYA AI & Official Mock Papers with Generous Gap */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8 sm:pt-12"
          >
            <button
              onClick={() => setActiveTab('dashboard')}
              className="w-full sm:w-auto min-w-[260px] sm:min-w-[320px] px-12 sm:px-16 py-5 sm:py-5.5 rounded-full bg-white hover:bg-slate-50 text-black font-extrabold text-lg sm:text-xl shadow-[0_16px_40px_-8px_rgba(0,0,0,0.2)] hover:shadow-[0_22px_50px_-8px_rgba(0,0,0,0.28)] border border-slate-200/90 dark:border-white/30 transition-all flex items-center justify-center gap-3.5 cursor-pointer active:scale-95 hover:scale-[1.03] group"
            >
              <span className="tracking-tight">Try VIDYA AI</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-black group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              onClick={() => setActiveTab('mockTests')}
              className="w-full sm:w-auto px-10 sm:px-12 py-5 sm:py-5.5 rounded-full liquid-glass-pill text-black dark:text-white font-extrabold text-lg sm:text-xl transition-all flex items-center justify-center gap-3 cursor-pointer active:scale-95 hover:scale-[1.02] shadow-md"
            >
              <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700 dark:text-cyan-400" />
              <span className="tracking-tight">Official Mock Papers</span>
            </button>
          </motion.div>

          {/* Unboxed Unique Navigation (Home, Dashboard, Mock Tests, etc.) with Ample Distance & Large Size */}
          <motion.div 
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center pt-8 sm:pt-14 px-2 max-w-full overflow-x-auto"
          >
            <NavigationPills activeTab={activeTab} setActiveTab={setActiveTab} />
          </motion.div>

        </div>
      </section>

      {/* 2. Google Gemini Notebook Style Showcase & Interactive Study Partner */}
      <section className="w-full fluid-container">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-black dark:text-white tracking-tight">
            Your AI-Powered Learning Partner
          </h2>
          <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 font-medium">
            Select any syllabus topic to see instant grounded synthesis, formula sheets, and university exam questions.
          </p>
        </div>

        {/* Gemini Notebook Style Showcase (Upload Sources with Video Slot + Audio Overview with Player) */}
        <GeminiShowcaseSection />

        {/* Grounded Course Syllabus Live Interactive Card */}
        <div className="pt-12 sm:pt-16">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <div className="text-xs font-mono text-blue-700 dark:text-cyan-300 font-bold uppercase tracking-wider">
              Grounded Topic Synthesis
            </div>
            <h3 className="text-2xl sm:text-3xl font-sans font-bold text-black dark:text-white">
              Instant Exam Concept Breakdown
            </h3>
          </div>

          {/* Live Interactive Notebook Card */}
          <div className="max-w-4xl mx-auto rounded-3xl p-5 sm:p-8 apple-glass space-y-6">
          
          {/* Topic Pills Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {sampleNotebookTopics.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedTopicIdx(idx)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedTopicIdx === idx
                    ? 'bg-[#0071E3] text-white shadow-md shadow-blue-500/25 font-semibold'
                    : 'apple-glass-pill text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {item.badge}
              </button>
            ))}
          </div>

          {/* Notebook Dynamic Sheet */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTopic.topic}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl p-6 apple-glass-card space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <div className="text-[11px] font-mono text-blue-700 dark:text-cyan-300 font-bold uppercase">
                    Grounded Course Notebook
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mt-0.5">
                    {currentTopic.topic}
                  </h3>
                </div>

                <button
                  onClick={() => setActiveTab(currentTopic.actionTab)}
                  className="self-start sm:self-auto px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                >
                  <span>{currentTopic.actionLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Summary Text */}
              <div className="space-y-1.5">
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">
                  Grounded Synthesis
                </div>
                <p className="text-sm sm:text-base text-black dark:text-white font-normal leading-relaxed font-sans">
                  {currentTopic.summary}
                </p>
              </div>

              {/* Formulas & Exam Insights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl apple-glass-pill space-y-1.5">
                  <div className="text-[11px] font-mono text-slate-800 dark:text-slate-200 font-bold uppercase">
                    Key Formulas & Conditions
                  </div>
                  <div className="space-y-1">
                    {currentTopic.formulas.map((f, i) => (
                      <div key={i} className="text-xs font-mono text-blue-800 dark:text-cyan-300 font-bold">
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl apple-glass-pill space-y-1.5">
                  <div className="text-[11px] font-mono text-emerald-800 dark:text-emerald-300 font-bold uppercase">
                    Official Pattern Intelligence
                  </div>
                  <div className="text-xs sm:text-sm text-slate-900 dark:text-slate-100 font-medium leading-normal">
                    {currentTopic.examTip}
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
        </div>
      </section>

      {/* 3. Universal Exam & Course Stream Architecture */}
      <section className="w-full fluid-container space-y-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs font-mono text-blue-700 dark:text-cyan-300 font-bold uppercase tracking-wider">
            Curriculum & Pattern Architecture
          </div>
          <h2 className="text-2xl sm:text-4xl font-sans font-bold text-black dark:text-white">
            Select Your Target Course Stream
          </h2>
          <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
            Real official marking schemes, blueprints, and question formats updated for 2026-2027.
          </p>
        </div>

        {/* Clean Apple-Style Stream Pills */}
        <div className="p-1.5 rounded-full apple-glass-pill flex flex-wrap items-center justify-center gap-1.5 max-w-3xl mx-auto">
          {examStreams.map((stream) => {
            const isSelected = activeCourseId === stream.id;
            return (
              <button
                key={stream.id}
                onClick={() => setActiveCourseId(stream.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0071E3] text-white shadow-md shadow-blue-500/25 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>{stream.boardLogo}</span>
                <span>{stream.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pattern Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCourse.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 apple-glass space-y-6"
          >
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl apple-glass-pill text-2xl flex items-center justify-center shadow-sm">
                  {activeCourse.boardLogo}
                </div>
                <div>
                  <div className="text-xs font-mono text-blue-600 dark:text-cyan-400 font-semibold uppercase">{activeCourse.category}</div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">
                    {activeCourse.name}
                  </h3>
                </div>
              </div>

              <button
                onClick={handleStartCourse}
                className="px-6 py-2.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium text-xs sm:text-sm shadow-md shadow-blue-500/20 flex items-center gap-2 cursor-pointer transition-all active:scale-95"
              >
                <span>Launch {activeCourse.name.split('(')[0]} Simulator</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Pattern & Structure Breakdown Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl apple-glass-card">
                <div className="text-[11px] font-mono text-slate-400 uppercase font-medium">OFFICIAL PATTERN</div>
                <div className="text-base font-semibold text-slate-900 dark:text-white mt-1">{activeCourse.patternName}</div>
                <div className="text-xs text-slate-500 mt-1">Full Marks: <strong>{activeCourse.totalMarks} Marks</strong> ({activeCourse.durationMinutes} Mins)</div>
              </div>

              <div className="p-4 rounded-2xl apple-glass-card md:col-span-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase font-medium">SECTION STRUCTURE</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
                  {activeCourse.structure.map((st, sIdx) => (
                    <div key={sIdx} className="p-2.5 rounded-xl apple-glass-pill text-xs">
                      <div className="font-semibold text-slate-900 dark:text-white">{st.name}</div>
                      <div className="text-blue-600 dark:text-cyan-400 font-mono font-medium">{st.marks} • {st.count}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Subject Modules */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">Supported High-Yield Subjects:</div>
              <div className="flex flex-wrap gap-2">
                {activeCourse.subjects.map((sub, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-[#131314] text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200/60 dark:border-slate-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                    <span>{sub}</span>
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </section>

      {/* 3.5. AI Research & Data Discovery Studio */}
      <DiscoveryHeroSection setActiveTab={setActiveTab} />

      {/* 4. Core Capabilities Showcase in Google Clean Cards */}
      <section className="w-full fluid-container space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs font-mono text-blue-600 dark:text-cyan-400 font-semibold uppercase tracking-wider">
            AI Cognitive Capabilities
          </div>
          <h2 className="text-2xl sm:text-4xl font-sans font-semibold text-slate-900 dark:text-white">
            Built for Academic Excellence
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            A complete suite to replace scattered PDFs, rigid timetables, and forgotten exam formulas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {[
            {
              id: 'mockTests',
              title: 'Official Mock Papers',
              desc: 'Authentic 70M / 80M / 100M board and university simulators with step marking.',
              icon: FileCheck,
              color: 'text-blue-600 dark:text-cyan-400',
              bg: 'bg-blue-50 dark:bg-[#1E1F20]'
            },
            {
              id: 'vivaExaminer',
              title: 'AI Viva Voice Examiner',
              desc: 'Live verbal testing for college lab exams and engineering technical interviews.',
              icon: Mic,
              color: 'text-indigo-600 dark:text-indigo-400',
              bg: 'bg-indigo-50 dark:bg-[#1E1F20]'
            },
            {
              id: 'cheatSheets',
              title: '1-Page Formula Sheets',
              desc: 'Printable 1-page condensed cheat-sheets for last-minute exam revision.',
              icon: FileText,
              color: 'text-purple-600 dark:text-purple-400',
              bg: 'bg-purple-50 dark:bg-[#1E1F20]'
            },
            {
              id: 'focusRoom',
              title: 'Pomodoro Focus Room',
              desc: '25-minute sprints with 432Hz binaural alpha waves to prevent study fatigue.',
              icon: Timer,
              color: 'text-emerald-600 dark:text-emerald-400',
              bg: 'bg-emerald-50 dark:bg-[#1E1F20]'
            }
          ].map((feat) => {
            const FeatIcon = feat.icon;
            return (
              <div
                key={feat.id}
                onClick={() => setActiveTab(feat.id)}
                className="p-6 rounded-3xl apple-glass shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group space-y-4"
              >
                <div className={`w-11 h-11 rounded-2xl apple-glass-pill ${feat.color} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                  <FeatIcon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base text-slate-900 dark:text-white">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                  {feat.desc}
                </p>
                <div className="text-xs font-medium text-blue-600 dark:text-cyan-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Open Tool</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Apple VisionOS / macOS Style Final Call to Action */}
      <section className="w-full fluid-container">
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 apple-glass text-center space-y-5">
          <h2 className="text-2xl sm:text-4xl font-sans font-semibold text-slate-900 dark:text-white tracking-tight">
            Ready to master your syllabus with VIDYA AI?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Join students preparing for university semester exams, engineering roadmaps, and competitive entrances.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setActiveTab('dashboard')}
              className="px-8 py-3.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium text-base shadow-lg shadow-blue-500/25 transition-all inline-flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Launch Student Dashboard</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
