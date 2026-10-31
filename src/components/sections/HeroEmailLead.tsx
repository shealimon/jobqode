"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";

export default function HeroEmailLead() {
  const [email, setEmail] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const q = email.trim() ? `?subject=Jobqode enquiry&body=Email: ${encodeURIComponent(email.trim())}` : "";
    window.location.href = `mailto:${siteConfig.email}${q}`;
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-2 rounded-xl border border-ink-200 bg-white p-1.5 shadow-sm sm:flex-row"
    >
      <label htmlFor="hero-email" className="sr-only">
        Work email
      </label>
      <input
        id="hero-email"
        type="email"
        autoComplete="email"
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="min-h-12 flex-1 rounded-lg bg-transparent px-4 text-sm text-ink-900 outline-none placeholder:text-ink-400 focus:ring-2 focus:ring-accent-200"
      />
      <button
        type="submit"
        className="min-h-12 shrink-0 rounded-lg bg-ink-950 px-6 text-sm font-bold text-white transition-colors hover:bg-ink-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-950"
      >
        Contact us
      </button>
    </form>
  );
}
