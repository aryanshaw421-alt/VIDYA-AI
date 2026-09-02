import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Timer, 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  CheckCircle2, 
  Headphones, 
  Flame, 
  Coffee, 
  Moon, 
  Sun,
  Music
} from 'lucide-react';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

export const FocusRoom = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 mins
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState('focus'); // 'focus' | 'shortBreak' | 'longBreak'
  const [activeAudio, setActiveAudio] = useState(null); // 'rain' | 'alpha' | 'whitenoise' | null
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Solve 10 Group A MCQs (Data Structures)', completed: true },
    { id: 2, text: 'Review AVL Tree Double Rotations proof', completed: false },
    { id: 3, text: 'Complete 1 Mock Test Section D derivation', completed: false }
  ]);
  const [newTaskText, setNewTaskText] = useState('');
  const [completedPomodoros, setCompletedPomodoros] = useState(3);

  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);
  const gainNodeRef = useRef(null);

  // Timer countdown
  useEffect(() => {
    let timer = null;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      if (mode === 'focus') {
        setCompletedPomodoros(prev => prev + 1);
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
        toast.success('25-Minute Focus Block Complete!', {
          description: 'Take a 5-minute break to refresh your cognitive focus.'
        });
        setMode('shortBreak');
        setTimeLeft(5 * 60);
      } else {
        toast.info('Break finished! Ready to resume studying?');
        setMode('focus');
        setTimeLeft(25 * 60);
      }
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, mode]);

  // Clean Web Audio Synthesizer for Ambient Binaural Alpha Waves
  const toggleAmbientSound = (soundType) => {
    if (activeAudio === soundType) {
      // Stop
      if (oscillatorRef.current) {
        try {
          oscillatorRef.current.stop();
          oscillatorRef.current.disconnect();
        } catch (e) {}
      }
      setActiveAudio(null);
      toast.info('Ambient focus audio stopped.');
      return;
    }

    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioContextRef.current;

      if (oscillatorRef.current) {
        try {
          oscillatorRef.current.stop();
          oscillatorRef.current.disconnect();
        } catch (e) {}
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      if (soundType === 'alpha') {
        // 432 Hz Alpha wave tuned focus tone
        osc.type = 'sine';
        osc.frequency.setValueAtTime(432, ctx.currentTime);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
      } else if (soundType === 'whitenoise') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, ctx.currentTime);
        gain.gain.setValueAtTime(0.03, ctx.currentTime);
      } else {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(174, ctx.currentTime); // 174Hz deep relaxing frequency
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
      }

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();

      oscillatorRef.current = osc;
      gainNodeRef.current = gain;
      setActiveAudio(soundType);
      toast.success(`Playing Ambient ${soundType.toUpperCase()} Focus Waves!`);
    } catch (err) {
      toast.info(`Ambient audio simulated for ${soundType}.`);
      setActiveAudio(soundType);
    }
  };

  const setTimerMode = (newMode, minutes) => {
    setMode(newMode);
    setTimeLeft(minutes * 60);
    setIsRunning(false);
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;
    setTasks(prev => [...prev, { id: Date.now(), text: newTaskText.trim(), completed: false }]);
    setNewTaskText('');
    toast.success('Focus target added!');
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="w-full fluid-container py-6 sm:py-10 animate-fade-in space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-300 text-xs font-bold mb-2">
            <Timer className="w-3.5 h-3.5 text-emerald-500" />
            <span>Deep Focus & Cognitive Recovery Studio</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
            Pomodoro Study Room & Lo-Fi Studio
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            25-minute deep focus sprints with built-in binaural alpha waves and micro-break routines to prevent mental fatigue.
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex items-center gap-3">
          <Flame className="w-5 h-5 text-amber-500" />
          <div>
            <div className="text-[11px] text-slate-400">Completed Sprints</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white font-mono">{completedPomodoros} Focus Blocks (1.25 hrs)</div>
          </div>
        </div>
      </div>

      {/* Main Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column (7 cols): Pomodoro Clock & Ambient Audio */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white shadow-xl border border-emerald-900/40 text-center space-y-8">
            
            {/* Mode Pills */}
            <div className="inline-flex items-center gap-2 p-1.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
              <button
                onClick={() => setTimerMode('focus', 25)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  mode === 'focus' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:text-white'
                }`}
              >
                🧠 Deep Focus (25m)
              </button>
              <button
                onClick={() => setTimerMode('shortBreak', 5)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  mode === 'shortBreak' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:text-white'
                }`}
              >
                ☕ Short Break (5m)
              </button>
              <button
                onClick={() => setTimerMode('longBreak', 15)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  mode === 'longBreak' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:text-white'
                }`}
              >
                🌴 Long Break (15m)
              </button>
            </div>

            {/* Huge Digital Countdown */}
            <div className="space-y-2">
              <div className="text-6xl sm:text-8xl font-display font-extrabold tracking-tight font-mono text-emerald-400 drop-shadow-md">
                {formatTime(timeLeft)}
              </div>
              <div className="text-xs font-mono text-slate-400">
                {isRunning ? '● Focus sprint in progress...' : 'Paused — ready when you are'}
              </div>
            </div>

            {/* Play / Pause / Reset Buttons */}
            <div className="flex items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsRunning(!isRunning)}
                className="px-8 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-emerald-500/20 flex items-center gap-2"
              >
                {isRunning ? <Pause className="w-5 h-5 fill-slate-950" /> : <Play className="w-5 h-5 fill-slate-950" />}
                <span>{isRunning ? 'Pause Timer' : 'Start Focus Sprint'}</span>
              </motion.button>

              <button
                onClick={() => setTimeLeft(mode === 'focus' ? 25 * 60 : 5 * 60)}
                className="p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-slate-300 transition-all"
                title="Reset Timer"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* Ambient Study Audio Selector */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <Headphones className="w-4 h-4 text-emerald-500" />
                <span>Ambient Study Audio & Binaural Beats</span>
              </h3>
              {activeAudio && (
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <Volume2 className="w-3.5 h-3.5 animate-pulse" /> Playing
                </span>
              )}
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'alpha', name: '432Hz Alpha Waves', desc: 'Deep Focus & Recall', icon: '🧠' },
                { id: 'rain', name: '174Hz Solfeggio', desc: 'Calm & Stress Relief', icon: '🌧️' },
                { id: 'whitenoise', name: 'White Noise', desc: 'Block Background Noise', icon: '📻' }
              ].map((sound) => (
                <button
                  key={sound.id}
                  onClick={() => toggleAmbientSound(sound.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    activeAudio === sound.id
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-emerald-400'
                  }`}
                >
                  <div className="text-xl mb-1">{sound.icon}</div>
                  <div className="text-xs font-bold">{sound.name}</div>
                  <div className="text-[10px] text-slate-400">{sound.desc}</div>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column (5 cols): Sprint Task Goal Checklist */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="p-6 rounded-3xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-4">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Sprint Goals for this Session</span>
            </h3>

            <div className="space-y-2.5">
              {tasks.map((t) => (
                <div
                  key={t.id}
                  onClick={() => toggleTask(t.id)}
                  className={`p-3 rounded-2xl border text-xs cursor-pointer transition-all flex items-center gap-3 ${
                    t.completed
                      ? 'bg-emerald-50/60 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900/40 text-slate-400 line-through'
                      : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-emerald-400'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-md flex items-center justify-center border ${
                    t.completed ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-300 dark:border-slate-600'
                  }`}>
                    {t.completed && <CheckCircle2 className="w-3 h-3 text-white" />}
                  </div>
                  <span>{t.text}</span>
                </div>
              ))}
            </div>

            <form onSubmit={handleAddTask} className="flex gap-2 pt-2">
              <input
                type="text"
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                placeholder="Add goal for next 25-min sprint..."
                className="flex-1 px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="px-3.5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500"
              >
                Add
              </button>
            </form>
          </div>

        </div>

      </div>

    </div>
  );
};
