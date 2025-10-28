import React from 'react';
import DiaspoHeader from '@/components/DiaspoHeader';
import DiaspoFooter from '@/components/DiaspoFooter';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import YouTubeVideo from '@/components/YouTubeVideo';
import { Users, UserCheck, Network, Phone, FileText, Activity, Eye, Heart, ArrowRight } from 'lucide-react';

const CareCoordination: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <DiaspoHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692] to-[#007FFF] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Care Coordination</h1>
            <p className="text-2xl font-semibold mb-4">Caring from afar, Made simple with DiaspoCare.</p>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 px-6 sm:px-12 md:px-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <YouTubeVideo 
              videoId="dAyfk6sqPcY"
              title="DiaspoCare Care Coordination"
              autoplay={false}
            />
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 px-6 sm:px-12 md:px-20 bg-gradient-to-b from-white to-[#007FFF]/5">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[#7A8A9E] leading-relaxed mb-6">
              When you live far from home, caring for your loved ones' health can feel overwhelming.
            </p>
            <p className="text-lg text-[#7A8A9E] leading-relaxed mb-6">
              Finding trusted doctors, ensuring medications are genuine, arranging appointments, or even getting someone to pick up prescriptions. These are not easy tasks when you're thousands of miles away. Add to that the challenge of navigating a healthcare system that often feels fragmented, and it's easy to feel helpless.
            </p>
            <p className="text-lg text-[#3A3F46] font-semibold leading-relaxed">
              That's where DiaspoCare comes in. We know how hard it is to coordinate care from abroad. That's why we've created a Care Coordination Service specifically designed for families like yours, so your loved ones can receive the right care at the right time, without the stress and confusion.
            </p>
          </div>
        </section>

        {/* One Team, One Plan, One Trusted Network */}
        <section className="py-16 px-6 sm:px-12 md:px-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-extrabold text-[#3A3F46] mb-12 text-center">
              One Team, One Plan, <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">One Trusted Network</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 rounded-2xl p-8">
                <Users className="w-12 h-12 text-[#283692] mb-4" />
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">A single point of contact</h3>
                <p className="text-[#7A8A9E]">
                  You and your loved one will have a dedicated Care Coordinator who knows the full medical history, appointments, medications, and ongoing needs.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 rounded-2xl p-8">
                <UserCheck className="w-12 h-12 text-[#283692] mb-4" />
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">A vetted provider network</h3>
                <p className="text-[#7A8A9E]">
                  Only top-quality, trusted healthcare providers are included in our network.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 rounded-2xl p-8">
                <Network className="w-12 h-12 text-[#283692] mb-4" />
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">Seamless communication</h3>
                <p className="text-[#7A8A9E]">
                  Everyone involved in the care plan works from the same up-to-date information, so nothing gets lost in translation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-6 sm:px-12 md:px-20 bg-gradient-to-b from-[#007FFF]/5 to-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-extrabold text-[#3A3F46] mb-12 text-center">
              How <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">It Works</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#3A3F46] mb-2">Starts with a Call</h3>
                  <p className="text-lg text-[#7A8A9E]">We learn your loved one's health history, challenges, and goals.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#3A3F46] mb-2">Personalized Care Plan</h3>
                  <p className="text-lg text-[#7A8A9E]">Our clinical team designs a tailored plan for managing conditions, medications, and appointments.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">3</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#3A3F46] mb-2">Ongoing Support</h3>
                  <p className="text-lg text-[#7A8A9E]">We coordinate everything from prescription refills to specialist visits and even emergency response.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">4</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#3A3F46] mb-2">Easy Payment & Tracking</h3>
                  <p className="text-lg text-[#7A8A9E]">Medical expenses can be managed through your DiaspoCare wallet, giving you transparency and control.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Support */}
        <section className="py-16 px-6 sm:px-12 md:px-20 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold text-[#3A3F46] mb-8">
              Specialized Support for <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Chronic Conditions</span>
            </h2>
            <p className="text-lg text-[#7A8A9E] mb-6">
              If your loved one has diabetes, heart disease, kidney disease, or other chronic conditions, we've got specialized subscription plans. These include:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Activity className="w-6 h-6 text-[#007FFF] flex-shrink-0 mt-1" />
                <span className="text-lg text-[#7A8A9E]">Medication delivery from approved trusted sources</span>
              </li>
              <li className="flex items-start gap-3">
                <Eye className="w-6 h-6 text-[#007FFF] flex-shrink-0 mt-1" />
                <span className="text-lg text-[#7A8A9E]">In-person and virtual clinical check-ups</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-[#007FFF] flex-shrink-0 mt-1" />
                <span className="text-lg text-[#7A8A9E]">Continuous monitoring and adjustments to keep health on track</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Medical Second Opinions */}
        <section className="py-16 px-6 sm:px-12 md:px-20 bg-gradient-to-b from-white to-[#007FFF]/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold text-[#3A3F46] mb-6">
              Peace of Mind with <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Medical Second Opinions</span>
            </h2>
            <p className="text-lg text-[#7A8A9E] mb-4">
              When the diagnosis is uncertain or the treatment plan feels unclear, our physician network offers trusted medical second opinions.
            </p>
            <p className="text-lg text-[#7A8A9E]">
              We work hand-in-hand with local providers to ensure your loved one gets the most accurate diagnosis and the best possible care.
            </p>
          </div>
        </section>

        {/* Why Choose DiaspoCare */}
        <section className="py-16 px-6 sm:px-12 md:px-20 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold text-[#3A3F46] mb-12 text-center">
              Why Choose DiaspoCare for <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Care Coordination?</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-[#007FFF] flex-shrink-0 mt-3" />
                <div>
                  <h3 className="text-xl font-bold text-[#3A3F46] mb-2">We simplify the complex</h3>
                  <p className="text-lg text-[#7A8A9E]">Navigating healthcare doesn't have to be stressful.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-[#007FFF] flex-shrink-0 mt-3" />
                <div>
                  <h3 className="text-xl font-bold text-[#3A3F46] mb-2">We bridge the distance</h3>
                  <p className="text-lg text-[#7A8A9E]">You can care for your loved ones as if you were right there.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-[#007FFF] flex-shrink-0 mt-3" />
                <div>
                  <h3 className="text-xl font-bold text-[#3A3F46] mb-2">We provide peace of mind</h3>
                  <p className="text-lg text-[#7A8A9E]">Knowing they are in good hands lets you focus on your life abroad.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 rounded-2xl">
              <p className="text-xl text-[#3A3F46] font-semibold italic text-center">
                With DiaspoCare, you're not just sending money for healthcare, you're sending care itself—Let us be your eyes, ears, and hands on the ground, so your loved ones can live healthier, happier lives, no matter the distance.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692] to-[#007FFF] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-6">Start Care Coordination Today</h2>
            <p className="text-xl mb-8 text-white/90">
              Give your loved ones comprehensive care with DiaspoCare
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-[#283692] font-bold text-lg hover:bg-white/90 transition-all hover:scale-105">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>
      <DiaspoFooter />
      <BackToTop />
    </div>
  );
};

export default CareCoordination;
