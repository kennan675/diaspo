import { Activity, Shield, Users } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Zero Diversion Promise",
      description: "Every shilling funds verified clinics, providers, and medication back home.",
      gradient: "from-primary via-primary-glow to-secondary",
    },
    {
      icon: Users,
      title: "Families First",
      description: "50K+ families served, 2K+ providers, 4 countries—personalised support that travels.",
      gradient: "from-secondary via-accent to-primary",
    },
    {
      icon: Activity,
      title: "Real-time Care Updates",
      description: "Know exactly how your loved ones are doing with live health monitoring.",
      gradient: "from-accent via-secondary to-primary-glow",
    },
  ];

  return (
    <section id="solutions" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--secondary) / 0.1) 0%, transparent 50%)",
        }}
      />

      <div className="container relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {badges.map((badge, index) => {
          const Icon = badge.icon;
          return (
            <div
              key={badge.title}
              className="group relative animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative flex flex-col items-center rounded-3xl border-2 border-border/50 bg-card/80 p-10 text-center shadow-soft backdrop-blur-premium transition-all duration-700 hover:-translate-y-2 hover:border-primary/50 hover:shadow-large">
                <div className="relative mb-8 transition-transform duration-700 group-hover:scale-110">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/40 to-secondary/40 blur-lg animate-pulse-glow" />
                  <div className={`relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${badge.gradient} text-primary-foreground shadow-large`}>
                    <Icon className="h-10 w-10" strokeWidth={2.5} />
                  </div>
                </div>

                <h3 className="mb-4 font-display text-2xl font-bold text-foreground transition-colors duration-500 group-hover:text-primary">
                  {badge.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">{badge.description}</p>

                <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 h-2 w-2 rounded-full bg-secondary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrustBadges;
