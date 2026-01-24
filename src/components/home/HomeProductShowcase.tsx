import { ArrowRight, CreditCard, HeartHandshake, Hospital, Pill, Shield, Stethoscope, Users } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

type Highlight = {
  title: string;
  items: string[];
  variant?: "check" | "dot";
};

type ProductSection = {
  id: string;
  label: string;
  title: string;
  description: string;
  body?: string;
  highlights?: Highlight[];
  cta?: { label: string; href: string };
};

const PRODUCT_SECTIONS: ProductSection[] = [
  {
    id: "direct-pay",
    label: "A. Direct-to-Provider Payments",
    title: "The most transparent way to support family healthcare",
    description: "Instead of sending cash, you pay clinics and pharmacies directly.",
    highlights: [
      {
        title: "Why it works",
        variant: "dot",
        items: ["No diversion", "No fraud", "No inflated bills", "No family tension", "No guilt"],
      },
      {
        title: "You receive",
        variant: "check",
        items: [
          "Verified digital bill",
          "Medication list",
          "Diagnosis summary",
          "Instant payment link",
          "Proof of service",
        ],
      },
    ],
    body: "Finally — you know exactly what you are paying for.",
    cta: { label: "Try Direct Pay", href: "/care-coordination" },
  },
  {
    id: "hpod",
    label: "B. hPod — 15-Minute Primary Care",
    title: "Fast, affordable, accurate care pods",
    description: "Our modern diagnostic pods deliver:",
    highlights: [
      {
        title: "What you get",
        variant: "dot",
        items: [
          "Fast visits",
          "On-site lab tests",
          "Digital results",
          "Real-time diaspora notifications",
          "Medication verification",
          "Optional second opinion",
        ],
      },
      {
        title: "Perfect for",
        variant: "check",
        items: ["Elders", "Chronic patients", "Busy workers", "Families needing quick answers"],
      },
    ],
    body: "Fast. Affordable. Accurate. Transparent.",
    cta: { label: "Book an hPod", href: "/hpod-kiosk" },
  },
  {
    id: "family-wallet",
    label: "C. Family Wallet",
    title: "Reduce guilt. Increase coverage. Restore peace.",
    description: "Siblings can now share the load effortlessly:",
    highlights: [
      {
        title: "What families can do",
        variant: "dot",
        items: [
          "Contribute $10–$20 each",
          "Automate deposits",
          "Remove arguments",
          "Share responsibility",
          "Cover more relatives",
        ],
      },
    ],
    body: "Family unity, without financial conflict.",
    cta: { label: "Open a Family Wallet", href: "/family-health-wallet" },
  },
  {
    id: "community-wallet",
    label: "D. Community Wallet",
    title: "Verified care for your community",
    description: "Built for mosques, churches, Somali & African diaspora groups, nonprofits, and philanthropists.",
    highlights: [
      {
        title: "Features",
        variant: "check",
        items: [
          "95% to real healthcare",
          "Full transparency",
          "No diversion",
          "Verifiable impact reports",
        ],
      },
    ],
    body: "Turn charity into real care.",
    cta: { label: "Launch Community Wallet", href: "/contact" },
  },
  {
    id: "condition-wallet",
    label: "E. Condition Wallet (Chronic Care)",
    title: "Predictable care for diabetes, hypertension, asthma, heart disease, and more",
    description: "Benefits families can rely on:",
    highlights: [
      {
        title: "Benefits",
        variant: "check",
        items: [
          "Predictable monthly spend",
          "Verified medication",
          "Care coordination",
          "Diaspora clinician oversight",
          "Network-wide discounts",
        ],
      },
    ],
    body: "Chronic care everyone can afford — powered by scale.",
    cta: { label: "Explore Condition Wallets", href: "/care-coordination" },
  },
  {
    id: "second-opinions",
    label: "F. Diaspora Second Opinions",
    title: "Diaspora clinicians keep care safe and evidence-based",
    description: "They can:",
    highlights: [
      {
        title: "Support includes",
        variant: "dot",
        items: [
          "Review diagnoses",
          "Validate prescriptions",
          "Recommend treatment",
          "Provide follow-up guidance",
        ],
      },
    ],
    body: "World-class diaspora expertise, finally connected home.",
    cta: { label: "Request a Second Opinion", href: "/md-connect" },
  },
  {
    id: "employer",
    label: "G. Employer Solutions — Clinic-at-Work",
    title: "Affordable healthcare for African workplaces",
    description: "Employers get:",
    highlights: [
      {
        title: "Program includes",
        variant: "check",
        items: [
          "On-site hPod screenings",
          "Fast primary care",
          "Chronic care support",
          "Group wallets",
          "Lower absenteeism",
          "Real-time health insights",
        ],
      },
    ],
    body: "Better workforce health at a fraction of the cost.",
    cta: { label: "Talk to Employer Team", href: "/contact" },
  },
];

const ICON_MAP: Record<string, JSX.Element> = {
  "direct-pay": <CreditCard className="h-6 w-6" />,
  hpod: <Hospital className="h-6 w-6" />,
  "family-wallet": <HeartHandshake className="h-6 w-6" />,
  "community-wallet": <Users className="h-6 w-6" />,
  "condition-wallet": <Pill className="h-6 w-6" />,
  "second-opinions": <Stethoscope className="h-6 w-6" />,
  employer: <Shield className="h-6 w-6" />,
};

const HomeProductShowcase = () => {
  return (
    <section id="products" className="relative overflow-hidden py-24" data-animate="fade-up">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#f8fafc] to-[#eef2ff]" />
      <div className="absolute inset-x-0 top-10 -z-10 h-64 bg-gradient-to-b from-[#007fff]/10 via-transparent to-transparent" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#007fff]/30 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#007fff]">
            Product suite
          </span>
          <h2 className="mt-6 font-display text-4xl font-semibold text-slate-900 sm:text-5xl">
            Every solution the diaspora asked for — now verified
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Mix and match direct payments, smart wallets, hPod clinics, and diaspora clinical oversight to fit every family, community, or employer.
          </p>
        </div>

        <div className="space-y-8">
          {PRODUCT_SECTIONS.map((section) => (
            <div
              key={section.id}
              className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
            >
              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    <span>{section.label}</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#007fff]/10 text-[#007fff]">
                      {ICON_MAP[section.id]}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{section.title}</h3>
                    <p className="text-base text-slate-600">{section.description}</p>
                    {section.body && <p className="text-base font-semibold text-slate-800">{section.body}</p>}
                  </div>
                  <div className="mt-auto pt-6">
                    {section.cta && (
                      <Button asChild className="w-full" size="lg">
                        <Link to={section.cta.href}>
                          {section.cta.label}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>

                {section.highlights && (
                  <div className="grid flex-1 gap-4 sm:grid-cols-2">
                    {section.highlights.map((highlight) => (
                      <div key={highlight.title} className="rounded-2xl border border-slate-200/70 bg-slate-50 p-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{highlight.title}</p>
                        <ul className="mt-4 space-y-2 text-sm text-slate-600">
                          {highlight.items.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              {highlight.variant === "check" ? (
                                <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#007fff]/10 text-[#007fff]">
                                  ✓
                                </span>
                              ) : (
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                              )}
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProductShowcase;
