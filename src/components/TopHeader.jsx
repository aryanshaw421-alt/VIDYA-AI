import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { 
  Menu, 
  Search, 
  Sparkles, 
  Flame, 
  Trophy, 
  Brain,
  Bell,
  ChevronDown,
  GraduationCap,
  CheckCircle2
} from 'lucide-react';
import { examStreams } from '../data/examPatterns';
import { toast } from 'sonner';

const TAB_TITLES = {
  home: { title: 'Home', subtitle: 'Universal Educational Architecture' },
  dashboard: { title: 'Student Dashboard', subtitle: 'Cognitive Learning Intelligence' },
  doubtSolver: { title: 'AI Instant Doubt Solver', subtitle: '24/7 Question Photo OCR & Derivations' },
  mockTests: { title: 'Mock Test Engine', subtitle: 'Official University & Board Patterns' },
  flashcards: { title: 'Flashcard Decks', subtitle: 'Anki-Style SM-2 Spaced Repetition' },
  smartPdf: { title: 'Smart Notes & PDF Reader', subtitle: 'Google Drive Study Vault Synced' },
  weaknessHeatmap: { title: 'Weakness Radar', subtitle: 'Diagnostic Chapter Health Heatmap' },
  vivaExaminer: { title: 'AI Viva Voice Examiner', subtitle: 'Speech-Enabled College Lab Simulator' },
  cheatSheets: { title: '1-Page Formula Sheets', subtitle: 'High-Yield Last-Minute Revision Matrices' },
  focusRoom: { title: 'Pomodoro Focus Room', subtitle: '25m Sprints with 432Hz Alpha Waves' },
  digitalTwin: { title: 'Digital Memory Twin', subtitle: 'Ebbinghaus Forgetting Curve Simulator' },
  conceptGraph: { title: 'Prerequisite Knowledge Graph', subtitle: 'Interactive Curricula & Gap Discovery' },
  agentSwarm: { title: 'Cognitive Multi-Agent Swarm', subtitle: 'Autonomous Diagnostic & Pedagogical Swarm' },
  educatorRadar: { title: 'Student Early-Warning Radar', subtitle: 'Dropout Prevention & At-Risk Heatmaps' },
  publicApiHub: { title: 'Public Educational Library', subtitle: 'Open Research & Academic Tools' },
  deckStudio: { title: 'Executive Pitch Deck', subtitle: 'AI Cognitive Architecture Slides' }
};

export const TopHeader = ({ activeTab, setActiveTab, setMobileOpen, user }) => {
  const [selectedExamId, setSelectedExamId] = useState('btech_makaut');
  const currentInfo = TAB_TITLES[activeTab] || { title: 'VIDYA AI', subtitle: 'Cognitive Learning Engine' };

  const currentStream = examStreams.find(s => s.id === selectedExamId) || examStreams[0];

  const handleSelectStream = (stream) => {
    setSelectedExamId(stream.id);
    toast.success(`Active Exam Target: ${stream.name}!`, {
      description: 'Mock papers and study roadmaps customized for this pattern.'
    });
  };

  return (
    <header className="sticky top-0 z-30 h-16 w-full bg-white/90 dark:bg-[#050A18]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 px-4 sm:px-8 flex items-center justify-between gap-4 transition-colors">
      
      {/* 1. Left: Mobile Menu Toggle + Breadcrumbs Title */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="min-w-0">
          <h1 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-display leading-tight truncate">
            {currentInfo.title}
          </h1>
          <p className="hidden sm:block text-[11px] text-slate-500 dark:text-slate-400 font-sans truncate">
            {currentInfo.subtitle}
          </p>
        </div>
      </div>

      {/* 2. Center: Minimal AI Search Capsule (⌘K) */}
      <button
        onClick={() => setActiveTab('doubtSolver')}
        className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 text-xs text-slate-500 dark:text-slate-400 hover:border-blue-400 hover:text-slate-700 dark:hover:text-slate-200 transition-all cursor-pointer"
      >
        <Search className="w-3.5 h-3.5 text-slate-400" />
        <span>Ask AI or search topic...</span>
        <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-[10px] font-mono">
          ⌘K
        </kbd>
      </button>

      {/* 3. Right: Essential Fast Controls (Clean & Minimal) */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        
        {/* 1-Click Exam Target Switcher Pill */}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 text-xs font-bold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer">
              <span>{currentStream.boardLogo}</span>
              <span className="hidden sm:inline truncate max-w-[120px]">{currentStream.name.split('(')[0]}</span>
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

        {/* Daily Study Streak */}
        <div 
          title="Daily Study Streak: 7 Days Active"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900/60 text-xs font-bold text-amber-700 dark:text-amber-300"
        >
          <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span>7d</span>
        </div>

        {/* Subtle AI Revision Alert Bell */}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button 
              title="AI Study Notifications"
              className="relative p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              side="bottom"
              align="end"
              className="z-50 min-w-[260px] p-3 rounded-2xl bg-white dark:bg-[#0D1326] border border-slate-200 dark:border-slate-800 shadow-xl text-xs space-y-2"
            >
              <div className="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                <span>AI Study Alerts</span>
                <span className="text-[10px] font-mono text-blue-600 font-bold">1 Due</span>
              </div>
              <div 
                onClick={() => setActiveTab('conceptGraph')}
                className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-slate-800 dark:text-slate-200 cursor-pointer hover:border-blue-400"
              >
                <div className="font-bold text-[11px] text-blue-700 dark:text-blue-300">Memory Twin Alert</div>
                <div className="text-[10px] text-slate-600 dark:text-slate-400 mt-0.5">Eigenvalues review (15m) due today to unblock PCA.</div>
              </div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>

      </div>

    </header>
  );
};
