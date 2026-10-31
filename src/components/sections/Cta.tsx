import { Mail, MapPin } from "lucide-react";
import BentoCard from "@/components/ui/BentoCard";
import ButtonLink from "@/components/ui/ButtonLink";
import { siteConfig } from "@/lib/site";

export default function Cta() {
  return (
    <section id="contact" className="scroll-mt-20 py-10 sm:py-14" aria-labelledby="cta-heading">
      <BentoCard className="p-8 sm:p-10">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold text-accent-600">Get in touch</p>
          <h2 id="cta-heading" className="mt-2 text-2xl font-bold text-ink-950 sm:text-3xl">
            Tell us what you&apos;re trying to build
          </h2>
          <p className="mt-3 text-sm text-ink-600">
            Product rollout, custom build, or AI — we&apos;ll reply with a clear next step.
          </p>

          <ul className="mt-6 inline-flex flex-col items-start gap-2 text-left text-sm text-ink-700">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent-600" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="font-semibold hover:text-accent-700">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent-600" aria-hidden="true" />
              {siteConfig.location}
            </li>
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <ButtonLink href={`mailto:${siteConfig.email}`} className="gap-2">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Send message
            </ButtonLink>
            <ButtonLink href="#products" variant="secondary">
              View products
            </ButtonLink>
          </div>
        </div>
      </BentoCard>
    </section>
  );
}
