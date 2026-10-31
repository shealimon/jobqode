"use client";

import { ArrowUpRight } from "lucide-react";
import { FormEvent, useState } from "react";
import JobqodeLogo from "@/components/ui/JobqodeLogo";
import { navLinks, siteConfig } from "@/lib/site";

const footerMainLinks = navLinks.filter((l) => l.href !== "#home");

const footerProductLinks = [
  { label: "ERP Software", href: "#products" },
  { label: "HCM Software", href: "#products" },
  { label: "CRM Software", href: "#products" },
  { label: "Analytics", href: "#products" },
];

export default function MarklabFooter() {
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();

  function onNewsletter(e: FormEvent) {
    e.preventDefault();
    window.location.href = `mailto:${siteConfig.email}?subject=Newsletter&body=${encodeURIComponent(email)}`;
  }

  return (
    <footer className="marklab-footer">
      <div className="marklab-footer__container">
        <div className="marklab-footer__grid">
          <div className="marklab-footer__brand">
            <a
              href="#home"
              className="inline-block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4555fd]"
              aria-label={`${siteConfig.name} home`}
            >
              <JobqodeLogo variant="dark" size="md" />
            </a>
            <div className="marklab-footer__contact">
              <p className="marklab-footer__meta-label">Email</p>
              <a href={`mailto:${siteConfig.email}`} className="marklab-footer__meta-value marklab-footer__meta-link">
                {siteConfig.email}
              </a>
            </div>
          </div>

          <nav aria-label="Main">
            <p className="marklab-footer__nav-title">Main</p>
            <ul className="marklab-footer__links">
              {footerMainLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="marklab-footer__link">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Products">
            <p className="marklab-footer__nav-title">Products</p>
            <ul className="marklab-footer__links">
              {footerProductLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="marklab-footer__link">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="marklab-footer__newsletter">
            <h2 className="marklab-footer__newsletter-title">Newsletter for updates</h2>
            <p className="marklab-footer__newsletter-lead">Subscribe to get more updates</p>
            <form onSubmit={onNewsletter} className="marklab-footer__form">
              <label className="sr-only" htmlFor="footer-email">
                Email address
              </label>
              <div className="marklab-footer__field">
                <input
                  id="footer-email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="marklab-footer__input"
                />
                <button type="submit" className="marklab-footer__submit" aria-label="Subscribe">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <p className="marklab-footer__copy">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
