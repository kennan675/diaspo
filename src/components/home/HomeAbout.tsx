const aboutImage = "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80";

const HomeAbout = () => {
  return (
    <section id="about" className="relative overflow-hidden py-24" data-animate="fade-up">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/20" />
      <div className="container mx-auto flex flex-col items-center gap-16 px-4 sm:px-6 lg:flex-row lg:gap-20 lg:px-8">
        <div className="relative w-full max-w-xl overflow-hidden rounded-[36px] shadow-glow">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 mix-blend-overlay" />
          <img src={aboutImage} alt="Diaspora family video calling a loved one" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute bottom-6 left-6 rounded-3xl bg-white/90 px-6 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-foreground shadow-soft">
            Why DiaspoCare exists
          </div>
        </div>

        <div className="flex max-w-2xl flex-col gap-6 text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">About DiaspoCare</span>
          <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">Care rebuilt for families living oceans apart</h2>
          <p className="text-lg text-foreground/70">
            We grew up watching relatives travel far for opportunity while worrying about parents back home. DiaspoCare was founded by clinicians,
            technologists, and caregivers who wanted to make cross-border healthcare trustworthy, trackable, and compassionate.
          </p>
          <ul className="space-y-3 text-foreground/80">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
              Coordinated networks of verified clinics, labs, and pharmacies in diaspora hubs.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-secondary" />
              Real-time updates so every contribution is approved and actioned with transparency.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
              Dedicated care concierges who bridge language, culture, and time zones for the whole family.
            </li>
          </ul>
          <div className="mt-2 flex flex-wrap gap-4">
            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white shadow-large transition-transform duration-300 hover:-translate-y-0.5"
            >
              Learn More
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

export default HomeAbout;
