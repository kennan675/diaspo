import { Quote, Star, Heart } from "lucide-react";

import medicalTeamImage from "@/assets/medical-team.jpg";
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, hsl(var(--secondary)) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="animate-fade-in opacity-0">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-primary/20 bg-primary/10 px-5 py-2.5 text-sm font-bold text-primary">
            <Heart className="h-4 w-4" /> Trusted by Families
          </div>
          <h2 className="text-5xl font-display font-bold text-foreground leading-tight sm:text-6xl lg:text-7xl">
            Professional Care,
            <br />
            <span className="text-gradient">Personal Touch</span>
          </h2>
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">
            Our network of verified healthcare providers delivers world-class care with the compassion your family deserves.
          </p>

          <Card className="group relative mt-12 border-l-8 border-primary bg-card/80 p-8 shadow-large transition-all duration-700 hover:scale-[1.02] hover:shadow-glow-hover lg:p-10">
            <div className="absolute -top-6 -left-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-large transition-all duration-700 group-hover:shadow-glow group-hover:rotate-12">
              <Quote className="h-8 w-8" strokeWidth={2.5} />
            </div>

            <div className="mb-6 flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>

            <p className="text-lg italic leading-relaxed text-muted-foreground sm:text-xl">
              "DiaspoCare has given me peace of mind knowing my parents back home are getting the best healthcare. The real-time updates are invaluable, and the care coordinators treat my family like their own."
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xl font-bold text-primary-foreground shadow-medium">
                SM
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">Sarah M.</div>
                <div className="text-sm text-muted-foreground">Diaspora Family Member · USA</div>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 h-24 w-24 rounded-tl-3xl bg-gradient-to-tl from-primary/5 to-transparent" />
          </Card>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-12 w-12 rounded-full border-4 border-background bg-gradient-to-br from-primary to-secondary shadow-soft transition-transform duration-300 hover:z-10 hover:scale-110"
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-muted-foreground">Join 50K+ happy families</span>
            </div>
          </div>
        </div>

        <div className="relative animate-scale-in opacity-0" style={{ animationDelay: "0.3s" }}>
          <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl animate-float" />
          <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

          <div className="group relative">
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-primary via-secondary to-accent blur-2xl opacity-20 transition-opacity duration-700 group-hover:opacity-40" />

            <div className="relative overflow-hidden rounded-3xl border-4 border-border/30 shadow-large transition-all duration-700 group-hover:border-primary/50 group-hover:shadow-glow-hover">
              <img src={medicalTeamImage} alt="Professional medical team" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent transition-all duration-700 group-hover:from-primary/60" />

              <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between gap-4">
                <div className="rounded-2xl border-2 border-border/50 bg-background/90 px-6 py-3 text-xs font-semibold text-muted-foreground backdrop-blur-premium">
                  <div className="text-2xl font-display font-bold text-primary">2K+</div>
                  <div>Providers</div>
                </div>
                <div className="rounded-2xl border-2 border-border/50 bg-background/90 px-6 py-3 text-xs font-semibold text-muted-foreground backdrop-blur-premium">
                  <div className="text-2xl font-display font-bold text-secondary">4</div>
                  <div>Countries</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 h-24 w-24 rounded-tl-3xl border-t-4 border-l-4 border-primary opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-br-3xl border-b-4 border-r-4 border-secondary opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
