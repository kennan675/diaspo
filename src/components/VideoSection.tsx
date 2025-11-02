import { Award, CheckCircle, Play } from "lucide-react";

import familyCareImage from "@/assets/family-care.jpg";

const VideoSection = () => {
  const highlights = [
    "End-to-end care coordination",
    "Real-time family updates",
    "Verified healthcare providers",
  ];

  return (
    <section id="about" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(at 10% 20%, hsl(var(--primary) / 0.15) 0px, transparent 50%), radial-gradient(at 90% 80%, hsl(var(--accent) / 0.15) 0px, transparent 50%), radial-gradient(at 50% 50%, hsl(var(--secondary) / 0.1) 0px, transparent 50%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-4xl text-center animate-fade-in opacity-0">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-primary/20 bg-primary/10 px-5 py-2.5 text-sm font-bold text-primary transition-transform duration-500 hover:scale-105">
            <Award className="h-4 w-4" /> SEE IT IN ACTION
          </div>
          <h2 className="text-5xl font-display font-bold text-foreground leading-tight sm:text-6xl lg:text-7xl">
            Watch How
            <span className="block text-gradient">DiaspoCare Works</span>
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground sm:text-2xl">
            See how easy it is to coordinate healthcare for your loved ones
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="animate-scale-in opacity-0 lg:col-span-7" style={{ animationDelay: "0.2s" }}>
            <div className="group relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-primary via-secondary to-accent blur-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-30" />

              <div className="relative aspect-video overflow-hidden rounded-3xl border-4 border-border/30 shadow-large transition-all duration-700 group-hover:shadow-glow-hover">
                <img src={familyCareImage} alt="Family care demonstration" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />

                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/60 via-secondary/40 to-accent/60 transition-all duration-700 group-hover:from-primary/40 group-hover:via-secondary/30 group-hover:to-accent/40">
                  <button
                    onClick={() => window.open("https://youtu.be/dAyfk6sqPcY?si=IOZz6I__ZjRnpoej", "_blank")}
                    className="group/play relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary-foreground to-white text-primary shadow-glow transition-all duration-500 hover:rotate-90 hover:shadow-glow-hover group-hover:scale-125"
                    aria-label="Play video"
                  >
                    <div className="absolute inset-0 rounded-full border-4 border-white/50 animate-ping" />
                    <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse" />
                    <Play className="relative z-10 ml-1 h-10 w-10" fill="currentColor" strokeWidth={0} />
                  </button>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4">
                  <div className="rounded-xl border border-border/50 bg-background/90 px-4 py-2 text-sm font-semibold text-foreground backdrop-blur-md">▶ 2:45</div>
                  <div className="rounded-xl border border-border/50 bg-background/90 px-4 py-2 text-sm font-semibold text-foreground backdrop-blur-md">👁 15K+ views</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-right opacity-0 lg:col-span-5" style={{ animationDelay: "0.4s" }}>
            <h3 className="mb-8 font-display text-3xl font-bold text-foreground">Everything you need in one platform</h3>

            {highlights.map((highlight, index) => (
              <div
                key={highlight}
                className="group flex items-start gap-4 rounded-2xl border-2 border-border/50 bg-card/80 p-6 transition-all duration-500 hover:scale-[1.02] hover:border-primary/50 hover:shadow-medium animate-fade-in opacity-0"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-soft transition-transform duration-500 group-hover:scale-110">
                  <CheckCircle className="h-6 w-6" strokeWidth={2.5} />
                </div>
                <p className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">{highlight}</p>
              </div>
            ))}

            <div className="animate-fade-in pt-6 opacity-0" style={{ animationDelay: "0.9s" }}>
              <a href="#contact" className="group inline-flex items-center gap-2 text-lg font-bold text-primary transition-all duration-300 hover:gap-4">
                Learn more about our services <span className="text-2xl transition-transform group-hover:translate-x-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
