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
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0066FF]/30 bg-white/80 px-8 py-4 text-base font-semibold text-[#0066FF] shadow-sm backdrop-blur transition hover:border-[#0066FF]/50 hover:text-[#004fcb]"
            >
              <PhoneCall className="h-5 w-5" />
              Talk to our care team
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:max-w-lg">
            <div className="rounded-2xl border border-white/60 bg-white/85 p-5 shadow-sm backdrop-blur">
              <div className="flex items-center gap-3 text-[#0B1A39]">
                <ShieldCheck className="h-6 w-6 text-[#18A0FB]" />
                <span className="text-sm font-semibold uppercase tracking-wide text-[#0B1A39]/60">
                  Zero diversion promise
                </span>
              </div>
              <p className="mt-3 text-base font-semibold text-[#0B1A39]">
                Every shilling funds verified clinics, providers, and medication back home.
              </p>
            </div>
            <div className="rounded-2xl border border-white/60 bg-white/85 p-5 shadow-sm backdrop-blur">
              <div className="flex items-center gap-3 text-[#0B1A39]">
                <Users2 className="h-6 w-6 text-[#18A0FB]" />
                <span className="text-sm font-semibold uppercase tracking-wide text-[#0B1A39]/60">
                  Families first
                </span>
              </div>
              <p className="mt-3 text-base font-semibold text-[#0B1A39]">
                50K+ families served, 2K+ providers, 4 countries—personalised support that travels.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-xl lg:w-1/2">
          <div className="absolute inset-0 -z-10 rounded-[44px] bg-gradient-to-br from-[#e3ebff] via-white to-[#f5faff] blur-2xl" />
          <div className="relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-[36px] border border-white/70 bg-white/90 p-8 shadow-2xl backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0B1A39]/60">
                  Real-time care updates
                </p>
                <p className="mt-3 text-2xl font-bold text-[#0B1A39]">Know exactly how your loved ones are doing</p>
              </div>
              <span className="rounded-full bg-[#E6F3FF] px-4 py-2 text-sm font-semibold text-[#0066FF]">
                Live support
              </span>
            </div>

            <div className="space-y-4">
              {[{
                title: 'On-demand doctor consults',
                description: 'Book voice, video, or chat visits with licensed providers and receive e-prescriptions instantly.'
              }, {
                title: 'Dedicated care coordinators',
                description: 'Follow-ups, lab logistics, and medication deliveries are handled end-to-end for your family.'
              }, {
                title: 'Transparent family updates',
                description: 'Track vitals, appointments, and care summaries so everyone stays informed.'
              }].map((item) => (
                <div key={item.title} className="flex items-start gap-4 rounded-2xl bg-[#F5FAFF] px-5 py-4">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#18A0FB]" />
                  <div>
                    <p className="text-sm font-semibold text-[#0B1A39]">{item.title}</p>
                    <p className="text-sm text-[#0B1A39]/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-8 border-t border-[#E6EEFF] pt-6 text-left">
              <div>
                <p className="text-3xl font-bold text-[#0066FF]">50K+</p>
                <p className="text-sm text-[#0B1A39]/60">Diaspora families protected</p>
              </div>
              <div className="h-12 w-px bg-[#E1EAFF]" />
              <div>
                <p className="text-3xl font-bold text-[#0B1A39]">2K+</p>
                <p className="text-sm text-[#0B1A39]/60">Verified providers delivering care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
