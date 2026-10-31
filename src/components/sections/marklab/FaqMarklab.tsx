"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

const faqs = [
  {
    q: "What makes Jobqode different?",
    a: "Our own HCM, CRM, and analytics products plus custom engineering — one partner for both. We help you choose product vs custom with clear scope, not a one-size pitch.",
  },
  {
    q: "Which industries do you work with?",
    a: "B2B teams in services, retail, logistics, healthcare ops, and technology — wherever people, customers, and data need reliable systems.",
  },
  {
    q: "How soon can we go live?",
    a: "Product rollouts can start in weeks. Custom work follows a scoped timeline after discovery, with milestones you can track.",
  },
  {
    q: "Do you offer customized plans?",
    a: "Yes — every engagement is scoped to your requirements, integrations, and budget. You get options, not a fixed package only.",
  },
  {
    q: "What services does Jobqode offer?",
    a: "Jobqode ERP, HCM, CRM, Analytics, AI solutions, web apps, portals, integrations, and ongoing support.",
  },
  {
    q: "How do we get started?",
    a: `Email ${siteConfig.email} with a short note on your goals — we'll reply with next steps and a discovery call if it fits.`,
  },
];

export default function FaqMarklab() {
  const [active, setActive] = useState(0);

  return (
    <section className="marklab-faq marklab-section" aria-labelledby="faq-heading">
      <div className="marklab-faq__container">
        <h2 id="faq-heading" className="marklab-faq__title">
          Frequently asked questions
        </h2>

        <div className="marklab-faq__list">
          {faqs.map((item, i) => {
            const open = active === i;
            return (
              <div key={item.q} className={`marklab-faq__item${open ? " marklab-faq__item--open" : ""}`}>
                <button
                  type="button"
                  className="marklab-faq__trigger"
                  aria-expanded={open}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                  onClick={() => setActive(open ? -1 : i)}
                >
                  <span className="marklab-faq__question">{item.q}</span>
                  <span className="marklab-faq__icon" aria-hidden="true">
                    <span className="marklab-faq__icon-h" />
                    <span className="marklab-faq__icon-v" />
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  className="marklab-faq__panel"
                  hidden={!open}
                >
                  <p className="marklab-faq__answer">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
