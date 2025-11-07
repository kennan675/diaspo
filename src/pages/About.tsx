import React from 'react';
import AboutSection from '@/components/AboutSection';
import YouTubeVideo from '@/components/YouTubeVideo';
import PageLayout from '@/components/layouts/PageLayout';

const About: React.FC = () => {
  return (
    <PageLayout>
      <section
        className="py-16 px-6 sm:px-12 md:px-20 bg-gradient-to-b from-white to-[#283692]/5"
        data-animate="fade-up"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-block rounded-full bg-[#283692]/10 px-4 py-2">
              <span className="text-sm font-semibold text-[#283692]">🎥 WATCH OUR STORY</span>
            </div>
            <h2 className="mb-4 text-4xl font-extrabold text-[#3A3F46]">
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

      <section
        className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5"
        data-animate="fade-up"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-4xl font-extrabold text-[#3A3F46]">
            Through the DiaspoCare App
          </h2>
          <div className="rounded-3xl bg-white p-12 shadow-xl">
            <p className="mb-6 text-lg leading-relaxed text-[#7A8A9E]">
              The African diaspora and individuals living away from their loved ones can connect with the pharmacists and clinicians who look after their loved ones back home, enabling them to pay for the services directly.
            </p>
            <p className="text-lg leading-relaxed text-[#7A8A9E]">
              We continue to leverage technology to deliver effective and seamless healthcare solutions that are of high quality and standard, affordable and cost-effective, built for Africans to address core health issues, and include the uninsured or under-insured populations.
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692] to-[#007FFF] text-white"
        data-animate="fade-up"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-extrabold">Ready to Get Started?</h2>
          <p className="mb-8 text-xl text-white/90">
            Join thousands of diaspora families who trust DiaspoCare for their loved ones' healthcare needs.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-2xl bg-white px-8 py-4 text-lg font-bold text-[#283692] transition-all hover:scale-105 hover:bg-white/90">
              Sign Up as Supporter
            </button>
            <button className="rounded-2xl border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:bg-white/10">
              Become a Provider
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
