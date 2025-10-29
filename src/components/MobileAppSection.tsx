import React from 'react';

const MobileAppSection: React.FC = () => {
  return (
    <section id="app-download" className="py-24 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692] via-[#007FFF] to-[#283692] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-white">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full">
              <span className="font-semibold text-sm">COMING SOON</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Healthcare Coordination in Your Pocket
            </h2>

            <p className="text-xl text-white/90 leading-relaxed">
              Download our mobile app for iOS and Android. Manage appointments, track services, and stay connected with your family's healthcare providers on the go.
            </p>

            <div className="space-y-4">
              {['Real-time notifications', 'Secure messaging with providers', 'Document uploads & storage', 'Offline mode support'].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="https://apps.apple.com/ke/app/diaspocare-supporter/id1578303718"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white text-[#283692] font-bold hover:scale-105 transition-all shadow-lg"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </a>

              <a 
                href="https://play.google.com/store/apps/details?id=com.diaspocare.app&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white text-[#283692] font-bold hover:scale-105 transition-all shadow-lg"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              <img 
                src="https://d64gsuwffb70l.cloudfront.net/68f82a42889eeaf16721e728_1761094609266_0d4dcc6a.webp"
                alt="DiaspoCare Mobile App"
                className="w-full h-auto drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
