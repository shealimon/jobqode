import { ArrowUpRight } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

interface MarklabButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "brand" | "dark" | "light" | "outline";
  size?: "sm" | "md" | "lg" | "banner";
}

export default function MarklabButton({
  children,
  variant = "dark",
  size = "md",
  className = "",
  ...props
}: MarklabButtonProps) {
  const shell =
    variant === "light"
      ? "bg-white text-ink-950 hover:bg-neutral-100"
      : variant === "outline"
        ? "border border-white/25 bg-white/5 text-white hover:bg-white/10"
        : variant === "brand"
          ? "bg-[#4555fd] text-white hover:bg-[#3d4be0]"
          : "bg-marklab-nav-btn text-white hover:bg-[#5c5f78]";

  const iconShell = variant === "light" ? "bg-ink-950 text-white" : "bg-white text-ink-950";

  const sizeClass =
    size === "sm"
      ? "min-h-[2.75rem] py-1.5 pl-[1.125rem] text-sm"
      : size === "banner"
        ? "min-h-[4.375rem] gap-3 py-[0.9375rem] pl-6 text-[1.125rem]"
        : size === "lg"
          ? "min-h-[4.375rem] py-[0.9375rem] pl-6 text-base"
          : "min-h-12 py-2 pl-6 text-sm";

  const iconSize =
    size === "banner" ? "h-10 w-10" : size === "lg" ? "h-[2.75rem] w-[2.75rem]" : "h-9 w-9";

  const weightClass = size === "banner" ? "font-medium" : "font-semibold";

  const shadowClass = variant === "light" && size !== "banner" ? "shadow-lg shadow-black/20" : "";

  const padRightClass = size === "banner" ? "pr-[0.9375rem]" : "pr-1.5";

  return (
    <a
      className={`inline-flex items-center gap-2.5 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${padRightClass} ${weightClass} ${shadowClass} ${shell} ${sizeClass} ${className}`}
      {...props}
    >
      <span className="shrink-0 whitespace-nowrap">{children}</span>
      <span className={`flex shrink-0 items-center justify-center rounded-full ${iconShell} ${iconSize}`}>
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </a>
  );
}
