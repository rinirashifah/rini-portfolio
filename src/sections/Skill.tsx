const skills = [
  "Flutter (Dart)",
  "Supabase",
  "Firebase",
  "Google Workspace",
  "Notion",
  "Scratch",
  "Arduino",
  "ESP32 / Wemos",
  "Android Development",
  "React",
  "Typescript",
];

export default function Skill() {
  return (
    <div className="card">
      <div className="section-eyebrow">Keahlian</div>
      <h2 className="section-heading">Tech Stack</h2>
      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s} className="skill-chip">
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}
