export default function Experience() {
  return (
    <div className="card">
      <div className="section-eyebrow">Pengalaman</div>
      <h2 className="section-heading">Pengalaman Kerja</h2>
      <div className="exp-list">
        <div className="exp-item">
          <div className="exp-top">
            <div className="exp-name">Yayasan Silih Asih Kinayungan</div>
            <div className="exp-year">2025</div>
          </div>
          <p className="exp-desc">
            Mengembangkan aplikasi Android pendaftaran murid menggunakan Flutter
            dan Supabase dengan sistem penyimpanan data real-time.
          </p>
        </div>
        <div className="exp-item">
          <div className="exp-top">
            <div className="exp-name">Tutor Robotika</div>
            <div className="exp-year">Januari 2026 – Juli 2026</div>
          </div>

          <p className="exp-desc">
            Mengajar belajar coding dan dasar robotika untuk anak-anak, termasuk
            Scratch, coding robot Arduino, perakitan rangkaian, serta
            pemrograman mikrokontroler ESP32.
          </p>
        </div>
      </div>
    </div>
  );
}
