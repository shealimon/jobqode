import { ArrowRight } from "lucide-react";
import BentoCard from "@/components/ui/BentoCard";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionHeader from "@/components/ui/SectionHeader";
import { aiOfferings } from "@/lib/data/aiOfferings";

export default function AiSection() {
  return (
    <section id="ai" className="scroll-mt-20 py-10 sm:py-14" aria-labelledby="ai-heading">
      <SectionHeader
        eyebrow="Artificial intelligence"
        titleId="ai-heading"
        title="AI that ships — not experiments that stall"
        description="Practical AI in Jobqode products and custom apps — measured by outcomes, not demos."
      />

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {aiOfferings.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.id}>
              <BentoCard className="p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-accent-600">{item.label}</p>
                <div className="mt-3 flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-100">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold text-ink-950">{item.title}</h3>
                    <p className="mt-2 text-sm text-ink-600">{item.description}</p>
                  </div>
                </div>
              </BentoCard>
            </li>
          );
        })}
      </ul>

      <div className="mt-8 flex justify-center">
        <ButtonLink href="#contact" variant="secondary" className="gap-2">
          Talk through your AI use case
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
      </div>
    </section>
  );
}
