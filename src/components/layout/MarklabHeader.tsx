"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import JobqodeLogo from "@/components/ui/JobqodeLogo";
import MarklabButton from "@/components/ui/MarklabButton";
import { navLinks, siteConfig } from "@/lib/site";

const headerLinks = navLinks.filter((l) => l.href !== "#home");

export default function MarklabHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-[56.5625rem] -translate-x-1/2">
      <div className="marklab-nav-pill flex items-center justify-between gap-2 rounded-[4.375rem] px-1 py-1 pl-4 sm:gap-3 sm:pr-1">
        <a href="#home" className="shrink-0 rounded-full py-2 pr-2 focus-visible:outline-2 focus-visible:outline-white" aria-label={`${siteConfig.name} home`}>
          <JobqodeLogo variant="light" size="md" />
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex" aria-label="Primary">
          {headerLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-[#dcdee2] transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <MarklabButton href={`mailto:${siteConfig.email}`} variant="dark" size="sm">
            Send inquiry
          </MarklabButton>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="marklab-nav-pill mt-2 rounded-2xl p-4 lg:hidden">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block py-2.5 text-sm font-medium text-white">
              {link.label}
            </a>
          ))}
          <a href={`mailto:${siteConfig.email}`} className="mt-3 block rounded-full bg-marklab-nav-btn py-3 text-center text-sm font-semibold text-white">
            Send inquiry
          </a>
        </nav>
      )}
    </header>
  );
}
