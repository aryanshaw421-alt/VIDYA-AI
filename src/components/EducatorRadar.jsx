import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { 
  Radar, 
  Send, 
  CheckCircle2, 
  X,
  Filter,
  UserCheck
} from 'lucide-react';
import { educatorStudentsMock } from '../data/publicApis';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

export const EducatorRadar = () => {
  const [students, setStudents] = useState(educatorStudentsMock);
  const [filterState, setFilterState] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredStudents = students.filter(s => {
    if (filterState === 'all') return true;
    if (filterState === 'healthy') return s.status === 'healthy';
    return s.status === 'at_risk' || s.status === 'critical';
  });

  const handleHelpStudent = () => {
    if (!selectedStudent) return;
    setStudents(prev => prev.map(s => {
      if (s.id === selectedStudent.id) {
        return { ...s, status: 'healthy', predictedFailureRisk: 10 };
      }
      return s;
    }));

    toast.success(`Support Module Sent to ${selectedStudent.name}!`, {
      description: 'Quick 15-min bridge lesson and tutor notes delivered to student app.'
    });
    confetti({ particleCount: 40, spread: 50, origin: { y: 0.6 } });
    setSelectedStudent(null);
  };

  return (
    <div className="w-full fluid-container py-6 sm:py-10 animate-fade-in space-y-8">
      
      {/* Friendly Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-300 text-xs font-bold mb-2">
            <Radar className="w-3.5 h-3.5" />
            <span>Class Overview</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
            Student Radar & Support Center
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            See which students need extra help before semester exams arrive.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
          {[
            { id: 'all', label: 'All Students' },
            { id: 'needs_help', label: 'Needs Support' },
            { id: 'healthy', label: 'On Track' }
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilterState(f.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filterState === f.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clean Students Table */}
      <div className="rounded-3xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-900 text-slate-500 font-semibold border-b border-slate-100 dark:border-slate-800">
              <tr>
                <th className="py-4 px-6">Student Name</th>
                <th className="py-4 px-4">Subject Mastery</th>
                <th className="py-4 px-4">Status</th>
                <th className="py-4 px-4">Suggested Support</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredStudents.map((stu) => (
                <tr key={stu.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="py-4 px-6 flex items-center gap-3">
                    <img src={stu.avatar} alt="" className="w-9 h-9 rounded-full object-cover" />
                    <div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white">{stu.name}</div>
                      <div className="text-[11px] text-slate-400 font-mono">{stu.id}</div>
                    </div>
                  </td>

                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${stu.mastery > 75 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                          style={{ width: `${stu.mastery}%` }}
                        ></div>
                      </div>
                      <span className="font-bold font-mono">{stu.mastery}%</span>
                    </div>
                  </td>

                  <td className="py-4 px-4">
                    {stu.status === 'healthy' ? (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                        🟢 On Track
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300">
                        🔴 Needs Help
                      </span>
                    )}
                  </td>

                  <td className="py-4 px-4 text-slate-600 dark:text-slate-300 max-w-xs">
                    {stu.recommendedIntervention}
                  </td>

                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => setSelectedStudent(stu)}
                      className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-sm"
                    >
                      Send Help
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Support Dialog */}
      <Dialog.Root open={!!selectedStudent} onOpenChange={(open) => !open && setSelectedStudent(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-fade-in" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md rounded-3xl bg-white dark:bg-[#0D1326] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl animate-fade-in">
            {selectedStudent && (
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <Dialog.Title className="text-base font-bold text-slate-900 dark:text-white">
                    Send Help to {selectedStudent.name}
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button className="p-1 rounded-lg text-slate-400 hover:text-slate-600">
                      <X className="w-5 h-5" />
                    </button>
                  </Dialog.Close>
                </div>

                <div className="my-5 space-y-3 text-xs text-slate-600 dark:text-slate-300">
                  <p>Send a 15-minute concept recovery lesson to help this student get back on track.</p>
                  <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200">
                    <strong>Lesson Topic:</strong> Calculus Foundation & Vector Projections
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <Dialog.Close asChild>
                    <button className="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs">
                      Cancel
                    </button>
                  </Dialog.Close>
                  <button
                    onClick={handleHelpStudent}
                    className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-sm"
                  >
                    Confirm & Send
                  </button>
                </div>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

    </div>
  );
};
