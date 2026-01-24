import { Link } from "react-router-dom";
import { Check, ArrowRight, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/animations/TextReveal";

type WalletPlan = {
  name: string;
  price: string;
  period: string;
  subtitle: string;
  highlights: string[];
  badge?: string;
  recommended?: string;
  actionLabel: string;
  variant: "default" | "featured" | "premium";
};

const WALLET_PLANS: WalletPlan[] = [
  {
    name: "Free Wallet",
    price: "$0",
    period: "/month",
    subtitle: "For getting started",
    highlights: [
      "No cross-border transaction fees",
      "Pay clinics and pharmacies directly",
      "View verified bills and receipts",
      "Pay only when care is needed",
    ],
    recommended: "Best for first-time users",
    actionLabel: "Start Free",
    variant: "default",
  },
  {
    name: "Bronze",
    price: "$9.99",
    period: "/month",
    subtitle: "For regular supporters",
    highlights: [
      "Unlimited micropayments",
      "Up to 3 patients",
      "Covers cross-border payment fees",
      "Full transaction transparency",
      "No cash diversion",
    ],
    badge: "Most Popular",
    recommended: "Most popular starting plan",
    actionLabel: "Choose Bronze",
    variant: "featured",
  },
  {
    name: "Silver",
    price: "$19.99",
    period: "/month",
    subtitle: "For families managing ongoing care",
    highlights: [
      "Everything in Bronze",
      "Up to 6 dependents",
      "Care Coordination Lite included",
      "Medication reminders",
      "Appointment follow-ups",
    ],
    recommended: "Ideal for elders or recurring care",
    actionLabel: "Choose Silver",
    variant: "default",
  },
  {
    name: "Gold",
    price: "$39.99",
    period: "/month",
    subtitle: "For peace of mind",
    highlights: [
      "Everything in Silver",
      "Unlimited dependents",
      "Care Coordination Plus included",
      "Proactive case tracking",
      "Priority response",
    ],
    badge: "Peace of Mind",
    recommended: "Best value for complex family situations",
    actionLabel: "Get Gold",
    variant: "premium",
  },
];

const COMMUNITY_WALLET = {
  name: "Community Wallet",
  price: "$99",
  period: "/month",
  subtitle: "For mosques, churches, associations, and community groups",
  highlights: [
    "Unlimited contributors",
    "95%+ of funds go directly to care",
    "Transparency reports",
    "Verified clinics & pharmacies",
  ],
};

const CARE_COORDINATION = [
  {
    name: "Care Coordination Lite",
    price: "$9.99/month",
    included: "Included with Silver & Gold wallets",
    features: ["Care reminders and follow-ups", "Medication tracking", "Basic care navigation"],
    actionLabel: "Choose Lite",
  },
  {
    name: "Care Coordination Plus",
    price: "$29.99/month",
    included: "Included with Gold wallet",
    features: ["Dedicated care coordinator", "Multi-provider coordination", "Chronic care tracking", "Diaspora family updates"],
    actionLabel: "Choose Plus",
  },
  {
    name: "Advanced Care Coordination",
    price: "$79–$149/month",
    included: "Case-based pricing",
    features: ["Home care coordination", "Hospital discharge planning", "Palliative or multi-specialty care", "Custom care plans"],
    actionLabel: "Choose Advanced",
  },
];

const HomePricing = () => {
  return (
    <section id="pricing" className="relative overflow-hidden py-24" data-animate="fade-up">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#fdfcff] via-white to-[#f4f7fb]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-[#007fff]/10 via-transparent to-transparent" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl font-semibold text-slate-900 sm:text-5xl">
            Pricing
          </h2>
          <TextReveal
            text="Pricing That Grows With Your Family's Needs"
            className="mt-6 text-xl font-medium text-slate-600 sm:text-2xl"
          />
          <motion.p
            className="mt-4 text-lg text-slate-600"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Start simple. Upgrade only when care gets complex.
          </motion.p>
        </motion.div>

        {/* Wallet Plans Grid */}
        <div className="grid gap-6 lg:grid-cols-4">
          {WALLET_PLANS.map((plan, index) => (
            <motion.article
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-6 h-full ${plan.variant === "featured"
                ? "border-[#007fff]/30 bg-gradient-to-b from-[#007fff]/5 to-white shadow-[0_35px_80px_-40px_rgba(0,127,255,0.3)]"
                : plan.variant === "premium"
                  ? "border-primary/30 bg-gradient-to-b from-primary/5 to-white shadow-[0_35px_80px_-40px_rgba(40,54,146,0.3)]"
                  : "border-slate-200 bg-white shadow-[0_35px_80px_-60px_rgba(15,23,42,0.4)]"
                }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-6 rounded-full bg-[#007fff] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  {plan.badge}
                </span>
              )}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{plan.subtitle}</p>
              </div>
              <p className="text-4xl font-bold text-slate-900">
                {plan.price}
                <span className="text-base font-medium text-slate-500">{plan.period}</span>
              </p>

              <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-600">
                {plan.highlights.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#007fff]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.recommended && (
                <p className="mt-4 text-xs text-slate-500">👉 {plan.recommended}</p>
              )}

              <div className="mt-6">
                <Button
                  asChild
                  variant={plan.variant === "featured" ? "hero" : "glass"}
                  size="lg"
                  className="w-full justify-center"
                >
                  <Link to="/get-started">{plan.actionLabel}</Link>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Community Wallet */}
        <motion.div
          className="mt-12 rounded-3xl border border-secondary/20 bg-gradient-to-r from-secondary/5 to-primary/5 p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-secondary" />
                <h3 className="text-2xl font-semibold text-slate-900">{COMMUNITY_WALLET.name}</h3>
              </div>
              <p className="mt-2 text-slate-600">{COMMUNITY_WALLET.subtitle}</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {COMMUNITY_WALLET.highlights.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                    <Check className="h-4 w-4 text-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-4xl font-bold text-slate-900">
                {COMMUNITY_WALLET.price}
                <span className="text-base font-medium text-slate-500">{COMMUNITY_WALLET.period}</span>
              </p>
              <Button asChild variant="glass" size="lg" className="mt-4">
                <Link to="/contact">Launch Community Wallet</Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Care Coordination Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-semibold text-slate-900">Care Coordination</h3>
            <p className="mt-4 text-lg text-slate-600">Add when care becomes complex. A real human helping manage care across clinics, pharmacies, and providers.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {CARE_COORDINATION.map((tier, index) => (
              <motion.article
                key={tier.name}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-slate-900">{tier.name}</h4>
                  <p className="mt-1 text-2xl font-bold text-slate-900">{tier.price}</p>
                  <p className="text-xs text-slate-500">{tier.included}</p>
                </div>
                <ul className="mb-6 flex-1 space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/get-started">{tier.actionLabel}</Link>
                </Button>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePricing;
