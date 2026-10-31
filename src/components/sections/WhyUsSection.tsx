import BentoCard from "@/components/ui/BentoCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { missionQuote, whyUsPoints } from "@/lib/data/whyUs";
import { siteConfig } from "@/lib/site";

export default function WhyUsSection() {
  return (
    <section id="about" className="scroll-mt-20 py-10 sm:py-14" aria-labelledby="about-heading">
      <SectionHeader
        eyebrow={`Why ${siteConfig.name}`}
        titleId="about-heading"
        title="A software partner that owns the outcome"
        description={`${siteConfig.name} combines products and engineering under one roof — one point of accountability.`}
      />

      <blockquote className="mx-auto mt-8 max-w-2xl rounded-xl border border-ink-200 bg-surface-muted px-6 py-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Our mission</p>
        <p className="mt-2 text-base font-medium leading-relaxed text-ink-800">{missionQuote}</p>
      </blockquote>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {whyUsPoints.map((point) => {
          const Icon = point.icon;
          return (
            <li key={point.id}>
              <BentoCard className="p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-100">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-bold text-ink-950">{point.title}</h3>
                <p className="mt-2 text-sm text-ink-600">{point.description}</p>
              </BentoCard>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
