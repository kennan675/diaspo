import { AlertTriangle, HeartPulse, Sparkles } from "lucide-react";

const PAIN_POINTS = [
  "Sending $100–$200 \u201cjust to be safe\u201d",
  "Not knowing the real diagnosis",
  "Money being diverted",
  "Feeling guilty when many relatives need help",
  "Being blamed if something goes wrong",
  "Not trusting the local healthcare system",
];

const HomeWhyDiaspoCare = () => {
  return (
    <section
      id="why-diaspocare"
      className="relative overflow-hidden py-24"
      data-animate="fade-up"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-background to-background" />
      <div className="absolute inset-y-0 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-accent/10 blur-[160px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <div className="space-y-8 text-foreground">
            <span className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-primary">
              <HeartPulse className="h-4 w-4" />
              Why DiaspoCare Exists
            </span>

            <div className="space-y-6">
              <h2 className="font-display text-4xl font-semibold text-foreground sm:text-5xl">
                Diaspora families deserve verified healthcare, not stories
              </h2>
              <p className="text-lg leading-8 text-foreground/75 sm:text-xl">
                If you're part of the African diaspora, you already know the pain.
              </p>
            </div>

            <div className="space-y-5 rounded-[28px] border border-primary/15 bg-white p-8 shadow-soft">
              <div className="flex items-center gap-3 text-primary">
                <Sparkles className="h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.3em]">The frustrations we fixed</p>
              </div>
              <ul className="grid gap-3 text-base text-foreground/80 sm:grid-cols-2">
                {PAIN_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-2xl bg-primary/5 px-4 py-3 text-foreground/85"
                  >
                    <span className="mt-1 text-primary">
                      <AlertTriangle className="h-4 w-4" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-primary/20 bg-gradient-to-br from-primary/90 via-primary/70 to-[#0A1533] p-10 shadow-large">
            <div className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
            <div className="relative space-y-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/70">
                Built from lived experience
              </p>
              <p className="text-2xl font-semibold leading-9">
                We lived these frustrations ourselves. So we built the fix.
              </p>
              <p className="text-lg leading-8 text-white/85">
                Every workflow, partnership, and wallet inside DiaspoCare is designed to keep families informed, clinics accountable, and care fully verifiable across borders.
              </p>
              <p className="text-lg font-semibold text-white">
                DiaspoCare gives you verified healthcare, not stories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhyDiaspoCare;
