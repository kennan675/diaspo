const KEY_STATS = [
  {
    value: "2,000+",
    label: "Healthcare Providers",
    description: "Credentialed clinics, pharmacies, and specialists across Africa & the USA",
  },
  {
    value: "4",
    label: "Regions of Operation",
    description: "Kenya · Ghana · Nigeria · United States",
  },
];

const HomeStats = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-white" data-animate="fade-up">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/8 via-secondary/5 to-accent/10 blur-3xl" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">Why families trust DiaspoCare</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl">Trusted healthcare network that travels with your family</h2>
          <p className="mt-4 text-lg text-foreground/70">
            Built around transparency, coordination, and real clinical partnerships — so every contribution turns into quality care back home.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {KEY_STATS.map((stat) => (
            <article
              key={stat.label}
              className="group relative overflow-hidden rounded-3xl border border-border bg-background/80 p-10 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <p className="text-5xl font-display font-bold text-foreground sm:text-6xl">{stat.value}</p>
                <p className="mt-4 text-lg font-semibold text-foreground/80">{stat.label}</p>
                <p className="mt-3 text-sm text-foreground/70">{stat.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeStats;
