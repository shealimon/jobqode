import { ArrowUpRight } from "lucide-react";
import MarklabButton from "@/components/ui/MarklabButton";
import MarklabImg from "@/components/ui/MarklabImg";
import { siteConfig } from "@/lib/site";

function AboutCardRings() {
  return (
    <div className="marklab-intro-rings" aria-hidden="true">
      <svg viewBox="0 0 120 120" fill="none" className="h-full w-full">
        <circle cx="60" cy="60" r="52" stroke="#202342" strokeOpacity="0.15" strokeWidth="1" />
        <circle cx="60" cy="60" r="38" stroke="#202342" strokeOpacity="0.2" strokeWidth="1" />
        <circle cx="60" cy="60" r="24" stroke="#202342" strokeOpacity="0.25" strokeWidth="1" />
        <circle cx="60" cy="60" r="8" fill="#202342" fillOpacity="0.12" />
      </svg>
    </div>
  );
}

export default function MarklabIntroCards() {
  return (
    <section className="marklab-intro-section scroll-mt-24">
      <div className="marklab-intro-section__container">
        <div className="marklab-intro-grid">
          <div className="marklab-intro-card marklab-intro-card--cta">
            <div className="marklab-intro-growth-row">
              <div className="marklab-intro-growth-widget">
                <p className="marklab-intro-growth-label">Revenue Growth</p>
                <p className="marklab-intro-growth-value">99%</p>
                <div className="marklab-intro-growth-bar">
                  <div className="marklab-intro-growth-bar__fill" />
                </div>
              </div>
              <MarklabImg
                src="/marklab/about-growth.svg"
                alt=""
                width={76}
                height={76}
                className="marklab-intro-growth-icon"
              />
            </div>

            <div className="marklab-intro-cta-main">
              <h2 className="marklab-intro-cta-title">
                Choose {siteConfig.name}{" "}
                <span className="marklab-intro-em">for digital operations</span>
              </h2>
              <p className="marklab-intro-cta-lead">
                we go beyond scattered tools — ERP, HCM, CRM, analytics, and engineering that fit how you work.
              </p>
              <div className="marklab-intro-cta-actions">
                <MarklabButton href="#contact" variant="brand">
                  Let&apos;s Contact
                </MarklabButton>
                <a
                  href={`mailto:${siteConfig.email}?subject=Book a call`}
                  className="marklab-intro-book-call"
                >
                  Book a call
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div id="about" className="marklab-intro-card marklab-intro-card--about scroll-mt-28">
            <AboutCardRings />
            <p className="marklab-intro-eyebrow">Who we are</p>
            <h2 className="marklab-intro-about-title">
              Become your trusted{" "}
              <span className="marklab-intro-em">B2B software</span>{" "}
              <span className="marklab-intro-accent">partner</span>
            </h2>
            <p className="marklab-intro-about-body">
              We help B2B teams run people, customer, finance, and data operations on reliable software —{" "}
              {siteConfig.name} products when they fit, and custom ERP, web, portal, and AI solutions when you need
              something built around how you work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
