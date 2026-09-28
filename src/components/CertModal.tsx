import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { CertItem } from '../types';

interface CertModalProps {
  cert: CertItem | null;
  onClose: () => void;
}

export default function CertModal({ cert, onClose }: CertModalProps) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [cert]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = cert ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [cert]);

  if (!cert) return null;

  const rawImage = cert.image?.trim();
  const rawPdf = cert.pdf?.trim();
  const pdfFile = rawPdf || (rawImage?.toLowerCase().endsWith('.pdf') ? rawImage : null);
  const imageFile = !pdfFile && rawImage ? rawImage : null;
  const link = cert.link?.trim();
  const hasImage = Boolean(imageFile && !imgError);

  return createPortal(
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-5"
      style={{ background: 'rgba(61,0,48,.82)', backdropFilter: 'blur(10px)', animation: 'fadeIn .25s ease' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative max-h-[94vh] w-full max-w-[640px] overflow-y-auto rounded-t-[26px] border-2 border-[#ffd700]/50 bg-white pb-[calc(1.5rem+env(safe-area-inset-bottom))] transition-colors duration-300 dark:bg-[#130010] sm:rounded-[26px]"
        style={{ boxShadow: '0 0 60px rgba(255,215,0,.25)', animation: 'fadeUp .3s ease both' }}
      >
        <div className="h-[5px] rounded-t-[24px]" style={{ background: 'linear-gradient(90deg,#ffd700,#e91e8c,#ffd700)' }} />
        <div className="sheet-handle sm:hidden" />
        
        <div className="relative px-5 pb-6 pt-4 sm:px-6 sm:pt-6">
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup"
            className="absolute right-3.5 top-4 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border-[1.5px] border-[#ffd6ec] bg-white text-[13px] font-bold text-[#8b1a5e] transition-all hover:border-[#e91e8c] hover:bg-[#fff0f7] hover:text-[#e91e8c] dark:border-[#e91e8c]/30 dark:bg-[#1a0015] dark:text-[#f3c2de]"
          >
            ✕
          </button>

          <div className="mb-1 text-[10.5px] font-extrabold uppercase tracking-[2px] text-[#b8860b] dark:text-[#ffd700]">
            ✦ Sertifikasi & Pelatihan
          </div>
          <h2 className="mb-1 pr-12 font-display text-[18px] font-black leading-snug tracking-tight text-[#3d0030] dark:text-[#fff0f7] sm:text-[21px]">
            {cert.title}
          </h2>
          {cert.issuer && (
            <div className="mb-2 text-[12.5px] font-bold text-[#e91e8c] dark:text-[#ff85c8]">{cert.issuer}</div>
          )}

          <div className="mb-4 mt-3 h-[1.5px]" style={{ background: 'linear-gradient(90deg,transparent,#ffd700,#e91e8c,transparent)' }} />

          {/* Certificate Viewer Area */}
          <div className="relative flex min-h-[180px] flex-col items-center justify-center overflow-hidden rounded-[16px] border-2 border-[#ffd6ec] bg-gradient-to-br from-[#fff0f7] to-[#ffd6ec]/40 p-3 text-center dark:border-[#e91e8c]/25 dark:from-[#1a0015] dark:to-[#0a0008] sm:min-h-[220px] sm:p-4">
            {pdfFile ? (
              <div className="w-full">
                <div className="h-[52vh] sm:h-[58vh] w-full overflow-hidden rounded-[14px] border border-[#ffd6ec] bg-white shadow-inner dark:border-[#e91e8c]/25">
                  <iframe
                    src={`${pdfFile}#view=FitH`}
                    title={cert.title}
                    className="h-full w-full rounded-[14px]"
                  />
                </div>
                <div className="mt-3 flex flex-wrap items-center justify-center gap-2.5">
                  <a
                    href={pdfFile}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#e91e8c] px-4 py-2 text-[12px] font-bold text-white shadow-sm transition-transform hover:scale-105 active:scale-95"
                  >
                    <span>📄 Buka PDF di Tab Baru ↗</span>
                  </a>
                  <a
                    href={pdfFile}
                    download={`${cert.key}.pdf`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#ffd6ec] bg-white px-4 py-2 text-[12px] font-bold text-[#880e4f] shadow-sm transition-transform hover:scale-105 active:scale-95 dark:border-[#e91e8c]/30 dark:bg-[#1a0015] dark:text-[#ff85c8]"
                  >
                    <span>⬇ Unduh Dokumen</span>
                  </a>
                </div>
              </div>
            ) : hasImage ? (
              <div className="group relative w-full">
                <img
                  src={imageFile!}
                  alt={cert.title}
                  onError={() => setImgError(true)}
                  className="max-h-[50vh] w-full rounded-[12px] object-contain shadow-sm sm:max-h-[55vh]"
                />
                <a
                  href={imageFile!}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-4 py-1.5 text-[11.5px] font-bold text-white backdrop-blur-md transition-colors hover:bg-[#e91e8c]"
                >
                  🔍 Buka Ukuran Penuh ↗
                </a>
              </div>
            ) : (
              <div className="py-4">
                <div className="mb-2 text-5xl">🏆</div>
                <p className="font-display text-[15px] font-bold text-[#3d0030] dark:text-[#fff0f7]">
                  {cert.title}
                </p>
                <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[#ffd6ec] bg-white/80 px-3 py-1 text-[11.5px] font-semibold text-[#8b1a5e] dark:border-[#e91e8c]/30 dark:bg-white/10 dark:text-[#f3c2de]">
                  📸 Dokumen sertifikat belum diunggah
                </div>
                <p className="mt-2 max-w-sm text-[11.5px] leading-relaxed text-[#612147] dark:text-[#e8a7cd]">
                  Simpan file dokumen di folder <code className="rounded bg-black/10 px-1 py-0.5 text-[10.5px]">public/certs/</code> lalu daftarkan path-nya di <code className="rounded bg-black/10 px-1 py-0.5 text-[10.5px]">src/data/data.ts</code>
                </p>
              </div>
            )}
          </div>

          {/* Verification Link */}
          {link && link !== pdfFile && (
            <div className="mt-4 flex justify-center sm:justify-start">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-[#e91e8c] to-[#c2185b] px-6 py-2.5 text-[13px] font-extrabold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{ boxShadow: '0 4px 16px rgba(233,30,140,.35)' }}
              >
                <span>📜</span>
                <span>Verifikasi Sertifikat Resmi ↗</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
