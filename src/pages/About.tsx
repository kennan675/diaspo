import React from 'react';
import DiaspoHeader from '@/components/DiaspoHeader';
import DiaspoFooter from '@/components/DiaspoFooter';
import AboutSection from '@/components/AboutSection';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import YouTubeVideo from '@/components/YouTubeVideo';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const About: React.FC = () => {
  const scope = React.useRef<HTMLDivElement | null>(null);
  useScrollReveal(scope);

  return (
    <div ref={scope} className="min-h-screen bg-white">
      <ScrollProgress />
      <DiaspoHeader />
      <main className="pt-20">
        {/* Video Section - FIRST */}
        <section
          className="py-16 px-6 sm:px-12 md:px-20 bg-gradient-to-b from-white to-[#283692]/5"
          data-animate="fade-up"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-block px-4 py-2 bg-[#283692]/10 rounded-full mb-4">
                <span className="text-[#283692] font-semibold text-sm">🎥 WATCH OUR STORY</span>
              </div>
              <h2 className="text-4xl font-extrabold text-[#3A3F46] mb-4">
                The <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">DiaspoCare Story</span>
              </h2>
              <p className="text-xl text-[#7A8A9E]">Discover how we're transforming healthcare for diaspora families</p>
            </div>

            <YouTubeVideo 
              videoId="ldJ0dD1aqj8"
              title="The DiaspoCare Story"
              autoplay={false}
            />
          </div>
        </section>

        <div data-animate="fade-up">
          <AboutSection />
        </div>
        
        {/* Additional Content Section */}
        <section
          className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5"
          data-animate="fade-up"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold text-[#3A3F46] mb-12 text-center">
              Through the DiaspoCare App
            </h2>
            <div className="bg-white rounded-3xl p-12 shadow-xl">
              <p className="text-lg text-[#7A8A9E] leading-relaxed mb-6">
                The African diaspora and individuals living away from their loved ones can connect with the pharmacists and clinicians who look after their loved ones back home, enabling them to pay for the services directly.
              </p>
              <p className="text-lg text-[#7A8A9E] leading-relaxed">
                We continue to leverage technology to deliver effective and seamless healthcare solutions that are of high quality and standard, affordable and cost-effective, built for Africans to address core health issues, and include the uninsured or under-insured populations.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section
          className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692] to-[#007FFF] text-white"
          data-animate="fade-up"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of diaspora families who trust DiaspoCare for their loved ones' healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-2xl bg-white text-[#283692] font-bold text-lg hover:bg-white/90 transition-all hover:scale-105">
                Sign Up as Supporter
              </button>
              <button className="px-8 py-4 rounded-2xl border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all hover:scale-105">
                Become a Provider
              </button>
            </div>
          </div>
        </section>
      </main>
      <DiaspoFooter />
      <BackToTop />
    </div>
  );
};

export default About;
