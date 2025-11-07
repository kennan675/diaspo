import { ArrowRight, Facebook, Heart, Instagram, Linkedin, Mail, MapPin, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/diaspocare" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com/diaspocare" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/diaspocare" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/diaspocare" },
  ];

  const quickLinks = [
    { label: "About", to: "/our-story" },
    { label: "Solutions", to: "/care-coordination" },
    { label: "Our Impact", to: "/our-impact" },
    { label: "hPod Kiosk", to: "/hpod-kiosk" },
    { label: "Contact", to: "/contact" },
  ];

  const offices = [
    {
      country: "United States",
      address: ["2147 University Avenue West, Suite 105", "St. Paul, MN 55114"],
      phone: "+1 612 440 0892",
    },
    {
      country: "Kenya",
      address: ["Cosy Nook, Muguga Green", "Westlands, Nairobi"],
      phone: "+254 700 771 125",
      secondaryPhone: "+254 700 773 074",
    },
    {
      country: "Ghana",
      address: ["48 IPS Road - East Legon", "Accra, Ghana"],
      phone: "+233 55 042 5321",
    },
    {
      country: "Nigeria",
      address: ["No. 4 Udosen Uko Street", "Uyo, Akwa Ibom State"],
      phone: "+234 805 840 8055",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#f7f8fb] via-[#eef1f6] to-[#e6eaf2] text-[#1f2a37]">
      <div className="absolute inset-0 opacity-25">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 8px 12px, rgba(120,132,155,0.16) 1px, transparent 0), radial-gradient(circle at 28px 32px, rgba(102,113,138,0.12) 1px, transparent 0)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[rgba(93,116,156,0.18)] blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[rgba(77,103,142,0.12)] blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 py-12 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-6 lg:col-span-4">
            <div className="flex flex-col gap-4">
              <img src="/logo-full.png" alt="DiaspoCare" className="h-12 w-auto" />
              <p className="max-w-sm text-base leading-relaxed text-[#3b4b62]">
                DiaspoCare connects the African diaspora to verified clinics, pharmacists, and specialists, ensuring every contribution turns into trusted care back home.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-[#c9d2e2] bg-white/70 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#7aa0e3] hover:shadow-glow"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <Icon className="relative z-10 h-5 w-5 text-[#1f2a37] transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>

            <div className="max-w-md rounded-2xl border border-[#c9d2e2] bg-white/70 p-5 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#596782]/70">Stay updated</p>
              <div className="mt-3 flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-xl border border-[#d3dae8] bg-white px-4 py-3 text-[#1f2a37] placeholder:text-[#7a869a] transition-all focus:border-[#7aa0e3] focus:outline-none"
                />
                <Button variant="glass" size="icon" className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#1a4dab] to-[#4a79d9] text-white shadow-glow">
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#7083a4]">
              <span className="h-6 w-1 rounded-full bg-[#4a79d9]" /> Company
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.to}
                    className="group inline-flex items-center gap-2 text-[#3b4b62]/80 transition-all duration-200 hover:translate-x-2 hover:text-[#1a4dab]"
                  >
                    <span className="h-px w-0 bg-[#7aa0e3] transition-all duration-200 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5 lg:col-span-5">
            <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#7083a4]">
              <span className="h-6 w-1 rounded-full bg-[#4a79d9]" /> Offices & Support
            </h4>
            <div className="space-y-4 rounded-2xl border border-[#c9d2e2] bg-white/80 p-5 backdrop-blur">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#e4eaf5] text-[#1f2a37]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[#6a7b96]">Email</p>
                  <a href="mailto:hello@diaspocare.com" className="font-semibold text-[#1f2a37] transition-colors hover:text-[#1a4dab]">
                    hello@diaspocare.com
                  </a>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {offices.map((office) => (
                  <div key={office.country} className="rounded-xl border border-[#d6deeb] bg-white p-4 text-sm text-[#1f2a37] shadow-sm">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#6a7b96]">{office.country}</p>
                    <div className="mt-2 space-y-1 font-semibold text-[#2b3a51]">
                      {office.address.map((line) => (
                        <div key={line}>{line}</div>
                      ))}
                    </div>
                    <a
                      href={`tel:${office.phone.replace(/[^+\d]/g, "")}`}
                      className="mt-3 block text-xs font-semibold uppercase tracking-[0.24em] text-[#4d6392] transition-colors hover:text-[#1a4dab]"
                    >
                      {office.phone}
                    </a>
                    {office.secondaryPhone && (
                      <a
                        href={`tel:${office.secondaryPhone.replace(/[^+\d]/g, "")}`}
                        className="block text-xs font-semibold uppercase tracking-[0.24em] text-[#4d6392] transition-colors hover:text-[#1a4dab]"
                      >
                        {office.secondaryPhone}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-[#c9d2e2] py-8">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-[#5b6880] md:flex-row">
            <p className="text-center md:text-left">
              &copy; {currentYear} DiaspoCare. All rights reserved. Made with
              <Heart className="mx-1 inline h-4 w-4 animate-pulse text-[#4a79d9]" fill="currentColor" /> for families everywhere.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="#" className="transition-colors hover:text-[#1a4dab]">
                Privacy Policy
              </a>
              <span className="text-[#8d99b3]">·</span>
              <a href="#" className="transition-colors hover:text-[#1a4dab]">
                Terms of Service
              </a>
              <span className="text-[#8d99b3]">·</span>
              <a href="#" className="transition-colors hover:text-[#1a4dab]">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
