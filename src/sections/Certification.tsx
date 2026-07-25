const certs = [
  "Sertifikat Dasar Pemrograman untuk Menjadi Pengembang Software",
  "Sertifikat Dasar Manajemen Proyek",
  "Sertifikat Dasar Data Science",
  "Sertifikat Dasar Structured Query Language (SQL)",
];

export default function Certification() {
  return (
    <div className="card">
      <div className="section-eyebrow">Sertifikasi</div>
      <h2 className="section-heading">Pelatihan &amp; Sertifikasi</h2>
      <div className="cert-list">
        {certs.map((c) => (
          <div key={c} className="cert-item">
            <span className="cert-bullet">✦</span>
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}
