import { Link } from "react-router-dom";
import { ArrowRight, Check, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/home-hero-bbbb.png";

const HomeHero = () => {
  const trustPromises = [
    "No more cash-outs.",
    "No more diversion.",
    "No more guessing.",
    "Just real healthcare you can trust.",
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-transparent"
      data-animate="fade-up"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 overflow-hidden rounded-[64px]">
          <img
            src={heroImage}
            alt="Warm African caregiving scene"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(7,14,34,0.95)0%,rgba(16,38,82,0.87)55%,rgba(27,60,123,0.7)100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_-10%,rgba(255,255,255,0.22),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(7,14,34,0.88),rgba(7,14,34,0.55)45%,transparent_68%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_115%,rgba(255,68,79,0.18),transparent_60%)]" />
        </div>
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.75fr)] lg:items-center">
          <div className="space-y-10 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-white/80 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              hPOD-first, trust-built healthcare
            </span>

            <div className="space-y-6">
              <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.65rem]">
                Care Across Borders. Verified, Fast, and Affordable.
              </h1>
              <p className="max-w-2xl text-lg text-white/85 sm:text-xl">
                DiaspoCare is the first healthcare platform built by the African diaspora to deliver <span className="text-white">real, documented care</span> for your loved ones back home — with <span className="text-white">15-minute hPOD visits</span>, verified diagnostic results, and direct payments to clinics and pharmacies.
              </p>
              <div className="grid gap-3 text-base text-white/80 sm:text-lg">
                {trustPromises.map((promise) => (
                  <span key={promise} className="inline-flex items-center gap-3">
                    <Check className="h-5 w-5 text-secondary" />
                    {promise}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:flex-wrap">
              <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
                <Link to="/care-coordination" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="lg" className="w-full sm:w-auto border-white/30 text-white">
                <a href="#how-diaspocare-works" className="flex items-center gap-2">
                  How DiaspoCare Works
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto bg-white/15 text-white hover:bg-white/25">
                <Link to="/groups" className="flex items-center gap-2">
                  For Diaspora Groups
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-start lg:justify-end">
            <div className="max-w-md rounded-[32px] border border-white/25 bg-white/10 p-8 text-white shadow-[0_45px_120px_-55px_rgba(7,14,34,0.75)] backdrop-blur-xl">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl bg-white/15 p-3 text-white">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75">15-Minute hPOD Visits</p>
                  <p className="text-base text-white/85">
                    High-throughput diagnostic pods deliver rapid vitals, labs, and primary care — with results on your phone before your loved one leaves the clinic.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3">
                <div className="rounded-2xl bg-white/15 p-3 text-white">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75">Verified, Direct Payments</p>
                  <p className="text-base text-white/85">
                    Pay clinics and pharmacies directly. Every service, medication, and diagnosis is documented, verified, and stored in a shared care record.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-white/25 bg-white/10 px-6 py-5 text-sm text-white/80">
                “DiaspoCare turned guesswork into proof. I approve real treatments, see the receipts instantly, and my family finally trusts the process.” — Njeri, Diaspora Sponsor
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
