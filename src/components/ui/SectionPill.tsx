export default function SectionPill({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full border border-ink-900/10 px-3 py-1 text-xs font-semibold uppercase text-ink-600">
      {label}
    </span>
  );
}
