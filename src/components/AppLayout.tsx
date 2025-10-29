import React from 'react';
import DiaspoHeader from './DiaspoHeader';
import HeroSection from './HeroSection';
import ZeroDiversionSection from './ZeroDiversionSection';
import WhoUsesSection from './WhoUsesSection';
import PartnersSection from './PartnersSection';
import FeaturesSection from './FeaturesSection';
import HowItWorksVideo from './HowItWorksVideo';
import CareFlowSection from './CareFlowSection';
import TestimonialsSection from './TestimonialsSection';
import MobileAppSection from './MobileAppSection';
import DiaspoCauseSection from './DiaspoCauseSection';
import HPodKioskSection from './HPodKioskSection';
import AboutSection from './AboutSection';
import FAQSection from './FAQSection';
import NewsletterSection from './NewsletterSection';
import DiaspoFooter from './DiaspoFooter';
import FloatingCTA from './FloatingCTA';
import BackToTop from './BackToTop';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <DiaspoHeader />
      <main>
        <HeroSection />
        <HowItWorksVideo />
        <ZeroDiversionSection />
        <WhoUsesSection />
        <PartnersSection />
        <FeaturesSection />
        <CareFlowSection />
        <TestimonialsSection />
        <MobileAppSection />
        <DiaspoCauseSection />
        <HPodKioskSection />
        <AboutSection />
        <FAQSection />
        <NewsletterSection />
      </main>
      <DiaspoFooter />
      <FloatingCTA />
      <BackToTop />
    </div>
  );
};

export default AppLayout;
