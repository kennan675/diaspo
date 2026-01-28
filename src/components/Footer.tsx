import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=100063836178715" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/diaspocarellc" },
    { icon: Twitter, label: "Twitter", href: "https://x.com/diaspocare" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#07132c] via-[#101f3f] to-[#142c56] text-white">
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(95,142,255,0.15) 0, transparent 55%), radial-gradient(circle at 85% 70%, rgba(33,123,255,0.12) 0, transparent 50%)",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5 space-y-6">
            <img src="/logo-full.png" alt="DiaspoCare" className="h-12 w-auto object-contain" />
            <p className="max-w-md text-base leading-relaxed text-white/75">
              DiaspoCare connects diaspora families to trusted clinics, pharmacists, and care coordinators. Every update, every payment, and every appointment stays transparent.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white/85 transition-all duration-300 hover:bg-white/20"
            >
              Learn More
            </Link>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">Global Contact</h4>
            <div className="space-y-4">
              <div className="flex gap-3 text-sm text-white/80">
                <span className="text-xl">🇺🇸</span>
                <div>
                  <p className="font-semibold text-white">United States</p>
                  <p className="text-white/60 text-xs">2147 University Avenue West,<br />Suite 105, St. Paul, MN 55114</p>
                  <a href="tel:+16124400892" className="block mt-1 hover:text-white transition-colors">+1 612 440 0892</a>
                </div>
              </div>

              <div className="flex gap-3 text-sm text-white/80">
                <span className="text-xl">🇰🇪</span>
                <div>
                  <p className="font-semibold text-white">Kenya</p>
                  <p className="text-white/60 text-xs">Cosy Nook, Muguga Green<br />Westlands, Nairobi</p>
                  <div className="flex flex-col mt-1">
                    <a href="tel:+254700771125" className="hover:text-white transition-colors">+254 700 771 125</a>
                    <a href="tel:+254700773074" className="hover:text-white transition-colors">+254 700 773 074</a>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 text-sm text-white/80">
                <span className="text-xl">🇬🇭</span>
                <div>
                  <p className="font-semibold text-white">Ghana</p>
                  <p className="text-white/60 text-xs">48 IPS Road – East Legon<br />Accra, Ghana</p>
                  <a href="tel:+233550425321" className="block mt-1 hover:text-white transition-colors">+233 55 042 5321</a>
                </div>
              </div>

              <div className="flex gap-3 text-sm text-white/80">
                <span className="text-xl">🇳🇬</span>
                <div>
                  <p className="font-semibold text-white">Nigeria</p>
                  <p className="text-white/60 text-xs">No. 4 Udosen Uko Street,<br />Uyo, Akwa Ibom State</p>
                  <a href="tel:+2348058408055" className="block mt-1 hover:text-white transition-colors">+234 805 840 8055</a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">Stay connected</h4>
            <p className="text-sm text-white/70">Follow our journey as we redesign cross-border healthcare for families.</p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur transition-all duration-300 hover:scale-110 hover:border-white/40 hover:bg-white/20"
                >
                  <Icon className="h-5 w-5 text-white transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/15 py-6 text-xs text-white/60 md:flex-row">
          <p>&copy; {currentYear} DiaspoCare. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </a>
            <a href="/contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
