import React, { useState } from 'react';
import { X, ArrowUpRight, Check, Copy } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeAccent: string;
}

const SCOPES = [
  'Web Engineering & UI',
  'VFX / Motion Graphics (Ae/Pr)',
  'AI / Biomedical Research',
  'Competitive Programming / Tutoring',
];

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  activeAccent,
}) => {
  const [name, setName] = useState('');
  const [selectedScope, setSelectedScope] = useState(SCOPES[0]);
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const formattedMessage = `Hi Nadhif, my name is ${name.trim() || 'a collaborator'}. I would like to discuss a ${selectedScope} project.${
    notes.trim() ? `\n\nProject Brief:\n${notes.trim()}` : ''
  }`;

  const whatsappUrl = `https://wa.me/6282289480199?text=${encodeURIComponent(formattedMessage)}`;
  const mailtoUrl = `mailto:nadhif.alfatih2008@gmail.com?subject=${encodeURIComponent(
    `[Portfolio Inquiry] ${selectedScope}`
  )}&body=${encodeURIComponent(formattedMessage)}`;

  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(formattedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback handled by direct action buttons
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div className="w-full max-w-lg rounded-2xl bg-panel-dark border-2 border-zinc-700 shadow-2xl p-6 text-white space-y-5">
        <div className="flex items-start justify-between border-b border-zinc-800 pb-4">
          <div>
            <span className="font-mono text-[11px] text-zinc-400 block">
              DIRECT COLLABORATION BRIEF
            </span>
            <h3 id="inquiry-modal-title" className="text-xl font-bold mt-1">
              Start a Conversation with Nadhif
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close inquiry modal"
            className="p-1.5 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="inquiry-name"
              className="block font-mono text-xs text-zinc-300 mb-1.5"
            >
              Your Name / Organization
            </label>
            <input
              id="inquiry-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Studio / Research Lab / Client Name"
              className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-cobalt"
            />
          </div>

          <div>
            <span className="block font-mono text-xs text-zinc-300 mb-2">
              Project Domain
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SCOPES.map((scope) => {
                const isSelected = selectedScope === scope;
                return (
                  <button
                    key={scope}
                    type="button"
                    onClick={() => setSelectedScope(scope)}
                    className={`px-3 py-2 rounded-lg border text-left font-mono text-xs transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-zinc-800 text-white font-bold'
                        : 'bg-zinc-900/60 border-zinc-700 text-zinc-400 hover:text-white'
                    }`}
                    style={isSelected ? { borderColor: activeAccent } : undefined}
                  >
                    {scope}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label
              htmlFor="inquiry-notes"
              className="block font-mono text-xs text-zinc-300 mb-1.5"
            >
              Brief Summary / Timeline
            </label>
            <textarea
              id="inquiry-notes"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Share key goals, deliverables, or research context..."
              className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-cobalt"
            />
          </div>
        </div>

        <div className="pt-3 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-2.5 font-mono text-xs">
          <button
            type="button"
            onClick={handleCopyBrief}
            className="px-3.5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 flex items-center gap-1.5 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copied Brief</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Text</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2">
            <a
              href={mailtoUrl}
              className="px-3.5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-600"
            >
              Send Email
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-white font-bold flex items-center gap-1"
              style={{ backgroundColor: activeAccent }}
            >
              <span>Send WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
