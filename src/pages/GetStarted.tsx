import { FormEvent, useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  LockKeyhole,
  Mail,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";

import PageLayout from "@/components/layouts/PageLayout";
import { Input } from "@/components/ui/input";

const COUNTRY_OPTIONS = [
  { name: "United States", iso: "US", dial: "+1" },
  { name: "United Kingdom", iso: "GB", dial: "+44" },
  { name: "Canada", iso: "CA", dial: "+1" },
  { name: "Kenya", iso: "KE", dial: "+254" },
  { name: "Ghana", iso: "GH", dial: "+233" },
  { name: "Nigeria", iso: "NG", dial: "+234" },
  { name: "South Africa", iso: "ZA", dial: "+27" },
  { name: "France", iso: "FR", dial: "+33" },
  { name: "Germany", iso: "DE", dial: "+49" },
  { name: "United Arab Emirates", iso: "AE", dial: "+971" },
  { name: "Other", iso: "OTHER", dial: "+" },
];

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
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    countryIso: "US",
    dialCode: "+1",
    phone: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const selectedCountry = useMemo(
    () => COUNTRY_OPTIONS.find((option) => option.iso === formState.countryIso) ?? COUNTRY_OPTIONS[0],
    [formState.countryIso],
  );

  const handleChange = (field: "fullName" | "email" | "phone") => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((previous) => ({
      ...previous,
      [field]: event.target.value,
    }));
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const iso = event.target.value;
    const option = COUNTRY_OPTIONS.find((item) => item.iso === iso) ?? COUNTRY_OPTIONS[0];

    setFormState((previous) => ({
      ...previous,
      countryIso: iso,
      dialCode: option.dial,
      // Reset phone when changing dial code to reduce user errors
      phone: "",
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);

    // Simulate form submission and redirect to web app
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      
      // Redirect to DiaspoCare web app registration after showing success message
      setTimeout(() => {
        window.open('https://supporter.diaspocare.com', '_blank');
      }, 1500);
    }, 900);
  };

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
            <form
              className="relative overflow-hidden rounded-4xl border border-white bg-white p-8 shadow-[0_45px_120px_-45px_rgba(14,116,244,0.55)]"
              onSubmit={handleSubmit}
            >
              <div className="absolute -top-[22%] -right-[18%] h-56 w-56 rounded-full bg-[#0f88ff]/15 blur-3xl" />
              <div className="absolute -bottom-[18%] -left-[12%] h-44 w-44 rounded-full bg-[#4a5bdc]/15 blur-3xl" />
              <div className="relative space-y-6">
                <div className="space-y-2 text-center">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#eff4ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#3a4d9f]">
                    Step 1
                  </span>
                  <h3 className="text-2xl font-bold text-[#1f2a44]">Tell us about you</h3>
                  <p className="text-sm text-[#5a6581]">A DiaspoCare navigator will follow up within one business day.</p>
                </div>

                <label className="block text-sm font-medium text-[#253250]">
                  Full name
                  <div className="mt-2 flex items-center gap-3 rounded-2xl border border-[#e3ebff] bg-[#f7f9ff] px-4 py-3 focus-within:border-[#0f88ff]">
                    <User className="h-4 w-4 text-[#5a6aa1]" />
                    <Input
                      required
                      value={formState.fullName}
                      onChange={handleChange("fullName")}
                      placeholder="e.g. Ama Osei"
                      className="border-none bg-transparent px-0 text-sm text-[#1f2a44] focus-visible:ring-0"
                    />
                  </div>
                </label>

                <label className="block text-sm font-medium text-[#253250]">
                  Email address
                  <div className="mt-2 flex items-center gap-3 rounded-2xl border border-[#e3ebff] bg-[#f7f9ff] px-4 py-3 focus-within:border-[#0f88ff]">
                    <Mail className="h-4 w-4 text-[#5a6aa1]" />
                    <Input
                      required
                      type="email"
                      value={formState.email}
                      onChange={handleChange("email")}
                      placeholder="you@example.com"
                      className="border-none bg-transparent px-0 text-sm text-[#1f2a44] focus-visible:ring-0"
                    />
                  </div>
                </label>

                <div className="grid gap-4 sm:grid-cols-[0.75fr_1fr]">
                  <label className="block text-sm font-medium text-[#253250]">
                    Country
                    <div className="mt-2 rounded-2xl border border-[#e3ebff] bg-[#f7f9ff] px-3 py-2 focus-within:border-[#0f88ff]">
                      <div className="flex items-center gap-2 text-sm text-[#1f2a44]">
                        <Globe2 className="h-4 w-4 text-[#5a6aa1]" />
                        <select
                          required
                          value={formState.countryIso}
                          onChange={handleCountryChange}
                          className="w-full bg-transparent text-sm text-[#1f2a44] outline-none"
                        >
                          {COUNTRY_OPTIONS.map((option) => (
                            <option key={option.iso} value={option.iso}>
                              {option.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </label>

                  <label className="block text-sm font-medium text-[#253250]">
                    Phone number
                    <div className="mt-2 flex items-center gap-3 rounded-2xl border border-[#e3ebff] bg-[#f7f9ff] px-4 py-3 focus-within:border-[#0f88ff]">
                      <Phone className="h-4 w-4 text-[#5a6aa1]" />
                      <span className="font-semibold text-[#1f2a44]">{selectedCountry.dial}</span>
                      <Input
                        required
                        type="tel"
                        inputMode="tel"
                        value={formState.phone}
                        onChange={handleChange("phone")}
                        placeholder="700 000 000"
                        className="border-none bg-transparent px-0 text-sm text-[#1f2a44] focus-visible:ring-0"
                      />
                    </div>
                    <p className="mt-2 text-xs text-[#7984a4]">Use the mobile number you will verify during onboarding.</p>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="group relative flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0f88ff] to-[#4a5bdc] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? "Submitting..." : "Submit details"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                {submitted && (
                  <div className="rounded-2xl border border-[#dbe7ff] bg-[#f3f7ff] px-4 py-4 text-sm text-[#334266]">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#1c7ed6]" />
                      <div>
                        <p className="font-semibold">Thanks! Redirecting you to the DiaspoCare web app...</p>
                        <p className="mt-1 text-xs leading-relaxed">
                          Complete your registration in our secure web app where you can manage care coordination, payments, and connect with verified providers. Your account will work across both web and mobile apps.
                        </p>
                        <div className="mt-4 space-y-3">
                          <p className="text-xs font-semibold text-[#1f2a44]">Access your account:</p>
                          <div className="flex flex-col gap-3 sm:flex-row">
                            <a
                              href="https://supporter.diaspocare.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-lg border border-[#e3ebff] bg-[#f7f9ff] px-4 py-2 text-sm font-medium text-[#1f2a44] transition-all hover:bg-[#e3ebff] hover:shadow-md"
                            >
                              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                              </svg>
                              Open Web App
                            </a>
                            <a
                              href="https://play.google.com/store/apps/details?id=com.diaspocare.app&hl=en"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-lg border border-[#e3ebff] bg-[#f7f9ff] px-4 py-2 text-sm font-medium text-[#1f2a44] transition-all hover:bg-[#e3ebff] hover:shadow-md"
                            >
                              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                              </svg>
                              Get Mobile App
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GetStarted;
