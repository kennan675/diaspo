const CARE_STEPS = [
  {
    need: "Money sent home is used for other things",
    solution: "Healthcare Financing App ensures every contribution pays for visits, medication, and follow-ups as intended.",
  },
  {
    need: "Need help managing care",
    solution: "Concierge Care Coordination schedules appointments, handles logistics, and keeps everyone updated.",
  },
  {
    need: "Medical costs are high",
    solution: "Family Health Wallets let relatives pool funds and approve spend in real time.",
  },
  {
    need: "Doctor needs expert support",
    solution: "MD Connect links local providers to international specialists for second opinions and case reviews.",
  },
  {
    need: "Need authentic medication",
    solution: "Medication Search surfaces verified pharmacies and tracks fulfillment end-to-end.",
  },
  {
    need: "Need affordable diagnostics",
    solution: "HPod Diagnostic Kiosks bring reliable testing to trusted community locations.",
  },
];

const HomeCareJourney = () => {
  return (
    <section id="care-journey" className="relative overflow-hidden py-24" data-animate="fade-up">
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-primary/5 to-white" />
      <div className="absolute -left-24 top-0 -z-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl md:-left-32" />
      <div className="absolute bottom-[-6rem] right-[-4rem] -z-10 h-80 w-80 rounded-full bg-secondary/15 blur-3xl md:bottom-[-8rem]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
            <span className="h-2 w-2 rounded-full bg-primary" />
            DiaspoCare Solutions
          </span>
          <h2 className="mt-6 max-w-3xl bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text font-display text-4xl font-semibold text-transparent sm:text-5xl">
            Every challenge answered in one connected platform
          </h2>
          <p className="mt-5 text-lg leading-8 text-foreground/70 sm:text-xl">
            Match the realities diaspora families face with the services that keep care organised, funded, and verified across borders.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/30 to-transparent md:block" />
          <div className="space-y-12">
            {CARE_STEPS.map((step, index) => (
              <article
                key={step.need}
                className="group relative grid items-center gap-8 overflow-hidden rounded-[2rem] border border-border/50 bg-background/90 px-6 py-10 shadow-lg shadow-primary/5 backdrop-blur transition-transform duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl md:grid-cols-[1fr_auto_1fr] md:px-12"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex flex-col gap-4 text-left">
                  <span className="text-xs font-semibold uppercase tracking-[0.32em] text-foreground/60">Challenge</span>
                  <p className="text-xl font-semibold text-foreground sm:text-2xl">{step.need}</p>
                </div>
                <div className="relative hidden flex-col items-center justify-center gap-4 md:flex">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 font-display text-base font-semibold text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {index !== CARE_STEPS.length - 1 && (
                    <span className="h-16 w-px bg-gradient-to-b from-primary/30 to-transparent" aria-hidden />
                  )}
                </div>
                <div className="flex flex-col gap-3 text-left md:text-right">
                  <span className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">Solution</span>
                  <p className="text-lg leading-8 text-foreground/75">{step.solution}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCareJourney;
