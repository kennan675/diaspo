import { useRef } from "react";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingCTA from "@/components/FloatingCTA";
import HomeHero from "@/components/home/HomeHero";
import HomeWhyDiaspoCare from "@/components/home/HomeWhyDiaspoCare";
import HomeHowItWorks from "@/components/home/HomeHowItWorks";
import HomeHPodSection from "@/components/home/HomeHPodSection";
import HomeSecondOpinions from "@/components/home/HomeSecondOpinions";
import HomeWallets from "@/components/home/HomeWallets";
import HomePricing from "@/components/home/HomePricing";
import HomeBuiltByDiaspora from "@/components/home/HomeBuiltByDiaspora";
import SectionTransition from "@/components/SectionTransition";
import ChatBot from "@/components/ChatBot";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AppLayout = () => {
  const scope = useRef<HTMLDivElement | null>(null);
  useScrollReveal(scope);

  return (
    <div ref={scope} className="relative min-h-screen bg-background text-foreground">
      <ChatBot />
      <Navigation />
      <main className="pb-0">
        <HomeHero />
        <SectionTransition variant="light" />
        <HomeWhyDiaspoCare />
        <SectionTransition variant="dark" />
        <HomeHowItWorks />
        <SectionTransition variant="light" />
        <HomeHPodSection />
        <SectionTransition variant="dark" />
        <HomeSecondOpinions />
        <SectionTransition variant="light" />
        <HomeWallets />
        <SectionTransition variant="dark" />
        <HomePricing />
        <SectionTransition variant="light" />
        <HomeBuiltByDiaspora />
      </main>
      <Footer />
      <FloatingCTA />
      <BackToTop />
    </div>
  );
};

export default AppLayout;
