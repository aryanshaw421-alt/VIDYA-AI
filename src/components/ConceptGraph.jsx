import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Tooltip from '@radix-ui/react-tooltip';
import { motion } from 'framer-motion';
import { 
  Network, 
  Search, 
  Filter, 
  ShieldAlert, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  ArrowRight, 
  X,
  Zap,
  RotateCcw
} from 'lucide-react';
import { conceptNodes } from '../data/studentMock';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

export const ConceptGraph = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedNode, setSelectedNode] = useState(null);
  const [highlightedBlockerId, setHighlightedBlockerId] = useState(null);

  const categories = ['All', 'Linear Algebra', 'Machine Learning', 'Calculus', 'Algorithms'];

  const filteredNodes = conceptNodes.filter(node => {
    const matchesSearch = node.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          node.domain.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || node.domain.toLowerCase().includes(activeCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const handleHighlightBlocker = () => {
    const blocker = conceptNodes.find(n => n.status === 'blocking');
    if (blocker) {
      setHighlightedBlockerId(blocker.id);
      setSelectedNode(blocker);
      toast.error(`Blocker Identified: "${blocker.name}"`, {
        description: 'Review this topic to easily understand Principal Component Analysis.'
      });
      confetti({ particleCount: 40, spread: 50, origin: { y: 0.5 } });
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'mastered':
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">✅ Mastered</span>;
      case 'learning':
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">⏳ In Progress</span>;
      case 'at_risk':
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300">⚠️ Needs Review</span>;
      case 'blocking':
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300 animate-pulse">🚫 Prerequisite Blocker</span>;
      case 'recommended':
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">⭐ Up Next</span>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full fluid-container py-6 sm:py-10 animate-fade-in space-y-8">
      
      {/* Friendly Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300 text-xs font-bold mb-2">
            <Network className="w-3.5 h-3.5" />
            <span>Interactive Study Roadmap</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
            Concept Roadmap & Prerequisite Map
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            See how topics connect. Click any topic to view prerequisites and practice questions.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleHighlightBlocker}
          className="px-4 py-2.5 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-rose-500/20 flex items-center gap-2"
        >
          <ShieldAlert className="w-4 h-4" />
          <span>Find My Study Blocker</span>
        </motion.button>
      </div>

      {/* Filter & Search Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search any chapter or topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

      </div>

      {/* Simple Clean Grid of Topics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredNodes.map((node) => {
          const isHighlighted = highlightedBlockerId === node.id;

          return (
            <motion.div
              key={node.id}
              whileHover={{ y: -3 }}
              onClick={() => setSelectedNode(node)}
              className={`p-5 rounded-2xl bg-white dark:bg-[#0D1326] border cursor-pointer transition-all shadow-sm flex flex-col justify-between ${
                isHighlighted 
                  ? 'border-rose-500 ring-2 ring-rose-500/30' 
                  : 'border-slate-200/80 dark:border-slate-800/80 hover:border-blue-400'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-slate-400 font-semibold">{node.domain}</span>
                  {getStatusBadge(node.status)}
                </div>

                <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-2">
                  {node.name}
                </h3>

                <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden my-3">
                  <div 
                    className={`h-full rounded-full ${
                      node.mastery > 80 ? 'bg-emerald-500' : node.mastery > 50 ? 'bg-blue-500' : 'bg-amber-500'
                    }`}
                    style={{ width: `${node.mastery}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
                <span>Mastery: <strong className="text-slate-700 dark:text-slate-200">{node.mastery}%</strong></span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">View Details →</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Clean Dialog for Topic Details */}
      <Dialog.Root open={!!selectedNode} onOpenChange={(open) => !open && setSelectedNode(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-fade-in" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md rounded-3xl bg-white dark:bg-[#0D1326] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl animate-fade-in">
            {selectedNode && (
              <div>
                <div className="flex items-start justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <div className="text-xs font-mono text-slate-400 mb-1">{selectedNode.domain}</div>
                    <Dialog.Title className="text-lg font-bold text-slate-900 dark:text-white">
                      {selectedNode.name}
                    </Dialog.Title>
                  </div>
                  <Dialog.Close asChild>
                    <button className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white">
                      <X className="w-5 h-5" />
                    </button>
                  </Dialog.Close>
                </div>

                <div className="my-5 space-y-4 text-xs">
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-900">
                    <span className="text-slate-500">Mastery Score</span>
                    <span className="font-bold text-sm text-slate-900 dark:text-white">{selectedNode.mastery}%</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-slate-700 dark:text-slate-300">
                    <div className="font-bold text-blue-900 dark:text-blue-200 mb-1">
                      💡 Simple Explanation:
                    </div>
                    {selectedNode.status === 'blocking'
                      ? 'This topic is the foundation for Machine Learning. Spending 15 minutes here will make subsequent chapters much easier.'
                      : 'You have a good grasp of this topic. Scheduled for light review before exams.'}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <Dialog.Close asChild>
                    <button className="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs">
                      Close
                    </button>
                  </Dialog.Close>
                  <button
                    onClick={() => {
                      toast.success(`Starting quick practice for ${selectedNode.name}`);
                      setSelectedNode(null);
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-sm"
                  >
                    Start Practice
                  </button>
                </div>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

    </div>
  );
};
