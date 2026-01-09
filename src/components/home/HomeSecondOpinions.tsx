import { Stethoscope, FileSearch, Pill, ArrowRight, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";

import { TextReveal } from "@/components/animations/TextReveal";

const CAPABILITIES = [
  {
    title: "Review diagnoses",
    description: "Get expert validation on diagnoses from diaspora specialists.",
    icon: FileSearch,
  },
  {
    title: "Validate prescriptions",
    description: "Ensure treatments are appropriate and medications are correct.",
    icon: Pill,
  },
  {
    title: "Recommend next steps",
    description: "Receive guidance on follow-up care and specialist referrals.",
    icon: ArrowRight,
  },
  {
    title: "Support chronic cases",
    description: "Ongoing oversight for long-term conditions like diabetes and hypertension.",
    icon: HeartPulse,
  },
];

const HomeSecondOpinions = () => {
  return (
    <section id="second-opinions" className="relative overflow-hidden py-24" data-animate="fade-up">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/8 via-white to-secondary/10" />
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-primary/10 to-transparent" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.span
            className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-primary"
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <Stethoscope className="h-4 w-4" />
            Diaspora Second Opinions
          </motion.span>
          <TextReveal text="Diaspora clinicians can now support care back home — meaningfully" className="mt-6 block font-display text-4xl font-semibold text-foreground sm:text-5xl" />
          <motion.p
            className="mt-6 text-lg leading-8 text-foreground/70 sm:text-xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            For the first time ever, diaspora clinicians can support care with real medical data, not WhatsApp messages.
          </motion.p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Capabilities Grid */}
          <motion.div
            className="grid gap-5 sm:grid-cols-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {CAPABILITIES.map(({ title, description, icon: Icon }, index) => (
              <motion.article
                key={title}
                className="group rounded-[24px] border border-primary/15 bg-white p-6 shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.08 * index }}
                whileHover={{ y: -6, boxShadow: "0 25px 60px -30px rgba(10,26,57,0.5)" }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground/70">{description}</p>
              </motion.article>
            ))}
          </motion.div>

          {/* Impact Card */}
          <motion.div
            className="relative overflow-hidden rounded-[36px] border border-primary/20 bg-gradient-to-br from-primary/90 via-primary/70 to-[#0A1533] p-10 text-white shadow-[0_60px_120px_-65px_rgba(7,14,34,0.85)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute -top-28 -right-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-secondary/40 blur-[160px]" />
            <div className="relative space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/60">
                The DiaspoCare Difference
              </p>
              <div className="space-y-4">
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-xl font-semibold text-white">Real data.</p>
                  <p className="mt-1 text-white/80">Access verified lab results, imaging, and prescriptions — not hearsay.</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-xl font-semibold text-white">Real impact.</p>
                  <p className="mt-1 text-white/80">Guide care decisions that actually get implemented.</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-xl font-semibold text-[#ff444f]">No more once-a-year medical missions.</p>
                  <p className="mt-1 text-white/80">Provide ongoing, meaningful support from anywhere in the world.</p>
                </div>
              </div>
              <motion.p
                className="text-base leading-7 text-white/75"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Every second opinion includes structured data, context, and accountability. No more guesswork, no more undocumented care.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSecondOpinions;
