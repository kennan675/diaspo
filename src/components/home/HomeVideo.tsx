import { Play } from "lucide-react";

const HomeVideo = () => {
  return (
    <section id="how-it-works" className="py-24" data-animate="scale-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">How it works</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl">Coordinated care in three steps</h2>
          <p className="mt-4 text-lg text-foreground/70">
            Watch how DiaspoCare aligns financing, care coordination, and provider updates so your family always receives the right support.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[36px] border border-border/60 bg-background/80 shadow-large backdrop-blur">
          <div className="aspect-video w-full bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
          <button className="group absolute inset-0 flex flex-col items-center justify-center gap-3 text-foreground" type="button">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-foreground/90 text-background shadow-soft transition-transform group-hover:scale-105">
              <Play className="h-7 w-7" />
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.28em] text-foreground/70">Play overview</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeVideo;
