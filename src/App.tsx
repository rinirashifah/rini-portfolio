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

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="portfolio-root">
      <nav className="navbar">
        <div className="navbar-logo">Rini Rashifah</div>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label="Toggle theme"
          >
            <div className="theme-toggle-knob">
              {theme === "dark" ? "🌙" : "☀️"}
            </div>
          </button>
        </div>
      </nav>

      <main>
        <div id="home"><Hero cvLink="https://drive.google.com/file/d/1SGNmhJlIL7ZR2SP-YKHiEVLjMLEhx-8j/view?usp=drive_link" /></div>
        <div id="about"><Intro /></div>
        <Education />
        <Experience />
        <div id="projects"><Project /></div>
        <Skill />
        <Certification />
      </main>

      <footer className="footer" id="contact">
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/rinirashifah/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/rini.sshfa" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.tiktok.com/@rini.sshfa" target="_blank" rel="noreferrer">TikTok</a>
        </div>
        <p>© 2026 Rini Rashifah. Built with Informatics precision.</p>
      </footer>
    </div>
  );
}
