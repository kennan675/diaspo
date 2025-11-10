const CARE_STEPS = [
  {
    need: "Money sent home is used for other things",
    solution: "Healthcare Financing App ensures every contribution pays for visits, medication, and follow-ups as intended.",
    category: "Financial integrity",
    icon: "💸",
    accent: "from-primary/20 via-primary/10 to-accent/20",
    iconBg: "bg-primary/12 text-primary",
    indicator: "bg-gradient-to-br from-primary/90 via-accent/90 to-secondary/90",
    solutionAccent: "text-primary",
    accentDot: "bg-primary",
  },
  {
    need: "Need help managing care",
    solution: "Concierge Care Coordination schedules appointments, handles logistics, and keeps everyone updated.",
    category: "Care logistics",
    icon: "🧭",
    accent: "from-accent/20 via-primary/10 to-accent/15",
    iconBg: "bg-accent/12 text-accent",
    indicator: "bg-gradient-to-br from-accent/90 via-primary/90 to-secondary/85",
    solutionAccent: "text-accent",
    accentDot: "bg-accent",
  },
  {
    need: "Medical costs are high",
    solution: "Family Health Wallets let relatives pool funds and approve spend in real time.",
    category: "Smart funding",
    icon: "🪙",
    accent: "from-secondary/18 via-secondary/8 to-primary/12",
    iconBg: "bg-secondary/12 text-secondary",
    indicator: "bg-gradient-to-br from-secondary/90 via-primary/85 to-accent/85",
    solutionAccent: "text-secondary",
    accentDot: "bg-secondary",
  },
  {
    need: "Doctor needs expert support",
    solution: "MD Connect links local providers to international specialists for second opinions and case reviews.",
    category: "Clinical network",
    icon: "🧠",
    accent: "from-primary/18 via-primary/8 to-foreground/8",
    iconBg: "bg-primary/12 text-primary",
    indicator: "bg-gradient-to-br from-primary/90 via-foreground/70 to-primary/85",
    solutionAccent: "text-primary",
    accentDot: "bg-primary",
  },
  {
    need: "Need authentic medication",
    solution: "Medication Search surfaces verified pharmacies and tracks fulfillment end-to-end.",
    category: "Verified pharmacy",
    icon: "💊",
    accent: "from-secondary/16 via-primary/8 to-accent/14",
    iconBg: "bg-secondary/12 text-secondary",
    indicator: "bg-gradient-to-br from-secondary/90 via-accent/90 to-primary/85",
    solutionAccent: "text-secondary",
    accentDot: "bg-secondary",
  },
  {
    need: "Need affordable diagnostics",
    solution: "HPod Diagnostic Kiosks bring reliable testing to trusted community locations.",
    category: "Trusted diagnostics",
    icon: "🔬",
    accent: "from-accent/18 via-primary/8 to-secondary/16",
    iconBg: "bg-accent/12 text-accent",
    indicator: "bg-gradient-to-br from-accent/90 via-primary/85 to-secondary/90",
    solutionAccent: "text-accent",
    accentDot: "bg-accent",
  },
];

const CARE_HIGHLIGHTS = [
  "Financial integrity",
  "Coordinated logistics",
  "Clinical escalation",
  "Verified supply chains",
];

const HomeCareJourney = () => {
  return (
    <section id="care-journey" className="relative overflow-hidden py-24" data-animate="fade-up">
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:52px_52px] opacity-30" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-primary/10 to-white" />
      <div className="absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl md:-left-32" />
      <div className="absolute bottom-[-7rem] right-[-6rem] -z-10 h-96 w-96 rounded-full bg-secondary/15 blur-[120px]" />
      <div className="absolute inset-x-0 top-1/3 -z-10 h-[420px] bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.14),_transparent_68%)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-accent to-secondary px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-white shadow-lg shadow-primary/30">
            <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
            DiaspoCare Solutions
          </span>
          <h2 className="mt-6 max-w-3xl bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text font-display text-4xl font-semibold text-transparent sm:text-5xl lg:text-6xl">
            Every challenge answered in one connected platform
          </h2>
          <p className="mt-5 text-lg leading-8 text-foreground/70 sm:text-xl">
            Match the realities diaspora families face with the services that keep care organised, funded, and verified across borders.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-foreground/60">
            {CARE_HIGHLIGHTS.map((highlight) => (
              <span
                key={highlight}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/80 px-4 py-2 shadow-sm shadow-primary/5 backdrop-blur transition-colors duration-300 hover:border-primary/30"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/30 to-transparent md:block" />
          <div className="space-y-10">
            {CARE_STEPS.map((step, index) => (
              <article
                key={step.need}
                className="group relative grid items-center gap-8 overflow-hidden rounded-[2rem] border border-border/40 bg-background/95 px-6 py-10 shadow-xl shadow-primary/5 backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl md:grid-cols-[1fr_auto_1fr] md:px-12 animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 120}ms` as const }}
              >
                <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${step.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                <div className="flex flex-col gap-6 text-left">
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/8 text-xl shadow-[0_1.5rem_3rem_-1.5rem_rgba(15,23,42,0.58)] backdrop-blur ${step.iconBg}`}
                    >
                      {step.icon}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-foreground/50">
                        Challenge
                      </span>
                      <span className="text-sm font-medium text-foreground/60">{step.category}</span>
                    </div>
                  </div>
                  <p className="text-2xl font-semibold text-foreground sm:text-3xl">{step.need}</p>
                </div>
                <div className="relative hidden flex-col items-center justify-center gap-4 md:flex">
                  <span
                    className={`flex h-16 w-16 items-center justify-center rounded-3xl text-sm font-semibold text-white shadow-[0_1.4rem_3.2rem_-1.8rem_rgba(59,130,246,0.46)] transition-all duration-500 group-hover:shadow-[0_1.6rem_3.6rem_-1.4rem_rgba(59,130,246,0.55)] ${step.indicator}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {index !== CARE_STEPS.length - 1 && (
                    <span className="h-16 w-px bg-gradient-to-b from-primary/30 to-transparent" aria-hidden />
                  )}
                </div>
                <div className="flex flex-col gap-4 text-left md:text-right">
                  <span className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-primary/80 ${step.solutionAccent}`}>
                    <span className={`h-2 w-2 rounded-full ${step.accentDot}`} />
                    Solution
                  </span>
                  <p className="text-lg leading-8 text-foreground/75 sm:text-xl">{step.solution}</p>
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
