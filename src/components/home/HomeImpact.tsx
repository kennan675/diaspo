import { HeartPulse, Globe2, Layers3 } from "lucide-react";

const impactImage = "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&w=1100&q=80";

const IMPACT_POINTS = [
  {
    icon: HeartPulse,
    title: "95% appointment adherence",
    description: "Coordinated reminders and transport support keep loved ones on schedule for critical check-ups.",
  },
  {
    icon: Globe2,
    title: "4 countries connected",
    description: "Diaspora families in the U.S. directly sponsor care in Kenya, Ghana, Nigeria, and beyond.",
  },
  {
    icon: Layers3,
    title: "End-to-end transparency",
    description: "Every contribution is logged, approved, and reconciled instantly in the DiaspoCare wallet.",
  },
];

const HomeImpact = () => {
  return (
    <section id="impact" className="relative overflow-hidden py-24" data-animate="fade-up">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="container mx-auto grid gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20 lg:px-8">
        <div className="flex flex-col gap-8">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary">Impact</span>
          <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">Every dollar becomes real care back home</h2>
          <p className="text-lg text-foreground/75">
            DiaspoCare is trusted by families, clinicians, and pharmacists who need a dependable bridge between diaspora support and on-the-ground healthcare services.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {IMPACT_POINTS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="group flex flex-col gap-3 rounded-3xl border border-border/60 bg-white/70 p-6 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-secondary/60">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 p-3 text-secondary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-base font-semibold text-foreground">{title}</p>
                </div>
                <p className="text-sm text-foreground/75">{description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/impact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-secondary to-primary px-6 py-3 text-sm font-semibold text-white shadow-large transition-transform duration-300 hover:-translate-y-0.5"
            >
              View Impact Stories
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-secondary/40 px-6 py-3 text-sm font-semibold text-secondary transition-all duration-300 hover:bg-secondary/10"
            >
              Partner With Us
            </a>
          </div>
        </div>

        <div className="relative w-full overflow-hidden rounded-[36px] shadow-glow">
          <img src={impactImage} alt="DiaspoCare clinician celebrating with family" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/25 via-transparent to-primary/30" />
          <div className="absolute bottom-6 right-6 rounded-2xl bg-white/90 px-6 py-4 text-right text-xs font-semibold uppercase tracking-[0.3em] text-secondary shadow-soft">
            50K+ families connected
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeImpact;
