import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/data/products";
import { siteConfig } from "@/lib/site";

export default function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon;
  return (
    <article className="flex h-full flex-col rounded-xl border border-ink-200 bg-white p-6 transition-shadow hover:shadow-md">
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-100 text-ink-900">
        <Icon className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-base font-bold text-ink-950">{product.name}</h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink-500">{product.category}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{product.description}</p>
      <a
        href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Product enquiry: ${product.name}`)}`}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink-950 hover:text-accent-700 focus-visible:outline-2 focus-visible:outline-accent-600"
      >
        Try for free
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </article>
  );
}
