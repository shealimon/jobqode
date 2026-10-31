export default function SectionHeader({
  eyebrow,
  title,
  titleId,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  titleId: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignClass = align === "left" ? "text-left" : "mx-auto max-w-2xl text-center";

  return (
    <header className={alignClass}>
      {eyebrow ? <p className="text-sm font-semibold text-accent-600">{eyebrow}</p> : null}
      <h2 id={titleId} className="mt-2 text-2xl font-bold tracking-tight text-ink-950 sm:text-3xl">
        {title}
      </h2>
      {description ? <p className="mt-3 text-sm leading-relaxed text-ink-600 sm:text-base">{description}</p> : null}
    </header>
  );
}
