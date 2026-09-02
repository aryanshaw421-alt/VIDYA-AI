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
  Award, 
  TrendingUp, 
  ShieldCheck, 
  BookOpen, 
  GraduationCap, 
  ChevronRight, 
  Clock, 
  Zap,
  Flame,
  Layers,
  Check
} from 'lucide-react';
import { examStreams } from '../data/examPatterns';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

export const HomePage = ({ setActiveTab }) => {
  const [activeCourseId, setActiveCourseId] = useState('btech_makaut');

  const activeCourse = examStreams.find(c => c.id === activeCourseId) || examStreams[0];

  const handleStartCourse = () => {
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    toast.success(`Starting personalized plan for ${activeCourse.name}!`, {
      description: 'Navigating to your AI-powered Mock Test and Roadmap studio.'
    });
    setActiveTab('mockTests');
  };

  return (
    <div className="w-full space-y-16 sm:space-y-24 pb-16 animate-fade-in royal-mesh-bg">
      
      {/* 1. Hero Section (White & Royal Blue 21st Century Dev Showcase) */}
      <section className="w-full fluid-container pt-8 sm:pt-14">
        <div className="rounded-3xl sm:rounded-[36px] p-6 sm:p-14 bg-white dark:bg-[#0B132B] border border-blue-100 dark:border-blue-900/40 shadow-soft relative overflow-hidden">
          
          {/* Ambient Sapphire Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none -mr-28 -mt-28" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800/60 text-xs font-bold text-blue-600 dark:text-blue-300">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
              <span>Next-Gen Cognitive Learning & Test Engine</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Turn any syllabus into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">perfect score</span>.
            </h1>

            <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
              Personalized study roadmaps, authentic board & university pattern mock tests, AI viva examiners, and memory-decay revision for <strong>B.Tech, SSC CGL, GATE 2027, CBSE 10/12, and JEE/NEET</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 12px 35px -5px rgba(0, 85, 254, 0.4)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveTab('dashboard')}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm sm:text-base shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Explore Student Dashboard</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveTab('mockTests')}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200 font-bold text-sm sm:text-base border border-slate-200 dark:border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Free Pattern Mock Papers</span>
              </motion.button>
            </div>

            {/* Social Proof Stats */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <div>
                <span className="font-bold text-slate-900 dark:text-white text-sm">1.48 Lakh+</span> Students
              </div>
              <div>•</div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white text-sm">32+</span> Exam Patterns
              </div>
              <div>•</div>
              <div>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">99.4%</span> Retention
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Interactive All-Course Toggle Bar & Course Preview Canvas */}
      <section className="w-full fluid-container space-y-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
            Universal Educational Architecture
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
            Select Your Exam & Course Stream
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Click any stream to preview its official pattern mock papers, marking schemes, and syllabus breakdown.
          </p>
        </div>

        {/* Course Stream Toggle Pills with Sliding layoutId */}
        <div className="p-2 rounded-2xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-wrap items-center justify-center gap-2 relative">
          {examStreams.map((stream) => {
            const isSelected = activeCourseId === stream.id;
            return (
              <motion.button
                key={stream.id}
                whileHover={{ y: -1, scale: 1.02, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveCourseId(stream.id)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-colors duration-200 z-10 cursor-pointer ${
                  isSelected
                    ? 'text-white'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="homeCoursePill"
                    transition={{ type: "spring", stiffness: 380, damping: 28, mass: 0.8 }}
                    className="absolute inset-0 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/25 -z-10"
                  />
                )}
                <span>{stream.boardLogo}</span>
                <span>{stream.name}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Dynamic Course Preview Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCourse.id}
            initial={{ opacity: 0, y: 10, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.99 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl p-6 sm:p-10 bg-white dark:bg-[#0D1326] border border-blue-200/80 dark:border-slate-800 shadow-card space-y-6"
          >
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-2xl flex items-center justify-center shadow-sm">
                  {activeCourse.boardLogo}
                </div>
                <div>
                  <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase">{activeCourse.category}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
                    {activeCourse.name}
                  </h3>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleStartCourse}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-glow-blue flex items-center gap-2 cursor-pointer"
              >
                <span>Launch {activeCourse.name.split('(')[0]} Mock Test</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Pattern & Structure Breakdown Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                <div className="text-[11px] font-mono text-slate-400 uppercase">OFFICIAL PATTERN</div>
                <div className="text-base font-bold text-slate-900 dark:text-white mt-1">{activeCourse.patternName}</div>
                <div className="text-xs text-slate-500 mt-1">Full Marks: <strong>{activeCourse.totalMarks} Marks</strong> ({activeCourse.durationMinutes} Mins)</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 md:col-span-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase">SECTION & GROUP STRUCTURE</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
                  {activeCourse.structure.map((st, sIdx) => (
                    <div key={sIdx} className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 text-xs">
                      <div className="font-bold text-slate-900 dark:text-white">{st.name}</div>
                      <div className="text-blue-600 dark:text-blue-400 font-mono font-semibold">{st.marks} • {st.count}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Subject Modules */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-700 dark:text-slate-300">Supported High-Yield Subjects:</div>
              <div className="flex flex-wrap gap-2">
                {activeCourse.subjects.map((sub, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-semibold border border-blue-100 dark:border-blue-900/50 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                    <span>{sub}</span>
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </section>

      {/* 3. Core Features Showcase Grid */}
      <section className="w-full fluid-container space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
            AI Cognitive Capabilities
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
            Built for Academic Excellence
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            A comprehensive suite designed to replace scattered videos, rigid timetables, and forgotten formulas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              id: 'mockTests',
              title: 'Official Mock Papers',
              desc: 'Authentic 70M / 80M / 100M board and university simulators with step marking.',
              icon: FileCheck,
              color: 'text-blue-600',
              bg: 'bg-blue-50 dark:bg-blue-950/60'
            },
            {
              id: 'vivaExaminer',
              title: 'AI Viva Voice Examiner',
              desc: 'Live verbal testing for college lab exams and engineering interviews.',
              icon: Mic,
              color: 'text-indigo-600',
              bg: 'bg-indigo-50 dark:bg-indigo-950/60'
            },
            {
              id: 'cheatSheets',
              title: '1-Page Formula Sheets',
              desc: 'Printable 1-page condensed cheat-sheets for last-minute exam revision.',
              icon: FileText,
              color: 'text-purple-600',
              bg: 'bg-purple-50 dark:bg-purple-950/60'
            },
            {
              id: 'focusRoom',
              title: 'Pomodoro Focus Room',
              desc: '25-minute sprints with 432Hz binaural alpha waves to prevent study fatigue.',
              icon: Timer,
              color: 'text-emerald-600',
              bg: 'bg-emerald-50 dark:bg-emerald-950/60'
            }
          ].map((feat) => {
            const FeatIcon = feat.icon;
            return (
              <div
                key={feat.id}
                onClick={() => setActiveTab(feat.id)}
                className="p-6 rounded-3xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-blue-400 transition-all cursor-pointer group space-y-4"
              >
                <div className={`w-12 h-12 rounded-2xl ${feat.bg} ${feat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <FeatIcon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white font-display">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {feat.desc}
                </p>
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Open Feature</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Bottom High-Impact Call to Action */}
      <section className="w-full fluid-container">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white text-center space-y-6 shadow-xl shadow-blue-500/10">
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight">
            Ready to master your syllabus with VIDYA AI?
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto leading-relaxed">
            Join thousands of students preparing for university semesters, board exams, and competitive entrances.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('dashboard')}
            className="px-8 py-4 rounded-2xl bg-white text-blue-700 font-extrabold text-sm sm:text-base shadow-lg hover:bg-blue-50 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span>Launch Student Dashboard Now</span>
          </motion.button>
        </div>
      </section>

    </div>
  );
};
