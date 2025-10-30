import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      {/* Pure CSS Grid Pattern */}
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10 text-center">
        {/* Logo */}
        <div className="mb-12">
          <img 
            src="/logo-full.png" 
            alt="DiaspoCare" 
            className="h-16 mx-auto mb-8"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight mb-8">
          <span className="bg-gradient-to-r from-[#283692] via-[#007FFF] to-[#00B2FF] bg-clip-text text-transparent">
            Caring from Afar
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Empowering diaspora families to access trusted healthcare for their loved ones back home.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <a 
            href="#app-download"
            className="px-8 py-4 bg-gradient-to-r from-[#283692] to-[#007FFF] text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all transform hover:-translate-y-1"
          >
            Download DiaspoCare App
          </a>
          <a 
            href="/provider-registration"
            className="px-8 py-4 bg-white text-[#007FFF] border-2 border-[#007FFF] text-lg font-semibold rounded-full hover:bg-[#007FFF]/10 transition-all transform hover:-translate-y-1"
          >
            Join as a Provider
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#283692] mb-2">50K+</div>
            <div className="text-gray-500">Families Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#007FFF] mb-2">2K+</div>
            <div className="text-gray-500">Healthcare Providers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00B2FF] mb-2">4</div>
            <div className="text-gray-500">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#283692] mb-2">24/7</div>
            <div className="text-gray-500">Support</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-24 animate-bounce">
          <div className="w-8 h-12 border-4 border-[#007FFF] rounded-full flex justify-center p-1">
            <div className="w-2 h-2 bg-[#007FFF] rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#007FFF]/10 rounded-full filter blur-3xl -z-0" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#283692]/10 rounded-full filter blur-3xl -z-0" />
    </section>
  );
};

export default HeroSection;
