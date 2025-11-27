import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

type PricingPlan = {
  name: string;
  price: string;
  subtitle: string;
  highlights: string[];
  badge?: string;
  actionLabel: string;
};

const PLANS: PricingPlan[] = [
  {
    name: "Pay-As-You-Go",
    price: "$0",
    subtitle: "Just pay transaction fees · Best for new users",
    highlights: ["Direct-to-provider payments", "Micropayments from $1"],
    actionLabel: "Start for Free",
  },
  {
    name: "Family Wallet — Bronze",
    price: "$9.99",
    subtitle: "Up to 3 dependents",
    highlights: ["Direct-to-provider payments", "Verified bills"],
    actionLabel: "Choose Bronze",
  },
  {
    name: "Family Wallet — Silver",
    price: "$19.99",
    subtitle: "Up to 6 dependents",
    highlights: ["Quarterly second opinion", "Care coordination Lite", "Diagnostic discounts"],
    actionLabel: "Choose Silver",
  },
  {
    name: "Family Wallet — Gold",
    price: "$39.99",
    subtitle: "Unlimited dependents",
    highlights: ["Unlimited second opinions", "Chronic care support", "Priority coordination", "Full visibility"],
    badge: "Peace of Mind",
    actionLabel: "Get Gold",
  },
  {
    name: "Community Wallet",
    price: "$99",
    subtitle: "+ 95% direct impact · For mosques, churches, diaspora groups",
    highlights: ["Full transparency", "Verifiable impact reports"],
    actionLabel: "Launch Community Wallet",
  },
  {
    name: "Employer Plans",
    price: "$3–$5",
    subtitle: "Per employee per month · Optional hPOD screening days",
    highlights: ["On-site screenings", "Group wallets", "Real-time insights"],
    actionLabel: "Talk to Employer Team",
  },
];

const HomePricing = () => {
  return (
    <section id="pricing" className="relative overflow-hidden py-24" data-animate="fade-up">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#fdfcff] via-white to-[#f4f7fb]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-[#ff444f]/15 via-transparent to-transparent" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0f172a]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-slate-500">
            Pricing
          </span>
          <h2 className="mt-6 font-display text-4xl font-semibold text-slate-900 sm:text-5xl">
            Simple. Transparent. Built for every family.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Pick the wallet that matches how your family, community, or workplace supports care.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_35px_80px_-60px_rgba(15,23,42,0.5)]"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
                {plan.badge && (
                  <span className="rounded-full bg-[#ff444f]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff444f]">
                    {plan.badge}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-slate-500">{plan.subtitle}</p>
              <p className="mt-6 text-4xl font-bold text-slate-900">
                {plan.price}
                <span className="text-base font-medium text-slate-500">/month</span>
              </p>

              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {plan.highlights.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#ff444f]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button asChild variant="hero" size="lg" className="w-full justify-center">
                  <Link to="/contact">{plan.actionLabel}</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white/70 p-8 text-center shadow-inner sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Need help choosing?</p>
            <p className="mt-2 text-lg text-slate-700">Talk to a DiaspoCare coordinator about the right wallet mix.</p>
          </div>
          <Button asChild variant="glass" size="lg" className="w-full sm:w-auto">
            <Link to="/contact">Chat with Care Support</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomePricing;
