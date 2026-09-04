import React, { createContext, useContext, useState, useEffect } from 'react';
import { ExamStream, ExamGoal, DayPlan, Chapter, TestSubmission, AppTab } from '../types';
import { INITIAL_GOALS, INITIAL_ROADMAPS, BTECH_CHAPTERS, CBSE_CHAPTERS, SSC_CHAPTERS } from '../data/sampleSyllabi';
import { recalculateScheduleAfterMissedDays, autoInsertWeakTopicRevision, RecalculationResult } from '../utils/schedulerAlgorithm';

interface StudyContextType {
  stream: ExamStream;
  setStream: (stream: ExamStream) => void;
  goal: ExamGoal;
  plans: DayPlan[];
  chapters: Chapter[];
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
  toggleTopicCompletion: (dayNumber: number, topicId: string) => void;
  applyMissedDaysShift: (days: number, reason: string) => RecalculationResult;
  insertWeakTopicRevisionPlan: (topicName: string, subject: string) => void;
  testSubmissions: TestSubmission[];
  addTestSubmission: (sub: TestSubmission) => void;
  resetToDefaultSchedule: () => void;
  lastShiftLog: RecalculationResult | null;
  setLastShiftLog: (log: RecalculationResult | null) => void;
  simulateCustomSyllabusUpload: (syllabusName: string, chapters: string[]) => void;
}

export const StudyContext = createContext<StudyContextType | undefined>(undefined);

export const useOptionalStudy = () => useContext(StudyContext);

export const StudyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stream, setStreamState] = useState<ExamStream>(() => {
    const saved = localStorage.getItem('authentix_stream');
    return (saved as ExamStream) || 'btech';
  });

  const [activeTab, setActiveTab] = useState<AppTab>('landing');

  const [roadmaps, setRoadmaps] = useState<Record<ExamStream, DayPlan[]>>(() => {
    const saved = localStorage.getItem('authentix_roadmaps');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved roadmaps', e);
      }
    }
    return INITIAL_ROADMAPS;
  });

  const [goals, setGoals] = useState<Record<ExamStream, ExamGoal>>(INITIAL_GOALS);
  const [testSubmissions, setTestSubmissions] = useState<TestSubmission[]>([]);
  const [lastShiftLog, setLastShiftLog] = useState<RecalculationResult | null>(null);

  useEffect(() => {
    localStorage.setItem('authentix_stream', stream);
  }, [stream]);

  useEffect(() => {
    localStorage.setItem('authentix_roadmaps', JSON.stringify(roadmaps));
  }, [roadmaps]);

  const setStream = (newStream: ExamStream) => {
    setStreamState(newStream);
  };

  const getChaptersForStream = (str: ExamStream): Chapter[] => {
    if (str === 'btech') return BTECH_CHAPTERS;
    if (str === 'cbse12') return CBSE_CHAPTERS;
    return SSC_CHAPTERS;
  };

  const toggleTopicCompletion = (dayNumber: number, topicId: string) => {
    setRoadmaps(prev => {
      const currentList = prev[stream] || [];
      const updated = currentList.map(plan => {
        if (plan.dayNumber === dayNumber) {
          const updatedTopics = plan.topics.map(t =>
            t.id === topicId ? { ...t, completed: !t.completed } : t
          );
          const allCompleted = updatedTopics.every(t => t.completed);
          return {
            ...plan,
            topics: updatedTopics,
            status: allCompleted ? ('completed' as const) : ('in_progress' as const)
          };
        }
        return plan;
      });
      return { ...prev, [stream]: updated };
    });
  };

  const applyMissedDaysShift = (days: number, reason: string): RecalculationResult => {
    const currentList = roadmaps[stream] || [];
    const result = recalculateScheduleAfterMissedDays(currentList, days, reason);
    setRoadmaps(prev => ({
      ...prev,
      [stream]: result.updatedPlans
    }));
    setLastShiftLog(result);
    return result;
  };

  const insertWeakTopicRevisionPlan = (topicName: string, subject: string) => {
    const currentList = roadmaps[stream] || [];
    const updated = autoInsertWeakTopicRevision(currentList, topicName, subject);
    setRoadmaps(prev => ({
      ...prev,
      [stream]: updated
    }));
  };

  const addTestSubmission = (sub: TestSubmission) => {
    setTestSubmissions(prev => [sub, ...prev]);
    // If there were weak topics identified, insert revision for the top weak topic
    if (sub.weakTopicsIdentified && sub.weakTopicsIdentified.length > 0) {
      insertWeakTopicRevisionPlan(sub.weakTopicsIdentified[0], sub.title);
    }
  };

  const resetToDefaultSchedule = () => {
    setRoadmaps(INITIAL_ROADMAPS);
    setLastShiftLog(null);
  };

  const simulateCustomSyllabusUpload = (syllabusName: string, customChapters: string[]) => {
    const newPlans: DayPlan[] = customChapters.map((chap, idx) => ({
      dayNumber: idx + 1,
      dateStr: `Day ${idx + 1}`,
      status: idx === 0 ? 'in_progress' : 'upcoming',
      title: chap,
      subject: syllabusName,
      chapterId: `custom-chap-${idx}`,
      chapterName: chap,
      durationMinutes: 120,
      type: idx % 3 === 0 ? 'numerical' : 'theory',
      priority: idx % 2 === 0 ? 'HIGH' : 'MEDIUM',
      weightageScore: Math.round(100 / customChapters.length),
      topics: [
        { id: `c-t-${idx}-1`, name: `Core concepts of ${chap}`, completed: false },
        { id: `c-t-${idx}-2`, name: `Solve 5 High-Yield PYQs on ${chap}`, completed: false },
        { id: `c-t-${idx}-3`, name: `Formulas and Derivation Review`, completed: false }
      ],
      notes: `Generated by Authentix AI syllabus parser for ${syllabusName}.`
    }));

    setRoadmaps(prev => ({
      ...prev,
      [stream]: newPlans
    }));

    setGoals(prev => ({
      ...prev,
      [stream]: {
        ...prev[stream],
        title: syllabusName,
        subtitle: `Custom Parsed Syllabus (${customChapters.length} Modules)`,
        totalChapters: customChapters.length,
        daysRemaining: customChapters.length * 2
      }
    }));
  };

  return (
    <StudyContext.Provider
      value={{
        stream,
        setStream,
        goal: goals[stream],
        plans: roadmaps[stream] || [],
        chapters: getChaptersForStream(stream),
        activeTab,
        setActiveTab,
        toggleTopicCompletion,
        applyMissedDaysShift,
        insertWeakTopicRevisionPlan,
        testSubmissions,
        addTestSubmission,
        resetToDefaultSchedule,
        lastShiftLog,
        setLastShiftLog,
        simulateCustomSyllabusUpload
      }}
    >
      {children}
    </StudyContext.Provider>
  );
};

export const useStudy = () => {
  const context = useContext(StudyContext);
  if (!context) {
    throw new Error('useStudy must be used within a StudyProvider');
  }
  return context;
};
