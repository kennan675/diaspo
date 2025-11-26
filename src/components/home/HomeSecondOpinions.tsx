import { Globe2, Microscope, ShieldCheck, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

import { TextReveal } from "@/components/animations/TextReveal";

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
          <TextReveal text="Diaspora clinicians can finally practice with proof" className="mt-6 block font-display text-4xl font-semibold text-foreground sm:text-5xl" />
          <motion.p
            className="mt-6 text-lg leading-8 text-foreground/70 sm:text-xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            For the first time ever, diaspora clinicians can support care back home with real medical data, not WhatsApp messages.
          </motion.p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="rounded-[28px] border border-primary/15 bg-white p-8 shadow-soft">
              <div className="flex items-center gap-3 text-primary">
                <Globe2 className="h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.32em]">Where our clinicians live</p>
              </div>
              <motion.div
                className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-primary/90"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
              >
                {CITIES.map((city) => (
                  <motion.span
                    key={city}
                    className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2"
                    variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                  >
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {city}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <div className="rounded-[28px] border border-secondary/30 bg-secondary/5 p-8 shadow-soft">
              <div className="flex items-center gap-3 text-secondary">
                <Microscope className="h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.32em]">What diaspora doctors can do</p>
              </div>
              <motion.ul
                className="mt-5 grid gap-3 text-base text-foreground/75 sm:grid-cols-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
              >
                {CAPABILITIES.map((capability) => (
                  <motion.li
                    key={capability}
                    className="flex items-center gap-3 rounded-2xl bg-white/60 px-4 py-3"
                    variants={{ hidden: { opacity: 0, x: 10 }, visible: { opacity: 1, x: 0 } }}
                  >
                    <ShieldCheck className="h-5 w-5 text-secondary" />
                    <span>{capability}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>

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
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/70">
                Diaspora knowledge becomes diaspora impact
              </p>
              <TextReveal text="Clinicians in the diaspora can now see labs, imaging, and prescriptions in real time, guiding care with confidence." className="text-2xl font-semibold leading-9" />
              <motion.p
                className="text-base leading-7 text-white/80"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.1 }}
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
