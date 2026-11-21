import React, { useState } from 'react';
import {
  MousePointer,
  PenTool,
  Crop,
  Paintbrush,
  Code2,
  Type as TypeIcon,
  Hand,
  Eye,
  EyeOff,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import {
  FocusLayer,
  INITIAL_RENDER_LAYERS,
  RenderLayer,
} from '../data/portfolioData';

type CanvasTool = 'select' | 'pen' | 'grid' | 'glow' | 'code' | 'type' | 'pan';

interface HeroStageProps {
  focusLayers: FocusLayer[];
  activeLayer: FocusLayer;
  onSelectLayer: (layer: FocusLayer) => void;
  onInspectTool: (toolId: string) => void;
  onCycleAccent: () => void;
}

export const HeroStage: React.FC<HeroStageProps> = ({
  focusLayers,
  activeLayer,
  onSelectLayer,
  onInspectTool,
  onCycleAccent,
}) => {
  const [activeTool, setActiveTool] = useState<CanvasTool>('select');
  const [renderLayers, setRenderLayers] = useState<RenderLayer[]>(INITIAL_RENDER_LAYERS);
  const [tiltOffset, setTiltOffset] = useState({ x: 0, y: 0 });
  const [portraitError, setPortraitError] = useState(false);

  const toggleRenderLayer = (id: string) => {
    setRenderLayers((prev) =>
      prev.map((layer) =>
        layer.id === id ? { ...layer, visible: !layer.visible } : layer
      )
    );
  };

  const visibleLayerCount = renderLayers.filter((l) => l.visible).length;
  const renderProgress = Math.round((visibleLayerCount / renderLayers.length) * 88 + 12);

  const handleStageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (activeTool !== 'pan') return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    setTiltOffset({ x, y });
  };

  const handleStageMouseLeave = () => {
    setTiltOffset({ x: 0, y: 0 });
  };

  const toolbarButtons: { id: CanvasTool; label: string; icon: React.ReactNode }[] = [
    { id: 'select', label: 'Select & Bounding Anchors', icon: <MousePointer className="w-4 h-4" /> },
    { id: 'pen', label: 'Vector Path & Wireframe', icon: <PenTool className="w-4 h-4" /> },
    { id: 'grid', label: 'Blueprint Grid Guides', icon: <Crop className="w-4 h-4" /> },
    { id: 'glow', label: 'Studio Lighting Glow', icon: <Paintbrush className="w-4 h-4" /> },
    { id: 'code', label: 'Source Inspector Overlay', icon: <Code2 className="w-4 h-4" /> },
    { id: 'type', label: 'Typography Spec Overlay', icon: <TypeIcon className="w-4 h-4" /> },
    { id: 'pan', label: '3D Perspective Tilt', icon: <Hand className="w-4 h-4" /> },
  ];

  return (
    <section
      id="top"
      onMouseMove={handleStageMouseMove}
      onMouseLeave={handleStageMouseLeave}
      className={`relative pt-6 pb-16 sm:pb-20 overflow-hidden border-b border-ink/10 transition-colors duration-200 ${
        activeTool === 'grid' ? 'bg-grid-blueprint-dense' : ''
      }`}
    >
      {/* Blueprint Registration Crosshairs */}
      <div className="fixed top-20 left-6 pointer-events-none text-ink/30 font-mono text-[10px] hidden xl:block z-30 select-none">
        + X: 104.7565° E · Y: 2.9909° S [PALEMBANG_GRID]
      </div>
      <div className="fixed bottom-6 right-6 pointer-events-none text-ink/30 font-mono text-[10px] hidden xl:block z-30 select-none">
        IT-PLN INFORMATICS · 2026
      </div>

      {/* Decorative Blueprint Marks */}
      <div
        aria-hidden="true"
        className="absolute top-10 left-12 text-5xl text-ink/5 select-none pointer-events-none font-mono"
      >
        +
      </div>
      <div
        aria-hidden="true"
        className="absolute top-48 right-16 text-5xl text-ink/5 select-none pointer-events-none font-mono"
      >
        +
      </div>
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-4 text-[11px] font-mono text-ink/30 [writing-mode:vertical-lr] hidden lg:block select-none"
      >
        CANVAS_BOUNDS: 1440 x 900 px · {activeLayer.shortLabel.toUpperCase()}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Status Sub-Header */}
        <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-ink/65 mb-2">
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-2 h-2 transition-colors duration-200"
              style={{ backgroundColor: activeLayer.accent }}
            />
            <span>PIXEL PERFECT &amp; ALGORITHMIC ARCHITECTURE</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span>UI / UX &amp; SOFTWARE</span>
            <span aria-hidden="true">·</span>
            <span>VFX COMPOSITING</span>
            <span className="font-bold" style={{ color: activeLayer.accent }}>
              +
            </span>
          </div>
        </div>

        {/* Huge Layered Headline Structure */}
        <div className="relative text-center mt-2 mb-6">
          <div className="relative z-20 -mb-4 sm:-mb-7 md:-mb-11">
            <span
              className="font-script text-4xl sm:text-6xl md:text-8xl inline-block -rotate-[4deg] drop-shadow-sm select-none transition-colors duration-300"
              style={{ color: activeLayer.accent }}
            >
              Informatics &amp;
            </span>
          </div>
          <h1 className="font-display uppercase text-6xl sm:text-9xl md:text-[11.5rem] lg:text-[14rem] tracking-tight text-ink leading-[0.84] select-none">
            CREATOR
          </h1>
          <p className="font-mono text-xs sm:text-sm tracking-wider uppercase text-ink/75 mt-3 max-w-xl mx-auto font-medium">
            DESIGNING SOLUTIONS,{' '}
            <span className="font-bold transition-colors duration-300" style={{ color: activeLayer.accent }}>
              SHAPING DIGITAL VISUALS.
            </span>
          </p>

          {activeTool === 'type' && (
            <div className="mt-3 inline-flex flex-wrap items-center justify-center gap-3 px-3 py-1.5 rounded-lg bg-ink text-white font-mono text-[10px]">
              <span>DISPLAY: Anton 400</span>
              <span className="text-zinc-500">|</span>
              <span>SCRIPT: Caveat 700 (-4deg)</span>
              <span className="text-zinc-500">|</span>
              <span>ACCENT: {activeLayer.accent}</span>
            </div>
          )}
        </div>

        {/* Central Interactive 3D Floating Software Collage Stage */}
        <div
          className="relative max-w-5xl mx-auto min-h-[620px] sm:min-h-[680px] md:min-h-[760px] flex items-center justify-center transition-transform duration-200 ease-out"
          style={
            activeTool === 'pan'
              ? {
                  transform: `perspective(1100px) rotateX(${tiltOffset.y}deg) rotateY(${tiltOffset.x}deg)`,
                }
              : undefined
          }
        >
          {/* 1. Background Tilted 3D Pink Secondary Window Frame (vfx_compositing_render.ae) */}
          <div
            className={`absolute w-[280px] sm:w-[420px] md:w-[530px] h-[340px] sm:h-[460px] md:h-[540px] rounded-3xl bg-pink-frame border-[6px] border-white shadow-2xl rotate-6 translate-x-6 sm:translate-x-16 -translate-y-8 z-0 overflow-hidden hidden sm:block transition-all duration-300 hover:rotate-3 ${
              activeTool === 'pen' ? 'ring-2 ring-cobalt ring-offset-4' : ''
            }`}
          >
            <div className="h-8 bg-pink-400/50 flex items-center px-4 gap-1.5 border-b border-pink-400">
              <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
              <span className="ml-2 text-[10px] font-mono text-ink/80 font-bold">
                vfx_compositing_render.ae
              </span>
            </div>

            <div className="p-5 bg-[#181A20] h-full font-mono text-[11px] text-zinc-300 flex flex-col justify-between pb-12">
              <div>
                <div className="flex justify-between text-zinc-400 border-b border-zinc-800 pb-2">
                  <span>TIMELINE · KEYFRAMES</span>
                  <span className="text-pink-300 tabular-nums">00:14:28:02</span>
                </div>
                <p className="text-[10px] text-zinc-500 mt-2 mb-2">
                  Toggle layer visibility to preview composite pass:
                </p>
                <div className="space-y-1.5 text-[10px]">
                  {renderLayers.map((layer) => (
                    <button
                      key={layer.id}
                      type="button"
                      onClick={() => toggleRenderLayer(layer.id)}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded border text-left transition-colors cursor-pointer ${
                        layer.visible
                          ? 'bg-zinc-900/90 border-zinc-700 hover:border-pink-400/60'
                          : 'bg-zinc-950/50 border-zinc-800/60 opacity-45'
                      }`}
                    >
                      <span className={`${layer.colorClass} truncate`}>
                        ▶ {layer.name}
                      </span>
                      <span className="flex items-center gap-2 text-zinc-400 shrink-0 ml-2">
                        <span className="hidden md:inline text-[9px]">{layer.blendMode}</span>
                        {layer.visible ? (
                          <Eye className="w-3 h-3 text-pink-300" />
                        ) : (
                          <EyeOff className="w-3 h-3 text-zinc-600" />
                        )}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-black/45 border border-white/10">
                <div className="flex items-center justify-between text-[9px] uppercase tracking-wider text-pink-300 mb-1.5">
                  <span>Renderer: GPU Mercury Engine</span>
                  <span className="tabular-nums font-bold">{renderProgress}%</span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-pink-400 h-full transition-all duration-300"
                    style={{ width: `${renderProgress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 2. Primary Focal Subject Card (Muhammad Nadhif Al-Fatih) */}
          <div
            className={`relative z-10 w-[280px] sm:w-[360px] md:w-[410px] rounded-3xl bg-zinc-950 border-4 border-ink shadow-2xl overflow-visible group transition-all duration-200 ${
              activeTool === 'select' || activeTool === 'pen'
                ? 'ring-2 ring-offset-2'
                : ''
            }`}
            style={
              activeTool === 'select' || activeTool === 'pen'
                ? { ['--tw-ring-color' as string]: activeLayer.accent }
                : undefined
            }
          >
            {/* Vector Bounding Box Corner Handles when Select or Pen is active */}
            {(activeTool === 'select' || activeTool === 'pen') && (
              <>
                <span
                  aria-hidden="true"
                  className="w-3 h-3 bg-white border-2 absolute -top-1.5 -left-1.5 z-30"
                  style={{ borderColor: activeLayer.accent }}
                />
                <span
                  aria-hidden="true"
                  className="w-3 h-3 bg-white border-2 absolute -top-1.5 -right-1.5 z-30"
                  style={{ borderColor: activeLayer.accent }}
                />
                <span
                  aria-hidden="true"
                  className="w-3 h-3 bg-white border-2 absolute -bottom-1.5 -left-1.5 z-30"
                  style={{ borderColor: activeLayer.accent }}
                />
                <span
                  aria-hidden="true"
                  className="w-3 h-3 bg-white border-2 absolute -bottom-1.5 -right-1.5 z-30"
                  style={{ borderColor: activeLayer.accent }}
                />
              </>
            )}

            <div className="rounded-[20px] overflow-hidden">
              <div className="relative h-[380px] sm:h-[440px] md:h-[480px] w-full overflow-hidden bg-gradient-to-b from-zinc-800 via-zinc-900 to-black flex flex-col justify-end p-6">
                <div className="absolute inset-0 bg-dark-grid opacity-30" />

                {/* Ambient Studio Glow behind portrait */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className={`rounded-full blur-2xl transition-all duration-300 ${
                      activeTool === 'glow'
                        ? 'w-72 h-72 sm:w-80 sm:h-80 opacity-85'
                        : 'w-48 h-48 sm:w-64 sm:h-64 opacity-60'
                    }`}
                    style={{
                      background: `radial-gradient(circle, ${activeLayer.accent}88 0%, rgba(124,58,237,0.35) 55%, rgba(244,168,232,0.18) 100%)`,
                    }}
                  />
                </div>

                {/* Subject Portrait Cutout */}
                {!portraitError ? (
                  <img
                    src="/assets/aistudio/6057718335408903579_121-removebg-preview_6d41d1e8.png"
                    alt="Muhammad Nadhif Al-Fatih — Developer and Compositor"
                    referrerPolicy="no-referrer"
                    onError={() => setPortraitError(true)}
                    className="absolute inset-x-0 bottom-0 mx-auto w-full h-[94%] object-contain object-bottom drop-shadow-[0_12px_28px_rgba(0,0,0,0.85)] select-none pointer-events-none z-[2]"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[2]">
                    <div className="w-28 h-28 rounded-full border-2 border-zinc-700 bg-zinc-900 flex items-center justify-center font-display text-4xl text-white">
                      MNAF
                    </div>
                  </div>
                )}

                {/* Bottom Readability Scrim */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black/95 via-black/65 to-transparent pointer-events-none z-[5]"
                />

                {/* Source Inspector Overlay when Code tool is active */}
                {activeTool === 'code' && (
                  <div className="absolute top-4 left-4 right-4 z-20 rounded-xl bg-black/85 border border-zinc-700 p-3 font-mono text-[10px] text-zinc-300 backdrop-blur-sm">
                    <div className="text-zinc-500 mb-1">/* Active Canvas Node */</div>
                    <div>
                      <span className="text-blue-400">const</span> focus ={' '}
                      <span className="text-emerald-400">&quot;{activeLayer.title}&quot;</span>;
                    </div>
                    <div>
                      <span className="text-blue-400">const</span> medal ={' '}
                      <span className="text-amber-300">&quot;IIIEX 2025 Gold&quot;</span>;
                    </div>
                  </div>
                )}

                {/* Subject Bio Overlay */}
                <div className="relative z-10 space-y-1.5">
                  <span
                    className="inline-block px-2.5 py-0.5 rounded text-white font-mono text-[10px] tracking-wider font-bold transition-colors duration-200"
                    style={{ backgroundColor: activeLayer.accent }}
                  >
                    DEVELOPER &amp; COMPOSITOR
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Muhammad Nadhif Al-Fatih
                  </h2>
                  <p className="text-xs text-zinc-300 font-mono">
                    Informatics Engineering · Institut Teknologi PLN
                  </p>
                </div>
              </div>

              {/* Bottom Meta Strip inside portrait card */}
              <div className="bg-black/95 px-4 py-3 border-t border-zinc-800 flex justify-between items-center text-[10px] font-mono text-zinc-400">
                <span className="text-emerald-400 font-semibold">
                  ACTIVE: {activeLayer.shortLabel.toUpperCase()}
                </span>
                <span className="tabular-nums">ID: MNAF_2026</span>
              </div>
            </div>
          </div>

          {/* 3. Floating Software Tile Left: Adobe After Effects (Ae) */}
          <div className="absolute -left-2 sm:left-4 md:left-8 top-12 sm:top-16 z-20 animate-float">
            <div className="flex flex-col items-center">
              <span className="font-script text-base sm:text-xl text-ink font-bold -rotate-12 mb-1 flex items-center gap-1">
                Visual Effects <Sparkles className="w-3.5 h-3.5 text-cobalt" aria-hidden="true" />
              </span>
              <svg
                className="w-6 h-6 text-ink/70 mb-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7 3C11 7 14 13 12 21M12 21L8 17M12 21L16 18" />
              </svg>
              <button
                type="button"
                onClick={() => onInspectTool('ae')}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#00005B] border-2 border-[#9999FF] shadow-brutal flex flex-col items-center justify-center p-2 text-center cursor-pointer transition-transform duration-150 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt"
                title="Inspect After Effects VFX capabilities"
              >
                <span className="font-bold text-2xl sm:text-3xl text-[#9999FF] tracking-tighter leading-none">
                  Ae
                </span>
                <span className="text-[9px] font-mono font-bold text-white/85 mt-1 uppercase">
                  Motion
                </span>
              </button>
            </div>
          </div>

          {/* 4. Floating Software Tile: Premiere Pro (Pr) */}
          <div className="absolute left-2 sm:left-12 bottom-36 sm:bottom-48 z-20 animate-float-alt">
            <div className="flex flex-col items-center">
              <button
                type="button"
                onClick={() => onInspectTool('pr')}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#00002A] border-2 border-[#EA77FF] shadow-brutal flex flex-col items-center justify-center p-2 text-center cursor-pointer transition-transform duration-150 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt"
                title="Inspect Premiere Pro editing capabilities"
              >
                <span className="font-bold text-xl sm:text-2xl text-[#EA77FF] tracking-tighter leading-none">
                  Pr
                </span>
                <span className="text-[8px] font-mono font-bold text-white/85 mt-0.5 uppercase">
                  Video
                </span>
              </button>
              <span className="font-script text-sm sm:text-base text-ink font-bold rotate-6 mt-1">
                Editing &amp; Audio
              </span>
            </div>
          </div>

          {/* 5. Floating HTML5 / C++ Code Badge Left-Bottom */}
          <div className="hidden md:block absolute left-2 bottom-12 z-20">
            <button
              type="button"
              onClick={() => onInspectTool('cpp')}
              className="w-16 h-14 rounded-2xl bg-[#0F1115] border-2 border-cobalt shadow-brutal flex flex-col items-center justify-center text-center cursor-pointer transition-transform duration-150 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt"
              title="Inspect HTML5 & C++ capabilities"
            >
              <span className="font-mono font-bold text-base text-cobalt leading-none">
                &lt;/&gt;
              </span>
              <span className="text-[8px] font-mono font-bold text-zinc-300 mt-1">
                HTML5/C++
              </span>
            </button>
          </div>

          {/* 6. Floating Gold Medalist Badge (Top Right) */}
          <a
            href="#neuro-dawn"
            className="absolute right-0 sm:right-10 top-6 sm:top-10 z-20 text-white px-3 sm:px-4 py-1.5 rounded-full font-mono text-[10px] sm:text-xs font-bold shadow-brutal tracking-wider flex items-center gap-2 -rotate-3 hover:rotate-0 transition-transform duration-150"
            style={{ backgroundColor: activeLayer.accent }}
          >
            <span className="text-amber-300">★</span>
            <span>GOLD MEDALIST · IIIEX 2025</span>
          </a>

          {/* 7. Floating Vector Cursor Indicator */}
          <div className="absolute right-12 sm:right-28 top-24 sm:top-32 z-20 pointer-events-none hidden sm:block">
            <svg
              className="w-7 h-7 text-ink drop-shadow-md"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
            <span className="text-[9px] font-mono bg-ink text-white px-1.5 py-0.5 rounded shadow ml-4 -mt-1 inline-block">
              nadhif.select()
            </span>
          </div>

          {/* 8. Right Vertical 48px Software Toolbar */}
          <div
            aria-label="Canvas Tool Palette"
            className="absolute right-0 sm:right-2 md:-right-4 top-28 z-20 hidden sm:flex flex-col items-center bg-panel-dark/95 border border-zinc-700/80 rounded-2xl p-2 shadow-2xl backdrop-blur-sm gap-2.5 w-12"
          >
            {toolbarButtons.map((tool) => {
              const isSelected = activeTool === tool.id;
              return (
                <button
                  key={tool.id}
                  type="button"
                  onClick={() => setActiveTool(tool.id)}
                  aria-label={tool.label}
                  aria-pressed={isSelected}
                  title={tool.label}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-zinc-800 text-white ring-1 ring-white/20'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/70'
                  }`}
                  style={isSelected ? { color: activeLayer.accent } : undefined}
                >
                  {tool.icon}
                </button>
              );
            })}
            <div className="w-6 h-[1px] bg-zinc-700/80 my-0.5" />
            <button
              type="button"
              onClick={onCycleAccent}
              title="Cycle workspace theme accent"
              aria-label="Cycle workspace theme accent"
              className="relative w-6 h-6 cursor-pointer group"
            >
              <span
                className="w-4 h-4 border border-white absolute top-0 left-0 z-10 block transition-colors"
                style={{ backgroundColor: activeLayer.accent }}
              />
              <span className="w-4 h-4 bg-ink border border-zinc-500 absolute bottom-0 right-0 block" />
            </button>
          </div>

          {/* 9. Bottom-Right Terminal Manifesto Window (CTRL + CREATE) */}
          <div className="hidden sm:block absolute sm:right-2 md:right-4 -bottom-4 sm:bottom-0 z-20 w-[260px] md:w-[325px] rounded-2xl bg-panel-dark border-2 border-zinc-700 shadow-2xl p-4 text-white font-sans">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <span
                className="font-mono text-[10px] tracking-wider font-bold px-2 py-0.5 rounded border"
                style={{
                  color: activeLayer.accent,
                  borderColor: `${activeLayer.accent}55`,
                  backgroundColor: `${activeLayer.accent}18`,
                }}
              >
                CTRL + CREATE
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              &ldquo;Engineering logic meets visual storytelling. You don&apos;t need a degree to design the future. Just curiosity, consistency &amp; the courage to keep creating.&rdquo;
            </p>
            <div className="mt-3.5 pt-3 border-t border-zinc-800/80 font-mono text-[11px] space-y-1">
              <div className="font-bold" style={{ color: activeLayer.accent }}>
                » Keep Building.
              </div>
              <div className="text-sky-400">» Keep Designing.</div>
              <div className="text-zinc-400">» Keep Innovating.</div>
            </div>
          </div>

          {/* 10. Bottom-Left Interactive WORKSPACE_LAYERS Window */}
          <div
            id="workspace-layers-panel"
            className="hidden sm:block absolute sm:left-2 md:-left-6 -bottom-8 sm:-bottom-4 z-30 w-[270px] md:w-[305px] rounded-2xl bg-panel-dark/95 border-2 border-zinc-700 shadow-2xl p-3.5 text-white backdrop-blur-md"
          >
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-[10px] font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full transition-colors"
                  style={{ backgroundColor: activeLayer.accent }}
                />
                <span className="font-bold text-zinc-200">WORKSPACE_LAYERS</span>
              </div>
              <span className="text-[9px] bg-zinc-800 px-1.5 py-0.5 rounded">5 MODES</span>
            </div>
            <p className="text-[10px] text-zinc-400 my-2 font-mono">
              Select a focus layer to switch workspace accent:
            </p>
            <div className="space-y-1.5 text-xs font-mono">
              {focusLayers.map((layer) => {
                const isActive = layer.id === activeLayer.id;
                return (
                  <button
                    key={layer.id}
                    type="button"
                    onClick={() => onSelectLayer(layer)}
                    aria-pressed={isActive}
                    className={`w-full flex items-center justify-between p-1.5 rounded border text-left transition-all duration-150 cursor-pointer ${
                      isActive
                        ? 'bg-zinc-800/95 text-white'
                        : 'bg-zinc-900/60 border-transparent text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                    }`}
                    style={isActive ? { borderColor: layer.accent } : undefined}
                  >
                    <span className="flex items-center gap-2 min-w-0">
                      <span className={`w-2 h-2 rounded-full shrink-0 ${layer.dotColor}`} />
                      <span className="truncate">
                        {layer.index}. {layer.title}
                      </span>
                    </span>
                    <Eye
                      className="w-3.5 h-3.5 shrink-0 ml-2"
                      style={{ color: isActive ? layer.accent : '#71717A' }}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* 11. Bottom Vector Pen Tool Badge */}
          <div className="hidden lg:block absolute left-28 bottom-24 z-10">
            <div className="border border-ink/35 bg-white/95 p-2 rounded-lg shadow-sm flex items-center gap-2">
              <div className="w-7 h-7 bg-ink text-white rounded flex items-center justify-center">
                <PenTool className="w-3.5 h-3.5" aria-hidden="true" />
              </div>
              <div className="leading-tight text-[10px] font-mono">
                <span className="text-ink/60 block">LOGIC IS THINKING</span>
                <span className="font-bold" style={{ color: activeLayer.accent }}>
                  MADE INTERACTIVE.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Interactive Focus Layer Selector (visible < sm where floating panels collapse) */}
        <div className="sm:hidden mt-6 space-y-4">
          <div className="rounded-2xl bg-panel-dark border-2 border-zinc-700 p-4 text-white">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-[10px] font-mono text-zinc-400 mb-2">
              <span className="font-bold text-zinc-200">WORKSPACE_LAYERS</span>
              <span>5 MODES</span>
            </div>
            <div className="grid grid-cols-1 gap-1.5 text-xs font-mono">
              {focusLayers.map((layer) => {
                const isActive = layer.id === activeLayer.id;
                return (
                  <button
                    key={layer.id}
                    type="button"
                    onClick={() => onSelectLayer(layer)}
                    className={`w-full flex items-center justify-between p-2 rounded border text-left ${
                      isActive
                        ? 'bg-zinc-800 text-white'
                        : 'bg-zinc-900/60 border-transparent text-zinc-400'
                    }`}
                    style={isActive ? { borderColor: layer.accent } : undefined}
                  >
                    <span className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${layer.dotColor}`} />
                      <span>
                        {layer.index}. {layer.title}
                      </span>
                    </span>
                    <Eye className="w-3.5 h-3.5" style={{ color: layer.accent }} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Layer Live Summary Strip */}
        <div className="mt-10 sm:mt-14 p-4 rounded-xl bg-white border-2 border-ink shadow-brutal-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="font-mono text-[11px] font-bold uppercase tracking-wider" style={{ color: activeLayer.accent }}>
              Active Focus Layer {activeLayer.index} · {activeLayer.title}
            </div>
            <p className="text-xs sm:text-sm text-zinc-700">{activeLayer.summary}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0 font-mono text-xs text-ink/70">
            <span>{activeLayer.stack.join(' · ')}</span>
            <a
              href={activeLayer.targetSection}
              className="px-3 py-1.5 rounded-lg text-white font-bold flex items-center gap-1 whitespace-nowrap transition-opacity hover:opacity-90"
              style={{ backgroundColor: activeLayer.accent }}
            >
              <span>Explore</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Hero Bottom Status Strip */}
        <div className="mt-8 pt-6 border-t-2 border-ink/10 grid grid-cols-1 md:grid-cols-4 gap-4 items-center font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="text-ink/50 text-[10px]">DIRECT_CONTACT</span>
            <a
              className="font-bold text-ink hover:text-cobalt transition-colors flex items-center gap-1"
              href="https://wa.me/6282289480199"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>+62 822-8948-0199</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
          <div className="md:col-span-2 text-ink/80 text-[11px] leading-relaxed">
            Informatics Engineering Undergraduate at{' '}
            <span className="font-bold text-ink">Institut Teknologi PLN</span> (Jakarta). Bridging computational thinking with cutting-edge visual craft.
          </div>
          <div className="flex items-center justify-start md:justify-end gap-2">
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center text-white font-bold text-xs transition-colors"
              style={{ backgroundColor: activeLayer.accent }}
            >
              N
            </div>
            <div className="leading-none text-left">
              <span className="block font-bold text-ink text-[11px]">nadhif.alfatih</span>
              <span className="block text-[9px] text-ink/50">STUDIO PORTFOLIO &apos;26</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
