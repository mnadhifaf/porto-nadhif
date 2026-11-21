import React from 'react';
import { SOFTWARE_TOOLS, SOFT_COMPETENCIES } from '../data/portfolioData';

interface SkillsSectionProps {
  activeAccent: string;
  selectedToolId: string;
  onSelectTool: (id: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  activeAccent,
  selectedToolId,
  onSelectTool,
}) => {
  const activeTool =
    SOFTWARE_TOOLS.find((tool) => tool.id === selectedToolId) ?? SOFTWARE_TOOLS[0];

  return (
    <section id="skills" className="py-20 border-b border-ink/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div
              className="flex items-center gap-2 font-mono text-xs font-bold mb-2"
              style={{ color: activeAccent }}
            >
              <span>03. TECHNICAL CAPABILITIES</span>
              <span className="w-12 h-[1px]" style={{ backgroundColor: activeAccent }} />
            </div>
            <h2 className="font-display uppercase text-5xl sm:text-7xl text-ink tracking-tight">
              SKILLS &amp; SOFTWARE DOCK
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-ink/70 max-w-md">
            Komposisi keahlian multi-disiplin antara rekayasa perangkat lunak, logika algoritmik,
            serta produksi visual motion modern. Klik tile untuk inspeksi detail.
          </p>
        </div>

        {/* Interactive Software Squircle Dock */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-10">
          {SOFTWARE_TOOLS.map((tool) => {
            const isSelected = tool.id === selectedToolId;
            return (
              <button
                key={tool.id}
                type="button"
                onClick={() => onSelectTool(tool.id)}
                aria-pressed={isSelected}
                className={`p-4 rounded-2xl bg-white border-2 flex flex-col items-center justify-center text-center transition-all duration-150 cursor-pointer group ${
                  isSelected
                    ? '-translate-y-1 shadow-brutal-blue border-cobalt'
                    : 'border-ink shadow-brutal hover:-translate-y-1'
                }`}
                style={
                  isSelected
                    ? {
                        borderColor: activeAccent,
                        boxShadow: `6px 6px 0px 0px ${activeAccent}`,
                      }
                    : undefined
                }
              >
                <div
                  className={`w-14 h-14 rounded-xl border flex items-center justify-center font-mono font-bold text-xl mb-2 transition-all duration-150 ${tool.iconBg} ${tool.iconBorder} ${tool.iconText} ${tool.hoverBg}`}
                >
                  {tool.code}
                </div>
                <span className="font-bold text-sm text-ink block">{tool.name}</span>
                <span className="font-mono text-[10px] text-ink/60">{tool.category}</span>
              </button>
            );
          })}
        </div>

        {/* Focused Tool Spotlight Strip */}
        <div className="mb-10 p-5 rounded-2xl bg-white border-2 border-ink shadow-brutal-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5 font-mono text-xs">
              <span className="font-bold uppercase" style={{ color: activeAccent }}>
                {activeTool.name}
              </span>
              <span aria-hidden="true" className="text-ink/30">
                ·
              </span>
              <span className="text-ink/65">{activeTool.level}</span>
            </div>
            <h3 className="text-lg font-bold text-ink">{activeTool.hardSkillTitle}</h3>
            <p className="text-xs sm:text-sm text-zinc-600">{activeTool.hardSkillDesc}</p>
          </div>
          <div className="font-mono text-xs text-ink/75 flex flex-wrap gap-2 md:justify-end shrink-0">
            {activeTool.highlights.map((item, idx) => (
              <span key={item} className="inline-flex items-center gap-2">
                {idx > 0 && (
                  <span aria-hidden="true" className="text-ink/30">
                    ·
                  </span>
                )}
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>

        {/* 2-Column In-Depth Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Technical Hard Skills */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-ink shadow-brutal-sm space-y-6">
            <h3 className="font-display uppercase text-2xl text-ink tracking-tight flex items-center gap-2.5">
              <span
                className="w-3 h-3 block transition-colors"
                style={{ backgroundColor: activeAccent }}
              />
              <span>HARD SKILLS &amp; DOMAIN EXPERTISE</span>
            </h3>

            <div className="space-y-4 font-sans text-sm">
              {SOFTWARE_TOOLS.slice(0, 4).map((item, idx) => {
                const isFocused = item.id === selectedToolId;
                return (
                  <div
                    key={item.id}
                    className={`${idx < 3 ? 'border-b border-ink/10 pb-3' : ''} ${
                      isFocused ? 'bg-blueprint/80 -mx-2 px-2 py-1.5 rounded-lg' : ''
                    } transition-colors`}
                  >
                    <div className="flex justify-between items-center mb-1 gap-2">
                      <span className="font-bold text-ink">{item.hardSkillTitle}</span>
                      <span
                        className="font-mono text-xs font-bold shrink-0"
                        style={{ color: activeAccent }}
                      >
                        {item.level}
                      </span>
                    </div>
                    <p className="text-zinc-600 text-xs leading-relaxed">
                      {item.hardSkillDesc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Soft Skills & Organizational Competencies */}
          <div className="p-6 sm:p-8 rounded-2xl bg-panel-dark text-white border-2 border-zinc-700 shadow-brutal flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <h3 className="font-display uppercase text-2xl tracking-tight flex items-center gap-2.5">
                <span className="w-3 h-3 bg-emerald-400 block" />
                <span>LEADERSHIP &amp; SOFT COMPETENCIES</span>
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm font-sans leading-relaxed">
                Diuji melalui berbagai kepanitiaan formal, penegakan kedisiplinan asrama, serta
                presentasi riset di hadapan dewan juri internasional.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
                {SOFT_COMPETENCIES.map((skill) => (
                  <div
                    key={skill.label}
                    className="px-3.5 py-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700 text-white flex items-center gap-2"
                  >
                    <span className={skill.color} aria-hidden="true">
                      ✦
                    </span>
                    <span className="truncate">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skill Metric Bars */}
            <div className="pt-4 border-t border-zinc-800 space-y-3 font-mono text-[11px] tabular-nums">
              <div>
                <div className="flex justify-between text-zinc-400 mb-1">
                  <span>PROBLEM SOLVING &amp; LOGIC</span>
                  <span className="font-bold" style={{ color: activeAccent }}>
                    95%
                  </span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="h-1.5 rounded-full w-[95%] transition-colors"
                    style={{ backgroundColor: activeAccent }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-zinc-400 mb-1">
                  <span>PUBLIC SPEAKING &amp; DEFENSE</span>
                  <span className="text-emerald-400 font-bold">90%</span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-emerald-400 h-1.5 rounded-full w-[90%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
