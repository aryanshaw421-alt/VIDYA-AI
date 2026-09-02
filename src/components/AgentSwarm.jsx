import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Stethoscope, 
  Brain, 
  Compass, 
  ShieldAlert, 
  Globe, 
  Sparkles, 
  Play, 
  CheckCircle2, 
  Zap
} from 'lucide-react';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

export const AgentSwarm = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [completedSteps, setCompletedSteps] = useState([0, 1]);

  const simpleAgents = [
    {
      id: 'diagnostic',
      name: 'Topic Doctor',
      role: 'Finds your weak topics',
      desc: 'Discovered that you need a 15-min brush-up on Eigenvalues before starting PCA.',
      icon: Stethoscope,
      color: 'text-blue-600',
      status: 'Ready'
    },
    {
      id: 'memory',
      name: 'Memory Assistant',
      role: 'Schedules review dates',
      desc: 'Calculated that Calculus should be reviewed in 2 days to prevent forgetting.',
      icon: Brain,
      color: 'text-purple-600',
      status: 'Active'
    },
    {
      id: 'curriculum',
      name: 'Schedule Optimizer',
      role: 'Shifts timetable automatically',
      desc: 'Rebalanced your 7-day study plan with zero guilt if you missed college lectures.',
      icon: Compass,
      color: 'text-emerald-600',
      status: 'Ready'
    },
    {
      id: 'intervention',
      name: 'Exam Guard',
      role: 'Early warning system',
      desc: 'Predicts semester score improvements and alerts you before exam hurdles occur.',
      icon: ShieldAlert,
      color: 'text-amber-600',
      status: 'Monitoring'
    },
    {
      id: 'library',
      name: 'Resource Finder',
      role: 'Finds papers & summaries',
      desc: 'Linked top arXiv papers and visual notes to your syllabus chapters.',
      icon: Globe,
      color: 'text-rose-600',
      status: 'Connected'
    }
  ];

  const handleOptimize = () => {
    setIsRunning(true);
    toast.info('AI Study Agents are analyzing your syllabus and schedule...');

    setTimeout(() => {
      setIsRunning(false);
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      toast.success('Study Plan Fully Optimized!', {
        description: 'Schedule re-sequenced for maximum retention with 15-minute daily focus blocks.'
      });
    }, 1000);
  };

  return (
    <div className="w-full fluid-container py-6 sm:py-10 animate-fade-in space-y-8">
      
      {/* Friendly Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 text-xs font-bold mb-2">
            <Bot className="w-3.5 h-3.5" />
            <span>AI Study Helpers</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
            5 Smart Study Agents
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Autonomous assistants working in the background to simplify your exam preparation.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleOptimize}
          disabled={isRunning}
          className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 flex items-center gap-2"
        >
          {isRunning ? (
            <>
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>Optimizing Timetable...</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-white" />
              <span>Optimize My Study Plan</span>
            </>
          )}
        </motion.button>
      </div>

      {/* 5 Clean Friendly Agent Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {simpleAgents.map((agent, idx) => {
          const Icon = agent.icon;
          return (
            <div
              key={agent.id}
              className="p-5 rounded-3xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${agent.color}`} />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> {agent.status}
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {agent.name}
                </h3>
                <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {agent.role}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {agent.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 font-medium">
                Automatic background sync enabled
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
