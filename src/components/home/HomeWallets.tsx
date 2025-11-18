import { Building2, Coins, HeartHandshake, ShieldCheck, Users } from "lucide-react";

const WALLETS = [
  {
    title: "Family Wallet",
    description:
      "Siblings contribute small monthly amounts → shared responsibility, no drama, full transparency.",
    icon: HeartHandshake,
  },
  {
    title: "Community Wallet",
    description:
      "Mosques, churches, associations, philanthropists → 95% goes directly to verifiable care.",
    icon: Users,
  },
  {
    title: "Condition Wallet",
    description:
      "Predictable monthly care for diabetes, hypertension, asthma, and more — with growing discounts as more users join.",
    icon: ShieldCheck,
  },
  {
    title: "Employer Wallet",
    description:
      "Affordable workforce health with hPOD screenings + fast primary care.",
    icon: Building2,
  },
];

const HomeWallets = () => {
  return (
    <section id="wallets" className="relative overflow-hidden py-24" data-animate="fade-up">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/10 via-background to-background" />
      <div className="absolute inset-x-0 top-10 -z-10 h-64 bg-gradient-to-b from-secondary/15 via-transparent to-transparent" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-3 rounded-full border border-secondary/20 bg-secondary/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-secondary">
            <Coins className="h-4 w-4" />
            Wallets That Build Trust
          </span>
          <h2 className="mt-6 font-display text-4xl font-semibold text-foreground sm:text-5xl">
            Every contribution is ring-fenced for real care
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/70 sm:text-xl">
            The diaspora can finally fund healthcare without conflict, guilt, or guesswork. Choose wallets that match the way your family, community, or organisation supports care.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {WALLETS.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-[28px] border border-border/60 bg-white/85 p-8 shadow-soft backdrop-blur transition-transform duration-500 hover:-translate-y-2 hover:shadow-medium"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative space-y-4 text-left">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{title}</h3>
                <p className="text-base leading-7 text-foreground/75">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeWallets;
