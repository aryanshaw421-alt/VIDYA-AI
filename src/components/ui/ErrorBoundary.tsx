import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('VIDYA AI Error Boundary Caught Exception:', error, errorInfo);
    this.setState({ errorInfo });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.hash = '';
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[500px] w-full flex items-center justify-center p-6">
          <div className="max-w-xl w-full p-6 sm:p-8 rounded-3xl bg-[#F8F9FA] dark:bg-[#0B0E17] border border-rose-500/30 shadow-2xl space-y-6 text-center">
            
            <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-500 flex items-center justify-center mx-auto shadow-xs">
              <AlertTriangle className="w-8 h-8 animate-pulse" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20">
                Cognitive Runtime Interrupted
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-neutral-900 dark:text-white">
                Something went wrong in this module
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto font-sans">
                An unexpected state anomaly occurred. Your study progress has been saved in local storage.
              </p>
            </div>

            {this.state.error && (
              <div className="p-3.5 rounded-2xl bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] text-left overflow-x-auto text-[11px] font-mono text-neutral-700 dark:text-neutral-300 max-h-32">
                <span className="text-rose-500 font-bold">Error: </span>
                {this.state.error.message || 'Unknown runtime error'}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={this.handleReset}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-mono font-bold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Recover & Refresh</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  window.location.href = '/';
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white dark:bg-[#12151D] border border-black/[0.08] dark:border-white/[0.1] text-neutral-800 dark:text-neutral-200 hover:text-blue-600 text-xs font-mono font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Return to Home</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
