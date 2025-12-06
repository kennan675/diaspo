import { Activity, Pill, ScanEye, ShieldCheck, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

import { TextReveal } from "@/components/animations/TextReveal";

const H_POD_FEATURES = [
  {
    title: "Rapid diagnostics",
    description: "Vital signs, point-of-care labs, and remote consults captured in minutes.",
    icon: Activity,
  },
  {
    title: "Affordable on-the-spot tests",
    description: "Transparent pricing means every lab and medication is pre-approved before payment.",
    icon: Pill,
  },
  {
    title: "Digital results",
    description: "Results sync instantly to the shared care record for families and clinicians across continents.",
    icon: ScanEye,
  },
  {
    title: "Verified medication",
    description: "Dispensed directly from trusted pharmacies with QR-coded proof and dosage guidance.",
    icon: ShieldCheck,
  },
  {
    title: "Optional second opinions",
    description: "Diaspora clinicians can review real medical data, not WhatsApp notes, to guide care.",
    icon: Stethoscope,
  },
];

const HomeHPodSection = () => {
  return (
    <section id="hpod" className="relative overflow-hidden py-24" data-animate="fade-up">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#070e22] via-[#0c1a3f] to-[#1a3d8a]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_55%)]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <motion.div
            className="space-y-8 text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.span
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/70"
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              ⚡ The hPOD
            </motion.span>
            <TextReveal text="15-Minute, all-inclusive primary care that proves what really happened" className="font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-[3.3rem]" />
            <motion.p
              className="text-lg leading-8 text-white/80 sm:text-xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Our flagship high-throughput diagnostic kiosks deliver modern primary care in minutes. Located in malls, markets, workplaces, and communities – starting in Kenya, expanding to Ghana and beyond.
            </motion.p>
            <motion.p
              className="text-base text-white/75"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              One hPOD can serve 10,000 patients a year. This is healthcare transformed.
            </motion.p>

            <div className="grid gap-6 sm:grid-cols-2">
              {H_POD_FEATURES.map(({ title, description, icon: Icon }, index) => (
                <motion.article
                  key={title}
                  className="group relative overflow-hidden rounded-[26px] border border-white/15 bg-white/10 p-6 shadow-[0_45px_120px_-60px_rgba(0,0,0,0.8)] backdrop-blur"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: 0.08 * index }}
                  whileHover={{ y: -8, scale: 1.01 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-secondary/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative space-y-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <TextReveal text={title} className="text-xl font-semibold text-white" />
                    <motion.p
                      className="text-sm leading-6 text-white/75"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      {description}
                    </motion.p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-[40px] border border-white/20 bg-white/5 p-10 text-white shadow-[0_60px_120px_-70px_rgba(7,14,34,0.85)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-secondary/30 blur-[160px]" />
            <div className="relative space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/70">
                What happens inside an hPOD visit
              </p>
              <motion.ul
                className="space-y-4 text-white/80"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
              >
                {["01.", "02.", "03.", "04."].map((step, idx) => (
                  <motion.li
                    key={step}
                    className="flex items-start gap-3"
                    variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                  >
                    <span className="font-semibold text-white">{step}</span>
                    <span className="text-white/80">
                      {[
                        "Intake, vitals, and history captured digitally.",
                        "Diagnostics and labs processed on the spot.",
                        "Prescriptions filled or referrals issued instantly.",
                        "Diaspora sponsors receive proof-of-care receipts and data in real time.",
                      ][idx]}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.p
                className="rounded-3xl border border-white/25 bg-white/10 px-6 py-5 text-sm text-white/75"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Every hPOD is run by licensed clinicians with remote oversight from our diaspora medical board. Compliance, medication supply, and financial flows are monitored 24/7.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHPodSection;
