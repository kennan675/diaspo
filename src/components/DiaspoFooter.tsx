import { Phone, Mail } from 'lucide-react';

const DiaspoFooter = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#1f2a37] via-[#243853] to-[#1b2531] text-[#f8fbff] py-16 px-6 sm:px-12 md:px-20">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(0, 127, 255, 0.15), transparent 55%), radial-gradient(circle at 80% 80%, rgba(40, 54, 146, 0.12), transparent 60%)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo-full.png" 
                alt="DiaspoCare Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-[#d5e4ff] leading-relaxed">
              Bridging distances, delivering care. Empowering diaspora families worldwide.
            </p>
            <div className="pt-4">
              <p className="text-xs text-[#c2d7ff]/60 font-semibold mb-2">Operating in:</p>
              <p className="text-sm text-[#d5e4ff]">🇰🇪 Kenya  •  🇺🇬 Uganda  •  🇬🇭 Ghana  •  🇺🇸 USA</p>
            </div>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#007FFF] flex items-center justify-center transition-colors text-white">
                <span className="text-lg">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#007FFF] flex items-center justify-center transition-colors text-white">
                <span className="text-lg">in</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#007FFF] flex items-center justify-center transition-colors text-white">
                <span className="text-lg">f</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-[#d5e4ff]/80">
              <li><a href="#" className="hover:text-white transition-colors">Appointment Scheduling</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Transportation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Telehealth</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Diagnostics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-[#d5e4ff]/80">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-[#d5e4ff]/80">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">HIPAA Compliance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div id="contact">
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-[#d5e4ff]/85">
              <div className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="space-y-1 text-sm">
                  <a href="tel:+16124400892" className="block hover:text-white transition-colors">+1 612 440 0892 (US)</a>
                  <a href="tel:+254700771125" className="block hover:text-white transition-colors">+254 700 771 125 (Kenya)</a>
                  <a href="tel:+254700773074" className="block hover:text-white transition-colors">+254 700 773 074 (Kenya)</a>
                  <a href="tel:+233550425321" className="block hover:text-white transition-colors">+233 55 042 5321 (Ghana)</a>
                  <a href="tel:+2348058408055" className="block hover:text-white transition-colors">+234 805 840 8055 (Nigeria)</a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:hello@diaspocare.com" className="hover:text-white transition-colors text-sm">hello@diaspocare.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/15 text-center text-[#c2d7ff]/70">
          <p>© 2025 DiaspoCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default DiaspoFooter;
