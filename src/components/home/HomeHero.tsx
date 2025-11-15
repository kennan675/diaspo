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

  return (
    <section
      id="home"
      className="relative min-h-[90vh] overflow-hidden bg-[#0b1a39] py-24 sm:py-28 lg:py-32"
      data-animate="fade-up"
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Warm African caregiving scene"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(11,26,57,0.78)0%,rgba(11,26,57,0.55)48%,rgba(11,26,57,0.45)100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_65%)]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[36px] border border-white/60 bg-white/92 p-8 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.45)] backdrop-blur-md sm:p-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ff444f]/20 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#ff444f] shadow-[0_12px_28px_-18px_rgba(255,68,79,0.6)]">
            <Sparkles className="h-4 w-4" />
            Diaspora families trust DiaspoCare
          </span>

          <div className="mt-8 space-y-6">
            <h1 className="font-sans text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-[3.5rem]">
              Send healthcare home with transparency and total control
            </h1>
            <p className="max-w-2xl text-lg text-slate-600 sm:text-xl">
              Coordinate doctors, pharmacies, labs, and payments inside a single platform. Every update is verified in real time so you know loved ones are receiving the care you fund.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
              <Link to="/care-coordination">Get started</Link>
            </Button>
            <Button asChild variant="glass" size="lg" className="w-full border border-[#ff444f]/30 text-[#ff444f] hover:text-[#d52c39] sm:w-auto">
              <Link to="/contact">Book a demo</Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
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

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_40px_-24px_rgba(15,23,42,0.2)]">
              <p className="text-sm font-semibold text-slate-500">Verified providers</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">250+</p>
              <p className="mt-1 text-sm text-slate-500">Across 15 regions and growing</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_40px_-24px_rgba(15,23,42,0.2)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff444f]">Instant alerts</p>
              <p className="mt-2 text-sm text-slate-600">
                Approve or adjust treatment updates in real time with secure messaging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
