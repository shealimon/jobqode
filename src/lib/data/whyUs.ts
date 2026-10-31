import type { LucideIcon } from "lucide-react";
import { Layers, Shield, UserCheck, HeartHandshake } from "lucide-react";

export const missionQuote =
  "To deliver software products and engineering that help every client run people, customer, and data operations with clarity and confidence.";

export interface WhyUsPoint {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const whyUsPoints: WhyUsPoint[] = [
  {
    id: "full-stack",
    title: "Products plus delivery",
    description:
      "HCM, CRM, and analytics products when they fit — custom development and integration when you need something specific.",
    icon: Layers,
  },
  {
    id: "senior",
    title: "Experienced delivery",
    description:
      "Direct work with engineers and consultants who have shipped business systems before — clear communication from scoping through launch.",
    icon: UserCheck,
  },
  {
    id: "secure",
    title: "Built for production",
    description:
      "Security, access control, and maintainability considered from design through deployment — not added as an afterthought.",
    icon: Shield,
  },
  {
    id: "partner",
    title: "Long-term partnership",
    description:
      "From first enquiry through maintenance and product updates — we stay accountable for systems we build and products we operate.",
    icon: HeartHandshake,
  },
];
