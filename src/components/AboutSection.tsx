import React, { useState } from 'react';
import { Code2, ListTree } from 'lucide-react';
import { EDUCATION_HISTORY } from '../data/portfolioData';

interface AboutSectionProps {
  activeAccent: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ activeAccent }) => {
  const [viewMode, setViewMode] = useState<'timeline' | 'json'>('timeline');

  const jsonPayload = JSON.stringify(
    {
      candidate: 'Muhammad Nadhif Al-Fatih',
      location: 'Palembang & Jakarta, Indonesia',
      status: 'Authenticated Academic Track',
      education: EDUCATION_HISTORY.map((item) => ({
        period: item.period,
        institution: item.institution,
        program: item.program,
      })),
    },
    null,
    2
  );

  return (
    <section id="about" className="py-20 border-b border-ink/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tracker Tag */}
        <div
          className="flex items-center gap-2 font-mono text-xs font-bold mb-3"
          style={{ color: activeAccent }}
        >
          <span>01. PROFILE &amp; ACADEMIC TRACK</span>
          <span className="w-12 h-[1px]" style={{ backgroundColor: activeAccent }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative Bio */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display uppercase text-4xl sm:text-6xl text-ink tracking-tight leading-none text-balance">
              ENGINEERING LOGIC. <br />
              <span
                className="font-script text-5xl sm:text-7xl lowercase -rotate-2 inline-block transition-colors duration-300"
                style={{ color: activeAccent }}
              >
                dynamic
              </span>{' '}
              STORYTELLING.
            </h2>

            <div className="space-y-4 text-zinc-700 text-sm sm:text-base leading-relaxed">
              <p>
                Saya adalah mahasiswa{' '}
                <strong className="text-ink font-semibold">
                  Teknik Informatika di Institut Teknologi PLN
                </strong>{' '}
                (Angkatan 2026), alumni berprestasi dari{' '}
                <strong className="text-ink font-semibold">MAN Insan Cendekia OKI</strong>.
                Minat dan keahlian saya berakar kuat pada persimpangan antara pemrograman sistem,
                rekayasa kecerdasan buatan (Artificial Intelligence), serta estetika visual tingkat
                lanjut melalui Motion Graphics &amp; Visual Effects (VFX).
              </p>
              <p>
                Dengan rekam jejak kemenangan penghargaan internasional, saya mengaplikasikan
                pendekatan analitis berbasis logika dan algoritma komputer untuk memecahkan problem
                nyata—mulai dari riset pencegahan penyakit degeneratif berbasis teknologi saraf
                hingga pembuatan antarmuka web interaktif yang modern dan terstruktur.
              </p>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-3 gap-3 pt-2 font-mono tabular-nums">
              <div className="p-3.5 bg-white border-2 border-[#000000] rounded-xl shadow-brutal-sm">
                <span className="text-[10px] text-ink/55 block">STATUS</span>
                <span
                  className="text-lg sm:text-xl font-bold block mt-0.5"
                  style={{ color: activeAccent }}
                >
                  IT-PLN
                </span>
                <span className="text-[10px] text-ink/70">Informatics Eng.</span>
              </div>
              <div className="p-3.5 bg-[#000000] border-2 border-[#e17100] rounded-xl shadow-brutal-sm">
                <span className="text-[10px] text-[#d3d3d3] block">ACHIEVEMENT</span>
                <span className="text-lg sm:text-xl font-bold text-amber-600 block mt-0.5">
                  GOLD
                </span>
                <span className="text-[10px] text-[#d3d3d3]">IIIEX 2025 Intl</span>
              </div>
              <div className="p-3.5 bg-white border-2 border-ink rounded-xl shadow-brutal-sm">
                <span className="text-[10px] text-ink/55 block">ORGANIZATION</span>
                <span className="text-lg sm:text-xl font-bold text-ink block mt-0.5">
                  5+ ROLES
                </span>
                <span className="text-[10px] text-ink/70">Leadership Track</span>
              </div>
            </div>

            {/* Location & Language Metadata */}
            <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs text-ink/75">
              <span>
                <strong style={{ color: activeAccent }}>LOC:</strong> Palembang &amp; Jakarta, Indonesia
              </span>
              <span aria-hidden="true" className="text-ink/30">
                ·
              </span>
              <span>
                <strong style={{ color: activeAccent }}>LANG:</strong> Bahasa Indonesia (Native), English
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Education History Window */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-panel-dark border-2 border-zinc-700 shadow-brutal p-5 text-white font-mono">
              {/* Window Bar */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4 gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-3 h-3 rounded-full bg-rose-500 shrink-0" />
                  <span className="w-3 h-3 rounded-full bg-amber-500 shrink-0" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
                  <span className="text-xs text-zinc-300 font-bold ml-1 truncate">
                    education_history.json
                  </span>
                </div>

                {/* Working Timeline / Raw JSON Switcher */}
                <div className="flex items-center gap-1 bg-zinc-900 p-0.5 rounded-lg border border-zinc-700 shrink-0">
                  <button
                    type="button"
                    onClick={() => setViewMode('timeline')}
                    className={`px-2 py-1 rounded text-[10px] flex items-center gap-1 transition-colors cursor-pointer ${
                      viewMode === 'timeline'
                        ? 'bg-zinc-700 text-white font-bold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <ListTree className="w-3 h-3" />
                    <span>View</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('json')}
                    className={`px-2 py-1 rounded text-[10px] flex items-center gap-1 transition-colors cursor-pointer ${
                      viewMode === 'json'
                        ? 'bg-zinc-700 text-white font-bold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Code2 className="w-3 h-3" />
                    <span>JSON</span>
                  </button>
                </div>
              </div>

              {viewMode === 'timeline' ? (
                <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-zinc-800">
                  {EDUCATION_HISTORY.map((node) => (
                    <div key={node.id} className="relative">
                      <span
                        className="absolute -left-[22px] top-1.5 w-3.5 h-3.5 rounded-full ring-4 ring-panel-dark"
                        style={{ backgroundColor: node.accentColor }}
                      />
                      <div
                        className="text-xs font-bold tabular-nums"
                        style={{ color: node.highlight ? node.accentColor : '#9CA3AF' }}
                      >
                        {node.period}
                      </div>
                      <h3 className="text-sm font-bold text-white mt-0.5">
                        {node.institution}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-1 font-sans leading-relaxed">
                        {node.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <pre className="text-[11px] leading-relaxed text-emerald-300 bg-black/50 p-3.5 rounded-xl border border-zinc-800 overflow-x-auto max-h-[380px]">
                  <code>{jsonPayload}</code>
                </pre>
              )}

              <div className="mt-6 pt-3 border-t border-zinc-800 text-[10px] text-zinc-400 flex items-center justify-between">
                <span>$ verify_credentials --all</span>
                <span className="text-emerald-400 font-bold">VALIDATED [OK]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
