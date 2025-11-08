import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const solutionsLinks = [
  { to: "/care-coordination", label: "Care Coordination" },
  { to: "/healthcare-financing", label: "Healthcare Financing App" },
  { to: "/family-health-wallet", label: "Family Health Wallet" },
  { to: "/md-connect", label: "MD Connect" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const closeTimerRef = useRef<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
    };

    if (solutionsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [solutionsOpen]);

  const handleMouseEnter = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setSolutionsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = window.setTimeout(() => setSolutionsOpen(false), 250);
  };

  const openCareSupport = useCallback(() => {
    if (window.Tawk_API?.maximize) {
      window.Tawk_API.maximize();
    } else {
      window.location.href = "/contact";
    }
  }, []);

  const handleMobileDrawerToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-premium border-b border-border/60 shadow-medium"
          : "bg-white/90"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <img
              src="/logo-full.png"
              alt="DiaspoCare"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <Link to="/" className="text-sm font-semibold text-foreground/80 transition-colors duration-300 hover:text-primary">
              Home
            </Link>

            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setSolutionsOpen((prev) => !prev)}
                className="flex items-center gap-1 text-sm font-semibold text-foreground/80 transition-colors duration-300 hover:text-primary"
              >
                Solutions
                <ChevronDown className={`h-4 w-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`} />
              </button>

              {solutionsOpen && (
                <div className="absolute left-0 top-full mt-4 w-64 overflow-hidden rounded-2xl border border-border/50 bg-white shadow-large">
                  <div className="p-2">
                    {solutionsLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="block rounded-xl px-4 py-3 text-sm font-semibold text-foreground/80 transition-all duration-200 hover:bg-primary/10 hover:text-primary"
                        onClick={() => setSolutionsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/impact" className="text-sm font-semibold text-foreground/80 transition-colors duration-300 hover:text-primary">
              Our Impact
            </Link>
            <Link to="/hpod-kiosk" className="text-sm font-semibold text-foreground/80 transition-colors duration-300 hover:text-primary">
              hPod Kiosk
            </Link>
            <Link to="/about" className="text-sm font-semibold text-foreground/80 transition-colors duration-300 hover:text-primary">
              About
            </Link>
            <Link to="/contact" className="text-sm font-semibold text-foreground/80 transition-colors duration-300 hover:text-primary">
              Contact
            </Link>
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <Button
              type="button"
              variant="glass"
              size="lg"
              onClick={openCareSupport}
              className="text-sm font-semibold text-primary transition-shadow hover:shadow-[0_0_28px_rgba(88,140,255,0.45)] hover:shadow-primary/40"
            >
              Talk to Care Support
            </Button>
            <Button
              asChild
              variant="hero"
              size="lg"
              className="text-sm font-semibold transition-shadow hover:shadow-[0_0_32px_rgba(33,123,255,0.5)] hover:shadow-secondary/40"
            >
              <Link to="/care-coordination">Get Started</Link>
            </Button>
          </div>

          <button
            className={`group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-border/40 bg-white/80 text-foreground shadow-soft transition-all duration-500 hover:border-primary/50 hover:shadow-glow lg:hidden ${
              isOpen ? "scale-95 bg-primary/10" : ""
            }`}
            onClick={handleMobileDrawerToggle}
            aria-label="Toggle menu"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            {isOpen ? (
              <X className="relative h-6 w-6 text-primary transition-transform duration-500 group-hover:rotate-90" />
            ) : (
              <Menu className="relative h-6 w-6 transition-transform duration-500 group-hover:rotate-12" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden" onClick={handleMobileDrawerToggle}>
            <div className="fixed top-24 right-4 z-50 w-[min(90vw,320px)] translate-x-0 rounded-3xl border border-border/40 bg-white/95 py-6 shadow-2xl transition-transform duration-300">
              <nav className="space-y-4 px-6 text-sm font-semibold text-foreground/80" onClick={(event) => event.stopPropagation()}>
                <Link to="/" className="block rounded-xl px-4 py-3 hover:bg-primary/10 hover:text-primary" onClick={handleMobileDrawerToggle}>
                  Home
                </Link>

                <div className="space-y-2">
                  <p className="px-4 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">Solutions</p>
                  {solutionsLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block rounded-xl px-4 py-3 text-foreground/70 transition-colors hover:bg-primary/10 hover:text-primary"
                      onClick={handleMobileDrawerToggle}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <Link to="/impact" className="block rounded-xl px-4 py-3 hover:bg-primary/10 hover:text-primary" onClick={handleMobileDrawerToggle}>
                  Our Impact
                </Link>
                <Link to="/hpod-kiosk" className="block rounded-xl px-4 py-3 hover:bg-primary/10 hover:text-primary" onClick={handleMobileDrawerToggle}>
                  hPod Kiosk
                </Link>
                <Link to="/about" className="block rounded-xl px-4 py-3 hover:bg-primary/10 hover:text-primary" onClick={handleMobileDrawerToggle}>
                  About
                </Link>
                <Link to="/contact" className="block rounded-xl px-4 py-3 hover:bg-primary/10 hover:text-primary" onClick={handleMobileDrawerToggle}>
                  Contact
                </Link>

                <div className="pt-4 space-y-3">
                  <Button
                    type="button"
                    variant="glass"
                    size="lg"
                    onClick={() => {
                      openCareSupport();
                      handleMobileDrawerToggle();
                    }}
                    className="w-full justify-center text-sm font-semibold text-primary transition-shadow hover:shadow-[0_0_28px_rgba(88,140,255,0.45)] hover:shadow-primary/40"
                  >
                    Talk to Care Support
                  </Button>
                  <Button
                    asChild
                    variant="hero"
                    size="lg"
                    className="w-full justify-center text-sm font-semibold transition-shadow hover:shadow-[0_0_32px_rgba(33,123,255,0.5)] hover:shadow-secondary/40"
                  >
                    <Link to="/care-coordination" onClick={handleMobileDrawerToggle}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
