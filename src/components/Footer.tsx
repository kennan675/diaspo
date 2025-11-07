import { ArrowRight, Facebook, Heart, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

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
    <footer className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent text-primary-foreground">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}
        />
      </div>
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary-foreground/10 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="mb-6 flex items-center gap-2 text-4xl font-display font-bold">
              <Heart className="h-8 w-8 animate-pulse text-accent" fill="currentColor" /> DiaspoCare
            </h3>
            <p className="mb-8 max-w-md text-lg leading-relaxed text-primary-foreground/90">
              Connecting the diaspora to quality healthcare. Making it simple to care for your loved ones from afar with compassion and excellence.
            </p>

            <div className="mb-8 flex gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group relative flex h-12 w-12 items-center justify-center rounded-xl border-2 border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-md transition-all duration-500 hover:scale-110 hover:border-primary-foreground/60 hover:shadow-glow"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <Icon className="relative z-10 h-5 w-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>

            <div className="max-w-md">
              <p className="mb-3 text-sm font-semibold">Stay Updated</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-xl border-2 border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 transition-all focus:border-primary-foreground/60 focus:outline-none backdrop-blur-md"
                />
                <Button variant="glass" size="icon" className="h-12 w-12 rounded-xl">
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h4 className="mb-6 flex items-center gap-2 text-lg font-bold">
              <span className="h-6 w-1 rounded-full bg-accent" /> Company
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.to}
                    className="group inline-flex items-center gap-2 text-primary-foreground/80 transition-all duration-300 hover:translate-x-2 hover:text-primary-foreground"
                  >
                    <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h4 className="mb-6 flex items-center gap-2 text-lg font-bold">
              <span className="h-6 w-1 rounded-full bg-accent" /> Offices & Support
            </h4>
            <ul className="space-y-4">
              <li className="group flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-foreground/10 transition-transform group-hover:scale-110">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="mb-1 text-xs text-primary-foreground/70">Email</div>
                  <a href="mailto:hello@diaspocare.com" className="font-semibold transition-colors hover:text-primary-foreground">
                    hello@diaspocare.com
                  </a>
                </div>
              </li>
              {offices.map((office) => (
                <li key={office.country} className="group flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-foreground/10 transition-transform group-hover:scale-110">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="mb-1 text-xs text-primary-foreground/70">{office.country}</div>
                    <div className="font-semibold leading-relaxed">
                      {office.address.map((line) => (
                        <div key={line}>{line}</div>
                      ))}
                    </div>
                    <a href={`tel:${office.phone.replace(/[^+\d]/g, "")}`} className="mt-2 block text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                      {office.phone}
                    </a>
                    {office.secondaryPhone && (
                      <a
                        href={`tel:${office.secondaryPhone.replace(/[^+\d]/g, "")}`}
                        className="block text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                      >
                        {office.secondaryPhone}
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-primary-foreground/20 py-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-primary-foreground/70 md:flex-row">
            <p className="text-center md:text-left">
              &copy; {currentYear} DiaspoCare. All rights reserved. Made with
              <Heart className="mx-1 inline h-4 w-4 animate-pulse text-accent" fill="currentColor" /> for families everywhere.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="#" className="transition-colors hover:text-primary-foreground">
                Privacy Policy
              </a>
              <span className="text-primary-foreground/30">·</span>
              <a href="#" className="transition-colors hover:text-primary-foreground">
                Terms of Service
              </a>
              <span className="text-primary-foreground/30">·</span>
              <a href="#" className="transition-colors hover:text-primary-foreground">
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
