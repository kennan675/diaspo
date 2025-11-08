import { useRef } from "react";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingCTA from "@/components/FloatingCTA";
import HomeHero from "@/components/home/HomeHero";
import HomeAbout from "@/components/home/HomeAbout";
import HomeHowItWorks from "@/components/home/HomeHowItWorks";
import HomeStats from "@/components/home/HomeStats";
import HomeImpact from "@/components/home/HomeImpact";
import HomeCareJourney from "@/components/home/HomeCareJourney";
import HomeVideo from "@/components/home/HomeVideo";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import PartnersSection from "@/components/PartnersSection";
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
      <main className="space-y-24 pb-24 pt-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <HomeHero />
        </div>
        <HomeAbout />
        <HomeHowItWorks />
        <HomeStats />
        <HomeImpact />
        <HomeCareJourney />
        <HomeVideo />
        <HomeTestimonials />
        <PartnersSection />
      </main>
      <Footer />
      <FloatingCTA />
      <BackToTop />
    </div>
  );
};

export default AppLayout;
