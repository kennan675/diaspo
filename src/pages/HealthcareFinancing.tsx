import React from 'react';
import { Link } from 'react-router-dom';
import DiaspoHeader from '@/components/DiaspoHeader';
import DiaspoFooter from '@/components/DiaspoFooter';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import YouTubeVideo from '@/components/YouTubeVideo';
import PartnersCarousel from '@/components/PartnersCarousel';
import { Shield, DollarSign, Smartphone, CreditCard, Bell, Home, CheckCircle, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const HealthcareFinancing: React.FC = () => {
  const scope = React.useRef<HTMLDivElement | null>(null);
  useScrollReveal(scope);

  return (
    <div ref={scope} className="min-h-screen bg-white">
      <ScrollProgress />
      <DiaspoHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section
          className="py-32 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-white to-[#007FFF]/5"
          data-animate="fade-up"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-extrabold text-[#283692] mb-6">
              Healthcare Financing
            </h1>
            <p className="text-2xl text-[#3A3F46] leading-relaxed mb-8">
              Real-time direct payments<br />
              to healthcare service providers<br />
              from anywhere in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://supporter.diaspocare.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-[#0066FF] text-white font-bold text-lg hover:bg-[#0052CC] transition-all hover:scale-105">
                Sign up
              </a>
              <a href="https://supporter.diaspocare.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl border-2 border-[#0066FF] text-[#0066FF] font-bold text-lg hover:bg-[#0066FF]/5 transition-all hover:scale-105">
                Login
              </a>
            </div>
          </div>
        </section>

        {/* Why Use Section with Video */}
        <section className="py-16 px-6 sm:px-12 md:px-20 bg-white" data-animate="fade-up">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-extrabold text-[#283692] mb-8 text-center">
              Why Use the HealthCare Financing App?
            </h2>
            <p className="text-lg text-[#3A3F46] leading-relaxed mb-6 text-center">
              Through our Healthcare Financing app, we connect the African diaspora with the pharmacists and clinicians who look after their loved ones back home, enabling them to pay for the services directly.
            </p>
            <p className="text-lg text-[#3A3F46] leading-relaxed mb-12 text-center">
              Whether you are separated from loved ones by thousands of miles or are living in another city in your home country, you will have peace of mind from knowing that your funds are strictly used as intended and they deliver quality health care for your loved ones.
            </p>
            
            {/* Video */}
            <div className="max-w-4xl mx-auto">
              <YouTubeVideo 
                videoId="X5bQ8kANiEg"
                title="GoodLife Pharmacy - DiaspoCare Partnership"
                autoplay={false}
              />
            </div>
          </div>
        </section>

        {/* How DiaspoCare Guarantees Quality */}
        <section
          className="py-16 px-6 sm:px-12 md:px-20 bg-gradient-to-b from-white to-[#007FFF]/5"
          data-animate="fade-up"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold text-[#283692] mb-12 text-center">
              HOW DIASPOCARE GUARANTEES QUALITY HEALTHCARE FOR YOUR LOVED ONES
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-full bg-[#0066FF]/10 flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-[#0066FF]" />
                </div>
                <h3 className="text-xl font-bold text-[#283692] mb-3">LICENSED & VETTED HEALTHCARE PROVIDERS</h3>
                <p className="text-[#3A3F46] leading-relaxed">
                  We only work with vetted and licensed specialists and pharmacies. We have the health specialists ready to serve you.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-full bg-[#0066FF]/10 flex items-center justify-center mb-4">
                  <DollarSign className="w-7 h-7 text-[#0066FF]" />
                </div>
                <h3 className="text-xl font-bold text-[#283692] mb-3">NO DIVERSION OF FUNDS MEANT FOR MEDICAL CARE</h3>
                <p className="text-[#3A3F46] leading-relaxed">
                  You send the medical care funds directly to the pharmacy or clinic; not to individual who may misuse them.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-full bg-[#0066FF]/10 flex items-center justify-center mb-4">
                  <Smartphone className="w-7 h-7 text-[#0066FF]" />
                </div>
                <h3 className="text-xl font-bold text-[#283692] mb-3">REAL-TIME PAYMENTS FROM WHEREVER YOU ARE</h3>
                <p className="text-[#3A3F46] leading-relaxed">
                  No more expensive and slow funds transfer. With a click of a button you can pay for your loved ones medical care. Distance is no issue.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-full bg-[#0066FF]/10 flex items-center justify-center mb-4">
                  <CreditCard className="w-7 h-7 text-[#0066FF]" />
                </div>
                <h3 className="text-xl font-bold text-[#283692] mb-3">MAKE MICRO-PAYMENTS DIRECT TO THE HEALTHCARE PROVIDER</h3>
                <p className="text-[#3A3F46] leading-relaxed">
                  Send as little as $1 for the medication or service prescribed; no more embarrassment when you send few dollars to your loved ones.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-full bg-[#0066FF]/10 flex items-center justify-center mb-4">
                  <Bell className="w-7 h-7 text-[#0066FF]" />
                </div>
                <h3 className="text-xl font-bold text-[#283692] mb-3">AUTOMATIC REFILL REMINDERS, REVIEWS & TRANSPARENCY</h3>
                <p className="text-[#3A3F46] leading-relaxed">
                  Full transparency of the medication or service your loved one receives. Get automatic refill reminders when they are due. Get a review or second opinion on the prescriptions.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-full bg-[#0066FF]/10 flex items-center justify-center mb-4">
                  <Home className="w-7 h-7 text-[#0066FF]" />
                </div>
                <h3 className="text-xl font-bold text-[#283692] mb-3">HOME VISITS & TELECONSULTATIONS</h3>
                <p className="text-[#3A3F46] leading-relaxed">
                  Get medical services and treatments delivered at the comfort of your home. Better yet, talk to the specialists on phone. Let the doctors come to you; no more long queues and waiting periods.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Part of the Benefits */}
        <section className="py-16 px-6 sm:px-12 md:px-20 bg-white" data-animate="fade-up">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#283692] mb-6">Part of the benefits</h2>
            <p className="text-lg text-[#3A3F46] leading-relaxed mb-4">
              Would you like to auto-approve transactions so that even when you are not reachable your loved ones can still get timely medical care?Or would you like to ask friends and family to contribute towards your loved one's medical bill? The Family Health Wallet enables you to this and much more.
            </p>
            <Link to="/family-health-wallet" className="inline-flex items-center gap-2 text-[#0066FF] font-bold text-lg hover:underline">
              LEARN MORE ABOUT FAMILY HEALTH WALLETS
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* How to Register */}
        <section
          className="py-16 px-6 sm:px-12 md:px-20 bg-gradient-to-b from-white to-[#007FFF]/5"
          data-animate="fade-up"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-[#283692] mb-4">
                How to Register as a Supporter
              </h2>
              <p className="text-lg text-[#3A3F46]">
                Simple and easy steps to register as a Supporter and start caring for your loved one immediately.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 mb-12">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-64 h-64 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] flex items-center justify-center">
                  <div className="text-8xl">📱</div>
                </div>
                <h3 className="text-xl font-bold text-[#283692] mb-3">Create an Account</h3>
                <p className="text-[#3A3F46]">
                  Download the <span className="text-[#0066FF] font-semibold">DiaspoCare App</span> from Google Play or App Store and create an account.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-64 h-64 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] flex items-center justify-center">
                  <div className="text-8xl">💳</div>
                </div>
                <h3 className="text-xl font-bold text-[#283692] mb-3">Add a Payment Method</h3>
                <p className="text-[#3A3F46]">
                  Connect a payment method that will be used to pay for healthcare expenses. We accept cards and mobile money.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-64 h-64 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] flex items-center justify-center">
                  <div className="text-8xl">👨‍👩‍👧‍👦</div>
                </div>
                <h3 className="text-xl font-bold text-[#283692] mb-3">Add Your Beneficiaries</h3>
                <p className="text-[#3A3F46]">
                  That's it! Begin caring for your loved ones today.
                </p>
              </div>
            </div>

            {/* Download App */}
            <div className="text-center">
              <p className="text-lg font-semibold text-[#283692] mb-6">Download the App</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://play.google.com/store/apps/details?id=com.diaspocare.app&hl=en" target="_blank" rel="noopener noreferrer">
                  <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-14" />
                </a>
                <a href="https://apps.apple.com/ke/app/diaspocare-supporter/id1578303718" target="_blank" rel="noopener noreferrer">
                  <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" alt="Download on the App Store" className="h-14" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Health Services */}
        <section className="py-16 px-6 sm:px-12 md:px-20 bg-white" data-animate="fade-up">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-extrabold text-[#283692] mb-12 text-center">
              SOME KEY HEALTH SERVICES & PACKAGES AVAILABLE THROUGH THE APP
            </h2>
            
            <div className="grid md:grid-cols-3 gap-x-12 gap-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-[#3A3F46]">
                  <span className="text-[#0066FF] mt-1">•</span>
                  <span>Clinical Services</span>
                </li>
                <li className="flex items-start gap-2 text-[#3A3F46]">
                  <span className="text-[#0066FF] mt-1">•</span>
                  <span>Telemedicine</span>
                </li>
                <li className="flex items-start gap-2 text-[#3A3F46]">
                  <span className="text-[#0066FF] mt-1">•</span>
                  <span>Cardiac Services</span>
                </li>
                <li className="flex items-start gap-2 text-[#3A3F46]">
                  <span className="text-[#0066FF] mt-1">•</span>
                  <span>Dental Services</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-[#3A3F46]">
                  <span className="text-[#0066FF] mt-1">•</span>
                  <span>Optical Services</span>
                </li>
                <li className="flex items-start gap-2 text-[#3A3F46]">
                  <span className="text-[#0066FF] mt-1">•</span>
                  <span>Pharmacy Services</span>
                </li>
                <li className="flex items-start gap-2 text-[#3A3F46]">
                  <span className="text-[#0066FF] mt-1">•</span>
                  <span>Diabetes Management</span>
                </li>
                <li className="flex items-start gap-2 text-[#3A3F46]">
                  <span className="text-[#0066FF] mt-1">•</span>
                  <span>Kidney & Dialysis</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-[#3A3F46]">
                  <span className="text-[#0066FF] mt-1">•</span>
                  <span>Hospital Services</span>
                </li>
                <li className="flex items-start gap-2 text-[#3A3F46]">
                  <span className="text-[#0066FF] mt-1">•</span>
                  <span>Medical Center Services</span>
                </li>
                <li className="flex items-start gap-2 text-[#3A3F46]">
                  <span className="text-[#0066FF] mt-1">•</span>
                  <span>Cancer Care & Treatment</span>
                </li>
                <li className="flex items-start gap-2 text-[#3A3F46]">
                  <span className="text-[#0066FF] mt-1">•</span>
                  <span>Maternal Care Services</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section
          className="py-16 px-6 sm:px-12 md:px-20 bg-gradient-to-b from-white to-[#007FFF]/5"
          data-animate="fade-up"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-[#283692] mb-4">
              SOME OF OUR PARTNERS YOU CAN ACCESS THROUGH THE APP
            </h2>
            <p className="text-lg text-[#3A3F46] mb-8">Over 1900 Partners</p>
            
            <PartnersCarousel />

            <div className="mt-8">
              <a href="https://supporter.diaspocare.com" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-xl bg-[#0066FF] text-white font-bold hover:bg-[#0052CC] transition-all hover:scale-105">
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-6 sm:px-12 md:px-20 bg-white" data-animate="fade-up">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Testimonial 1 - Mama Moraa */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-[#3A3F46] leading-relaxed">
                  Mama Moraa is a happy and proud mom! Although his son lives in the United States, he is able to make sure his mom, back in Kenya receives the best heath care through DiaspoCare. This is what she has to say
                </p>
              </div>
              <div>
                <YouTubeVideo 
                  videoId="SdQ5xnvFeGw"
                  title="Peris Moraa Testimonial"
                  autoplay={false}
                />
              </div>
            </div>

            {/* Testimonial 2 - David */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <YouTubeVideo 
                  videoId="q6QJd6MCowM"
                  title="David Mukaria - How to Care for your Sick Mom"
                  autoplay={false}
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-lg text-[#3A3F46] leading-relaxed">
                  David, living in the United States, joined DisapoCare at a time when he was struggling to arrange quality healthcare for his loved ones back home. He uses DiaspoCare to access and pay for almost all the healthcare needs of his loved ones. Whether his loved ones need medication from a pharmacy, routine check up, consult with a doctor on phone, or even have someone visit them at the comfort of their homes. They got all this and MORE, thanks to David joining DiaspoCare as a Supporter and adding them as Beneficiaries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          className="py-20 px-6 sm:px-12 md:px-20 bg-[#283692] text-white"
          data-animate="fade-up"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-extrabold mb-4">Sign up as a supporter</h2>
            <p className="text-xl mb-8">Support the health of your loved ones</p>
            <a href="https://supporter.diaspocare.com" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 rounded-xl bg-[#0066FF] text-white font-bold text-lg hover:bg-[#0052CC] transition-all hover:scale-105">
              Get started
            </a>
          </div>
        </section>
      </main>
      <DiaspoFooter />
      <BackToTop />
    </div>
  );
};

export default HealthcareFinancing;
