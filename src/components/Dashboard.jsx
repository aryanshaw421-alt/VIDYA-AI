import React, { useState } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Network, 
  Bot, 
  Radar, 
  Globe, 
  Presentation, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Flame,
  Zap,
  Play,
  BookOpen,
  FileCheck,
  Mic,
  FileText,
  Timer
} from 'lucide-react';
import { studentData } from '../data/studentMock';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

export const Dashboard = ({ setActiveTab }) => {
  const { metrics, activeBlockers, recentActivity } = studentData;

  const handleStartSession = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
    toast.success('Starting Today\'s 15-Minute Focus Session!', {
      description: 'Opening concept graph & prerequisite review module.',
    });
    setActiveTab('conceptGraph');
  };

  const statCards = [
    {
      title: 'Study Readiness',
      value: `${metrics.cognitiveReadiness.value}%`,
      trend: '+8.4%',
      desc: 'High focus window. Ideal time for difficult topics.',
      icon: Brain,
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-950/40'
    },
    {
      title: 'Syllabus Covered',
      value: `${metrics.knowledgeCoverage.value}%`,
      trend: '+12%',
      desc: '143 of 192 concepts completed and mastered.',
      icon: CheckCircle2,
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-50 dark:bg-emerald-950/40'
    },
    {
      title: 'Memory Retention',
      value: `${metrics.retentionProbability.value}%`,
      trend: '+4.1%',
      desc: 'Estimated recall accuracy for recent chapters.',
      icon: Zap,
      color: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-purple-50 dark:bg-purple-950/40'
    },
    {
      title: 'Study Pace',
      value: `${metrics.learningVelocity.value}x`,
      trend: '+18%',
      desc: 'Ahead of typical cohort preparation speed.',
      icon: Flame,
      color: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-50 dark:bg-amber-950/40'
    }
  ];

  return (
    <div className="w-full fluid-container py-6 sm:py-10 animate-fade-in space-y-8">
      
      {/* 21st Century Dev Hero Section (White & Royal Blue Elegance) */}
      <motion.div 
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl p-6 sm:p-10 frosted-glass relative overflow-hidden royal-mesh-bg"
      >
        {/* Subtle Ambient Radial Light */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800/60 text-xs font-bold text-blue-600 dark:text-blue-300">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
              <span>VIDYA AI Cognitive Engine • Welcome, Aryan!</span>
            </div>
            
            <h1 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Master your syllabus with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">AI precision</span>.
            </h1>
            
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Today's #1 Prerequisite: Review <strong>Eigenvalues & Diagonalization</strong> (15 mins) to automatically unlock <strong>Principal Component Analysis (PCA)</strong>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 10px 30px -5px rgba(0, 85, 254, 0.4)' }}
              whileTap={{ scale: 0.97 }}
              onClick={handleStartSession}
              className="px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Start 15-Min Study Session</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab('mockTests')}
              className="px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 text-slate-800 dark:text-slate-200 font-bold text-sm border border-slate-200 dark:border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Practice Mock Test</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* 4 Clean Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="p-5 rounded-2xl frosted-glass-card shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-9 h-9 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                  {stat.trend}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                {stat.title}
              </div>
              <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-2 leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Main 2-Column Clean Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left (7 cols): Today's Simple Study Plan & PW/Allen Rank Benchmark */}
        <div className="lg:col-span-7 space-y-6">

          {/* PW & Allen Style Benchmark & All-India Rank (AIR) Estimator Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900/85 via-indigo-950/75 to-slate-900/85 backdrop-blur-2xl border border-indigo-500/30 text-white shadow-xl space-y-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg">
                  🏆
                </div>
                <div>
                  <div className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider">
                    National Cohort Benchmark (PW & Allen Test Series Model)
                  </div>
                  <h3 className="font-bold text-base text-white font-display">
                    All-India Rank & Percentile Forecast
                  </h3>
                </div>
              </div>

              <div className="px-3 py-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold">
                ● Top 0.88% Cohort
              </div>
            </div>

            {/* AIR Rank & Percentile Display */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[10px] text-slate-400 font-mono">ESTIMATED AIR</div>
                <div className="text-xl font-extrabold text-amber-400 font-display mt-0.5">AIR 1,420</div>
                <div className="text-[10px] text-emerald-400 mt-1">↑ +210 Ranks this week</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[10px] text-slate-400 font-mono">PERCENTILE</div>
                <div className="text-xl font-extrabold text-blue-400 font-display mt-0.5">99.12 %ile</div>
                <div className="text-[10px] text-slate-400 mt-1">Among 1.48L Students</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[10px] text-slate-400 font-mono">AVG ACCURACY</div>
                <div className="text-xl font-extrabold text-emerald-400 font-display mt-0.5">86.4%</div>
                <div className="text-[10px] text-slate-400 mt-1">Topper Avg: 92.1%</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[10px] text-slate-400 font-mono">SPEED PER Q</div>
                <div className="text-xl font-extrabold text-purple-400 font-display mt-0.5">1.4 Mins</div>
                <div className="text-[10px] text-slate-400 mt-1">Benchmark: 1.8 Mins</div>
              </div>
            </div>

            {/* Topper vs You Speed Comparison Bar */}
            <div className="space-y-2 pt-1 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>Cohort Syllabus Mastery vs National Topper (AIR 1-100)</span>
                <span className="font-bold font-mono text-amber-400">86% vs 94%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden flex">
                <div className="h-full bg-blue-500 rounded-l-full" style={{ width: '86%' }}></div>
                <div className="h-full bg-amber-400/40" style={{ width: '8%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Today's Recommended Plan
            </h2>
            <span className="text-xs text-slate-500 font-medium">Estimated time: 45 mins</span>
          </div>

          <div className="space-y-3">
            {[
              {
                step: '1',
                title: 'Quick Prerequisite Review: Eigenvalues',
                tag: '15 min review',
                tagColor: 'bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300',
                desc: 'Fixes the gap identified by Diagnostic Agent before moving ahead.',
                action: 'Start Review',
                onClick: () => setActiveTab('conceptGraph')
              },
              {
                step: '2',
                title: 'New Chapter: Principal Component Analysis (PCA)',
                tag: '20 min concept',
                tagColor: 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
                desc: 'Learn variance projection & dimensional reduction with interactive diagrams.',
                action: 'Open Lesson',
                onClick: () => setActiveTab('conceptGraph')
              },
              {
                step: '3',
                title: 'Memory Refresh: Calculus Definite Integrals',
                tag: '10 min practice',
                tagColor: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
                desc: 'Scheduled by Memory Twin to prevent forgetting (Ebbinghaus curve).',
                action: 'Quick Quiz',
                onClick: () => setActiveTab('digitalTwin')
              },
              {
                step: '4',
                title: 'Official Board & Semester Mock Test Paper',
                tag: 'Pattern Drill',
                tagColor: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300',
                desc: 'MAKAUT 70-Mark / CBSE 80-Mark exam paper with step-marking.',
                action: 'Open Mock Test',
                onClick: () => setActiveTab('mockTests')
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl frosted-glass-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-blue-400 transition-all shadow-sm"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-sm text-slate-900 dark:text-white">{item.title}</h3>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${item.tagColor}`}>
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>

                <button
                  onClick={item.onClick}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-blue-600 hover:text-white transition-all shrink-0 ml-auto"
                >
                  {item.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right (5 cols): Google Drive Study Vault & Quick Features */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Google Drive Study Vault & Notes Importer */}
          <div className="p-5 rounded-3xl bg-gradient-to-br from-blue-900/35 via-indigo-950/35 to-slate-900/75 backdrop-blur-2xl border border-blue-500/30 text-white shadow-lg space-y-3.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                  📁
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white font-display">Google Drive Study Vault</h3>
                  <p className="text-[11px] text-blue-200">Connected Semester Notes & PYQs</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                ● Ingested & Synced
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-black/40 border border-white/10 text-xs space-y-1.5 font-mono text-slate-300">
              <div className="text-[10px] text-slate-400 truncate">
                Vault: <span className="text-blue-300">1O7WVpqd5f4pYk5AelpoKtF2f_d1jdWrj</span>
              </div>
              <div className="text-[11px] text-slate-200 flex items-center justify-between">
                <span>📚 14 Course Modules & PYQs</span>
                <span className="text-emerald-400 font-bold">100% Ready</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={() => {
                  toast.success('Drive Vault Indexed!', {
                    description: 'Generated 5-Year PYQs & Smart Flashcards from your Google Drive folder.'
                  });
                  setActiveTab('mockTests');
                }}
                className="flex-1 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all text-center shadow-sm"
              >
                Generate PYQ Mock Test
              </button>

              <button
                onClick={() => {
                  toast.info('Viewing Connected Drive Folder', {
                    description: 'Opening Google Drive study folder in new tab.'
                  });
                  window.open('https://drive.google.com/drive/folders/1O7WVpqd5f4pYk5AelpoKtF2f_d1jdWrj', '_blank');
                }}
                className="py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-bold transition-all"
              >
                Open Drive ↗
              </button>
            </div>
          </div>

          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            Quick Features
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {[
              { id: 'mockTests', title: 'Mock Tests & Quizzes', desc: 'Board & Sem Papers', icon: FileCheck, color: 'text-blue-600' },
              { id: 'vivaExaminer', title: 'AI Viva Examiner', desc: 'Lab & Voice Simulator', icon: Mic, color: 'text-indigo-600' },
              { id: 'cheatSheets', title: '1-Page Cheat Sheets', desc: 'Formulas & Summaries', icon: FileText, color: 'text-purple-600' },
              { id: 'focusRoom', title: 'Focus Room', desc: 'Pomodoro & Lo-Fi Beats', icon: Timer, color: 'text-emerald-600' },
              { id: 'digitalTwin', title: 'Memory Twin', desc: 'When to revise', icon: Brain, color: 'text-pink-600' },
              { id: 'conceptGraph', title: 'Roadmap & DAG', desc: 'Syllabus map', icon: Network, color: 'text-cyan-600' }
            ].map((tool) => {
              const ToolIcon = tool.icon;
              return (
                <button
                  key={tool.id}
                  onClick={() => setActiveTab(tool.id)}
                  className="p-4 rounded-2xl frosted-glass-card text-left hover:border-blue-500 hover:shadow-md transition-all group"
                >
                  <ToolIcon className={`w-5 h-5 ${tool.color} mb-2 group-hover:scale-110 transition-transform`} />
                  <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{tool.title}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{tool.desc}</div>
                </button>
              );
            })}
          </div>

          {/* Clean Activity Feed */}
          <div className="p-4 rounded-2xl frosted-glass-card">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Recent Progress
            </div>
            <div className="space-y-2.5 text-xs">
              {recentActivity.slice(0, 3).map((act) => (
                <div key={act.id} className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                  <span className="truncate pr-2">{act.title}</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400 font-mono shrink-0">{act.score}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
