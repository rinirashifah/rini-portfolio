import profileImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="hero-section animate-in">
      <div>
        <div className="hero-badge">
          <span>👩‍💻</span> Informatics Student · Software Engineering
        </div>

        <h1 className="hero-title">
          Hi, Saya
          <br />
          <span className="hero-title-gradient">Rini Rashifah</span>
        </h1>

        <p className="hero-sub">
          Mahasiswa Teknik Informatika di Universitas Langlangbuana, Bandung.
          Passionate dalam mobile development dan pendidikan teknologi.
        </p>

        <div className="hero-actions">
          {/* Ganti href dengan link Google Drive CV kamu */}
          <a
            href="https://docs.google.com/document/d/1Jyebod64p5yonoayhZBmjWuZ8bDN6Sw91WakIv2DpTQ/edit?usp=sharing"
            className="btn-primary"
          >
            ⬇ Download CV
          </a>
          <a href="#projects" className="btn-outline">
            Lihat Proyek ↓
          </a>
        </div>

        <div className="hero-socials">
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
      </div>

      {/* Kalau foto belum ada, hapus img dan pakai div placeholder di bawah */}
      <img src={profileImg} alt="Rini Rashifah" className="hero-photo" />
      {/* <div className="hero-photo-placeholder">👩‍💻</div> */}
    </section>
  );
}
