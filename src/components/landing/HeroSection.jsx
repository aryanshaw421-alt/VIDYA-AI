import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Dialog from '@radix-ui/react-dialog';
import { 
  Sparkles, 
  ArrowRight, 
  ChevronRight, 
  GraduationCap, 
  FileCheck, 
  CheckCircle2, 
  BookOpen, 
  Layers, 
  Zap, 
  X, 
  Target, 
  ArrowLeft 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { toast } from 'sonner';

export const HeroSection = ({ setActiveTab, onOpenTopic, onOpenSemester }) => {
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  
  // Guided Onboarding Steps: 1: Target Stream, 2: Semester/Branch/Subject, 3: Goal/Need
  const [wizardStep, setWizardStep] = useState(1);
  const [selectedStream, setSelectedStream] = useState('btech');
  
  // Stream-specific sub-selection
  const [selectedSem, setSelectedSem] = useState(3);
  const [selectedGatePaper, setSelectedGatePaper] = useState('CS');
  const [selectedJeeTrack, setSelectedJeeTrack] = useState('jee_main');
  const [selectedSscSection, setSelectedSscSection] = useState('ssc_full');
  
  const [selectedGoal, setSelectedGoal] = useState('blueprint');

  const streams = [
    { id: 'btech', name: 'B.Tech Engineering', desc: 'Semester 1 to 8 (MAKAUT & University)', icon: '🎓' },
    { id: 'gate', name: 'GATE 2027', desc: 'IIT Madras (CS, DA, EC, EE, ME, CE)', icon: '🏛️' },
    { id: 'jee', name: 'JEE (Main & Advanced)', desc: 'NTA Computer Based Test (PCM)', icon: '⚡' },
    { id: 'ssc', name: 'Govt Job Exams', desc: 'SSC CGL, Railway & Aptitude', icon: '🎯' }
  ];

  const gatePapers = [
    { id: 'CS', name: 'CS — Computer Science & IT', desc: 'Algorithms, OS, DBMS, Networks, TOC, Compiler & Math' },
    { id: 'DA', name: 'DA — Data Science & AI', desc: 'Machine Learning, AI, Python, Probability & DBMS' },
    { id: 'EC', name: 'EC — Electronics & Comm.', desc: 'Digital Circuits, Signals, Analog, EMF & Communications' },
    { id: 'EE', name: 'EE — Electrical Engineering', desc: 'Power Systems, Machines, Control Systems & Network Theory' },
    { id: 'ME', name: 'ME — Mechanical Engineering', desc: 'Thermodynamics, Fluid Mechanics, Manufacturing & SOM' },
    { id: 'CE', name: 'CE — Civil Engineering', desc: 'Structures, Geotechnical, Environmental & Surveying' }
  ];

  const jeeTracks = [
    { id: 'jee_main', name: 'JEE Main Full CBT Mock', desc: 'Physics (25Q) + Chemistry (25Q) + Mathematics (25Q) — 300 Marks NTA Pattern' },
    { id: 'jee_adv', name: 'JEE Advanced Paper Simulator', desc: 'IIT Multi-Correct MSQs, Numerical Value Type & Paragraph Comprehension' },
    { id: 'physics_jee', name: 'JEE Physics Focus Track', desc: 'Mechanics, Electrodynamics, Optics, Thermodynamics & Modern Physics' },
    { id: 'chemistry_jee', name: 'JEE Chemistry Focus Track', desc: 'Organic Reaction Mechanisms, Coordination Compounds, Physical & Inorganic' },
    { id: 'maths_jee', name: 'JEE Mathematics Focus Track', desc: 'Calculus, Coordinate Geometry, Vectors & 3D, Matrices & Algebra' }
  ];

  const sscSections = [
    { id: 'ssc_full', name: 'SSC CGL Tier-1 (Full Mock)', desc: '100 Questions / 200 Marks (60 Mins Timed Simulator)' },
    { id: 'quant', name: 'Quantitative Aptitude', desc: 'Arithmetic, Advanced Algebra, Geometry & Trigonometry' },
    { id: 'reasoning', name: 'General Intelligence & Reasoning', desc: 'Syllogism, Analogy, Coding-Decoding & Logic' },
    { id: 'gk', name: 'General Awareness & Science', desc: 'Polity, Modern History, Economy & Current Affairs' }
  ];

  const getGoalsForStream = () => {
    switch (selectedStream) {
      case 'gate':
        return [
          { id: 'mockTest', label: 'Official 100-Mark IIT Madras Simulator', desc: 'Timed 65-question test with MCQs, MSQs & NAT numericals', icon: FileCheck },
          { id: 'blueprint', label: '25-Year GATE PYQ Topic Analysis Bank', desc: 'High-yield recurring questions sorted by subject weightage', icon: BookOpen },
          { id: 'cheatsheet', label: 'Engineering Math & Aptitude Cheat Sheet', desc: 'High-speed formula derivation and shortcut cards', icon: Layers }
        ];
      case 'jee':
        return [
          { id: 'mockTest', label: 'Official 300-Mark NTA JEE CBT Simulator', desc: 'Timed 75-question test with +4 / -1 negative marking', icon: FileCheck },
          { id: 'blueprint', label: 'High-Weightage Chapter Blueprint & 15-Year PYQs', desc: 'Isolate 80%+ repeated derivations, reactions and numerical patterns', icon: BookOpen },
          { id: 'cheatsheet', label: '1-Page JEE Formula Sheets & Key Named Reactions', desc: 'Emergency speed-solving formulas for Physics, Chemistry & Maths', icon: Layers }
        ];
      case 'ssc':
        return [
          { id: 'mockTest', label: 'SSC CGL 60-Min Speed Mock Test Paper', desc: '100-Question full simulator with -0.50 negative marking', icon: FileCheck },
          { id: 'blueprint', label: 'Previous 10-Year Question Weightage Map', desc: 'Focus on recurring Arithmetic, Reasoning & GK patterns', icon: BookOpen },
          { id: 'cheatsheet', label: 'Quantitative Shortcut Tricks & Vocab Sheets', desc: 'Mental math shortcuts, grammar rules & GK capsules', icon: Layers }
        ];
      default: // btech
        return [
          { id: 'blueprint', label: '30-Day Exam Pass Blueprint & Repeated PYQs', desc: 'Isolate 80%+ repeated 10M questions & hardest hurdles', icon: BookOpen },
          { id: 'mockTest', label: 'Official 70-Mark University Mock Test Paper', desc: 'Timed exam simulator with Group A, B, C marking', icon: FileCheck },
          { id: 'cheatsheet', label: '1-Page Formula & Theorem Cheat Sheet', desc: 'Emergency last-minute recall sheets', icon: Layers }
        ];
    }
  };

  const handleFinishWizard = () => {
    setIsWizardOpen(false);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });

    if (selectedStream === 'btech') {
      localStorage.setItem('vidya_selected_exam', 'btech_makaut');
      const targetTab = selectedGoal === 'mockTest' ? 'mockTests' : selectedGoal === 'cheatsheet' ? 'cheatSheets' : 'studyHub';
      if (onOpenSemester) {
        onOpenSemester(selectedSem, targetTab);
      } else {
        setActiveTab(targetTab);
      }
      toast.success(`Loaded Semester ${selectedSem} B.Tech Blueprint!`);
    } else if (selectedStream === 'gate') {
      localStorage.setItem('vidya_selected_exam', 'gate_2027');
      const targetTab = selectedGoal === 'cheatsheet' ? 'cheatSheets' : 'mockTests';
      setActiveTab(targetTab);
      toast.success(`Loaded GATE 2027 (${selectedGatePaper}) Intelligence!`, {
        description: 'IIT Madras 100-Mark official pattern & PYQs ready.'
      });
    } else if (selectedStream === 'jee') {
      localStorage.setItem('vidya_selected_exam', 'jee_main');
      const targetTab = selectedGoal === 'cheatsheet' ? 'cheatSheets' : 'mockTests';
      setActiveTab(targetTab);
      toast.success(`Loaded JEE Main & Advanced Intelligence!`, {
        description: 'NTA 300-Mark official pattern & high-yield PYQs ready.'
      });
    } else if (selectedStream === 'ssc') {
      localStorage.setItem('vidya_selected_exam', 'ssc_cgl');
      const targetTab = selectedGoal === 'cheatsheet' ? 'cheatSheets' : 'mockTests';
      setActiveTab(targetTab);
      toast.success(`Loaded SSC CGL Speed Test Suite!`);
    }
  };

  const getStep1ButtonText = () => {
    switch (selectedStream) {
      case 'btech': return 'Next: Choose Semester';
      case 'gate': return 'Next: Choose GATE Paper';
      case 'jee': return 'Next: Choose JEE Focus Track';
      case 'ssc': return 'Next: Choose Exam Section';
      default: return 'Next: Choose Syllabus';
    }
  };

  const currentGoals = getGoalsForStream();

  return (
    <section className="relative w-full pt-12 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8 text-center space-y-8 max-w-4xl mx-auto">
      
      {/* Dynamic Fluid Liquid Morphing Ambient Orbs */}
      <div className="liquid-ambient-orb liquid-orb-blue w-[340px] h-[340px] -top-12 -left-20 -z-10" />
      <div className="liquid-ambient-orb liquid-orb-cyan w-[380px] h-[380px] top-10 -right-24 -z-10" />
      <div className="liquid-ambient-orb liquid-orb-purple w-[280px] h-[280px] bottom-0 left-1/3 -z-10" />

      {/* Background Architectural Subtle Glow & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none -z-20 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 dark:bg-blue-500/15 blur-3xl pointer-events-none -z-10" />

      {/* 1. Frosted Glass Telemetry Badge */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex justify-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full frosted-glass-pill text-xs font-mono font-medium text-neutral-700 dark:text-neutral-300 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>VIDYA AI • Cognitive Exam Intelligence</span>
        </div>
      </motion.div>

      {/* 2. Bold, Clean, Calm Typography */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="space-y-4"
      >
        <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-extrabold font-display tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
          Master your syllabus. <br />
          <span className="bg-gradient-to-r from-red-600 via-amber-500 to-emerald-600 dark:from-red-400 dark:via-amber-300 dark:to-emerald-400 bg-clip-text text-transparent">
            Without the exam stress.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mx-auto font-normal">
          AI exam blueprints, 70-mark university pattern simulators, and authentic 10-mark repeated PYQs designed for Indian college and competitive students.
        </p>
      </motion.div>

      {/* 3. Primary Focused Action Button with Liquid Glass Border & Sheen */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
      >
        <button
          type="button"
          onClick={() => {
            setWizardStep(1);
            setIsWizardOpen(true);
          }}
          className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-bold text-base hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-3 cursor-pointer group select-none liquid-sheen liquid-glass-border"
        >
          <Sparkles className="w-5 h-5 text-[#D4F038] group-hover:rotate-12 transition-transform" />
          <span>Start Preparing — Select Your Syllabus</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

      {/* 4. Minimal, Clean Trust Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="pt-6 flex items-center justify-center gap-8 text-xs font-mono text-neutral-500 dark:text-neutral-400 flex-wrap"
      >
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          <span>Sem 1 to 8 Syllabi</span>
        </div>
        <span className="text-neutral-300 dark:text-neutral-700">•</span>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          <span>70-Mark Pattern Accurate</span>
        </div>
        <span className="text-neutral-300 dark:text-neutral-700">•</span>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          <span>80%+ Repeated PYQs</span>
        </div>
      </motion.div>

      {/* 5. Guided Step-by-Step Preparation Modal (Adaptive to Stream) */}
      <Dialog.Root open={isWizardOpen} onOpenChange={setIsWizardOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md animate-fade-in" />
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[95vw] sm:w-[540px] max-h-[90vh] rounded-3xl frosted-glass-card shadow-2xl p-6 sm:p-8 space-y-6 text-left overflow-y-auto animate-scale-in">
            
            {/* Header & Step Indicator */}
            <div className="flex items-center justify-between pb-3 border-b border-black/[0.05] dark:border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">
                  Step {wizardStep} of 3
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  {wizardStep === 1 && 'Select Target Exam'}
                  {wizardStep === 2 && (selectedStream === 'btech' ? 'Select Semester' : selectedStream === 'gate' ? 'Select Paper' : selectedStream === 'jee' ? 'Select JEE Track' : 'Select Section')}
                  {wizardStep === 3 && 'Choose Goal'}
                </span>
              </div>

              <Dialog.Close asChild>
                <button className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-neutral-500 cursor-pointer">
                  <X className="w-4 h-4" />
                </button>
              </Dialog.Close>
            </div>

            {/* STEP 1: What are you preparing for? */}
            {wizardStep === 1 && (
              <div className="space-y-4 animate-fade-in">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">
                    What are you preparing for?
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    VIDYA AI will customize the question paper pattern and syllabus matrices.
                  </p>
                </div>

                <div className="space-y-2 pt-1">
                  {streams.map((s) => (
                    <div
                      key={s.id}
                      onClick={() => setSelectedStream(s.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        selectedStream === s.id
                          ? 'bg-blue-50/70 dark:bg-blue-950/40 border-blue-500 shadow-sm'
                          : 'bg-[#FBFBF9] dark:bg-[#0A0C10] border-black/[0.06] dark:border-white/[0.08] hover:border-black/[0.15]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{s.icon}</span>
                        <div>
                          <div className="text-sm font-bold text-neutral-900 dark:text-white font-display">
                            {s.name}
                          </div>
                          <div className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">
                            {s.desc}
                          </div>
                        </div>
                      </div>

                      {selectedStream === s.id && (
                        <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setWizardStep(2)}
                  className="w-full py-3 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-bold text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  <span>{getStep1ButtonText()}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* STEP 2: Stream-Specific Branch / Subject / Semester Selection */}
            {wizardStep === 2 && (
              <div className="space-y-4 animate-fade-in">
                
                {/* 2A. B.Tech Engineering Semesters (1 to 8) */}
                {selectedStream === 'btech' && (
                  <>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">
                        Which semester are you in?
                      </h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        We will load the exact MAKAUT / University curriculum for this semester.
                      </p>
                    </div>

                    <div className="grid grid-cols-4 gap-2 pt-2">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                        <button
                          key={sem}
                          type="button"
                          onClick={() => setSelectedSem(sem)}
                          className={`p-3.5 rounded-2xl text-xs font-mono font-bold transition-all text-center cursor-pointer ${
                            selectedSem === sem
                              ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105 border border-blue-400'
                              : 'bg-[#FBFBF9] dark:bg-[#0A0C10] border border-black/[0.06] dark:border-white/[0.08] text-neutral-700 dark:text-neutral-300 hover:bg-black/[0.03]'
                          }`}
                        >
                          Sem {sem}
                        </button>
                      ))}
                    </div>

                    <div className="p-3.5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 text-xs font-mono text-neutral-700 dark:text-neutral-300">
                      Selected: <strong>Semester {selectedSem} B.Tech</strong> (Includes all core theory subjects, lab viva guides & repeated questions).
                    </div>
                  </>
                )}

                {/* 2B. GATE 2027 Papers (IIT Madras Pattern) */}
                {selectedStream === 'gate' && (
                  <>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">
                        Select your GATE 2027 Paper
                      </h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        IIT Madras official 100-mark pattern (65 Questions: GA + Engg Math + Core).
                      </p>
                    </div>

                    <div className="space-y-2 pt-1 max-h-[280px] overflow-y-auto">
                      {gatePapers.map((p) => (
                        <div
                          key={p.id}
                          onClick={() => setSelectedGatePaper(p.id)}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                            selectedGatePaper === p.id
                              ? 'bg-blue-50/70 dark:bg-blue-950/40 border-blue-500 shadow-sm'
                              : 'bg-[#FBFBF9] dark:bg-[#0A0C10] border-black/[0.06] dark:border-white/[0.08] hover:border-black/[0.15]'
                          }`}
                        >
                          <div>
                            <div className="text-sm font-bold text-neutral-900 dark:text-white font-display">
                              {p.name}
                            </div>
                            <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                              {p.desc}
                            </div>
                          </div>
                          {selectedGatePaper === p.id && (
                            <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="p-3.5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 text-xs font-mono text-neutral-700 dark:text-neutral-300">
                      Selected: <strong>GATE 2027 ({selectedGatePaper})</strong> — IIT Madras 100-Mark official pattern.
                    </div>
                  </>
                )}

                {/* 2C. JEE Focus Tracks */}
                {selectedStream === 'jee' && (
                  <>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">
                        Select your JEE Focus Track
                      </h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        NTA official 300-mark CBT simulator (Physics, Chemistry & Mathematics).
                      </p>
                    </div>

                    <div className="space-y-2 pt-1 max-h-[280px] overflow-y-auto">
                      {jeeTracks.map((t) => (
                        <div
                          key={t.id}
                          onClick={() => setSelectedJeeTrack(t.id)}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                            selectedJeeTrack === t.id
                              ? 'bg-blue-50/70 dark:bg-blue-950/40 border-blue-500 shadow-sm'
                              : 'bg-[#FBFBF9] dark:bg-[#0A0C10] border-black/[0.06] dark:border-white/[0.08] hover:border-black/[0.15]'
                          }`}
                        >
                          <div>
                            <div className="text-sm font-bold text-neutral-900 dark:text-white font-display">
                              {t.name}
                            </div>
                            <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                              {t.desc}
                            </div>
                          </div>
                          {selectedJeeTrack === t.id && (
                            <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="p-3.5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 text-xs font-mono text-neutral-700 dark:text-neutral-300">
                      Selected: <strong>{jeeTracks.find(t => t.id === selectedJeeTrack)?.name}</strong>.
                    </div>
                  </>
                )}

                {/* 2D. Govt Exams (SSC CGL / Railway) */}
                {selectedStream === 'ssc' && (
                  <>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">
                        Select your Govt Exam Focus
                      </h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        Choose a full-length speed mock or focus on specific test sections.
                      </p>
                    </div>

                    <div className="space-y-2 pt-1 max-h-[280px] overflow-y-auto">
                      {sscSections.map((sec) => (
                        <div
                          key={sec.id}
                          onClick={() => setSelectedSscSection(sec.id)}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                            selectedSscSection === sec.id
                              ? 'bg-blue-50/70 dark:bg-blue-950/40 border-blue-500 shadow-sm'
                              : 'bg-[#FBFBF9] dark:bg-[#0A0C10] border-black/[0.06] dark:border-white/[0.08] hover:border-black/[0.15]'
                          }`}
                        >
                          <div>
                            <div className="text-sm font-bold text-neutral-900 dark:text-white font-display">
                              {sec.name}
                            </div>
                            <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                              {sec.desc}
                            </div>
                          </div>
                          {selectedSscSection === sec.id && (
                            <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="p-3.5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 text-xs font-mono text-neutral-700 dark:text-neutral-300">
                      Selected: <strong>{sscSections.find(s => s.id === selectedSscSection)?.name}</strong>.
                    </div>
                  </>
                )}

                {/* Back / Next Buttons for Step 2 */}
                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setWizardStep(1)}
                    className="py-3 px-5 rounded-full border border-black/[0.1] dark:border-white/[0.12] text-xs font-mono font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setWizardStep(3)}
                    className="flex-grow py-3 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-bold text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Next: Select Goal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Dynamic Goals based on Stream */}
            {wizardStep === 3 && (
              <div className="space-y-4 animate-fade-in">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">
                    What do you need right now?
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {selectedStream === 'btech' && `Choose what you want VIDYA AI to generate for Semester ${selectedSem}.`}
                    {selectedStream === 'gate' && `Choose what you want VIDYA AI to generate for GATE 2027 (${selectedGatePaper}).`}
                    {selectedStream === 'jee' && `Choose what you want VIDYA AI to generate for your JEE (Main & Advanced) preparation.`}
                    {selectedStream === 'ssc' && `Choose what you want VIDYA AI to generate for your Govt exam preparation.`}
                  </p>
                </div>

                <div className="space-y-2 pt-1">
                  {currentGoals.map((g) => (
                    <div
                      key={g.id}
                      onClick={() => setSelectedGoal(g.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        selectedGoal === g.id
                          ? 'bg-blue-50/70 dark:bg-blue-950/40 border-blue-500 shadow-sm'
                          : 'bg-[#FBFBF9] dark:bg-[#0A0C10] border-black/[0.06] dark:border-white/[0.08] hover:border-black/[0.15]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                          selectedGoal === g.id ? 'bg-blue-600 text-white' : 'bg-black/5 dark:bg-white/10 text-neutral-600 dark:text-neutral-300'
                        }`}>
                          <g.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white font-display">
                            {g.label}
                          </div>
                          <div className="text-[11px] text-neutral-500 dark:text-neutral-400 font-sans">
                            {g.desc}
                          </div>
                        </div>
                      </div>

                      {selectedGoal === g.id && (
                        <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setWizardStep(2)}
                    className="py-3 px-5 rounded-full border border-black/[0.1] dark:border-white/[0.12] text-xs font-mono font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleFinishWizard}
                    className="flex-grow py-3 rounded-full bg-[#D4F038] text-neutral-900 font-bold text-sm hover:bg-[#c2de2f] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md font-mono"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Generate My Study Plan →</span>
                  </button>
                </div>
              </div>
            )}

          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

    </section>
  );
};
