import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Wallet, Shield, HandHeart } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/animations/TextReveal";

const BENEFITS = [
  {
    text: "Share responsibility",
    icon: Users,
  },
  {
    text: "Contribute small monthly amounts",
    icon: Wallet,
  },
  {
    text: "Cover more loved ones",
    icon: Heart,
  },
  {
    text: "Avoid family conflict",
    icon: Shield,
  },
  {
    text: "Eliminate guilt and guesswork",
    icon: HandHeart,
  },
];

const HomeWallets = () => {
  return (
    <section id="wallets" className="relative overflow-hidden py-24" data-animate="fade-up">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/10 via-background to-background" />
      <div className="absolute inset-x-0 top-10 -z-10 h-64 bg-gradient-to-b from-secondary/15 via-transparent to-transparent" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.span
              className="inline-flex items-center gap-3 rounded-full border border-secondary/20 bg-secondary/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-secondary"
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <Wallet className="h-4 w-4" />
              Family Wallet
            </motion.span>

            <div className="space-y-4">
              <TextReveal
                text="The Smartest Way to Care"
                className="font-display text-4xl font-semibold text-foreground sm:text-5xl"
              />
              <motion.p
                className="text-xl font-medium text-foreground/80"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Stop carrying the burden alone.
              </motion.p>
              <motion.p
                className="text-lg leading-8 text-foreground/70"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                The Family Wallet lets siblings and relatives support care together — transparently and peacefully.
              </motion.p>
            </div>

            <div className="space-y-4">
              {BENEFITS.map(({ text, icon: Icon }, index) => (
                <motion.div
                  key={text}
                  className="flex items-center gap-4 rounded-2xl bg-white/80 px-5 py-4 shadow-soft"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ x: 8, boxShadow: "0 20px 50px -25px rgba(19,36,70,0.5)" }}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-lg font-medium text-foreground">{text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="rounded-2xl border border-primary/20 bg-primary/5 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-lg text-foreground/80">
                <span className="font-semibold text-foreground">Imagine everyone giving $10–$20/month.</span>
                <br />
                Now the whole family gets covered.
              </p>
            </motion.div>

            <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
              <Link to="/family-health-wallet" className="flex items-center gap-2">
                Create a Family Wallet
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Right Card */}
          <motion.div
            className="relative overflow-hidden rounded-[32px] border border-secondary/20 bg-gradient-to-br from-secondary/90 via-secondary/70 to-[#0A1533] p-10 text-white shadow-large"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />

            <div className="relative space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/60">
                How It Works
              </p>

              <div className="space-y-5">
                {[
                  "Create a Family Wallet",
                  "Invite siblings or relatives",
                  "Set small monthly contributions",
                  "Pay clinics and pharmacies directly",
                  "See every bill and every outcome",
                ].map((step, index) => (
                  <motion.div
                    key={step}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-white/90">{step}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 space-y-3 rounded-2xl bg-white/10 p-6">
                <p className="text-lg font-semibold text-white">The result?</p>
                <div className="space-y-2 text-white/80">
                  <p>✓ No cash-outs</p>
                  <p>✓ No arguments</p>
                  <p>✓ No guilt</p>
                </div>
                <p className="mt-4 text-lg font-medium text-white">
                  Care feels lighter when it's shared.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeWallets;
