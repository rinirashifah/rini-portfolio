import SectionHeading from '../components/SectionHeading';

export default function About() {
  return (
    <section className="mt-14 sm:mt-20" id="about">
      <SectionHeading
        kicker="Tentang"
        title="Tentang Saya"
        subtitle="Latar belakang pendidikan, profil profesional, serta jalur komunikasi."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {/* Ringkasan Profil */}
        <div className="rounded-[22px] border-2 border-[#ffd6ec] bg-white p-5 transition-all duration-200 dark:border-[#e91e8c]/[0.22] dark:bg-[#1a0015] sm:col-span-2 sm:p-7 [@media(hover:hover)]:hover:-translate-y-0.5 [@media(hover:hover)]:hover:border-[#e91e8c] [@media(hover:hover)]:hover:shadow-[0_8px_28px_rgba(233,30,140,.12)]">
          <div className="mb-3 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[2px] text-[#e91e8c] dark:text-[#ff85c8]">
            <span>✨</span>
            <span>Ringkasan Profil</span>
          </div>
          <p className="text-[14px] leading-[1.85] text-[#55163e] transition-colors duration-300 dark:text-[#f5c7e1] sm:text-[15px]">
            Lulusan <strong className="font-bold text-[#c2185b] dark:text-[#ff85c8]">Teknik Informatika Universitas Langlangbuana</strong> dengan kompetensi dalam pengembangan web & enterprise (<span className="font-semibold text-[#880e4f] dark:text-[#ffd700]">React.js, Next.js, Laravel, Golang, Odoo ERP</span>), mobile (<span className="font-semibold text-[#880e4f] dark:text-[#ffd700]">Flutter</span>), REST API, serta pemrograman Python & machine learning. Berpengalaman merancang, mengembangkan, dan mengimplementasikan aplikasi sesuai kebutuhan pengguna dengan memperhatikan kualitas, kebersihan kode, serta efisiensi sistem. Didukung kemampuan adaptasi yang cepat, pemecahan masalah secara terstruktur, komunikasi yang baik, dan pola pikir analitis.
          </p>
        </div>

        {/* Pendidikan */}
        <div className="rounded-[22px] border-2 border-[#ffd6ec] bg-white p-5 transition-all duration-200 dark:border-[#e91e8c]/[0.22] dark:bg-[#1a0015] sm:p-6 [@media(hover:hover)]:hover:-translate-y-0.5 [@media(hover:hover)]:hover:border-[#e91e8c] [@media(hover:hover)]:hover:shadow-[0_8px_28px_rgba(233,30,140,.12)]">
          <div className="mb-4 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[2px] text-[#e91e8c] dark:text-[#ff85c8]">
            <span>🎓</span>
            <span>Riwayat Pendidikan</span>
          </div>
          
          <div className="flex flex-col gap-4">
            {/* Kuliah */}
            <div className="border-b border-dashed border-[#ffd6ec] pb-4 dark:border-[#e91e8c]/20">
              <div className="flex items-start justify-between gap-2">
                <div className="font-display text-[15px] font-bold text-[#3d0030] dark:text-[#fff0f7]">
                  Universitas Langlangbuana
                </div>
                <span className="flex-shrink-0 rounded-md bg-[#e91e8c]/10 px-2 py-0.5 text-[11px] font-bold text-[#e91e8c] dark:text-[#ff85c8]">
                  2022–2026
                </span>
              </div>
              <div className="mt-1 text-[13px] text-[#612147] dark:text-[#e8a7cd]">
                S1 Teknik Informatika
              </div>
              <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[#ffd700]/50 bg-[#ffd700]/15 px-2.5 py-0.5 text-[11.5px] font-extrabold text-[#854d0e] dark:text-[#ffd700]">
                ⭐ IPK 3.64 / 4.00
              </div>
            </div>

            {/* SMA */}
            <div>
              <div className="flex items-start justify-between gap-2">
                <div className="font-display text-[15px] font-bold text-[#3d0030] dark:text-[#fff0f7]">
                  SMAN 6 Bandung
                </div>
                <span className="flex-shrink-0 rounded-md bg-[#e91e8c]/10 px-2 py-0.5 text-[11px] font-bold text-[#e91e8c] dark:text-[#ff85c8]">
                  2019–2022
                </span>
              </div>
              <div className="mt-1 text-[13px] text-[#612147] dark:text-[#e8a7cd]">
                Jurusan MIPA (Matematika & IPA)
              </div>
            </div>
          </div>
        </div>

        {/* Kontak */}
        <div
          className="rounded-[22px] border-2 border-[#ffd6ec] bg-white p-5 transition-all duration-200 dark:border-[#e91e8c]/[0.22] dark:bg-[#1a0015] sm:p-6 [@media(hover:hover)]:hover:-translate-y-0.5 [@media(hover:hover)]:hover:border-[#e91e8c] [@media(hover:hover)]:hover:shadow-[0_8px_28px_rgba(233,30,140,.12)]"
          id="contact"
        >
          <div className="mb-2 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[2px] text-[#e91e8c] dark:text-[#ff85c8]">
            <span>📬</span>
            <span>Hubungi Saya</span>
          </div>

          <div className="mb-3 font-display text-[18px] font-black leading-snug text-[#e91e8c] dark:text-[#ff85c8]">
            Bandung, Jawa Barat 🇮🇩
          </div>

          <div className="flex flex-col gap-2.5">
            <a
              href="mailto:rinirashifahv@gmail.com"
              className="flex items-center gap-2.5 rounded-xl border border-[#ffd6ec] bg-[#fff0f7]/70 p-2.5 text-[12.5px] font-medium text-[#3d0030] transition-colors hover:border-[#e91e8c] hover:bg-[#fff0f7] dark:border-[#e91e8c]/25 dark:bg-[#2a001f]/50 dark:text-[#fff0f7] dark:hover:bg-[#2a001f]"
            >
              <span className="text-base">📧</span>
              <span className="truncate">rinirashifahv@gmail.com</span>
            </a>

            <a
              href="tel:+6285863810643"
              className="flex items-center gap-2.5 rounded-xl border border-[#ffd6ec] bg-[#fff0f7]/70 p-2.5 text-[12.5px] font-medium text-[#3d0030] transition-colors hover:border-[#e91e8c] hover:bg-[#fff0f7] dark:border-[#e91e8c]/25 dark:bg-[#2a001f]/50 dark:text-[#fff0f7] dark:hover:bg-[#2a001f]"
            >
              <span className="text-base">📱</span>
              <span>+62 858-6381-0643</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://linkedin.com/in/rinirashifah/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-xl border border-[#ffd6ec] bg-[#fff0f7]/70 p-2.5 text-[12px] font-bold text-[#e91e8c] transition-colors hover:bg-[#e91e8c] hover:text-white dark:border-[#e91e8c]/25 dark:bg-[#2a001f]/50 dark:text-[#ff85c8]"
              >
                <span>🔗</span>
                <span>LinkedIn ↗</span>
              </a>

              <a
                href="https://github.com/rinirashifah"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-xl border border-[#ffd6ec] bg-[#fff0f7]/70 p-2.5 text-[12px] font-bold text-[#e91e8c] transition-colors hover:bg-[#e91e8c] hover:text-white dark:border-[#e91e8c]/25 dark:bg-[#2a001f]/50 dark:text-[#ff85c8]"
              >
                <span>🐙</span>
                <span>GitHub ↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
