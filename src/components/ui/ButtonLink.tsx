import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "ghost" | "dark";
  children: ReactNode;
}

const variants: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "rounded-lg border border-accent-600 bg-accent-300 text-ink-950 hover:bg-accent-400 focus-visible:outline-accent-600",
  secondary:
    "rounded-lg border border-ink-200 bg-white text-ink-900 hover:border-ink-300 hover:bg-surface-muted focus-visible:outline-ink-950",
  ghost:
    "rounded-lg border border-ink-200 bg-transparent text-ink-800 hover:bg-surface-muted focus-visible:outline-ink-950",
  dark:
    "rounded-lg border border-ink-950 bg-ink-950 text-white hover:bg-ink-800 focus-visible:outline-ink-950",
};

export default function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex min-h-10 items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
