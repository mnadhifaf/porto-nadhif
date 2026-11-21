import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

interface ExperienceSectionProps {
  activeAccent: string;
}

type CategoryFilter = 'All' | 'Leadership' | 'Event & Health' | 'Tech';

const FILTER_OPTIONS: CategoryFilter[] = ['All', 'Leadership', 'Event & Health', 'Tech'];

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ activeAccent }) => {
  const [filter, setFilter] = useState<CategoryFilter>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const visibleItems =
    filter === 'All'
      ? EXPERIENCE_ITEMS
      : EXPERIENCE_ITEMS.filter((item) => item.category === filter);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="py-20 border-b border-ink/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div
              className="flex items-center gap-2 font-mono text-xs font-bold mb-2"
              style={{ color: activeAccent }}
            >
              <span>04. LEADERSHIP &amp; ORGANIZATION</span>
              <span className="w-12 h-[1px]" style={{ backgroundColor: activeAccent }} />
            </div>
            <h2 className="font-display uppercase text-5xl sm:text-7xl text-ink tracking-tight">
              ORGANIZATIONAL TRACK
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter organizational roles"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-white border-2 border-ink rounded-xl shadow-brutal-sm font-mono text-xs"
          >
            {FILTER_OPTIONS.map((option) => {
              const isSelected = filter === option;
              return (
                <button
                  key={option}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setFilter(option)}
                  className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-ink text-white font-bold'
                      : 'text-ink/70 hover:text-ink hover:bg-zinc-100'
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid of Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <article
                key={item.id}
                className={`rounded-2xl bg-white border-2 border-ink shadow-brutal p-6 flex flex-col justify-between transition-colors hover:border-cobalt ${
                  item.spanWide && filter === 'All' ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-ink/60 mb-3 tabular-nums">
                    <span className={`font-bold ${item.accentText}`}>{item.period}</span>
                    <span className="uppercase">{item.badgeLabel}</span>
                  </div>
                  <h3 className="text-xl font-bold text-ink leading-snug">
                    {item.organization}
                  </h3>
                  <div className="font-mono text-xs text-ink/70 font-semibold mt-1 mb-3">
                    {item.role}
                  </div>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-sans">
                    {item.description}
                  </p>

                  {isExpanded && (
                    <div className="mt-4 pt-3 border-t border-ink/10 space-y-1.5">
                      <span className="font-mono text-[10px] font-bold uppercase text-ink/60 block">
                        Key Contributions
                      </span>
                      <ul className="space-y-1 font-sans text-xs text-zinc-700 list-disc pl-4">
                        {item.deliverables.map((del) => (
                          <li key={del}>{del}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-3 border-t border-ink/10 flex items-center justify-between font-mono text-[10px] text-ink/55">
                  <span>ROLE_ID: {item.roleId}</span>
                  <button
                    type="button"
                    onClick={() => toggleExpand(item.id)}
                    className="font-bold flex items-center gap-1 hover:underline cursor-pointer"
                    style={{ color: activeAccent }}
                  >
                    <span>{isExpanded ? 'Hide Details' : 'View Deliverables'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
