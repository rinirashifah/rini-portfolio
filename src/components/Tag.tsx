interface TagProps {
  label: string;
  color: 'pink' | 'sky' | 'gold' | 'green';
}

const colorMap: Record<string, string> = {
  pink:  'text-[#e91e8c] border-[#e91e8c]/35 bg-[#e91e8c]/[0.07]',
  sky:   'text-[#0891b2] border-[#0891b2]/35 bg-[#0891b2]/[0.07] dark:text-[#67e8f9]',
  gold:  'text-[#b8860b] border-[#ffd700]/50 bg-[#ffd700]/10 dark:text-[#ffd700]',
  green: 'text-[#059669] border-[#059669]/35 bg-[#059669]/[0.07] dark:text-[#34d399]',
};

export default function Tag({ label, color }: TagProps) {
  return (
    <span className={`whitespace-nowrap rounded-full border-[1.5px] px-2.5 py-1 text-[9.5px] font-extrabold uppercase sm:px-3 sm:text-[10px] ${colorMap[color]}`}>
      {label}
    </span>
  );
}
