import ButtonLink from "@/components/ui/ButtonLink";

export default function PromoBanner() {
  return (
    <section
      className="relative overflow-hidden rounded-xl border border-ink-200 bg-ink-950 px-6 py-12 text-center sm:px-10 sm:py-14"
      aria-labelledby="promo-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, #b8f04a 0%, transparent 45%), radial-gradient(circle at 80% 30%, #84cc16 0%, transparent 40%)",
        }}
      />
      <div className="relative">
        <h2 id="promo-heading" className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Unlock the power of connected business software
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/75 sm:text-base">
          Experience HCM, CRM, and analytics products — plus custom engineering when you need systems tailored to how you work.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="#contact" variant="ghost" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
            Get started
          </ButtonLink>
          <ButtonLink href="#products" variant="primary">
            Try for free
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
