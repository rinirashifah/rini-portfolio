import { useEffect, useState } from 'react';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', href: '#home', icon: '🏠' },
  { label: 'Experience', href: '#experience', icon: '💼' },
  { label: 'Projects', href: '#projects', icon: '💻' },
  { label: 'Skills', href: '#skills', icon: '⚡' },
  { label: 'Sertifikat', href: '#certs', icon: '📜' },
  { label: 'Contact', href: '#contact', icon: '📬' },
];

export default function Navbar({ theme, onToggle }: NavbarProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <nav
        className="fixed left-0 right-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300 dark:border-b dark:border-[#e91e8c]/25"
        style={{
          background: theme === 'dark' ? 'rgba(10,0,8,0.92)' : 'rgba(233,30,140,0.94)',
          boxShadow: '0 4px 24px rgba(233,30,140,.25)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <div className="mx-auto flex h-[58px] max-w-[1440px] items-center justify-between px-4 sm:h-[64px] sm:px-6 lg:px-12">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 truncate font-display text-[16px] font-black italic tracking-tight text-white transition-opacity hover:opacity-90 sm:text-xl"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffd700] text-xs font-black text-[#880e4f] shadow-sm not-italic">
              RR
            </span>
            <span>Rini Rashifah</span>
          </a>

          <div className="flex flex-shrink-0 items-center gap-2 sm:gap-3 lg:gap-6">
            {/* Desktop Navigation */}
            <div className="hidden items-center gap-5 lg:flex xl:gap-7">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-full px-3 py-1.5 text-[13px] font-bold text-white/85 transition-all hover:bg-white/15 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Dark / Light Mode Toggle Button */}
            <button
              type="button"
              onClick={onToggle}
              aria-label="Ubah tema"
              className="flex h-9 min-w-9 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-[#ffd700] px-3 text-[11px] font-black text-[#880e4f] shadow-md transition-transform hover:scale-105 active:scale-95 sm:h-10 sm:px-4 sm:text-xs"
              style={{ boxShadow: '0 3px 12px rgba(255,215,0,.4)' }}
            >
              <span>{theme === 'dark' ? '☀️' : '🌙'}</span>
              <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>

            {/* Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={open}
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-lg leading-none text-white backdrop-blur-sm transition-all hover:bg-white/25 active:scale-95 sm:h-10 sm:w-10 lg:hidden"
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`overflow-hidden transition-[max-height] duration-300 ease-in-out lg:hidden ${
            open ? 'max-h-[460px] border-t border-white/15' : 'max-h-0'
          }`}
          style={{
            background: theme === 'dark' ? 'rgba(19,0,16,0.98)' : '#c2185b',
          }}
        >
          <div className="flex flex-col px-4 pb-4 pt-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 border-b border-white/10 py-3.5 text-[15px] font-bold text-white/95 transition-colors hover:text-[#ffd700] last:border-b-0"
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Backdrop overlay for mobile menu */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden"
        />
      )}
    </>
  );
}
