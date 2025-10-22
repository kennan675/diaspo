import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 px-6 sm:px-12 md:px-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#283692]/5 via-[#007FFF]/5 to-purple-100/30 -z-10" />
      
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#283692]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#007FFF]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#007FFF]/20 shadow-lg">
            <span className="text-[#283692] font-semibold text-sm">🌍 Global Healthcare, Simplified</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#3A3F46] leading-tight tracking-tight">
            Caring from afar — <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">made simple</span>
          </h1>
          
          <p className="text-xl text-[#7A8A9E] leading-relaxed max-w-2xl">
            Empowering diaspora families to access trusted healthcare for their loved ones back home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#283692] to-[#007FFF] text-white font-bold text-lg shadow-[0_4px_30px_rgba(0,127,255,0.3)] hover:shadow-[0_8px_40px_rgba(0,127,255,0.4)] hover:scale-105 transition-all">
              Get Care Now →
            </button>
            <button className="px-8 py-4 rounded-2xl border-2 border-[#007FFF] text-[#007FFF] font-bold text-lg hover:bg-[#007FFF]/5 hover:scale-105 transition-all">
              Enroll as Provider
            </button>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div>
              <div className="text-3xl font-bold text-[#283692]">50K+</div>
              <div className="text-sm text-[#7A8A9E]">Families Served</div>
            </div>
            <div className="w-px h-12 bg-[#7A8A9E]/20" />
            <div>
              <div className="text-3xl font-bold text-[#283692]">2K+</div>
              <div className="text-sm text-[#7A8A9E]">Healthcare Providers</div>
            </div>
            <div className="w-px h-12 bg-[#7A8A9E]/20" />
            <div>
              <div className="text-3xl font-bold text-[#283692]">15+</div>
              <div className="text-sm text-[#7A8A9E]">Countries</div>
            </div>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/68f82a42889eeaf16721e728_1761094251861_8d44f41e.webp"
              alt="Global Healthcare Network"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#283692]/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
