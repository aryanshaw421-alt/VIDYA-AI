import React from 'react';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import { Button } from '../ui/Button';

export const DashboardErrorState = ({ error, onRetry, onGoHome }) => {
  return (
    <div className="w-full fluid-container py-16 text-center space-y-6 max-w-lg mx-auto">
      <div className="w-16 h-16 rounded-3xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center mx-auto shadow-sm border border-rose-200/60 dark:border-rose-800/60">
        <AlertCircle className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold font-display text-neutral-900 dark:text-white">
          Unable to Load Cognitive Telemetry
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {error?.message || 'We encountered a momentary issue retrieving your student session state. Your offline learning history is safely saved.'}
        </p>
      </div>

      <div className="flex items-center justify-center gap-3 pt-2">
        {onRetry && (
          <Button
            variant="primary"
            size="md"
            icon={RefreshCw}
            onClick={onRetry}
          >
            Retry Connection
          </Button>
        )}
        {onGoHome && (
          <Button
            variant="secondary"
            size="md"
            icon={Home}
            onClick={onGoHome}
          >
            Return to Home
          </Button>
        )}
      </div>
    </div>
  );
};
