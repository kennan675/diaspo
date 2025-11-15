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

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[#e5e7eb] bg-white/95 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.3)]"
          : "border-b border-transparent bg-white/80"
      } backdrop-blur`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <img
              src="/logo-full.png"
              alt="DiaspoCare"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <Link to="/" className="text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-[#ff444f]">
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
                className="flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-[#ff444f]"
              >
                Solutions
                <ChevronDown className={`h-4 w-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`} />
              </button>

              {solutionsOpen && (
                <div className="absolute left-0 top-full mt-4 w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                  <div className="p-2">
                    {solutionsLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-[#ff444f]/10 hover:text-[#ff444f]"
                        onClick={() => setSolutionsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/impact" className="text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-[#ff444f]">
              Our Impact
            </Link>
            <Link to="/hpod-kiosk" className="text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-[#ff444f]">
              hPod Kiosk
            </Link>
            <Link to="/about" className="text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-[#ff444f]">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-[#ff444f]">
              Contact
            </Link>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              type="button"
              variant="brandOutline"
              size="lg"
              onClick={openCareSupport}
              className="text-sm font-semibold"
            >
              Talk to Care Support
            </Button>
            <Button
              asChild
              variant="brand"
              size="lg"
              className="text-sm font-semibold"
            >
              <Link to="/care-coordination">Get Started</Link>
            </Button>
          </div>

          <button
            className="rounded-xl border border-border/60 p-2.5 text-foreground transition-all duration-300 hover:border-primary/60 hover:bg-primary/10 hover:text-primary lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="animate-fade-in rounded-3xl border border-slate-200 bg-white py-6 shadow-xl backdrop-blur lg:hidden">
            <nav className="space-y-4 px-6 text-sm font-medium text-slate-600">
              <Link to="/" className="block rounded-xl px-4 py-3 hover:bg-[#ff444f]/10 hover:text-[#ff444f]" onClick={() => setIsOpen(false)}>
                Home
              </Link>

              <div className="space-y-2">
                <p className="px-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Solutions</p>
                {solutionsLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block rounded-xl px-4 py-3 text-slate-500 transition-colors hover:bg-[#ff444f]/10 hover:text-[#ff444f]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <Link to="/impact" className="block rounded-xl px-4 py-3 hover:bg-[#ff444f]/10 hover:text-[#ff444f]" onClick={() => setIsOpen(false)}>
                Our Impact
              </Link>
              <Link to="/hpod-kiosk" className="block rounded-xl px-4 py-3 hover:bg-[#ff444f]/10 hover:text-[#ff444f]" onClick={() => setIsOpen(false)}>
                hPod Kiosk
              </Link>
              <Link to="/about" className="block rounded-xl px-4 py-3 hover:bg-[#ff444f]/10 hover:text-[#ff444f]" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link to="/contact" className="block rounded-xl px-4 py-3 hover:bg-[#ff444f]/10 hover:text-[#ff444f]" onClick={() => setIsOpen(false)}>
                Contact
              </Link>

              <div className="pt-4">
                <Button
                  type="button"
                  variant="brandOutline"
                  size="lg"
                  onClick={() => {
                    openCareSupport();
                    setIsOpen(false);
                  }}
                  className="mb-3 w-full justify-center text-base font-semibold"
                >
                  Talk to Care Support
                </Button>
                <Button
                  asChild
                  variant="brand"
                  size="lg"
                  className="w-full justify-center text-base font-semibold"
                >
                  <Link to="/care-coordination" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
