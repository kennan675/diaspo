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
      <main className="space-y-24 pb-24 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <HomeHero />
        </div>
        <HomeWhyDiaspoCare />
        <HomeHowItWorks />
        <HomeHPodSection />
        <HomeSecondOpinions />
        <HomeWallets />
        <HomeBuiltByDiaspora />
      </main>
      <Footer />
      <FloatingCTA />
      <BackToTop />
    </div>
  );
};

export default AppLayout;
