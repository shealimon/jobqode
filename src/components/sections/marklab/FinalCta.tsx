import { ArrowUpRight } from "lucide-react";
import MarklabButton from "@/components/ui/MarklabButton";
import MarklabContainer from "@/components/ui/MarklabContainer";
import { siteConfig } from "@/lib/site";

export default function FinalCta() {
  return (
    <section id="contact" className="marklab-final-cta scroll-mt-24">
      <MarklabContainer className="relative z-[1]">
        <div className="marklab-final-cta__inner">
          <p className="marklab-final-cta__eyebrow">Start building now</p>
          <h2 className="marklab-final-cta__title">
            Ready to <span className="marklab-final-cta__em">see</span>
            <br aria-hidden="true" className="marklab-final-cta__title-br" />
            <span className="marklab-final-cta__em">real</span> Results
          </h2>
          <div className="marklab-final-cta__actions">
            <MarklabButton
              href={`mailto:${siteConfig.email}`}
              variant="light"
              size="md"
              className="marklab-final-cta__primary"
            >
              Let&apos;s Contact
            </MarklabButton>
            <a
              href={`mailto:${siteConfig.email}?subject=Book a call`}
              className="marklab-final-cta__secondary"
            >
              Book a call
              <ArrowUpRight className="marklab-final-cta__secondary-icon" aria-hidden="true" />
            </a>
          </div>
        </div>
      </MarklabContainer>
    </section>
  );
}
