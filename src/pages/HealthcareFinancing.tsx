import React from 'react';
import { Link } from 'react-router-dom';
import DiaspoHeader from '@/components/DiaspoHeader';
import DiaspoFooter from '@/components/DiaspoFooter';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import YouTubeVideo from '@/components/YouTubeVideo';
import { Smartphone, DollarSign, Shield, Users, CheckCircle, ArrowRight, Heart, Activity, Eye, Pill } from 'lucide-react';

const services = [
  'Clinical Services',
  'Telemedicine',
  'Cardiac Services',
  'Dental Services',
  'Optical Services',
  'Pharmacy Services',
  'Diabetes Management',
  'Kidney & Dialysis',
  'Hospital Services',
  'Medical Center Services',
  'Cancer Care & Treatment',
  'Maternal Care Services',
];

const HealthcareFinancing: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <DiaspoHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692] to-[#007FFF] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Healthcare Financing</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Through our Healthcare Financing app, we connect the African diaspora with the pharmacists and clinicians who look after their loved ones back home, enabling them to pay for the services directly.
            </p>
          </div>
        </section>

        {/* Why Use Section */}
        <section className="py-16 px-6 sm:px-12 md:px-20 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold text-[#3A3F46] mb-8 text-center">
              Why Use the <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">HealthCare Financing App?</span>
            </h2>
            <p className="text-lg text-[#7A8A9E] leading-relaxed text-center">
              Whether you are separated from loved ones by thousands of miles or are living in another city in your home country, you will have peace of mind from knowing that your funds are strictly used as intended and they deliver quality health care for your loved ones.
            </p>
          </div>
        </section>

        {/* How DiaspoCare Guarantees Quality */}
        <section className="py-16 px-6 sm:px-12 md:px-20 bg-gradient-to-b from-white to-[#007FFF]/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-extrabold text-[#3A3F46] mb-12 text-center">
              HOW DIASPOCARE GUARANTEES QUALITY <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">HEALTHCARE FOR YOUR LOVED ONES</span>
            </h2>

            <div className="bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">Part of the benefits</h3>
              <p className="text-lg text-[#7A8A9E] leading-relaxed mb-6">
                Would you like to auto-approve transactions so that even when you are not reachable, your loved ones can still get timely medical care? Or would you like to ask friends and family to contribute towards your loved one's medical bill? The Family Health Wallet enables you to this and much more.
              </p>
              <Link to="/family-health-wallet" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#283692] to-[#007FFF] text-white font-semibold hover:scale-105 transition-all">
                LEARN MORE ABOUT FAMILY HEALTH WALLETS
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Add Your Beneficiaries */}
        <section className="py-16 px-6 sm:px-12 md:px-20 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-[#3A3F46] mb-8">
              Add Your <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Beneficiaries</span>
            </h2>
            <p className="text-lg text-[#7A8A9E] mb-8">Download the DiaspoCare app and start supporting your loved ones today</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="https://play.google.com/store/apps/details?id=com.diaspocare.app&hl=en" target="_blank" rel="noopener noreferrer" className="inline-block">
                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-16" />
              </a>
              <a href="https://apps.apple.com/ke/app/diaspocare-supporter/id1578303718" target="_blank" rel="noopener noreferrer" className="inline-block">
                <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1280966400" alt="Download on the App Store" className="h-16" />
              </a>
            </div>
          </div>
        </section>

        {/* Key Health Services */}
        <section className="py-16 px-6 sm:px-12 md:px-20 bg-gradient-to-b from-white to-[#007FFF]/5">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-extrabold text-[#3A3F46] mb-8 text-center">
              SOME KEY HEALTH SERVICES & PACKAGES <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">AVAILABLE THROUGH THE APP</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#007FFF]/10 hover:border-[#007FFF]/30 hover:shadow-lg transition-all">
                  <CheckCircle className="w-6 h-6 text-[#007FFF] flex-shrink-0" />
                  <span className="text-[#3A3F46] font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-6 sm:px-12 md:px-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-extrabold text-[#3A3F46] mb-12 text-center">
              Success <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Stories</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="space-y-4">
                <YouTubeVideo 
                  videoId="St6o-UeDah0"
                  title="Mama Moraa - Happy Mom Story"
                  autoplay={false}
                />
                <div className="bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#3A3F46] mb-3">Happy Mom Story</h3>
                  <p className="text-[#7A8A9E] leading-relaxed">
                    Mama Moraa is a happy and proud mom! Although his son lives in the United States, he is able to make sure his mom, back in Kenya receives the best heath care through DiaspoCare. This is what she has to say
                  </p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="space-y-4">
                <YouTubeVideo 
                  videoId="ldJ0dD1aqj8"
                  title="David's Success Story"
                  autoplay={false}
                />
                <div className="bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#3A3F46] mb-3">David's Success Story</h3>
                  <p className="text-[#7A8A9E] leading-relaxed">
                    David, living in the United States, joined DiaspoCare at a time when he was struggling to arrange quality healthcare for his loved ones back home. He uses DiaspoCare to access and pay for almost all the healthcare needs of his loved ones. Whether his loved ones need medication from a pharmacy, routine check up, consult with a doctor on phone, or even have someone visit them at the comfort of their homes. They got all this and MORE, thanks to David joining DiaspoCare as a Supporter and adding them as Beneficiaries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Register */}
        <section className="py-16 px-6 sm:px-12 md:px-20 bg-gradient-to-b from-white to-[#007FFF]/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-[#3A3F46] mb-8">
              How to Register as a <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Supporter</span>
            </h2>
            <div className="space-y-4 mb-12">
              <div className="flex gap-4 items-start text-left">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                <p className="text-lg text-[#7A8A9E] flex-1">Download the DiaspoCare app from Google Play or App Store</p>
              </div>
              <div className="flex gap-4 items-start text-left">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                <p className="text-lg text-[#7A8A9E] flex-1">Sign up as a Supporter and add your beneficiaries</p>
              </div>
              <div className="flex gap-4 items-start text-left">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                <p className="text-lg text-[#7A8A9E] flex-1">Fund your Family Health Wallet and start coordinating care</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692] to-[#007FFF] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-6">Sign up as a supporter</h2>
            <p className="text-xl mb-8 text-white/90">
              Start ensuring your loved ones receive quality healthcare today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://play.google.com/store/apps/details?id=com.diaspocare.app&hl=en" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-[#283692] font-bold text-lg hover:bg-white/90 transition-all hover:scale-105">
                Download App
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all hover:scale-105">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <DiaspoFooter />
      <BackToTop />
    </div>
  );
};

export default HealthcareFinancing;
