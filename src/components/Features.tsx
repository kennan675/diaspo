import { Bell, Heart, Shield, UserCheck, Video, Zap } from "lucide-react";

import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Video,
      title: "On-demand Doctor Consults",
      description: "Book voice, video, or chat visits with licensed providers and receive e-prescriptions instantly.",
      gradient: "from-primary via-primary-glow to-accent",
      iconBg: "from-primary/20 to-accent/20",
    },
    {
      icon: UserCheck,
      title: "Dedicated Care Coordinators",
      description: "Follow-ups, lab logistics, and medication deliveries are handled end-to-end for your family.",
      gradient: "from-secondary via-accent to-primary",
      iconBg: "from-secondary/20 to-primary/20",
    },
    {
      icon: Bell,
      title: "Transparent Family Updates",
      description: "Track vitals, appointments, and care summaries so everyone stays informed in real-time.",
      gradient: "from-accent via-secondary to-primary-glow",
      iconBg: "from-accent/20 to-primary-glow/20",
    },
  ];

  const microFeatures = [
    { icon: Zap, text: "Instant Notifications" },
    { icon: Heart, text: "Compassionate Care" },
    { icon: Shield, text: "HIPAA Compliant" },
  ];

  return (
    <section className="relative overflow-hidden py-32" id="solutions">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[100px] animate-float" />
      <div
        className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-secondary/10 blur-[100px] animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-20 max-w-4xl text-center animate-fade-in opacity-0">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-primary/20 bg-primary/10 px-5 py-2.5 text-sm font-bold text-primary transition-transform duration-500 hover:scale-105">
            <Zap className="h-4 w-4 animate-pulse" /> Live Support
          </div>
          <h2 className="text-5xl font-display font-bold text-foreground leading-tight sm:text-6xl lg:text-7xl">
            Everything Your Family
            <span className="block text-gradient">Needs &amp; More</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">
            Comprehensive healthcare coordination in one powerful platform
          </p>
        </div>

        <div className="mx-auto mb-16 grid max-w-7xl grid-cols-1 gap-10 animate-fade-in opacity-0 lg:grid-cols-3" style={{ animationDelay: "0.2s" }}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group relative overflow-hidden border-2 border-border/50 bg-card/80 p-8 transition-all duration-700 hover:-translate-y-3 hover:border-primary/50 hover:shadow-large"
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                <div className={`absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-gradient-to-br ${feature.iconBg}`} />
                <div className="relative z-10">
                  <div className="relative mb-8 inline-block">
                    <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br from-primary/40 to-secondary/40 blur-xl opacity-0 transition-opacity duration-700 animate-pulse-glow group-hover:opacity-100" />
                    <div className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} text-primary-foreground shadow-medium transition-all duration-700 group-hover:scale-110 group-hover:shadow-glow`}>
                      <Icon className="h-8 w-8" strokeWidth={2.5} />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-foreground transition-colors duration-500 group-hover:text-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{feature.description}</p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-100">
                    Learn more <span>→</span>
                  </div>
                </div>

                <div className="absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              </Card>
            );
          })}
        </div>

        <div className="mx-auto max-w-4xl animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
          <div className="flex flex-wrap items-center justify-center gap-8 rounded-3xl border-2 border-border/30 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 p-8 backdrop-blur-sm">
            {microFeatures.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="group flex items-center gap-3 cursor-pointer">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-soft transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
