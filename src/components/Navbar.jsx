import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { toast } from 'sonner';

// Radix UI Components
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { 
  Tooltip, 
  TooltipTrigger, 
  TooltipContent, 
  TooltipProvider 
} from './ui/tooltip';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from './ui/dropdown-menu';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

// Icons: Multi-library integration (Lucide + Remix Icons + HeroIcons + Radix Icons)
import { 
  Home,
  LayoutDashboard,
  FileCheck,
  HelpCircle,
  ChevronDown,
  ChevronRight,
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
  Sun,
  Moon,
  LogOut,
  LogIn,
  Sparkles,
  Menu,
  X,
  CheckCircle2,
  Search,
  Bell,
  Check,
  Flame,
  Zap,
  Award,
  Globe,
  Compass
} from 'lucide-react';
import { RiFireFill, RiFlashlightFill, RiRobot2Line } from 'react-icons/ri';
import { HiSparkles, HiAcademicCap } from 'react-icons/hi2';
import { MagnifyingGlassIcon, BellIcon } from '@radix-ui/react-icons';

import { AuthModal } from './AuthModal';
import { examStreams } from '../data/examPatterns';

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
  const [toolSearchQuery, setToolSearchQuery] = useState('');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: '2026 Predicted Paper Ready',
      desc: 'MAKAUT CSE 70-Mark Question Blueprint generated.',
      time: '5m ago',
      unread: true,
      tab: 'pyqVault'
    },
    {
      id: 2,
      title: 'Spaced Repetition Due',
      desc: '14 Flashcards due for DSA & Operating Systems.',
      time: '1h ago',
      unread: true,
      tab: 'flashcards'
    },
    {
      id: 3,
      title: '14-Day Study Streak Unlocked',
      desc: 'Top 3% consistency badge with 2x XP active!',
      time: '3h ago',
      unread: false,
      tab: 'dashboard'
    }
  ]);

  const [selectedExamId, setSelectedExamId] = useState(() => {
    return localStorage.getItem('vidya_selected_exam') || 'btech_makaut';
  });

  // Main Essential Tabs
  const mainNavLinks = [
    { id: 'home', label: 'Home', icon: Home, tooltip: 'Overview & Daily Mission' },
    { id: 'studyHub', label: 'Study Room', icon: BookOpen, badge: 'Notes & YT', tooltip: 'Syllabus Modules, Notes & Video Lectures' },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, tooltip: 'Analytics, Radar & Progress' },
    { id: 'mockTests', label: 'Mock Tests', icon: FileCheck, tooltip: 'Timed Exam Simulation with Instant Feedback' },
    { id: 'doubtSolver', label: 'AI Doubt Solver', icon: HelpCircle, tooltip: 'Step-by-step LaTeX & Diagrammatic Explanations' },
  ];

  // Secondary Tools categorized
  const toolCategories = [
    {
      category: 'Curriculum & Question Vault',
      items: [
        { id: 'pyqVault', label: 'Predicted Papers & PYQ Vault', icon: FileCheck, badge: '70M Exam', desc: 'Autonomous 70-Mark semester papers with step marking' },
        { id: 'collegeHub', label: 'B.Tech Hub & Topic Search', icon: BookOpen, badge: 'MAKAUT', desc: 'Subject modules, notes, PYQs & curated playlists' },
        { id: 'conceptGraph', label: 'Curriculum Concept Graph', icon: Network, desc: 'Prerequisite topic dependency map' }
      ]
    },
    {
      category: 'Cognitive & Memory Engines',
      items: [
        { id: 'flashcards', label: 'Flashcard Studio (SM-2)', icon: Layers, badge: 'SM-2', desc: 'Anki-style spaced repetition for long-term retention' },
        { id: 'smartPdf', label: 'Smart Notes & PDF Copilot', icon: BookOpen, desc: 'Interactive AI note margin annotator' },
        { id: 'digitalTwin', label: 'Memory Digital Twin', icon: Brain, desc: 'Ebbinghaus forgetting curve prediction' },
        { id: 'weaknessHeatmap', label: 'Diagnostic Weakness Radar', icon: Target, desc: 'Chapter-level diagnostic gap heatmap' }
      ]
    },
    {
      category: 'AI Labs & Rapid Revision',
      items: [
        { id: 'vivaExaminer', label: 'AI Voice Viva Examiner', icon: Mic, badge: 'Voice AI', desc: 'Real-time spoken lab exam simulation' },
        { id: 'agentSwarm', label: 'Autonomous Agent Swarm', icon: Bot, badge: 'Multi-Agent', desc: 'Pedagogical, Socratic, & Examiner AI team' },
        { id: 'cheatSheets', label: '1-Page Formula Sheets', icon: FileText, desc: 'High-density revision sheets for exam eve' },
        { id: 'focusRoom', label: 'Focus Room & 432Hz Sound', icon: Timer, desc: '25m Pomodoro with alpha brainwave frequencies' },
        { id: 'educatorRadar', label: 'Student Early Warning Radar', icon: Radar, desc: 'At-risk chapter detection and remediation alerts' }
      ]
    }
  ];

  // Flattened secondary tools
  const allSecondaryTools = useMemo(() => {
    return toolCategories.flatMap(cat => cat.items);
  }, [toolCategories]);

  // Filtered tools based on dropdown search
  const filteredTools = useMemo(() => {
    if (!toolSearchQuery.trim()) return toolCategories;
    const query = toolSearchQuery.toLowerCase();
    return toolCategories.map(cat => ({
      ...cat,
      items: cat.items.filter(item => 
        item.label.toLowerCase().includes(query) || 
        item.desc.toLowerCase().includes(query)
      )
    })).filter(cat => cat.items.length > 0);
  }, [toolCategories, toolSearchQuery]);

  const currentStream = examStreams.find(s => s.id === selectedExamId) || examStreams[0];
  const isSecondaryActive = allSecondaryTools.some(t => t.id === activeTab);
  const unreadNotificationCount = notifications.filter(n => n.unread).length;

  const handleSelectStream = (stream) => {
    setSelectedExamId(stream.id);
    localStorage.setItem('vidya_selected_exam', stream.id);
    toast.success(`Exam Target: ${stream.name}`, {
      description: 'Curriculum blueprints, question patterns and mock tests updated.'
    });
  };

  const handleStreakCelebration = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { x, y },
      colors: ['#0055FE', '#D4F038', '#F59E0B', '#10B981', '#EC4899'],
      disableForReducedMotion: true
    });

    toast.success('🔥 14-Day Streak on Fire!', {
      description: 'You have earned 2x XP Multiplier across all study rooms today.'
    });
  };

  const handleNotificationClick = (notif) => {
    setNotifications(prev => prev.map(n => n.id === notif.id ? { ...n, unread: false } : n));
    if (notif.tab) {
      setActiveTab(notif.tab);
    }
  };

  const markAllNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
    toast.info('All notifications marked as read.');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('vidya_user');
    toast.info('Signed out successfully', {
      description: 'Your learning telemetry has been safely synchronized.'
    });
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem('vidya_user', JSON.stringify(userData));
  };

  return (
    <TooltipProvider delayDuration={120}>
      <header className="sticky top-2 sm:top-3 z-50 w-full px-2 sm:px-4 md:px-6 pointer-events-none transition-all duration-300">
        <div className="w-full max-w-7xl mx-auto rounded-2xl sm:rounded-full frosted-glass-pill liquid-glass-border shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_16px_50px_rgba(0,0,0,0.7)] px-3 sm:px-5 pointer-events-auto transition-all duration-300">
          <div className="flex items-center justify-between h-14 sm:h-16 gap-2">
            
            {/* 1. Left: Brand Logo + Telemetry Pulse */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveTab('home')} 
                className="flex items-center gap-2.5 text-left group cursor-pointer"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden shadow-sm border border-black/[0.08] dark:border-white/[0.15] transition-transform group-hover:scale-105 bg-white p-0.5 flex items-center justify-center relative">
                  <img 
                    src="/images/logos/vidya_ai_logo.jpg" 
                    alt="VIDYA AI" 
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-radial-gradient from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-neutral-900 dark:text-white flex items-center gap-1">
                    VIDYA AI
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-[#D4F038] text-neutral-900 shadow-xs">
                    <HiSparkles className="w-2.5 h-2.5" />
                    HUD v2.4
                  </span>
                </div>
              </motion.button>

              {/* Live Telemetry Sync Beacon with Tooltip */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 cursor-help">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>9ms Synced</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  Neural Sync: MAKAUT R25 Blueprint & Real-time AI Node Active
                </TooltipContent>
              </Tooltip>
            </div>

            {/* 2. Center: Smooth Spring Animated Pill Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5 frosted-glass-pill p-1 border border-black/[0.05] dark:border-white/[0.08] relative">
              {mainNavLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeTab === link.id;

                return (
                  <Tooltip key={link.id}>
                    <TooltipTrigger asChild>
                      <motion.button
                        whileHover={{ scale: 1.04, y: -1 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => setActiveTab(link.id)}
                        className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 z-10 cursor-pointer ${
                          isActive
                            ? 'text-white dark:text-[#0E1015] font-semibold'
                            : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                        }`}
                      >
                        {/* Active Sliding Spring Pill Indicator */}
                        {isActive && (
                          <motion.div
                            layoutId="activeNavHighlight"
                            transition={{ type: "spring", stiffness: 440, damping: 32 }}
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
                    </TooltipTrigger>
                    <TooltipContent side="bottom">{link.tooltip}</TooltipContent>
                  </Tooltip>
                );
              })}

              {/* Categorized "More Tools" Radix Mega-Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.button
                    whileHover={{ scale: 1.04, y: -1 }}
                    whileTap={{ scale: 0.96 }}
                    className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-150 cursor-pointer ${
                      isSecondaryActive
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/60 shadow-xs'
                        : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>More Tools</span>
                    <ChevronDown className="w-3 h-3 text-neutral-400" />
                  </motion.button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  side="bottom"
                  align="center"
                  className="z-50 w-[340px] max-w-[95vw] p-2 rounded-2xl frosted-glass-card border border-black/[0.08] dark:border-white/[0.1] shadow-2xl animate-scale-in"
                >
                  {/* Internal Filter Search */}
                  <div className="px-2 pt-1 pb-2">
                    <div className="relative flex items-center">
                      <Search className="w-3.5 h-3.5 absolute left-2.5 text-neutral-400" />
                      <input
                        type="text"
                        placeholder="Quick filter tools..."
                        value={toolSearchQuery}
                        onChange={(e) => setToolSearchQuery(e.target.value)}
                        className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="max-h-[380px] overflow-y-auto pr-1 space-y-3 no-scrollbar">
                    {filteredTools.map((cat, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="px-2 text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                          {cat.category}
                        </div>
                        {cat.items.map((tool) => {
                          const ToolIcon = tool.icon;
                          const isToolActive = activeTab === tool.id;

                          return (
                            <DropdownMenuItem
                              key={tool.id}
                              onClick={() => setActiveTab(tool.id)}
                              className={`p-2 rounded-xl flex items-start gap-2.5 cursor-pointer transition-all ${
                                isToolActive
                                  ? 'bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-300 font-medium'
                                  : 'hover:bg-black/[0.03] dark:hover:bg-white/[0.05] text-neutral-700 dark:text-neutral-300'
                              }`}
                            >
                              <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${
                                isToolActive
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-black/[0.04] dark:bg-white/[0.06] text-neutral-600 dark:text-neutral-300'
                              }`}>
                                <ToolIcon className="w-3.5 h-3.5" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-1">
                                  <span className="text-xs font-semibold truncate">{tool.label}</span>
                                  {tool.badge && (
                                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-md bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 shrink-0">
                                      {tool.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[10px] text-neutral-400 truncate mt-0.5">{tool.desc}</p>
                              </div>
                            </DropdownMenuItem>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* 3. Right: Streak + Search + Notifications + Stream Switch + Theme + User */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              
              {/* Interactive Streak Pill with Confetti Burst */}
              {user && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.92 }}
                      onClick={handleStreakCelebration}
                      className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 dark:from-amber-500/15 dark:to-orange-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-mono font-bold cursor-pointer transition-all shadow-xs"
                    >
                      <motion.span
                        animate={{ scale: [1, 1.25, 1], rotate: [-4, 4, -4] }}
                        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                        className="inline-block"
                      >
                        <RiFireFill className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 drop-shadow-[0_0_6px_rgba(245,158,11,0.6)]" />
                      </motion.span>
                      <span>{user.currentStreak || 14}d</span>
                    </motion.button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    14-Day Streak Active! 2x XP boost. Click to celebrate! 🎉
                  </TooltipContent>
                </Tooltip>
              )}

              {/* 1-Click Exam Target Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="hidden md:flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] text-xs font-medium text-neutral-800 dark:text-neutral-200 border border-black/[0.06] dark:border-white/[0.08] transition-all cursor-pointer"
                  >
                    <span>{currentStream.boardLogo}</span>
                    <span className="truncate max-w-[100px]">{currentStream.name.split('(')[0]}</span>
                    <ChevronDown className="w-3 h-3 text-neutral-400" />
                  </motion.button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  side="bottom"
                  align="end"
                  className="z-50 min-w-[240px] p-1.5 rounded-2xl bg-white dark:bg-[#12151D] border border-black/[0.08] dark:border-white/[0.08] shadow-xl text-xs space-y-1"
                >
                  <DropdownMenuLabel>
                    Target Exam Pattern
                  </DropdownMenuLabel>
                  {examStreams.map((stream) => (
                    <DropdownMenuItem
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
                      {selectedExamId === stream.id && (
                        <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Universal Spotlight Search Button (Cmd+K) */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onOpenSearch}
                    className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] text-xs font-mono text-neutral-600 dark:text-neutral-300 border border-black/[0.06] dark:border-white/[0.08] transition-all cursor-pointer"
                  >
                    <MagnifyingGlassIcon className="w-3.5 h-3.5 text-neutral-400" />
                    <span className="hidden sm:inline">Search</span>
                    <kbd className="hidden md:inline-flex items-center text-[10px] px-1.5 py-0.2 rounded bg-black/[0.06] dark:bg-white/[0.08] text-neutral-500 font-mono">
                      ⌘K
                    </kbd>
                  </motion.button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Search anything with Cmd+K</TooltipContent>
              </Tooltip>

              {/* Notifications Activity Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    className="relative p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Notifications"
                  >
                    <Bell className="w-4 h-4" />
                    {unreadNotificationCount > 0 && (
                      <span className="absolute top-1 right-1 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                      </span>
                    )}
                  </motion.button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  side="bottom"
                  align="end"
                  className="z-50 w-[300px] p-2 rounded-2xl bg-white dark:bg-[#0E1322] border border-black/[0.08] dark:border-white/[0.1] shadow-2xl"
                >
                  <div className="flex items-center justify-between px-2 py-1.5 border-b border-black/[0.06] dark:border-white/[0.06]">
                    <span className="text-xs font-bold text-neutral-900 dark:text-white flex items-center gap-1.5">
                      <BellIcon className="w-3.5 h-3.5 text-blue-500" />
                      Live AI Activity
                    </span>
                    {unreadNotificationCount > 0 && (
                      <button
                        onClick={markAllNotificationsRead}
                        className="text-[10px] font-mono text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                      >
                        Mark all read
                      </button>
                    )}
                  </div>

                  <div className="space-y-1 py-1 max-h-[260px] overflow-y-auto no-scrollbar">
                    {notifications.map((n) => (
                      <DropdownMenuItem
                        key={n.id}
                        onClick={() => handleNotificationClick(n)}
                        className={`p-2 rounded-xl flex items-start gap-2.5 cursor-pointer ${
                          n.unread 
                            ? 'bg-blue-50/70 dark:bg-blue-950/40 text-neutral-900 dark:text-white' 
                            : 'text-neutral-600 dark:text-neutral-400'
                        }`}
                      >
                        <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${n.unread ? 'bg-blue-600' : 'bg-transparent'}`} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between text-xs font-semibold">
                            <span className="truncate">{n.title}</span>
                            <span className="text-[9px] font-mono text-neutral-400">{n.time}</span>
                          </div>
                          <p className="text-[10px] text-neutral-400 line-clamp-2 mt-0.5">{n.desc}</p>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Animated Theme Toggle */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={() => setIsDark(!isDark)}
                    className="p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={isDark ? 'dark' : 'light'}
                        initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                        animate={{ rotate: 0, scale: 1, opacity: 1 }}
                        exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                      >
                        {isDark ? (
                          <Sun className="w-4 h-4 text-amber-400" />
                        ) : (
                          <Moon className="w-4 h-4 text-neutral-700" />
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </motion.button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                </TooltipContent>
              </Tooltip>

              {/* Quick Action Start Learning */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveTab('studyHub')}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0E1015] dark:bg-white text-white dark:text-[#0E1015] text-xs font-semibold hover:opacity-90 transition-all cursor-pointer shadow-sm"
              >
                <RiFlashlightFill className="w-3.5 h-3.5 text-[#D4F038] dark:text-[#0055FE]" />
                <span>Start Study</span>
              </motion.button>

              {/* Radix User Avatar / Dropdown */}
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1.5 p-0.5 rounded-full hover:ring-2 hover:ring-blue-500/40 transition-all cursor-pointer relative"
                    >
                      <Avatar className="w-7 h-7 sm:w-8 sm:h-8">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className="bg-blue-600 text-white font-bold text-xs">
                          {user.name ? user.name.slice(0, 2).toUpperCase() : 'AK'}
                        </AvatarFallback>
                      </Avatar>
                      <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#06080F]" />
                    </motion.button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    side="bottom"
                    align="end"
                    className="z-50 min-w-[220px] p-2 rounded-2xl bg-white dark:bg-[#0D1326] border border-slate-200 dark:border-slate-800 shadow-2xl text-xs space-y-1"
                  >
                    <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800">
                      <div className="font-bold text-slate-900 dark:text-white truncate">{user.name}</div>
                      <div className="text-[10px] text-slate-500 font-mono truncate">{user.email}</div>
                      <div className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-mono text-[9px] font-bold">
                        <Award className="w-2.5 h-2.5" />
                        {user.plan || 'Pro Scholar'}
                      </div>
                    </div>

                    <DropdownMenuItem
                      onClick={() => setActiveTab('dashboard')}
                      className="px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2 cursor-pointer font-medium text-slate-700 dark:text-slate-300"
                    >
                      <LayoutDashboard className="w-3.5 h-3.5" />
                      <span>Student Dashboard</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={() => setActiveTab('conceptGraph')}
                      className="px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2 cursor-pointer font-medium text-slate-700 dark:text-slate-300"
                    >
                      <Network className="w-3.5 h-3.5" />
                      <span>Curriculum Graph</span>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="px-3 py-2 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center gap-2 cursor-pointer font-medium"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign Out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setAuthModalOpen(true)}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span className="hidden xs:inline">Sign In</span>
                </motion.button>
              )}

              {/* Mobile Hamburger Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-1.5 sm:p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 shrink-0 cursor-pointer"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </motion.button>

            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu with Staggered Framer Motion Animations */}
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
              transition={{ type: "spring", stiffness: 350, damping: 32 }}
              className="absolute top-0 right-0 bottom-0 w-[86vw] max-w-[340px] bg-white dark:bg-[#080E1E] p-5 shadow-2xl z-10 flex flex-col justify-between overflow-y-auto no-scrollbar"
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

                {/* Streak Banner in Mobile Drawer */}
                {user && (
                  <div 
                    onClick={handleStreakCelebration}
                    className="p-3 rounded-2xl bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-amber-500/5 border border-amber-500/30 flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <RiFireFill className="w-5 h-5 text-amber-500" />
                      <div>
                        <div className="text-xs font-bold text-amber-900 dark:text-amber-200">14-Day Study Streak</div>
                        <div className="text-[10px] text-amber-600 dark:text-amber-400 font-mono">2x XP Active • Tap to cheer</div>
                      </div>
                    </div>
                    <span className="text-sm">🔥</span>
                  </div>
                )}

                {/* Mobile Exam Pattern Switcher */}
                <div className="space-y-1.5">
                  <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                    Target Exam Pattern
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {examStreams.slice(0, 3).map((stream) => (
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
                          <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Main Navigation Links */}
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider pb-1">
                    Primary Modules
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
                    AI Cognitive Tools
                  </div>
                  {allSecondaryTools.slice(0, 6).map((tool) => {
                    const ToolIcon = tool.icon;
                    const isActive = activeTab === tool.id;

                    return (
                      <button
                        key={tool.id}
                        onClick={() => {
                          setActiveTab(tool.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all text-left ${
                          isActive
                            ? 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 font-bold'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <ToolIcon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                          <span className="truncate">{tool.label}</span>
                        </div>
                        {tool.badge && (
                          <span className="text-[8px] font-mono px-1.5 py-0.2 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0">
                            {tool.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Mobile Theme / Profile */}
              <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
                {user ? (
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-black/[0.04] dark:border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className="bg-blue-600 text-white font-bold text-xs">
                          {user.name ? user.name.slice(0, 2).toUpperCase() : 'AK'}
                        </AvatarFallback>
                      </Avatar>
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
    </TooltipProvider>
  );
};

export default Navbar;
