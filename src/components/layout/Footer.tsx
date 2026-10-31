import Logo from "@/components/ui/Logo";
import { navLinks, siteConfig } from "@/lib/site";

const explore = navLinks.filter((l) => l.href !== "#home");

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-8 border-t border-ink-200 bg-surface-muted">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-ink-600">{siteConfig.description}</p>
          </div>
          <nav aria-label="Explore">
            <p className="text-sm font-bold text-ink-950">Explore</p>
            <ul className="mt-4 space-y-2">
              {explore.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-ink-600 hover:text-accent-700">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-sm font-bold text-ink-950">Contact</p>
            <a href={`mailto:${siteConfig.email}`} className="mt-4 block text-sm font-semibold text-ink-950 hover:text-accent-700">
              {siteConfig.email}
            </a>
            <p className="mt-2 text-sm text-ink-600">{siteConfig.location}</p>
          </div>
        </div>
        <p className="mt-10 border-t border-ink-200 pt-6 text-xs text-ink-500">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
