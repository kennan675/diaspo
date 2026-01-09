import { Activity, MonitorSmartphone, DollarSign, Video, Bell } from "lucide-react";
import { motion } from "framer-motion";

import { TextReveal } from "@/components/animations/TextReveal";

const H_POD_FEATURES = [
  {
    title: "Rapid Screening & Diagnostics",
    description: "Vital signs, point-of-care labs, and screenings in minutes.",
    icon: Activity,
  },
  {
    title: "Digital Results",
    description: "Results sync instantly to shared care records for families across continents.",
    icon: MonitorSmartphone,
  },
  {
    title: "Transparent Pricing",
    description: "Every service and medication priced upfront. No surprises.",
    icon: DollarSign,
  },
  {
    title: "Optional Teleconsultations",
    description: "Connect with diaspora clinicians for remote guidance when needed.",
    icon: Video,
  },
  {
    title: "Real-Time Diaspora Notifications",
    description: "Get instant updates when your family receives care.",
    icon: Bell,
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
              ⚡ hPOD
            </motion.span>
            <TextReveal text="Fast Care, Where People Already Are" className="font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-[3.3rem]" />
            <motion.p
              className="text-lg leading-8 text-white/80 sm:text-xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Our hPODs are modern, walk-in care points that deliver accessible, quality healthcare right where your family lives.
            </motion.p>

            <div className="grid gap-5 sm:grid-cols-2">
              {H_POD_FEATURES.map(({ title, description, icon: Icon }, index) => (
                <motion.article
                  key={title}
                  className="group relative overflow-hidden rounded-[22px] border border-white/15 bg-white/10 p-5 shadow-[0_45px_120px_-60px_rgba(0,0,0,0.8)] backdrop-blur"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: 0.08 * index }}
                  whileHover={{ y: -6, scale: 1.01 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-secondary/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative space-y-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <TextReveal text={title} className="text-lg font-semibold text-white" />
                    <motion.p
                      className="text-sm leading-6 text-white/70"
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
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/60">
                  Pilot Status
                </p>
                <div className="rounded-2xl bg-white/10 px-6 py-4">
                  <p className="text-lg text-white/90">
                    Currently live at <span className="font-semibold text-white">select pilot locations in Kenya</span>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/60">
                  Our Vision
                </p>
                <p className="text-lg leading-8 text-white/85">
                  As we scale, hPODs become the <span className="font-semibold text-white">front door to affordable, preventive care</span> for communities across Africa.
                </p>
              </div>

              <motion.div
                className="rounded-3xl border border-white/25 bg-white/10 px-6 py-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-3">
                  Growth Roadmap
                </p>
                <div className="flex items-center gap-3 text-white">
                  <span className="text-2xl font-bold">2</span>
                  <span className="text-white/40">→</span>
                  <span className="text-2xl font-bold">5</span>
                  <span className="text-white/40">→</span>
                  <span className="text-2xl font-bold">10</span>
                  <span className="text-white/40">→</span>
                  <span className="text-2xl font-bold text-[#ff444f]">20</span>
                </div>
                <p className="mt-2 text-sm text-white/60">hPOD locations by December 2026</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHPodSection;
