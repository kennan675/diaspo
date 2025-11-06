import { useRef } from "react";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingCTA from "@/components/FloatingCTA";
import HomeHero from "@/components/home/HomeHero";
import HomeStats from "@/components/home/HomeStats";
import HomeVideo from "@/components/home/HomeVideo";
import HomeCareJourney from "@/components/home/HomeCareJourney";
import PartnersSection from "@/components/PartnersSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AppLayout = () => {
  const scope = useRef<HTMLDivElement | null>(null);
  useScrollReveal(scope);

  return (
    <div ref={scope} className="relative min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="space-y-24 pb-24 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <HomeHero />
        </div>
        <HomeStats />
        <HomeVideo />
        <HomeCareJourney />
        <PartnersSection />
      </main>
      <Footer />
      <FloatingCTA />
      <BackToTop />
    </div>
  );
};

export default AppLayout;
