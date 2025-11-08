import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "My siblings and I finally know exactly which doctor mom saw, what was recommended, and how the funds were spent. DiaspoCare keeps us in sync despite the miles.",
    name: "Ngina M.",
    role: "Diaspora caregiver · Atlanta & Nairobi",
  },
  {
    quote:
      "As a pharmacist, I love how DiaspoCare verifies prescriptions and payments before patients arrive. It creates trust on both sides of the ocean.",
    name: "Kwame A.",
    role: "Partner Pharmacist · Accra",
  },
  {
    quote:
      "Coordinating specialists, tests, and follow-up used to be chaotic. Now I can message the care concierge and have updates within minutes.",
    name: "Imelda W.",
    role: "Family supporter · Minneapolis",
  },
];

const HomeTestimonials = () => {
  return (
    <section id="stories" className="relative overflow-hidden py-24" data-animate="fade-up">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f172a] via-[#162b48] to-[#0a1530]" />
      <div className="absolute inset-0 -z-[9] opacity-40" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(88,140,255,0.25), transparent 55%)" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="max-w-lg space-y-5 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
              <Quote className="h-4 w-4" /> Stories of trust
            </span>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">Families and clinicians feel the difference</h2>
            <p className="text-lg text-white/80">
              We exist to replace worry with confidence. Hear from caregivers, clinicians, and pharmacists who rely on DiaspoCare to keep health journeys organised, transparent, and compassionate.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/85">
                <Star className="h-4 w-4 text-accent" /> 4.9 / 5 satisfaction
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/85">
                50K+ families supported
              </span>
            </div>
          </div>

          <div className="grid flex-1 gap-6 sm:grid-cols-2">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="relative flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/10 p-6 text-white shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                <Quote className="h-6 w-6 text-accent" />
                <p className="text-sm leading-relaxed text-white/90">{testimonial.quote}</p>
                <div className="pt-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/60">{testimonial.name}</div>
                <p className="text-xs text-white/70">{testimonial.role}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
