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

  const parallaxOffset = Math.min(scrollY * 0.06, 90);

  return (
    <section
      id="home"
      className="relative overflow-hidden py-24 text-white sm:py-28 lg:py-32"
      data-animate="fade-up"
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Warm African caregiving scene"
          className="h-full w-full object-cover object-center transition-transform duration-[600ms] ease-out"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        />
        <div className="absolute inset-0 bg-[#0b1a39]/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(11,26,57,0.82)0%,rgba(11,26,57,0.55)48%,rgba(11,26,57,0.35)100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_65%)]" />
      </div>

      <div className="container relative z-10 mx-auto grid max-w-6xl gap-16 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-8">
        <div className="space-y-9">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Diaspora families trust DiaspoCare
          </span>

          <div className="space-y-6">
            <h1 className="font-sans text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.5rem]">
              Send healthcare home with transparency and total control
            </h1>
            <p className="max-w-xl text-lg text-white/85 sm:text-xl">
              Coordinate doctors, pharmacies, labs, and payments inside a single platform. Every update is verified in real time so you know loved ones are receiving the care you fund.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="bg-[#ff444f] text-white shadow-[0_18px_32px_-16px_rgba(255,68,79,0.6)] transition-transform hover:-translate-y-0.5 hover:bg-[#e43742] hover:shadow-[0_24px_44px_-18px_rgba(228,55,66,0.7)]"
            >
              <Link to="/care-coordination">Get started</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/70 bg-white/10 text-white backdrop-blur transition-colors hover:border-white hover:bg-white/20"
            >
              <Link to="/contact">Book a demo</Link>
            </Button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-2xl border border-white/25 bg-white/10 p-5 shadow-[0_25px_60px_-30px_rgba(15,23,42,0.8)] backdrop-blur">
              <div className="rounded-xl bg-white/15 p-3 text-white">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Coordinated care teams</p>
                <p className="mt-2 text-base text-white/85">
                  Manage providers, authorise payments, and track milestones from a single dashboard.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-white/25 bg-white/10 p-5 shadow-[0_25px_60px_-30px_rgba(15,23,42,0.8)] backdrop-blur">
              <div className="rounded-xl bg-white/15 p-3 text-white">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Secure family wallets</p>
                <p className="mt-2 text-base text-white/85">
                  Keep healthcare funds ring-fenced for approved services with instant verification.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:justify-end">
          <div className="rounded-2xl border border-white/25 bg-white/10 p-6 text-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.8)] backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Verified providers</p>
            <p className="mt-2 text-4xl font-bold">250+</p>
            <p className="mt-1 text-sm text-white/75">Across 15 regions and growing</p>
          </div>
          <div className="rounded-2xl border border-white/25 bg-white/10 p-6 text-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.8)] backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ffd2d7]">Instant alerts</p>
            <p className="mt-2 text-sm text-white/85">
              Approve or adjust treatment updates in real time with secure messaging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
