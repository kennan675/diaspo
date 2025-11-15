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
              DiaspoCare • Cross-border care infrastructure
            </span>

            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/70">Caring from afar, made simple</p>
              <h1 className="font-sans text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.5rem]">
                Fund, coordinate, and verify healthcare for loved ones back home
              </h1>
              <p className="max-w-2xl text-lg text-white/80 sm:text-xl">
                DiaspoCare connects diaspora sponsors with vetted hospitals, pharmacies, and clinicians across East and West Africa. Load a secure family wallet, approve care plans, and receive verified updates the moment services are delivered.
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

            <div className="mt-10 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">Download our app</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.diaspocare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-white shadow-[0_20px_60px_-35px_rgba(15,23,42,0.75)] ring-1 ring-white/15 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                >
                  <svg className="h-7 w-7" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M99.9 8.7C89.3 3.2 79.7 0 72.2 0 53.7 0 40 15.9 40 40v432c0 24.1 12.8 40 31.9 40 7.6 0 17.4-3.3 27.9-8.8L337.9 288 99.9 8.7zm270.2 173.5l-81.7 80.6 81.7 80.6L464.6 256 370.1 182.2z"/></svg>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">Get it on</p>
                    <p className="text-sm font-semibold">Google Play</p>
                  </div>
                </a>
                <a
                  href="https://apps.apple.com/us/app/diaspocare-supporter/id1578303718"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-[#0B1A39] shadow-[0_20px_60px_-35px_rgba(15,23,42,0.75)] ring-1 ring-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_80px_-40px_rgba(15,23,42,0.8)]"
                >
                  <svg className="h-7 w-7" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.4-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.6-19.7-76.8-19.7-56.6.9-116.6 41.7-116.6 124.5 0 28.5 5.2 57.4 15.6 87.5 13.9 36.7 64.2 126.5 116.6 125 27.3-.7 46.6-19.3 82-19.3 34.7 0 52.8 19.3 82.8 19.3 52.6-.7 98.3-82.5 112.1-119.2-71.3-32.9-67.9-96.2-67.9-109.4zM256 102.7c26.6-32.1 24.2-61.4 23.4-71.7-23.1 1.3-49.8 15.4-64.9 34.7-17.1 21.9-27 48.8-24.8 76.1 26.3 2 50.7-11.5 66.3-39.1z"/></svg>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#0B1A39]/60">Download on the</p>
                    <p className="text-sm font-semibold">App Store</p>
                  </div>
                </a>
              </div>
            </div>

          </div>

          <div className="flex justify-start lg:justify-end">
            <div className="max-w-sm rounded-3xl border border-white/35 bg-white/12 p-8 text-white shadow-[0_45px_120px_-55px_rgba(15,23,42,0.5)] backdrop-blur-md">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl bg-white/20 p-3 text-white">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/85">Coordinated care teams</p>
                  <p className="mt-2 text-sm text-white/80">
                    DiaspoCare care navigators unite doctors, labs, and pharmacies so every treatment step is transparent.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3">
                <div className="rounded-2xl bg-white/20 p-3 text-white">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/85">Secure family wallets</p>
                  <p className="mt-2 text-sm text-white/80">
                    Contributions are ring-fenced for healthcare only, with instant proof of service and digital receipts.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 text-xs text-white/70">
                <p className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-[13px] text-white/85">
                  “My mum’s dialysis updates hit my phone in minutes. I can top up her wallet and know DiaspoCare has vetted every clinic.” — Amina, Minneapolis
                </p>
                <p className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-[13px] text-white/85">
                  Transparent budgets, verified treatments, and concierge support keep families confident even when they live oceans apart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
