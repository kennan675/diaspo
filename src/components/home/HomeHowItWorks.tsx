import { Stethoscope, Wallet, Users, ShieldCheck } from "lucide-react";

const illustrationUrl = "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80";

const STEPS = [
  {
    icon: Users,
    title: "1. Listen & Learn",
    description: "We get to know your loved one's health history, challenges, and goals across borders.",
  },
  {
    icon: Stethoscope,
    title: "2. Match & Coordinate",
    description: "Our clinicians design a care plan and book trusted providers, appointments, and diagnostics.",
  },
  {
    icon: ShieldCheck,
    title: "3. Monitor & Support",
    description: "DiaspoCare concierges track every visit and update you instantly wherever you are.",
  },
  {
    icon: Wallet,
    title: "4. Approve & Pay",
    description: "Transparent wallets lock funds to verified services so every contribution counts.",
  },
];

const HomeHowItWorks = () => {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-24" data-animate="fade-up">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#eff4ff] via-white to-[#f5f8ff]" />
      <div className="container mx-auto flex flex-col gap-16 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-20 lg:px-8">
        <div className="relative w-full max-w-lg overflow-hidden rounded-[36px] border border-primary/10 shadow-xl">
          <img src={illustrationUrl} alt="DiaspoCare nurse supporting a patient" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-accent/30" />
          <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-5 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Step-by-step care
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">How it works</span>
            <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">Four simple moves to orchestrate care from abroad</h2>
            <p className="text-lg text-foreground/70">
              We blend clinical expertise, concierge coordination, and transparent payments so you can care for family with confidence—without
              getting on a plane.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {STEPS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="group flex flex-col gap-3 rounded-3xl border border-border/60 bg-white/70 p-6 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-foreground/70">{title}</p>
                </div>
                <p className="text-sm text-foreground/80">{description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/care-coordination"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white shadow-large transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore Care Services
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary/10"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHowItWorks;
