import React from 'react';
import { Download, PhoneCall, ShieldCheck, Users2 } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#F4F8FF] via-white to-white"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-10 h-64 w-64 rounded-full bg-[#c8d9ff]/70 blur-3xl" />
        <div className="absolute -bottom-32 -right-12 h-80 w-80 rounded-full bg-[#e3efff]/80 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(40,90,200,0.12),_transparent_55%)]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-5 pt-32 pb-20 sm:px-8 lg:flex-row lg:items-stretch lg:gap-20">
        <div className="flex w-full flex-col justify-center gap-8 text-left lg:w-1/2">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/60 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0B1A39]/70 shadow-sm backdrop-blur">
            Trusted diaspora care network
          </div>

          <h1 className="text-4xl font-bold leading-tight text-[#0B1A39] sm:text-5xl md:text-6xl">
            Caring from afar,
            <span className="block bg-gradient-to-r from-[#283692] via-[#0066FF] to-[#00B2FF] bg-clip-text text-transparent">
              made simple
            </span>
          </h1>

          <div className="space-y-4 text-[#0B1A39]/75 sm:text-lg">
            <p>Connecting the diaspora to quality healthcare.</p>
            <p>The health of your loved ones matters most.</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#283692] via-[#0066FF] to-[#00B2FF] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#0066FF]/20 transition hover:translate-y-0.5 hover:shadow-xl"
            >
              <Download className="h-5 w-5" />
              Download DiaspoCare App
            </a>
            <a
              href="tel:+16124400892"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0066FF]/30 bg-white/80 px-8 py-4 text-base font-semibold text-[#0066FF] shadow-sm backdrop-blur transition hover:border-[#0066FF]/50 hover:text-[#004fcb]"
            >
              <PhoneCall className="h-5 w-5" />
              Talk to our care team
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:max-w-lg">
            <div className="rounded-2xl border border-white/60 bg-white/90 p-6 shadow-md backdrop-blur">
              <div className="flex items-center gap-3 text-[#0B1A39]">
                <ShieldCheck className="h-6 w-6 text-[#18A0FB]" />
                <span className="text-sm font-semibold uppercase tracking-wide text-[#0B1A39]/60">
                  Zero Diversion Promise
                </span>
              </div>
              <p className="mt-3 text-base font-semibold text-[#0B1A39]">
                Every dollar supports verified providers—no middlemen, no diversion, just trusted care.
              </p>
            </div>
            <div className="rounded-2xl border border-white/60 bg-white/90 p-6 shadow-md backdrop-blur">
              <div className="flex items-center gap-3 text-[#0B1A39]">
                <Users2 className="h-6 w-6 text-[#18A0FB]" />
                <span className="text-sm font-semibold uppercase tracking-wide text-[#0B1A39]/60">
                  Everything in One Platform
                </span>
              </div>
              <p className="mt-3 text-base font-semibold text-[#0B1A39]">
                Consults, coordination, medication, and monitoring—streamlined in a single DiaspoCare hub.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-xl lg:w-1/2">
          <div className="absolute inset-0 -z-10 rounded-[44px] bg-gradient-to-br from-[#e3ebff] via-white to-[#f5faff] blur-2xl" />
          <div className="relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-[36px] border border-white/70 bg-white/95 p-8 shadow-2xl backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0B1A39]/60">
                  Download the app
                </p>
                <p className="mt-3 text-2xl font-bold text-[#0B1A39]">Stay in control of care anytime, anywhere</p>
              </div>
              <span className="rounded-full bg-[#E6F3FF] px-4 py-2 text-sm font-semibold text-[#0066FF]">
                Instant updates
              </span>
            </div>

            <div className="rounded-2xl border border-[#E6EEFF] bg-[#F7FAFF] p-6">
              <p className="text-sm text-[#0B1A39]/70">
                Manage authorizations, monitor appointments, view prescriptions, and chat with coordinators in real time from the DiaspoCare Supporter App.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.diaspocare.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl bg-[#1B1B1B] px-4 py-3 text-white shadow-md transition hover:-translate-y-1"
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
                className="flex items-center justify-center gap-3 rounded-xl bg-white px-4 py-3 text-[#0B1A39] shadow-md ring-1 ring-[#E6EEFF] transition hover:-translate-y-1"
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
      </div>
    </section>
  );
};

export default HeroSection;
