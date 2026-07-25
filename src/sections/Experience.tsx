export default function Experience() {
  return (
    <div className="about-section" style={{ marginTop: "16px" }}>
      <div className="about-card full">
        <div className="about-card-label">Pengalaman Kerja</div>
        <div className="exp-item">
          <div className="exp-top">
            <div className="exp-name">Yayasan Silih Asih Kinayungan</div>
            <div className="exp-year">2025</div>
          </div>
          <p className="exp-desc">Mengembangkan aplikasi Android pendaftaran murid menggunakan Flutter dan Supabase dengan sistem penyimpanan data real-time.</p>
        </div>
        <div className="exp-item">
          <div className="exp-top">
            <div className="exp-name">Tutor Robotika</div>
            <div className="exp-year">Januari 2026 - Juli 2026</div>
          </div>
          <p className="exp-desc">Mengajar dasar robotika menggunakan Arduino dan ESP32, termasuk perakitan rangkaian dan pemrograman mikrokontroler.</p>
        </div>
      </div>
    </div>
  );
}
