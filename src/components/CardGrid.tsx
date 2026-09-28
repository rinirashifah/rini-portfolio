import { useState } from 'react';
import Tag from './Tag';
import { CardItem } from '../types';

interface CardGridProps {
  items: CardItem[];
  onOpen: (item: CardItem) => void;
}

function getProjectIcon(key: string, name: string): string {
  const k = (key + ' ' + name).toLowerCase();
  if (k.includes('gis') || k.includes('bkad') || k.includes('map')) return '🗺️';
  if (k.includes('perpus') || k.includes('buku') || k.includes('library')) return '📚';
  if (k.includes('ujian') || k.includes('exam')) return '📝';
  if (k.includes('science') || k.includes('data') || k.includes('ml')) return '📊';
  if (k.includes('robot') || k.includes('arduino') || k.includes('esp32')) return '🤖';
  if (k.includes('mobile') || k.includes('flutter') || k.includes('android')) return '📱';
  return '💻';
}

function Card({ item, onOpen }: { item: CardItem; onOpen: (item: CardItem) => void }) {
  const [imgError, setImgError] = useState(false);
  const cover = item.images && item.images.length > 0 ? item.images[0].url : null;
  const showImage = Boolean(cover && !imgError);
  const icon = getProjectIcon(item.key, item.name);

  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className="card-bar group flex h-full cursor-pointer flex-col overflow-hidden rounded-[22px] border-2 border-[#ffd6ec] bg-white text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e91e8c] focus-visible:ring-offset-2 dark:border-[#e91e8c]/[0.22] dark:bg-[#1a0015] [@media(hover:hover)]:hover:-translate-y-1 [@media(hover:hover)]:hover:border-[#e91e8c] [@media(hover:hover)]:hover:shadow-[0_16px_40px_rgba(233,30,140,.18)]"
    >
      {/* Thumbnail / Image Area - Uniform across all cards */}
      <div className="relative h-44 w-full flex-shrink-0 overflow-hidden bg-gradient-to-br from-[#ffd6ec]/70 via-[#fff0f7] to-[#ffe9a8]/70 dark:from-[#2a001f] dark:via-[#1a0015] dark:to-[#3d0028] sm:h-48">
        {showImage ? (
          <img
            src={cover!}
            alt={item.name}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-300 [@media(hover:hover)]:group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center">
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-[#ffd6ec] bg-white/80 text-2xl shadow-sm backdrop-blur-sm transition-transform duration-200 [@media(hover:hover)]:group-hover:scale-110 dark:border-[#e91e8c]/30 dark:bg-white/10 sm:text-3xl">
              {icon}
            </div>
            <span className="mt-2 font-display text-[12px] font-bold text-[#e91e8c] dark:text-[#ff85c8] line-clamp-1">
              {item.name}
            </span>
          </div>
        )}

        {/* Multi-image indicator badge */}
        {item.images && item.images.length > 1 && (
          <span className="absolute bottom-2.5 right-2.5 flex items-center gap-1 rounded-full border border-white/20 bg-black/60 px-2.5 py-0.5 text-[10.5px] font-bold text-white backdrop-blur-md">
            📷 {item.images.length} Foto
          </span>
        )}
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
        <div>
          <div className="mb-3 flex flex-wrap gap-1.5 sm:gap-2">
            {item.tags.map((t) => (
              <Tag key={t.label} {...t} />
            ))}
          </div>

          <h3 className="mb-1 font-display text-[16px] font-bold leading-snug text-[#3d0030] transition-colors group-hover:text-[#e91e8c] dark:text-[#fff0f7] dark:group-hover:text-[#ff85c8] sm:text-[18px]">
            {item.name}
          </h3>

          <div className="mb-2 text-[12px] font-bold text-[#c2185b] dark:text-[#ff85c8]">
            {item.org}
          </div>

          <p className="mb-4 text-[13px] leading-[1.7] text-[#612147] transition-colors dark:text-[#e8a7cd] sm:text-[13.5px]">
            {item.desc}
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 border-t-[1.5px] border-dashed border-[#ffd6ec] pt-3 dark:border-[#e91e8c]/20">
          <span className="text-[11.5px] font-semibold text-[#8b1a5e] dark:text-[#f3c2de]">
            ✦ {item.period}
          </span>
          <span className="inline-flex items-center gap-1 text-[12px] font-extrabold text-[#e91e8c] transition-transform [@media(hover:hover)]:group-hover:translate-x-1 dark:text-[#ff85c8]">
            Detail <span>→</span>
          </span>
        </div>
      </div>
    </button>
  );
}

export default function CardGrid({ items, onOpen }: CardGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
      {items.map((item) => (
        <Card key={item.key} item={item} onOpen={onOpen} />
      ))}
    </div>
  );
}
