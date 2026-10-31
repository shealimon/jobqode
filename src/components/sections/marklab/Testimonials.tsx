import MarklabContainer from "@/components/ui/MarklabContainer";
import MarklabImg from "@/components/ui/MarklabImg";
import { testimonials } from "@/lib/data/marklabHome";

export default function Testimonials() {
  const items = testimonials;

  return (
    <section className="marklab-section overflow-hidden bg-[#fafafa]">
      <MarklabContainer>
        <div className="mx-auto max-w-[42rem] text-center">
          <h2 className="marklab-heading-xl">Client take some lovely words</h2>
          <p className="mt-3 text-ink-500">Feedback from teams we&apos;ve partnered with.</p>
        </div>
      </MarklabContainer>
      <div className="mt-10 overflow-hidden">
        <ul className="marklab-testimonial-track flex w-max gap-4 px-4 sm:gap-5 sm:px-6">
          {items.map((t) => (
            <li
              key={t.company}
              className="flex w-[min(85vw,22rem)] shrink-0 flex-col rounded-2xl bg-white p-8 shadow-[0_8px_30px_rgba(32,35,66,0.06)] sm:w-[22rem] sm:p-10"
            >
              <div className="mb-7 flex h-14 items-center sm:mb-8 sm:h-16">
                <MarklabImg
                  src={t.logo}
                  alt=""
                  width={200}
                  height={48}
                  className="h-12 w-auto max-w-[14rem] object-contain object-left sm:h-14 sm:max-w-[16rem]"
                />
                <span className="sr-only">{t.company} logo</span>
              </div>
              <p className="text-base leading-relaxed text-[#202342]">&ldquo;{t.quote}&rdquo;</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
