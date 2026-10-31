import { ArrowUpRight } from "lucide-react";
import MarklabContainer from "@/components/ui/MarklabContainer";
import MarklabImg from "@/components/ui/MarklabImg";
import { outcomes } from "@/lib/data/marklabHome";

export default function OutcomesSection() {
  return (
    <section id="works" className="marklab-section scroll-mt-24 bg-white">
      <MarklabContainer>
        <h2 className="marklab-heading-xl">We help teams build</h2>
        <p className="mt-3 max-w-xl text-ink-500">Outcomes from product rollouts and custom delivery.</p>
        <ul className="mt-10 space-y-4">
          {outcomes.map((item) => (
            <li key={item.text}>
              <a
                href="#contact"
                className="group flex items-center gap-4 rounded-2xl bg-[#fafafa] p-3 transition-colors hover:bg-[#f3f4f6] sm:gap-5 sm:p-4"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-20">
                  <MarklabImg src={item.image} alt="" fill className="object-cover" />
                </div>
                <span className="flex-1 text-sm font-medium leading-snug text-[#202342] sm:text-base">{item.text}</span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#202342] shadow-sm">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </MarklabContainer>
    </section>
  );
}
