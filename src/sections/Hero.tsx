import profileImg from "../assets/profile.jpg";

interface HeroProps {
  cvLink?: string;
}

export default function Hero({ cvLink = "#" }: HeroProps) {
  return (
    <section className="hero-section">
      <div>
        <div className="hero-eyebrow">
          <span>👩‍💻</span> Informatics Student · Software Engineering
        </div>

        <h1 className="hero-title">
          Hi, Saya
          <span className="hero-title-gradient">Rini Rashifah</span>
        </h1>

        <p className="hero-sub">
          Mahasiswa Teknik Informatika di Universitas Langlangbuana, Bandung.
          Passionate dalam mobile development dan pendidikan teknologi.
          Membangun solusi digital presisi untuk masa depan.
        </p>

        <div className="hero-actions">
          {/* Ganti cvLink dengan link Google Drive CV kamu di App.tsx */}
          <a href={cvLink} target="_blank" rel="noreferrer" className="btn-primary">
            ⬇ Download CV
          </a>
          <a href="#projects" className="btn-outline">
            Lihat Proyek ↓
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://www.linkedin.com/in/rinirashifah/" target="_blank" rel="noreferrer" title="LinkedIn">🔗</a>
          <a href="https://www.instagram.com/rini.sshfa" target="_blank" rel="noreferrer" title="Instagram">📸</a>
          <a href="https://www.tiktok.com/@rini.sshfa" target="_blank" rel="noreferrer" title="TikTok">🎵</a>
        </div>
      </div>

      <div className="hero-photo-wrap">
        <img src={profileImg} alt="Rini Rashifah" className="hero-photo" />
        {/* Kalau foto belum ada, hapus img di atas dan pakai ini: */}
        {/* <div className="hero-photo-placeholder">👩‍💻</div> */}
      </div>
    </section>
  );
}
