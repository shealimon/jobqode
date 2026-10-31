/** Original Marklab / Logoipsum partner marks */
export const marklabPartnerLogos = [
  "/marklab/logos/logo-a.svg",
  "/marklab/logos/logo-b.svg",
  "/marklab/logos/logo-c.svg",
  "/marklab/logos/logo-d.svg",
  "/marklab/logos/logo-e.svg",
  "/marklab/logos/logo-f.svg",
  "/marklab/logos/logo-g.svg",
  "/marklab/logos/logo-h.svg",
] as const;

export const marqueeLogos = marklabPartnerLogos;

export interface MarklabOffering {
  title: string;
  description: string;
  iconSrc: string;
}

const marklabIcons = [
  "/marklab/services/shield.svg",
  "/marklab/services/thumb.svg",
  "/marklab/services/copy.svg",
  "/marklab/services/flash.svg",
] as const;

function withIcons(items: Omit<MarklabOffering, "iconSrc">[]): MarklabOffering[] {
  return items.map((item, i) => ({
    ...item,
    iconSrc: marklabIcons[i % marklabIcons.length],
  }));
}

export const marklabProducts: MarklabOffering[] = withIcons([
  {
    title: "ERP Software",
    description:
      "Finance, inventory, procurement, and operations in one ERP — one source of truth for how the business runs.",
  },
  {
    title: "HCM Software",
    description: "People, attendance, leave, and HR reporting in one organised human capital management system.",
  },
  {
    title: "CRM Software",
    description: "Leads, pipelines, and customer history in a shared CRM for sales and support.",
  },
  {
    title: "AI Solutions",
    description: "Assistants, automation, and intelligent search embedded where they save real time.",
  },
  {
    title: "Web Applications",
    description: "Secure, responsive web apps for internal teams and customers — built to scale.",
  },
  {
    title: "Business Portals",
    description: "Partner, vendor, and customer portals for self-service documents, orders, and requests.",
  },
]);

export const marklabServices: MarklabOffering[] = withIcons([
  {
    title: "AI & Digital Transformation",
    description: "Strategy and delivery for AI adoption and digital change across teams and systems.",
  },
  {
    title: "Business Intelligence & Growth Strategy",
    description: "Dashboards, KPIs, and growth planning grounded in data your leadership can trust.",
  },
  {
    title: "Business Systems & Digital Solutions",
    description: "ERP, HCM, CRM, portals, and custom platforms aligned to how you operate.",
  },
  {
    title: "Cybersecurity & Technology Risk",
    description: "Security reviews and technology risk guidance for apps, integrations, and cloud.",
  },
  {
    title: "Web Development",
    description: "Internal tools, customer platforms, and portals on modern web stacks.",
  },
  {
    title: "System Integration",
    description: "APIs and connectors linking ERP, CRM, payments, identity, and third-party services.",
  },
  {
    title: "Business Consulting",
    description: "Operations, software selection, and delivery planning with clear scope and options.",
  },
  {
    title: "Market Research",
    description: "Structured market and competitor insight for product, pricing, and expansion calls.",
  },
  {
    title: "Technology Risk Assessment",
    description: "Focused reviews of architecture and vendors with prioritised remediation steps.",
  },
]);

/** @deprecated Use marklabProducts and marklabServices */
export const smartServices: MarklabOffering[] = [...marklabProducts, ...marklabServices];

/** Marklab home shows three process steps in the tab list */
export const processTabs = [
  {
    title: "Start your digital journey with confidence",
    body: "Tell us your goals by email or contact — we confirm product vs custom fit.",
    image: "/marklab/process/1.svg",
  },
  {
    title: "Connect for a strategy call that sets direction",
    body: "We align on scope, systems, and success criteria before anything is built.",
    image: "/marklab/process/2.svg",
  },
  {
    title: "Receive a tailored plan built for your success",
    body: "You get milestones, timeline, and clear outcomes — then we execute.",
    image: "/marklab/process/3.svg",
  },
] as const;

export const outcomes = [
  {
    text: "Unify HR in Jobqode HCM instead of scattered spreadsheets.",
    image: "/marklab/works/1.webp",
  },
  {
    text: "One CRM pipeline view for sales across the organisation.",
    image: "/marklab/works/2.webp",
  },
  {
    text: "Live analytics dashboards instead of manual reporting.",
    image: "/marklab/works/3.webp",
  },
  {
    text: "Customer portals and internal tools on modern web stacks.",
    image: "/marklab/works/1.webp",
  },
  {
    text: "Integrate ERP, payments, or identity via APIs.",
    image: "/marklab/works/2.webp",
  },
] as const;

/** Testimonials use original Marklab partner logos (one unique mark per card). */
export const testimonials = [
  {
    quote: "One step ahead. Jobqode became essential for how we run HR and sales.",
    logo: marklabPartnerLogos[0],
    company: "Partner A",
  },
  {
    quote: "Clear delivery and a team that understands business software — not just code.",
    logo: marklabPartnerLogos[1],
    company: "Partner B",
  },
  {
    quote: "They mapped our requirements and shipped on time. Highly recommend.",
    logo: marklabPartnerLogos[2],
    company: "Partner C",
  },
  {
    quote: "Sharp communication and product quality that matched what we scoped.",
    logo: marklabPartnerLogos[3],
    company: "Partner D",
  },
  {
    quote: "Our ERP rollout stayed on track — finance and ops finally share one system.",
    logo: marklabPartnerLogos[4],
    company: "Partner E",
  },
  {
    quote: "Store and warehouse data in one place; reporting is actually usable now.",
    logo: marklabPartnerLogos[5],
    company: "Partner F",
  },
  {
    quote: "Custom portals for vendors went live without disrupting production.",
    logo: marklabPartnerLogos[6],
    company: "Partner G",
  },
  {
    quote: "HCM and scheduling fit how our clinics run — support has been steady.",
    logo: marklabPartnerLogos[7],
    company: "Partner H",
  },
] as const;

export const insights = [
  {
    title: "When to adopt HCM vs custom HR software",
    date: "May 12, 2025",
    category: "Products",
    image: "/marklab/blog/1.webp",
  },
  {
    title: "CRM practices that keep pipelines honest",
    date: "May 8, 2025",
    category: "CRM",
    image: "/marklab/blog/2.webp",
  },
  {
    title: "Dashboards your leadership team will actually open",
    date: "Apr 30, 2025",
    category: "Analytics",
    image: "/marklab/blog/3.webp",
  },
] as const;
