import { ArrowRight } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import HeroEmailLead from "./HeroEmailLead";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-20 rounded-2xl border border-ink-200 bg-gradient-to-b from-surface-muted to-white px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold tracking-[0.16em] text-ink-500 uppercase">{siteConfig.heroEyebrow}</p>

        <h1
          id="hero-heading"
          className="mt-5 text-[2rem] font-extrabold leading-[1.08] tracking-tight text-ink-950 sm:text-5xl lg:text-[3.25rem]"
        >
          {siteConfig.heroTitle}
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg">{siteConfig.heroLead}</p>

        <div className="mx-auto mt-9 flex max-w-xl flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
          <ButtonLink href="#products" className="min-h-12 px-8 text-[15px]">
            View products
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="#contact" variant="secondary" className="min-h-12 px-8 text-[15px]">
            Get started
          </ButtonLink>
        </div>

        <div className="mx-auto mt-10 max-w-lg">
          <p className="mb-3 text-xs font-semibold text-ink-500">Or leave your email — we&apos;ll reach out</p>
          <HeroEmailLead />
        </div>
      </div>
    </section>
  );
}
