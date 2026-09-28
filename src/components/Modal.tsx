import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Tag from './Tag';
import { CardItem } from '../types';

interface ModalProps {
  item: CardItem | null;
  onClose: () => void;
}

export default function Modal({ item, onClose }: ModalProps) {
  const [slide, setSlide] = useState(0);
  const [touchX, setTouchX] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setSlide(0);
    setFailedImages({});
  }, [item]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!item) return;
      const total = item.images?.length ?? 0;
      if (total < 2) return;
      if (e.key === 'ArrowLeft') setSlide((s) => (s - 1 + total) % total);
      if (e.key === 'ArrowRight') setSlide((s) => (s + 1) % total);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, item]);

  useEffect(() => {
    document.body.style.overflow = item ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [item]);

  if (!item) return null;

  const imgs = item.images ?? [];
  const links = item.links ?? [];
  const total = imgs.length;

  const go = (dir: number) => {
    if (total < 2) return;
    setSlide((s) => (s + dir + total) % total);
  };

  const handleImageError = (index: number) => {
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-5"
      style={{ background: 'rgba(61,0,48,.82)', backdropFilter: 'blur(10px)', animation: 'fadeIn .25s ease' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-[740px] overflow-y-auto rounded-t-[26px] border-2 border-[#e91e8c]/35 bg-white pb-[calc(1.5rem+env(safe-area-inset-bottom))] transition-colors duration-300 dark:bg-[#130010] sm:rounded-[26px]"
        style={{ boxShadow: '0 0 60px rgba(233,30,140,.28)', animation: 'fadeUp .3s ease both' }}
      >
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm dark:bg-[#130010]/95">
          <div className="h-[5px] rounded-t-[24px]" style={{ background: 'linear-gradient(90deg,#e91e8c,#ffd700,#ff85c8)' }} />
          <div className="sheet-handle sm:hidden" />
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup popup"
          className="absolute right-3.5 top-4 z-30 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border-[1.5px] border-[#ffd6ec] bg-white text-[13px] font-bold text-[#8b1a5e] shadow-sm transition-all hover:border-[#e91e8c] hover:bg-[#fff0f7] hover:text-[#e91e8c] dark:border-[#e91e8c]/30 dark:bg-[#1a0015] dark:text-[#f3c2de]"
        >
          ✕
        </button>

        {/* Image Gallery / Carousel */}
        {total > 0 && (
          <div className="px-4 pt-4 sm:px-6 sm:pt-5">
            <div
              className="relative overflow-hidden rounded-[16px] border border-[#ffd6ec] bg-[#fff0f7] dark:border-[#e91e8c]/25 dark:bg-[#1a0015]"
              onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
              onTouchEnd={(e) => {
                if (touchX == null) return;
                const dx = e.changedTouches[0].clientX - touchX;
                if (dx > 40) go(-1);
                if (dx < -40) go(1);
                setTouchX(null);
              }}
            >
              {/* Photo Counter Pill & Fullscreen Button */}
              <div className="absolute left-3 top-3 z-10 flex items-center gap-2">
                <span className="rounded-full bg-black/65 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                  {slide + 1} / {total}
                </span>
                {imgs[slide]?.url && !failedImages[slide] && (
                  <a
                    href={imgs[slide].url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 rounded-full bg-black/65 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-md transition-colors hover:bg-[#e91e8c]"
                    title="Buka gambar ukuran penuh di tab baru"
                  >
                    Buka Penuh ↗
                  </a>
                )}
              </div>

              {imgs.map((img, i) => (
                <div key={img.url + i} className={i === slide ? 'block' : 'hidden'}>
                  {failedImages[i] ? (
                    <div className="flex h-56 w-full flex-col items-center justify-center p-6 text-center">
                      <span className="text-3xl">🖼️</span>
                      <p className="mt-2 text-xs font-semibold text-[#8b1a5e] dark:text-[#f3c2de]">
                        Foto belum ditemukan di path: <code className="rounded bg-black/10 px-1 py-0.5 text-[11px]">{img.url}</code>
                      </p>
                      <p className="mt-1 text-[11px] text-[#b06090]">
                        Pastikan file sudah diletakkan di dalam folder <code>public/projects/</code>
                      </p>
                    </div>
                  ) : (
                    <img
                      src={img.url}
                      alt={img.caption ?? item.name}
                      onError={() => handleImageError(i)}
                      className="mx-auto max-h-[42vh] w-full object-contain sm:max-h-[50vh]"
                    />
                  )}
                  {img.caption && (
                    <p className="border-t border-[#ffd6ec]/60 bg-white/70 px-4 py-2.5 text-center text-[12px] font-medium text-[#612147] backdrop-blur-sm dark:border-[#e91e8c]/20 dark:bg-[#130010]/80 dark:text-[#f3c2de]">
                      {img.caption}
                    </p>
                  )}
                </div>
              ))}

              {/* Prev / Next navigation buttons */}
              {total > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Foto sebelumnya"
                    className="absolute left-2.5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-xl font-bold text-white backdrop-blur-sm transition-all hover:bg-[#e91e8c] hover:scale-105"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Foto berikutnya"
                    className="absolute right-2.5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-xl font-bold text-white backdrop-blur-sm transition-all hover:bg-[#e91e8c] hover:scale-105"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail dots */}
            {total > 1 && (
              <div className="mt-2.5 flex justify-center gap-1.5 pb-1">
                {imgs.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Pindah ke foto ${i + 1}`}
                    onClick={() => setSlide(i)}
                    className="h-2 rounded-full transition-all duration-200"
                    style={{
                      width: i === slide ? '18px' : '7px',
                      background: i === slide ? '#e91e8c' : 'rgba(233,30,140,.3)',
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Content Body */}
        <div className="relative px-5 pb-0 pt-5 sm:px-6">
          <div className="mb-3 flex flex-wrap gap-2 pr-12">
            {item.tags.map((t) => (
              <Tag key={t.label} {...t} />
            ))}
          </div>
          <h2 className="mb-1 font-display text-[20px] font-black leading-snug tracking-tight text-[#3d0030] dark:text-[#fff0f7] sm:text-[24px]">
            {item.name}
          </h2>
          <div className="mb-1 text-[13.5px] font-bold text-[#c2185b] dark:text-[#ff85c8]">{item.org}</div>
          <div className="mb-4 text-[12px] font-semibold text-[#8b1a5e] dark:text-[#f3c2de]">✦ {item.period}</div>
        </div>

        <div className="mx-5 h-[1.5px] sm:mx-6" style={{ background: 'linear-gradient(90deg,transparent,#e91e8c,#ffd700,transparent)' }} />

        {/* Bullet Points */}
        <div className="px-5 py-5 sm:px-6">
          <div className="mb-2 text-[10.5px] font-extrabold uppercase tracking-[2px] text-[#e91e8c] dark:text-[#ff85c8]">
            Rincian & Tanggung Jawab
          </div>
          <ul className="flex flex-col gap-3">
            {item.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[13.5px] leading-[1.75] text-[#55163e] dark:text-[#f5c7e1] sm:text-[14px]">
                <span className="mt-[2px] flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#ffd6ec] text-[10px] font-bold text-[#e91e8c] dark:bg-[#2a001f] dark:text-[#ff85c8]">
                  ✓
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Links (GitHub, Website, Demo) */}
        {links.length > 0 && (
          <div className="flex flex-wrap gap-3 px-5 pb-4 sm:px-6">
            {links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#e91e8c] px-5 py-2.5 text-[13px] font-extrabold text-white transition-all hover:-translate-y-0.5 hover:bg-[#d81b60]"
                style={{ boxShadow: '0 4px 16px rgba(233,30,140,.35)' }}
              >
                <span>{l.icon || '🔗'}</span>
                <span>{l.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
