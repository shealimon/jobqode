"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

const faqs = [
  {
    q: "What does Jobqode do?",
    a: "Jobqode is a software company. We build our own business software products ? for HCM (Human Capital Management), CRM (Customer Relationship Management) and Data Analytics ? and we also provide custom software development services for clients in the software field.",
  },
  {
    q: "What is Jobqode HCM?",
    a: "Our Human Capital Management product. It brings employee records, attendance, leave, shifts and performance tracking together in one system, replacing scattered spreadsheets and manual HR processes.",
  },
  {
    q: "What is Jobqode CRM?",
    a: "Our Customer Relationship Management product. It helps sales and support teams manage leads, customers, follow-ups, pipelines and communication history in one shared system, so no customer conversation is lost.",
  },
  {
    q: "What is Jobqode Analytics?",
    a: "Our Data Analysis product. It turns your business data into interactive dashboards, visual reports and clear insights, so decisions are based on visible numbers instead of manual reports and guesswork.",
  },
  {
    q: "Should I use one of your products or build custom software?",
    a: "If our HCM, CRM or Analytics product already fits your need, adopting it is usually faster and simpler. If your process is specific to your business ? or no ready product fits the way you work ? a custom application built around your requirements is the better investment. We're happy to talk through which route makes sense.",
  },
  {
    q: "How does a custom software project start?",
    a: "With a conversation about your requirements. We work through discovery, planning and design before development begins, so scope and expectations are clear on both sides. You can start simply by emailing us a short description of what you need.",
  },
  {
    q: "Do you support software after it launches?",
    a: "Yes. We remain available after deployment for improvements, fixes and future development, and we can also modernize or maintain applications that already exist.",
  },
  {
    q: "How do I get in touch?",
    a: `Email us at ${siteConfig.email} with a brief description of your idea or requirement. There's no form and no obligation ? just a conversation about what you're trying to build.`,
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-20 border-t border-ink-900/10 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            index="07"
            align="center"
            titleId="faq-heading"
            eyebrow="FAQ"
            title="Questions, answered"
            description="The things people usually ask us first. Anything else ? just email us."
          />
        </Reveal>
        <Reveal delay={100}>
          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className={`rounded-lg bg-white ring-1 transition-shadow ${isOpen ? "shadow-lg shadow-ink-950/5 ring-brand-600/25" : "ring-ink-900/5"}`}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex min-h-14 w-full items-center justify-between gap-4 rounded-lg px-5 py-4 text-left font-display text-[15px] font-bold text-ink-950 focus-visible:outline-2 focus-visible:outline-brand-600 sm:px-6 sm:text-base"
                    >
                      {item.q}
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-brand-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    hidden={!isOpen}
                    className="px-5 pb-5 sm:px-6"
                  >
                    <p className="leading-relaxed text-ink-600">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
