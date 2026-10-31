import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BrainCircuit,
  Code2,
  PlugZap,
  UsersRound,
  Handshake,
} from "lucide-react";

/** Homepage “What we do” pillars — Logica-style structure, Jobqode offerings */
export interface CapabilityPillar {
  id: string;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
  href: string;
}

export const capabilityPillars: CapabilityPillar[] = [
  {
    id: "people",
    label: "People",
    title: "Human capital management",
    description:
      "Workforce, attendance, leave, and HR records in one structured system — so people operations run on data, not spreadsheets.",
    bullets: ["Employee records & org structure", "Attendance & leave", "Performance & HR reporting"],
    icon: UsersRound,
    href: "#products",
  },
  {
    id: "customers",
    label: "Customers",
    title: "Customer relationship management",
    description:
      "Leads, pipelines, and customer history in a shared CRM — so sales and support never lose context on an account.",
    bullets: ["Lead & pipeline management", "Activity & follow-ups", "Sales & service reporting"],
    icon: Handshake,
    href: "#products",
  },
  {
    id: "data",
    label: "Decide",
    title: "Data & analytics",
    description:
      "Dashboards and reports that turn operational data into decisions — one place to see trends instead of manual exports.",
    bullets: ["Interactive dashboards", "Custom reports", "Data import & visualisation"],
    icon: BarChart3,
    href: "#products",
  },
  {
    id: "build",
    label: "Build",
    title: "Custom software development",
    description:
      "Web and mobile applications built around how your business works — new products, internal tools, and modernisation of legacy systems.",
    bullets: ["Web & mobile apps", "Business portals", "Application modernisation"],
    icon: Code2,
    href: "#services",
  },
  {
    id: "automate",
    label: "Automate",
    title: "AI & intelligent features",
    description:
      "Practical AI in your applications — search, assistance, and automation where they reduce manual work and improve response times.",
    bullets: ["AI-assisted workflows", "Document & data processing", "Integration with your apps"],
    icon: BrainCircuit,
    href: "#ai",
  },
  {
    id: "integrate",
    label: "Integrate",
    title: "APIs, SaaS & support",
    description:
      "Connect products and custom apps to the rest of your stack, launch SaaS offerings, and keep systems maintained as requirements evolve.",
    bullets: ["API development", "Third-party integrations", "Ongoing maintenance"],
    icon: PlugZap,
    href: "#services",
  },
];

export const heroFocusPills = ["Products", "Build", "Integrate", "Analyze", "Automate", "Support"] as const;
