import BentoCard from "@/components/ui/BentoCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { featureCards } from "@/lib/data/featureCards";

export default function WhatWeDo() {
  return (
    <section id="features" className="scroll-mt-20 py-4 sm:py-6" aria-labelledby="features-heading">
      <SectionHeader
        eyebrow="Through our features"
        titleId="features-heading"
        title="Everything you need to run people, customers, and data"
        description="Products and services designed to work together — from first deployment to long-term support."
      />

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {featureCards.map((card) => {
          const Icon = card.icon;
          return (
            <li key={card.id}>
              <BentoCard className="flex h-full flex-col p-6 sm:p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-100 text-ink-900">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink-950">{card.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{card.description}</p>
                {card.prompt ? (
                  <div className="mt-5 rounded-lg border border-ink-200 bg-surface-muted px-3 py-2.5 text-xs text-ink-500">
                    <span className="font-medium text-ink-700">Example: </span>
                    {card.prompt}
                  </div>
                ) : (
                  <div className="mt-5 flex gap-2" aria-hidden="true">
                    <span className="h-2 flex-1 rounded-full bg-accent-300" />
                    <span className="h-2 w-1/3 rounded-full bg-ink-200" />
                  </div>
                )}
              </BentoCard>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
