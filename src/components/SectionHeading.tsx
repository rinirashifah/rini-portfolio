interface SectionHeadingProps {
  kicker: string;
  title?: string;
  subtitle?: string;
}

export default function SectionHeading({ kicker, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-6 sm:mb-8">
      <div className="mb-2 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[2.5px] text-[#e91e8c] dark:text-[#ff85c8]">
        <span className="block h-0.5 w-5 rounded-full bg-gradient-to-r from-[#e91e8c] to-[#ffd700]" />
        {kicker}
      </div>
      {title && (
        <h2
          className="font-display font-black tracking-tight text-[#3d0030] transition-colors duration-300 dark:text-[#fff0f7]"
          style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-1.5 text-[13px] text-[#6b2148]/80 dark:text-[#f3c2de]/80 sm:text-[14px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
