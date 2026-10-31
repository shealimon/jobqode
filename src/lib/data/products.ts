import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  Building2,
  Globe,
  Handshake,
  LayoutDashboard,
  UsersRound,
} from "lucide-react";

/**
 * PRODUCTS — Jobqode software products and platforms.
 * Add, remove or edit products here; the UI updates automatically.
 */

export interface Product {
  id: string;
  name: string;
  shortName: string;
  category: string;
  description: string;
  /** The problem this product solves, in one or two sentences. */
  problem: string;
  capabilities: string[];
  icon: LucideIcon;
  /** Optional live product website. */
  href?: string;
}

export const products: Product[] = [
  {
    id: "erp",
    name: "Jobqode ERP",
    shortName: "ERP",
    category: "Enterprise Resource Planning",
    description:
      "ERP software that connects finance, inventory, procurement, and operations — so leadership sees one live picture of the business.",
    problem:
      "Teams re-enter the same data across finance, stock, and ops tools. Jobqode ERP keeps core business processes in one integrated system.",
    capabilities: [
      "Finance, billing & accounts",
      "Inventory & procurement",
      "Operations & workflow modules",
      "Role-based dashboards & reports",
    ],
    icon: Building2,
  },
  {
    id: "hcm",
    name: "Jobqode HCM",
    shortName: "HCM",
    category: "Human Capital Management",
    description:
      "A complete HR management product that brings your people, attendance, leave and performance information together in one organised system.",
    problem:
      "HR teams lose hours to scattered spreadsheets, manual attendance and leave tracking, and employee records spread across files. Jobqode HCM replaces that chaos with one structured system.",
    capabilities: [
      "Employee records & organisation structure",
      "Attendance, leave & shift management",
      "Performance & appraisal tracking",
      "HR reports & document management",
    ],
    icon: UsersRound,
  },
  {
    id: "crm",
    name: "Jobqode CRM",
    shortName: "CRM",
    category: "Customer Relationship Management",
    description:
      "A CRM product that helps sales and support teams manage leads, customers, follow-ups and pipelines — so no opportunity or customer conversation is ever lost.",
    problem:
      "Leads in notebooks, follow-ups in personal phones and customer history in someone's inbox. Jobqode CRM gives your whole team one shared view of every customer relationship.",
    capabilities: [
      "Lead & customer management",
      "Sales pipeline & follow-up tracking",
      "Activity, notes & communication history",
      "Team performance & sales reports",
    ],
    icon: Handshake,
  },
  {
    id: "analytics",
    name: "Jobqode Analytics",
    shortName: "Data Analytics",
    category: "Data Analysis & Reporting",
    description:
      "A data analysis product that turns your business data into clear dashboards, visual reports and insights your team can actually act on.",
    problem:
      "Businesses collect data everywhere but still make decisions on gut feel, because the numbers sit buried in raw tables and manual reports. Jobqode Analytics makes them visible and understandable.",
    capabilities: [
      "Interactive dashboards & charts",
      "Custom report builder",
      "Data import & visualisation",
      "Trend, comparison & summary insights",
    ],
    icon: BarChart3,
  },
  {
    id: "ai-solutions",
    name: "Jobqode AI Solutions",
    shortName: "AI Solutions",
    category: "Artificial Intelligence",
    description:
      "AI solutions — assistants, automation, and intelligent search — embedded in your products and workflows where they save real time.",
    problem:
      "Manual document handling, repetitive decisions, and slow search drain capacity. Jobqode AI Solutions add practical intelligence without replacing your systems.",
    capabilities: [
      "Document & data processing",
      "AI assistants & copilots",
      "Workflow automation",
      "Secure model integration (RAG & APIs)",
    ],
    icon: Bot,
  },
  {
    id: "web-applications",
    name: "Jobqode Web Applications",
    shortName: "Web Applications",
    category: "Web Software",
    description:
      "Modern web applications for internal teams and customers — secure, responsive, and built to scale with your organisation.",
    problem:
      "Spreadsheet workflows and one-off tools don't scale. Jobqode web applications give you dedicated software your users can reach from any browser.",
    capabilities: [
      "Business & operational apps",
      "Role-based access & audit trails",
      "API-ready architecture",
      "Cloud deployment & monitoring",
    ],
    icon: Globe,
  },
  {
    id: "business-portals",
    name: "Jobqode Business Portals",
    shortName: "Business Portals",
    category: "Portals & Self-Service",
    description:
      "Business portals for partners, vendors, and customers — self-service access to orders, documents, tickets, and account information.",
    problem:
      "Email chains and phone calls for routine requests don't scale. A business portal gives stakeholders one place to transact and stay informed.",
    capabilities: [
      "Partner & vendor portals",
      "Customer self-service",
      "Document & request workflows",
      "Branded, mobile-friendly UX",
    ],
    icon: LayoutDashboard,
  },
];
