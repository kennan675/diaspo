import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const solutionsLinks = [
  { to: "/care-coordination", label: "Care Coordination" },
  { to: "/healthcare-financing", label: "Healthcare Financing" },
  { to: "/family-health-wallet", label: "Family Health Wallet" },
  { to: "/md-connect", label: "MD Connect" },
];

const navLinks = [
  { to: "/about", label: "About Us" },
  { to: "/impact", label: "Our Impact" },
  { to: "/hpod-kiosk", label: "hPod Kiosk" },
  { to: "/contact", label: "Contact" },
];

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const closeTimerRef = useRef<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle dropdown close on outside click
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
    closeTimerRef.current = window.setTimeout(() => setSolutionsOpen(false), 200);
  };

  const openCareSupport = () => {
    if (window.Tawk_API?.maximize) {
      window.Tawk_API.maximize();
    } else {
      window.location.href = "/contact";
    }
  };

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
          ? "bg-white/95 backdrop-blur-premium border-b border-border/60 shadow-medium"
          : "bg-white/90"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              DiaspoCare
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-1 md:flex">
            <div 
              className="relative group" 
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={cn(
                  'flex items-center space-x-1 rounded-lg px-4 py-2.5 text-sm font-medium transition-all',
                  'text-gray-700 hover:bg-gray-100/80 hover:text-primary',
                  'dark:text-gray-200 dark:hover:bg-gray-800/50 dark:hover:text-white',
                  solutionsOpen && 'text-primary dark:text-white'
                )}
                onClick={() => setSolutionsOpen(!solutionsOpen)}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    solutionsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                    className="absolute left-0 mt-2 w-64 origin-top-left rounded-xl bg-white/95 p-2 shadow-2xl ring-1 ring-black/5 backdrop-blur-lg dark:bg-gray-900/95 dark:ring-white/10"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {solutionsLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="group flex items-center justify-between rounded-lg px-4 py-3 text-sm transition-all hover:bg-gray-50/80 dark:text-gray-200 dark:hover:bg-gray-800/50"
                        onClick={() => setSolutionsOpen(false)}
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="h-3.5 w-3.5 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-60" />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {[/* Add your links here */].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  'rounded-lg px-3 py-2.5 text-sm font-medium transition-all',
                  'text-gray-700 hover:bg-gray-100/80 hover:text-primary',
                  'dark:text-gray-200 dark:hover:bg-gray-800/50 dark:hover:text-white',
                  location.pathname === item.to && 'text-primary dark:text-white'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center space-x-2 md:flex">
            <Button 
              variant="ghost" 
              size="sm" 
              className="font-medium text-gray-700 hover:bg-gray-100/80 dark:text-gray-200 dark:hover:bg-gray-800/50"
              asChild
            >
              <Link to="/login">Log In</Link>
            </Button>
            <Button 
              size="sm" 
              className="font-medium"
              asChild
            >
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="relative z-50 rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100/80 dark:text-gray-200 dark:hover:bg-gray-800/50 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 top-16 z-40 h-[calc(100vh-4rem)] overflow-y-auto bg-white/95 backdrop-blur-lg dark:bg-gray-950/95 md:hidden"
          >
            <div className="container px-4 py-6">
              <div className="space-y-1">
                <button
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium text-gray-900 transition-colors hover:bg-gray-100/80 dark:text-gray-100 dark:hover:bg-gray-800/50"
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      solutionsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {solutionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4"
                    >
                      <div className="space-y-1 border-l-2 border-gray-100 pl-4 dark:border-gray-800">
                        {solutionsLinks.map((link) => (
                          <Link
                            key={link.to}
                            to={link.to}
                            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100/80 dark:text-gray-300 dark:hover:bg-gray-800/50"
                            onClick={() => {
                              setIsOpen(false);
                              setSolutionsOpen(false);
                            }}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {[/* Add your links here */].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-100/80 dark:text-gray-100 dark:hover:bg-gray-800/50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-6 space-y-3 border-t border-gray-100 pt-6 dark:border-gray-800">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    Log In
                  </Link>
                  className="mb-3 w-full justify-center text-base font-semibold text-primary transition-shadow hover:shadow-[0_0_28px_rgba(88,140,255,0.45)] hover:shadow-primary/40"
              onClick={openCareSupport}
            >
              Talk to Care Support
            </Button>
            <Button
              asChild
              variant="hero"
              size="lg"
              className="w-full justify-center text-base font-semibold transition-shadow hover:shadow-[0_0_32px_rgba(33,123,255,0.5)] hover:shadow-secondary/40"
            >
              <Link to="/care-coordination" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</motion.header>

export default Navigation;
