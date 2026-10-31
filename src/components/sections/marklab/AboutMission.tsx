import MarklabContainer from "@/components/ui/MarklabContainer";
import MarklabImg from "@/components/ui/MarklabImg";
import { siteConfig } from "@/lib/site";

export default function AboutMission() {
  return (
    <section id="about" className="marklab-section scroll-mt-24 bg-white">
      <MarklabContainer>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <p className="text-sm font-medium text-ink-500">Who we are</p>
            <h2 className="mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.04em] text-[#202342]">
              Your B2B software delivery partner
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-600">
              {siteConfig.name} helps teams run people, customer, and data operations on reliable software — HCM, CRM,
              analytics, or custom builds when you need them.
            </p>
          </div>
          <div className="relative aspect-[4/3] min-h-[12rem] overflow-hidden rounded-2xl bg-[#eef0ff] lg:min-h-0">
            <MarklabImg src="/marklab/about-team.png" alt="" fill className="object-cover object-center" />
            <MarklabImg
              src="/marklab/about-growth.svg"
              alt=""
              width={120}
              height={120}
              className="pointer-events-none absolute bottom-4 right-4 z-[1] h-20 w-20 object-contain sm:bottom-6 sm:right-6 sm:h-24 sm:w-24"
            />
          </div>
        </div>
      </MarklabContainer>
    </section>
  );
}
