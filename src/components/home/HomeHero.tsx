import { useEffect, useRef, useState } from "react";
import { Shield, Sparkles } from "lucide-react";

import heroImage from "@/assets/family-care.jpg";

const HomeHero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (imageRef.current?.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden rounded-[48px] bg-gradient-to-br from-primary/5 via-background to-secondary/10 px-4 py-32 sm:px-6 lg:px-10"
      data-animate="fade-up"
    >
      <div className="absolute inset-0 z-0 overflow-hidden rounded-[48px]">
        <div
          className={`absolute inset-0 z-10 bg-gradient-to-br from-primary/80 via-secondary/70 to-accent/60 mix-blend-multiply transition-opacity duration-500 ${imageLoaded ? "opacity-80" : "opacity-0"}`}
        />
        <div
          className={`absolute inset-0 z-[11] transition-opacity duration-700 ${imageLoaded ? "opacity-40" : "opacity-0"}`}
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, hsl(var(--primary-glow)) 0%, transparent 50%), radial-gradient(circle at 85% 60%, hsl(var(--secondary)) 0%, transparent 50%)",
          }}
        />
        <img
          ref={imageRef}
          onLoad={() => setImageLoaded(true)}
          loading="eager"
          fetchPriority="high"
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
        <div className="flex flex-col gap-8 text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur">
            <Sparkles className="h-4 w-4" /> All-in-one care for families across borders
          </span>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
            The safest way to fund, coordinate, and verify care back home
          </h1>

          <p className="max-w-2xl text-lg text-white/85 sm:text-xl">
            DiaspoCare unifies transparent payments, concierge care coordination, and vetted providers so every contribution becomes reliable healthcare for the people you love.
          </p>

          <div className="rounded-3xl bg-white/12 p-6 backdrop-blur shadow-soft lg:mt-auto lg:self-start">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">Download the app</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Take DiaspoCare with you wherever you go</h3>
                <p className="mt-3 max-w-xl text-sm text-white/85">
                  Approve care, receive live updates, and message coordinators directly from your phone.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.diaspocare.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl bg-[#1B1B1B] px-4 py-3 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-large"
              >
                <svg className="h-6 w-6" viewBox="30 336.7 120 129.2" xmlns="http://www.w3.org/2000/svg"><path fill="#FFD400" d="M30 336.7v129.2l82.1-64.6"/><path fill="#FF3333" d="M30 336.7l82.1 64.6 20.9-12.2c6-3.5 6-9.2 0-12.7l-20.9-12.2"/><path fill="#48FF48" d="M30 465.9l82.1-64.6 20.9 12.2c6 3.5 6 9.2 0 12.7l-20.9 12.2"/><path fill="#3BCCFF" d="M30 336.7l82.1 64.6-12.2 9.6"/></svg>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">Get it on</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </a>
              <a
                href="https://apps.apple.com/us/app/diaspocare-supporter/id1578303718"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl bg-white px-4 py-3 text-[#0B1A39] shadow-md ring-1 ring-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-large"
              >
                <svg className="h-7 w-7" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.4-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.6-19.7-76.8-19.7-56.6.9-116.6 41.7-116.6 124.5 0 28.5 5.2 57.4 15.6 87.5 13.9 36.7 64.2 126.5 116.6 125 27.3-.7 46.6-19.3 82-19.3 34.7 0 52.8 19.3 82.8 19.3 52.6-.7 98.3-82.5 112.1-119.2-71.3-32.9-67.9-96.2-67.9-109.4zM256 102.7c26.6-32.1 24.2-61.4 23.4-71.7-23.1 1.3-49.8 15.4-64.9 34.7-17.1 21.9-27 48.8-24.8 76.1 26.3 2 50.7-11.5 66.3-39.1z"/></svg>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#0B1A39]/50">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="relative hidden h-full justify-end lg:flex">
          <div className="relative w-full max-w-[420px] overflow-hidden rounded-[32px] border border-white/25 bg-white/12 p-8 backdrop-blur shadow-large">
            <div className="space-y-6 text-white/90">
              <div>
                <p className="text-3xl font-semibold">
                  <span className="font-bold text-white">CARING FROM A FAR</span>
                  <span className="font-bold text-[#1a73e8]">, MADE SIMPLE</span>
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 rounded-2xl border border-white/20 bg-white/10 p-4">
                  <div className="rounded-2xl bg-white/15 p-3">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Everything in one platform</p>
                    <p className="mt-2 text-sm text-white/85">
                      Access verified providers, approve payments, monitor outcomes, and coordinate support in one secure experience for the whole family.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-white/20 bg-white/10 p-4">
                  <div className="rounded-2xl bg-white/15 p-3">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Zero diversion rate</p>
                    <p className="mt-2 text-sm text-white/85">
                      DiaspoCare audits every transaction. Funds are locked to medical services, pharmacies, labs, and clinicians you approve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -left-10 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-accent/25 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
