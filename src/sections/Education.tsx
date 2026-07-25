export default function Education() {
  return (
    <div className="card">
      <div className="section-eyebrow">Pendidikan</div>
      <h2 className="section-heading">Riwayat Pendidikan</h2>
      <div className="edu-list">
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
    </div>
  );
}
