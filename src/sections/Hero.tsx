import { useState } from 'react';
import profileImg from '../assets/Profile.png';
import CvModal from '../components/CvModal';

export default function Hero() {
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative -mx-4 overflow-hidden rounded-b-[32px] px-4 pb-10 pt-7 transition-all duration-300 sm:-mx-6 sm:px-8 sm:pb-14 sm:pt-12 lg:-mx-10 lg:px-12"
      style={{ background: 'var(--hero-grad)' }}
    >
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-7 py-3 md:grid-cols-[minmax(0,1fr)_auto] md:gap-12 md:py-8 lg:gap-16 lg:py-12">
        {/* Profile Photo */}
        <div className="relative mx-auto w-fit animate-fadeUp-d1 md:order-last md:mx-0">
          <div className="ring ring2 hidden sm:block" />
          <div className="ring ring1 hidden sm:block" />
          <div className="relative z-10 rounded-[28px] p-1.5 bg-gradient-to-tr from-[#ffd700] via-[#ffb3dc] to-[#ffd700] shadow-[0_16px_48px_rgba(233,30,140,.4)]">
            <img
              src={profileImg}
              alt="Rini Rashifah"
              className="h-[210px] w-[165px] rounded-[24px] object-cover sm:h-[280px] sm:w-[220px] lg:h-[320px] lg:w-[250px]"
            />
          </div>
        </div>

        {/* Hero Text Content */}
        <div className="animate-fadeUp w-full min-w-0 text-left">
          {/* Badge */}
          <div
            className="mb-4 inline-flex max-w-full items-center rounded-full bg-[#ffd700] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[1.2px] text-[#880e4f] shadow-md sm:mb-5 sm:px-5 sm:text-[11px] sm:tracking-[1.5px]"
            style={{ boxShadow: '0 4px 14px rgba(255,215,0,.45)' }}
          >
            ✦ Informatics Graduate · Full Stack Developer ✦
          </div>

          {/* Headline */}
          <h1
            className="mb-3 font-display font-black leading-[1.05] tracking-tight"
            style={{ fontSize: 'clamp(32px, 8vw, 64px)' }}
          >
            <span className="text-white drop-shadow-sm">
              Hi, Saya
            </span>
            <em
              className="mt-1 block pr-2"
              style={{
                fontStyle: 'italic',
                letterSpacing: '-0.03em',
                fontSize: 'clamp(38px, 9.5vw, 76px)',
                color: '#ffd700',
                WebkitTextFillColor: '#ffd700',
                textShadow: '3px 3px 0 #880e4f, 6px 6px 0 rgba(136,14,79,.32)',
              }}
            >
              Rini Rashifah
            </em>
          </h1>

          <p className="mb-5 max-w-[500px] text-[14px] leading-[1.8] text-white/95 sm:text-[15.5px]">
            Lulusan Teknik Informatika Universitas Langlangbuana dengan keahlian dalam web & mobile development (<span className="font-semibold text-[#ffd700]">React, Next.js, Flutter, Golang</span>) serta data science.
          </p>

          {/* Quick Contact Chips */}
          <div className="mb-6 flex flex-wrap items-center gap-2 sm:gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/35 bg-white/20 px-3.5 py-1.5 text-[12px] font-medium text-white backdrop-blur-md">
              <span>📍</span> Bandung, Jawa Barat
            </span>
            <a
              href="mailto:rinirashifahv@gmail.com"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/35 bg-white/20 px-3.5 py-1.5 text-[12px] font-medium text-white backdrop-blur-md transition-colors hover:bg-white/30"
            >
              <span>📧</span> rinirashifahv@gmail.com
            </a>
            <a
              href="tel:+6285863810643"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/35 bg-white/20 px-3.5 py-1.5 text-[12px] font-medium text-white backdrop-blur-md transition-colors hover:bg-white/30"
            >
              <span>📱</span> +62 858-6381-0643
            </a>
          </div>

          {/* Primary Action Buttons */}
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={() => setIsCvOpen(true)}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#ffd700] px-7 py-3 text-sm font-extrabold text-[#880e4f] shadow-lg transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              style={{ boxShadow: '0 6px 20px rgba(255,215,0,.45)' }}
            >
              <span>📄</span> Lihat CV & Portofolio
            </button>
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-white/60 bg-white/20 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/30 hover:scale-[1.02] active:scale-95"
            >
              <span>💻</span> Lihat Proyek ↓
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/25 hover:scale-[1.02] active:scale-95"
            >
              <span>💬</span> Kontak Saya
            </a>
          </div>

          {/* Social Links */}
          <div className="mb-2 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-2.5">
            {[
              { label: '🔗 LinkedIn', href: 'https://linkedin.com/in/rinirashifah/' },
              { label: '🐙 GitHub', href: 'https://github.com/rinirashifah' },
              { label: '📸 Instagram', href: 'https://instagram.com/rini.sshfa' },
              { label: '🎵 TikTok', href: 'https://tiktok.com/@rini.sshfa' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/40 bg-white/20 px-3.5 py-2 text-[12.5px] font-semibold text-white backdrop-blur-md transition-all hover:bg-white/35 hover:-translate-y-0.5 active:scale-95"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <CvModal open={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </section>
  );
}
