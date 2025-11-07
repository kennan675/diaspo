import { useCallback, useEffect, useState } from "react";
import { ArrowRight, MessageCircle, Shield, Sparkles } from "lucide-react";

import heroImage from "@/assets/family-care.jpg";
import { Button } from "@/components/ui/button";

const HomeHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTalkToSupport = useCallback(() => {
    if (window.Tawk_API?.maximize) {
      window.Tawk_API.maximize();
    } else {
      window.location.href = "/contact";
    }
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden rounded-[48px] bg-gradient-to-br from-primary/5 via-background to-secondary/10 px-4 py-32 sm:px-6 lg:px-10"
      data-animate="fade-up"
    >
      <div className="absolute inset-0 z-0 overflow-hidden rounded-[48px]">
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/90 via-secondary/80 to-accent/70 mix-blend-multiply" />
        <div
          className="absolute inset-0 z-[11] opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, hsl(var(--primary-glow)) 0%, transparent 50%), radial-gradient(circle at 85% 60%, hsl(var(--secondary)) 0%, transparent 50%)",
          }}
        />
        <img
          src={heroImage}
          alt="Warm African caregiving scene"
          className="h-full w-full scale-110 object-cover object-center"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="animate-float absolute left-[-10%] top-[15%] h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="animate-float absolute right-[5%] top-[25%] h-96 w-96 rounded-full bg-accent/20 blur-3xl" style={{ animationDelay: "2s" }} />
        <div className="animate-float absolute bottom-[10%] left-[35%] h-72 w-72 rounded-full bg-secondary/20 blur-3xl" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container relative z-20 mx-auto grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
        <div className="space-y-8 text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur">
            <Sparkles className="h-4 w-4" /> All-in-one care for families across borders
          </span>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
            The safest way to fund, coordinate, and verify care back home
          </h1>

          <p className="max-w-2xl text-lg text-white/85 sm:text-xl">
            DiaspoCare unifies transparent payments, concierge care coordination, and vetted providers so every contribution becomes reliable healthcare for the people you love.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="/care-coordination"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-primary to-secondary px-8 py-6 text-base font-semibold text-primary-foreground shadow-medium transition-all duration-300 hover:shadow-large"
            >
              Explore DiaspoCare Solutions
              <ArrowRight className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={handleTalkToSupport}
              className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/40 bg-white/10 px-8 py-6 text-base font-semibold text-white backdrop-blur transition-all duration-300 hover:border-white/60 hover:bg-white/20"
            >
              <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
              Talk to Care Support
            </button>
          </div>

          <div className="grid gap-4 rounded-3xl bg-white/12 p-6 backdrop-blur shadow-soft sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <div className="rounded-2xl bg-white/15 p-3">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">Zero diversion promise</p>
                <p className="mt-2 text-base font-semibold text-white">Every dollar you send lands with verified clinics, pharmacies, and clinicians in Kenya, Ghana, Nigeria, and the US.</p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-white/80">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">Everything in one platform</p>
              <ul className="mt-2 space-y-2 text-white/80">
                <li>• Fund care with real-time transaction tracking.</li>
                <li>• Coordinate visits, labs, and medication from anywhere.</li>
                <li>• Follow every update through the DiaspoCare family dashboard.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative hidden h-full justify-end lg:flex">
          <div className="relative w-full max-w-[420px] overflow-hidden rounded-[32px] border border-white/20 bg-white/10 p-8 backdrop-blur shadow-large">
            <div className="space-y-6 text-white/85">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">Live Care Timeline</p>
                <p className="mt-3 text-3xl font-semibold text-white">Transparent updates your whole family trusts.</p>
              </div>
              <ul className="space-y-4 text-sm">
                <li className="rounded-2xl bg-white/12 p-4">
                  <p className="text-white font-semibold">Today, 09:30</p>
                  <p>Mary's routine labs reviewed. Care coordinator shared follow-up plan.</p>
                </li>
                <li className="rounded-2xl bg-white/12 p-4">
                  <p className="text-white font-semibold">Yesterday, 18:10</p>
                  <p>Medication refill delivered to family home in Accra.</p>
                </li>
                <li className="rounded-2xl bg-white/12 p-4">
                  <p className="text-white font-semibold">Wed, 14:05</p>
                  <p>Virtual MD Connect consult completed with cardiologist in Nairobi.</p>
                </li>
              </ul>
            </div>
            <div className="absolute -left-10 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-accent/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
