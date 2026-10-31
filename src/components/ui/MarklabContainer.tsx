import type { ReactNode } from "react";

/** Matches Marklab `.w-container` (~905px) */
export default function MarklabContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[56.5625rem] px-4 sm:px-6 ${className}`}>{children}</div>;
}
