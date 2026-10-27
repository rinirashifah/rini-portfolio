interface TagProps {
  label: string;
  color: 'pink' | 'sky' | 'gold' | 'green' | 'gray';
}

const colorMap: Record<string, string> = {
  pink:  'text-[#c2185b] border-[#f8bbd0] bg-[#fce4ec] dark:text-[#ff85c8] dark:border-[#e91e8c]/40 dark:bg-[#e91e8c]/20',
  sky:   'text-[#0284c7] border-[#bae6fd] bg-[#e0f2fe] dark:text-[#38bdf8] dark:border-[#0284c7]/40 dark:bg-[#0284c7]/20',
  gold:  'text-[#d97706] border-[#fde68a] bg-[#fef3c7] dark:text-[#fbbf24] dark:border-[#d97706]/40 dark:bg-[#d97706]/20',
  green: 'text-[#059669] border-[#a7f3d0] bg-[#d1fae5] dark:text-[#34d399] dark:border-[#059669]/40 dark:bg-[#059669]/20',
  gray:  'text-[#475569] border-[#cbd5e1] bg-[#f1f5f9] dark:text-[#cbd5e1] dark:border-white/20 dark:bg-white/10',
};

export default function Tag({ label, color }: TagProps) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-[9.5px] font-extrabold tracking-wide uppercase transition-colors sm:px-3 sm:py-0.5 sm:text-[10px] ${
        colorMap[color] || colorMap.pink
      }`}
    >
      {label}
    </span>
  );
}
