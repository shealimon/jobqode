interface LogoProps {
  variant?: "dark" | "light";
  compact?: boolean;
}

export default function Logo({ variant = "dark", compact = false }: LogoProps) {
  const word = variant === "light" ? "text-white" : "text-ink-950";
  const mark = variant === "light" ? "bg-accent-300 text-ink-950" : "bg-accent-300 text-ink-950";

  if (compact) {
    return (
      <span className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ${mark} font-bold`} aria-hidden="true">
        J
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2 ${word}`}>
      <span className={`inline-flex h-9 w-9 items-center justify-center rounded-lg ${mark} text-sm font-bold`} aria-hidden="true">
        J
      </span>
      <span className="text-lg font-bold tracking-tight">Jobqode</span>
    </span>
  );
}
