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
  CheckCircle2,
  ArrowLeft
} from 'lucide-react';
import { AuthModal } from './AuthModal';
import { examStreams } from '../data/examPatterns';
import { toast } from 'sonner';
import { mainNavLinks, secondaryTools } from '../data/navigationData';

const VidyaLogoIcon = ({ className = "w-9 h-9" }) => (
  <div className={`relative ${className} flex items-center justify-center shrink-0`}>
    {/* Subtle Ambient Radial Glow */}
    <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md pointer-events-none" />
    
    <svg 
      viewBox="0 0 40 40" 
      className="w-full h-full relative z-10 drop-shadow-[0_2px_8px_rgba(37,99,235,0.25)]" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Left Book Page (Vidya / Knowledge) Gradient */}
        <linearGradient id="vidyaLeftPage" x1="4" y1="8" x2="20" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>

        {/* Right Book Page (AI / Innovation) Gradient */}
        <linearGradient id="vidyaRightPage" x1="20" y1="8" x2="36" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>

        {/* Inner Spine Depth */}
        <linearGradient id="vidyaSpine" x1="20" y1="14" x2="20" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E40AF" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>

        {/* Cognitive AI Light Spark */}
        <radialGradient id="sparkGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#00F0FF" />
          <stop offset="100%" stopColor="#3B82F6" />
        </radialGradient>
      </defs>

      {/* 1. Left Book Page (curving into left leg of V) */}
      <path
        d="M6 13C6 10.7909 7.79086 9 10 9C13.5 9 17 11 20 13.5V33.5C16.8 31 13.2 29.5 10 29.5C7.79086 29.5 6 31 6 31V13Z"
        fill="url(#vidyaLeftPage)"
      />

      {/* 2. Right Book Page (curving into right leg of V) */}
      <path
        d="M34 13C34 10.7909 32.2091 9 30 9C26.5 9 23 11 20 13.5V33.5C23.2 31 26.8 29.5 30 29.5C32.2091 29.5 34 31 34 31V13Z"
        fill="url(#vidyaRightPage)"
      />

      {/* 3. Book Top Highlight Accents (Giving depth to pages) */}
      <path
        d="M6.5 13C7.5 11 9 10 11 10C14 10 17.5 11.8 20 14"
        stroke="#93C5FD"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M33.5 13C32.5 11 31 10 29 10C26 10 22.5 11.8 20 14"
        stroke="#E0F2FE"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* 4. Sleek Center Spine (Forming the bottom point of V) */}
      <path
        d="M20 13.5V34"
        stroke="url(#vidyaSpine)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* 5. Center AI Spark / Star of Wisdom (Ascending from the book) */}
      <path
        d="M20 4L21.5 8L25.5 9.5L21.5 11L20 15L18.5 11L14.5 9.5L18.5 8L20 4Z"
        fill="url(#sparkGlow)"
        filter="drop-shadow(0 0 5px rgba(0, 240, 255, 0.8))"
      />

      {/* Micro-spark dots */}
      <circle cx="12" cy="7" r="1" fill="#38BDF8" opacity="0.8" />
      <circle cx="28" cy="7" r="1" fill="#00E5FF" opacity="0.9" />
    </svg>
  </div>
);

export const Navbar = ({ activeTab, setActiveTab, isDark, setIsDark, user, setUser }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [selectedExamId, setSelectedExamId] = useState('btech_makaut');

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
      <header className="sticky top-0 z-40 w-full border-b border-white/60 dark:border-white/10 bg-white/50 dark:bg-[#08090E]/50 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.02)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-200">
        <div className="w-full fluid-container relative">
          <div className="flex items-center justify-between h-16 sm:h-18">
            
            {/* 1. Left: Back Arrow (when not on Home) + Target Exam Selector */}
            <div className="flex items-center gap-2.5 z-10 shrink-0">
              {activeTab !== 'home' && (
                <motion.button
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab('home')}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-white/15 hover:bg-white dark:hover:bg-white/25 text-black dark:text-white border border-slate-300 dark:border-white/25 shadow-sm transition-all cursor-pointer font-bold text-xs sm:text-sm group"
                  title="Back to Home"
                >
                  <ArrowLeft className="w-4 h-4 text-black dark:text-white group-hover:-translate-x-1 transition-transform" />
                  <span>Back</span>
                </motion.button>
              )}

              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-black dark:text-white border border-slate-200/70 dark:border-slate-700 transition-all cursor-pointer shadow-xs">
                    <span>{currentStream.boardLogo}</span>
                    <span className="truncate max-w-[80px] sm:max-w-[120px]">{currentStream.name.split('(')[0]}</span>
                    <ChevronDown className="w-3 h-3 text-slate-400" />
                  </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    side="bottom"
                    align="start"
                    className="z-50 min-w-[240px] p-1.5 rounded-2xl frosted-glass shadow-xl text-xs space-y-1 animate-scale-in"
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
                          <div>
                            <div className="font-bold text-xs">{stream.name}</div>
                            <div className="text-[10px] text-slate-400">{stream.subtitle}</div>
                          </div>
                        </div>
                        {selectedExamId === stream.id && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        )}
                      </DropdownMenu.Item>
                    ))}
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </div>

            {/* 2. TRUE MATHEMATICAL EXACT CENTER: VIDYA AI Logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto">
              <motion.button 
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveTab('home')} 
                className="flex items-center gap-3 text-center group cursor-pointer"
              >
                <VidyaLogoIcon className="w-9 h-9 sm:w-10 sm:h-10" />
                <div className="flex items-center gap-2">
                  <span className="font-sans font-black text-xl sm:text-2xl tracking-tight text-black dark:text-white flex items-center gap-0.5">
                    <span>VIDYA</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 font-extrabold">
                      AI
                    </span>
                  </span>
                  <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase apple-glass-pill text-black dark:text-white border border-slate-200/80 dark:border-white/15 shadow-xs">
                    Notebook
                  </span>
                </div>
              </motion.button>
            </div>

            {/* 3. Right: Social Icons + Theme Switch + Profile */}
            <div className="flex items-center justify-end gap-2 sm:gap-3 z-10 shrink-0">
              
              {/* Social Icons */}
              <div className="hidden xl:flex items-center gap-2 text-slate-400 dark:text-slate-500 pr-1 border-r border-slate-200 dark:border-slate-800">
                <a 
                  href="https://discord.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Discord Community"
                  className="p-1.5 hover:text-[#5865F2] hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </a>
                <a 
                  href="https://reddit.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Reddit Community"
                  className="p-1.5 hover:text-[#FF4500] hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.703zM9.25 12C8.56 12 8 12.56 8 13.25c0 .688.56 1.25 1.25 1.25.688 0 1.25-.562 1.25-1.25 0-.69-.562-1.25-1.25-1.25zm5.5 0c-.688 0-1.25.56-1.25 1.25 0 .688.562 1.25 1.25 1.25.69 0 1.25-.562 1.25-1.25 0-.69-.56-1.25-1.25-1.25zm-5.465 3.99a.577.577 0 0 0-.087.81c.64.767 1.636 1.157 2.802 1.157 1.164 0 2.16-.39 2.802-1.158a.58.58 0 0 0-.086-.81.576.576 0 0 0-.81.087c-.443.528-1.173.791-1.906.791-.734 0-1.464-.263-1.906-.79a.576.576 0 0 0-.81-.087z"/>
                  </svg>
                </a>
                <a 
                  href="https://x.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="X (Twitter)"
                  className="p-1.5 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>

              {/* Get the App / Quick Action Button */}
              <button
                onClick={() => setActiveTab('dashboard')}
                className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
              >
                Get the App
              </button>

              {/* 1-Click Exam Target Switcher Pill */}
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200/80 dark:hover:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 border border-slate-200/70 dark:border-slate-700 transition-all cursor-pointer">
                    <span>{currentStream.boardLogo}</span>
                    <span className="truncate max-w-[100px]">{currentStream.name.split('(')[0]}</span>
                    <ChevronDown className="w-3 h-3 text-slate-400" />
                  </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    side="bottom"
                    align="end"
                    className="z-50 min-w-[240px] p-1.5 rounded-2xl frosted-glass shadow-xl text-xs space-y-1 animate-scale-in"
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
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
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
                      className="z-50 min-w-[200px] p-1.5 rounded-2xl frosted-glass shadow-xl text-xs space-y-1"
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
              className="absolute top-0 right-0 bottom-0 w-[280px] frosted-glass border-l border-white/50 dark:border-white/10 p-6 shadow-2xl z-10 flex flex-col justify-between"
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
