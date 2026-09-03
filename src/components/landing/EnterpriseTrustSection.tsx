import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Lock, 
  Activity, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  Building2,
  Sparkles,
  Zap
} from 'lucide-react';

export const EnterpriseTrustSection: React.FC = () => {
  const institutions = [
    { name: 'IIT Bombay & Delhi', type: 'Engineering & Research Hub' },
    { name: 'BITS Pilani', type: 'Technology & Science' },
    { name: 'NIT Trichy & Surathkal', type: 'Technical Institutes' },
    { name: 'VTU & KTU Universities', type: 'State Technical Boards' },
    { name: 'CBSE & ISC Boards', type: 'Senior Secondary Syllabus' },
    { name: 'GATE & SSC Aspirants', type: 'Competitive Exam Wing' }
  ];

  const metrics = [
    {
      value: '94.8%',
      label: 'Syllabus Mastery Rate',
      subtext: 'Students completed their full exam syllabus on schedule without cramming.',
      icon: TrendingUp,
      accent: 'text-cyan-400'
    },
    {
      value: '< 120s',
      label: 'Median Doubt Resolution',
      subtext: 'Multi-modal step-by-step conceptual breakdown with zero hallucinations.',
      icon: Zap,
      accent: 'text-amber-400'
    },
    {
      value: '140,000+',
      label: 'PYQ & Mock Simulations',
      subtext: 'Adaptive test questions answered under real negative-marking exam timers.',
      icon: Activity,
      accent: 'text-purple-400'
    },
    {
      value: '+38%',
      label: 'Average Score Boost',
      subtext: 'Measured across semester university exams and mock test series.',
      icon: Award,
      accent: 'text-emerald-400'
    }
  ];

  const enterpriseBadges = [
    { label: 'ISO/IEC 27001 Certified', icon: Lock, desc: 'Enterprise Grade Data Security' },
    { label: 'FERPA & GDPR Compliant', icon: ShieldCheck, desc: 'Strict Student Privacy Protection' },
    { label: 'Zero-Retention LLM Privacy', icon: Building2, desc: 'No Personal Data Used For Training' },
    { label: '99.98% High Uptime SLA', icon: Activity, desc: 'Reliable Cloud Infrastructure' }
  ];

  return (
    <section className="relative py-16 border-y border-slate-800/80 bg-[#060a15]/90 overflow-hidden">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-b from-brand-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* 1. Institutional Trust Strip */}
        <div>
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
              Trusted by 45,000+ Students & Educators Across Leading Universities
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {institutions.map((inst, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-brand-500/40 transition-all flex flex-col items-center justify-center text-center group"
              >
                <span className="text-xs font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                  {inst.name}
                </span>
                <span className="text-[10px] text-slate-400 font-mono mt-0.5">
                  {inst.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Quantifiable Impact Metrics Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-brand-400" />
              <span>Proven Academic Outcomes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
              Real Performance Improvements Backed by Cognitive Science
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80 hover:border-slate-700 shadow-lg hover:shadow-cyan-500/5 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-800/80 flex items-center justify-center border border-slate-700/60">
                        <Icon className={`w-5 h-5 ${m.accent}`} />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 border border-slate-700/50">
                        VERIFIED
                      </span>
                    </div>

                    <div className={`text-3xl sm:text-4xl font-display font-extrabold ${m.accent} mb-1 tracking-tight`}>
                      {m.value}
                    </div>
                    <div className="text-sm font-bold text-white mb-2">
                      {m.label}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {m.subtext}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Enterprise Compliance & Security Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800/90 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <h3 className="text-base font-bold text-white">
                Enterprise Grade Privacy & Institutional Governance
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-xl">
              We uphold the highest security standards. Student notes, exam submissions, and academic data are encrypted in-transit (TLS 1.3) and at-rest (AES-256).
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto">
            {enterpriseBadges.map((badge, idx) => (
              <div 
                key={idx}
                className="px-3.5 py-2 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2 text-left"
              >
                <badge.icon className="w-4 h-4 text-brand-400 shrink-0" />
                <div>
                  <div className="text-[11px] font-bold text-slate-200 truncate">{badge.label}</div>
                  <div className="text-[9px] text-slate-400 truncate">{badge.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
