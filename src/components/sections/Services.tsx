import BentoCard from "@/components/ui/BentoCard";
import SectionPill from "@/components/ui/SectionPill";
import { services } from "@/lib/data/services";

const featuredServiceIds = [
  "custom-software",
  "web-applications",
  "mobile-applications",
  "ai-applications",
] as const;

export default function Services() {
  const featured = featuredServiceIds
    .map((id) => services.find((s) => s.id === id))
    .filter((s): s is (typeof services)[number] => s !== undefined);

  return (
    <BentoCard
      id="services"
      className="scroll-mt-6 px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14"
      aria-labelledby="services-heading"
    >
      <section aria-labelledby="services-heading">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm leading-relaxed text-ink-500 sm:text-base">
            We partner with organisations to create practical software — from products to custom
            builds.
          </p>
          <div className="mt-6 flex justify-center">
            <SectionPill label="Services" />
          </div>
          <h2
            id="services-heading"
            className="mt-6 text-2xl font-semibold tracking-tighter text-ink-950 sm:text-3xl"
          >
            Custom software development
          </h2>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((service) => {
            const Icon = service.icon;
            return (
              <li key={service.id} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-ink-900/10 bg-[#f8f8f8] text-ink-800">
                  <Icon className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-ink-950">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{service.value}</p>
              </li>
            );
          })}
        </ul>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink-500">
          Also: API integration, SaaS product builds, and application modernization —{" "}
          <a href="#contact" className="font-medium text-ink-800 underline-offset-2 hover:underline">
            ask us about the full list
          </a>
          .
        </p>
      </section>
    </BentoCard>
  );
}
