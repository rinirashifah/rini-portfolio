import SectionHeading from '../components/SectionHeading';

interface SkillCategory {
  title: string;
  icon: string;
  badgeColor: string;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: '💻',
    badgeColor: 'border-[#e91e8c]/30 bg-[#e91e8c]/[0.08] text-[#880e4f] dark:text-[#ff85c8] dark:bg-[#e91e8c]/15',
    items: ['Python', 'Golang', 'Dart', 'JavaScript', 'SQL', 'C / C++'],
  },
  {
    title: 'Web & Enterprise',
    icon: '🚀',
    badgeColor: 'border-[#0891b2]/30 bg-[#0891b2]/[0.08] text-[#0e7490] dark:text-[#67e8f9] dark:bg-[#0891b2]/15',
    items: ['Odoo ERP', 'React.js', 'Next.js 14', 'Flutter', 'Laravel', 'REST API', 'Tailwind CSS'],
  },
  {
    title: 'Data & Tools',
    icon: '📊',
    badgeColor: 'border-[#b8860b]/30 bg-[#ffd700]/[0.12] text-[#854d0e] dark:text-[#fde047] dark:bg-[#ffd700]/15',
    items: ['Machine Learning', 'Data Analysis', 'PostgreSQL', 'Git / GitHub', 'Supabase / Firebase', 'Arduino / ESP32'],
  },
];

export default function Skill() {
  return (
    <section className="mt-14 sm:mt-20" id="skills">
      <SectionHeading
        kicker="Keahlian"
        title="Skill & Engineering Stack"
        subtitle="Teknologi dan tools yang sering saya gunakan dalam pengembangan perangkat lunak."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        {skillCategories.map((cat) => (
          <div
            key={cat.title}
            className="group relative overflow-hidden rounded-[22px] border-2 border-[#ffd6ec] bg-white p-5 transition-all duration-200 dark:border-[#e91e8c]/[0.22] dark:bg-[#1a0015] sm:p-6 [@media(hover:hover)]:hover:-translate-y-1 [@media(hover:hover)]:hover:border-[#e91e8c] [@media(hover:hover)]:hover:shadow-[0_12px_32px_rgba(233,30,140,.12)]"
          >
            {/* Top accent bar */}
            <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#e91e8c] via-[#ffd700] to-[#ff85c8] opacity-80" />

            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0f7] text-xl shadow-xs dark:bg-[#2a001f]">
                {cat.icon}
              </span>
              <div>
                <h3 className="font-display text-[17px] font-bold text-[#3d0030] dark:text-[#fff0f7]">
                  {cat.title}
                </h3>
                <span className="text-[11px] font-semibold text-[#8b1a5e] dark:text-[#f3c2de]">
                  {cat.items.length} Keahlian
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.items.map((skill) => (
                <span
                  key={skill}
                  className={`inline-flex items-center rounded-xl border px-3 py-1.5 text-[12px] font-bold transition-transform [@media(hover:hover)]:hover:scale-105 ${cat.badgeColor}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
