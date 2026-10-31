"use client";

import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  CalendarCheck2,
  Check,
  FileBarChart2,
  Filter,
  Handshake,
  LineChart,
  NotebookTabs,
  PieChart,
  Repeat2,
  Target,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const tabs = [
  {
    id: "hcm",
    label: "HCM",
    fullLabel: "Human Capital Management",
    icon: UsersRound,
    heading: "Your people, organised in one system",
    text: "Jobqode HCM brings employee records, attendance, leave and performance together — giving HR and management one reliable source of truth for the whole organisation.",
    bullets: ["Employee records & org structure", "Attendance, leave & shifts", "Performance & HR reporting"],
    panelTitle: "Inside HCM",
    rows: [
      { icon: UserRoundCheck, title: "Employee profiles", sub: "Complete records, documents & history in one place" },
      { icon: CalendarCheck2, title: "Attendance & leave", sub: "Track presence, leaves and shifts without spreadsheets" },
      { icon: Target, title: "Performance tracking", sub: "Goals, reviews and appraisals, structured and visible" },
    ],
  },
  {
    id: "crm",
    label: "CRM",
    fullLabel: "Customer Relationship Management",
    icon: Handshake,
    heading: "Every customer relationship, in full view",
    text: "Jobqode CRM helps sales and support teams manage leads, follow-ups and customer history together — so nothing depends on one person's phone or memory.",
    bullets: ["Leads & customer database", "Pipeline & follow-up tracking", "Complete communication history"],
    panelTitle: "Inside CRM",
    rows: [
      { icon: NotebookTabs, title: "Leads & customers", sub: "One shared database for your entire team" },
      { icon: Repeat2, title: "Follow-ups never missed", sub: "Pipelines, reminders and activity tracking" },
      { icon: FileBarChart2, title: "Sales reporting", sub: "See team performance and pipeline health clearly" },
    ],
  },
  {
    id: "analytics",
    label: "Data Analytics",
    fullLabel: "Data Analysis & Reporting",
    icon: BarChart3,
    heading: "Turn raw data into decisions",
    text: "Jobqode Analytics converts scattered business data into dashboards, visual reports and clear insights — so decisions are based on numbers you can see, not guesswork.",
    bullets: ["Dashboards & visual charts", "Custom report builder", "Trends & comparison insights"],
    panelTitle: "Inside Analytics",
    rows: [
      { icon: PieChart, title: "Interactive dashboards", sub: "Your key numbers, visual and always up to date" },
      { icon: Filter, title: "Custom reports", sub: "Filter, group and build the exact report you need" },
      { icon: LineChart, title: "Trends & insights", sub: "Spot patterns and compare performance over time" },
    ],
  },
] as const;

export default function ProductSuite() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("hcm");
  const tab = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section aria-labelledby="suite-heading" className="border-t border-ink-900/10 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            index="01"
            titleId="suite-heading"
            eyebrow="Product Suite"
            title="Three products for the work every business runs on"
            description="Our own software for the three areas growing businesses struggle to manage manually — people, customers and data. Select a product to see what it covers."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10" role="tablist" aria-label="Jobqode products">
            <div className="inline-flex max-w-full flex-wrap rounded-full border-2 border-ink-950 p-1">
              {tabs.map((t) => {
                const selected = active === t.id;
                return (
                  <button
                    key={t.id}
                    role="tab"
                    id={`tab-${t.id}`}
                    aria-selected={selected}
                    aria-controls={`panel-${t.id}`}
                    onClick={() => setActive(t.id)}
                    className={`inline-flex min-h-10 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-ink-950 ${
                      selected ? "bg-ink-950 text-white" : "text-ink-600 hover:text-ink-950"
                    }`}
                  >
                    <t.icon className="h-4 w-4" aria-hidden="true" />
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            className="mt-6 grid rounded-2xl border-2 border-ink-950 bg-canvas lg:grid-cols-[1fr_1.1fr]"
          >
            <div className="p-7 sm:p-10">
              <p className="text-[11px] font-bold tracking-[0.16em] text-brand-700 uppercase">
                Jobqode {tab.label} — {tab.fullLabel}
              </p>
              <h3 className="mt-3 font-serif-display text-2xl text-balance text-ink-950 sm:text-[1.85rem]">
                {tab.heading}
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-ink-600">{tab.text}</p>
              <ul className="mt-6 space-y-2.5">
                {tab.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm font-medium text-ink-900">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#products"
                className="mt-8 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800 focus-visible:outline-2 focus-visible:outline-brand-600"
              >
                See full {tab.label} details <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="border-t border-ink-900/8 bg-slate-50 p-7 sm:p-10 lg:border-l lg:border-t-0">
              <p className="text-[11px] font-bold tracking-[0.16em] text-ink-500 uppercase">{tab.panelTitle}</p>
              <ul className="mt-4 divide-y divide-ink-900/6">
                {tab.rows.map((row) => (
                  <li key={row.title} className="flex items-start gap-4 py-4 first:pt-1 last:pb-1">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-brand-700 ring-1 ring-ink-900/8" aria-hidden="true">
                      <row.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-ink-950">{row.title}</span>
                      <span className="mt-0.5 block text-sm leading-relaxed text-ink-600">{row.sub}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-ink-900/8 pt-4 text-sm leading-relaxed text-ink-600">
                Need {tab.label} shaped differently for your business? We build custom versions too —{" "}
                <a href="#services" className="font-semibold text-brand-700 underline decoration-brand-600/30 underline-offset-2 hover:text-brand-800">
                  see our services
                </a>
                .
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
