import MarklabButton from "@/components/ui/MarklabButton";
import MarklabContainer from "@/components/ui/MarklabContainer";
import MarklabImg from "@/components/ui/MarklabImg";
import { insights } from "@/lib/data/marklabHome";

export default function InsightsSection() {
  return (
    <section className="marklab-section bg-white">
      <MarklabContainer>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="marklab-heading-lg">Read articles</h2>
            <p className="mt-2 text-ink-500">Real results and notes on products and delivery.</p>
          </div>
          <MarklabButton href="#contact" variant="dark" size="sm">
            All articles
          </MarklabButton>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {insights.map((post) => (
            <li key={post.title}>
              <a href="#contact" className="group block overflow-hidden rounded-2xl bg-[#fafafa] transition-shadow hover:shadow-md">
                <div className="relative aspect-[4/3] min-h-[10rem] overflow-hidden">
                  <MarklabImg src={post.image} alt="" fill className="object-cover transition-transform group-hover:scale-[1.02]" />
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-xs text-ink-500">
                    {post.date} · {post.category}
                  </p>
                  <h3 className="mt-2 text-base font-semibold leading-snug text-[#202342]">{post.title}</h3>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </MarklabContainer>
    </section>
  );
}
