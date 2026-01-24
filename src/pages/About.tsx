import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layouts/PageLayout";

const SHARED_REALITY = [
  "“Can you send money?”",
  "Vague symptoms",
  "No records",
  "Unclear diagnoses",
  "Money disappearing",
  "Feeling helpless",
  "Feeling guilty",
];

const VALUES = ["Transparency", "Dignity", "Community", "Quality", "Accountability", "Innovation"];

const About = () => {
  return (
    <PageLayout>
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#050915] via-[#0b1a33] to-[#091124] py-24 px-6 sm:px-12 md:px-20 text-white"
        data-animate="fade-up"
      >
        <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(0,127,255,0.25), transparent 55%), radial-gradient(circle at 80% 0%, rgba(40,54,146,0.4), transparent 60%)" }} />
        <div className="relative mx-auto max-w-6xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/80">
            Built by the Diaspora. For the Diaspora.
          </p>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-[3.3rem]">
                We grew up with the same reality. We refused to accept it as the future.
              </h1>
              <p className="text-lg text-white/80">
                DiaspoCare was born from late-night calls, wire transfers, and the fear that love might never reach the clinic door. We built proof-first healthcare so every diaspora family can breathe again.
              </p>
              <ul className="grid gap-3 rounded-3xl border border-white/15 bg-white/5 p-6 text-sm text-white/85 sm:grid-cols-2">
                {SHARED_REALITY.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#60a5fa]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-semibold text-white">We knew it wasn’t sustainable. So we built DiaspoCare.</p>
              <Button asChild variant="hero" size="lg" className="w-fit">
                <a href="#team">Meet the Team</a>
              </Button>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Our promise</p>
              <p className="mt-4 text-2xl font-semibold">Care that delivers proof, not stories.</p>
              <p className="mt-4 text-base text-white/80">
                We partner with diaspora-led clinicians, transparent clinics, and modern diagnostic pods (hPods) to make healthcare verifiable, affordable, and fast for families across Africa.
              </p>
              <div className="mt-8 grid gap-4 text-sm text-white/80">
                <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">Mission</p>
                  <p className="mt-2 text-white">
                    To make healthcare in Africa transparent, affordable, and accessible — powered by diaspora love and expertise.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">Vision</p>
                  <p className="mt-2 text-white">
                    No African family should suffer because healthcare is confusing, opaque, or inaccessible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 md:px-20" data-animate="fade-up">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-10 shadow-xl lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#007fff]">Why we exist</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900">Diaspora families deserved proof, not promises.</h2>
              <p className="mt-4 text-lg text-slate-600">
                We watched dollars evaporate, diagnoses change with every phone call, and relatives go untreated because we didn’t know what to believe. DiaspoCare delivers receipts, clinical data, and direct payments so every act of care is traceable.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Our values</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {VALUES.map((value) => (
                  <span key={value} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div id="team" className="space-y-8 rounded-3xl border border-slate-200 bg-slate-50 p-10">
            <div className="space-y-4 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#007fff]">Our team</p>
              <h3 className="text-3xl font-semibold text-slate-900">Leadership Team</h3>
              <p className="mx-auto max-w-2xl text-base text-slate-600">
                A global team of clinicians, technologists, and operators united by a single mission.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Serge-Alain Wandji",
                  role: "CEO & Co-Founder",
                  bio: "Serge-Alain Wandji is the CEO and Co-Founder of DiaspoCare. Committed to eliminating distance as a barrier to care, he leads the mission to provide African diaspora families with verifiable, direct, and transparent healthcare solutions for their loved ones back home.",
                  image: "/team/serge-alain.jpg"
                },
                {
                  name: "Sean O'Neil",
                  role: "Chief Technology Officer",
                  bio: "Sean O’Neil leads DiaspoCare’s technology strategy, ensuring our platform delivers world-class transparency, security, and usability. With over 15 years of experience building scalable health-tech platforms, Sean is passionate about using technology to bridge the gap between diaspora families and quality healthcare in Africa.",
                  image: "/team/sean-oneil.jpg"
                }

              ].map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center space-y-4 rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                  <div className="h-32 w-32 overflow-hidden rounded-full bg-slate-200">
                    <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{member.name}</h4>
                    <p className="text-sm font-medium text-[#007FFF]">{member.role}</p>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed text-left">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-10 border-t border-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 text-center">Where we operate</p>
              <div className="flex flex-wrap justify-center gap-4">
                {["Kenya", "Nigeria", "Ghana", "USA", "Canada", "UK"].map((country) => (
                  <div key={country} className="rounded-2xl border border-slate-100 bg-white p-4 text-sm font-semibold text-slate-700 shadow-sm">
                    {country}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 text-center">Pilots active in Kenya with expansion underway across East and West Africa.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 md:px-20" data-animate="fade-up">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#283692] to-[#007fff] p-12 text-white shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">Still building forward</p>
          <h2 className="mt-4 text-3xl font-semibold">We turned guilt into a system that delivers proof.</h2>
          <p className="mt-4 text-lg text-white/90">
            Every wallet, hPod, and second-opinion workflow inside DiaspoCare is run by people who lived the struggle. That’s why we’ll never stop until transparent healthcare is the default for every African family.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Button asChild variant="hero" size="lg" className="flex-1 justify-center">
              <a href="/care-coordination">Start coordinating care</a>
            </Button>
            <Button asChild variant="glass" size="lg" className="flex-1 justify-center border-white/40 text-white">
              <a href="/contact">Invest or partner</a>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
