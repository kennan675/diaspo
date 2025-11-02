import { type ComponentType, type SVGProps, useEffect, useRef, useState } from "react";
import { TrendingUp, Users } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      value: 50000,
      suffix: "+",
      label: "Diaspora families protected",
      icon: Users,
      gradient: "from-primary to-accent",
    },
    {
      value: 2000,
      suffix: "+",
      label: "Verified providers delivering care",
      icon: TrendingUp,
      gradient: "from-secondary to-primary-glow",
    },
  ];

  return (
    <section id="impact" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 via-transparent to-accent/80 mix-blend-overlay" />

      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary-foreground blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-accent blur-[120px] animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/50 blur-[150px] animate-pulse-glow" />
      </div>

      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 50px, hsla(0, 0%, 100%, 0.03) 50px, hsla(0, 0%, 100%, 0.03) 51px)",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          {stats.map((stat, index) => (
            <StatCounter key={stat.label} {...stat} delay={index * 0.3} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

const StatCounter = ({
  value,
  suffix,
  label,
  icon: Icon,
  gradient,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  gradient: string;
  delay: number;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 },
    );

    const current = ref.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2500;
    const steps = 80;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="group relative animate-scale-in opacity-0" style={{ animationDelay: `${delay}s` }}>
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-white/5 blur-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      <div className="relative rounded-3xl border-2 border-foreground/20 bg-background/10 p-12 backdrop-blur-premium transition-all duration-700 hover:scale-[1.02] hover:border-foreground/40 hover:shadow-[0_0_80px_rgba(255,255,255,0.3)]">
        <div className="mb-6 inline-block">
          <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-primary-foreground shadow-large transition-all duration-700 group-hover:scale-110 group-hover:shadow-glow-hover`}>
            <Icon className="h-8 w-8" strokeWidth={2.5} />
          </div>
        </div>

        <div className="mb-4 font-display text-6xl font-bold text-primary-foreground leading-none sm:text-7xl lg:text-8xl">
          <span className="inline-block transition-transform duration-700 group-hover:scale-110">{count.toLocaleString()}</span>
          <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">{suffix}</span>
        </div>

        <p className="max-w-xs text-lg font-semibold leading-relaxed text-primary-foreground/90 sm:text-xl">{label}</p>

        <div className="absolute top-6 right-6 h-16 w-16 rounded-tr-2xl border-t-2 border-r-2 border-primary-foreground/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute bottom-6 left-6 h-16 w-16 rounded-bl-2xl border-b-2 border-l-2 border-primary-foreground/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </div>
  );
};

export default Stats;
