import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Upload, 
  Play, 
  Pause, 
  ThumbsUp, 
  ThumbsDown, 
  Volume2, 
  FileText, 
  Video, 
  Image as ImageIcon,
  Sparkles,
  CheckCircle2,
  X,
  ExternalLink,
  Plus,
  Radio,
  FileCode
} from 'lucide-react';

const YoutubeIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export const GeminiShowcaseSection = () => {
  // =========================================================================
  // 🎬 USER MEDIA / VIDEO CONFIGURATION:
  // Aap apna video ya picture yahan daal sakte hain!
  // Simply set customVideoSrc to your video file path (e.g., "/my-video.mp4")
  // ya niche UI mein se live video/picture upload/preview kar sakte hain.
  // =========================================================================
  const [customVideoSrc, setCustomVideoSrc] = useState('');
  const [customImageSrc, setCustomImageSrc] = useState('');
  const [isSlotOpen, setIsSlotOpen] = useState(false);
  const videoInputRef = useRef(null);

  // Audio Player State for Feature 2 ("Listen and learn on the go")
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackTime, setPlaybackTime] = useState(135); // 2:15 out of 553 (9:13)
  const [liked, setLiked] = useState(null); // true = thumbs up, false = thumbs down
  const totalDuration = 553; // 9:13 in seconds

  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setPlaybackTime(prev => {
          if (prev >= totalDuration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleVideoFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      if (file.type.startsWith('image/')) {
        setCustomImageSrc(url);
        setCustomVideoSrc('');
      } else {
        setCustomVideoSrc(url);
        setCustomImageSrc('');
      }
    }
  };

  return (
    <div className="w-full space-y-24 sm:space-y-32 my-12">

      {/* ========================================================================= */}
      {/* 1. FEATURE 1: "Upload your sources" (Ditto Gemini Notebook Screenshot)   */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center max-w-6xl mx-auto">
        
        {/* Left Column: Heading, Description & Capabilities */}
        <div className="lg:col-span-5 space-y-6">
          {/* Outline Icon matching the screenshot */}
          <div className="w-12 h-12 rounded-full apple-glass-pill flex items-center justify-center text-slate-800 dark:text-slate-200 shadow-sm">
            <User className="w-6 h-6 stroke-[1.75]" />
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl sm:text-4xl font-bold text-black dark:text-white tracking-tight leading-[1.2]">
              Upload your sources
            </h3>

            <p className="text-base sm:text-lg text-slate-900 dark:text-slate-100 font-medium leading-relaxed">
              Upload PDFs, websites, YouTube videos, audio files, Google Docs, Google Slides and more, and VIDYA AI Notebook will summarize them and make interesting connections between topics, all powered by the latest version of Gemini's multimodal understanding capabilities.
            </p>
          </div>

          {/* Supported Format Pills */}
          <div className="pt-2 flex flex-wrap gap-2">
            {[
              { label: 'PDFs & Textbooks', icon: FileText },
              { label: 'YouTube Lectures', icon: YoutubeIcon },
              { label: 'Audio Records', icon: Volume2 },
              { label: 'Web Links', icon: ExternalLink }
            ].map((src, idx) => {
              const IconComponent = src.icon;
              return (
                <span 
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold apple-glass-pill text-black dark:text-white"
                >
                  <IconComponent className="w-3.5 h-3.5 text-blue-700 dark:text-cyan-400" />
                  <span>{src.label}</span>
                </span>
              );
            })}
          </div>
        </div>

        {/* Right Column: Sleek Dark Showcase Container / Video Placeholder */}
        <div className="lg:col-span-7">
          <div className="relative w-full rounded-[32px] sm:rounded-[36px] bg-[#0A0B0E]/80 backdrop-blur-2xl border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6),inset_0_1.5px_1px_rgba(255,255,255,0.2)] overflow-hidden aspect-[16/10] sm:aspect-[16/9] min-h-[360px] sm:min-h-[420px] flex items-center justify-center p-6 sm:p-10 group">
            
            {/* Ambient Radial Background Glow */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,rgba(37,99,235,0.12),transparent_70%)]" />

            {/* User Custom Video / Media Slot Controls Overlay */}
            <div className="absolute top-4 right-4 z-30">
              <button
                onClick={() => setIsSlotOpen(!isSlotOpen)}
                className="px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 shadow-lg backdrop-blur-md transition-all cursor-pointer"
                title="Aap yahan apna video ya picture laga sakte hain"
              >
                <Video className="w-3.5 h-3.5 text-blue-400" />
                <span>{customVideoSrc || customImageSrc ? 'Media Active' : 'Video/Image Slot'}</span>
              </button>

              {/* Slot Management Dropdown */}
              {isSlotOpen && (
                <div className="absolute right-0 mt-2 w-72 p-4 rounded-2xl bg-[#16181D] border border-slate-700 shadow-2xl text-xs space-y-3 z-40 text-slate-200">
                  <div className="flex items-center justify-between font-medium text-slate-100 border-b border-slate-800 pb-2">
                    <span>🎬 Video / Media Settings</span>
                    <button onClick={() => setIsSlotOpen(false)} className="text-slate-400 hover:text-white cursor-pointer">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    Select a local video or picture from your computer to preview it right inside this frame.
                  </p>
                  <input
                    ref={videoInputRef}
                    type="file"
                    accept="video/*,image/*"
                    onChange={handleVideoFileSelect}
                    className="hidden"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => videoInputRef.current?.click()}
                      className="flex-1 py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-center cursor-pointer transition-all"
                    >
                      Choose Video / Image
                    </button>
                    {(customVideoSrc || customImageSrc) && (
                      <button
                        onClick={() => {
                          setCustomVideoSrc('');
                          setCustomImageSrc('');
                        }}
                        className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* ========================================================================= */}
            {/* CONTENT AREA: Custom Video/Image OR Ditto Screenshot UI                 */}
            {/* ========================================================================= */}
            {customVideoSrc ? (
              <video
                src={customVideoSrc}
                controls
                autoPlay
                loop
                className="w-full h-full object-cover rounded-2xl relative z-10"
              />
            ) : customImageSrc ? (
              <img
                src={customImageSrc}
                alt="Custom Showcase Media"
                className="w-full h-full object-cover rounded-2xl relative z-10"
              />
            ) : (
              /* DITTO Google Gemini Notebook Screenshot UI (Upload sources + Stacked Cards) */
              <div className="w-full max-w-md flex flex-col items-center justify-center space-y-6 relative z-10">
                
                {/* 1. Upload Sources Dashed Box */}
                <div 
                  onClick={() => videoInputRef.current?.click()}
                  className="w-full py-5 px-8 rounded-2xl border border-dashed border-slate-600/80 bg-[#121418]/80 hover:bg-[#181B22] hover:border-blue-500/80 transition-all cursor-pointer flex flex-col items-center justify-center gap-2.5 group/box shadow-lg"
                >
                  <div className="w-11 h-11 rounded-full bg-[#1A73E8] hover:bg-[#1865C9] flex items-center justify-center text-white shadow-md group-hover/box:scale-105 transition-transform">
                    <Upload className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <span className="text-white font-medium text-base tracking-wide">
                    Upload sources
                  </span>
                </div>

                {/* 2. Overlapping Stacked Source Cards (Matching Photo 1 & 3) */}
                <div className="w-full space-y-2 relative pt-1">
                  
                  {/* Card 1: LIT 300 Joyce */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="w-[92%] mx-auto py-2.5 px-4 rounded-xl bg-[#23262D]/90 border border-slate-700/60 shadow-lg flex items-center justify-between text-slate-200 hover:border-slate-600 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-slate-400" />
                      <span className="text-xs sm:text-sm font-medium">LIT 300 Joyce</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-slate-500/60" />
                  </motion.div>

                  {/* Card 2: Ulysses Notes */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="w-[96%] mx-auto py-2.5 px-4 rounded-xl bg-[#1C1F26]/95 border border-slate-700/70 shadow-xl flex items-center justify-between text-slate-200 hover:border-slate-500 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-sm bg-blue-500 flex items-center justify-center text-[10px] text-white font-bold">
                        ≡
                      </div>
                      <span className="text-xs sm:text-sm font-medium">Ulysses Notes</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-blue-400/80" />
                  </motion.div>

                  {/* Card 3: Ulysses by James Joyce (YouTube) */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="w-full py-3 px-4 rounded-xl bg-[#171920] border border-slate-700/80 shadow-2xl flex items-center justify-between text-white hover:border-slate-500 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-4 rounded bg-[#FF0000] flex items-center justify-center text-white">
                        <Play className="w-2.5 h-2.5 fill-white" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium">Ulysses by James Joyce</span>
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  </motion.div>

                </div>

                {/* Screenshot Exact Cursor Tooltip Label */}
                <div className="pt-1">
                  <div className="px-3 py-1 rounded-md bg-white/10 text-slate-300 text-[11px] font-sans border border-white/5 backdrop-blur-sm">
                    Upload your sources
                  </div>
                </div>

              </div>
            )}

          </div>
        </div>

      </div>


      {/* ========================================================================= */}
      {/* 2. FEATURE 2: "Listen and learn on the go" (Ditto Photo 2 Screenshot)    */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center max-w-6xl mx-auto">
        
        {/* Left Column: Waveform Icon, Heading & Description */}
        <div className="lg:col-span-5 space-y-6">
          {/* Audio Waveform Icon matching Photo 2 */}
          <div className="w-12 h-12 rounded-full apple-glass-pill flex items-center justify-center text-slate-800 dark:text-slate-200 shadow-sm">
            <div className="flex items-center gap-1">
              <span className="w-1 h-3.5 bg-slate-800 dark:bg-slate-200 rounded-full" />
              <span className="w-1 h-5 bg-slate-800 dark:bg-slate-200 rounded-full" />
              <span className="w-1 h-2.5 bg-slate-800 dark:bg-slate-200 rounded-full" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl sm:text-4xl font-bold text-black dark:text-white tracking-tight leading-[1.2]">
              Listen and learn on the go
            </h3>

            <p className="text-base sm:text-lg text-slate-900 dark:text-slate-100 font-medium leading-relaxed">
              Our new Audio Overview feature can turn your sources into engaging "Deep Dive" discussions with one click.
            </p>
          </div>

          {/* Quick interactive trigger */}
          <div className="pt-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs sm:text-sm font-medium shadow-md shadow-blue-500/20 transition-all cursor-pointer"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              <span>{isPlaying ? 'Pause Audio Discussion' : 'Play Audio Overview (9:13)'}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Audio Spectrum Visualizer + Floating Player Bar */}
        <div className="lg:col-span-7">
          <div className="relative w-full rounded-[32px] sm:rounded-[36px] bg-[#0A0B0E]/80 backdrop-blur-2xl border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6),inset_0_1.5px_1px_rgba(255,255,255,0.2)] overflow-hidden aspect-[16/10] sm:aspect-[16/9] min-h-[360px] sm:min-h-[420px] flex items-center justify-center p-6 sm:p-10">
            
            {/* Subtle Ambient Darkness & Glow */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_75%)]" />

            {/* Exact Colorful Equalizer Bars from Photo 2 */}
            <div className="absolute inset-x-8 sm:inset-x-14 inset-y-10 flex items-center justify-center gap-3 sm:gap-5 pointer-events-none opacity-80">
              {[
                { color: 'bg-[#9882BA]', height: isPlaying ? 'h-36 sm:h-44' : 'h-32 sm:h-40', delay: 0.1 },
                { color: 'bg-[#3252DF]', height: isPlaying ? 'h-44 sm:h-52' : 'h-40 sm:h-48', delay: 0.2 },
                { color: 'bg-[#7A6EB8]', height: isPlaying ? 'h-28 sm:h-36' : 'h-24 sm:h-32', delay: 0.3 },
                { color: 'bg-[#E5484D]', height: isPlaying ? 'h-52 sm:h-60' : 'h-48 sm:h-56', delay: 0.15 },
                { color: 'bg-[#F59E0B]', height: isPlaying ? 'h-20 sm:h-24 rounded-full w-8 sm:w-10' : 'h-16 sm:h-20 rounded-full w-8 sm:w-10', delay: 0.25 },
                { color: 'bg-[#0091FF]', height: isPlaying ? 'h-48 sm:h-56' : 'h-44 sm:h-52', delay: 0.35 },
                { color: 'bg-[#30A46C]', height: isPlaying ? 'h-56 sm:h-64' : 'h-52 sm:h-60', delay: 0.05 },
                { color: 'bg-[#8E4EC6]', height: isPlaying ? 'h-40 sm:h-48' : 'h-36 sm:h-44', delay: 0.3 },
                { color: 'bg-[#C2410C]', height: isPlaying ? 'h-44 sm:h-52' : 'h-40 sm:h-48', delay: 0.2 }
              ].map((bar, i) => (
                <div
                  key={i}
                  className={`w-7 sm:w-9 rounded-full ${bar.color} ${bar.height} shadow-lg transition-all duration-500 ease-in-out`}
                  style={{
                    opacity: 0.88,
                    filter: 'drop-shadow(0 0 16px rgba(255,255,255,0.08))'
                  }}
                />
              ))}
            </div>

            {/* Floating Audio Player Bar matching Photo 2 */}
            <div className="relative z-10 w-full max-w-lg mx-auto py-3 sm:py-3.5 px-4 sm:px-5 rounded-full bg-[#181A1F]/90 backdrop-blur-xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] flex items-center justify-between gap-3 sm:gap-4">
              
              {/* Left: Play/Pause Button + Time */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 rounded-full bg-slate-200 hover:bg-white text-slate-900 flex items-center justify-center cursor-pointer shadow-md transition-all active:scale-95 shrink-0"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-slate-900 text-slate-900" />
                  ) : (
                    <Play className="w-4 h-4 fill-slate-900 text-slate-900 ml-0.5" />
                  )}
                </button>
                <span className="text-xs sm:text-sm font-mono text-slate-300 font-medium whitespace-nowrap">
                  {formatTime(playbackTime)}
                </span>
              </div>

              {/* Center: Audio Scrubber Bar */}
              <div 
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickPos = (e.clientX - rect.left) / rect.width;
                  setPlaybackTime(Math.round(clickPos * totalDuration));
                }}
                className="flex-1 h-1.5 bg-slate-700/80 rounded-full cursor-pointer relative overflow-hidden group/track"
              >
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full relative transition-all duration-150"
                  style={{ width: `${(playbackTime / totalDuration) * 100}%` }}
                >
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-md opacity-0 group-hover/track:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Right: Thumbs Up & Thumbs Down Buttons */}
              <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                <button
                  onClick={() => setLiked(liked === true ? null : true)}
                  className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                    liked === true ? 'text-blue-400 bg-blue-500/20' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Good response"
                >
                  <ThumbsUp className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setLiked(liked === false ? null : false)}
                  className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                    liked === false ? 'text-rose-400 bg-rose-500/20' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Bad response"
                >
                  <ThumbsDown className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default GeminiShowcaseSection;
