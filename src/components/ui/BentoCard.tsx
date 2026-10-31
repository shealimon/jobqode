import type { HTMLAttributes, ReactNode } from "react";

type BentoCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
  muted?: boolean;
};

export default function BentoCard({ children, className = "", muted = false, ...props }: BentoCardProps) {
  return (
    <div
      className={`scroll-mt-20 rounded-xl border border-ink-200 bg-bento-surface shadow-sm ${
        muted ? "bg-surface-muted" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
