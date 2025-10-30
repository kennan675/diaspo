import React from 'react';
import { Download } from 'lucide-react';
import { IconGlobe } from './icons/IconGlobe';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Logo Container - Larger and centered */}
        <div className="mb-16 text-center">
          <img 
            src="/logo-full.png" 
            alt="DiaspoCare"
            className="h-24 md:h-32 mx-auto"
          />
        </div>

        {/* Main Content - Center aligned */}
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading - New gradient design */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-8">
            <span className="bg-gradient-to-r from-[#0066FF] via-[#00A3FF] to-[#00F0FF] bg-clip-text text-transparent inline-block">
              Caring from afar,
            </span>
            <br />
            <span className="text-[#1A1A1A]">made simple</span>
          </h1>

          {/* Subheading - Two lines with refined spacing */}
          <div className="space-y-2 mb-12 text-gray-600">
            <p className="text-2xl md:text-3xl font-medium">
              Connecting the diaspora to quality healthcare.
            </p>
            <p className="text-xl md:text-2xl">
              The health of your loved ones matters most.
            </p>
          </div>

          {/* CTA Buttons - Updated styling */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-24">
            <a 
              href="#download"
              className="group px-8 py-4 bg-gradient-to-r from-[#283692] to-[#0066FF] text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download DiaspoCare App
            </a>
            <a 
              href="/provider-registration"
              className="px-8 py-4 bg-white text-[#1A1A1A] border border-[#E5E7EB] text-lg font-semibold rounded-xl hover:border-[#0066FF] hover:text-[#0066FF] transition-all flex items-center justify-center gap-2"
            >
              <IconGlobe />
              Join as a Provider
            </a>
          </div>

          {/* Stats - Simplified design */}
          <div className="grid grid-cols-3 gap-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#0066FF]">50K+</div>
              <div className="text-gray-600 mt-1">Families Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#0066FF]">2K+</div>
              <div className="text-gray-600 mt-1">Providers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#0066FF]">4</div>
              <div className="text-gray-600 mt-1">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
