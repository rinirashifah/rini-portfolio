import { CardItem, CertItem, SlideImage } from '../types';

/**
 * Slide gambar dokumentasi 25 halaman aplikasi GIS BKAD Tangerang Selatan
 */
const GIS_IMAGES: SlideImage[] = [
  { url: '/projects/gis/Picture1.jpg', caption: 'Antarmuka Aplikasi GIS BKAD Tangerang Selatan (1/25)' },
  { url: '/projects/gis/Picture2.jpg', caption: 'Pemetaan Aset Daerah & Titik Geospasial (2/25)' },
  { url: '/projects/gis/Picture3.jpg', caption: 'Peta Interaktif & Filtering Aset Real-time (3/25)' },
  { url: '/projects/gis/Picture4.jpg', caption: 'Detail Informasi Aset & Titik Koordinat (4/25)' },
  { url: '/projects/gis/Picture5.jpg', caption: 'Menu Pendataan & Verifikasi Lapangan (5/25)' },
  { url: '/projects/gis/Picture6.jpg', caption: 'Formulir Input Data Aset Baru (6/25)' },
  { url: '/projects/gis/Picture7.jpg', caption: 'Upload Bukti Foto & Dokumen Pendukung (7/25)' },
  { url: '/projects/gis/Picture8.jpg', caption: 'Riwayat & Log Perubahan Status Aset (8/25)' },
  { url: '/projects/gis/Picture9.jpg', caption: 'Pencarian Cepat Aset Berdasarkan Kategori (9/25)' },
  { url: '/projects/gis/Picture10.jpg', caption: 'Tampilan Satelit & Lapisan Peta Tematik (10/25)' },
  { url: '/projects/gis/Picture11.jpg', caption: 'Monitoring Kondisi Aset Pemerintah (11/25)' },
  { url: '/projects/gis/Picture12.jpg', caption: 'Rekapitulasi Data Aset per Wilayah (12/25)' },
  { url: '/projects/gis/Picture13.jpg', caption: 'Modul Pelaporan & Ekspor Data (13/25)' },
  { url: '/projects/gis/Picture14.jpg', caption: 'Ekspor Laporan ke Format Excel & CSV (14/25)' },
  { url: '/projects/gis/Picture15.jpg', caption: 'Cetak Dokumen & Rekap Laporan PDF (15/25)' },
  { url: '/projects/gis/Picture16.jpg', caption: 'Manajemen Pengguna & Hak Akses Petugas (16/25)' },
  { url: '/projects/gis/Picture17.jpg', caption: 'Validasi & Sinkronisasi Data Lapangan (17/25)' },
  { url: '/projects/gis/Picture18.jpg', caption: 'Dashboard Ringkasan Aset Daerah (18/25)' },
  { url: '/projects/gis/Picture19.jpg', caption: 'Visualisasi Statistik Persebaran Aset (19/25)' },
  { url: '/projects/gis/Picture20.jpg', caption: 'Integrasi REST API Backend Laravel (20/25)' },
  { url: '/projects/gis/Picture21.jpg', caption: 'Navigasi Rute Menuju Lokasi Aset (21/25)' },
  { url: '/projects/gis/Picture22.jpg', caption: 'Pengecekan Status Aset Bermasalah (22/25)' },
  { url: '/projects/gis/Picture23.jpg', caption: 'Pengaturan Profil & Keamanan Akun (23/25)' },
  { url: '/projects/gis/Picture24.jpg', caption: 'Fitur Offline Caching Data Lapangan (24/25)' },
  { url: '/projects/gis/Picture25.jpg', caption: 'Sinkronisasi Otomatis Saat Terhubung Internet (25/25)' },
];

/**
 * Slide tangkapan layar antarmuka Ujian Online
 */
const UJIAN_IMAGES: SlideImage[] = [
  { url: '/projects/ujian/ujian-1.png', caption: 'Halaman Beranda & Informasi Ujian Online' },
  { url: '/projects/ujian/ujian-2.png', caption: 'Formulir Masuk & Verifikasi Token Ujian' },
  { url: '/projects/ujian/ujian-3.png', caption: 'Tampilan Lembar Pengerjaan Soal Ujian' },
  { url: '/projects/ujian/ujian-4.png', caption: 'Navigasi Butir Soal & Timer Mundur' },
  { url: '/projects/ujian/ujian-5.png', caption: 'Manajemen Bank Soal (Pilihan Ganda & Esai)' },
  { url: '/projects/ujian/ujian-6.png', caption: 'Rekapitulasi Hasil & Nilai Siswa Otomatis' },
];

/**
 * Slide tangkapan layar aplikasi Inventory Management berbasis Odoo & Python
 */
const ODOO_IMAGES: SlideImage[] = [
  { url: '/projects/odoo/odoo-1.png', caption: 'Daftar Produk & Indikator Status Stok (Low Stock Alert)' },
  { url: '/projects/odoo/odoo-2.png', caption: 'Katalog Produk dengan Kategori, Satuan, dan Harga Beli/Jual' },
  { url: '/projects/odoo/odoo-3.png', caption: 'Status Stok Normal setelah Pembaruan Stok Masuk' },
  { url: '/projects/odoo/odoo-4.png', caption: 'Tampilan Filter & Pencarian Data Produk' },
  { url: '/projects/odoo/odoo-5.png', caption: 'Modul Transaksi Stock In (Pencatatan Barang Masuk dari Supplier)' },
  { url: '/projects/odoo/odoo-6.png', caption: 'Modul Transaksi Stock Out (Pencatatan Barang Keluar ke Pelanggan)' },
  { url: '/projects/odoo/odoo-7.png', caption: 'Formulir Stock Out dengan Validasi Stok Tersedia Real-time' },
  { url: '/projects/odoo/odoo-8.png', caption: 'Laporan Pergerakan Stok (Stock Movement Audit Trail & History)' },
];

export const EXPERIENCE: CardItem[] = [
  {
    key: 'bkad',
    tags: [
      { label: 'Flutter', color: 'pink' },
      { label: 'Laravel', color: 'sky' },
      { label: 'GIS', color: 'gold' },
      { label: 'REST API', color: 'green' },
    ],
    name: 'Mobile Developer / Software Engineer',
    org: 'BKAD Kota Tangerang Selatan (Project-Based)',
    period: 'Mar 2026 – Apr 2026',
    desc: 'Aplikasi GIS untuk pendataan & monitoring aset pemerintah secara real-time. Ekspor data ke Excel, CSV, dan PDF.',
    bullets: [
      'Mengembangkan aplikasi mobile berbasis Geographic Information System (GIS) untuk pendataan dan monitoring aset pemerintah secara real-time.',
      'Mengimplementasikan fitur pemetaan dan geolokasi menggunakan flutter_map dan geolocator serta mengintegrasikan aplikasi dengan backend REST API berbasis Laravel.',
      'Membangun modul pelaporan yang mendukung ekspor data ke format Excel, CSV, dan PDF secara langsung dari aplikasi.',
      'Menyelesaikan 25 tampilan antarmuka interaktif pemetaan geospasial aset daerah.',
    ],
    images: GIS_IMAGES,
    links: [],
    wide: true,
  },
  {
    key: 'yayasan',
    tags: [
      { label: 'Flutter', color: 'pink' },
      { label: 'Supabase', color: 'sky' },
      { label: 'Midtrans', color: 'gold' },
    ],
    name: 'Fullstack Developer & Administrasi',
    org: 'Yayasan Silih Asih Kinayungan & Pos PAUD Silih Asih',
    period: 'Jan 2025 – Jul 2025',
    desc: 'Aplikasi Android pendaftaran siswa online + integrasi Midtrans + administrasi Pos PAUD.',
    bullets: [
      'Merancang dan mengembangkan aplikasi Android menggunakan Flutter dan Supabase untuk pendaftaran siswa secara online, dengan penyimpanan data real-time serta dashboard admin.',
      'Mengimplementasikan integrasi pembayaran menggunakan Midtrans untuk mendukung proses pembayaran pendaftaran secara digital.',
      'Mengelola administrasi Pos PAUD Silih Asih: pengelolaan data Dapodik, pengadaan melalui SIPLah, pembuatan surat-menyurat, dan pengarsipan dokumen.',
    ],
    images: [],
    links: [
      {
        label: 'Lihat Demo / Dokumen Proyek',
        url: 'https://drive.google.com/file/d/1mOklh5W06u-C_NKS4AjC8NcUfMc87qwt/view',
        icon: '📱',
      },
    ],
  },
  {
    key: 'datascience',
    tags: [
      { label: 'Python', color: 'gold' },
      { label: 'Machine Learning', color: 'green' },
      { label: 'Data Analysis', color: 'sky' },
    ],
    name: 'Data Science Intern',
    org: 'Vinix7 Aurum',
    period: 'Agu 2025 – Des 2025',
    desc: 'Analisis data, visualisasi, dan pengembangan model machine learning bersama senior data scientist.',
    bullets: [
      'Berperan aktif dalam proses pengumpulan, pembersihan (data cleaning), dan analisis data menggunakan Python.',
      'Berkontribusi pada analisis data eksploratif, visualisasi data, pengembangan model machine learning, dan penyusunan laporan.',
      'Berkolaborasi dengan senior data scientist dalam menerjemahkan kebutuhan operasional menjadi solusi berbasis data.',
    ],
    images: [],
    links: [],
  },
  {
    key: 'tutor',
    tags: [
      { label: 'Arduino', color: 'sky' },
      { label: 'ESP32', color: 'pink' },
      { label: 'Robotika', color: 'green' },
    ],
    name: 'Tutor Robotika',
    org: 'Latihhobi',
    period: 'Jan 2026 – Jul 2026',
    desc: 'Mengajar dasar robotika, perakitan elektronik, dan pemrograman mikrokontroler kepada anak-anak.',
    bullets: [
      'Mengajar dasar-dasar robotika kepada anak-anak menggunakan platform Arduino dan Wemos (ESP32).',
      'Meliputi perakitan rangkaian elektronik, pemrograman mikrokontroler, serta pengenalan konsep sensor dan aktuator secara praktis dan interaktif.',
    ],
    images: [],
    links: [],
  },
];

export const PROJECTS: CardItem[] = [
  {
    key: 'odoo-inventory',
    tags: [
      { label: 'Odoo', color: 'pink' },
      { label: 'Python', color: 'gold' },
      { label: 'PostgreSQL', color: 'sky' },
      { label: 'ERP / Inventory', color: 'green' },
    ],
    name: 'Aplikasi Sederhana Inventory Management',
    org: 'Odoo Custom Module · Personal Project',
    period: '2026',
    desc: 'Sistem manajemen inventaris berbasis Odoo & Python untuk pencatatan produk, transaksi barang masuk (Stock In), barang keluar (Stock Out), serta audit log pergerakan stok real-time.',
    bullets: [
      'Merancang dan membangun modul custom Inventory Management pada platform Odoo menggunakan bahasa pemrograman Python dan database PostgreSQL.',
      'Mengimplementasikan fitur katalog produk dengan kategorisasi, penetapan harga beli/jual, serta penentuan batas minimum stok otomatis.',
      'Membangun sistem peringatan dini (Low Stock Alert) untuk memonitor ketersediaan stok barang secara visual dan otomatis.',
      'Menyediakan alur kerja transaksi Stock In (Barang Masuk) dan Stock Out (Barang Keluar) dengan validasi ketersediaan stok real-time guna mencegah minus stok.',
      'Menyusun modul pelaporan Stock Movement untuk merekam riwayat pergerakan stok (audit trail) secara transparan dan terstruktur.',
    ],
    images: ODOO_IMAGES,
    links: [],
    wide: true,
  },
  {
    key: 'gis',
    tags: [
      { label: 'Flutter', color: 'pink' },
      { label: 'Laravel', color: 'sky' },
      { label: 'GIS', color: 'gold' },
      { label: 'REST API', color: 'green' },
    ],
    name: 'Aplikasi GIS Monitoring & Pendataan Aset Pemerintah',
    org: 'BKAD Kota Tangerang Selatan',
    period: 'Mar 2026 – Apr 2026',
    desc: 'Aplikasi GIS pemetaan dan monitoring aset pemerintah secara real-time dengan modul pelaporan ekspor Excel, CSV, dan PDF. Dilengkapi 25 slide bukti tampilan antarmuka.',
    bullets: [
      'Mengembangkan aplikasi mobile berbasis Geographic Information System (GIS) untuk pendataan dan monitoring aset pemerintah daerah secara real-time.',
      'Mengimplementasikan fitur pemetaan dan geolokasi interaktif menggunakan flutter_map dan geolocator.',
      'Integrasi backend REST API berbasis Laravel dan modul ekspor data multi-format (Excel, CSV, PDF).',
      'Dilengkapi 25 slide dokumentasi antarmuka dan bukti implementasi sistem.',
    ],
    images: GIS_IMAGES,
    links: [],
    wide: true,
  },
  {
    key: 'ujian',
    tags: [
      { label: 'Next.js 14', color: 'pink' },
      { label: 'TypeScript', color: 'sky' },
      { label: 'Tailwind CSS', color: 'green' },
      { label: 'App Router', color: 'gold' },
    ],
    name: 'Ujian Online',
    org: 'MVP · Personal Project',
    period: '2026',
    desc: 'Aplikasi ujian online dengan bank soal, penjadwalan via token, timer & auto-save, penilaian otomatis, dan rekap hasil.',
    bullets: [
      'Dibangun dengan Next.js 14 (App Router), TypeScript, dan Tailwind CSS.',
      'Bank soal dengan tipe pilihan ganda (penilaian otomatis) dan esai (penilaian manual).',
      'Penjadwalan ujian via token akses, timer mundur, navigasi antar soal, dan auto-save tiap jawaban.',
      'Submit otomatis saat waktu habis. Rekap hasil per sesi untuk admin/guru.',
      'Token demo: DEMO26 — bisa langsung dicoba di /ujian/masuk.',
    ],
    images: UJIAN_IMAGES,
    links: [],
    wide: true,
  },
  {
    key: 'perpus',
    tags: [
      { label: 'React.js', color: 'pink' },
      { label: 'Golang', color: 'sky' },
      { label: 'SQLite', color: 'green' },
      { label: 'Gmail SMTP', color: 'gold' },
    ],
    name: 'Sistem Informasi Perpustakaan Berbasis Web',
    org: 'Proyek Sertifikasi Profesi – Universitas Langlangbuana',
    period: 'Jun 2026 – Jul 2026',
    desc: 'Pengelolaan buku, anggota, transaksi pinjam-kembali, dan notifikasi email otomatis via Gmail SMTP.',
    bullets: [
      'Mengembangkan sistem informasi perpustakaan menggunakan React.js, Golang (REST API), dan SQLite hingga tahap implementasi.',
      'Membangun fitur pengelolaan buku, anggota, serta transaksi peminjaman dan pengembalian.',
      'Mengimplementasikan notifikasi otomatis melalui email menggunakan Gmail SMTP kepada pengguna.',
    ],
    images: [],
    links: [
      {
        label: 'Lihat Demo / Dokumen Proyek',
        url: 'https://drive.google.com/file/d/1fPU7BQ_fHn8VOyIbMliv9u8-72MVxhYc/view?usp=sharing',
        icon: '📂',
      },
    ],
  },
  {
    key: 'newenergy',
    tags: [
      { label: 'React.js', color: 'pink' },
      { label: 'REST API', color: 'gold' },
    ],
    name: 'Company Profile – PT New Energy Integrasi',
    org: 'PT New Energy Integrasi',
    period: 'Jul 2026',
    desc: 'Website company profile responsif modern dengan integrasi dokumen PDF dan REST API.',
    bullets: [
      'Mengembangkan website company profile berbasis React.js dengan tampilan responsif dan modern.',
      'Menampilkan profil perusahaan, layanan, proyek, informasi kontak, serta dokumen PDF.',
      'Mengimplementasikan integrasi REST API untuk kebutuhan data dinamis.',
    ],
    images: [],
    links: [
      {
        label: 'Kunjungi Website',
        url: 'https://pt-new-energy-integrasi.web.app/',
        icon: '🌐',
      },
    ],
  },
  {
    key: 'pendaftaran',
    tags: [
      { label: 'Flutter', color: 'pink' },
      { label: 'Supabase', color: 'sky' },
    ],
    name: 'Aplikasi Pendaftaran Murid',
    org: 'Yayasan Silih Asih Kinayungan',
    period: '2025',
    desc: 'Pendaftaran online, real-time database, dan dashboard admin pengelolaan data murid.',
    bullets: [
      'Merancang dan mengembangkan aplikasi Android menggunakan Flutter dan Supabase.',
      'Memfasilitasi proses pendaftaran siswa secara online, penyimpanan data secara real-time, serta dashboard admin.',
    ],
    images: [],
    links: [
      {
        label: 'Lihat Demo / Dokumen Proyek',
        url: 'https://drive.google.com/file/d/1mOklh5W06u-C_NKS4AjC8NcUfMc87qwt/view',
        icon: '📱',
      },
    ],
  },
];

export const CERTS: CertItem[] = [
  {
    key: 'excel',
    title: 'Microsoft Excel',
    issuer: 'Sertifikasi Keahlian',
    pdf: '/certs/excel.pdf',
    link: '/certs/excel.pdf',
  },
  {
    key: 'ds',
    title: 'Data Analysis',
    issuer: 'Pelatihan & Sertifikasi',
    pdf: '/certs/Certificate Data Analysis.pdf',
    link: '/certs/Certificate Data Analysis.pdf',
  },
  {
    key: 'pemrograman',
    title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
    issuer: 'Dicoding Indonesia',
    pdf: '/certs/dasar pengembang software.pdf',
    link: '/certs/dasar pengembang software.pdf',
  },
  {
    key: 'manpro',
    title: 'Belajar Dasar Manajemen Proyek',
    issuer: 'Dicoding Indonesia',
    pdf: '/certs/manajemen proyek.pdf',
    link: '/certs/manajemen proyek.pdf',
  },
  {
    key: 'ai',
    title: 'Belajar Dasar AI ',
    issuer: 'Dicoding Indonesia',
    pdf: '/certs/belajar dasar ai.pdf',
    link: '/certs/belajar dasar ai.pdf',
  },
  {
    key: 'python',
    title: 'Memulai Pemrograman dengan Python',
    issuer: 'Dicoding Indonesia',
    pdf: '/certs/Memulai Program dengan Python.pdf',
    link: '/certs/Memulai Program dengan Python.pdf',
  },
  {
    key: 'js',
    title: 'Belajar Dasar Pemrograman JavaScript',
    issuer: 'Dicoding Indonesia',
    pdf: '/certs/belajar javascript.pdf',
    link: '/certs/belajar javascript.pdf',
  },
  {
    key: 'sql',
    title: 'Belajar Dasar Structured Query Language (SQL)',
    issuer: 'Dicoding Indonesia',
    pdf: '/certs/Belajar sql.pdf',
    link: '/certs/Belajar sql.pdf',
  },
];
