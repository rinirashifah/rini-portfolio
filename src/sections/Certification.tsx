import { useState } from 'react';
import CertModal from '../components/CertModal';
import SectionHeading from '../components/SectionHeading';
import { CERTS } from '../data/data';
import { CertItem } from '../types';

function CertCard({ cert, onSelect }: { cert: CertItem; onSelect: () => void }) {
  const [thumbError, setThumbError] = useState(false);
  const rawImage = cert.image?.trim();
  const rawPdf = cert.pdf?.trim();
  const isPdf = Boolean(rawPdf || rawImage?.toLowerCase().endsWith('.pdf'));
  const hasImage = Boolean(rawImage && !thumbError && !isPdf);

  return (
    <button
      type="button"
      onClick={onSelect}
      className="group flex items-center gap-3.5 rounded-[18px] border-2 border-[#ffd6ec] bg-white p-3 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e91e8c] dark:border-[#e91e8c]/[0.22] dark:bg-[#1a0015] sm:p-3.5 [@media(hover:hover)]:hover:-translate-y-0.5 [@media(hover:hover)]:hover:border-[#e91e8c] [@media(hover:hover)]:hover:shadow-[0_8px_24px_rgba(233,30,140,.12)]"
    >
      {/* Thumbnail */}
      <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-[12px] border border-[#ffd6ec] bg-gradient-to-br from-[#fff0f7] to-[#ffd6ec]/60 dark:border-[#e91e8c]/25 dark:from-[#2a001f] dark:to-[#1a0015]">
        {hasImage ? (
          <img
            src={rawImage}
            alt={cert.title}
            onError={() => setThumbError(true)}
            className="h-full w-full object-cover transition-transform duration-300 [@media(hover:hover)]:group-hover:scale-110"
          />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <span className="text-xl sm:text-2xl transition-transform duration-200 [@media(hover:hover)]:group-hover:scale-110">
              📜
            </span>
            {isPdf && (
              <span className="mt-0.5 rounded bg-[#e91e8c]/15 px-1 text-[8.5px] font-black text-[#e91e8c] dark:text-[#ff85c8]">
                PDF
              </span>
            )}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1">
        {cert.issuer && (
          <div className="mb-0.5 text-[11px] font-bold text-[#e91e8c] dark:text-[#ff85c8]">
            {cert.issuer}
          </div>
        )}
        <div className="line-clamp-2 font-display text-[13.5px] font-bold leading-snug text-[#3d0030] transition-colors group-hover:text-[#e91e8c] dark:text-[#fff0f7] dark:group-hover:text-[#ff85c8] sm:text-[14.5px]">
          {cert.title}
        </div>
      </div>

      {/* Preview indicator */}
      <span className="flex-shrink-0 rounded-full bg-[#fff0f7] px-2.5 py-1 text-[11px] font-extrabold text-[#e91e8c] transition-all group-hover:bg-[#e91e8c] group-hover:text-white dark:bg-[#2a001f] dark:text-[#ff85c8]">
        Detail ↗
      </span>
    </button>
  );
}

export default function Certification() {
  const [selected, setSelected] = useState<CertItem | null>(null);

  return (
    <section className="mt-14 sm:mt-20" id="certs">
      <SectionHeading
        kicker="Sertifikasi"
        title="Pelatihan & Sertifikasi"
        subtitle="Daftar sertifikat keahlian di bidang software engineering, data science, dan AI."
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {CERTS.map((cert) => (
          <CertCard key={cert.key} cert={cert} onSelect={() => setSelected(cert)} />
        ))}
      </div>

      <CertModal cert={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
