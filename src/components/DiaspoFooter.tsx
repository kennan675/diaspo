import React from 'react';

const DiaspoFooter: React.FC = () => {
  return (
    <footer className="bg-[#3A3F46] text-white py-16 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo-full.png" 
                alt="DiaspoCare Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/70 leading-relaxed">
              Bridging distances, delivering care. Empowering diaspora families worldwide.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#007FFF] flex items-center justify-center transition-colors">
                <span className="text-lg">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#007FFF] flex items-center justify-center transition-colors">
                <span className="text-lg">in</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#007FFF] flex items-center justify-center transition-colors">
                <span className="text-lg">f</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-[#007FFF] transition-colors">Appointment Scheduling</a></li>
              <li><a href="#" className="hover:text-[#007FFF] transition-colors">Transportation</a></li>
              <li><a href="#" className="hover:text-[#007FFF] transition-colors">Telehealth</a></li>
              <li><a href="#" className="hover:text-[#007FFF] transition-colors">Diagnostics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-[#007FFF] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#007FFF] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#007FFF] transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-[#007FFF] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-[#007FFF] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#007FFF] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#007FFF] transition-colors">HIPAA Compliance</a></li>
              <li><a href="#" className="hover:text-[#007FFF] transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/60">
          <p>© 2025 DiaspoCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default DiaspoFooter;
