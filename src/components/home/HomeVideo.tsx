import { Play } from "lucide-react";

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

        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[36px] border border-border/60 bg-background/80 shadow-large backdrop-blur">
          <div className="relative aspect-video w-full">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/fOgVaRaVDeg?si=1BgaVmWbeZXcbYLB"
              title="DiaspoCare overview video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="absolute inset-x-6 bottom-6 rounded-3xl bg-background/90 p-4 text-sm font-semibold uppercase tracking-[0.24em] text-foreground/70 backdrop-blur">
            <div className="flex items-center gap-2">
              <Play className="h-4 w-4" /> Official DiaspoCare Story — 2:41
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeVideo;
