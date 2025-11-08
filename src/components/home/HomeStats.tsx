const KEY_STATS = [
  {
    value: "2,000+",
    label: "Healthcare Providers",
    description: "Credentialed clinics, pharmacies, and specialists across Africa & the USA.",
  },
  {
    value: "95%",
    label: "Care plan adherence",
    description: "Coordinated reminders and transport keep patients on schedule for treatments.",
  },
  {
    value: "50K+",
    label: "Diaspora families served",
    description: "Loved ones receive transparent updates and real medical support in real time.",
  },
];

const statsImage = "https://images.unsplash.com/photo-1580281657521-6a7b0b49763e?auto=format&fit=crop&w=1100&q=80";

const HomeStats = () => {
  return (
    <section className="relative overflow-hidden py-24" data-animate="fade-up">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#eef3ff] via-white to-[#f8fbff]" />
      <div className="container mx-auto grid gap-16 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-8">
        <div className="relative w-full overflow-hidden rounded-[36px] border border-border/40 shadow-glow">
          <img src={statsImage} alt="DiaspoCare clinicians reviewing patient results" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-secondary/25" />
          <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-6 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary shadow-soft">
            Why DiaspoCare works
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">Proof of trust</span>
            <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">A care network built on outcomes and accountability</h2>
            <p className="text-lg text-foreground/70">
              DiaspoCare partners with credentialed providers, monitors every encounter, and reports back instantly so families abroad never wonder how funds were used.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {KEY_STATS.map((stat) => (
              <article
                key={stat.label}
                className="group relative overflow-hidden rounded-3xl border border-border/60 bg-white/80 p-6 text-left shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <p className="text-4xl font-display font-bold text-primary sm:text-5xl">{stat.value}</p>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-foreground/60">{stat.label}</p>
                  <p className="mt-3 text-sm text-foreground/70">{stat.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="/impact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white shadow-large transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore Our Impact
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary/10"
            >
              Request Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeStats;
