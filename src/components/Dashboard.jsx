import React, { useState, useEffect } from 'react';
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
  Network
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
import { SpotlightCard } from './ui/SpotlightCard';

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
    <div className="relative w-full fluid-container py-6 sm:py-10 animate-fade-in space-y-8">
      {/* Ambient Neural Backlight Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-blue-600/10 dark:bg-blue-600/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-96 right-10 w-[450px] h-[450px] bg-cyan-500/5 dark:bg-cyan-500/10 blur-[110px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[650px] left-10 w-[400px] h-[400px] bg-[#D4F038]/5 dark:bg-[#D4F038]/8 blur-[100px] rounded-full pointer-events-none -z-10" />
      
      {/* 1. Header: Greeting, User Name, Twin Status & Exam Target */}
      <DashboardHeader
        user={activeUser}
        aiStatus={aiStatus}
        upcomingExam={upcomingExam}
      />

      {/* 2. Primary Dashboard Metrics (Grid of 4 MetricCards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        <MetricCard
          title="Prerequisite Readiness"
          value={`${learningMetrics?.prerequisiteReadiness?.value ?? 87}%`}
          growth={learningMetrics?.prerequisiteReadiness?.growth ?? '+4.2% this week'}
          isPositive={learningMetrics?.prerequisiteReadiness?.isPositive ?? true}
          progress={learningMetrics?.prerequisiteReadiness?.value ?? 87}
          progressColor="bg-blue-600 dark:bg-blue-500"
          subtext={learningMetrics?.prerequisiteReadiness?.subtext ?? 'High focus window (42m remaining)'}
          edgeColor="blue"
          icon={Brain}
          onClick={() => setActiveTab('conceptGraph')}
        />

        <MetricCard
          title="AIR Benchmark Forecast"
          value={learningMetrics?.predictedRank?.value ?? 'AIR 1,420'}
          growth={learningMetrics?.predictedRank?.growth ?? '+210 Ranks this week'}
          isPositive={learningMetrics?.predictedRank?.isPositive ?? true}
          badgeText={learningMetrics?.predictedRank?.target ? `Target: ${learningMetrics.predictedRank.target}` : 'Target: Top 500'}
          subtext={learningMetrics?.predictedRank?.subtext ?? 'Target: Top 500 in GATE 2027'}
          edgeColor="cyan"
          icon={CheckCircle2}
          onClick={() => setActiveTab('mockTests')}
        />

        <MetricCard
          title="Memory Retention"
          value={`${learningMetrics?.memoryRetention?.value ?? 92.4}%`}
          growth={`${learningMetrics?.memoryRetention?.halfLifeDays ?? 18}-day half-life`}
          isPositive={learningMetrics?.memoryRetention?.isPositive ?? true}
          progress={learningMetrics?.memoryRetention?.value ?? 92.4}
          progressColor="bg-emerald-500"
          subtext={learningMetrics?.memoryRetention?.subtext ?? '18-day half-life (0 backlogs at velocity)'}
          edgeColor="lime"
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
          edgeColor="blue"
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
        
        {/* Left Column (7 cols): Today's Study Plan + Weakness Radar + Learning Intelligence */}
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

        {/* Right Column (5 cols): AI Insight Panel + Vault + Quick Tools + Activity Stream */}
        <div className="lg:col-span-5 space-y-6">

          {/* VIDYA AI Cognitive Insight Card */}
          <AIInsightCard
            insight={aiInsight}
            onViewAnalysis={handleViewAnalysis}
          />

          {/* Study Material & PYQ Vault */}
          <SpotlightCard
            glowEdge={true}
            edgeColor="blue"
            className="p-6 sm:p-7 space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 flex items-center justify-center font-bold">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-neutral-900 dark:text-white font-display">Study Material Vault</h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Connected Semester Notes & PYQs</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-semibold border border-emerald-500/25">
                100% Synced
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F8F9FA] dark:bg-[#06080F]/90 border border-black/[0.05] dark:border-white/[0.06] text-xs space-y-1 font-mono">
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
                className="flex-1 text-xs py-2 shadow-xs"
              >
                Generate PYQ Mock
              </Button>

              <Button
                variant="secondary"
                size="sm"
                onClick={() => setActiveTab('collegeHub')}
                className="text-xs py-2"
              >
                Explore Notes ↗
              </Button>
            </div>
          </SpotlightCard>

          {/* Quick AI Feature Launchers */}
          <SpotlightCard
            glowEdge={true}
            edgeColor="lime"
            className="p-6 sm:p-7 space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold font-display text-neutral-900 dark:text-white">
                Cognitive Intelligence Suite
              </h3>
              <span className="text-[10px] font-mono text-neutral-400 uppercase font-semibold">6 Neural Tools</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
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
                    className="p-3.5 rounded-2xl bg-[#F8F9FA] dark:bg-[#06080F]/90 border border-black/[0.05] dark:border-white/[0.06] text-left hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-xs transition-all group cursor-pointer"
                  >
                    <div className="w-7 h-7 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] text-neutral-700 dark:text-neutral-300 flex items-center justify-center mb-2 group-hover:scale-105 group-hover:text-blue-500 transition-all border border-black/[0.04] dark:border-white/[0.06]">
                      <ToolIcon className="w-3.5 h-3.5" />
                    </div>
                    <div className="font-bold text-xs text-neutral-900 dark:text-white group-hover:text-blue-500 transition-colors">{tool.title}</div>
                    <div className="text-[10px] text-neutral-400 mt-0.5 truncate">{tool.desc}</div>
                  </button>
                );
              })}
            </div>
          </SpotlightCard>

          {/* Recent Activity & Milestone Stream */}
          <ActivityTimeline
            activities={recentActivity}
          />

        </div>

      </div>

    </div>
  );
};
