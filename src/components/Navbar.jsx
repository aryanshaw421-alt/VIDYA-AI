import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

// Radix UI Dropdown for user menu
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from './ui/dropdown-menu';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

// Minimalist, crisp Lucide icons
import { 
  Home,
  LayoutDashboard,
  FileCheck,
  HelpCircle,
  BookOpen,
  Layers,
  Brain,
  Network,
  Sun,
  Moon,
  LogOut,
  LogIn,
  Menu,
  X,
  Search,
  Sparkles,
  Award
} from 'lucide-react';

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

  // Essential Primary Links
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'studyHub', label: 'Study Room' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'mockTests', label: 'Mock Tests' },
    { id: 'doubtSolver', label: 'Doubt Solver' },
    { id: 'collegeHub', label: 'Curriculum' }
  ];

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('vidya_user');
    toast.info('Signed out successfully');
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem('vidya_user', JSON.stringify(userData));
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#FAF9F7]/90 dark:bg-[#083A4F]/90 border-b border-[#083A4F]/10 dark:border-white/10 transition-all duration-300">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            
            {/* 1. Left: Minimal Brand Logo */}
            <div className="flex items-center gap-6">
              <button 
                type="button"
                onClick={() => setActiveTab('home')} 
                className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
              >
                <div className="w-8 h-8 rounded-xl bg-[#083A4F] text-white flex items-center justify-center shadow-xs border border-[#407E8C]/30 group-hover:border-[#407E8C] transition-colors">
                  <Brain className="w-4 h-4 text-[#407E8C]" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-extrabold text-lg tracking-tight text-[#083A4F] dark:text-white">
                    VIDYA
                  </span>
                  <span className="text-[11px] font-bold px-1.5 py-0.5 rounded-md bg-[#A58D66] text-white tracking-wider">
                    AI
                  </span>
                </div>
              </button>
            </div>

            {/* 2. Center: Clean, Airy Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = activeTab === link.id;

                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => setActiveTab(link.id)}
                    className={`relative px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'text-[#083A4F] dark:text-white font-semibold'
                        : 'text-[#083A4F]/70 dark:text-[#E5E1DD]/75 hover:text-[#083A4F] dark:hover:text-white hover:bg-[#083A4F]/5 dark:hover:bg-white/5'
                    }`}
                  >
                    {/* Minimal active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="navActivePill"
                        transition={{ type: "spring", stiffness: 450, damping: 35 }}
                        className="absolute inset-0 bg-[#083A4F]/8 dark:bg-white/10 rounded-xl -z-10"
                      />
                    )}
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#407E8C] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* 3. Right: Search, Theme Toggle, and Primary Action */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Universal Search Button */}
              <button
                type="button"
                onClick={onOpenSearch}
                aria-label="Search"
                className="p-2 sm:px-3 sm:py-1.5 rounded-xl text-[#083A4F]/75 dark:text-[#E5E1DD]/80 hover:text-[#083A4F] dark:hover:text-white hover:bg-[#083A4F]/5 dark:hover:bg-white/10 transition-all flex items-center gap-2 cursor-pointer border border-transparent hover:border-[#083A4F]/10 dark:hover:border-white/10"
              >
                <Search className="w-4 h-4 text-[#407E8C]" />
                <span className="hidden lg:inline text-xs font-mono">Search</span>
                <kbd className="hidden lg:inline-flex items-center text-[10px] px-1.5 py-0.5 rounded bg-[#083A4F]/8 dark:bg-white/10 font-mono text-[#083A4F]/70 dark:text-[#E5E1DD]/70">
                  ⌘K
                </kbd>
              </button>

              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={() => setIsDark(!isDark)}
                aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                className="p-2 rounded-xl text-[#083A4F]/75 dark:text-[#E5E1DD]/80 hover:text-[#083A4F] dark:hover:text-white hover:bg-[#083A4F]/5 dark:hover:bg-white/10 transition-all cursor-pointer"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-[#A58D66]" />
                ) : (
                  <Moon className="w-4 h-4 text-[#083A4F]" />
                )}
              </button>

              {/* Primary User Account or Sign In CTA */}
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button 
                      type="button"
                      className="flex items-center gap-2 p-1 rounded-full hover:ring-2 hover:ring-[#407E8C]/40 transition-all cursor-pointer focus:outline-none"
                    >
                      <Avatar className="w-8 h-8 border border-[#407E8C]/30">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className="bg-[#083A4F] text-white font-bold text-xs">
                          {user.name ? user.name.slice(0, 2).toUpperCase() : 'AK'}
                        </AvatarFallback>
                      </Avatar>
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    side="bottom"
                    align="end"
                    className="z-50 min-w-[220px] p-2 rounded-2xl bg-[#FAF9F7] dark:bg-[#062432] border border-[#083A4F]/15 dark:border-[#407E8C]/25 shadow-xl text-xs space-y-1"
                  >
                    <div className="px-3 py-2 border-b border-[#083A4F]/10 dark:border-white/10">
                      <div className="font-bold text-[#083A4F] dark:text-white truncate">{user.name}</div>
                      <div className="text-[10px] text-neutral-500 font-mono truncate">{user.email}</div>
                      <div className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#A58D66]/20 text-[#A58D66] dark:text-[#C5AF88] font-mono text-[9px] font-bold">
                        <Award className="w-2.5 h-2.5" />
                        {user.plan || 'Pro Scholar'}
                      </div>
                    </div>

                    <DropdownMenuItem
                      onClick={() => setActiveTab('dashboard')}
                      className="px-3 py-2 rounded-xl hover:bg-[#083A4F]/5 dark:hover:bg-white/5 flex items-center gap-2 cursor-pointer font-medium text-neutral-700 dark:text-neutral-300"
                    >
                      <LayoutDashboard className="w-3.5 h-3.5" />
                      <span>Student Dashboard</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={() => setActiveTab('conceptGraph')}
                      className="px-3 py-2 rounded-xl hover:bg-[#083A4F]/5 dark:hover:bg-white/5 flex items-center gap-2 cursor-pointer font-medium text-neutral-700 dark:text-neutral-300"
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
                <button
                  type="button"
                  onClick={() => setAuthModalOpen(true)}
                  className="px-4 py-2 rounded-xl bg-[#407E8C] hover:bg-[#346875] text-white font-semibold text-xs transition-all shadow-xs flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Sign In</span>
                </button>
              )}

              {/* Mobile Hamburger Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-xl text-[#083A4F] dark:text-white hover:bg-[#083A4F]/5 dark:hover:bg-white/10 shrink-0 cursor-pointer"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Clean Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 350, damping: 32 }}
              className="absolute top-0 right-0 bottom-0 w-[80vw] max-w-[320px] bg-[#FAF9F7] dark:bg-[#052735] p-5 shadow-2xl z-10 flex flex-col justify-between overflow-y-auto"
            >
              <div className="space-y-6">
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#083A4F]/10 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#083A4F] text-white flex items-center justify-center">
                      <Brain className="w-4 h-4 text-[#407E8C]" />
                    </div>
                    <span className="font-display font-extrabold text-base text-[#083A4F] dark:text-white">
                      VIDYA AI
                    </span>
                  </div>
                  <button 
                    type="button"
                    onClick={() => setMobileMenuOpen(false)} 
                    className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 dark:hover:text-white cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="space-y-1">
                  {navLinks.map((link) => {
                    const isActive = activeTab === link.id;
                    return (
                      <button
                        key={link.id}
                        type="button"
                        onClick={() => {
                          setActiveTab(link.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                          isActive
                            ? 'bg-[#407E8C] text-white font-semibold shadow-xs'
                            : 'text-[#083A4F] dark:text-neutral-200 hover:bg-[#083A4F]/5 dark:hover:bg-white/5'
                        }`}
                      >
                        {link.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="pt-4 border-t border-[#083A4F]/10 dark:border-white/10 space-y-2">
                {!user ? (
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setAuthModalOpen(true);
                    }}
                    className="w-full py-2.5 rounded-xl bg-[#407E8C] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Sign In</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleLogout();
                    }}
                    className="w-full py-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 font-semibold text-xs flex items-center justify-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                )}
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
