import type { LucideIcon } from "lucide-react";
import { BarChart3, BrainCircuit, Shield, Settings2 } from "lucide-react";

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  prompt?: string;
}

/** Kiwi-style 2×2 feature grid — Jobqode content */
export const featureCards: FeatureCard[] = [
  {
    id: "products",
    title: "Instant platform deployment",
    description: "Roll out HCM, CRM, or analytics with structured modules — not months of custom setup.",
    icon: BarChart3,
    prompt: "Deploy Jobqode HCM for 200 employees with attendance and leave…",
  },
  {
    id: "secure",
    title: "Secure and reliable",
    description: "Role-based access, audit-friendly workflows, and production-grade hosting patterns.",
    icon: Shield,
  },
  {
    id: "settings",
    title: "Customized to your organisation",
    description: "Preferences, integrations, and extensions when products need to match your processes.",
    icon: Settings2,
  },
  {
    id: "batch",
    title: "AI & automation ready",
    description: "Copilots, batch reporting, and intelligent features integrated where they save real time.",
    icon: BrainCircuit,
    prompt: "Automate weekly CRM pipeline summary for sales leads…",
  },
];
