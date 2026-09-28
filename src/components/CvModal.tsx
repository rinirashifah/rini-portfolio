import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface CvModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CvModal({ open, onClose }: CvModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-5"
      style={{ background: 'rgba(61,0,48,.84)', backdropFilter: 'blur(10px)', animation: 'fadeIn .25s ease' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative flex max-h-[94vh] w-full max-w-[860px] flex-col overflow-hidden rounded-t-[26px] border-2 border-[#ffd700]/50 bg-white pb-[calc(1rem+env(safe-area-inset-bottom))] shadow-2xl transition-colors duration-300 dark:bg-[#130010] sm:rounded-[26px]"
        style={{ boxShadow: '0 0 60px rgba(255,215,0,.25)', animation: 'fadeUp .3s ease both' }}
      >
        {/* Top Header bar */}
        <div className="h-[5px] rounded-t-[24px]" style={{ background: 'linear-gradient(90deg,#ffd700,#e91e8c,#ffd700)' }} />
        <div className="sheet-handle sm:hidden" />

        <div className="flex items-center justify-between border-b border-[#ffd6ec] px-5 py-3.5 dark:border-[#e91e8c]/25 sm:px-6">
          <div className="min-w-0 pr-4">
            <span className="text-[10px] font-extrabold uppercase tracking-[2px] text-[#b8860b] dark:text-[#ffd700]">
              ✦ Pratinjau Dokumen
            </span>
            <h2 className="truncate font-display text-[17px] font-black text-[#3d0030] dark:text-[#fff0f7] sm:text-[20px]">
              Curriculum Vitae & Portofolio
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/cv.pdf"
              download="CV_Rini_Rashifah.pdf"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#ffd700] px-3.5 py-1.5 text-[11.5px] font-extrabold text-[#880e4f] shadow-sm transition-transform hover:scale-105 active:scale-95"
            >
              <span>⬇</span>
              <span className="hidden sm:inline">Unduh PDF</span>
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-[#e91e8c] px-3 py-1.5 text-[11.5px] font-bold text-white transition-transform hover:scale-105 active:scale-95"
            >
              <span>↗</span>
              <span className="hidden sm:inline">Tab Baru</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ffd6ec] bg-white text-xs font-bold text-[#8b1a5e] transition-colors hover:border-[#e91e8c] hover:bg-[#fff0f7] dark:border-[#e91e8c]/30 dark:bg-[#1a0015] dark:text-[#f3c2de]"
            >
              ✕
            </button>
          </div>
        </div>

        {/* PDF Viewer Frame */}
        <div className="flex-1 p-3 sm:p-5">
          <div className="h-[65vh] w-full overflow-hidden rounded-[14px] border border-[#ffd6ec] bg-[#f8f9fa] shadow-inner dark:border-[#e91e8c]/25 dark:bg-[#0a0008] sm:h-[70vh]">
            <iframe
              src="/cv.pdf#view=FitH"
              title="CV Rini Rashifah"
              className="h-full w-full rounded-[14px]"
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-[#612147] dark:text-[#e8a7cd]">
            Tidak dapat melihat dokumen di atas?{' '}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[#e91e8c] hover:underline dark:text-[#ff85c8]"
            >
              Buka langsung di tab baru ↗
            </a>
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}
