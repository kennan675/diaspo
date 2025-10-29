import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 sm:px-12 md:px-20 overflow-hidden">
      {/* Center content */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Centered Logo and Branding */}
        <div className="text-center space-y-6 mb-20">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/logo-full.png"
              alt="DiaspoCare Logo"
              className="h-32 sm:h-40 md:h-48 w-auto"
            />
          </div>
          
          {/* Main tagline - gradient text */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-[#007FFF] via-[#00D9FF] to-[#00A3FF] bg-clip-text text-transparent">
              Caring from afar, made simple
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl text-[#7A8A9E] font-medium max-w-4xl mx-auto">
            Connecting the diaspora to quality healthcare
          </p>
          
          {/* Secondary tagline */}
          <p className="text-lg sm:text-xl text-[#7A8A9E]/80 max-w-3xl mx-auto">
            Because the health of your loved ones matters most
          </p>
        </div>

        {/* Bottom Left Buttons */}
        <div className="absolute bottom-12 left-6 sm:left-12 md:left-20 flex flex-col gap-4">
          <a 
            href="#app-download" 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#283692] to-[#007FFF] text-white font-bold text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            📱 Download DiaspoCare App
          </a>
          
          <a 
            href="/provider-registration"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-[#007FFF] text-[#007FFF] font-bold text-base bg-white/90 backdrop-blur-sm hover:bg-[#007FFF]/10 hover:scale-105 transition-all shadow-lg"
          >
            🌐 Join as a Provider
          </a>
        </div>

        {/* Bottom Right Stats - Optional */}
        <div className="absolute bottom-12 right-6 sm:right-12 md:right-20 hidden lg:flex items-center gap-6">
          <div className="text-right">
            <div className="text-3xl font-bold bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">50K+</div>
            <div className="text-sm text-[#7A8A9E]">Families Served</div>
          </div>
          <div className="w-px h-12 bg-[#007FFF]/30" />
          <div className="text-right">
            <div className="text-3xl font-bold bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">2K+</div>
            <div className="text-sm text-[#7A8A9E]">Providers</div>
          </div>
          <div className="w-px h-12 bg-[#007FFF]/30" />
          <div className="text-right">
            <div className="text-3xl font-bold bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">4</div>
            <div className="text-sm text-[#7A8A9E]">Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
