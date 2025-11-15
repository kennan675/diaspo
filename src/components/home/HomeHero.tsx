import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/family-care.jpg";

const HomeHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(247, 248, 251, 0.92) 0%, rgba(247, 248, 251, 0.78) 35%, rgba(247, 248, 251, 0.6) 65%, rgba(247, 248, 251, 0.35) 100%), url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  } as const;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f7f8fb] py-24 sm:py-28 lg:py-32"
      data-animate="fade-up"
    >
      <div className="absolute inset-0" style={backgroundStyle} />

      <div className="container relative z-10 mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:px-8">
        <div className="space-y-9">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ff444f]/20 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#ff444f] shadow-[0_12px_28px_-18px_rgba(255,68,79,0.6)]">
            <Sparkles className="h-4 w-4" />
            Diaspora families trust DiaspoCare
          </span>

          <div className="space-y-6">
            <h1 className="font-sans text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-[3.5rem]">
              Send healthcare home with transparency and total control
            </h1>
            <p className="max-w-xl text-lg text-slate-600 sm:text-xl">
              Coordinate doctors, pharmacies, labs, and payments inside a single platform. Every update is verified in real time so you know loved ones are receiving the care you fund.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/care-coordination">Get started</Link>
            </Button>
            <Button asChild variant="glass" size="lg" className="border border-[#ff444f]/30 text-[#ff444f] hover:text-[#d52c39]">
              <Link to="/contact">Book a demo</Link>
            </Button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_40px_-24px_rgba(15,23,42,0.2)]">
              <div className="rounded-xl bg-[#ff444f]/10 p-3 text-[#ff444f]">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Coordinated care teams</p>
                <p className="mt-2 text-base text-slate-600">
                  Manage providers, authorise payments, and track milestones from a single dashboard.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_40px_-24px_rgba(15,23,42,0.2)]">
              <div className="rounded-xl bg-[#ff444f]/10 p-3 text-[#ff444f]">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Secure family wallets</p>
                <p className="mt-2 text-base text-slate-600">
                  Keep healthcare funds ring-fenced for approved services with instant verification.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_55px_120px_-60px_rgba(15,23,42,0.55)]">
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-[#ff444f]/25 via-transparent to-transparent" />
            <img
              src={heroImage}
              alt="Warm African caregiving scene"
              className="relative z-10 h-full w-full object-cover object-center"
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            />
          </div>

          <div className="absolute -left-10 -bottom-10 hidden w-56 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl lg:flex lg:flex-col">
            <p className="text-sm font-semibold text-slate-500">Verified providers</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">250+</p>
            <p className="mt-1 text-sm text-slate-500">Across 15 regions and growing</p>
          </div>

          <div className="absolute -right-8 top-10 hidden w-52 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl lg:flex lg:flex-col">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff444f]">Instant alerts</p>
            <p className="mt-2 text-sm text-slate-600">
              Approve or adjust treatment updates in real time with secure messaging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
