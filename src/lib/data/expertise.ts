/** Technology areas — toolkit-style section (Jobqode-relevant stacks) */
export interface ExpertiseGroup {
  id: string;
  title: string;
  items: string[];
}

export const expertiseGroups: ExpertiseGroup[] = [
  {
    id: "software",
    title: "Software & web",
    items: ["TypeScript & Node.js", "React & Next.js", "REST & GraphQL APIs", "iOS & Android", ".NET integrations"],
  },
  {
    id: "data",
    title: "Data & analytics",
    items: ["SQL & reporting layers", "Dashboards & BI", "ETL & pipelines", "Jobqode Analytics", "Export & scheduling"],
  },
  {
    id: "products",
    title: "Jobqode products",
    items: ["Jobqode HCM", "Jobqode CRM", "Jobqode Analytics", "Product extensions", "Implementation support"],
  },
  {
    id: "cloud",
    title: "Cloud & delivery",
    items: ["Azure & AWS hosting", "Docker containers", "CI/CD pipelines", "Monitoring & backups", "Environment hardening"],
  },
  {
    id: "ai",
    title: "AI & automation",
    items: ["LLM integrations", "Retrieval (RAG) patterns", "Workflow automation", "Document processing", "Secure API design"],
  },
  {
    id: "more",
    title: "Your environment",
    items: [
      "Legacy system bridges",
      "ERP & CRM connectors",
      "Custom middleware",
      "Don't see your stack? Ask us.",
    ],
  },
];
