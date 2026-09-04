import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { 
  Home,
  LayoutDashboard,
  FileCheck,
  HelpCircle,
  MoreHorizontal,
  ChevronDown,
  Layers,
  BookOpen,
  Target,
  Mic,
  FileText,
  Timer,
  Brain,
  Network,
  Bot,
  Radar,
  Globe,
  Presentation,
  Sun,
  Moon,
  LogOut,
  LogIn,
  Sparkles,
  Menu,
  X,
  CheckCircle2,
  Search
} from 'lucide-react';
import { AuthModal } from './AuthModal';
import { examStreams } from '../data/examPatterns';
import { toast } from 'sonner';

export const Navbar = ({ 
  activeTab, 
  setActiveTab, 
  user, 
  setUser, 
  isDark, 
  setIsDark,
  onOpenSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [selectedExamId, setSelectedExamId] = useState(() => {
    return localStorage.getItem('vidya_selected_exam') || 'btech_makaut';
  });

  // Main Essential Tabs on the Top Navbar
  const mainNavLinks = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'studyHub', label: 'Study Room', icon: BookOpen, badge: 'Notes & YT' },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'mockTests', label: 'Mock Tests', icon: FileCheck },
    { id: 'doubtSolver', label: 'AI Doubt Solver', icon: HelpCircle },
  ];

  // Secondary Tools under "More Tools ▾"
  const secondaryTools = [
    { id: 'pyqVault', label: '📜 Predicted Papers & PYQ Vault', icon: FileCheck, badge: '70M Exam', desc: 'Autonomous 70-Mark semester question papers with MCQs, step marking & solutions' },
    { id: 'collegeHub', label: '🎓 B.Tech Hub & Topic Search', icon: BookOpen, desc: 'Subject-wise modules, notes, PYQs & YouTube lectures' },
    { id: 'flashcards', label: 'Flashcard Decks', icon: Layers, desc: 'Anki-style SM-2 spaced repetition' },
    { id: 'smartPdf', label: 'Smart Notes & PDF', icon: BookOpen, desc: 'Drive synced notes & AI annotator' },
    { id: 'weaknessHeatmap', label: 'Weakness Radar', icon: Target, desc: 'Chapter-level diagnostic gap heatmap' },
    { id: 'vivaExaminer', label: 'AI Viva Voice', icon: Mic, desc: 'Speech-enabled lab simulator' },
    { id: 'cheatSheets', label: '1-Page Cheat Sheets', icon: FileText, desc: 'Condense formulas for last-minute revision' },
    { id: 'focusRoom', label: 'Focus Room', icon: Timer, desc: '25m pomodoro with 432Hz alpha waves' },
    { id: 'digitalTwin', label: 'Memory Twin', icon: Brain, desc: 'Ebbinghaus forgetting curve tracker' },
    { id: 'conceptGraph', label: 'Roadmap & Graph', icon: Network, desc: 'Prerequisite curriculum dependencies' },
    { id: 'agentSwarm', label: 'AI Agents Swarm', icon: Bot, desc: 'Diagnostic & Pedagogical AI agents' },
    { id: 'educatorRadar', label: 'Student Radar', icon: Radar, desc: 'Early warning and at-risk alerts' }
  ];

  const currentStream = examStreams.find(s => s.id === selectedExamId) || examStreams[0];

  const handleSelectStream = (stream) => {
    setSelectedExamId(stream.id);
    toast.success(`Active Exam Target: ${stream.name}!`, {
      description: 'Mock papers and study roadmaps customized for this pattern.'
    });
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('vidya_user');
    toast.info('You have been signed out.', {
      description: 'Your learning state has been safely saved.'
    });
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem('vidya_user', JSON.stringify(userData));
  };

  const isSecondaryActive = secondaryTools.some(t => t.id === activeTab);

  return (
    <>
      <header className="sticky top-2 sm:top-3 z-50 w-full px-2 sm:px-4 md:px-6 pointer-events-none transition-all duration-300">
        <div className="w-full max-w-7xl mx-auto rounded-2xl sm:rounded-full border border-black/[0.08] dark:border-white/[0.1] bg-[#F8F9FA]/90 dark:bg-[#06080F]/90 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_16px_50px_rgba(0,0,0,0.6)] px-3 sm:px-5 pointer-events-auto transition-colors duration-200">
          <div className="flex items-center justify-between h-14 sm:h-16">
            
            {/* 1. Left: Brand Logo & HUD Badge */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab('home')} 
              className="flex items-center gap-2.5 text-left group cursor-pointer shrink-0"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden shadow-sm border border-black/[0.08] dark:border-white/[0.15] transition-transform group-hover:scale-105 bg-white p-0.5 flex items-center justify-center relative">
                <img 
                  src="/images/logos/vidya_ai_logo.jpg" 
                  alt="VIDYA AI Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-neutral-900 dark:text-white">
                  VIDYA AI
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-[#D4F038] text-neutral-900 shadow-xs">
                  HUD v2.4
                </span>
                {/* Live Telemetry Ping */}
                <div className="hidden xl:flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>12ms Synced</span>
                </div>
              </div>
            </motion.button>

            {/* 2. Center: Clean Pill Nav matching Figma Template */}
            <nav className="hidden lg:flex items-center gap-1 bg-black/[0.04] dark:bg-white/[0.06] p-1 rounded-full border border-black/[0.04] dark:border-white/[0.06] relative">
              {mainNavLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeTab === link.id;

                return (
                  <motion.button
                    key={link.id}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActiveTab(link.id)}
                    className={`relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 z-10 cursor-pointer ${
                      isActive
                        ? 'text-white dark:text-[#0E1015] font-semibold'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    {/* Active Sliding Highlight Pill */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavHighlight"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                        className="absolute inset-0 bg-[#0E1015] dark:bg-white rounded-full shadow-sm -z-10"
                      />
                    )}

                    <Icon className="w-3.5 h-3.5" />
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className={`px-1.5 py-0.2 rounded-full text-[9px] font-mono font-bold ${
                        isActive
                          ? 'bg-[#D4F038] text-neutral-900'
                          : 'bg-black/10 dark:bg-white/15 text-neutral-700 dark:text-neutral-300'
                      }`}>
                        {link.badge}
                      </span>
                    )}
                  </motion.button>
                );
              })}

              {/* More Tools Dropdown */}
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button
                    className={`relative flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-colors duration-150 cursor-pointer ${
                      isSecondaryActive
                        ? 'text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-800 shadow-sm'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <span>More Tools</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    side="bottom"
                    align="end"
                    className="z-50 min-w-[280px] p-2 rounded-2xl bg-white dark:bg-[#0D1326] border border-slate-200 dark:border-slate-800 shadow-2xl text-xs space-y-1 animate-scale-in"
                  >
                    <div className="px-3 py-1.5 text-[10px] font-mono text-slate-400 font-bold uppercase border-b border-slate-100 dark:border-slate-800">
                      All Cognitive AI Tools
                    </div>

                    <div className="max-h-[360px] overflow-y-auto space-y-0.5 pt-1">
                      {secondaryTools.map((tool) => {
                        const ToolIcon = tool.icon;
                        const isToolActive = activeTab === tool.id;

                        return (
                          <DropdownMenu.Item
                            key={tool.id}
                            onClick={() => setActiveTab(tool.id)}
                            className={`px-3 py-2 rounded-xl flex items-start gap-2.5 cursor-pointer transition-colors ${
                              isToolActive
                                ? 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 font-bold'
                                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`}
                          >
                            <ToolIcon className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400 shrink-0" />
                            <div>
                              <div className="font-bold text-xs">{tool.label}</div>
                              <div className="text-[10px] text-slate-400 font-sans">{tool.desc}</div>
                            </div>
                          </DropdownMenu.Item>
                        );
                      })}
                    </div>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </nav>

            {/* 3. Right: Fast Target Switcher + Theme Switch + Profile */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              
              {/* 1-Click Exam Target Switcher Pill */}
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] text-xs font-medium text-neutral-800 dark:text-neutral-200 border border-black/[0.06] dark:border-white/[0.08] transition-all cursor-pointer">
                    <span>{currentStream.boardLogo}</span>
                    <span className="truncate max-w-[110px]">{currentStream.name.split('(')[0]}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
                  </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    side="bottom"
                    align="end"
                    className="z-50 min-w-[240px] p-1.5 rounded-2xl bg-white dark:bg-[#12151D] border border-black/[0.08] dark:border-white/[0.08] shadow-xl text-xs space-y-1 animate-scale-in"
                  >
                    <div className="px-3 py-2 border-b border-black/[0.04] dark:border-white/[0.06] text-[10px] font-mono text-neutral-400 font-bold uppercase">
                      Switch Exam Pattern
                    </div>
                    {examStreams.map((stream) => (
                      <DropdownMenu.Item
                        key={stream.id}
                        onClick={() => handleSelectStream(stream)}
                        className={`px-3 py-2 rounded-xl flex items-center justify-between cursor-pointer ${
                          selectedExamId === stream.id
                            ? 'bg-black/5 dark:bg-white/10 text-neutral-900 dark:text-white font-bold'
                            : 'text-neutral-700 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span>{stream.boardLogo}</span>
                          <span>{stream.name}</span>
                        </div>
                        {selectedExamId === stream.id && <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900 dark:text-white" />}
                      </DropdownMenu.Item>
                    ))}
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>

              {/* Universal Spotlight Search Button (Cmd+K) */}
              <button
                type="button"
                onClick={onOpenSearch}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] text-xs font-mono text-neutral-600 dark:text-neutral-300 border border-black/[0.06] dark:border-white/[0.08] transition-all cursor-pointer"
                title="Search everything (Cmd+K)"
              >
                <Search className="w-3.5 h-3.5 text-neutral-400" />
                <span className="hidden sm:inline">Search</span>
                <kbd className="hidden md:inline-flex items-center text-[10px] px-1.5 py-0.2 rounded bg-black/[0.06] dark:bg-white/[0.08] text-neutral-500 font-mono">
                  ⌘K
                </kbd>
              </button>

              {/* Animated Dark / Light Mode Switch */}
              <button
                onClick={() => setIsDark(!isDark)}
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                className="p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-neutral-700" />
                )}
              </button>

              {/* Signature SaaS CTA Button */}
              <button
                onClick={() => setActiveTab('studyHub')}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0E1015] dark:bg-white text-white dark:text-[#0E1015] text-xs font-semibold hover:opacity-90 transition-all cursor-pointer shadow-sm"
              >
                <span>Start Learning</span>
                <ChevronDown className="w-3 h-3 -rotate-90" />
              </button>

              {/* User Profile Dropdown / Sign In Button */}
              {/* User Profile Dropdown / Sign In Button */}
              {user ? (
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild>
                    <button className="flex items-center gap-2 p-1 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-blue-300 dark:border-blue-700"
                      />
                    </button>
                  </DropdownMenu.Trigger>

                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      side="bottom"
                      align="end"
                      className="z-50 min-w-[200px] p-1.5 rounded-2xl bg-white dark:bg-[#0D1326] border border-slate-200 dark:border-slate-800 shadow-xl text-xs space-y-1"
                    >
                      <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800">
                        <div className="font-bold text-slate-900 dark:text-white">{user.name}</div>
                        <div className="text-[10px] text-slate-500 font-mono truncate">{user.email}</div>
                      </div>

                      <DropdownMenu.Item
                        onClick={() => setActiveTab('dashboard')}
                        className="px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2 cursor-pointer font-medium text-slate-700 dark:text-slate-300"
                      >
                        <LayoutDashboard className="w-3.5 h-3.5" />
                        <span>Student Dashboard</span>
                      </DropdownMenu.Item>

                      <DropdownMenu.Item
                        onClick={handleLogout}
                        className="px-3 py-2 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center gap-2 cursor-pointer font-medium"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Sign Out</span>
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              ) : (
                <button
                  onClick={() => setAuthModalOpen(true)}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span className="hidden xs:inline">Sign In</span>
                </button>
              )}

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-1.5 sm:p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 shrink-0 cursor-pointer"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="absolute top-0 right-0 bottom-0 w-[86vw] max-w-[340px] bg-white dark:bg-[#080E1E] p-5 sm:p-6 shadow-2xl z-10 flex flex-col justify-between overflow-y-auto no-scrollbar"
            >
              <div className="space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg overflow-hidden border border-black/10 dark:border-white/10 bg-white p-0.5">
                      <img src="/images/logos/vidya_ai_logo.jpg" alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <span className="font-display font-extrabold text-base text-slate-900 dark:text-white">
                      VIDYA AI
                    </span>
                    <span className="px-1.5 py-0.2 rounded-full text-[9px] font-mono font-bold bg-[#D4F038] text-neutral-900">
                      v2.4
                    </span>
                  </div>
                  <button 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Active Exam Target Selector */}
                <div className="space-y-1.5">
                  <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                    Target Exam / Pattern
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {examStreams.slice(0, 4).map((stream) => (
                      <button
                        key={stream.id}
                        onClick={() => {
                          handleSelectStream(stream);
                          setMobileMenuOpen(false);
                        }}
                        className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono transition-all text-left ${
                          selectedExamId === stream.id
                            ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold border border-blue-200 dark:border-blue-800'
                            : 'bg-black/[0.02] dark:bg-white/[0.03] text-slate-600 dark:text-slate-400 hover:bg-black/[0.05]'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span>{stream.boardLogo}</span>
                          <span className="truncate">{stream.name}</span>
                        </div>
                        {selectedExamId === stream.id && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Main Navigation Links */}
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider pb-1">
                    Main Navigation
                  </div>
                  {mainNavLinks.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;

                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveTab(item.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                          isActive
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="w-4 h-4" />
                          <span>{item.label}</span>
                        </div>
                        {item.badge && (
                          <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded-full ${
                            isActive ? 'bg-white/20 text-white' : 'bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Additional Intelligence Tools */}
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider pb-1">
                    AI Engines & Roadmaps
                  </div>
                  {secondaryTools.slice(0, 5).map((tool) => {
                    const ToolIcon = tool.icon;
                    const isActive = activeTab === tool.id;

                    return (
                      <button
                        key={tool.id}
                        onClick={() => {
                          setActiveTab(tool.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all text-left ${
                          isActive
                            ? 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 font-bold'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <ToolIcon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                        <span className="truncate">{tool.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Mobile Theme / Profile */}
              <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
                {user ? (
                  <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-900">
                    <div className="flex items-center gap-2">
                      <img src={user.avatar} alt={user.name} className="w-7 h-7 rounded-full object-cover" />
                      <div className="text-xs font-bold text-slate-900 dark:text-white truncate max-w-[120px]">
                        {user.name}
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        handleLogout();
                        setMobileMenuOpen(false);
                      }}
                      className="p-1 text-rose-500 hover:text-rose-700 text-xs font-mono font-bold"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setAuthModalOpen(true);
                    }}
                    className="w-full py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Sign In to Save Progress</span>
                  </button>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Theme</span>
                  <button
                    onClick={() => setIsDark(!isDark)}
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
                    <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={handleLoginSuccess}
      />
    </>
  );
};
