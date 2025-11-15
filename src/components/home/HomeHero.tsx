import { Link } from "react-router-dom";
import { Shield, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/family-care.jpg";

const HomeHero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] overflow-hidden bg-[#0b1a39] py-24 sm:py-28 lg:py-32"
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

      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.7fr)] lg:items-center">
          <div className="space-y-10 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Diaspora families trust DiaspoCare
            </span>

            <div className="space-y-6">
              <h1 className="font-sans text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.5rem]">
                Send healthcare home with transparency and total control
              </h1>
              <p className="max-w-2xl text-lg text-white/80 sm:text-xl">
                Coordinate doctors, pharmacies, labs, and payments inside a single platform. Every update is verified in real time so you know loved ones are receiving the care you fund.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
                <Link to="/care-coordination">Get started</Link>
              </Button>
              <Button
                asChild
                variant="glass"
                size="lg"
                className="w-full border border-white/40 text-white hover:border-white hover:text-white sm:w-auto"
              >
                <Link to="/contact">Book a demo</Link>
              </Button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 p-5 text-white shadow-[0_25px_60px_-30px_rgba(15,23,42,0.8)] backdrop-blur">
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

              <div className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 p-5 text-white shadow-[0_25px_60px_-30px_rgba(15,23,42,0.8)] backdrop-blur">
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

          <div className="flex justify-start lg:justify-end">
            <div className="max-w-sm rounded-3xl border border-white/60 bg-white/95 p-8 text-slate-800 shadow-[0_45px_120px_-55px_rgba(15,23,42,0.5)]">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ff444f]">Care snapshot</p>
              <p className="mt-4 text-3xl font-bold text-slate-900">250+ verified providers</p>
              <p className="mt-3 text-sm text-slate-600">
                DiaspoCare coordinates multi-specialty teams across 15 regions with concierge transparency for every family member.
              </p>

              <div className="mt-6 space-y-4 text-sm text-slate-600">
                <div className="flex items-center justify-between rounded-2xl bg-slate-100/80 px-4 py-3">
                  <span className="font-semibold text-slate-800">Family satisfaction</span>
                  <span className="rounded-full bg-[#ff444f]/15 px-3 py-1 text-sm font-semibold text-[#d12c39]">4.9 / 5</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3">
                  <span className="font-semibold text-slate-800">Same-day updates</span>
                  <span>98% of cases</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3">
                  <span className="font-semibold text-slate-800">Clinics onboarded</span>
                  <span>320+</span>
                </div>
              </div>

              <p className="mt-6 text-xs text-slate-500">
                Secure messaging, milestone verification, and automated receipts keep diaspora sponsors in total control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
