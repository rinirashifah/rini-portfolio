import { useState, useEffect } from "react";
import "./App.css";
import Hero from "./sections/Hero";
import Intro from "./sections/Intro";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Skill from "./sections/Skill";
import Project from "./sections/Project";
import Certification from "./sections/Certification";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-root">
      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <a href="#hero" className="navbar-logo" onClick={closeMenu}>
          Rini Rashifah
        </a>

        <div className="navbar-right">
          <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
            <a href="#hero" onClick={closeMenu}>Beranda</a>
            <a href="#about" onClick={closeMenu}>Tentang</a>
            <a href="#projects" onClick={closeMenu}>Proyek</a>
            <a href="#contact" onClick={closeMenu}>Kontak</a>
          </div>

          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to Light" : "Switch to Dark"}
          >
            <div className="theme-toggle-knob">
              {theme === "dark" ? "🌙" : "☀️"}
            </div>
          </button>

          <button
            type="button"
            className="navbar-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ── CONTENT ── */}
      <main>
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <Intro />
        </div>
        <Education />
        <Experience />
        <Skill />
        <Project />
        <Certification />
      </main>

      {/* ── FOOTER ── */}
      <footer className="footer" id="contact">
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/rinirashifah/"
            target="_blank"
            rel="noreferrer"
          >
            🔗 LinkedIn
          </a>
          <a
            href="https://www.instagram.com/rini.sshfa"
            target="_blank"
            rel="noreferrer"
          >
            📸 Instagram
          </a>
          <a
            href="https://www.tiktok.com/@rini.sshfa"
            target="_blank"
            rel="noreferrer"
          >
            🎵 TikTok
          </a>
        </div>
        <p>Bandung, Jawa Barat 🇮🇩 &nbsp;·&nbsp; © 2026 Rini Rashifah</p>
      </footer>
    </div>
  );
}
