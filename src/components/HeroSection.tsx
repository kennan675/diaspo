import React, { useEffect, useState } from 'react';
import AnimatedBackground from './AnimatedBackground';
import FloatingShapes from './FloatingShapes';

const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 px-6 sm:px-12 md:px-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-animate -z-10" />
      
      {/* Animated particle system */}
      <div className="absolute inset-0 -z-10">
        <AnimatedBackground />
      </div>
      
      {/* Floating shapes */}
      <FloatingShapes />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-white/90 backdrop-blur-enhanced rounded-full border border-[#007FFF]/20 shadow-lg animate-wave">
            <span className="text-[#283692] font-semibold text-sm">🌍 Global Healthcare, Simplified</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#3A3F46] leading-tight tracking-tight">
            Caring from afar <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent animate-gradient">made simple</span>
          </h1>
          
          <p className="text-xl text-[#7A8A9E] leading-relaxed max-w-2xl">
            Empowering diaspora families to access trusted healthcare for their loved ones back home.
          </p>

          <div className="flex flex-col gap-4 items-start">
            <a 
              href="#app-download" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#283692] to-[#007FFF] text-white font-bold text-base shadow-[0_4px_30px_rgba(0,127,255,0.3)] hover:shadow-[0_8px_40px_rgba(0,127,255,0.6)] hover:scale-105 transition-all animate-pulse-glow hover-glow"
            >
              📱 Download DiaspoCare App
            </a>
            <p className="text-sm text-[#7A8A9E]">For payers: diaspora, families, employers, cooperatives</p>
            
            <a 
              href="/provider-registration"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-[#007FFF] text-[#007FFF] font-bold text-base bg-white/50 backdrop-blur-sm hover:bg-[#007FFF]/10 hover:scale-105 transition-all hover-lift"
            >
              🌐 Join as a Provider
            </a>
            <p className="text-sm text-[#7A8A9E]">For pharmacies, clinics, hospitals, diagnostic laboratories</p>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div className="hover-lift cursor-default">
              <div className="text-3xl font-bold text-[#283692] animate-scale-pulse">50K+</div>
              <div className="text-sm text-[#7A8A9E]">Families Served</div>
            </div>
            <div className="w-px h-12 bg-[#7A8A9E]/20" />
            <div className="hover-lift cursor-default">
              <div className="text-3xl font-bold text-[#283692] animate-scale-pulse" style={{ animationDelay: '0.5s' }}>2K+</div>
              <div className="text-sm text-[#7A8A9E]">Healthcare Providers</div>
            </div>
            <div className="w-px h-12 bg-[#7A8A9E]/20" />
            <div className="hover-lift cursor-default">
              <div className="text-3xl font-bold text-[#283692] animate-scale-pulse" style={{ animationDelay: '1s' }}>4</div>
              <div className="text-sm text-[#7A8A9E]">Countries</div>
            </div>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)] h-[700px] flex items-center justify-center bg-gradient-to-br from-white to-gray-50 hover-lift">
            {/* Animated border glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#283692] via-[#007FFF] to-purple-500 opacity-20 animate-pulse-glow rounded-3xl" />
            
            {/* Image with parallax effect */}
            <div 
              className="relative w-full h-full parallax"
              style={{ 
                transform: `translateY(${scrollY * 0.1}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <img 
                src="/hero-background.png"
                alt="DiaspoCare - Caring from afar"
                className="w-full h-full object-cover"
              />
              
              {/* Shimmer overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>
            
            {/* Floating decorative elements on image */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-[#007FFF]/20 rounded-full blur-xl animate-float-fast" />
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-float-medium" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
