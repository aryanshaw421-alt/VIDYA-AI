import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  CheckCircle2, 
  Zap, 
  Flame, 
  BookOpen, 
  FileCheck, 
  Mic, 
  FileText, 
  Timer, 
  Network,
  Layers,
  HelpCircle,
  Play
} from 'lucide-react';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

import { defaultDashboardData, fetchDashboardData } from '../data/dashboardData';
import { DashboardHeader } from './dashboard/DashboardHeader';
import { MetricCard } from './dashboard/MetricCard';
import { NextBestAction } from './dashboard/NextBestAction';
import { WeaknessRadar } from './dashboard/WeaknessRadar';
import { StudyPlan } from './dashboard/StudyPlan';
import { LearningChart } from './dashboard/LearningChart';
import { ActivityTimeline } from './dashboard/ActivityTimeline';
import { AIInsightCard } from './dashboard/AIInsightCard';
import { DashboardSkeleton } from './dashboard/DashboardSkeleton';
import { DashboardErrorState } from './dashboard/DashboardErrorState';
import { DashboardEmptyState } from './dashboard/DashboardEmptyState';
import { Button } from './ui/Button';

export const Dashboard = ({ setActiveTab, user }) => {
  const [data, setData] = useState(defaultDashboardData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    fetchDashboardData()
      .then((res) => {
        if (isMounted) {
          setData(res || defaultDashboardData);
          setError(null);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err);
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleStartTodaySession = () => {
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    toast.success("Starting Today's 1 hr 45 min Study Session!", {
      description: "Opening first topic: Boolean Algebra Revision in the Study Room."
    });
    setActiveTab('studyHub');
  };

  const handleLaunchNextAction = (action) => {
    toast.success(`Launching Fix Drill: ${action?.topic || 'Prerequisite'}!`, {
      description: '10 High-yield numericals with university step-marking evaluation.'
    });
    setActiveTab(action?.targetTab || 'mockTests');
  };

  const handleFixTopic = (topic) => {
    toast.info(`Opening Diagnostic Bridge for: ${topic?.topic}`, {
      description: 'Reviewing prerequisite dependencies and video derivations.'
    });
    setActiveTab(topic?.targetTab || 'conceptGraph');
  };

  const handleSelectPlanItem = (item) => {
    toast.info(`Opening: ${item.title} (${item.duration})`);
    setActiveTab(item.targetTab || 'studyHub');
  };

  const handleViewAnalysis = () => {
    toast.info('Focus & Cognitive Load Analysis', {
      description: 'Opening 25-minute Pomodoro with 432Hz Alpha Waves.'
    });
    setActiveTab('focusRoom');
  };

  // 1. Loading State
  if (isLoading) {
    return <DashboardSkeleton />;
  }

  // 2. Error State
  if (error) {
    return (
      <DashboardErrorState
        error={error}
        onRetry={() => {
          setIsLoading(true);
          fetchDashboardData()
            .then((res) => {
              setData(res);
              setError(null);
            })
            .finally(() => setIsLoading(false));
        }}
        onGoHome={() => setActiveTab('home')}
      />
    );
  }

  // 3. Empty State Fallback (if data cleared)
  if (!data) {
    return (
      <DashboardEmptyState
        onStartLearning={() => setActiveTab('studyHub')}
        onTakeDiagnostic={() => setActiveTab('mockTests')}
      />
    );
  }

  const {
    user: studentUser,
    aiStatus,
    learningMetrics,
    nextBestAction,
    weakTopics,
    todayStudyPlan,
    learningActivity,
    upcomingExams,
    recentActivity,
    aiInsight
  } = data;

  const activeUser = user || studentUser;
  const upcomingExam = upcomingExams?.[0];

  return (
    <div className="w-full fluid-container py-6 sm:py-10 animate-fade-in space-y-8">
      
      {/* 1. Header: Greeting, User Name, Twin Status & Exam Target */}
      <DashboardHeader
        user={activeUser}
        aiStatus={aiStatus}
        upcomingExam={upcomingExam}
      />

      {/* 2. Primary Dashboard Metrics (Grid of 4 MetricCards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Prerequisite Readiness"
          value={`${learningMetrics?.prerequisiteReadiness?.value ?? 87}%`}
          growth={learningMetrics?.prerequisiteReadiness?.growth ?? '+4.2% this week'}
          isPositive={learningMetrics?.prerequisiteReadiness?.isPositive ?? true}
          progress={learningMetrics?.prerequisiteReadiness?.value ?? 87}
          progressColor="bg-blue-600"
          subtext={learningMetrics?.prerequisiteReadiness?.subtext ?? 'High focus window (42m remaining)'}
          icon={Brain}
          onClick={() => setActiveTab('conceptGraph')}
        />

        <MetricCard
          title="AIR Benchmark Forecast"
          value={learningMetrics?.predictedRank?.value ?? 'AIR 1,420'}
          growth={learningMetrics?.predictedRank?.growth ?? '+210 Ranks this week'}
          isPositive={learningMetrics?.predictedRank?.isPositive ?? true}
          badgeText={learningMetrics?.predictedRank?.percentile ?? '99.12 %ile'}
          subtext={learningMetrics?.predictedRank?.subtext ?? 'Target: Top 500 in GATE 2027'}
          icon={CheckCircle2}
          onClick={() => setActiveTab('mockTests')}
        />

        <MetricCard
          title="Memory Retention"
          value={`${learningMetrics?.memoryRetention?.value ?? 92.4}%`}
          growth={learningMetrics?.memoryRetention?.growth ?? '+4.1% stability'}
          isPositive={learningMetrics?.memoryRetention?.isPositive ?? true}
          progress={learningMetrics?.memoryRetention?.value ?? 92.4}
          progressColor="bg-emerald-600"
          subtext={learningMetrics?.memoryRetention?.subtext ?? '18-day half-life (0 backlogs at velocity)'}
          icon={Zap}
          onClick={() => setActiveTab('digitalTwin')}
        />

        <MetricCard
          title="Study Velocity"
          value={learningMetrics?.studyVelocity?.value ?? '1.8x'}
          growth={learningMetrics?.studyVelocity?.growth ?? '+18% acceleration'}
          isPositive={learningMetrics?.studyVelocity?.isPositive ?? true}
          progress={75}
          progressColor="bg-[#D4F038]"
          subtext={learningMetrics?.studyVelocity?.subtext ?? 'Ahead of typical cohort preparation speed'}
          icon={Flame}
          onClick={() => setActiveTab('dashboard')}
        />
      </div>

      {/* 3. Next Best Action (High-Impact Hero CTA) */}
      <NextBestAction
        action={nextBestAction}
        onLaunch={() => handleLaunchNextAction(nextBestAction)}
      />

      {/* 4. Main 2-Column Intelligence Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        
        {/* Left Column (7 cols): Today's Study Plan + Weakness Radar */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Today's Study Plan */}
          <StudyPlan
            plan={todayStudyPlan}
            onStartPlan={handleStartTodaySession}
            onSelectItem={handleSelectPlanItem}
          />

          {/* Diagnostic Weakness Radar */}
          <WeaknessRadar
            weakTopics={weakTopics}
            onFixTopic={handleFixTopic}
          />

          {/* Weekly Learning Intelligence Chart */}
          <LearningChart
            activity={learningActivity}
          />

        </div>

        {/* Right Column (5 cols): AI Insight Panel + Quick Tools + Activity Stream */}
        <div className="lg:col-span-5 space-y-6">

          {/* VIDYA AI Cognitive Insight Card */}
          <AIInsightCard
            insight={aiInsight}
            onViewAnalysis={handleViewAnalysis}
          />

          {/* Study Material & PYQ Vault */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#12151D] border border-black/[0.08] dark:border-white/[0.08] shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] text-blue-600 flex items-center justify-center font-bold">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-neutral-900 dark:text-white font-display">Study Material Vault</h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Connected Semester Notes & PYQs</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[10px] font-mono font-semibold border border-emerald-200/50 dark:border-emerald-800/50">
                100% Synced
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FBFBF9] dark:bg-[#0A0C10] border border-black/[0.05] dark:border-white/[0.06] text-xs space-y-1 font-mono">
              <div className="text-[11px] text-neutral-700 dark:text-neutral-300 flex items-center justify-between">
                <span>📚 14 Course Modules & 5-Year PYQs</span>
                <span className="text-blue-600 dark:text-blue-400 font-bold">Active</span>
              </div>
              <div className="text-[10px] text-neutral-400 truncate">
                Target: {activeUser?.examTarget || 'B.Tech CSE Semester 3-6'}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  toast.success('Study Vault Indexed!', {
                    description: 'Generated 5-Year PYQs & Smart Flashcards from your materials.'
                  });
                  setActiveTab('mockTests');
                }}
                className="flex-1"
              >
                Generate PYQ Mock
              </Button>

              <Button
                variant="secondary"
                size="sm"
                onClick={() => setActiveTab('collegeHub')}
              >
                Explore Notes ↗
              </Button>
            </div>
          </div>

          {/* Quick AI Feature Launchers */}
          <div className="space-y-3">
            <h3 className="text-base font-bold font-display text-neutral-900 dark:text-white">
              Cognitive AI Tools
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'mockTests', title: 'Mock Tests', desc: 'Board & Sem Papers', icon: FileCheck },
                { id: 'vivaExaminer', title: 'AI Viva Voice', desc: 'Lab Simulator', icon: Mic },
                { id: 'cheatSheets', title: '1-Page Sheets', desc: 'Formula Summaries', icon: FileText },
                { id: 'focusRoom', title: 'Focus Room', desc: '25m Pomodoro & Alpha', icon: Timer },
                { id: 'digitalTwin', title: 'Memory Twin', desc: 'When to Revise', icon: Brain },
                { id: 'conceptGraph', title: 'Knowledge DAG', desc: 'Syllabus Map', icon: Network }
              ].map((tool) => {
                const ToolIcon = tool.icon;
                return (
                  <button
                    key={tool.id}
                    onClick={() => setActiveTab(tool.id)}
                    className="p-4 rounded-2xl bg-white dark:bg-[#12151D] border border-black/[0.08] dark:border-white/[0.08] text-left hover:border-black/[0.15] dark:hover:border-white/[0.15] hover:shadow-md transition-all group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] text-neutral-700 dark:text-neutral-300 flex items-center justify-center mb-2.5 group-hover:scale-105 group-hover:text-blue-600 transition-all">
                      <ToolIcon className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-xs sm:text-sm text-neutral-900 dark:text-white">{tool.title}</div>
                    <div className="text-[11px] text-neutral-400 mt-0.5">{tool.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Recent Activity & Milestone Stream */}
          <ActivityTimeline
            activities={recentActivity}
          />

        </div>

      </div>

    </div>
  );
};
