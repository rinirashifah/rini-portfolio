export default function Education() {
  return (
    <div className="about-section" style={{ marginTop: "16px" }}>
      <div className="about-card">
        <div className="about-card-label">Pendidikan</div>
        <div className="edu-item">
          <div className="edu-dot" />
          <div>
            <div className="edu-name">Universitas Langlangbuana</div>
            <div className="edu-degree">S1 Teknik Informatika</div>
          </div>
          <div className="edu-year">2022 – 2026</div>
        </div>
        <div className="edu-item">
          <div className="edu-dot" />
          <div>
            <div className="edu-name">SMAN 6 Bandung</div>
            <div className="edu-degree">Jurusan IPA</div>
          </div>
          <div className="edu-year">2019 – 2022</div>
        </div>
      </div>

      <div className="about-card">
        <div className="about-card-label">Lokasi</div>
        <p className="about-card-text" style={{ fontSize: "22px", fontWeight: 700, fontFamily: "var(--font-display)", letterSpacing: "-0.5px" }}>
          Bandung,<br />Jawa Barat 🇮🇩
        </p>
      </div>
    </div>
  );
}
