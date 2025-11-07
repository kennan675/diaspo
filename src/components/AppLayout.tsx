import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import VideoSection from "@/components/VideoSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <TrustBadges />
        <Features />
        <Stats />
        <VideoSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
