import { Fingerprint, Hospital, Receipt, ShieldCheck } from "lucide-react";

const STEPS = [
  {
    title: "Your family visits a verified clinic or an hPOD center",
    description: "Fast diagnostics + 15-minute primary care with transparent pricing.",
    icon: Hospital,
  },
  {
    title: "You receive a real, itemized digital bill instantly",
    description: "Direct from clinics or pharmacies. Zero middlemen.",
    icon: Receipt,
  },
  {
    title: "Pay only what’s real",
    description: "$1–$5 micropayments or full bills — fully verified.",
    icon: ShieldCheck,
  },
  {
    title: "Care delivered with proof",
    description: "You see exactly what was done, which tests were run, and what medications were dispensed.",
    icon: Fingerprint,
  },
];

const HomeHowItWorks = () => {
  return (
    <section
      id="how-diaspocare-works"
      className="relative overflow-hidden py-24"
      data-animate="fade-up"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-primary/5 to-background" />
      <div className="absolute inset-y-0 right-0 h-[520px] w-[520px] translate-x-1/3 rounded-full bg-primary/10 blur-[180px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.32em] text-primary/80">
            How DiaspoCare Works
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-[3.2rem]">
            Transparent, accountable, immediate care
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/70 sm:text-xl">
            This is diaspora-powered healthcare — documented, direct, and delivered with proof every single time.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {STEPS.map(({ title, description, icon: Icon }, index) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-[28px] border border-border/60 bg-white p-8 shadow-soft transition-transform duration-500 hover:-translate-y-2 hover:shadow-large"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/60 to-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative space-y-5 text-left">
                <div className="inline-flex items-center gap-3 rounded-2xl bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-primary/80">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  Step {index + 1}
                </div>
                <div className="flex items-start gap-5">
                  <span className="mt-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{title}</h3>
                    <p className="text-base leading-7 text-foreground/70">{description}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHowItWorks;
