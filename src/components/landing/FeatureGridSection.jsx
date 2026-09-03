import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Brain, 
  Network, 
  Layers, 
  HelpCircle, 
  FileCheck, 
  RefreshCw, 
  TrendingUp, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export const FeatureGridSection = ({ setActiveTab }) => {
  const features = [
    {
      id: 'studyHub',
      badge: '01 • Study Room',
      title: 'AI Study Room',
      description: 'Instant 10-mark solved numericals, formula sheets, and curated YouTube lectures matched to your exact university syllabus.',
      icon: BookOpen,
      action: 'Open Study Room'
    },
    {
      id: 'digitalTwin',
      badge: '02 • Cognitive Twin',
      title: 'Digital Learning Twin',
      description: 'A dynamic AI clone of your memory state, estimating forgetting curves and calculating daily cognitive readiness.',
      icon: Brain,
      action: 'Inspect Twin'
    },
    {
      id: 'conceptGraph',
      badge: '03 • Dependencies',
      title: 'Prerequisite DAG Gap Detection',
      description: 'Maps topological subject hierarchies. Never struggle in advanced topics because of an unmastered foundational lemma.',
      icon: Network,
      action: 'Explore Graph'
    },
    {
      id: 'flashcards',
      badge: '04 • Spaced Recall',
      title: 'SM-2 Memory Retention Engine',
      description: 'Automated flashcard decks with algorithmic scheduling that triggers quick reviews right before memory decays.',
      icon: Layers,
      action: 'Practice Decks'
    },
    {
      id: 'doubtSolver',
      badge: '05 • Instant Help',
      title: 'AI Step-Marked Doubt Solver',
      description: 'Ask any question or snap an exam problem. Get full university working with formulas, substitutions, and verify steps.',
      icon: HelpCircle,
      action: 'Solve Doubts'
    },
    {
      id: 'mockTests',
      badge: '06 • Simulators',
      title: 'Authentic Mock Test Engine',
      description: '70M, 80M, and 100M timed papers with real university marking schemes, negative penalties, and diagnostic reports.',
      icon: FileCheck,
      action: 'Take Test'
    },
    {
      id: 'weaknessHeatmap',
      badge: '07 • Diagnostic',
      title: 'Chapter Weakness Heatmap',
      description: 'Identifies high-yield score leakage chapters across syllabus modules and slots targeted revisions into your plan.',
      icon: RefreshCw,
      action: 'View Heatmap'
    },
    {
      id: 'dashboard',
      badge: '08 • Benchmarking',
      title: 'AIR Performance Forecast',
      description: 'Predictive rank and percentile telemetry based on national cohort data, historical papers, and test velocity.',
      icon: TrendingUp,
      action: 'View Forecast'
    }
  ];

  return (
    <section className="w-full fluid-container space-y-8">
      <SectionHeader
        badge="Platform Architecture"
        badgeVariant="neutral"
        title="Complete intelligence ecosystem."
        highlightText="Engineered for high performance."
        description="Every tool in VIDYA AI connects to your central cognitive twin to provide a unified, distraction-free study operating system."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feat) => {
          const Icon = feat.icon;

          return (
            <motion.div
              key={feat.id}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              onClick={() => setActiveTab(feat.id)}
              className="p-6 rounded-3xl bg-white dark:bg-[#12151D] border border-black/[0.08] dark:border-white/[0.08] shadow-sm hover:shadow-md hover:border-black/[0.15] dark:hover:border-white/[0.15] transition-all cursor-pointer group flex flex-col justify-between space-y-4 relative"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-black/[0.04] dark:bg-white/[0.06] text-neutral-700 dark:text-neutral-300">
                    {feat.badge}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] flex items-center justify-center text-neutral-600 dark:text-neutral-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-bold text-base text-neutral-900 dark:text-white font-display group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {feat.title}
                </h3>

                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="text-xs font-semibold text-neutral-900 dark:text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform pt-2 border-t border-black/[0.04] dark:border-white/[0.04]">
                <span>{feat.action}</span>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
