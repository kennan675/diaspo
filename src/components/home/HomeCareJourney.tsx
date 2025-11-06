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
    <section id="care-journey" className="py-24" data-animate="fade-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">Care journey</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl">Every challenge mapped to a DiaspoCare solution</h2>
          <p className="mt-4 text-lg text-foreground/70">
            A transparent, guided experience for diaspora families and loved ones at home. Needs on the left — DiaspoCare response on the right.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/0 via-primary/40 to-accent/0 md:block" />
          <div className="space-y-10">
            {CARE_STEPS.map((step, index) => (
              <article
                key={step.need}
                className="grid gap-8 rounded-3xl border border-border bg-background/80 px-6 py-8 shadow-soft transition-transform duration-500 hover:-translate-y-1 hover:shadow-glow md:grid-cols-2 md:px-10"
              >
                <div className="flex flex-col gap-4 text-left">
                  <span className="text-xs font-semibold uppercase tracking-[0.32em] text-foreground/60">Need {index + 1}</span>
                  <p className="text-xl font-semibold text-foreground">{step.need}</p>
                </div>
                <div className="flex flex-col gap-4 text-left md:text-right">
                  <span className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">DiaspoCare solution</span>
                  <p className="text-lg text-foreground/80">{step.solution}</p>
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
