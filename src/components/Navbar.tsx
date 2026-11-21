import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  activeAccent: string;
  onOpenInquiry: () => void;
}

const NAV_ITEMS = [
  { id: 'about', label: '01. About', href: '#about' },
  { id: 'neuro-dawn', label: '02. Neuro Dawn', href: '#neuro-dawn' },
  { id: 'skills', label: '03. Skills', href: '#skills' },
  { id: 'experience', label: '04. Track', href: '#experience' },
  { id: 'connect', label: '05. Connect', href: '#connect' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  activeAccent,
  onOpenInquiry,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-[#F8F9FA]/92 backdrop-blur-md border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Identifier */}
        <a
          href="#top"
          className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt rounded"
        >
          <span
            className="w-3.5 h-3.5 shadow-sm transition-colors duration-200 block"
            style={{ backgroundColor: activeAccent }}
          />
          <span className="leading-none block">
            <span className="block text-[11px] font-mono font-bold tracking-widest text-ink uppercase">
              INFORMATICS &amp; VFX
            </span>
            <span className="block text-[9px] font-mono text-ink/60 uppercase">
              CREATIVE DEVELOPER
            </span>
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-ink/75"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`whitespace-nowrap shrink-0 transition-colors duration-150 py-1 border-b-2 ${
                  isActive
                    ? 'text-ink font-bold'
                    : 'border-transparent hover:text-cobalt'
                }`}
                style={isActive ? { borderColor: activeAccent, color: activeAccent } : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Location Meta & Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono bg-white border border-ink/15 px-2.5 py-1 rounded whitespace-nowrap shrink-0">
            <span className="text-ink/80">PALEMBANG · JAKARTA</span>
            <span className="text-ink/35">|</span>
            <span className="font-bold" style={{ color: activeAccent }}>
              IT-PLN &apos;26
            </span>
          </div>
          <button
            type="button"
            onClick={onOpenInquiry}
            className="text-xs font-mono bg-ink text-white px-3.5 py-2 rounded hover:bg-cobalt transition-colors duration-150 flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt"
          >
            <span>HIRE ME</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
};
