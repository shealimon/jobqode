export interface NavLink {
  label: string;
  href: string;
}

export const siteConfig = {
  name: "Jobqode",
  shortName: "Jobqode",
  tagline: "HCM, CRM & analytics products — plus custom software.",
  description:
    "Jobqode builds HCM, CRM, and analytics products and delivers custom software for growing teams.",
  heroEyebrow: "ERP · HCM · CRM · Analytics",
  heroTitle: "Software that moves the business",
  heroLead:
    "ERP, HCM, CRM, analytics, and custom builds — built to deliver impact, not shelf-ware.",
  url: "https://www.jobqode.com",
  email: "hello@jobqode.com",
  location: "[City, Country]",
} as const;

/** Marklab-style navigation (desktop: no Home) */
export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
  { label: "About", href: "#about" },
];
