"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";
import { navLinks, siteConfig } from "@/lib/site";

const sectionIds = [...navLinks.map((l) => l.href.slice(1)), "contact", "ai"];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!("IntersectionObserver" in window) || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.2] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-ink-200 bg-white/95 backdrop-blur-md" : "border-transparent bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:max-w-7xl">
        <a href="#home" className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-600" aria-label="Jobqode — home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.slice(1).map((link) => {
            const id = link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active === id ? "true" : undefined}
                className={`text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-accent-600 ${
                  active === id ? "text-ink-950" : "text-ink-600 hover:text-ink-950"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="inline-flex min-h-10 items-center rounded-lg border border-ink-200 px-4 text-sm font-semibold text-ink-800 transition-colors hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-accent-600"
          >
            Get started
          </a>
          <a
            href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Try Jobqode")}`}
            className="inline-flex min-h-10 items-center rounded-lg border border-accent-600 bg-accent-300 px-4 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
          >
            Try for free
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-ink-200 lg:hidden">
          <div className="mx-auto max-w-6xl space-y-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block min-h-11 py-2 text-sm font-medium text-ink-900">
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-3">
              <a href="#contact" onClick={() => setOpen(false)} className="min-h-11 rounded-lg border border-ink-200 py-3 text-center text-sm font-semibold">
                Get started
              </a>
              <a href="#contact" onClick={() => setOpen(false)} className="min-h-11 rounded-lg bg-accent-300 py-3 text-center text-sm font-semibold text-ink-950">
                Try for free
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
