interface Project {
  name: string;
  year: string;
  tags: { label: string; style?: string }[];
  desc: string;
  link: string; // Ganti "#" dengan link Google Drive / demo kamu
  large?: boolean;
}

const projects: Project[] = [
  {
    name: "Prototype Aplikasi Pendaftaran Murid",
    year: "2025",
    tags: [
      { label: "Flutter" },
      { label: "Supabase", style: "tag-sky" },
    ],
    desc: "Merancang dan mengembangkan prototype aplikasi Android untuk Yayasan Silih Asih Kinayungan. Memfasilitasi pendaftaran siswa secara online, penyimpanan data real-time, serta dashboard admin untuk pengelolaan data murid.",
    link: "https://drive.google.com/file/d/1mOklh5W06u-C_NKS4AjC8NcUfMc87qwt/view?usp=sharing", // Ganti dengan link Google Drive
    large: true,
  },
  {
    name: "Prototype Company Profile – PT New Energy Integrasi",
    year: "2026",
    tags: [
      { label: "React.js" },
      { label: "REST API", style: "tag-green" },
    ],
    desc: "Website company profile responsif dan modern untuk menampilkan profil perusahaan, layanan, proyek, dan informasi kontak. Kontribusi pada frontend & integrasi REST API.",
    link: "https://pt-new-energy-integrasi.web.app/", // Ganti dengan link Google Drive
  },
  {
    name: "Prototype Sistem Informasi Perpustakaan",
    year: "2026",
    tags: [
      { label: "React.js" },
      { label: "Golang", style: "tag-sky" },
      { label: "SQLite", style: "tag-green" },
    ],
    desc: "Sistem informasi perpustakaan berbasis web dengan pengelolaan buku, anggota, transaksi pinjam-kembali, serta notifikasi otomatis via email (Gmail).",
    link: "https://drive.google.com/file/d/1fPU7BQ_fHn8VOyIbMliv9u8-72MVxhYc/view?usp=sharing", // Ganti dengan link Google Drive
  },
  {
    name: "Prototype Aplikasi Pembelian Barang dari Vendor",
    year: "2023",
    tags: [
      { label: "Flutter" },
      { label: "Firebase", style: "tag-sky" },
    ],
    desc: "Aplikasi mobile dengan alur pembelian barang dari vendor: pemilihan barang, pengajuan pesanan, hingga konfirmasi oleh admin/vendor.",
    link: "https://drive.google.com/drive/folders/1PZxrlyQ9SYX2qzV6jq2kzMjSVmhp4nve?usp=sharing", // Ganti dengan link Google Drive
  },
];

export default function Project() {
  return (
    <div className="section-block">
      <div className="section-eyebrow">Selected Work</div>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "28px" }}>
        <h2 className="section-heading" style={{ marginBottom: 0 }}>Latest Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.name} className={`project-card${p.large ? " large" : ""}`}>
            <div className="project-card-inner">
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t.label} className={`project-tag ${t.style || ""}`}>{t.label}</span>
                ))}
              </div>
              <div className="project-name">{p.name}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-footer">
                <span className="project-year">{p.year}</span>
                <a href={p.link} target="_blank" rel="noreferrer" className="project-link">
                  Lihat Proyek ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
