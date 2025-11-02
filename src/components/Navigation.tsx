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

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Solutions", href: "#solutions" },
    { label: "Our Impact", href: "#impact" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
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
          <a className="group flex items-center" href="#home">
            <img
              src="/logo-full.png"
              alt="DiaspoCare logo"
              className="h-10 w-auto transition-transform duration-500 group-hover:scale-105"
            />
          </a>

          <div className="hidden items-center space-x-1 lg:flex">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative rounded-xl px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-primary/5 hover:text-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-1/2" />
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button variant="hero" className="font-bold shadow-medium hover:shadow-glow">
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
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="animate-fade-in-left opacity-0 rounded-xl border-l-4 border-transparent px-6 py-3.5 text-base font-semibold text-foreground transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="animate-fade-in opacity-0 px-6 pt-4" style={{ animationDelay: "0.5s" }}>
                <Button variant="hero" className="w-full py-6 text-base font-bold">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
