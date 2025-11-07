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
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#061131] via-[#0b1f4b] to-[#132f6f] text-primary-foreground">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.35) 1px, transparent 0), radial-gradient(circle at 20px 20px, rgba(17,63,178,0.25) 1px, transparent 0)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[rgba(51,123,255,0.35)] blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[rgba(28,178,255,0.28)] blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 py-12 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-6 lg:col-span-4">
            <div className="flex flex-col gap-4">
              <img src="/logo-full.png" alt="DiaspoCare" className="h-12 w-auto" />
              <p className="max-w-sm text-base leading-relaxed text-primary-foreground/90">
                DiaspoCare connects the African diaspora to verified clinics, pharmacists, and specialists, ensuring every contribution turns into trusted care back home.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#7fb7ff] hover:shadow-glow"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <Icon className="relative z-10 h-5 w-5 text-white transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>

            <div className="max-w-md rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Stay updated</p>
              <div className="mt-3 flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 transition-all focus:border-white/60 focus:outline-none"
                />
                <Button variant="glass" size="icon" className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#2f66ff] to-[#51a3ff] text-white shadow-glow">
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#8fb7ff]">
              <span className="h-6 w-1 rounded-full bg-accent" /> Company
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.to}
                    className="group inline-flex items-center gap-2 text-white/80 transition-all duration-200 hover:translate-x-2 hover:text-white"
                  >
                    <span className="h-px w-0 bg-[#7fb7ff] transition-all duration-200 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5 lg:col-span-5">
            <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#8fb7ff]">
              <span className="h-6 w-1 rounded-full bg-accent" /> Offices & Support
            </h4>
            <div className="space-y-4 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/60">Email</p>
                  <a href="mailto:hello@diaspocare.com" className="font-semibold text-white transition-colors hover:text-[#7fb7ff]">
                    hello@diaspocare.com
                  </a>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {offices.map((office) => (
                  <div key={office.country} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/60">{office.country}</p>
                    <div className="mt-2 space-y-1 font-semibold text-white/90">
                      {office.address.map((line) => (
                        <div key={line}>{line}</div>
                      ))}
                    </div>
                    <a
                      href={`tel:${office.phone.replace(/[^+\d]/g, "")}`}
                      className="mt-3 block text-xs font-semibold uppercase tracking-[0.24em] text-white/70 transition-colors hover:text-[#7fb7ff]"
                    >
                      {office.phone}
                    </a>
                    {office.secondaryPhone && (
                      <a
                        href={`tel:${office.secondaryPhone.replace(/[^+\d]/g, "")}`}
                        className="block text-xs font-semibold uppercase tracking-[0.24em] text-white/70 transition-colors hover:text-[#7fb7ff]"
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

        <div className="border-t-2 border-primary-foreground/20 py-8">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-white/70 md:flex-row">
            <p className="text-center md:text-left">
              &copy; {currentYear} DiaspoCare. All rights reserved. Made with
              <Heart className="mx-1 inline h-4 w-4 animate-pulse text-accent" fill="currentColor" /> for families everywhere.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="#" className="transition-colors hover:text-white">
                Privacy Policy
              </a>
              <span className="text-primary-foreground/30">·</span>
              <a href="#" className="transition-colors hover:text-white">
                Terms of Service
              </a>
              <span className="text-primary-foreground/30">·</span>
              <a href="#" className="transition-colors hover:text-white">
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
