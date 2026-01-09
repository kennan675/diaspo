import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/animations/TextReveal";

const HomeBuiltByDiaspora = () => {
  return (
    <section id="built-by-diaspora" className="relative overflow-hidden py-28" data-animate="fade-up">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,#0b1f42,transparent_58%),radial-gradient(circle_at_bottom_right,#132448,transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#020817] via-[#0b1b34] to-[#0b355a] opacity-90" />
      <div className="absolute -left-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#1d9bf0]/15 blur-[140px]" />
      <div className="absolute -right-16 top-12 h-[360px] w-[360px] rounded-full bg-[#7f5dff]/25 blur-[160px]" />

      <div className="container relative mx-auto max-w-5xl px-4 text-center text-white sm:px-6 lg:px-8">
        <motion.span
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-white/80"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          🌍 Built by the Diaspora
        </motion.span>

        <TextReveal
          text="We've lived this problem."
          className="mt-8 block font-display text-4xl font-semibold leading-[1.15] sm:text-5xl"
        />

        <motion.div
          className="mt-8 space-y-5 text-lg leading-8 text-white/85 sm:text-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p>
            DiaspoCare was founded by <span className="text-white font-medium">African diaspora professionals</span> who know the guilt, stress, and uncertainty of caring from afar — and decided to build something better.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 rounded-[28px] border border-white/15 bg-white/10 p-8 backdrop-blur"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="grid gap-6 text-left sm:grid-cols-3">
            <div className="space-y-2">
              <p className="text-3xl font-bold text-white">Verified</p>
              <p className="text-white/70">Every visit, every bill, every outcome — documented and transparent.</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-white">Direct</p>
              <p className="text-white/70">Payments go straight to clinics and pharmacies. No middlemen.</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-[#ff444f]">Trusted</p>
              <p className="text-white/70">Built by people who understand what it means to care from afar.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 inline-flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Button asChild variant="hero" size="lg" className="inline-flex items-center gap-2">
            <Link to="/get-started">
              Join DiaspoCare Today
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeBuiltByDiaspora;
