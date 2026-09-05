import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { mainNavLinks, secondaryTools } from '../data/navigationData';

export const NavigationPills = ({ activeTab, setActiveTab, className = "" }) => {
  const isSecondaryActive = secondaryTools.some(t => t.id === activeTab);

  return (
    <nav className={`flex flex-wrap items-center justify-center gap-4 sm:gap-7 max-w-full py-2 ${className}`}>
      {mainNavLinks.map((link) => {
        const Icon = link.icon;
        const isActive = activeTab === link.id;

        return (
          <button
            key={link.id}
            onClick={() => setActiveTab(link.id)}
            className={`group relative flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full sm:rounded-2xl text-base sm:text-lg font-bold transition-all duration-200 cursor-pointer whitespace-nowrap shadow-sm hover:shadow-md ${
              isActive
                ? 'text-black dark:text-white bg-white/95 dark:bg-white/25 shadow-lg shadow-blue-500/10 dark:shadow-white/5 border border-slate-300/80 dark:border-white/30 backdrop-blur-2xl scale-105 font-extrabold'
                : 'text-slate-800 dark:text-slate-200 bg-white/60 dark:bg-white/8 hover:text-black dark:hover:text-white hover:bg-white/95 dark:hover:bg-white/20 border border-slate-200/70 dark:border-white/10 backdrop-blur-md hover:scale-105'
            }`}
          >
            <Icon className={`w-5.5 h-5.5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:scale-110 ${
              isActive ? 'text-blue-600 dark:text-cyan-400' : 'text-blue-700 dark:text-cyan-300'
            }`} />
            <span className="tracking-tight">{link.label}</span>
            {link.badge && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-rose-500 text-white font-bold animate-pulse shadow-sm">
                {link.badge}
              </span>
            )}
          </button>
        );
      })}

      {/* More Tools Dropdown */}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            className={`group relative flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full sm:rounded-2xl text-base sm:text-lg font-bold transition-all duration-200 cursor-pointer whitespace-nowrap shadow-sm hover:shadow-md ${
              isSecondaryActive
                ? 'text-blue-700 dark:text-cyan-400 bg-white/95 dark:bg-white/25 shadow-lg border border-slate-300/80 dark:border-white/30 backdrop-blur-2xl scale-105'
                : 'text-slate-800 dark:text-slate-200 bg-white/60 dark:bg-white/8 hover:text-black dark:hover:text-white hover:bg-white/95 dark:hover:bg-white/20 border border-slate-200/70 dark:border-white/10 backdrop-blur-md hover:scale-105'
            }`}
          >
            <span>More Tools</span>
            <ChevronDown className="w-5 h-5 transition-transform duration-200 group-hover:translate-y-0.5" />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            side="bottom"
            align="end"
            className="z-50 min-w-[300px] p-2.5 rounded-2xl frosted-glass shadow-2xl text-xs space-y-1 animate-scale-in"
          >
            <div className="px-3.5 py-2 text-[11px] font-mono text-slate-500 dark:text-slate-400 font-bold uppercase border-b border-slate-100 dark:border-slate-800">
              All Cognitive AI Tools
            </div>

            <div className="max-h-[360px] overflow-y-auto space-y-0.5 pt-1">
              {secondaryTools.map((tool) => {
                const ToolIcon = tool.icon;
                const isToolActive = activeTab === tool.id;

                return (
                  <DropdownMenu.Item
                    key={tool.id}
                    onClick={() => setActiveTab(tool.id)}
                    className={`px-3.5 py-2.5 rounded-xl flex items-start gap-3 cursor-pointer transition-colors ${
                      isToolActive
                        ? 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 font-bold'
                        : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <ToolIcon className="w-4.5 h-4.5 mt-0.5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <div>
                      <div className="font-bold text-sm">{tool.label}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-sans">{tool.desc}</div>
                    </div>
                  </DropdownMenu.Item>
                );
              })}
            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </nav>
  );
};
