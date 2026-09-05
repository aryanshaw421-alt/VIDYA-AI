import { 
  Home,
  LayoutDashboard,
  FileCheck,
  HelpCircle,
  Trophy,
  Layers,
  BookOpen,
  Target,
  Mic,
  FileText,
  Timer,
  Brain,
  Network,
  Bot,
  Radar
} from 'lucide-react';

export const mainNavLinks = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'mockTests', label: 'Mock Tests', icon: FileCheck },
  { id: 'doubtSolver', label: 'AI Doubt Solver', icon: HelpCircle },
  { id: 'liveTests', label: 'All-India AITS', icon: Trophy, badge: 'Live' },
];

export const secondaryTools = [
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
