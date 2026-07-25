const projects = [
  {
    icon: "🌐",
    year: "2026",
    name: "Company Profile PT NEIS",
    desc:
      "Membantu membangun website company profile PT New Energy Integrasi Solusi — menampilkan profil perusahaan, layanan, dan informasi kontak secara modern.",
    link: "https://pt-new-energy-integrasi.web.app/",
  },
  {
    icon: "📱",
    year: "2025",
    name: "Aplikasi Pendaftaran Murid",
    desc:
      "Aplikasi Android berbasis Flutter + Supabase untuk pendaftaran siswa secara online dengan dashboard admin.",
    // Ganti dengan link Google Drive hasil proyek kamu
    link:
      "https://drive.google.com/drive/folders/1PZxrlyQ9SYX2qzV6jq2kzMjSVmhp4nve?usp=sharing",
  },
  {
    icon: "🛍️",
    year: "2023",
    name: "Aplikasi Pembelian Barang",
    desc:
      "Aplikasi mobile berbasis Flutter + Firebase dengan alur pemesanan dan konfirmasi admin.",
    // Ganti dengan link Google Drive hasil proyek kamu
    link:
      "https://drive.google.com/drive/folders/1PZxrlyQ9SYX2qzV6jq2kzMjSVmhp4nve?usp=sharing",
  },
];

export default function Project() {
  return (
    <div className="card" id="projects">
      <div className="section-eyebrow">Proyek</div>
      <h2 className="section-heading">Proyek Saya</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.name} className="project-card">
            <div className="project-icon">{p.icon}</div>
            <div className="project-tag">{p.year}</div>
            <div className="project-name">{p.name}</div>
            <p className="project-desc">{p.desc}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Lihat Proyek ↗
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
