import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, MapPin, TrendingUp } from "lucide-react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";

import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/animations/TextReveal";
// import Hero3DScene from "./Hero3DScene"; // Removed
import heroPerson from "@/assets/images/hero-person.png";

const HomeHero = () => {
  const trustPoints = [
    "No cash-outs.",
    "No diversion.",
    "No guesswork.",
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothMouseX = useSpring(mouseX, { damping: 25, stiffness: 200, mass: 0.2 });
  const smoothMouseY = useSpring(mouseY, { damping: 25, stiffness: 200, mass: 0.2 });

  const rotateX = useTransform(smoothMouseY, [0, 1], [10, -10]);
  const rotateY = useTransform(smoothMouseX, [0, 1], [-10, 10]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.12]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      mouseX.set(clientX / window.innerWidth);
      mouseY.set(clientY / window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-white transition-colors duration-500 ease-in-out"
      ref={containerRef}
      data-animate="fade-up"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f0f4ff 100%)',
      }}
    >
      <motion.div className="absolute inset-0" style={{ y: parallaxY, scale: backgroundScale }}>
        <div className="absolute inset-0 -z-10 h-full w-full bg-transparent" />
        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(255,255,255,0.98)0%,rgba(240,248,255,0.9)55%,rgba(230,240,255,0.8)100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_-10%,rgba(40,54,146,0.03),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_110%,rgba(0,127,255,0.04),transparent_55%)]" />
        </div>
      </motion.div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.75fr)] lg:items-center">
          <div className="space-y-10 text-slate-900">


            <div className="space-y-6">
              <div className="space-y-3">
                <TextReveal
                  text="Caring Across Borders."
                  className="block max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.015em] text-slate-900 sm:text-5xl lg:text-[3.65rem]"
                />
                <TextReveal
                  text="Verifiably."
                  delay={0.2}
                  className="block max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.01em] text-[#007fff] sm:text-5xl lg:text-[3.65rem]"
                />
              </div>
              <motion.p
                className="max-w-2xl text-lg text-slate-600 sm:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                Support your family's healthcare back home — with <span className="text-slate-900 font-medium">real clinics</span>, <span className="text-slate-900 font-medium">real bills</span>, and <span className="text-slate-900 font-medium">direct payments</span>.
              </motion.p>

              {/* Trust Points */}
              <div className="flex flex-wrap gap-4 text-base text-slate-700 sm:text-lg">
                {trustPoints.map((point, index) => (
                  <motion.span
                    key={point}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 backdrop-blur"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.35 + index * 0.1 }}
                  >
                    <Check className="h-4 w-4 text-[#007fff]" />
                    {point}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
                <Link to="/get-started" className="flex items-center gap-2">
                  Start Free
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="lg" className="w-full sm:w-auto border-slate-200 text-slate-700 hover:bg-slate-50">
                <a href="#how-diaspocare-works" className="flex items-center gap-2">
                  How It Works
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-2xl lg:max-w-none"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={heroPerson}
                alt="Smiling African man"
                className="h-full w-full object-cover"
              />
              {/* Optional: Add a subtle improved gradient overlay if needed for text readability, 
                  but usually hero images are standalone on the right. 
                  If it needs to blend, we can add a gradient here. */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
