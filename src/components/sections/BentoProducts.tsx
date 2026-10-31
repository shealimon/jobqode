import SectionHeader from "@/components/ui/SectionHeader";
import { products } from "@/lib/data/products";
import ProductCard from "./ProductCard";

export default function BentoProducts() {
  return (
    <section id="products" className="scroll-mt-20 py-10 sm:py-14" aria-labelledby="products-heading">
      <SectionHeader
        eyebrow="Products"
        titleId="products-heading"
        title="Jobqode product suite"
        description="ERP, HCM, CRM, AI, web apps, and portals — maintained platforms you can deploy and extend."
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
