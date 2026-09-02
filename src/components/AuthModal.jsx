import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { 
  Brain, 
  X, 
  Mail, 
  Lock, 
  User, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  GraduationCap,
  ShieldCheck
} from 'lucide-react';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

export const AuthModal = ({ isOpen, setIsOpen, onLoginSuccess }) => {
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [examTarget, setExamTarget] = useState('B.Tech 3rd Year CSE');

  const handleAuthSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please enter your email and password');
      return;
    }

    const userData = {
      name: name || (authMode === 'login' ? 'Aryan Shaw' : 'New Learner'),
      email: email,
      examTarget: examTarget,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      isLoggedIn: true
    };

    onLoginSuccess(userData);
    setIsOpen(false);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    toast.success(authMode === 'login' ? `Welcome back, ${userData.name}!` : `Account created! Welcome to VIDYA AI.`);
  };

  const handleDemoStudentLogin = () => {
    const demoUser = {
      name: 'Aryan Shaw',
      email: 'aryan@vidya.ai',
      examTarget: 'B.Tech CSE & GATE 2027',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      role: 'student',
      isLoggedIn: true
    };
    onLoginSuccess(demoUser);
    setIsOpen(false);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    toast.success('Logged in as Demo Student (Aryan Shaw)');
  };

  const handleDemoEducatorLogin = () => {
    const demoEducator = {
      name: 'Prof. Debashis Roy',
      email: 'prof.roy@nit.ac.in',
      examTarget: 'Faculty of Computer Science',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      role: 'educator',
      isLoggedIn: true
    };
    onLoginSuccess(demoEducator);
    setIsOpen(false);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    toast.success('Logged in as Demo Professor (Prof. Roy)');
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-fade-in" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[95vw] sm:w-[440px] rounded-3xl bg-white dark:bg-[#0D1326] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl animate-fade-in">
          
          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <Dialog.Title className="text-base font-bold text-slate-900 dark:text-white">
                  {authMode === 'login' ? 'Sign in to VIDYA AI' : 'Create Your AI Account'}
                </Dialog.Title>
                <p className="text-[11px] text-slate-500">Autonomous cognitive learning system</p>
              </div>
            </div>
            <Dialog.Close asChild>
              <button className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex p-1 rounded-xl bg-slate-100 dark:bg-slate-900 my-5">
            <button
              onClick={() => setAuthMode('login')}
              className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                authMode === 'login'
                  ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setAuthMode('signup')}
              className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                authMode === 'signup'
                  ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              New Student Account
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleAuthSubmit} className="space-y-3.5 text-xs">
            
            {authMode === 'signup' && (
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Aryan Shaw"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  placeholder="aryan@vidya.ai"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {authMode === 'signup' && (
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Target Exam / Syllabus</label>
                <div className="relative">
                  <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    value={examTarget}
                    onChange={(e) => setExamTarget(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="B.Tech 3rd Year CSE">B.Tech 3rd Year (CSE/IT)</option>
                    <option value="GATE 2027 CSE">GATE Computer Science 2027</option>
                    <option value="Class 12 CBSE Board">Class 12 CBSE Board</option>
                    <option value="UPSC CSE / Govt Exam">UPSC / Govt Exams</option>
                  </select>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 mt-4"
            >
              <span>{authMode === 'login' ? 'Sign In to Dashboard' : 'Create Student Profile'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Quick 1-Click Demo Login Options */}
          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 text-center">
              Instant 1-Click Demo Login
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleDemoStudentLogin}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-[11px] hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                <span>Demo Student</span>
              </button>

              <button
                type="button"
                onClick={handleDemoEducatorLogin}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-[11px] hover:bg-amber-50 hover:text-amber-600 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                <span>Demo Professor</span>
              </button>
            </div>
          </div>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
