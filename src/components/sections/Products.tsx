import BentoCard from "@/components/ui/BentoCard";
import SectionPill from "@/components/ui/SectionPill";
import { products } from "@/lib/data/products";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <BentoCard
      id="products"
      className="scroll-mt-6 px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14"
      aria-labelledby="products-heading"
    >
      <section aria-labelledby="products-heading">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <SectionPill label="Products" />
          </div>
          <h2
            id="products-heading"
            className="mt-6 text-2xl font-semibold tracking-tighter text-ink-950 sm:text-3xl"
          >
            Software we design, build, and maintain
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-500 sm:text-base">
            Ready-to-use HCM, CRM and Analytics products for teams that want structure without starting
            from scratch.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </BentoCard>
  );
}
