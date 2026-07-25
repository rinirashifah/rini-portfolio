import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        gap: "30px",
        flexWrap: "wrap",
      }}
    >
      {/* FOTO */}
      <img
        src={profile}
        alt="Rini Rashifah"
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "4px solid #38bdf8",
        }}
      />

      {/* TEXT */}
      <div>
        <h1>Rini Rashifah</h1>
        <p style={{ fontSize: "18px", opacity: 0.8 }}>
          Informatics Student | Mobile Developer
        </p>
        <p style={{ marginTop: "10px", opacity: 0.7 }}>Bandung, Jawa Barat</p>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a href="https://www.linkedin.com/in/rinirashifah/" target="_blank">
            🔗 LinkedIn
          </a>
          <a href="https://www.instagram.com/rini.sshfa" target="_blank">
            📸 Instagram
          </a>
          <a href="https://www.tiktok.com/@rini.sshfa" target="_blank">
            🎵 TikTok
          </a>
        </div>
      </div>
    </section>
  );
}
