import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { 
  Home,
  LayoutDashboard,
  HelpCircle,
  Trophy,
  FileCheck,
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
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  PanelLeftClose,
  PanelLeftOpen,
  X
} from 'lucide-react';
import { AuthModal } from './AuthModal';
import { toast } from 'sonner';

export const Sidebar = ({ 
  activeTab, 
  setActiveTab, 
  isDark, 
  setIsDark, 
  user, 
  setUser, 
  isCollapsed, 
  setIsCollapsed,
  mobileOpen,
  setMobileOpen
}) => {
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const navSections = [
    {
      title: 'Core Learning',
      items: [
        { id: 'home', label: 'Home', icon: Home, badge: null },
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: 'Live' },
        { id: 'liveTests', label: 'All-India AITS', icon: Trophy, badge: 'Hot' },
        { id: 'mockTests', label: 'Mock Tests', icon: FileCheck, badge: '32+' },
      ]
    },
    {
      title: 'AI Superpowers',
      items: [
        { id: 'doubtSolver', label: 'AI Doubt Solver', icon: HelpCircle, badge: '24/7' },
        { id: 'vivaExaminer', label: 'AI Viva Voice', icon: Mic, badge: 'TTS' },
        { id: 'flashcards', label: 'Flashcard Decks', icon: Layers, badge: 'SM-2' },
        { id: 'smartPdf', label: 'Smart Notes & PDF', icon: BookOpen, badge: null },
        { id: 'weaknessHeatmap', label: 'Weakness Radar', icon: Target, badge: null },
      ]
    },
    {
      title: 'Study & Memory',
      items: [
        { id: 'focusRoom', label: 'Focus Room', icon: Timer, badge: '432Hz' },
        { id: 'cheatSheets', label: 'Cheat Sheets', icon: FileText, badge: 'A4' },
        { id: 'digitalTwin', label: 'Memory Twin', icon: Brain, badge: null },
        { id: 'conceptGraph', label: 'Roadmap & Graph', icon: Network, badge: null },
      ]
    },
    {
      title: 'Intelligence & Labs',
      items: [
        { id: 'agentSwarm', label: 'AI Agents Swarm', icon: Bot, badge: '4 AI' },
        { id: 'educatorRadar', label: 'Student Radar', icon: Radar, badge: null },
        { id: 'publicApiHub', label: 'API Library', icon: Globe, badge: null },
        { id: 'deckStudio', label: 'Pitch Deck', icon: Presentation, badge: null },
      ]
    }
  ];

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

  const sidebarContent = (
    <div className="flex flex-col h-full bg-[#FAF9F7]/95 dark:bg-[#052735]/95 backdrop-blur-xl border-r border-[#083A4F]/10 dark:border-[#407E8C]/15 text-neutral-800 dark:text-neutral-200 transition-all duration-300">
      
      {/* 1. Sidebar Brand Header */}
      <div className="h-16 px-4 flex items-center justify-between border-b border-[#083A4F]/10 dark:border-[#407E8C]/15 shrink-0">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            setActiveTab('home');
            if (setMobileOpen) setMobileOpen(false);
          }}
          className="flex items-center gap-2.5 text-left overflow-hidden cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-[#083A4F] text-white flex items-center justify-center shadow-md shadow-[#083A4F]/20 shrink-0 border border-[#407E8C]/30">
            <Brain className="w-5 h-5 text-[#407E8C]" />
          </div>
          
          {!isCollapsed && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-1.5"
            >
              <span className="font-display font-extrabold text-lg text-[#083A4F] dark:text-white tracking-tight">
                VIDYA
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#A58D66] text-white shadow-xs">
                AI
              </span>
            </motion.div>
          )}
        </motion.button>

        {/* Desktop Collapse Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          className="hidden lg:flex w-8 h-8 rounded-lg text-neutral-400 hover:text-[#083A4F] dark:hover:text-white hover:bg-[#083A4F]/5 dark:hover:bg-white/5 items-center justify-center transition-colors cursor-pointer"
        >
          {isCollapsed ? <PanelLeftOpen className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
        </button>

        {/* Mobile Close Button */}
        <button
          onClick={() => setMobileOpen && setMobileOpen(false)}
          className="lg:hidden w-8 h-8 rounded-lg text-neutral-400 hover:text-[#083A4F] dark:hover:text-white flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* 2. Scrollable Navigation Menu List */}
      <div className="flex-grow overflow-y-auto px-3 py-4 space-y-6">
        {navSections.map((section, sIdx) => (
          <div key={sIdx} className="space-y-1">
            {!isCollapsed && (
              <div className="px-3 pb-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#083A4F]/60 dark:text-neutral-400">
                {section.title}
              </div>
            )}

            <div className="space-y-0.5">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      if (setMobileOpen) setMobileOpen(false);
                    }}
                    title={isCollapsed ? item.label : undefined}
                    className={`relative w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors duration-150 cursor-pointer ${
                      isActive
                        ? 'text-[#083A4F] dark:text-white font-bold'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-[#083A4F] dark:hover:text-white hover:bg-[#083A4F]/5 dark:hover:bg-white/5'
                    } ${isCollapsed ? 'justify-center px-2' : ''}`}
                  >
                    {/* Vertical Active Pill Highlight */}
                    {isActive && (
                      <motion.div
                        layoutId="activeSidebarPill"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        className="absolute inset-0 bg-[#407E8C]/15 dark:bg-[#407E8C]/25 border-r-2 border-[#407E8C] rounded-xl -z-10"
                      />
                    )}

                    <Icon className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'text-[#407E8C] dark:text-[#6BB0C0] scale-110' : ''}`} />

                    {!isCollapsed && (
                      <div className="flex items-center justify-between flex-grow text-left">
                        <span className="truncate">{item.label}</span>
                        {item.badge && (
                          <span className={`px-1.5 py-0.2 rounded text-[9px] font-mono font-bold ${
                            item.badge === 'Hot' ? 'bg-[#A58D66]/20 text-[#A58D66] dark:text-[#C5AF88]' :
                            item.badge === 'Live' ? 'bg-[#407E8C]/20 text-[#407E8C] dark:text-[#6BB0C0]' :
                            'bg-[#083A4F]/10 text-[#083A4F] dark:bg-white/10 dark:text-white'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* 3. Bottom User Profile & Settings Deck */}
      <div className="p-3 border-t border-[#083A4F]/10 dark:border-[#407E8C]/15 space-y-2 shrink-0 bg-[#FAF9F7]/80 dark:bg-[#052735]/80">
        
        {/* Dark / Light Mode Switch */}
        <button
          onClick={() => setIsDark(!isDark)}
          className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:bg-[#083A4F]/5 dark:hover:bg-white/5 transition-all cursor-pointer ${
            isCollapsed ? 'justify-center px-2' : ''
          }`}
        >
          {isDark ? (
            <Sun className="w-4 h-4 text-[#A58D66] shrink-0" />
          ) : (
            <Moon className="w-4 h-4 text-[#083A4F] shrink-0" />
          )}
          {!isCollapsed && <span>{isDark ? 'Light Theme' : 'Dark Theme'}</span>}
        </button>

        {/* User Profile Card / Login Button */}
        {user ? (
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className={`w-full flex items-center gap-2.5 p-2 rounded-xl hover:bg-[#083A4F]/5 dark:hover:bg-white/5 transition-all text-left cursor-pointer ${
                isCollapsed ? 'justify-center p-1.5' : ''
              }`}>
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover border border-[#407E8C]/40 shrink-0"
                />
                {!isCollapsed && (
                  <div className="flex-grow truncate text-left">
                    <div className="text-xs font-bold text-[#083A4F] dark:text-white truncate">
                      {user.name}
                    </div>
                    <div className="text-[10px] text-neutral-500 dark:text-neutral-400 truncate">
                      {user.examTarget || 'B.Tech & GATE'}
                    </div>
                  </div>
                )}
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                side="right"
                align="end"
                className="z-50 min-w-[200px] p-1.5 rounded-xl bg-white dark:bg-[#062432] border border-[#083A4F]/15 dark:border-[#407E8C]/20 shadow-xl text-xs space-y-1"
              >
                <div className="px-3 py-2 border-b border-black/[0.06] dark:border-white/[0.08]">
                  <div className="font-bold text-[#083A4F] dark:text-white">{user.name}</div>
                  <div className="text-[10px] text-neutral-500 font-mono truncate">{user.email}</div>
                </div>

                <DropdownMenu.Item
                  onClick={() => setActiveTab('dashboard')}
                  className="px-3 py-2 rounded-lg hover:bg-black/[0.04] dark:hover:bg-white/[0.06] flex items-center gap-2 cursor-pointer font-medium text-neutral-700 dark:text-neutral-300"
                >
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  <span>Student Dashboard</span>
                </DropdownMenu.Item>

                <DropdownMenu.Item
                  onClick={handleLogout}
                  className="px-3 py-2 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center gap-2 cursor-pointer font-medium"
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
            className={`w-full py-2.5 px-3 rounded-xl bg-[#407E8C] hover:bg-[#346875] text-white font-bold text-xs shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
              isCollapsed ? 'p-2' : ''
            }`}
          >
            <LogIn className="w-4 h-4 shrink-0" />
            {!isCollapsed && <span>Sign In</span>}
          </button>
        )}

      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={handleLoginSuccess}
      />
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (Fixed Left) */}
      <aside className={`hidden lg:block fixed top-0 left-0 bottom-0 z-40 transition-all duration-300 ${
        isCollapsed ? 'w-[72px]' : 'w-[260px]'
      }`}>
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen && setMobileOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="absolute top-0 left-0 bottom-0 w-[280px] z-10 shadow-2xl"
            >
              {sidebarContent}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
