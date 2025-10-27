import React from 'react';
import DiaspoHeader from '@/components/DiaspoHeader';
import DiaspoFooter from '@/components/DiaspoFooter';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import YouTubeVideo from '@/components/YouTubeVideo';
import { Video, Clock, Globe, Shield, CheckCircle, ArrowRight, Stethoscope } from 'lucide-react';

const MDConnect: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <DiaspoHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692] to-[#007FFF] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
              <span className="font-semibold text-sm">🩺 MD CONNECT</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Connect with Doctors Instantly
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Virtual consultations connecting your loved ones with qualified medical professionals anywhere, anytime
            </p>
          </div>
        </section>

        {/* Video Section - FIRST */}
        <section className="py-16 px-6 sm:px-12 md:px-20 bg-gradient-to-b from-white to-[#283692]/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-block px-4 py-2 bg-[#283692]/10 rounded-full mb-4">
                <span className="text-[#283692] font-semibold text-sm">🎥 TELEMEDICINE</span>
              </div>
              <h2 className="text-4xl font-extrabold text-[#3A3F46] mb-4">
                MD Connect <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">in Action</span>
              </h2>
              <p className="text-xl text-[#7A8A9E]">See how virtual consultations connect families with doctors</p>
            </div>

            <YouTubeVideo 
              videoId="dAyfk6sqPcY"
              title="DiaspoCare MD Connect Telemedicine"
              autoplay={false}
            />
          </div>
        </section>

        {/* What is MD Connect Section */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#3A3F46] mb-6">
                  What is MD Connect?
                </h2>
                <p className="text-lg text-[#7A8A9E] leading-relaxed mb-6">
                  MD Connect is DiaspoCare's telemedicine platform that bridges the distance between you, your loved ones, and qualified healthcare professionals.
                </p>
                <p className="text-lg text-[#7A8A9E] leading-relaxed mb-6">
                  Whether it's a routine check-up, follow-up consultation, or urgent medical advice, MD Connect makes it possible to receive quality healthcare without leaving home.
                </p>
                <p className="text-lg text-[#7A8A9E] leading-relaxed">
                  Video consultations, secure messaging, and digital prescriptions - all in one easy-to-use platform.
                </p>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-[#283692]/10 to-[#007FFF]/10 rounded-3xl p-12">
                  <Video className="w-24 h-24 text-[#007FFF] mx-auto mb-6" />
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-[#007FFF] flex-shrink-0" />
                      <span className="text-[#3A3F46] font-medium">Live video consultations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-[#007FFF] flex-shrink-0" />
                      <span className="text-[#3A3F46] font-medium">Licensed medical professionals</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-[#007FFF] flex-shrink-0" />
                      <span className="text-[#3A3F46] font-medium">Digital prescriptions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-[#007FFF] flex-shrink-0" />
                      <span className="text-[#3A3F46] font-medium">Secure and confidential</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-[#3A3F46] mb-12 text-center">
              Why Choose MD Connect?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">24/7 Availability</h3>
                <p className="text-[#7A8A9E] leading-relaxed">
                  Access medical consultations anytime, day or night. No need to wait for clinic hours or worry about time zones.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#007FFF] to-[#283692] flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">No Travel Required</h3>
                <p className="text-[#7A8A9E] leading-relaxed">
                  Save time and money on transportation. Receive quality medical care from the comfort of home.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">Verified Doctors</h3>
                <p className="text-[#7A8A9E] leading-relaxed">
                  All physicians are licensed, verified professionals with extensive medical experience and training.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-[#3A3F46] mb-12 text-center">Services Available</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5">
                <Stethoscope className="w-6 h-6 text-[#007FFF] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[#3A3F46] mb-2">General Consultations</h3>
                  <p className="text-[#7A8A9E]">Routine check-ups, health assessments, and medical advice for common conditions</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5">
                <Stethoscope className="w-6 h-6 text-[#007FFF] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[#3A3F46] mb-2">Follow-up Care</h3>
                  <p className="text-[#7A8A9E]">Monitor treatment progress and adjust care plans with your doctor</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5">
                <Stethoscope className="w-6 h-6 text-[#007FFF] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[#3A3F46] mb-2">Prescription Renewals</h3>
                  <p className="text-[#7A8A9E]">Get your prescriptions renewed quickly and conveniently</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5">
                <Stethoscope className="w-6 h-6 text-[#007FFF] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[#3A3F46] mb-2">Specialist Referrals</h3>
                  <p className="text-[#7A8A9E]">Connect with specialists for more complex medical needs</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5">
                <Stethoscope className="w-6 h-6 text-[#007FFF] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[#3A3F46] mb-2">Chronic Disease Management</h3>
                  <p className="text-[#7A8A9E]">Ongoing support for conditions like diabetes, hypertension, and more</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5">
                <Stethoscope className="w-6 h-6 text-[#007FFF] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[#3A3F46] mb-2">Mental Health Support</h3>
                  <p className="text-[#7A8A9E]">Access to counselors and mental health professionals</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-[#3A3F46] mb-12 text-center">How MD Connect Works</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#3A3F46] mb-3">Book an Appointment</h3>
                  <p className="text-lg text-[#7A8A9E]">
                    Select a doctor, choose a convenient time, and schedule your video consultation through the DiaspoCare app.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#3A3F46] mb-3">Join the Video Call</h3>
                  <p className="text-lg text-[#7A8A9E]">
                    At the scheduled time, join the secure video consultation from any device with internet connection.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#3A3F46] mb-3">Receive Care & Prescription</h3>
                  <p className="text-lg text-[#7A8A9E]">
                    Discuss your health concerns with the doctor. If needed, receive a digital prescription instantly.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#3A3F46] mb-3">Follow-up & Monitoring</h3>
                  <p className="text-lg text-[#7A8A9E]">
                    Access your consultation records anytime and schedule follow-ups as needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692] to-[#007FFF] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-6">Ready to Connect with a Doctor?</h2>
            <p className="text-xl mb-8 text-white/90">
              Quality medical care is just a video call away
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#app-download" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#283692] font-bold text-lg hover:bg-white/90 transition-all hover:scale-105">
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all hover:scale-105">
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>
      <DiaspoFooter />
      <BackToTop />
    </div>
  );
};

export default MDConnect;
