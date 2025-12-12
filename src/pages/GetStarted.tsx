import { ArrowRight, CheckCircle2, Globe2, LockKeyhole, ShieldCheck } from "lucide-react";

import PageLayout from "@/components/layouts/PageLayout";


const OnboardingHighlights = [
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Secure remittances",
    copy: "Every payment lands directly with verified clinics, pharmacies, and specialists.",
  },
  {
    icon: <Globe2 className="h-5 w-5" />,
    title: "Cross-border coordination",
    copy: "Connect instantly with providers in Kenya, Ghana, Nigeria, and more.",
  },
  {
    icon: <CheckCircle2 className="h-5 w-5" />,
    title: "Proof of care",
    copy: "Receive documented visits, diagnostics, and pharmacy receipts in your portal.",
  },
];

const GetStarted = () => {
  return (
    <PageLayout className="bg-[#f7f9ff]" mainClassName="pt-24 pb-24 space-y-24">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1f2a44] via-[#1c3e73] to-[#0f88ff] px-6 py-24 text-white sm:px-12 md:px-20" data-animate="fade-up">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[url('https://d64gsuwffb70l.cloudfront.net/hero-diaspora-abstract.webp')] bg-cover bg-right opacity-25 lg:block" />
        <div className="relative z-10 mx-auto max-w-4xl space-y-8 text-center lg:text-left">
          <span className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            onboarding
          </span>
          <h1 className="text-4xl font-extrabold leading-tight tracking-[-0.02em] sm:text-5xl lg:text-6xl">
            Start care coordination with a diaspora-first onboarding.
          </h1>
          <p className="max-w-2xl text-lg text-white/80 lg:text-xl">
            Tell us who you are sponsoring and where they receive care. We’ll customize your DiaspoCare experience, verify your providers, and unlock secure direct-pay wallets in under 24 hours.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 text-sm font-medium text-white/70 sm:flex-row sm:justify-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2">
              <LockKeyhole className="h-4 w-4" />
              HIPAA & GDPR compliant
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2">
              <ShieldCheck className="h-4 w-4" />
              Verified partners network
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-12 md:px-20" data-animate="fade-up">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-[#16213a] sm:text-4xl">
                A guided start for families supporting care across borders
              </h2>
              <p className="text-lg leading-relaxed text-[#4b5876]">
                Our onboarding concierge uses this information to pair you with regional care teams, validate facilities, and configure compliant payment rails. The more detail you share, the faster we can activate care.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {OnboardingHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="group rounded-3xl border border-[#d6e2ff] bg-white/90 p-6 shadow-[0_25px_60px_-40px_rgba(30,64,175,0.35)] transition-shadow hover:shadow-[0_35px_80px_-40px_rgba(14,116,244,0.45)]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0f88ff] to-[#4a5bdc] text-white shadow-lg">
                    {highlight.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#1f2a44]">{highlight.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4b5876]">{highlight.copy}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-[#cddaf8] bg-white/90 p-6 shadow-inner">
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4a5bdc]">What happens next</h4>
              <ol className="mt-4 grid gap-4 text-sm text-[#46506a] sm:grid-cols-3">
                <li className="rounded-xl border border-[#e5ecff] bg-white p-4">
                  <p className="font-semibold text-[#1f2a44]">01. Concierge call</p>
                  <p className="mt-2 leading-relaxed">Our care navigator confirms sponsor details and loved one’s needs.</p>
                </li>
                <li className="rounded-xl border border-[#e5ecff] bg-white p-4">
                  <p className="font-semibold text-[#1f2a44]">02. Provider verification</p>
                  <p className="mt-2 leading-relaxed">We contact clinics and pharmacies to validate licenses and capacity.</p>
                </li>
                <li className="rounded-xl border border-[#e5ecff] bg-white p-4">
                  <p className="font-semibold text-[#1f2a44]">03. Wallet activation</p>
                  <p className="mt-2 leading-relaxed">You receive a DiaspoCare wallet with transparent, fraud-safe payments.</p>
                </li>
              </ol>
            </div>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-4xl border border-white bg-white p-8 shadow-[0_45px_120px_-45px_rgba(14,116,244,0.55)]">
              <div className="absolute -top-[22%] -right-[18%] h-56 w-56 rounded-full bg-[#0f88ff]/15 blur-3xl" />
              <div className="absolute -bottom-[18%] -left-[12%] h-44 w-44 rounded-full bg-[#4a5bdc]/15 blur-3xl" />
              <div className="relative space-y-6 text-center">
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#eff4ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#3a4d9f]">
                    Get Started
                  </span>
                  <h3 className="text-2xl font-bold text-[#1f2a44]">Join DiaspoCare Today</h3>
                  <p className="text-sm text-[#5a6581]">Sign up directly in our secure web app to start coordinating care for your loved ones.</p>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://supporter.diaspocare.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0f88ff] to-[#4a5bdc] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl"
                  >
                    Sign Up / Login
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  
                  <div className="text-xs text-[#5a6581]">
                    Or download our mobile app:
                    <div className="mt-2 flex justify-center gap-3">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.diaspocare.app&hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-lg border border-[#e3ebff] bg-[#f7f9ff] px-3 py-1.5 text-xs font-medium text-[#1f2a44] transition-all hover:bg-[#e3ebff] hover:shadow-md"
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                        Android
                      </a>
                      <a
                        href="https://apps.apple.com/ke/app/diaspocare-supporter/id1578303718"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-lg border border-[#e3ebff] bg-[#f7f9ff] px-3 py-1.5 text-xs font-medium text-[#1f2a44] transition-all hover:bg-[#e3ebff] hover:shadow-md"
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.09997,22C7.78997,22.05 6.79997,20.68 5.95997,19.47C4.24997,16.97 2.93997,12.41 4.69997,9.39C5.56997,7.87 7.12997,6.91 8.81997,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.05 19.56,8.58C19.47,8.63 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                        </svg>
                        iOS
                      </a>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GetStarted;
