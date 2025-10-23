import React from 'react';
import { Smartphone, Download } from 'lucide-react';

const AppDownloadSection: React.FC = () => {
  return (
    <section id="app-download" className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692] to-[#007FFF] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
              <span className="font-semibold text-sm">📱 Get the App</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Download DiaspoCare Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Access healthcare services for your loved ones anytime, anywhere. Available on iOS and Android.
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">For Supporters:</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.diaspocare.app&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#283692] rounded-xl font-semibold hover:bg-white/90 transition-all hover:scale-105"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Google Play
                </a>
                <a 
                  href="https://apps.apple.com/ke/app/diaspocare-supporter/id1578303718"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#283692] rounded-xl font-semibold hover:bg-white/90 transition-all hover:scale-105"
                >
                  <Download className="w-5 h-5 mr-2" />
                  App Store
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex items-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  <span className="text-sm">Available on iOS & Android</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative w-full h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm"></div>
              <Smartphone className="w-48 h-48 text-white/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
