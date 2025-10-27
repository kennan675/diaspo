import React from 'react';
import FeatureCard from './FeatureCard';
import { FEATURES } from '@/lib/constants';

const FeaturesSection: React.FC = () => {
  return (
    <section id="services" className="relative py-24 px-6 sm:px-12 md:px-20 bg-gradient-to-b from-white to-[#007FFF]/5 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#007FFF]/5 rounded-full blur-3xl animate-float-slower" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-float-slow" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-[#283692]/10 rounded-full">
            <span className="text-[#283692] font-semibold text-sm">OUR SERVICES</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#3A3F46] tracking-tight">
            Comprehensive Care <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Solutions</span>
          </h2>
          
          <p className="text-xl text-[#7A8A9E] max-w-3xl mx-auto leading-relaxed">
            From appointment scheduling to telehealth, we provide end-to-end healthcare coordination for your loved ones.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#283692] to-[#007FFF] text-white font-bold text-lg shadow-[0_4px_30px_rgba(0,127,255,0.3)] hover:shadow-[0_8px_40px_rgba(0,127,255,0.5)] hover:scale-105 transition-all animate-pulse-glow hover-glow">
            Explore All Services →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
