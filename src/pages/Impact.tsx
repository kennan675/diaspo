import React from 'react';
import DiaspoHeader from '@/components/DiaspoHeader';
import DiaspoFooter from '@/components/DiaspoFooter';
import ImpactSection from '@/components/ImpactSection';
import DiaspoCauseSection from '@/components/DiaspoCauseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import YouTubeVideo from '@/components/YouTubeVideo';
import { TrendingUp, Users, Heart, Globe } from 'lucide-react';

const Impact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <DiaspoHeader />
      <main className="pt-20">
        <ImpactSection />

        {/* Detailed Impact Stories */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-[#3A3F46] mb-6">
                Impact <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Stories</span>
              </h2>
              <p className="text-xl text-[#7A8A9E] max-w-3xl mx-auto">
                Real stories from families and healthcare providers using DiaspoCare
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#3A3F46]">Family Impact</h3>
                    <p className="text-sm text-[#7A8A9E]">Supporter Story</p>
                  </div>
                </div>
                <p className="text-[#7A8A9E] leading-relaxed italic">
                  "Before DiaspoCare, I never knew if my money was actually going to my mother's medication. Now I can see every transaction, every doctor visit, every prescription filled. It's given me peace of mind that's priceless."
                </p>
                <p className="text-sm text-[#283692] font-semibold mt-4">- Sarah, UK Diaspora</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#3A3F46]">Provider Impact</h3>
                    <p className="text-sm text-[#7A8A9E]">Healthcare Professional</p>
                  </div>
                </div>
                <p className="text-[#7A8A9E] leading-relaxed italic">
                  "DiaspoCare has transformed my practice. I can now serve more patients because families trust the transparent payment system. No more delays in treatment because of payment uncertainties."
                </p>
                <p className="text-sm text-[#283692] font-semibold mt-4">- Dr. Okonkwo, Pharmacist</p>
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />

        {/* Impact Video Section */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-[#283692]/10 rounded-full mb-4">
                <span className="text-[#283692] font-semibold text-sm">REAL IMPACT</span>
              </div>
              <h2 className="text-4xl font-extrabold text-[#3A3F46] mb-6">
                See Our <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Impact</span>
              </h2>
              <p className="text-xl text-[#7A8A9E]">Watch how DiaspoCare is changing lives across Africa</p>
            </div>

            <YouTubeVideo 
              videoId="dAyfk6sqPcY"
              title="DiaspoCare Impact Stories"
              autoplay={false}
            />
          </div>
        </section>

        <DiaspoCauseSection />

        {/* Milestones */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-[#3A3F46] mb-6">Our Journey</h2>
              <p className="text-xl text-[#7A8A9E]">Key milestones since 2020</p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#283692] to-[#007FFF]"></div>
              
              <div className="space-y-12">
                <div className="flex items-center gap-8">
                  <div className="flex-1 text-right">
                    <h3 className="text-2xl font-bold text-[#283692]">2020</h3>
                    <p className="text-[#7A8A9E]">DiaspoCare Founded</p>
                  </div>
                  <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1"></div>
                </div>

                <div className="flex items-center gap-8">
                  <div className="flex-1"></div>
                  <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#283692]">2021</h3>
                    <p className="text-[#7A8A9E]">10,000+ Families Served</p>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <div className="flex-1 text-right">
                    <h3 className="text-2xl font-bold text-[#283692]">2023</h3>
                    <p className="text-[#7A8A9E]">Expanded to 15+ Countries</p>
                  </div>
                  <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center shadow-lg">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1"></div>
                </div>

                <div className="flex items-center gap-8">
                  <div className="flex-1"></div>
                  <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center shadow-lg">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#283692]">2025</h3>
                    <p className="text-[#7A8A9E]">50,000+ Families & Growing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <DiaspoFooter />
      <BackToTop />
    </div>
  );
};

export default Impact;
