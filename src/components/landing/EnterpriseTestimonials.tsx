import React from 'react';
import { Star, CheckCircle2, Quote, GraduationCap, Building2 } from 'lucide-react';

export const EnterpriseTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Aditya Kulkarni',
      role: 'GATE CSE AIR 142 • IIT Bombay M.Tech',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      college: 'IIT Bombay',
      rating: 5,
      highlight: 'From 58 marks to AIR 142 in 4 months',
      quote: 'The Dynamic Shift Rebalancer is what saved my preparation. When I missed 4 days due to semester mid-terms, instead of panicking, Authentix redistributed my syllabus targets with higher-weightage topics prioritized.'
    },
    {
      name: 'Dr. Ramesh Sundaram',
      role: 'Head of Computer Science Dept. • Tier-1 Institute',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      college: 'Engineering Faculty',
      rating: 5,
      highlight: '32% drop in course dropouts & backlogs',
      quote: 'We pilot-tested Authentix with 350 undergraduate engineering students. The Educator Radar identified at-risk students before the end-sem exams, allowing targeted intervention.'
    },
    {
      name: 'Sneha Agarwal',
      role: 'Class 12th CBSE Science (96.4%) & JEE Main (99.1%ile)',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
      college: 'CBSE Board Topper',
      rating: 5,
      highlight: 'Zero doubts left unclarified before exams',
      quote: 'SnapSolve Studio is unlike generic AI chatbots. It gives the exact textbook theorem reference and explains where students commonly make sign errors in numericals.'
    }
  ];

  return (
    <section className="py-20 bg-[#070b14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Institutional Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Loved by Students. Trusted by Faculty.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            See how learners and top educational departments achieve academic excellence with Vidya AI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 shadow-xl flex flex-col justify-between transition-all group hover:-translate-y-1 duration-300"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                    {t.highlight}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <img 
                  src={t.avatar} 
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-700" 
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-white">{t.name}</h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <p className="text-[11px] text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
