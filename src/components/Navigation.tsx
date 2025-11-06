import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#care-journey", label: "Care Journey" },
    { href: "#regions", label: "Where We Operate" },
    { href: "/impact", label: "Our Impact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-premium border-b-2 border-border/50 shadow-medium"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a className="group flex items-center gap-3 text-lg font-semibold" href="#home">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-soft group-hover:shadow-medium">
              DC
            </span>
            <span className="text-xl tracking-[0.2em] uppercase text-foreground/80 transition-colors duration-500 group-hover:text-primary">
              DiaspoCare
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-semibold text-foreground/80 transition-all duration-500 hover:text-primary"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-primary to-secondary transition-transform duration-500 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-4 md:flex">
            <Button variant="glass" size="lg" className="text-sm font-semibold">
              Talk to Care Support
            </Button>
            <Button variant="hero" size="lg" className="text-sm font-semibold">
              Get Started
            </Button>
          </div>

          <button
            className="rounded-xl border-2 border-border/50 p-2.5 text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-accent/10 hover:text-primary lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="animate-fade-in rounded-b-3xl border-t-2 border-border/50 bg-background/95 py-6 shadow-large backdrop-blur-premium lg:hidden">
            <nav className="space-y-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="animate-fade-in-left opacity-0 rounded-xl border-l-4 border-transparent px-6 py-3.5 text-base font-semibold text-foreground transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary"
                  style={{ animationDelay: `${links.indexOf(link) * 0.1}s` }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="animate-fade-in opacity-0 px-6 pt-4" style={{ animationDelay: "0.5s" }}>
                <Button variant="glass" size="lg" className="w-full justify-center text-base font-semibold">
                  Talk to Care Support
                </Button>
                <Button variant="hero" size="lg" className="w-full justify-center text-base font-semibold">
                  Get Started
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
