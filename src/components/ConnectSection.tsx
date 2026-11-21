import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, Send } from 'lucide-react';

interface ConnectSectionProps {
  activeAccent: string;
  onOpenInquiry: () => void;
}

export const ConnectSection: React.FC<ConnectSectionProps> = ({
  activeAccent,
  onOpenInquiry,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('nadhif.alfatih2008@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      window.location.href = 'mailto:nadhif.alfatih2008@gmail.com';
    }
  };

  return (
    <section
      id="connect"
      className="py-24 bg-ink text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-dark-grid opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 mb-6">
          <span>connect_session.sh · AVAILABLE FOR COLLABORATION</span>
        </div>

        <h2 className="font-display uppercase text-5xl sm:text-7xl md:text-8xl tracking-tight text-white leading-none text-balance">
          LET&apos;S BUILD SOMETHING <br />
          <span
            className="font-script text-6xl sm:text-8xl md:text-9xl lowercase inline-block -rotate-2 transition-colors duration-300"
            style={{ color: activeAccent }}
          >
            great
          </span>{' '}
          TOGETHER.
        </h2>

        <p className="text-zinc-400 font-mono text-xs sm:text-base max-w-xl mx-auto mt-6 mb-10">
          Tertarik mendiskusikan rekayasa sistem web, implementasi AI, proyek Visual Effects
          (Ae/Pr), atau kolaborasi riset teknologi? Jalur komunikasi saya selalu terbuka.
        </p>

        {/* Direct CTA Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          <a
            href="https://wa.me/6282289480199"
            rel="noopener noreferrer"
            target="_blank"
            className="px-6 py-3.5 rounded-xl text-white font-mono text-sm font-bold shadow-brutal flex items-center gap-2 transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: activeAccent }}
          >
            <span>WHATSAPP: +62 822-8948-0199</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="px-5 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-sm border border-zinc-600 flex items-center gap-2.5 transition-colors cursor-pointer"
          >
            <span>{copiedEmail ? 'COPIED TO CLIPBOARD' : 'EMAIL DIRECT'}</span>
            <span className="text-zinc-400 hidden sm:inline">nadhif.alfatih2008@gmail.com</span>
            {copiedEmail ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4 text-zinc-400" />
            )}
          </button>

          <button
            type="button"
            onClick={onOpenInquiry}
            className="px-5 py-3.5 rounded-xl bg-white text-ink hover:bg-zinc-200 font-mono text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>COMPOSE PROJECT BRIEF</span>
          </button>
        </div>

        {/* Location & Institution Footer */}
        <footer className="mt-14 pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <div>Kota Palembang, Sumatera Selatan · Institut Teknologi PLN</div>
          <div>© 2026 MUHAMMAD NADHIF AL-FATIH. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-2.5 text-zinc-400">
            <span className="font-bold" style={{ color: activeAccent }}>
              HTML5
            </span>
            <span aria-hidden="true">·</span>
            <span className="text-purple-400 font-bold">VFX COMP</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-400 font-bold">IIIEX GOLD</span>
          </div>
        </footer>
      </div>
    </section>
  );
};
