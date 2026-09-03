import React from 'react';
import { Brain, Play, BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const DashboardEmptyState = ({ onStartLearning, onTakeDiagnostic }) => {
  return (
    <div className="w-full fluid-container py-16 text-center space-y-6 max-w-xl mx-auto">
      <div className="w-16 h-16 rounded-3xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto shadow-sm border border-blue-200/60 dark:border-blue-800/60">
        <Brain className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 dark:text-white">
          Initialize Your Cognitive Learning Twin
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md mx-auto">
          Start your first 10-question diagnostic quiz or enter a syllabus topic to map your prerequisite readiness and memory half-life.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <Button
          variant="primary"
          size="md"
          icon={Play}
          showArrow
          onClick={onTakeDiagnostic}
        >
          Take 5-Min Diagnostic Quiz
        </Button>
        <Button
          variant="secondary"
          size="md"
          icon={BookOpen}
          onClick={onStartLearning}
        >
          Explore Study Room
        </Button>
      </div>
    </div>
  );
};
