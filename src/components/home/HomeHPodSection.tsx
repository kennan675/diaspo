import { Activity, Pill, ScanEye, ShieldCheck, Stethoscope } from "lucide-react";

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
          <div className="space-y-8 text-white">
            <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
              ⚡ The hPOD
            </span>
            <h2 className="font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-[3.3rem]">
              15-Minute, all-included primary care that proves what really happened
            </h2>
            <p className="text-lg leading-8 text-white/80 sm:text-xl">
              Our flagship high-throughput diagnostic pods deliver modern primary care in minutes. Located in malls, markets, workplaces, and communities  starting in Kenya, expanding to Somalia and beyond.
            </p>
            <p className="text-base text-white/75">
              One hPOD can serve 10,000 patients a year. This is healthcare transformed.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {H_POD_FEATURES.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="group relative overflow-hidden rounded-[26px] border border-white/15 bg-white/10 p-6 shadow-[0_45px_120px_-60px_rgba(0,0,0,0.8)] backdrop-blur transition-transform duration-500 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-secondary/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative space-y-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                    <p className="text-sm leading-6 text-white/75">{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[40px] border border-white/20 bg-white/5 p-10 text-white shadow-[0_60px_120px_-70px_rgba(7,14,34,0.85)] backdrop-blur-xl">
            <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-secondary/30 blur-[160px]" />
            <div className="relative space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/70">
                What happens inside an hPOD visit
              </p>
              <ul className="space-y-4 text-white/80">
                <li>
                  <span className="font-semibold text-white">01.</span> Intake, vitals, and history captured digitally.
                </li>
                <li>
                  <span className="font-semibold text-white">02.</span> Diagnostics and labs processed on the spot.
                </li>
                <li>
                  <span className="font-semibold text-white">03.</span> Prescriptions filled or referrals issued instantly.
                </li>
                <li>
                  <span className="font-semibold text-white">04.</span> Diaspora sponsors receive proof-of-care receipts and data in real time.
                </li>
              </ul>
              <p className="rounded-3xl border border-white/25 bg-white/10 px-6 py-5 text-sm text-white/75">
                Every hPOD is run by licensed clinicians with remote oversight from our diaspora medical board. Compliance, medication supply, and financial flows are monitored 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHPodSection;
