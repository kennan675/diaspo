import React from 'react';
import { Link } from 'react-router-dom';
import { Users, UserCheck, Network, Activity, Eye, Heart, ArrowRight } from 'lucide-react';
import PageLayout from '@/components/layouts/PageLayout';

const CareCoordination: React.FC = () => {
  return (
    <PageLayout>
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#283692] to-[#007FFF] py-20 px-6 text-white sm:px-12 md:px-20"
        data-animate="fade-up"
      >
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-extrabold md:text-6xl">Care Coordination</h1>
          <p className="mb-4 text-2xl font-semibold">Caring from afar, made simple with DiaspoCare</p>
        </div>
      </section>

      <section
        className="bg-gradient-to-b from-white to-[#007FFF]/5 py-16 px-6 sm:px-12 md:px-20"
        data-animate="fade-up"
      >
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-lg leading-relaxed text-[#7A8A9E]">
            When you live far from home, caring for your loved ones' health can feel overwhelming.
          </p>
          <p className="mb-6 text-lg leading-relaxed text-[#7A8A9E]">
            Finding trusted doctors, ensuring medications are genuine, arranging appointments, or even getting someone to pick up prescriptions. These are not easy tasks when you're thousands of miles away. Add to that the challenge of navigating a healthcare system that often feels fragmented, and it's easy to feel helpless.
          </p>
          <p className="text-lg font-semibold leading-relaxed text-[#3A3F46]">
            That's where DiaspoCare comes in. We know how hard it is to coordinate care from abroad. That's why we've created a Care Coordination Service specifically designed for families like yours, so your loved ones can receive the right care at the right time, without the stress and confusion.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-6 sm:px-12 md:px-20" data-animate="fade-up">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-extrabold text-[#3A3F46]">
            One Team, One Plan, <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">One Trusted Network</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 p-8">
              <Users className="mb-4 h-12 w-12 text-[#283692]" />
              <h3 className="mb-4 text-2xl font-bold text-[#3A3F46]">A single point of contact</h3>
              <p className="text-[#7A8A9E]">
                You and your loved one will have a dedicated Care Coordinator who knows the full medical history, appointments, medications, and ongoing needs.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 p-8">
              <UserCheck className="mb-4 h-12 w-12 text-[#283692]" />
              <h3 className="mb-4 text-2xl font-bold text-[#3A3F46]">A vetted provider network</h3>
              <p className="text-[#7A8A9E]">
                Only top-quality, trusted healthcare providers are included in our network.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 p-8">
              <Network className="mb-4 h-12 w-12 text-[#283692]" />
              <h3 className="mb-4 text-2xl font-bold text-[#3A3F46]">Seamless communication</h3>
              <p className="text-[#7A8A9E]">
                Everyone involved in the care plan works from the same up-to-date information, so nothing gets lost in translation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-gradient-to-b from-[#007FFF]/5 to-white py-16 px-6 sm:px-12 md:px-20"
        data-animate="fade-up"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-4xl font-extrabold text-[#3A3F46]">
            How <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">it Works</span>
          </h2>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] text-xl font-bold text-white">1</div>
              <div className="flex-1">
                <h3 className="mb-2 text-2xl font-bold text-[#3A3F46]">Starts with a Call</h3>
                <p className="text-lg text-[#7A8A9E]">We learn your loved one's health history, challenges, and goals.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] text-xl font-bold text-white">2</div>
              <div className="flex-1">
                <h3 className="mb-2 text-2xl font-bold text-[#3A3F46]">Personalized Care Plan</h3>
                <p className="text-lg text-[#7A8A9E]">Our clinical team designs a tailored plan for managing conditions, medications, and appointments.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] text-xl font-bold text-white">3</div>
              <div className="flex-1">
                <h3 className="mb-2 text-2xl font-bold text-[#3A3F46]">Ongoing Support</h3>
                <p className="text-lg text-[#7A8A9E]">We coordinate everything from prescription refills to specialist visits and even emergency response.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] text-xl font-bold text-white">4</div>
              <div className="flex-1">
                <h3 className="mb-2 text-2xl font-bold text-[#3A3F46]">Easy Payment & Tracking</h3>
                <p className="text-lg text-[#7A8A9E]">Medical expenses can be managed through your DiaspoCare wallet, giving you transparency and control.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6 sm:px-12 md:px-20" data-animate="fade-up">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-4xl font-extrabold text-[#3A3F46]">
            Specialized Support for <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Chronic Conditions</span>
          </h2>
          <p className="mb-6 text-lg text-[#7A8A9E]">
            If your loved one has diabetes, heart disease, kidney disease, or other chronic conditions, we've got specialized subscription plans. These include:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Activity className="mt-1 h-6 w-6 flex-shrink-0 text-[#007FFF]" />
              <span className="text-lg text-[#7A8A9E]">Medication delivery from approved trusted sources</span>
            </li>
            <li className="flex items-start gap-3">
              <Eye className="mt-1 h-6 w-6 flex-shrink-0 text-[#007FFF]" />
              <span className="text-lg text-[#7A8A9E]">In-person and virtual clinical check-ups</span>
            </li>
            <li className="flex items-start gap-3">
              <Heart className="mt-1 h-6 w-6 flex-shrink-0 text-[#007FFF]" />
              <span className="text-lg text-[#7A8A9E]">Continuous monitoring and adjustments to keep health on track</span>
            </li>
          </ul>
        </div>
      </section>

      <section
        className="bg-gradient-to-b from-white to-[#007FFF]/5 py-16 px-6 sm:px-12 md:px-20"
        data-animate="fade-up"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-4xl font-extrabold text-[#3A3F46]">
            Peace of Mind with <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Medical Second Opinions</span>
          </h2>
          <p className="mb-4 text-lg text-[#7A8A9E]">
            When the diagnosis is uncertain or the treatment plan feels unclear, our physician network offers trusted medical second opinions.
          </p>
          <p className="text-lg text-[#7A8A9E]">
            We work hand-in-hand with local providers to ensure your loved one gets the most accurate diagnosis and the best possible care.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-6 sm:px-12 md:px-20" data-animate="fade-up">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-extrabold text-[#3A3F46]">
            Why Choose DiaspoCare for <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Care Coordination?</span>
          </h2>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="mt-3 h-2 w-2 flex-shrink-0 rounded-full bg-[#007FFF]" />
              <div>
                <h3 className="mb-2 text-xl font-bold text-[#3A3F46]">We simplify the complex</h3>
                <p className="text-lg text-[#7A8A9E]">Navigating healthcare doesn't have to be stressful.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-3 h-2 w-2 flex-shrink-0 rounded-full bg-[#007FFF]" />
              <div>
                <h3 className="mb-2 text-xl font-bold text-[#3A3F46]">We bridge the distance</h3>
                <p className="text-lg text-[#7A8A9E]">You can care for your loved ones as if you were right there.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-3 h-2 w-2 flex-shrink-0 rounded-full bg-[#007FFF]" />
              <div>
                <h3 className="mb-2 text-xl font-bold text-[#3A3F46]">We provide peace of mind</h3>
                <p className="text-lg text-[#7A8A9E]">Knowing they are in good hands lets you focus on your life abroad.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 p-8">
            <p className="text-center text-xl font-semibold italic text-[#3A3F46]">
              With DiaspoCare, you're not just sending money for healthcare, you're sending care itself—Let us be your eyes, ears, and hands on the ground, so your loved ones can live healthier, happier lives, no matter the distance.
            </p>
          </div>
        </div>
      </section>

      <section
        className="bg-gradient-to-br from-[#283692] to-[#007FFF] py-20 px-6 text-white sm:px-12 md:px-20"
        data-animate="fade-up"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-extrabold">Start Care Coordination Today</h2>
          <p className="mb-8 text-xl text-white/90">
            Give your loved ones comprehensive care with DiaspoCare
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-[#283692] transition-all hover:scale-105 hover:bg-white/90"
          >
            Get Started Today
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default CareCoordination;
