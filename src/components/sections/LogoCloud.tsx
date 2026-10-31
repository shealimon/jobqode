const logos = ["HCM", "CRM", "Analytics", "Integrations", "Mobile", "Cloud"] as const;

export default function LogoCloud() {
  return (
    <section className="scroll-mt-20 py-10 sm:py-12" aria-labelledby="logo-cloud-heading">
      <p id="logo-cloud-heading" className="text-center text-sm font-medium text-ink-500">
        Trusted capabilities across{" "}
        <span className="font-semibold text-ink-800">people, customers &amp; data</span>
      </p>
      <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4">
        {logos.map((name) => (
          <li key={name} className="text-lg font-bold tracking-tight text-ink-300 grayscale sm:text-xl">
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}
