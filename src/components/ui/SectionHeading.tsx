interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  titleId?: string;
  index?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  titleId,
  index,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <p
        className={`text-xs font-semibold tracking-[0.2em] uppercase ${
          centered ? "text-center" : ""
        } ${dark ? "text-ink-300" : "text-ink-500"}`}
      >
        {index && <span className="mr-2">{index}</span>}
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className={`mt-3 font-serif-display text-3xl font-normal leading-[1.12] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-white" : "text-ink-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? "text-ink-300" : "text-ink-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
