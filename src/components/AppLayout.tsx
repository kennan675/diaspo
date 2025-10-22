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
import TrustSection from './TrustSection';
import MobileAppSection from './MobileAppSection';
import AppDownloadSection from './AppDownloadSection';
import ImpactSection from './ImpactSection';
import DiaspoCauseSection from './DiaspoCauseSection';
import HPodKioskSection from './HPodKioskSection';
import AboutSection from './AboutSection';
import FAQSection from './FAQSection';
import BlogSection from './BlogSection';
import NewsletterSection from './NewsletterSection';
import CTASection from './CTASection';
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
        <ZeroDiversionSection />
        <WhoUsesSection />
        <PartnersSection />
        <FeaturesSection />
        <HowItWorksVideo />
        <StatsSection />
        <CareFlowSection />
        <TestimonialsSection />
        <TrustSection />
        <MobileAppSection />
        <ImpactSection />
        <DiaspoCauseSection />
        <HPodKioskSection />
        <AboutSection />
        <AppDownloadSection />
        <FAQSection />
        <BlogSection />
        <NewsletterSection />
        <CTASection />
      </main>
      <DiaspoFooter />
      <FloatingCTA />
      <BackToTop />
    </div>
  );
};

export default AppLayout;
