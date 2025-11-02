import React from 'react';

import Footer from './Footer';
import Hero from './Hero';
import Navigation from './Navigation';
import Stats from './Stats';
import Testimonials from './Testimonials';
import TrustBadges from './TrustBadges';
import VideoSection from './VideoSection';
import Features from './Features';

const AppLayout: React.FC = () => {
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
