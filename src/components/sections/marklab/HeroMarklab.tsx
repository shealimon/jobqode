import { ArrowUpRight } from "lucide-react";
import MarklabButton from "@/components/ui/MarklabButton";
import MarklabImg from "@/components/ui/MarklabImg";
import { siteConfig } from "@/lib/site";

export default function HeroMarklab() {
  return (
    <section
      id="home"
      className="hero-marklab relative scroll-mt-20 min-h-[38.75rem] px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-36 lg:min-h-[44rem] lg:px-8 lg:pb-[5rem] lg:pt-[12.5rem] xl:min-h-[46rem]"
    >
      <div className="hero-marklab__bg" aria-hidden="true">
        <MarklabImg src="/marklab/hero-bg.webp" alt="" fill priority className="object-cover object-[50%_0]" />
      </div>

      <div className="relative z-[3] mx-auto flex min-h-[20rem] max-w-[56rem] flex-col items-center justify-center lg:min-h-[22rem]">
        <h1 className="text-center text-[clamp(2.75rem,7.2vw,6.875rem)] font-medium leading-[1.08] tracking-[-0.04em] text-white lg:tracking-[-0.055em]">
          Software that
          <br />
          <span className="font-serif-display italic">moves the</span> Business
        </h1>

        <p className="mx-auto mt-5 max-w-md text-center text-base text-[#dcdee2]">{siteConfig.heroLead}</p>

        <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-6">
          <MarklabImg
            src="/marklab/cta-arrow.svg"
            alt=""
            width={86}
            height={85}
            className="hidden h-[4.5rem] w-auto opacity-90 sm:block"
          />

          <MarklabButton href="#contact" variant="light" size="lg">
            Let&apos;s Contact
          </MarklabButton>

          <a
            href={`mailto:${siteConfig.email}?subject=Book a call`}
            className="inline-flex items-center gap-1.5 text-base font-semibold text-white transition-colors hover:text-white/90"
          >
            Book a call
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
}
