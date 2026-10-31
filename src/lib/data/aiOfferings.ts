import type { LucideIcon } from "lucide-react";
import { BrainCircuit, Bot, Sparkles, Workflow } from "lucide-react";

export interface AiOffering {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const aiOfferings: AiOffering[] = [
  {
    id: "strategy",
    label: "Strategy",
    title: "AI fit & roadmap",
    description:
      "Identify where AI adds measurable value in your processes — and what to implement first on Jobqode products or custom builds.",
    icon: Sparkles,
  },
  {
    id: "assist",
    label: "Assist",
    title: "Copilots & assistants",
    description:
      "Embedded assistance in your applications — faster answers, drafting, and search grounded in your business context.",
    icon: Bot,
  },
  {
    id: "automate",
    label: "Automate",
    title: "Intelligent automation",
    description:
      "Combine rules and models to handle repetitive document, data, and routing work your teams do today by hand.",
    icon: Workflow,
  },
  {
    id: "build",
    label: "Build",
    title: "Custom AI features",
    description:
      "Model-backed features wired into HCM, CRM, analytics, or bespoke apps — built with your data boundaries in mind.",
    icon: BrainCircuit,
  },
];
