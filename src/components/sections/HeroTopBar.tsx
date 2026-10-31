"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/ui/Logo";
import { navLinks } from "@/lib/site";

const topLinks = navLinks.filter((l) => l.href !== "#home");

export default function HeroTopBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-10">
      <div className="flex items-center justify-between gap-4">
        <a
          href="#home"
          className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-950"
          aria-label="Jobqode — home"
        >
          <Logo />
        </a>

        <div className="hidden items-center gap-5 md:flex">
          <nav aria-label="Primary" className="flex items-center gap-1 text-sm font-medium text-ink-500">
            {topLinks.map((link, i) => (
              <span key={link.href} className="inline-flex items-center">
                {i > 0 && (
                  <span className="mx-2 text-ink-300" aria-hidden="true">
                    /
                  </span>
                )}
                <a
                  href={link.href}
                  className="transition-colors hover:text-ink-950 focus-visible:outline-2 focus-visible:outline-ink-950"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex min-h-9 items-center rounded-full bg-ink-950 px-4 text-sm font-bold text-white transition-colors hover:bg-ink-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-950"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-900/15 text-ink-800 md:hidden focus-visible:outline-2 focus-visible:outline-ink-950"
          aria-expanded={open}
          aria-controls="hero-mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <nav
          id="hero-mobile-nav"
          aria-label="Mobile"
          className="mt-4 flex flex-col gap-1 border-t border-ink-900/8 pt-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="min-h-10 py-2 text-sm font-medium text-ink-800 focus-visible:outline-2 focus-visible:outline-ink-950"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="min-h-10 py-2 text-sm font-medium text-ink-800 focus-visible:outline-2 focus-visible:outline-ink-950"
          >
            Contact
          </a>
        </nav>
      )}
    </div>
  );
}
