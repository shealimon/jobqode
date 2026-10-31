import MarklabImg from "@/components/ui/MarklabImg";
import { marqueeLogos } from "@/lib/data/marklabHome";

export default function LogoMarquee() {
  const logos = [...marqueeLogos, ...marqueeLogos];

  return (
    <section className="border-y border-[#ebecec] bg-white py-12 sm:py-14" aria-label="Partner logos">
      <div className="overflow-hidden">
        <ul className="marquee-track flex w-max items-center gap-16 px-4 sm:gap-20">
          {logos.map((src, i) => (
            <li key={`${src}-${i}`} className="flex h-12 w-36 shrink-0 items-center justify-center sm:h-14 sm:w-40">
              <MarklabImg
                src={src}
                alt=""
                width={160}
                height={56}
                className="h-11 w-auto max-w-full object-contain sm:h-12"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
