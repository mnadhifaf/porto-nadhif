import React, { useState } from 'react';
import { Award, Activity, Cpu, X, CheckCircle2 } from 'lucide-react';

interface NeuroDawnSectionProps {
  activeAccent: string;
}

export const NeuroDawnSection: React.FC<NeuroDawnSectionProps> = ({ activeAccent }) => {
  const [activeModule, setActiveModule] = useState<'telemetry' | 'control'>('telemetry');
  const [showBriefModal, setShowBriefModal] = useState(false);

  return (
    <section
      id="neuro-dawn"
      className="py-20 bg-ink text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-dark-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Tag */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-zinc-800 pb-6 gap-4">
          <div>
            <div
              className="flex items-center gap-2 font-mono text-xs font-bold mb-2"
              style={{ color: activeAccent }}
            >
              <span>02. FEATURED RESEARCH &amp; AWARD</span>
              <span className="w-12 h-[1px]" style={{ backgroundColor: activeAccent }} />
            </div>
            <h2 className="font-display uppercase text-5xl sm:text-7xl tracking-tight text-white">
              NEURO DAWN
            </h2>
            <p className="text-zinc-400 font-mono text-xs sm:text-sm mt-1">
              Parkinson&apos;s Disease Prevention Technology · Biomedical Invention
            </p>
          </div>
          <div className="font-script text-2xl sm:text-3xl text-amber-400 rotate-2">
            International Gold Medalist ✦
          </div>
        </div>

        {/* Showcase Window */}
        <div className="rounded-3xl bg-panel-dark border-2 border-zinc-700 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Specs & Technical Description (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 space-y-6 border-b lg:border-b-0 lg:border-r border-zinc-800 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="font-mono text-xs text-emerald-400 font-semibold">
                PATENT PENDING · BIOMEDICAL EMBEDDED COMPUTING
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight text-white text-balance">
                Inovasi Teknologi Pencegahan Dini Penyakit Parkinson Berbasis Neuro-Stimulasi
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                <strong className="text-white">NEURO DAWN</strong> adalah proyek penelitian ilmiah
                dan rekayasa teknologi kesehatan yang dirancang untuk mencegah degradasi progresif
                neuron dopaminergik pada penderita tahap awal Parkinson. Sistem ini mengintegrasikan
                sensor telemetri sinyal biometrik dengan algoritma stimulasi listrik terkontrol
                secara presisi pada substantia nigra otak.
              </p>

              {/* Interactive Architecture Module Switcher */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setActiveModule('telemetry')}
                  className={`p-4 rounded-xl border text-left transition-all duration-150 cursor-pointer ${
                    activeModule === 'telemetry'
                      ? 'bg-black/70 border-cobalt shadow-sm'
                      : 'bg-black/40 border-zinc-800 hover:border-zinc-600'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm" style={{ color: activeAccent }}>
                      01. TELEMETRY CORE
                    </span>
                    <Activity className="w-4 h-4 text-zinc-400" aria-hidden="true" />
                  </div>
                  <p className="text-zinc-400 leading-normal font-sans">
                    Monitoring fluktuasi bio-elektrik dan prediksi penurunan kadar dopamin dengan
                    latensi rendah.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveModule('control')}
                  className={`p-4 rounded-xl border text-left transition-all duration-150 cursor-pointer ${
                    activeModule === 'control'
                      ? 'bg-black/70 border-purple-500 shadow-sm'
                      : 'bg-black/40 border-zinc-800 hover:border-zinc-600'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-purple-400 font-bold text-sm">
                      02. CONTROL SYSTEM
                    </span>
                    <Cpu className="w-4 h-4 text-zinc-400" aria-hidden="true" />
                  </div>
                  <p className="text-zinc-400 leading-normal font-sans">
                    Protokol komputasi adaptif untuk pelepasan gelombang stimulasi mikro yang
                    terstandarisasi aman bagi jaringan saraf.
                  </p>
                </button>
              </div>

              {/* Live Signal Schematic Visualization */}
              <div className="p-4 rounded-xl bg-black/55 border border-zinc-800 font-mono">
                <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-2">
                  <span>
                    {activeModule === 'telemetry'
                      ? 'BIOSIGNAL_READOUT · SUBSTANTIA NIGRA RESPONSE'
                      : 'MICRO_STIMULATION_PULSE · ADAPTIVE FREQUENCY'}
                  </span>
                  <span className="text-emerald-400 tabular-nums">
                    {activeModule === 'telemetry' ? 'LATENCY: 4.2 ms' : 'PULSE: 130 Hz SAFE'}
                  </span>
                </div>
                <svg
                  viewBox="0 0 400 54"
                  className="w-full h-12"
                  aria-label="Biomedical waveform schematic"
                >
                  <line x1="0" y1="27" x2="400" y2="27" stroke="#27272A" strokeWidth="1" />
                  {activeModule === 'telemetry' ? (
                    <path
                      d="M0 27 L35 27 L45 12 L55 42 L65 18 L75 27 L125 27 L135 8 L145 46 L155 15 L165 27 L225 27 L235 14 L245 38 L255 20 L265 27 L330 27 L340 10 L350 44 L360 19 L370 27 L400 27"
                      fill="none"
                      stroke={activeAccent}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ) : (
                    <path
                      d="M0 36 L40 36 L40 14 L60 14 L60 36 L110 36 L110 14 L130 14 L130 36 L180 36 L180 14 L200 14 L200 36 L250 36 L250 14 L270 14 L270 36 L320 36 L320 14 L340 14 L340 36 L400 36"
                      fill="none"
                      stroke="#A855F7"
                      strokeWidth="2"
                    />
                  )}
                </svg>
              </div>
            </div>

            {/* Clean Unboxed Metadata Tags */}
            <div className="pt-2 font-mono text-xs text-zinc-400 flex flex-wrap items-center gap-2.5">
              <span>Biotechnology</span>
              <span aria-hidden="true">·</span>
              <span>Embedded Computing</span>
              <span aria-hidden="true">·</span>
              <span>Signal Processing</span>
              <span aria-hidden="true">·</span>
              <span>Neuroscience</span>
            </div>
          </div>

          {/* Right Award Podium Badge (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-zinc-900 to-black p-6 sm:p-8 md:p-10 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 text-amber-400 font-mono text-xs font-bold">
                <Award className="w-4 h-4" aria-hidden="true" />
                <span>OFFICIAL RECOGNITION</span>
              </div>

              <div className="space-y-1">
                <span className="font-display text-4xl sm:text-5xl text-amber-400 tracking-tight block">
                  GOLD MEDAL
                </span>
                <span className="font-mono text-sm text-zinc-400 block">
                  Medali Emas Tingkat Internasional
                </span>
              </div>

              <div className="p-4 rounded-xl bg-panel-dark border border-zinc-700 space-y-2.5 text-xs font-mono">
                <div>
                  <span className="text-zinc-400 block">EVENT</span>
                  <span className="text-white font-bold text-sm">
                    Indonesia International Invention Expo (IIIEX) 2025
                  </span>
                </div>
                <div className="pt-1 border-t border-zinc-800">
                  <span className="text-zinc-400 block">CATEGORY</span>
                  <span className="font-bold" style={{ color: activeAccent }}>
                    Biotechnology — International Level
                  </span>
                </div>
                <div className="pt-1 border-t border-zinc-800">
                  <span className="text-zinc-400 block">ORGANIZED BY</span>
                  <span className="text-zinc-200">
                    Indonesian Young Scientist Association (IYSA) × UNNES
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800 flex items-center justify-between gap-4 text-xs font-mono">
              <div className="text-zinc-400">
                RESEARCH LEAD
                <span className="text-white font-bold block mt-0.5">
                  Muhammad Nadhif Al-Fatih
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowBriefModal(true)}
                className="px-3.5 py-2 rounded-lg text-white font-bold cursor-pointer transition-opacity hover:opacity-90 whitespace-nowrap"
                style={{ backgroundColor: activeAccent }}
              >
                Inspect Brief
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Research Brief & Verification Modal */}
      {showBriefModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="neuro-brief-title"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="w-full max-w-xl rounded-2xl bg-panel-dark border-2 border-zinc-700 shadow-2xl p-6 text-white space-y-5">
            <div className="flex items-start justify-between border-b border-zinc-800 pb-4">
              <div>
                <span className="font-mono text-[11px] text-amber-400 font-bold block">
                  IIIEX 2025 · IYSA × UNNES
                </span>
                <h3 id="neuro-brief-title" className="text-xl font-bold mt-1">
                  NEURO DAWN — Research Architecture Brief
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowBriefModal(false)}
                aria-label="Close research brief"
                className="p-1.5 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <p>
                Developed to address early dopaminergic neuron loss before clinical motor tremors
                escalate, NEURO DAWN combines non-invasive biometric telemetry with closed-loop
                computational control logic.
              </p>
              <ul className="space-y-2 pt-1 font-mono text-xs text-zinc-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Awarded Gold Medal in Biotechnology at IIIEX 2025 International Expo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Defended technical prototype and clinical rationale in English before international jury.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Designed modular firmware telemetry &amp; visualization interface for bio-signal logs.</span>
                </li>
              </ul>
            </div>

            <div className="pt-3 border-t border-zinc-800 flex justify-end">
              <button
                type="button"
                onClick={() => setShowBriefModal(false)}
                className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs font-bold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
