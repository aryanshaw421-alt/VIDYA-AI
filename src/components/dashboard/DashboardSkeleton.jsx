import React from 'react';

export const DashboardSkeleton = () => {
  return (
    <div className="w-full fluid-container py-6 sm:py-10 space-y-8 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex flex-col md:flex-row justify-between gap-4 pb-4 border-b border-black/[0.05] dark:border-white/[0.06]">
        <div className="space-y-2">
          <div className="h-4 w-40 bg-black/10 dark:bg-white/10 rounded-full" />
          <div className="h-8 w-64 bg-black/15 dark:bg-white/15 rounded-2xl" />
          <div className="h-4 w-80 bg-black/10 dark:bg-white/10 rounded-full" />
        </div>
        <div className="h-9 w-36 bg-black/10 dark:bg-white/10 rounded-full" />
      </div>

      {/* 4 Metric Cards Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-5 rounded-3xl bg-black/[0.03] dark:bg-white/[0.04] space-y-3">
            <div className="flex justify-between">
              <div className="h-3 w-28 bg-black/10 dark:bg-white/10 rounded" />
              <div className="h-6 w-6 bg-black/10 dark:bg-white/10 rounded-full" />
            </div>
            <div className="h-8 w-24 bg-black/15 dark:bg-white/15 rounded-lg" />
            <div className="h-1.5 w-full bg-black/10 dark:bg-white/10 rounded-full" />
            <div className="h-3 w-32 bg-black/10 dark:bg-white/10 rounded" />
          </div>
        ))}
      </div>

      {/* 2-Column Body Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        <div className="lg:col-span-7 space-y-6">
          <div className="h-48 rounded-3xl bg-black/[0.04] dark:bg-white/[0.05]" />
          <div className="h-64 rounded-3xl bg-black/[0.04] dark:bg-white/[0.05]" />
        </div>
        <div className="lg:col-span-5 space-y-6">
          <div className="h-56 rounded-3xl bg-black/[0.04] dark:bg-white/[0.05]" />
          <div className="h-64 rounded-3xl bg-black/[0.04] dark:bg-white/[0.05]" />
        </div>
      </div>
    </div>
  );
};
