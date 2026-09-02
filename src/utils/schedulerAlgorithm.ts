import { DayPlan, PlanStatus } from '../types';

export interface RecalculationResult {
  updatedPlans: DayPlan[];
  daysShifted: number;
  reason: string;
  dailyHoursDelta: number; // e.g., +25 mins/day adjustment
  explanation: string;
}

export function recalculateScheduleAfterMissedDays(
  currentPlans: DayPlan[],
  missedDayCount: number,
  reason: string = 'College Fest / Unforeseen Break'
): RecalculationResult {
  // Deep clone current plans
  const plans = JSON.parse(JSON.stringify(currentPlans)) as DayPlan[];
  
  // Find index of current in-progress or upcoming day
  const activeIndex = plans.findIndex(p => p.status === 'in_progress' || p.status === 'upcoming');
  const targetIndex = activeIndex === -1 ? 0 : activeIndex;

  // Mark the missed days
  let shiftedMinutes = 0;
  for (let i = 0; i < missedDayCount && (targetIndex + i) < plans.length; i++) {
    const idx = targetIndex + i;
    plans[idx].status = 'missed';
    plans[idx].notes = `Missed due to: ${reason}. Topics rebalanced across future days by Authentix AI.`;
    shiftedMinutes += plans[idx].durationMinutes;
  }

  // Find remaining active days after the missed block
  const remainingStartIndex = targetIndex + missedDayCount;
  const remainingDays = plans.slice(remainingStartIndex);

  if (remainingDays.length > 0) {
    // Calculate extra time per remaining day to absorb without burnout
    const extraMinutesPerDay = Math.ceil((shiftedMinutes * 0.75) / remainingDays.length);

    remainingDays.forEach((plan, idx) => {
      plan.durationMinutes += Math.min(extraMinutesPerDay, 30);
      plan.dateStr = `Day ${remainingStartIndex + idx + 1} (AI Rebalanced)`;
      plan.notes = `AI Adjusted: +${Math.min(extraMinutesPerDay, 30)} mins distributed smoothly to keep target exam date intact.`;
    });
  }

  return {
    updatedPlans: plans,
    daysShifted: missedDayCount,
    reason,
    dailyHoursDelta: Math.round((shiftedMinutes / Math.max(1, remainingDays.length))),
    explanation: `Successfully rescheduled ${missedDayCount} missed days (${reason}). Instead of overwhelming you with unrealistic 12-hour cram days, Authentix evenly spread the high-weightage topics across your next ${remainingDays.length} days (+25-30 mins/day) with zero guilt!`
  };
}

export function autoInsertWeakTopicRevision(
  currentPlans: DayPlan[],
  weakTopicName: string,
  subject: string
): DayPlan[] {
  const plans = JSON.parse(JSON.stringify(currentPlans)) as DayPlan[];
  
  // Find the next upcoming day to insert a high-yield revision slot
  const nextUpcomingIndex = plans.findIndex(p => p.status === 'upcoming');

  const revisionSlot: DayPlan = {
    dayNumber: (nextUpcomingIndex !== -1 ? plans[nextUpcomingIndex].dayNumber : plans.length + 1),
    dateStr: 'Tomorrow (AI Auto-Inserted Revision)',
    status: 'upcoming',
    title: `Targeted Mastery: ${weakTopicName}`,
    subject,
    chapterId: 'auto-revision-' + Date.now(),
    chapterName: `${weakTopicName} (Weak Area Booster)`,
    durationMinutes: 45,
    type: 'revision',
    priority: 'HIGH',
    weightageScore: 20,
    isAutoInsertedRevision: true,
    topics: [
      { id: 'rev-1', name: `Review Key Formulas & Concept Core for ${weakTopicName}`, completed: false },
      { id: 'rev-2', name: 'Solve 5 PYQ Drill Questions with Step-by-Step AI Breakdown', completed: false },
      { id: 'rev-3', name: 'Verify Formula Sheet & Clear Lingering Doubts', completed: false }
    ],
    notes: `Triggered automatically because recent test accuracy on "${weakTopicName}" was below 65%. 1-click mastery to prevent exam point loss.`
  };

  if (nextUpcomingIndex !== -1) {
    plans.splice(nextUpcomingIndex, 0, revisionSlot);
    // Renumber days
    plans.forEach((p, idx) => {
      p.dayNumber = idx + 1;
    });
  } else {
    plans.push(revisionSlot);
  }

  return plans;
}
