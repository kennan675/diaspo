import careJourneyImage from "@/assets/medical-team.jpg";

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
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#06122a]/5 via-[#0e1d3a]/10 to-[#102445]/5" />
      <div className="container mx-auto grid gap-16 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:px-8">
        <div className="flex flex-col gap-10">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.38em] text-primary/80">DiaspoCare Solutions</span>
            <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">Every challenge answered in one connected platform</h2>
            <p className="text-lg text-foreground/70">
              Match the realities diaspora families face with the services that keep care organised, funded, and verified across borders.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/0 via-primary/30 to-accent/0 md:block" />
            <div className="space-y-10">
              {CARE_STEPS.map((step) => (
                <article
                  key={step.need}
                  className="group relative grid gap-8 overflow-hidden rounded-3xl border border-border/60 bg-background/90 px-6 py-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow md:grid-cols-2 md:px-10"
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="flex flex-col gap-4 text-left">
                    <span className="text-xs font-semibold uppercase tracking-[0.32em] text-foreground/60">Challenge</span>
                    <p className="text-xl font-semibold text-foreground">{step.need}</p>
                  </div>
                  <div className="flex flex-col gap-3 text-left md:text-right">
                    <span className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">Solution</span>
                    <p className="text-lg text-foreground/80">{step.solution}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/solutions"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white shadow-large transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore Our Solutions
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary/10"
            >
              Talk to a Concierge
            </a>
          </div>
        </div>

        <div className="relative hidden w-full overflow-hidden rounded-[36px] border border-border/50 shadow-glow lg:block">
          <img src={careJourneyImage} alt="DiaspoCare coordinators supporting a patient" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-secondary/25" />
          <div className="absolute bottom-6 right-6 rounded-2xl bg-white/90 px-6 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary shadow-soft">
            Six services, one platform
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCareJourney;
