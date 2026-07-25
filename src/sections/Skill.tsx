const stack = {
  Languages: ["Dart", "JavaScript", "TypeScript", "Golang"],
  Frontend: ["Flutter", "React.js", "React Native", "TailwindCSS"],
  Tools: ["Supabase", "Firebase", "SQLite", "Git / Github"],
};

export default function Skill() {
  return (
    <div className="stack-section">
      <div className="stack-title">Engineering Stack</div>
      <div className="stack-cols">
        {Object.entries(stack).map(([label, items]) => (
          <div key={label} className="stack-col">
            <div className="stack-col-label">{label}</div>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
