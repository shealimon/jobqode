import BentoCard from "@/components/ui/BentoCard";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionHeader from "@/components/ui/SectionHeader";
import { expertiseGroups } from "@/lib/data/expertise";

export default function ExpertiseSection() {
  return (
    <BentoCard id="expertise" className="scroll-mt-20 px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14" aria-labelledby="expertise-heading">
      <SectionHeader
        eyebrow="Our toolkit"
        titleId="expertise-heading"
        title="Depth across the platforms that matter"
        description="We recommend the right tool for the job — and have hands-on experience delivering on it."
      />

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {expertiseGroups.map((group) => (
          <li key={group.id} className="rounded-2xl border border-ink-900/[0.08] bg-white p-6">
            <h3 className="text-sm font-semibold text-ink-950">{group.title}</h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-ink-600">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-8 max-w-lg text-center text-sm text-ink-600">
        Don&apos;t see your stack? If it&apos;s part of your environment, ask us — we often support adjacent systems through integration work.
      </p>
      <div className="mt-6 flex justify-center">
        <ButtonLink href="#contact" variant="secondary">
          Ask about your environment
        </ButtonLink>
      </div>
    </BentoCard>
  );
}
