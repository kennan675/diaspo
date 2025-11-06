const REGIONS = [
  {
    country: "Kenya",
    description: "Nationwide network of clinics, pharmacies, and hospital partners in Nairobi, Mombasa, Kisumu, and Eldoret.",
    flag: "🇰🇪",
  },
  {
    country: "Ghana",
    description: "Coverage across Accra, Kumasi, and Takoradi with medication fulfillment and specialist referrals.",
    flag: "🇬🇭",
  },
  {
    country: "Nigeria",
    description: "Coordinated care teams serving Lagos, Abuja, Port Harcourt, and diaspora-supported rural programs.",
    flag: "🇳🇬",
  },
  {
    country: "United States",
    description: "Care navigators and bilingual support for diaspora families funding loved ones back home.",
    flag: "🇺🇸",
  },
];

const HomeRegions = () => {
  return (
    <section id="regions" className="relative py-24" data-animate="fade-up">
      <div className="absolute inset-0 -z-10 bg-gradient-to-tl from-accent/10 via-background to-primary/10 blur-3xl" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">Where we operate</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl">DiaspoCare on both sides of the Atlantic</h2>
          <p className="mt-4 text-lg text-foreground/70">
            Seamless coordination between diaspora supporters abroad and loved ones receiving care in Africa. Dedicated teams keep every region connected.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {REGIONS.map((region) => (
            <article
              key={region.country}
              className="group relative overflow-hidden rounded-3xl border border-border bg-background/80 p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
              data-animate="fade-up"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center gap-3 text-3xl">
                  <span className="text-4xl" aria-hidden>{region.flag}</span>
                  <h3 className="font-display text-2xl font-semibold text-foreground">{region.country}</h3>
                </div>
                <p className="text-sm text-foreground/70">{region.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeRegions;
