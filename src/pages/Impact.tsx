import React from 'react';
import ImpactSection from '@/components/ImpactSection';
import DiaspoCauseSection from '@/components/DiaspoCauseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import YouTubeVideo from '@/components/YouTubeVideo';
import { TrendingUp, Users, Heart, Globe } from 'lucide-react';
import PageLayout from '@/components/layouts/PageLayout';

const Impact: React.FC = () => {
  return (
    <PageLayout>
      <section
        className="py-16 px-6 sm:px-12 md:px-20 bg-gradient-to-b from-white to-[#283692]/5"
        data-animate="fade-up"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-block rounded-full bg-[#283692]/10 px-4 py-2">
              <span className="text-sm font-semibold text-[#283692]">🎥 OUR IMPACT</span>
            </div>
            <h2 className="mb-4 text-4xl font-extrabold text-[#3A3F46]">
              See Our <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Real Impact</span>
            </h2>
            <p className="text-xl text-[#7A8A9E]">Watch how DiaspoCare is changing lives across Africa</p>
          </div>

          <YouTubeVideo
            videoId="St6o-UeDah0"
            title="Goodlife X DiaspoCare Partnership"
            autoplay={false}
          />
        </div>
      </section>

      <div data-animate="fade-up">
        <ImpactSection />
      </div>

      <section
        className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5"
        data-animate="fade-up"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-extrabold text-[#3A3F46]">
              Impact <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-[#7A8A9E]">
              Real stories from families and healthcare providers using DiaspoCare
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF]">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#3A3F46]">Family Impact</h3>
                  <p className="text-sm text-[#7A8A9E]">Supporter Story</p>
                </div>
              </div>
              <p className="italic leading-relaxed text-[#7A8A9E]">
                "Before DiaspoCare, I never knew if my money was actually going to my mother's medication. Now I can see every transaction, every doctor visit, every prescription filled. It's given me peace of mind that's priceless."
              </p>
              <p className="mt-4 text-sm font-semibold text-[#283692]">- Sarah, UK Diaspora</p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF]">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#3A3F46]">Provider Impact</h3>
                  <p className="text-sm text-[#7A8A9E]">Healthcare Professional</p>
                </div>
              </div>
              <p className="italic leading-relaxed text-[#7A8A9E]">
                "DiaspoCare has transformed my practice. I can now serve more patients because families trust the transparent payment system. No more delays in treatment because of payment uncertainties."
              </p>
              <p className="mt-4 text-sm font-semibold text-[#283692]">- Dr. Okonkwo, Pharmacist</p>
            </div>
          </div>
        </div>
      </section>

      <div data-animate="fade-up">
        <TestimonialsSection />
      </div>
      <div data-animate="fade-up">
        <DiaspoCauseSection />
      </div>


    </PageLayout>
  );
};

export default Impact;
