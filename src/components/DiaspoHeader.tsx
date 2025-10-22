import React, { useState, useEffect } from 'react';
const DiaspoHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 py-4"><div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/logo-full.png" 
              alt="DiaspoCare Logo" 
              className="h-10 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-[#3A3F46] hover:text-[#007FFF] transition-colors font-medium">Home</a>
            <a href="#solutions" className="text-[#3A3F46] hover:text-[#007FFF] transition-colors font-medium">Solutions</a>
            <a href="#impact" className="text-[#3A3F46] hover:text-[#007FFF] transition-colors font-medium">Our Impact</a>
            <a href="#hpod" className="text-[#3A3F46] hover:text-[#007FFF] transition-colors font-medium">hPod Kiosk</a>
            <a href="#about" className="text-[#3A3F46] hover:text-[#007FFF] transition-colors font-medium">About</a>
            <a href="#contact" className="text-[#3A3F46] hover:text-[#007FFF] transition-colors font-medium">Contact</a>
            <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#283692] to-[#007FFF] text-white font-semibold hover:shadow-xl hover:scale-105 transition-all">
              Get Started
            </button>
          </div>

          <button className="md:hidden text-[#3A3F46]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>{mobileMenuOpen && <div className="md:hidden mt-4 pb-4 space-y-3">
            <a href="#home" className="block text-[#3A3F46] hover:text-[#007FFF] font-medium">Home</a>
            <a href="#solutions" className="block text-[#3A3F46] hover:text-[#007FFF] font-medium">Solutions</a>
            <a href="#impact" className="block text-[#3A3F46] hover:text-[#007FFF] font-medium">Our Impact</a>
            <a href="#hpod" className="block text-[#3A3F46] hover:text-[#007FFF] font-medium">hPod Kiosk</a>
            <a href="#about" className="block text-[#3A3F46] hover:text-[#007FFF] font-medium">About</a>
            <a href="#contact" className="block text-[#3A3F46] hover:text-[#007FFF] font-medium">Contact</a>
          </div>}</nav>
    </header>;
};
export default DiaspoHeader;