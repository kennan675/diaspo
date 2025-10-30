import React from 'react';
import { Phone, Mail } from 'lucide-react';

const DiaspoFooter: React.FC = () => {
  return (
    <footer className="bg-[#3A3F46] text-white py-16 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
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
            <div className="pt-4">
              <p className="text-xs text-white/50 font-semibold mb-2">Operating in:</p>
              <p className="text-sm text-white/70">🇰🇪 Kenya  •  🇺🇬 Uganda  •  🇬🇭 Ghana  •  🇺🇸 USA</p>
            </div>
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

          <div id="contact">
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-white/70">
              <div className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="space-y-1 text-sm">
                  <a href="tel:+16124400892" className="block hover:text-[#007FFF] transition-colors">+1 612 440 0892 (US)</a>
                  <a href="tel:+254700771125" className="block hover:text-[#007FFF] transition-colors">+254 700 771 125 (Kenya)</a>
                  <a href="tel:+254700773074" className="block hover:text-[#007FFF] transition-colors">+254 700 773 074 (Kenya)</a>
                  <a href="tel:+233550425321" className="block hover:text-[#007FFF] transition-colors">+233 55 042 5321 (Ghana)</a>
                  <a href="tel:+2348058408055" className="block hover:text-[#007FFF] transition-colors">+234 805 840 8055 (Nigeria)</a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:hello@diaspocare.com" className="hover:text-[#007FFF] transition-colors text-sm">hello@diaspocare.com</a>
              </div>
            </div>
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
