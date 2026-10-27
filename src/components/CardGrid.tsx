import { useState } from 'react';
import Tag from './Tag';
import { CardItem } from '../types';

interface CardGridProps {
  items: CardItem[];
  onOpen: (item: CardItem) => void;
  showFilters?: boolean;
}

function Card({ item, onOpen }: { item: CardItem; onOpen: (item: CardItem) => void }) {
  const [viewMode, setViewMode] = useState<'widget' | 'photo'>('widget');
  const [imgError, setImgError] = useState(false);

  const hasImages = Boolean(item.images && item.images.length > 0);
  const cover = hasImages ? item.images[0].url : null;
  const hasWidget = Boolean(item.widget);

  // If no widget, default to photo view
  const currentView = hasWidget ? viewMode : 'photo';

  const widget = item.widget;

  return (
    <div className="card-bar group flex h-full flex-col overflow-hidden rounded-[26px] border-2 border-[#fcd5e8] bg-white text-left shadow-[0_8px_30px_rgba(233,30,140,0.06)] transition-all duration-300 dark:border-[#e91e8c]/25 dark:bg-[#180016] dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)] [@media(hover:hover)]:hover:-translate-y-1 [@media(hover:hover)]:hover:border-[#e91e8c] [@media(hover:hover)]:hover:shadow-[0_18px_45px_rgba(233,30,140,0.18)]">
      {/* Top Preview Area matching Image 1 */}
      <div className="relative h-[220px] sm:h-[235px] w-full flex-shrink-0 overflow-hidden bg-gradient-to-b from-[#ffedf3] via-[#fff5f8] to-[#ffedf3] p-3.5 sm:p-4.5 dark:from-[#2a0020] dark:via-[#1e0017] dark:to-[#2a0020]">
        {/* Top Badges Row */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          {/* Top Left Floating Pill */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-white/95 px-3 py-1 text-[11px] font-bold text-[#442337] shadow-xs backdrop-blur-md dark:border-pink-900/40 dark:bg-[#12000f]/90 dark:text-[#ffb3dc]">
            {widget?.topPillLeft ? (
              <span>{widget.topPillLeft}</span>
            ) : (
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-[#e91e8c]" />
                {item.category || 'Portfolio'}
              </span>
            )}
          </div>

          {/* Top Right Floating Pill & View Toggle */}
          <div className="flex items-center gap-1.5">
            {hasImages && hasWidget && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setViewMode((v) => (v === 'widget' ? 'photo' : 'widget'));
                }}
                title={viewMode === 'widget' ? 'Lihat Foto Asli' : 'Lihat Widget Mockup'}
                className="cursor-pointer rounded-full border border-pink-200/80 bg-white/90 px-2 py-0.5 text-[10px] font-extrabold text-[#be123c] shadow-xs transition-colors hover:bg-pink-50 active:scale-95 dark:border-pink-900/40 dark:bg-[#12000f] dark:text-[#ff85c8]"
              >
                {viewMode === 'widget' ? '🖼️ Foto' : '📱 Widget'}
              </button>
            )}

            <button
              type="button"
              onClick={() => onOpen(item)}
              className="inline-flex cursor-pointer items-center gap-1 rounded-full border border-pink-200/80 bg-white/95 px-3 py-1 text-[11px] font-bold text-[#442337] shadow-xs backdrop-blur-md transition-colors hover:border-[#e91e8c] hover:text-[#e91e8c] dark:border-pink-900/40 dark:bg-[#12000f]/90 dark:text-[#ffb3dc]"
            >
              {widget?.topPillRight ? (
                <span>{widget.topPillRight}</span>
              ) : hasImages ? (
                <span>📷 {item.images.length} Foto Lampiran</span>
              ) : (
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Live Verified
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Center Content: Mockup Widget OR Real Photo */}
        <div
          onClick={() => onOpen(item)}
          className="relative mt-2.5 flex h-[142px] sm:h-[150px] w-full cursor-pointer items-center justify-center"
        >
          {currentView === 'widget' && widget ? (
            /* Widget Mockup Card matching Image 1 */
            <div className="w-full max-w-[345px] rounded-2xl border border-[#fce4ee] bg-white p-3 shadow-[0_4px_16px_rgba(233,30,140,0.06)] transition-transform duration-200 group-hover:scale-[1.01] dark:border-pink-950/60 dark:bg-[#130010]">
              {/* Row 1: Title & Badge */}
              <div className="flex items-center justify-between gap-2 border-b border-pink-100/60 pb-2 dark:border-pink-950/50">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 truncate text-[12.5px] font-bold text-gray-800 dark:text-gray-100">
                    <span className="truncate">{widget.title}</span>
                  </div>
                  {widget.subtitle && (
                    <div className="truncate text-[10.5px] font-medium text-gray-500 dark:text-gray-400">
                      {widget.subtitle}
                    </div>
                  )}
                </div>

                {widget.badge && (
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-extrabold ${
                      widget.badgeColor === 'red'
                        ? 'bg-rose-100/80 text-[#be123c] dark:bg-rose-950/50 dark:text-rose-300'
                        : widget.badgeColor === 'blue'
                        ? 'bg-sky-100 text-[#0284c7] dark:bg-sky-950/50 dark:text-sky-300'
                        : widget.badgeColor === 'purple'
                        ? 'bg-purple-100 text-[#7e22ce] dark:bg-purple-950/50 dark:text-purple-300'
                        : 'bg-[#d1fae5] text-[#059669] dark:bg-emerald-950/50 dark:text-emerald-300'
                    }`}
                  >
                    {widget.badge}
                  </span>
                )}
              </div>

              {/* Row 2: Secondary Info & Validation Tag */}
              <div className="my-2 flex items-center justify-between gap-2 rounded-xl bg-[#fff8fb] px-2.5 py-1.5 dark:bg-[#1f0219]">
                <span className="truncate font-mono text-[11px] font-medium text-gray-700 dark:text-gray-300">
                  {widget.subline1 || 'Sistem Terintegrasi & Siap Pakai'}
                </span>
                {widget.tag1 && (
                  <span className="shrink-0 rounded-md border border-rose-200 bg-rose-50 px-2 py-0.5 text-[9.5px] font-extrabold text-[#be123c] dark:border-rose-900/50 dark:bg-rose-950/40 dark:text-rose-300">
                    {widget.tag1}
                  </span>
                )}
              </div>

              {/* Row 3: Meta Left & Meta Right */}
              <div className="flex items-center justify-between text-[10.5px]">
                <span className="flex items-center gap-1 font-medium text-gray-600 dark:text-gray-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="truncate">{widget.metaLeft || 'Database Connected'}</span>
                </span>
                <span className="font-extrabold text-[#be123c] dark:text-[#ff85c8]">
                  {widget.metaRight || 'Online'}
                </span>
              </div>
            </div>
          ) : hasImages && !imgError ? (
            /* Screenshot Cover View */
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-pink-200/70 shadow-sm dark:border-pink-900/40">
              <img
                src={cover!}
                alt={item.name}
                onError={() => setImgError(true)}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-2.5">
                <span className="text-[11px] font-bold text-white drop-shadow-sm line-clamp-1">
                  🔍 Klik untuk memperbesar foto
                </span>
              </div>
            </div>
          ) : (
            /* Fallback Icon Box */
            <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl border border-dashed border-pink-200 bg-white/70 p-4 text-center dark:border-pink-900/40 dark:bg-[#12000f]/80">
              <div className="text-3xl">💻</div>
              <span className="mt-1 font-display text-[12px] font-bold text-[#e91e8c] dark:text-[#ff85c8]">
                {item.name}
              </span>
            </div>
          )}
        </div>

        {/* Bottom Bar inside Preview Area */}
        <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between text-[10px]">
          <span className="rounded-md border border-pink-200/80 bg-white/90 px-2 py-0.5 font-mono text-[#612147] backdrop-blur-sm dark:border-pink-900/40 dark:bg-[#12000f]/90 dark:text-[#ffb3dc]">
            {widget?.version || 'v2.4.0-stable'}
          </span>
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e91e8c]" />
            <span className="h-1.5 w-1.5 rounded-full bg-pink-300 dark:bg-pink-900" />
            <span className="h-1.5 w-1.5 rounded-full bg-pink-300 dark:bg-pink-900" />
          </div>
        </div>
      </div>

      {/* Content Area matching Image 1 */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          {/* Tech Badges Row */}
          <div className="mb-3.5 flex flex-wrap gap-1.5 sm:gap-2">
            {item.tags.map((t) => (
              <Tag key={t.label} {...t} />
            ))}
          </div>

          {/* Job Title / Project Name in Serif Font */}
          <h3
            onClick={() => onOpen(item)}
            className="font-display mb-1.5 cursor-pointer text-[19px] sm:text-[21px] font-bold leading-snug text-[#23081c] transition-colors group-hover:text-[#e91e8c] dark:text-[#fff0f7] dark:group-hover:text-[#ff85c8]"
          >
            {item.name}
          </h3>

          {/* Organization / Company in Bold Dark Red */}
          <div className="mb-3 flex items-center gap-1.5 text-[12.5px] font-bold text-[#be123c] dark:text-[#ff85c8]">
            <span>🏛</span>
            <span>{item.org}</span>
          </div>

          {/* Description Paragraph */}
          <p className="mb-4 text-[13px] sm:text-[13.5px] leading-[1.7] text-[#553549] dark:text-[#e0b8cf]">
            {item.desc}
          </p>

          {/* Bottom Highlight Pills matching Image 1 */}
          {item.highlights && item.highlights.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {item.highlights.map((h, i) => (
                <span
                  key={h}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#f5e3d3] bg-[#fdf6f0] px-3 py-1.5 text-[11px] font-bold text-[#5c3e32] transition-colors dark:border-pink-900/40 dark:bg-[#22071d] dark:text-[#f8bbd9]"
                >
                  <span>{i === 0 ? '🛡️' : i === 1 ? '🗺️' : i === 2 ? '⚡' : '✦'}</span>
                  <span>{h}</span>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Card Footer with Period and Detail Button */}
        <div className="flex items-center justify-between gap-3 border-t-[1.5px] border-dashed border-[#ffd6ec] pt-3.5 dark:border-[#e91e8c]/20">
          <span className="text-[11.5px] font-semibold text-[#8b1a5e] dark:text-[#f3c2de]">
            ✦ {item.period}
          </span>
          <button
            type="button"
            onClick={() => onOpen(item)}
            className="inline-flex cursor-pointer items-center gap-1 text-[12.5px] font-extrabold text-[#e91e8c] transition-transform [@media(hover:hover)]:group-hover:translate-x-1.5 dark:text-[#ff85c8]"
          >
            <span>Detail & Galeri</span>
            {hasImages && <span>({item.images.length})</span>}
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CardGrid({ items, onOpen, showFilters = true }: CardGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [sortOrder, setSortOrder] = useState<'latest' | 'oldest'>('latest');

  // Available categories based on items or predefined tabs matching Image 1
  const categories = [
    'Semua',
    'Mobile (Flutter)',
    'Fullstack & Web',
    'Data Science & AI',
    'IoT & Embedded',
  ];

  // Filter items by category
  const filtered = items.filter((item) => {
    if (activeCategory === 'Semua') return true;
    if (item.category === activeCategory) return true;

    // Fallback tag-based matching if category field isn't set
    const keyStr = (item.key + ' ' + item.name + ' ' + item.tags.map((t) => t.label).join(' ')).toLowerCase();
    if (activeCategory === 'Mobile (Flutter)') {
      return keyStr.includes('flutter') || keyStr.includes('mobile') || keyStr.includes('bkad') || keyStr.includes('closet');
    }
    if (activeCategory === 'Fullstack & Web') {
      return keyStr.includes('react') || keyStr.includes('next') || keyStr.includes('photobooth') || keyStr.includes('yayasan') || keyStr.includes('web') || keyStr.includes('odoo');
    }
    if (activeCategory === 'Data Science & AI') {
      return keyStr.includes('science') || keyStr.includes('data') || keyStr.includes('machine') || keyStr.includes('vinix');
    }
    if (activeCategory === 'IoT & Embedded') {
      return keyStr.includes('arduino') || keyStr.includes('esp32') || keyStr.includes('robot') || keyStr.includes('latihhobi');
    }
    return true;
  });

  // Sort items
  const sorted = [...filtered].sort((a, b) => {
    if (sortOrder === 'oldest') {
      return a.period.localeCompare(b.period);
    }
    return b.period.localeCompare(a.period);
  });

  return (
    <div>
      {/* Top Filter and Sort Bar matching Image 1 */}
      {showFilters && (
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {categories.map((cat) => {
              const count =
                cat === 'Semua'
                  ? items.length
                  : items.filter((it) => {
                      if (it.category === cat) return true;
                      const k = (it.key + ' ' + it.name + ' ' + it.tags.map((t) => t.label).join(' ')).toLowerCase();
                      if (cat === 'Mobile (Flutter)') return k.includes('flutter') || k.includes('closet') || k.includes('bkad');
                      if (cat === 'Fullstack & Web') return k.includes('react') || k.includes('next') || k.includes('photobooth') || k.includes('yayasan');
                      if (cat === 'Data Science & AI') return k.includes('data') || k.includes('science') || k.includes('vinix');
                      if (cat === 'IoT & Embedded') return k.includes('arduino') || k.includes('robot') || k.includes('latihhobi');
                      return false;
                    }).length;

              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`cursor-pointer rounded-full px-3.5 py-1.5 text-[12px] font-bold transition-all duration-200 active:scale-95 ${
                    isActive
                      ? 'bg-[#e91e8c] text-white shadow-md shadow-[#e91e8c]/30'
                      : 'border border-pink-200/70 bg-[#fdeef5] text-[#553549] hover:bg-[#fcdde9] hover:text-[#e91e8c] dark:border-pink-900/30 dark:bg-[#1f0219] dark:text-[#e0b8cf] dark:hover:bg-[#2b0323]'
                  }`}
                >
                  {cat} {cat === 'Semua' ? `(${count})` : count > 0 ? `(${count})` : ''}
                </button>
              );
            })}
          </div>

          {/* Right Side Sort Button */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-[11px] font-extrabold tracking-wider text-[#8b1a5e] uppercase dark:text-[#f3c2de]">
              URUTKAN:
            </span>
            <button
              type="button"
              onClick={() => setSortOrder((s) => (s === 'latest' ? 'oldest' : 'latest'))}
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-pink-200/80 bg-white px-3.5 py-1.5 text-[12px] font-bold text-[#be123c] shadow-xs transition-colors hover:border-[#e91e8c] hover:bg-[#fff0f7] dark:border-pink-900/40 dark:bg-[#1a0015] dark:text-[#ff85c8]"
            >
              <span>🎛️</span>
              <span>{sortOrder === 'latest' ? 'Terbaru (2026 – 2024)' : 'Terlama (2024 – 2026)'}</span>
              <span className="text-[10px]">⌄</span>
            </button>
          </div>
        </div>
      )}

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {sorted.map((item) => (
          <Card key={item.key} item={item} onOpen={onOpen} />
        ))}
      </div>

      {sorted.length === 0 && (
        <div className="rounded-2xl border-2 border-dashed border-[#ffd6ec] p-8 text-center text-[#8b1a5e] dark:border-pink-900/30 dark:text-[#f3c2de]">
          Tidak ada item pada kategori ini.
        </div>
      )}
    </div>
  );
}
