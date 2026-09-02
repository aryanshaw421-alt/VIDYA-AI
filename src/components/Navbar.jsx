import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { 
  Home,
  LayoutDashboard,
  FileCheck,
  HelpCircle,
  Trophy,
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
  CheckCircle2
} from 'lucide-react';
import { AuthModal } from './AuthModal';
import { examStreams } from '../data/examPatterns';
import { toast } from 'sonner';

export const Navbar = ({ activeTab, setActiveTab, isDark, setIsDark, user, setUser }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [selectedExamId, setSelectedExamId] = useState('btech_makaut');

  // ONLY the 5 Main Essential Tabs on the Top Navbar
  const mainNavLinks = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'mockTests', label: 'Mock Tests', icon: FileCheck },
    { id: 'doubtSolver', label: 'AI Doubt Solver', icon: HelpCircle },
    { id: 'liveTests', label: 'All-India AITS', icon: Trophy, badge: 'Live' },
  ];

  // Secondary Tools under "More Tools ▾"
  const secondaryTools = [
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
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-[#060B18]/90 backdrop-blur-md transition-colors duration-200">
        <div className="w-full fluid-container">
          <div className="flex items-center justify-between h-16 sm:h-18">
            
            {/* 1. Left: Brand Logo */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab('home')} 
              className="flex items-center gap-2.5 text-left group cursor-pointer shrink-0"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                <Brain className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white tracking-tight">
                  VIDYA
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300">
                  AI
                </span>
              </div>
            </motion.button>

            {/* 2. Center: ONLY 5 Main Tabs with Spring layoutId Pill + "More" Dropdown */}
            <nav className="hidden lg:flex items-center gap-1.5 bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 relative">
              {mainNavLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeTab === link.id;

                return (
                  <motion.button
                    key={link.id}
                    whileHover={{ y: -1, transition: { duration: 0.15 } }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActiveTab(link.id)}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-colors duration-200 z-10 cursor-pointer ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {/* Active Sliding Highlight Pill */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavHighlight"
                        transition={{ type: "spring", stiffness: 380, damping: 28, mass: 0.8 }}
                        className="absolute inset-0 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/30 -z-10"
                      />
                    )}

                    <Icon className="w-3.5 h-3.5" />
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-rose-500 text-white font-bold animate-pulse">
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
                  <button className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-850 hover:bg-slate-200/80 dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer">
                    <span>{currentStream.boardLogo}</span>
                    <span className="truncate max-w-[110px]">{currentStream.name.split('(')[0]}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    side="bottom"
                    align="end"
                    className="z-50 min-w-[240px] p-1.5 rounded-2xl bg-white dark:bg-[#0D1326] border border-slate-200 dark:border-slate-800 shadow-xl text-xs space-y-1 animate-scale-in"
                  >
                    <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800 text-[10px] font-mono text-slate-400 font-bold uppercase">
                      Switch Exam Pattern
                    </div>
                    {examStreams.map((stream) => (
                      <DropdownMenu.Item
                        key={stream.id}
                        onClick={() => handleSelectStream(stream)}
                        className={`px-3 py-2 rounded-xl flex items-center justify-between cursor-pointer ${
                          selectedExamId === stream.id
                            ? 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 font-bold'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span>{stream.boardLogo}</span>
                          <span>{stream.name}</span>
                        </div>
                        {selectedExamId === stream.id && <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />}
                      </DropdownMenu.Item>
                    ))}
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>

              {/* Animated Dark / Light Mode Switch */}
              <button
                onClick={() => setIsDark(!isDark)}
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-600" />
                )}
              </button>

              {/* User Profile Dropdown / Sign In Button */}
              {user ? (
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild>
                    <button className="flex items-center gap-2 p-1 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-8 h-8 rounded-full object-cover border border-blue-300 dark:border-blue-700"
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
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Sign In</span>
                </button>
              )}

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
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
              className="absolute top-0 right-0 bottom-0 w-[280px] bg-white dark:bg-[#080E1E] p-6 shadow-2xl z-10 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-base text-slate-900 dark:text-white font-display">
                    Navigation Menu
                  </div>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-1">
                  {mainNavLinks.concat(secondaryTools.slice(0, 5)).map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;

                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveTab(item.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                          isActive
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Mobile Theme / Profile */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Theme</span>
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5"
                >
                  {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
                  <span>{isDark ? 'Light' : 'Dark'}</span>
                </button>
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
