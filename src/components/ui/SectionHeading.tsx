interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  alignment?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  alignment = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = alignment === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl mb-14 lg:mb-20 ${alignClass}`}>
      {subtitle && (
        <p
          className={`text-[11px] uppercase tracking-[0.3em] font-semibold mb-4 ${
            light ? "text-gold-400" : "text-gold-400"
          }`}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-[3.25rem] font-semibold leading-[1.15] mb-5 ${
          light ? "text-white" : "text-white"
        }`}
      >
        {title}
      </h2>

      {/* Ornamental gold divider with diamond */}
      <div
        className={`ornament-divider mb-6 ${
          alignment === "center" ? "justify-center" : "justify-start"
        }`}
      >
        <div className="diamond" />
      </div>

      {description && (
        <p
          className={`text-[15px] lg:text-base leading-[1.8] ${
            light ? "text-white/55" : "text-white/50"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
