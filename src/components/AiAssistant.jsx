import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { 
  Sparkles, 
  Bot, 
  Send, 
  X, 
  Brain, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { studentData } from '../data/studentMock';
import confetti from 'canvas-confetti';

export const AiAssistant = ({ setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const [conversation, setConversation] = useState([
    {
      role: 'assistant',
      text: `Hello ${studentData.name}! I am your VIDYA Cognitive Co-Pilot. I've analyzed your Digital Twin: your Cognitive Readiness is at 87% (optimal), but I've detected a high-priority prerequisite degradation in Eigenvalues (#BLK-01) that is currently blocking your progress in Principal Component Analysis.`
    }
  ]);
  const [isThinking, setIsThinking] = useState(false);

  const suggestedPrompts = [
    'What should I revise today?',
    'Why am I struggling with PCA?',
    'What concept is blocking me?',
    'Create a 7-day adaptive plan.'
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    setConversation(prev => [...prev, { role: 'user', text: query }]);
    setInputQuery('');
    setIsThinking(true);

    setTimeout(() => {
      let response = '';
      const q = query.toLowerCase();

      if (q.includes('revise') || q.includes('today')) {
        response = `Based on your Ebbinghaus memory decay model, you should spend 15 minutes reinforcing "Eigenvalues & Diagonalization" (Node #c4) and 10 minutes reviewing "Definite Integrals King Property". This will boost your retention from 68% to 94%.`;
      } else if (q.includes('pca') || q.includes('struggling') || q.includes('block')) {
        response = `Root cause identified by Diagnostic Agent: You missed prerequisite Node #c4 (Eigenvalues & Eigenvectors). PCA relies on projecting variance along maximum eigenvectors. Once we stabilize your vector projection math, PCA and SVD will become intuitive!`;
      } else if (q.includes('plan') || q.includes('7-day')) {
        response = `I have synthesized an optimized 7-day topological study path: \n• Days 1-2: Vector Subspaces & Eigenvalue Rotations\n• Days 3-4: PCA & Dimensionality Reduction Pipelines\n• Days 5-6: Graph Spectral Clustering & SVD\n• Day 7: Speed Mock Drill with negative marking.`;
      } else {
        response = `Analyzing your request against the 2,400+ Knowledge Graph nodes... Your cognitive load is currently at 42% (low), meaning you have high mental bandwidth. I recommend launching the Multi-Agent Cognitive Swarm to generate a custom bridge module.`;
      }

      setConversation(prev => [...prev, { role: 'assistant', text: response }]);
      setIsThinking(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Bottom-Right Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-2xl bg-gradient-to-tr from-blue-600 to-vidya-purple text-white shadow-glow-blue hover:scale-105 transition-transform flex items-center gap-2 font-bold text-xs"
        aria-label="Open VIDYA AI Assistant"
      >
        <Sparkles className="w-5 h-5 animate-pulse" />
        <span className="hidden sm:inline">Ask VIDYA AI</span>
      </button>

      {/* Radix Dialog for AI Assistant */}
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-fade-in" />
          <Dialog.Content className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-50 w-[95vw] sm:w-[420px] max-h-[85vh] rounded-2xl bg-white dark:bg-vidya-darkSurface border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col justify-between overflow-hidden animate-slide-in">
            
            {/* Header */}
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                  <Brain className="w-4 h-4" />
                </div>
                <div>
                  <Dialog.Title className="text-xs sm:text-sm font-bold text-vidya-navy dark:text-white">
                    VIDYA Cognitive Co-Pilot
                  </Dialog.Title>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Grounded in Student State</p>
                </div>
              </div>
              <Dialog.Close asChild>
                <button className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </Dialog.Close>
            </div>

            {/* Conversation Log */}
            <div className="p-4 space-y-3 overflow-y-auto max-h-[380px] text-xs">
              {conversation.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl leading-relaxed whitespace-pre-line ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-none border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isThinking && (
                <div className="flex justify-start">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 text-xs flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 animate-spin text-blue-500" />
                    <span>VIDYA AI reasoning across knowledge graph...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Suggested Chips & Input Box */}
            <div className="p-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
              <div className="flex flex-wrap gap-1.5 mb-2.5">
                {suggestedPrompts.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(prompt)}
                    className="px-2.5 py-1 rounded-lg text-[10px] font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-blue-500 transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  placeholder="Ask about blockers, memory, or study plans..."
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={!inputQuery.trim()}
                  className="p-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white transition-colors"
                  aria-label="Send query"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
