import { useEffect, useState } from "react";
import { ArrowRight, Download, MessageCircle, Sparkles } from "lucide-react";

import heroImage from "@/assets/hero-healthcare.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 z-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/95 via-secondary/90 to-accent/85 mix-blend-multiply" />
        <div
          className="absolute inset-0 z-[11] opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, hsl(var(--primary-glow)) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--secondary)) 0%, transparent 50%)",
          }}
        />
        <img src={heroImage} alt="Healthcare professional consulting with patient" className="h-full w-full scale-110 object-cover" />
      </div>

      <div className="absolute inset-0 z-[12] pointer-events-none overflow-hidden">
        <div className="animate-float absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl" style={{ animationDelay: "0s" }} />
        <div className="animate-float absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl" style={{ animationDelay: "2s" }} />
        <div className="animate-float absolute top-1/2 left-1/2 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container relative z-20 mx-auto px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          <div className="animate-fade-in inline-block opacity-0" style={{ animationDelay: "0.2s" }}>
            <span className="group flex items-center gap-2 rounded-full border-2 border-foreground/20 bg-background/10 px-6 py-3 text-sm font-bold text-primary-foreground shadow-large backdrop-blur-premium transition-all duration-500 hover:border-foreground/40 hover:scale-105 hover:shadow-glow">
              <Sparkles className="h-4 w-4 animate-pulse" /> Trusted Diaspora Care Network <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>

          <h1
            className="animate-fade-in text-6xl font-display font-bold leading-[1.1] text-primary-foreground opacity-0 sm:text-7xl lg:text-8xl"
            style={{ animationDelay: "0.4s" }}
          >
            Caring from afar,
            <br />
            <span className="relative inline-block">
              <span className="animate-shimmer bg-gradient-to-r from-accent via-white to-secondary bg-[length:200%_100%] bg-clip-text text-transparent">made simple</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-accent to-secondary opacity-60 blur-sm" />
            </span>
          </h1>

          <p className="animate-fade-in max-w-3xl text-2xl font-medium text-primary-foreground/95 opacity-0 sm:text-3xl" style={{ animationDelay: "0.6s" }}>
            Connecting the diaspora to quality healthcare.
          </p>
          <p className="animate-fade-in max-w-2xl text-xl leading-relaxed text-primary-foreground/85 opacity-0" style={{ animationDelay: "0.8s" }}>
            The health of your loved ones matters most. Experience world-class care coordination with real-time updates and dedicated support.
          </p>

          <div className="animate-fade-in mt-12 flex flex-col gap-6 opacity-0 sm:flex-row" style={{ animationDelay: "1s" }}>
            <Button variant="hero" size="lg" className="group px-8 py-7 text-base hover:scale-105">
              <Download className="h-5 w-5 group-hover:animate-bounce" /> Download DiaspoCare App <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="glass" size="lg" className="group px-8 py-7 text-base">
              <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" /> Talk to our care team
            </Button>
          </div>

          <div className="animate-fade-in mt-16 flex flex-wrap items-center gap-8 text-primary-foreground/70 opacity-0" style={{ animationDelay: "1.2s" }}>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white/50 bg-gradient-to-br from-primary-glow to-secondary" />
                ))}
              </div>
              <span className="text-sm font-semibold">50K+ Families Trust Us</span>
            </div>
            <div className="h-8 w-px bg-primary-foreground/30" />
            <div className="text-sm font-semibold">⭐⭐⭐⭐⭐ 4.9/5 Rating</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 h-48 bg-gradient-to-t from-background via-background/50 to-transparent" />
      <div className="absolute bottom-12 left-1/2 z-30 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-primary-foreground/50 pt-2">
          <div className="h-2 w-1 animate-pulse rounded-full bg-primary-foreground/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
