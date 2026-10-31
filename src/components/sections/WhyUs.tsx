import { Blocks, BrainCircuit, Handshake, Layers, ShieldCheck, Workflow } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const items = [
  {
    icon: Layers,
    title: "We build products, not just projects",
    text: "Our HCM, CRM and Analytics products are designed, built and maintained by our own team. That experience — real users, real feedback, real iteration — shapes every custom application we deliver.",
  },
  {
    icon: BrainCircuit,
    title: "AI, where it genuinely helps",
    text: "We add AI to automate repetitive, information-heavy work — document processing, search and assistance — not as decoration.",
  },
  {
    icon: Workflow,
    title: "Transparent process",
    text: "Clear scope, visible progress and honest communication at every stage. You always know where your project stands.",
  },
  {
    icon: Blocks,
    title: "Built to be maintained",
    text: "Clean, understandable software that is practical to extend as your requirements change. No black boxes.",
  },
  {
    icon: ShieldCheck,
    title: "Support beyond launch",
    text: "Deployment is not the finish line. We stay available for improvements, fixes and future development.",
  },
  {
    icon: Handshake,
    title: "One partner, both worlds",
    text: "Adopt one of our ready products where it fits, or have something built precisely around your requirements — with the same team either way.",
  },
];

export default function WhyUs() {
  return (
    <section aria-labelledby="why-heading" className="border-t border-ink-900/10 bg-canvas py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            index="04"
            titleId="why-heading"
            eyebrow="Why Jobqode"
            title="A product mindset, applied to every project"
            description="Building our own products taught us to think about users, outcomes and maintainability. We bring the same discipline to client work."
          />
        </Reveal>
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 80}>
              <article className="border-t-2 border-ink-950 pt-5">
                <item.icon className="h-6 w-6 text-brand-700" aria-hidden="true" />
                <h3 className="mt-3 font-serif-display text-lg text-ink-950 sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
