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
import HomeBuiltByDiaspora from "@/components/home/HomeBuiltByDiaspora";
import SectionTransition from "@/components/SectionTransition";
import TawkWidget from "@/components/TawkWidget";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AppLayout = () => {
  const scope = useRef<HTMLDivElement | null>(null);
  useScrollReveal(scope);

  return (
    <div ref={scope} className="relative min-h-screen bg-background text-foreground">
      <TawkWidget
        propertyId={import.meta.env.VITE_TAWK_PROPERTY_ID ?? "690dc49843ae26195bde4df6"}
        widgetId={import.meta.env.VITE_TAWK_WIDGET_ID ?? "1j9esftho"}
      />
      <Navigation />
      <main className="pb-0">
        <HomeHero />
        <SectionTransition variant="dark" />
        <HomeWhyDiaspoCare />
        <SectionTransition variant="light" />
        <HomeHowItWorks />
        <SectionTransition variant="dark" />
        <HomeHPodSection />
        <SectionTransition variant="light" />
        <HomeSecondOpinions />
        <SectionTransition variant="dark" />
        <HomeWallets />
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
