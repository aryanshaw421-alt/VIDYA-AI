import React, { useState, useEffect, useRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { 
  Search, 
  BookOpen, 
  GraduationCap, 
  FileCheck, 
  HelpCircle, 
  Layers, 
  Timer, 
  Mic, 
  Brain, 
  Network, 
  FileText, 
  Moon, 
  Sun, 
  ArrowRight,
  Sparkles,
  Command
} from 'lucide-react';

const SEARCH_ITEMS = [
  // R-25 Semesters (NIT Autonomous / MAKAUT NEP 2020)
  { id: 'sem-1', category: 'R-25 B.Tech Semester', title: '1st Semester (CS101 C Prog, PH101 Physics, M101 Math-I, HU101 EVS, HU102 IKS)', type: 'semester', semNum: 1, tab: 'collegeHub' },
  { id: 'sem-2', category: 'R-25 B.Tech Semester', title: '2nd Semester (CS201 DSA, CS202 Intro AI, CS203 Digital Logic, CH201 Chem, M201 Math-II)', type: 'semester', semNum: 2, tab: 'collegeHub' },
  { id: 'sem-3', category: 'R-25 B.Tech Semester', title: '3rd Semester (CS301 COA, CS302 DAA, CS303 OS, CS304 Adv AI, EC(CS)301 IoT, Discrete Math)', type: 'semester', semNum: 3, tab: 'collegeHub' },
  { id: 'sem-4', category: 'R-25 B.Tech Semester', title: '4th Semester (CS401 DBMS, CS402 Networks, CS403 ML, CS404 Automata / TOC, Prob & Stats)', type: 'semester', semNum: 4, tab: 'collegeHub' },
  { id: 'sem-5', category: 'R-25 B.Tech Semester', title: '5th Semester (CS501 Software Engg, CS502 Java, CS503 Compiler/Crypto/Graphics, Soft Comp)', type: 'semester', semNum: 5, tab: 'collegeHub' },
  { id: 'sem-6', category: 'R-25 B.Tech Semester', title: '6th Semester (CS601 Web Tech, CS602 Deep Learning, CS603 Cloud/BigData/NLP, Cyber Law)', type: 'semester', semNum: 6, tab: 'collegeHub' },
  { id: 'sem-7', category: 'R-25 B.Tech Semester', title: '7th Semester (CS701 Blockchain/Robotics/Optimization, HRD & OB, IPR, Project-III)', type: 'semester', semNum: 7, tab: 'collegeHub' },
  { id: 'sem-8', category: 'R-25 B.Tech Semester', title: '8th Semester (CS881 Industry Internship/Entrepreneurship, CS882 Grand Viva)', type: 'semester', semNum: 8, tab: 'collegeHub' },

  // Core Subjects & Topics
  { id: 'sub-dsa', category: 'Core Subject', title: 'Data Structures & Algorithms (AVL Trees, Graphs, Sorting)', type: 'topic', topic: 'Data Structures & Algorithms (DSA)', tab: 'studyHub' },
  { id: 'sub-os', category: 'Core Subject', title: "Operating Systems (Banker's Algorithm, Paging, Deadlocks)", type: 'topic', topic: 'Operating Systems (OS)', tab: 'studyHub' },
  { id: 'sub-dbms', category: 'Core Subject', title: 'Database Management Systems (1NF-BCNF Normalization, SQL)', type: 'topic', topic: 'Database Management Systems (DBMS)', tab: 'studyHub' },
  { id: 'sub-cn', category: 'Core Subject', title: 'Computer Networks (Subnetting, CIDR, TCP 3-Way Handshake)', type: 'topic', topic: 'Computer Networks (CN)', tab: 'studyHub' },
  { id: 'sub-coa', category: 'Core Subject', title: 'Computer Organization & Architecture (Booth Algorithm, Cache)', type: 'topic', topic: 'Computer Organization & Architecture (COA)', tab: 'studyHub' },
  { id: 'sub-math', category: 'Core Subject', title: 'Linear Algebra & Calculus (Eigenvalues, Cayley-Hamilton)', type: 'topic', topic: 'Matrices & Determinants (Maths)', tab: 'studyHub' },

  // Platform Tools
  { id: 'tool-mock', category: 'Exam Tool', title: 'Mock Test Engine (70M MAKAUT / CBSE / SSC Timed Papers)', type: 'tool', tab: 'mockTests', icon: FileCheck },
  { id: 'tool-doubt', category: 'AI Tool', title: 'AI Instant Doubt Solver (Step Derivations & OCR)', type: 'tool', tab: 'doubtSolver', icon: HelpCircle },
  { id: 'tool-cards', category: 'Study Tool', title: 'Flashcard Decks (Anki SM-2 Spaced Repetition)', type: 'tool', tab: 'flashcards', icon: Layers },
  { id: 'tool-focus', category: 'Productivity', title: 'Pomodoro Focus Room (432Hz Alpha Waves & Rain Audio)', type: 'tool', tab: 'focusRoom', icon: Timer },
  { id: 'tool-viva', category: 'Lab Tool', title: 'AI Viva Voice Examiner (Speech Recognition Simulator)', type: 'tool', tab: 'vivaExaminer', icon: Mic },
  { id: 'tool-twin', category: 'AI Tool', title: 'Digital Memory Twin (Ebbinghaus Forgetting Curve)', type: 'tool', tab: 'digitalTwin', icon: Brain },
  { id: 'tool-dag', category: 'AI Tool', title: 'Knowledge DAG Graph (Prerequisite Blocker Discovery)', type: 'tool', tab: 'conceptGraph', icon: Network },
  { id: 'tool-cheat', category: 'Study Tool', title: '1-Page Formula Cheat Sheets (High-Yield Matrices)', type: 'tool', tab: 'cheatSheets', icon: FileText }
];

export const CommandPalette = ({ 
  isOpen, 
  setIsOpen, 
  setActiveTab, 
  onSelectTopic,
  isDark,
  setIsDark
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  // Keyboard shortcut listener for Cmd + K or Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsOpen]);

  // Focus input when dialog opens
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const filteredItems = SEARCH_ITEMS.filter(item => {
    const q = query.toLowerCase();
    return item.title.toLowerCase().includes(q) || item.category.toLowerCase().includes(q);
  });

  const handleSelect = (item) => {
    setIsOpen(false);
    if (item.type === 'topic') {
      if (onSelectTopic) onSelectTopic(item.topic);
      setActiveTab('studyHub');
    } else if (item.type === 'semester') {
      setActiveTab('studyHub');
    } else {
      setActiveTab(item.tab);
    }
  };

  const handleKeyDownInList = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        handleSelect(filteredItems[selectedIndex]);
      }
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-fade-in" />
        <Dialog.Content className="fixed left-1/2 top-[20%] -translate-x-1/2 z-50 w-[95vw] sm:w-[580px] max-h-[70vh] rounded-3xl bg-white dark:bg-[#12151D] border border-black/[0.1] dark:border-white/[0.12] shadow-2xl overflow-hidden flex flex-col animate-slide-in">
          
          {/* Search Header Input */}
          <div className="p-4 border-b border-black/[0.06] dark:border-white/[0.08] flex items-center gap-3 bg-black/[0.02] dark:bg-white/[0.02]">
            <Search className="w-5 h-5 text-neutral-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={handleKeyDownInList}
              placeholder="Search B.Tech semesters (1-8), subjects, mock papers, tools..."
              className="w-full bg-transparent text-sm sm:text-base text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none font-sans"
            />
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-black/[0.05] dark:bg-white/[0.08] text-[10px] font-mono text-neutral-500">
              <kbd>ESC</kbd>
            </span>
          </div>

          {/* Results List */}
          <div className="p-2 overflow-y-auto max-h-[50vh] space-y-1">
            {filteredItems.length === 0 ? (
              <div className="py-12 text-center text-xs font-mono text-neutral-400">
                No matching academic topics or tools found for "{query}".
              </div>
            ) : (
              filteredItems.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                const Icon = item.icon || (item.type === 'semester' ? GraduationCap : BookOpen);

                return (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`p-3 rounded-2xl flex items-center justify-between gap-3 text-xs transition-all cursor-pointer select-none ${
                      isSelected
                        ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-900 dark:text-blue-100 font-semibold'
                        : 'text-neutral-700 dark:text-neutral-300 hover:bg-black/[0.03] dark:hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center gap-3 truncate">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected 
                          ? 'bg-blue-600 text-white shadow-sm' 
                          : 'bg-black/[0.04] dark:bg-white/[0.06] text-neutral-500 dark:text-neutral-400'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <div className="truncate font-medium text-neutral-900 dark:text-white">{item.title}</div>
                        <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">{item.category}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {isSelected && (
                        <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono text-blue-600 dark:text-blue-400">
                          <span>Select</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Quick Keys Help */}
          <div className="p-3 border-t border-black/[0.05] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] flex items-center justify-between text-[11px] font-mono text-neutral-400 px-4">
            <div className="flex items-center gap-4">
              <span>↑↓ Navigate</span>
              <span>↵ Open</span>
              <span>ESC Close</span>
            </div>
            {setIsDark && (
              <button
                onClick={() => setIsDark(!isDark)}
                className="hover:text-neutral-900 dark:hover:text-white flex items-center gap-1 cursor-pointer"
              >
                {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                <span>Toggle Theme</span>
              </button>
            )}
          </div>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
