import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 px-6 sm:px-12 md:px-20 bg-gradient-to-b from-[#007FFF]/5 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#283692] via-[#007FFF] to-[#283692]" />
          
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 p-12 sm:p-16 text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ready to Transform Healthcare for Your Loved Ones?
            </h2>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Join thousands of diaspora families who trust DiaspoCare to provide quality healthcare coordination across borders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="px-8 py-4 rounded-2xl bg-white text-[#283692] font-bold text-lg shadow-[0_4px_30px_rgba(255,255,255,0.3)] hover:shadow-[0_8px_40px_rgba(255,255,255,0.4)] hover:scale-105 transition-all">
                Get Started Today →
              </button>
              <button className="px-8 py-4 rounded-2xl border-2 border-white text-white font-bold text-lg hover:bg-white/10 hover:scale-105 transition-all">
                Schedule a Demo
              </button>
            </div>

            <div className="flex items-center justify-center gap-8 pt-8 text-white/90">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="w-px h-6 bg-white/30" />
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">HIPAA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
