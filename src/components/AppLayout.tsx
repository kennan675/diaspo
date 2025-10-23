import React from 'react';
import ScrollProgress from './ScrollProgress';
import DiaspoHeader from './DiaspoHeader';
import HeroSection from './HeroSection';
import ZeroDiversionSection from './ZeroDiversionSection';
import WhoUsesSection from './WhoUsesSection';
import PartnersSection from './PartnersSection';
import FeaturesSection from './FeaturesSection';
import HowItWorksVideo from './HowItWorksVideo';
import StatsSection from './StatsSection';
import CareFlowSection from './CareFlowSection';
import TestimonialsSection from './TestimonialsSection';
import MobileAppSection from './MobileAppSection';
import DiaspoCauseSection from './DiaspoCauseSection';
import HPodKioskSection from './HPodKioskSection';
import AboutSection from './AboutSection';
import FAQSection from './FAQSection';
import BlogSection from './BlogSection';
import NewsletterSection from './NewsletterSection';
import DiaspoFooter from './DiaspoFooter';
import FloatingCTA from './FloatingCTA';
import BackToTop from './BackToTop';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <DiaspoHeader />
      <main>
        <HeroSection />
        <HowItWorksVideo />
        <ZeroDiversionSection />
        <WhoUsesSection />
        <PartnersSection />
        <FeaturesSection />
        <StatsSection />
        <CareFlowSection />
        <TestimonialsSection />
        <MobileAppSection />
        <DiaspoCauseSection />
        <HPodKioskSection />
        <AboutSection />
        <FAQSection />
        <BlogSection />
        <NewsletterSection />
      </main>
      <DiaspoFooter />
      <FloatingCTA />
      <BackToTop />
    </div>
  );
};

export default AppLayout;
