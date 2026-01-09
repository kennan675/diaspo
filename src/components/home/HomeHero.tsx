import { useEffect, useRef, Suspense } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, MapPin, TrendingUp } from "lucide-react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";

import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/animations/TextReveal";
import Hero3DScene from "./Hero3DScene";

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
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#061534] transition-colors duration-500 ease-in-out"
      ref={containerRef}
      data-animate="fade-up"
      style={{
        background: 'linear-gradient(180deg, #061534 0%, #0a1a3a 100%)',
      }}
    >
      <motion.div className="absolute inset-0" style={{ y: parallaxY, scale: backgroundScale }}>
        <div className="absolute inset-0 -z-10 h-full w-full bg-transparent" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(7,14,34,0.95)0%,rgba(16,38,82,0.87)55%,rgba(27,60,123,0.7)100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_-10%,rgba(255,255,255,0.22),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(7,14,34,0.88),rgba(7,14,34,0.55)45%,transparent_68%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_115%,rgba(255,68,79,0.18),transparent_60%)]" />

          {/* 3D Scene Integration */}
          <Suspense fallback={null}>
            <Hero3DScene />
          </Suspense>
        </div>
      </motion.div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.75fr)] lg:items-center">
          <div className="space-y-10 text-white">
            {/* Location Badge */}
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-white/80 backdrop-blur"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <MapPin className="h-4 w-4" />
              Live in Kenya. Scaling with purpose.
            </motion.span>

            <div className="space-y-6">
              <div className="space-y-3">
                <TextReveal
                  text="Caring Across Borders."
                  className="block max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.015em] text-white sm:text-5xl lg:text-[3.65rem]"
                />
                <TextReveal
                  text="Verifiably."
                  delay={0.2}
                  className="block max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.01em] text-[#ff444f] sm:text-5xl lg:text-[3.65rem]"
                />
              </div>
              <motion.p
                className="max-w-2xl text-lg text-white/85 sm:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                Support your family's healthcare back home — with <span className="text-white font-medium">real clinics</span>, <span className="text-white font-medium">real bills</span>, and <span className="text-white font-medium">direct payments</span>.
              </motion.p>

              {/* Trust Points */}
              <div className="flex flex-wrap gap-4 text-base text-white/90 sm:text-lg">
                {trustPoints.map((point, index) => (
                  <motion.span
                    key={point}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.35 + index * 0.1 }}
                  >
                    <Check className="h-4 w-4 text-[#ff444f]" />
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
              <Button asChild variant="glass" size="lg" className="w-full sm:w-auto border-white/30 text-white">
                <a href="#how-diaspocare-works" className="flex items-center gap-2">
                  How It Works
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Pilot Status Card */}
          <div className="flex justify-start lg:justify-end">
            <motion.div
              className="max-w-md rounded-[32px] border border-white/25 bg-white/10 p-8 text-white shadow-[0_45px_120px_-55px_rgba(7,14,34,0.75)] backdrop-blur-xl"
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-[#ff444f]/20 p-3">
                    <TrendingUp className="h-6 w-6 text-[#ff444f]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">Pilot Status</p>
                    <p className="text-lg font-semibold text-white">hPODs Live</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3">
                    <span className="text-white/70">Current locations</span>
                    <span className="text-xl font-bold text-white">2</span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-white/60 uppercase tracking-wider">Scaling Roadmap</p>
                    <div className="flex items-center gap-2 text-white/80">
                      <span className="text-lg font-semibold text-white">5</span>
                      <ArrowRight className="h-4 w-4 text-white/40" />
                      <span className="text-lg font-semibold text-white">10</span>
                      <ArrowRight className="h-4 w-4 text-white/40" />
                      <span className="text-lg font-semibold text-[#ff444f]">20</span>
                      <span className="text-sm text-white/50">by Dec 2026</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/20 bg-white/5 px-5 py-4">
                  <p className="text-sm text-white/75 italic">
                    "DiaspoCare turned guesswork into proof. I approve real treatments, see the receipts instantly, and my family finally trusts the process."
                  </p>
                  <p className="mt-2 text-xs text-white/50">— Njeri, Diaspora Sponsor</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
