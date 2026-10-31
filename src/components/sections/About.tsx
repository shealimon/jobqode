import BentoCard from "@/components/ui/BentoCard";
import SectionPill from "@/components/ui/SectionPill";
import { siteConfig } from "@/lib/site";

export default function About() {
  return (
    <BentoCard
      id="about"
      className="scroll-mt-6 px-5 py-10 sm:px-8 sm:py-12 lg:px-10"
      aria-labelledby="about-heading"
    >
      <section className="mx-auto max-w-2xl text-center">
        <div className="flex justify-center">
          <SectionPill label="About" />
        </div>
        <h2 id="about-heading" className="mt-6 text-2xl font-semibold tracking-tighter text-ink-950 sm:text-3xl">
          About {siteConfig.name}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
          We build <strong className="font-semibold text-ink-800">Jobqode HCM, CRM and Analytics</strong>{" "}
          for organisations that need structured software for people, customers and data. We also deliver
          custom applications when your requirements need a dedicated build.
        </p>
        <p className="mt-3 text-sm text-ink-400">Based in {siteConfig.location}.</p>
      </section>
    </BentoCard>
  );
}
