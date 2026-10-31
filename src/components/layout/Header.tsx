"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = [...navLinks.map((l) => l.href.slice(1)), "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!("IntersectionObserver" in window) || sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled ? "border-ink-900/10 bg-canvas/95 backdrop-blur-md" : "border-ink-900/8 bg-canvas"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink-950 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-[68px]">
          <a href="#home" className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-950" aria-label="Jobqode — home">
            <Logo />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-ink-950 ${
                    isActive ? "text-ink-950" : "text-ink-600 hover:text-ink-950"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm font-medium text-ink-600 transition-colors hover:text-ink-950 focus-visible:outline-2 focus-visible:outline-ink-950"
            >
              Contact
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex min-h-10 items-center rounded-full bg-ink-950 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-ink-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-950"
            >
              Let&apos;s Talk
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink-950 text-ink-950 lg:hidden focus-visible:outline-2 focus-visible:outline-ink-950"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {open && (
        <div id="mobile-navigation" className="border-t border-ink-900/10 bg-canvas lg:hidden">
          <Container className="py-4">
            <nav aria-label="Mobile" className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center text-base font-medium text-ink-950 focus-visible:outline-2 focus-visible:outline-ink-950"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${siteConfig.email}`}
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex min-h-11 items-center justify-center rounded-full bg-ink-950 px-5 text-base font-semibold text-white focus-visible:outline-2 focus-visible:outline-ink-950"
              >
                Let&apos;s Talk
              </a>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
