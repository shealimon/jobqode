import BentoCard from "@/components/ui/BentoCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/lib/data/services";

export default function BentoServicesAbout() {
  return (
    <section id="services" className="scroll-mt-20 py-10 sm:py-14" aria-labelledby="services-heading">
      <SectionHeader
        eyebrow="Services"
        titleId="services-heading"
        title="Custom software & implementation"
        description="Engineering when you need applications, integrations, or product extensions beyond our catalogue."
      />

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <li key={service.id}>
              <BentoCard className="flex h-full gap-4 p-5 sm:p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-100 text-ink-900">
                  <Icon className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-ink-950 sm:text-base">{service.title}</h3>
                  <p className="mt-1 text-sm text-ink-600">{service.value}</p>
                </div>
              </BentoCard>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
