import { ArrowUpRight } from "lucide-react";
import MarklabButton from "@/components/ui/MarklabButton";
import MarklabContainer from "@/components/ui/MarklabContainer";
import { siteConfig } from "@/lib/site";

export default function MidCta() {
  return (
    <section className="pb-12 pt-8 sm:pb-[3.75rem]">
      <MarklabContainer>
        <div className="mx-auto max-w-[42rem] text-center">
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.04em] text-[#202342]">
            Choose {siteConfig.name} for digital operations
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink-500">
            we go beyond scattered tools — products and engineering that fit how you work.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
            <MarklabButton href="#contact" variant="dark">
              Let&apos;s Contact
            </MarklabButton>
            <a
              href={`mailto:${siteConfig.email}?subject=Book a call`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#202342]"
            >
              Book a call
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </MarklabContainer>
    </section>
  );
}
