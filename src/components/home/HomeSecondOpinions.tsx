import { Globe2, Microscope, ShieldCheck, Stethoscope } from "lucide-react";

const CITIES = ["Minnesota", "Toronto", "London", "Nairobi", "Seattle"];
const CAPABILITIES = [
  "Review labs",
  "Validate diagnoses",
  "Recommend treatment",
  "Protect patients from mismanagement",
  "Improve care quality at scale",
];

const HomeSecondOpinions = () => {
  return (
    <section id="second-opinions" className="relative overflow-hidden py-24" data-animate="fade-up">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/8 via-white to-secondary/10" />
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-primary/10 to-transparent" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-primary">
            <Stethoscope className="h-4 w-4" />
            Diaspora Second Opinions
          </span>
          <h2 className="mt-6 font-display text-4xl font-semibold text-foreground sm:text-5xl">
            Diaspora clinicians can finally practice with proof
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/70 sm:text-xl">
            For the first time ever, diaspora clinicians can support care back home with real medical data, not WhatsApp messages.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="space-y-8">
            <div className="rounded-[28px] border border-primary/15 bg-white/85 p-8 shadow-soft backdrop-blur">
              <div className="flex items-center gap-3 text-primary">
                <Globe2 className="h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.32em]">Where our clinicians live</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-primary/90">
                {CITIES.map((city) => (
                  <span key={city} className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-secondary/30 bg-secondary/5 p-8 shadow-soft backdrop-blur-lg">
              <div className="flex items-center gap-3 text-secondary">
                <Microscope className="h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.32em]">What diaspora doctors can do</p>
              </div>
              <ul className="mt-5 grid gap-3 text-base text-foreground/75 sm:grid-cols-2">
                {CAPABILITIES.map((capability) => (
                  <li key={capability} className="flex items-center gap-3 rounded-2xl bg-white/60 px-4 py-3">
                    <ShieldCheck className="h-5 w-5 text-secondary" />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[36px] border border-primary/20 bg-gradient-to-br from-primary/90 via-primary/70 to-[#0A1533] p-10 text-white shadow-[0_60px_120px_-65px_rgba(7,14,34,0.85)]">
            <div className="absolute -top-28 -right-20 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-secondary/40 blur-[160px]" />
            <div className="relative space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/70">
                Diaspora knowledge becomes diaspora impact
              </p>
              <p className="text-2xl font-semibold leading-9">
                Clinicians in the diaspora can now see labs, imaging, and prescriptions in real time, guiding care with confidence.
              </p>
              <p className="text-base leading-7 text-white/80">
                Every second opinion includes structured data, context, and accountability. No more guesswork, no more undocumented care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSecondOpinions;
