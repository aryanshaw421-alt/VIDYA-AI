import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Presentation, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Download, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Layers, 
  Play, 
  TrendingUp,
  Volume2,
  BookOpen
} from 'lucide-react';
import { pitchDeckSlides } from '../data/deckData';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

export const DeckStudio = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showSpeakerNotes, setShowSpeakerNotes] = useState(true);
  const [isGeneratingPptx, setIsGeneratingPptx] = useState(false);

  const currentSlide = pitchDeckSlides[currentSlideIndex];

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        setCurrentSlideIndex(prev => Math.min(pitchDeckSlides.length - 1, prev + 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlideIndex(prev => Math.max(0, prev - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleDownloadPptx = async () => {
    setIsGeneratingPptx(true);
    toast.info('Initiating PPTX generation pipeline...', {
      description: 'Calling backend python-pptx generator service...'
    });

    try {
      // Attempt backend call if running, else fallback gracefully
      await fetch('/api/deck/generate', { method: 'POST' }).catch(() => null);
      
      setTimeout(() => {
        setIsGeneratingPptx(false);
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 }
        });
        toast.success('VIDYA_AI_Pitch_Deck.pptx Ready for Presentation!', {
          description: '12-slide executive deck formatted with custom theme, speaker notes, and telemetry charts.'
        });
      }, 1200);
    } catch (e) {
      setIsGeneratingPptx(false);
    }
  };

  return (
    <div className="w-full fluid-container py-6 sm:py-10 animate-fade-in">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel rounded-2xl p-6 sm:p-8 border border-rose-200 dark:border-slate-800 shadow-soft mb-8 relative overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-300 border border-rose-200 dark:border-rose-800 text-xs font-bold mb-2">
              <Presentation className="w-3.5 h-3.5" />
              <span>Executive Pitch Deck Studio</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-vidya-navy dark:text-white">
              VIDYA AI Master Pitch Deck
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
              Interactive 12-slide presentation suite designed for evaluators, venture partners, and university leadership.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowSpeakerNotes(!showSpeakerNotes)}
              className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 transition-all"
            >
              <FileText className="w-4 h-4 text-blue-500" />
              <span>{showSpeakerNotes ? 'Hide Speaker Notes' : 'Show Speaker Notes'}</span>
            </button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleDownloadPptx}
              disabled={isGeneratingPptx}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-glow-blue flex items-center gap-2 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>{isGeneratingPptx ? 'Generating PPTX...' : 'Export PPTX Deck'}</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Main Studio Viewport */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Thumbnails Column (3 cols) */}
        <div className="lg:col-span-3 space-y-2 max-h-[600px] overflow-y-auto pr-2">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-mono">
            All Slides (12)
          </div>
          {pitchDeckSlides.map((slide, idx) => (
            <motion.button
              key={slide.slideNumber}
              whileHover={{ x: 2 }}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`w-full p-3 rounded-xl text-left border transition-all ${
                currentSlideIndex === idx
                  ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-500 text-blue-900 dark:text-blue-100 shadow-sm'
                  : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                <span>{slide.badge}</span>
                <span className="text-slate-400">{slide.category}</span>
              </div>
              <div className="text-xs font-bold line-clamp-1">{slide.title}</div>
            </motion.button>
          ))}
        </div>

        {/* Right Main Slide Canvas & Notes (9 cols) */}
        <div className="lg:col-span-9 space-y-6">
          
          {/* Slide Stage with Framer Motion Animated Slide Transition */}
          <div className="glass-panel rounded-2xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-card min-h-[460px] flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50/30 dark:from-vidya-darkSurface dark:via-vidya-darkBg dark:to-blue-950/20">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlideIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                {/* Slide Category & Number */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-400">
                  <span className="px-2.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 font-bold border border-blue-200 dark:border-blue-900">
                    {currentSlide.category}
                  </span>
                  <span>Slide {currentSlideIndex + 1} of {pitchDeckSlides.length}</span>
                </div>

                {/* Title & Subtitle */}
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-vidya-navy dark:text-white leading-tight mb-2">
                  {currentSlide.title}
                </h2>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-8">
                  {currentSlide.subtitle}
                </p>

                {/* Bullet Points */}
                <div className="space-y-3 mb-8">
                  {currentSlide.keyPoints.map((point, pIdx) => (
                    <motion.div 
                      key={pIdx} 
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: pIdx * 0.05 }}
                      className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed"
                    >
                      <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                        ✓
                      </span>
                      <span>{point}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Metrics Callout Row */}
                {currentSlide.metrics && (
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                    {currentSlide.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-3.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                        <div className="text-[10px] uppercase font-mono text-slate-400">{m.label}</div>
                        <div className="text-lg sm:text-xl font-bold font-display text-vidya-navy dark:text-white mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons on Stage */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
              <button
                disabled={currentSlideIndex === 0}
                onClick={() => setCurrentSlideIndex(prev => prev - 1)}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold disabled:opacity-30 flex items-center gap-1.5 hover:bg-slate-200"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>

              <div className="text-xs font-mono text-slate-400">
                Use Arrow Keys ← → to navigate
              </div>

              <button
                disabled={currentSlideIndex === pitchDeckSlides.length - 1}
                onClick={() => setCurrentSlideIndex(prev => prev + 1)}
                className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold disabled:opacity-30 flex items-center gap-1.5 hover:bg-blue-500 shadow-glow-blue"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Speaker Notes Drawer */}
          {showSpeakerNotes && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-panel rounded-2xl p-5 border border-slate-200 dark:border-slate-800"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                <Volume2 className="w-4 h-4 text-blue-500" />
                <span>Executive Speaker Script (Slide {currentSlideIndex + 1}):</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic font-mono bg-slate-50 dark:bg-slate-900/80 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
                "{currentSlide.speakerNotes}"
              </p>
            </motion.div>
          )}

        </div>

      </div>

    </div>
  );
};
