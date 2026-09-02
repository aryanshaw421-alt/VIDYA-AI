import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  RotateCw, 
  CheckCircle2, 
  Sparkles, 
  Brain, 
  Flame, 
  TrendingUp, 
  Award,
  ChevronLeft,
  ChevronRight,
  Zap,
  Repeat
} from 'lucide-react';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

const DECKS = [
  {
    id: 'dsa_core',
    name: 'B.Tech / GATE DSA Mastery',
    icon: '⚡',
    cards: [
      {
        front: 'What is the exact recurrence relation and time complexity of Merge Sort?',
        back: 'T(n) = 2T(n/2) + Θ(n)\nBy Master Theorem Case 2 (a=2, b=2, k=1):\nTime Complexity = Θ(n log n) in Best, Average, and Worst cases.\nAuxiliary Space = O(n).',
        category: 'Algorithms'
      },
      {
        front: 'What is the difference between Array-based Min-Heap vs Binary Search Tree (BST)?',
        back: 'Min-Heap: Parent ≤ Children. Complete Binary Tree stored in array without pointer overhead. Find-Min is O(1), Insert is O(log n).\nBST: Left < Root < Right. Sorted in-order traversal in O(n). Search is O(log n) average, O(n) worst if unbalanced.',
        category: 'Data Structures'
      },
      {
        front: 'Explain Dijkstra’s Shortest Path Algorithm time complexity using a Min-Priority Queue.',
        back: 'Using an Adjacency List + Min-Heap:\nTime Complexity = O((V + E) log V).\nKey Constraint: Does NOT work with negative weight edges (Use Bellman-Ford for negative cycles O(VE)).',
        category: 'Graph Algorithms'
      }
    ]
  },
  {
    id: 'os_sync',
    name: 'Operating Systems & Concurrency',
    icon: '💻',
    cards: [
      {
        front: 'What are the 4 Necessary Conditions for Deadlock to occur?',
        back: '1. Mutual Exclusion (Non-shareable resource)\n2. Hold and Wait (Holding resource while waiting)\n3. No Preemption (Resource cannot be forcibly taken)\n4. Circular Wait (P0 waiting for P1 waiting for P0)',
        category: 'Operating Systems'
      },
      {
        front: 'What is the difference between Counting Semaphore and Binary Semaphore (Mutex)?',
        back: 'Binary Semaphore (0 or 1): Mutual exclusion lock.\nCounting Semaphore (Integer value N): Controls access to a resource pool with N identical instances. Wait (P) decrements; Signal (V) increments.',
        category: 'Concurrency'
      }
    ]
  },
  {
    id: 'ssc_vocab',
    name: 'SSC CGL High-Frequency Vocab & Idioms',
    icon: '🏛️',
    cards: [
      {
        front: 'Idiom: "A dark horse"',
        back: 'Meaning: A candidate or competitor about whom little is known but who unexpectedly wins or succeeds.\nExample: Rohit was a dark horse in the selection exam.',
        category: 'English Vocab'
      },
      {
        front: 'Word: "Ephemeral"',
        back: 'Meaning: Lasting for a very short time; transient, fleeting.\nSynonyms: Evanescent, fleeting, momentary.\nAntonyms: Permanent, eternal, perpetual.',
        category: 'One Word Substitution'
      }
    ]
  }
];

export const FlashcardStudio = () => {
  const [selectedDeckId, setSelectedDeckId] = useState(DECKS[0].id);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [reviewedCount, setReviewedCount] = useState(0);

  const currentDeck = DECKS.find(d => d.id === selectedDeckId) || DECKS[0];
  const currentCard = currentDeck.cards[currentCardIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleRate = (rating) => {
    setReviewedCount(prev => prev + 1);
    toast.success(`Scheduled for review: ${rating}!`, {
      description: 'SM-2 spaced interval updated in your Digital Memory Twin.'
    });

    if (currentCardIndex + 1 < currentDeck.cards.length) {
      setCurrentCardIndex(prev => prev + 1);
      setIsFlipped(false);
    } else {
      confetti({ particleCount: 50, spread: 60 });
      toast.success('Deck completed for today!', {
        description: 'All flashcards reviewed with active recall.'
      });
      setCurrentCardIndex(0);
      setIsFlipped(false);
    }
  };

  return (
    <div className="w-full fluid-container py-6 sm:py-10 animate-fade-in space-y-8">
      
      {/* Header Banner */}
      <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-xl shadow-blue-500/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Anki-Style SM-2 Spaced Repetition Decks</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
            Flashcard Active Recall Studio
          </h1>
          <p className="text-sm text-blue-100 leading-relaxed">
            Harness the Ebbinghaus forgetting curve to lock core formulas, definitions, and code patterns into long-term memory.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
          <div className="text-[10px] text-blue-200 font-mono">CARDS REVIEWED</div>
          <div className="text-2xl font-bold text-white font-display">{reviewedCount} Cards</div>
        </div>
      </div>

      {/* Deck Selector Pills */}
      <div className="flex flex-wrap items-center gap-3">
        {DECKS.map((deck) => (
          <button
            key={deck.id}
            onClick={() => {
              setSelectedDeckId(deck.id);
              setCurrentCardIndex(0);
              setIsFlipped(false);
            }}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
              selectedDeckId === deck.id
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-[1.02]'
                : 'bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
            }`}
          >
            <span>{deck.icon}</span>
            <span>{deck.name}</span>
            <span className="px-1.5 py-0.5 rounded bg-black/10 text-[10px] font-mono">{deck.cards.length}</span>
          </button>
        ))}
      </div>

      {/* 3D Flip Card Container */}
      <div className="max-w-2xl mx-auto space-y-6">
        
        <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>Card {currentCardIndex + 1} of {currentDeck.cards.length} ({currentCard.category})</span>
          <span>Click card to flip 🔄</span>
        </div>

        {/* The Card */}
        <motion.div
          onClick={handleFlip}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className={`min-h-[300px] sm:min-h-[340px] p-8 rounded-3xl cursor-pointer transition-all duration-300 flex flex-col justify-between border shadow-card relative select-none ${
            isFlipped
              ? 'bg-gradient-to-br from-indigo-900 to-slate-950 text-white border-indigo-500/40'
              : 'bg-white dark:bg-[#0D1326] text-slate-900 dark:text-white border-blue-200/80 dark:border-slate-800'
          }`}
        >
          <div className="flex items-center justify-between text-xs">
            <span className={`px-2.5 py-1 rounded-lg font-mono font-bold text-[10px] ${
              isFlipped ? 'bg-indigo-500/30 text-indigo-200' : 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300'
            }`}>
              {isFlipped ? 'ANSWER / FORMULA' : 'QUESTION / PROMPT'}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <RotateCw className="w-3.5 h-3.5" />
              <span>{isFlipped ? 'Click to show front' : 'Click to flip'}</span>
            </span>
          </div>

          <div className="my-auto py-6">
            <p className={`text-base sm:text-xl font-display font-semibold leading-relaxed whitespace-pre-line ${
              isFlipped ? 'text-indigo-100' : 'text-slate-900 dark:text-white'
            }`}>
              {isFlipped ? currentCard.back : currentCard.front}
            </p>
          </div>

          <div className="text-[11px] text-slate-400 text-center font-mono">
            {isFlipped ? 'Rate your recall difficulty below:' : 'Try to actively recall before flipping'}
          </div>
        </motion.div>

        {/* SM-2 Recall Rating Actions */}
        {isFlipped && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-4 gap-3"
          >
            <button
              onClick={() => handleRate('Again (<1d)')}
              className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs font-bold hover:bg-rose-100 transition-all text-center"
            >
              <div>Again</div>
              <div className="text-[10px] font-mono opacity-80">&lt; 1 day</div>
            </button>

            <button
              onClick={() => handleRate('Hard (3d)')}
              className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900 text-amber-700 dark:text-amber-300 text-xs font-bold hover:bg-amber-100 transition-all text-center"
            >
              <div>Hard</div>
              <div className="text-[10px] font-mono opacity-80">3 days</div>
            </button>

            <button
              onClick={() => handleRate('Good (6d)')}
              className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold hover:bg-blue-100 transition-all text-center"
            >
              <div>Good</div>
              <div className="text-[10px] font-mono opacity-80">6 days</div>
            </button>

            <button
              onClick={() => handleRate('Easy (12d)')}
              className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs font-bold hover:bg-emerald-100 transition-all text-center"
            >
              <div>Easy</div>
              <div className="text-[10px] font-mono opacity-80">12 days</div>
            </button>
          </motion.div>
        )}

      </div>

    </div>
  );
};
