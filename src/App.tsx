import { useState, useEffect } from 'react';
import './index.css';
import Glitter from './components/Glitter';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Project from './sections/Project';
import Skill from './sections/Skill';
import About from './sections/About';
import Certification from './sections/Certification';
import Modal from './components/Modal';
import { CardItem } from './types';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [activeModal, setActiveModal] = useState<CardItem | null>(null);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty(
        '--hero-grad',
        'linear-gradient(135deg,#5a0040 0%,#3d0030 50%,#1e0018 100%)'
      );
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty(
        '--hero-grad',
        'linear-gradient(145deg,#ff3d94 0%,#ff6eb4 42%,#ff8fc6 78%,#ffb3dc 100%)'
      );
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen bg-[#fff0f7] text-[#3d0030] transition-colors duration-300 dark:bg-[#0a0008] dark:text-[#fff0f7]">
      <Glitter />
      <Navbar theme={theme} onToggle={toggle} />

      <main className="relative z-10 mx-auto w-full max-w-[1440px] px-4 pb-16 pt-[calc(56px+env(safe-area-inset-top))] sm:px-6 sm:pb-20 sm:pt-[72px] lg:px-10">
        <Hero />

        <div
          className="-mx-4 h-1.5 sm:-mx-6 sm:h-2 lg:-mx-10"
          style={{
            background: 'linear-gradient(90deg, #ffd700 0%, #ff6eb4 30%, #e91e8c 70%, #ffd700 100%)',
            boxShadow: '0 2px 12px rgba(233,30,140,0.3)',
          }}
        />

        <Experience onOpen={setActiveModal} />
        <Project onOpen={setActiveModal} />
        <Skill />
        <About />
        <Certification />
      </main>

      <footer className="mt-16 bg-[#e91e8c] px-5 py-8 pb-[calc(2rem+env(safe-area-inset-bottom))] text-center transition-colors duration-300 dark:border-t dark:border-[#e91e8c]/20 dark:bg-[#0d000b] sm:mt-24 sm:px-6">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {[
              { label: 'LinkedIn', href: 'https://linkedin.com/in/rinirashifah/' },
              { label: 'GitHub', href: 'https://github.com/rinirashifah' },
              { label: 'Instagram', href: 'https://instagram.com/rini.sshfa' },
              { label: 'TikTok', href: 'https://tiktok.com/@rini.sshfa' },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="text-[13px] font-bold text-white/85 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#home"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-3.5 py-1 text-[11.5px] font-bold text-white transition-all hover:bg-white/25 active:scale-95"
          >
            <span>↑ Kembali ke Atas</span>
          </a>
        </div>

        <div className="mt-5 text-[12px] font-medium text-white/70">
          © 2026 Rini Rashifah · Built with 💖 & Precision
        </div>
      </footer>

      <Modal item={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  );
}
