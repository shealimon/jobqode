import type { LucideIcon } from "lucide-react";
import {
  BrainCircuit,
  Briefcase,
  Code2,
  LifeBuoy,
  LineChart,
  MonitorSmartphone,
  PlugZap,
  Rocket,
  Search,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Layers,
} from "lucide-react";

/**
 * SERVICES — edit, reorder or remove entries here.
 * The Services section renders whatever is in this array.
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  /** The business value, in one short outcome-focused sentence. */
  value: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    description:
      "Applications designed and built around your specific business requirements, processes and users — not adapted from a generic template.",
    value: "Software that fits how your business actually operates.",
    icon: Code2,
  },
  {
    id: "web-applications",
    title: "Web Development",
    description:
      "Responsive, secure web applications — from internal business tools and portals to customer-facing platforms.",
    value: "One application your team and customers can reach from any browser.",
    icon: MonitorSmartphone,
  },
  {
    id: "mobile-applications",
    title: "Mobile Application Development",
    description:
      "Mobile applications for iOS and Android that extend your services to customers and staff wherever they work.",
    value: "Your business processes and services, available on the go.",
    icon: Smartphone,
  },
  {
    id: "ai-applications",
    title: "AI & Digital Transformation",
    description:
      "AI adoption and digital change — from strategy and process mapping to practical features such as automation, search, and assistants in your applications.",
    value: "Transformation with measurable impact, not disconnected pilots.",
    icon: BrainCircuit,
  },
  {
    id: "api-integration",
    title: "System Integration",
    description:
      "APIs and integrations that connect your applications with ERP, CRM, payments, identity, and other systems your business already uses.",
    value: "Connected systems instead of duplicated data and manual re-entry.",
    icon: PlugZap,
  },
  {
    id: "saas-development",
    title: "SaaS Product Development",
    description:
      "End-to-end development of subscription software products — from an initial version to a platform that can grow with your customer base.",
    value: "A product foundation you can launch, learn from and extend.",
    icon: Rocket,
  },
  {
    id: "modernization-maintenance",
    title: "Application Modernization & Maintenance",
    description:
      "Improving, migrating and maintaining existing applications — updating technology, fixing pain points and adding the capabilities your business now needs.",
    value: "Existing systems kept useful, secure and easier to change.",
    icon: LifeBuoy,
  },
  {
    id: "bi-growth-strategy",
    title: "Business Intelligence & Growth Strategy",
    description:
      "BI dashboards, KPI design, and growth planning grounded in your data — so decisions are backed by numbers, not assumptions.",
    value: "Insight leaders trust when setting direction and measuring progress.",
    icon: LineChart,
  },
  {
    id: "business-systems-digital",
    title: "Business Systems & Digital Solutions",
    description:
      "Design and implementation of business systems — ERP, HCM, CRM, portals, and custom platforms aligned to how you operate.",
    value: "Digital solutions that match process, people, and compliance needs.",
    icon: Layers,
  },
  {
    id: "cybersecurity-tech-risk",
    title: "Cybersecurity & Technology Risk",
    description:
      "Security reviews, control design, and technology risk guidance for applications, integrations, and cloud environments.",
    value: "Reduced exposure before incidents and audit surprises.",
    icon: ShieldCheck,
  },
  {
    id: "business-consulting",
    title: "Business Consulting",
    description:
      "Consulting on operations, software selection, and delivery planning — helping you scope investments and align stakeholders.",
    value: "Clear options and a realistic path from problem to solution.",
    icon: Briefcase,
  },
  {
    id: "market-research",
    title: "Market Research",
    description:
      "Structured market and competitor research to support product, pricing, and expansion decisions.",
    value: "Evidence you can use in board conversations and roadmaps.",
    icon: Search,
  },
  {
    id: "technology-risk-assessment",
    title: "Technology Risk Assessment",
    description:
      "Focused assessments of architecture, vendors, and delivery risk — with practical remediation recommendations.",
    value: "Prioritised fixes instead of vague security checklists.",
    icon: ShieldAlert,
  },
];
