import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { processSteps } from "@/lib/data/process";

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="scroll-mt-20 border-t border-ink-900/10 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            index="05"
            titleId="process-heading"
            eyebrow="Our Process"
            title="How a custom project moves from idea to launch"
            description="A transparent sequence, so you always know what is happening, what to review, and what comes next."
          />
        </Reveal>

        <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal key={step.id} delay={(i % 3) * 80}>
              <li className="border-t-2 border-ink-950 pt-5">
                <p className="text-sm font-semibold text-ink-500">
                  {String(i + 1).padStart(2, "0")}
                  <span className="ml-2 text-xs tracking-wide uppercase">Step {i + 1}</span>
                </p>
                <h3 className="mt-3 font-serif-display text-xl text-ink-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{step.description}</p>
                <p className="mt-3 text-sm text-ink-900">
                  <span className="text-ink-500">You receive: </span>
                  {step.output}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
