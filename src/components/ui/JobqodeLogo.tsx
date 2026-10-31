type JobqodeLogoProps = {
  className?: string;
  /** "light" = white text for dark backgrounds, "dark" = near-black text for light backgrounds */
  variant?: "light" | "dark";
  size?: "sm" | "md";
};

/**
 * Text wordmark in the style of the Marklab template logo:
 * a heavy, slanted first letter followed by a clean medium-weight sans, single colour, tight tracking.
 */
export default function JobqodeLogo({ className = "", variant = "light", size = "md" }: JobqodeLogoProps) {
  const sizeClass = size === "sm" ? "text-lg" : "text-[1.75rem]";
  const colorClass = variant === "light" ? "text-white" : "text-ink-950";

  return (
    <span
      className={`inline-flex items-baseline leading-none tracking-[-0.045em] ${sizeClass} ${colorClass} ${className}`}
      aria-hidden="true"
    >
      <span className="mr-[0.04em] inline-block -skew-x-[14deg] font-black">J</span>
      <span className="font-medium">obqode</span>
    </span>
  );
}
