import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { Dashboard } from './components/Dashboard';
import { DoubtSolver } from './components/DoubtSolver';
import { LiveTestSeries } from './components/LiveTestSeries';
import { FlashcardStudio } from './components/FlashcardStudio';
import { SmartPDFViewer } from './components/SmartPDFViewer';
import { WeaknessHeatmap } from './components/WeaknessHeatmap';
import { DigitalTwin } from './components/DigitalTwin';
import { ConceptGraph } from './components/ConceptGraph';
import { AgentSwarm } from './components/AgentSwarm';
import { EducatorRadar } from './components/EducatorRadar';
import { PublicApiHub } from './components/PublicApiHub';
import { DeckStudio } from './components/DeckStudio';
import { MockTestEngine } from './components/MockTestEngine';
import { VivaExaminer } from './components/VivaExaminer';
import { CheatSheetGenerator } from './components/CheatSheetGenerator';
import { FocusRoom } from './components/FocusRoom';
import { AiAssistant } from './components/AiAssistant';

export const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('vidya_theme') === 'dark';
  });

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('vidya_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return null;
      }
    }
    // Default initial authenticated user
    return {
      name: 'Aryan Shaw',
      email: 'aryan@vidya.ai',
      examTarget: 'B.Tech 3rd Year CSE & GATE',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      isLoggedIn: true
    };
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('vidya_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('vidya_theme', 'light');
    }
  }, [isDark]);

  const pageVariants = {
    initial: { opacity: 0, y: 10, scale: 0.992 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        duration: 0.36, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    },
    exit: { 
      opacity: 0, 
      y: -6, 
      scale: 0.995, 
      transition: { 
        duration: 0.18, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] dark:bg-[#050A18] text-[#0A1128] dark:text-[#F8FAFC] transition-colors duration-200 selection:bg-blue-600/20 selection:text-blue-600">
      
      {/* Toast Provider */}
      <Toaster 
        position="top-right" 
        richColors 
        closeButton 
        theme={isDark ? 'dark' : 'light'}
      />

      {/* Clean 5-Tab Top Navbar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isDark={isDark} 
        setIsDark={setIsDark} 
        user={user}
        setUser={setUser}
      />

      {/* Main View Router */}
      <main className="flex-grow w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full"
          >
            {activeTab === 'home' && <HomePage setActiveTab={setActiveTab} user={user} />}
            {activeTab === 'dashboard' && <Dashboard setActiveTab={setActiveTab} user={user} />}
            {activeTab === 'mockTests' && <MockTestEngine user={user} />}
            {activeTab === 'doubtSolver' && <DoubtSolver />}
            {activeTab === 'liveTests' && <LiveTestSeries setActiveTab={setActiveTab} />}
            {activeTab === 'flashcards' && <FlashcardStudio />}
            {activeTab === 'smartPdf' && <SmartPDFViewer />}
            {activeTab === 'weaknessHeatmap' && <WeaknessHeatmap setActiveTab={setActiveTab} />}
            {activeTab === 'vivaExaminer' && <VivaExaminer user={user} />}
            {activeTab === 'cheatSheets' && <CheatSheetGenerator user={user} />}
            {activeTab === 'focusRoom' && <FocusRoom user={user} />}
            {activeTab === 'digitalTwin' && <DigitalTwin user={user} />}
            {activeTab === 'conceptGraph' && <ConceptGraph user={user} />}
            {activeTab === 'agentSwarm' && <AgentSwarm user={user} />}
            {activeTab === 'educatorRadar' && <EducatorRadar user={user} />}
            {activeTab === 'publicApiHub' && <PublicApiHub user={user} />}
            {activeTab === 'deckStudio' && <DeckStudio user={user} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Floating AI Assistant */}
      <AiAssistant setActiveTab={setActiveTab} />

      {/* Footer */}
      <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-[#050814]/50 py-8 text-xs text-slate-500 font-mono transition-colors">
        <div className="w-full fluid-container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <strong>VIDYA AI</strong> • Cognitive Learning Operating System
          </div>
          <div>
            "AI doesn't just teach the student. It understands the student's knowledge state and adapts around them."
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
