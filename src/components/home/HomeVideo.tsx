import YouTubeVideo from "../YouTubeVideo";

const HomeVideo = () => {
  return (
    <section id="how-it-works" className="py-24" data-animate="scale-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">How it works</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl">What DiaspoCare feels like</h2>
          <p className="mt-4 text-lg text-foreground/70">
            Meet the families and clinicians using DiaspoCare to move money transparently, coordinate care in real time, and keep loved ones healthy across continents.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl" data-animate="fade-up">
          <div className="group relative">
            <div className="pointer-events-none absolute -inset-1 rounded-[40px] bg-gradient-to-r from-primary/30 via-accent/20 to-secondary/30 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-80" aria-hidden />
            <div className="pointer-events-none absolute -top-24 -right-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl opacity-60 animate-pulse" aria-hidden />
            <div className="pointer-events-none absolute -bottom-28 -left-24 h-56 w-56 rounded-full bg-primary/20 blur-3xl opacity-70 animate-pulse" aria-hidden />

            <YouTubeVideo
              videoId="fOgVaRaVDeg"
              title="DiaspoCare overview video"
              className="rounded-[36px] border border-border/40 bg-background/80 shadow-large backdrop-blur transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeVideo;
