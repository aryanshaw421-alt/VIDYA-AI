import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Search, 
  BookOpen, 
  Code, 
  FileText, 
  ExternalLink, 
  Check, 
  Plus, 
  Sparkles,
  Loader2,
  RefreshCw,
  Layers
} from 'lucide-react';
import { publicApiResources } from '../data/publicApis';
import { searchAllPublicApis } from '../utils/publicApiServices';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

export const PublicApiHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [savedItems, setSavedItems] = useState({});
  const [liveResults, setLiveResults] = useState([]);
  const [isLoadingLive, setIsLoadingLive] = useState(false);
  const [searchMode, setSearchMode] = useState('hybrid'); // 'hybrid' | 'curated'

  // Debounced Live Public API fetch
  useEffect(() => {
    if (!searchQuery.trim() || searchQuery.trim().length < 3) {
      setLiveResults([]);
      setIsLoadingLive(false);
      return;
    }

    const timer = setTimeout(async () => {
      setIsLoadingLive(true);
      try {
        const results = await searchAllPublicApis(searchQuery);
        setLiveResults(results);
      } catch (e) {
        console.error('Live API fetch error:', e);
      } finally {
        setIsLoadingLive(false);
      }
    }, 450);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Combine curated + live results
  const baseList = [...liveResults, ...publicApiResources];
  
  // Deduplicate by title/url
  const seenUrls = new Set();
  const dedupedList = baseList.filter(item => {
    if (seenUrls.has(item.url)) return false;
    seenUrls.add(item.url);
    return true;
  });

  const filtered = dedupedList.filter(res => {
    const matchesSearch = !searchQuery.trim() || 
                          res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          res.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (activeFilter === 'All') return matchesSearch;
    return matchesSearch && res.source.toLowerCase() === activeFilter.toLowerCase();
  });

  const handleSave = (item) => {
    setSavedItems(prev => ({ ...prev, [item.id]: true }));
    confetti({ particleCount: 30, spread: 50, origin: { y: 0.6 } });
    toast.success(`Saved "${item.title.slice(0, 24)}..." to your reading list!`);
  };

  return (
    <div className="w-full fluid-container py-6 sm:py-10 animate-fade-in space-y-8">
      
      {/* Friendly Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-300 text-xs font-bold mb-2">
            <Globe className="w-3.5 h-3.5" />
            <span>Open Academic Library & Live Public APIs</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
            Research & Academic Public API Library
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Real-time live search across Wikipedia, Open Library, GitHub, and arXiv open databases.
          </p>
        </div>

        {/* Live Status Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/60 text-blue-600 dark:text-blue-400 text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Wikipedia & Open Library Public APIs Live</span>
        </div>
      </div>

      {/* Clean Search & Filters */}
      <div className="p-4 rounded-2xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        <div className="relative w-full md:w-96">
          {isLoadingLive ? (
            <Loader2 className="w-4 h-4 text-blue-500 animate-spin absolute left-3 top-1/2 -translate-y-1/2" />
          ) : (
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          )}
          <input
            type="text"
            placeholder="Try 'Linear Algebra', 'Operating System', 'React'..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {['All', 'Wikipedia', 'Open Library', 'GitHub', 'arXiv'].map((src) => (
            <button
              key={src}
              onClick={() => setActiveFilter(src)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeFilter === src
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {src}
            </button>
          ))}
        </div>

      </div>

      {/* Clean Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((res) => {
          const isSaved = savedItems[res.id];

          return (
            <div
              key={res.id}
              className="p-6 rounded-3xl bg-white dark:bg-[#0D1326] border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between hover:border-blue-400 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                      res.source === 'Wikipedia'
                        ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                        : res.source === 'Open Library'
                        ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400'
                        : res.source === 'GitHub'
                        ? 'bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400'
                        : 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400'
                    }`}>
                      {res.source}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {res.category}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {res.relevance}
                  </span>
                </div>

                <div className="flex gap-4 items-start">
                  {res.thumbnail && (
                    <img 
                      src={res.thumbnail} 
                      alt="" 
                      className="w-14 h-18 object-cover rounded-lg border border-slate-200 dark:border-slate-800 shrink-0" 
                    />
                  )}
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                      {res.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                      {res.description}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                {res.tags && res.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {res.tags.slice(0, 4).map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md text-[10px] bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400 truncate max-w-[180px]">{res.author}</span>
                <div className="flex items-center gap-2">
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                    title="Open Source Link"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => handleSave(res)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                      isSaved
                        ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                        : 'bg-blue-600 hover:bg-blue-500 text-white shadow-sm'
                    }`}
                  >
                    {isSaved ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    <span>{isSaved ? 'Saved' : 'Save to Study Plan'}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && !isLoadingLive && (
        <div className="text-center py-16 text-slate-400">
          <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p className="text-sm font-medium">No resources found for "{searchQuery}".</p>
          <p className="text-xs text-slate-500 mt-1">Try typing a broader subject like 'Physics', 'Algorithms', or 'Machine Learning'.</p>
        </div>
      )}

    </div>
  );
};

