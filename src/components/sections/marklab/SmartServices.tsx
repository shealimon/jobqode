import MarklabButton from "@/components/ui/MarklabButton";
import MarklabImg from "@/components/ui/MarklabImg";
import type { MarklabOffering } from "@/lib/data/marklabHome";
import { marklabProducts, marklabServices } from "@/lib/data/marklabHome";

function ServiceCard({ item, index }: { item: MarklabOffering; index: number }) {
  const tinted = index % 2 === 1;

  return (
    <div className={tinted ? "marklab-single-service" : "marklab-single-service marklab-single-service--plain"}>
      <div className="marklab-service-inner">
        <MarklabImg src={item.iconSrc} alt="" width={88} height={88} className="marklab-service-inner__icon" />
        <div className="marklab-service-title-link">
          <h4 className="marklab-service-title">{item.title}</h4>
        </div>
        <p className="marklab-service-details">{item.description}</p>
      </div>
    </div>
  );
}

function ServiceRow({
  id,
  items,
  follow,
}: {
  id?: string;
  items: MarklabOffering[];
  follow?: boolean;
}) {
  return (
    <div id={id} className={`${id ? "scroll-mt-28" : ""} ${follow ? "marklab-service-row--follow" : ""}`.trim()}>
      <div className="marklab-service-wrapper">
        {items.map((item, index) => (
          <ServiceCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default function SmartServices() {
  return (
    <section className="marklab-service-section scroll-mt-24" aria-labelledby="smart-services-heading">
      <div className="marklab-service-section__container">
        <div className="marklab-smart-banner">
          <h2 id="smart-services-heading" className="marklab-smart-title">
            Smart{" "}
            <span className="marklab-smart-title__itlic">
              Service
              <br />
              That
            </span>{" "}
            Real Impact.
          </h2>
          <MarklabButton href="#contact" variant="brand" className="marklab-smart-banner__cta">
            Let&apos;s Contact
          </MarklabButton>
        </div>

        <ServiceRow id="products" items={marklabProducts} />
        <ServiceRow id="services" items={marklabServices} follow />

        <p className="marklab-smart-rating">4.9 rated delivery partner</p>
      </div>
    </section>
  );
}
