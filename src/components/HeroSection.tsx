import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 px-6 sm:px-12 md:px-20 overflow-hidden">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#007FFF]/5 to-[#283692]/10 -z-10" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 bg-white/90 rounded-full border border-[#007FFF]/20 shadow-lg">
            <span className="text-[#283692] font-semibold text-sm">🌍 Global Healthcare, Simplified</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#3A3F46] leading-tight tracking-tight">
            Caring from afar <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">made simple</span>
          </h1>
          
          <p className="text-xl text-[#7A8A9E] leading-relaxed max-w-2xl">
            Empowering diaspora families to access trusted healthcare for their loved ones back home.
          </p>

          <div className="flex flex-col gap-4 items-start">
            <a 
              href="#app-download" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#283692] to-[#007FFF] text-white font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              📱 Download DiaspoCare App
            </a>
            <p className="text-sm text-[#7A8A9E]">For payers: diaspora, families, employers, cooperatives</p>
            
            <a 
              href="/provider-registration"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-[#007FFF] text-[#007FFF] font-bold text-base bg-white hover:bg-[#007FFF]/10 hover:scale-105 transition-all"
            >
              🌐 Join as a Provider
            </a>
            <p className="text-sm text-[#7A8A9E]">For pharmacies, clinics, hospitals, diagnostic laboratories</p>
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
              <div className="text-3xl font-bold text-[#283692]">4</div>
              <div className="text-sm text-[#7A8A9E]">Countries</div>
            </div>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="relative rounded-3xl overflow-hidden shadow-xl h-[700px] flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
            <img 
              src="/hero-background.png"
              alt="DiaspoCare - Caring from afar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
