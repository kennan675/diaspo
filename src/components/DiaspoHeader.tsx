import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
const DiaspoHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
    };

    if (solutionsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [solutionsOpen]);

  const handleMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setSolutionsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 300);
  };

  const toggleSolutions = () => {
    setSolutionsOpen(!solutionsOpen);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 py-4"><div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/logo-full.png" 
              alt="DiaspoCare Logo" 
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#3A3F46] hover:text-[#007FFF] transition-colors font-medium">Home</Link>
            
            <div 
              ref={solutionsRef}
              className="relative" 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              <button 
                onClick={toggleSolutions}
                className="text-[#3A3F46] hover:text-[#007FFF] transition-colors font-medium flex items-center gap-1"
              >
                Solutions
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {solutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link 
                    to="/care-coordination" 
                    className="block px-6 py-3 text-[#007FFF] hover:bg-[#007FFF]/5 transition-colors font-medium"
                    onClick={() => setSolutionsOpen(false)}
                  >
                    Care Coordination
                  </Link>
                  <Link 
                    to="/healthcare-financing" 
                    className="block px-6 py-3 text-[#007FFF] hover:bg-[#007FFF]/5 transition-colors font-medium"
                    onClick={() => setSolutionsOpen(false)}
                  >
                    Healthcare Financing App
                  </Link>
                  <Link 
                    to="/family-health-wallet" 
                    className="block px-6 py-3 text-[#007FFF] hover:bg-[#007FFF]/5 transition-colors font-medium"
                    onClick={() => setSolutionsOpen(false)}
                  >
                    Family Health Wallet
                  </Link>
                  <Link 
                    to="/md-connect" 
                    className="block px-6 py-3 text-[#007FFF] hover:bg-[#007FFF]/5 transition-colors font-medium"
                    onClick={() => setSolutionsOpen(false)}
                  >
                    MD Connect
                  </Link>
                </div>
              )}
            </div>

            <Link to="/impact" className="text-[#3A3F46] hover:text-[#007FFF] transition-colors font-medium">Our Impact</Link>
            <Link to="/hpod-kiosk" className="text-[#3A3F46] hover:text-[#007FFF] transition-colors font-medium">hPod Kiosk</Link>
            <Link to="/about" className="text-[#3A3F46] hover:text-[#007FFF] transition-colors font-medium">About</Link>
            <Link to="/contact" className="text-[#3A3F46] hover:text-[#007FFF] transition-colors font-medium">Contact</Link>
            <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#283692] to-[#007FFF] text-white font-semibold hover:shadow-xl hover:scale-105 transition-all">
              Get Started
            </button>
          </div>

          <button className="md:hidden text-[#3A3F46]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>{mobileMenuOpen && <div className="md:hidden mt-4 pb-4 space-y-3 bg-gradient-to-br from-[#283692] to-[#007FFF] rounded-2xl p-6 shadow-lg">
            <Link to="/" className="block text-white hover:text-white/80 font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            
            <div className="space-y-2">
              <div className="text-white font-semibold text-sm">Solutions</div>
              <Link to="/care-coordination" className="block text-white/90 hover:text-white text-sm pl-4" onClick={() => setMobileMenuOpen(false)}>Care Coordination</Link>
              <Link to="/healthcare-financing" className="block text-white/90 hover:text-white text-sm pl-4" onClick={() => setMobileMenuOpen(false)}>Healthcare Financing App</Link>
              <Link to="/family-health-wallet" className="block text-white/90 hover:text-white text-sm pl-4" onClick={() => setMobileMenuOpen(false)}>Family Health Wallet</Link>
              <Link to="/md-connect" className="block text-white/90 hover:text-white text-sm pl-4" onClick={() => setMobileMenuOpen(false)}>MD Connect</Link>
            </div>
            
            <Link to="/impact" className="block text-white hover:text-white/80 font-medium" onClick={() => setMobileMenuOpen(false)}>Our Impact</Link>
            <Link to="/hpod-kiosk" className="block text-white hover:text-white/80 font-medium" onClick={() => setMobileMenuOpen(false)}>hPod Kiosk</Link>
            <Link to="/about" className="block text-white hover:text-white/80 font-medium" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/contact" className="block text-white hover:text-white/80 font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </div>}</nav>
    </header>;
};
export default DiaspoHeader;