import React from 'react';
import DiaspoHeader from '@/components/DiaspoHeader';
import DiaspoFooter from '@/components/DiaspoFooter';
import HPodKioskSection from '@/components/HPodKioskSection';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import { Stethoscope, Activity, Heart, Shield, Clock, MapPin } from 'lucide-react';

const HPodKiosk: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <DiaspoHeader />
      <main className="pt-20">
        <HPodKioskSection />

        {/* Technical Specifications */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-[#3A3F46] mb-6">
                Technical <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Capabilities</span>
              </h2>
              <p className="text-xl text-[#7A8A9E] max-w-3xl mx-auto">
                State-of-the-art diagnostic equipment built for comprehensive health assessments
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 rounded-2xl p-8">
                <Activity className="w-12 h-12 text-[#283692] mb-4" />
                <h3 className="text-xl font-bold text-[#3A3F46] mb-3">Vital Signs Monitoring</h3>
                <ul className="space-y-2 text-[#7A8A9E]">
                  <li>• Blood Pressure</li>
                  <li>• Heart Rate</li>
                  <li>• Temperature</li>
                  <li>• Oxygen Saturation</li>
                  <li>• Weight & BMI</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 rounded-2xl p-8">
                <Stethoscope className="w-12 h-12 text-[#283692] mb-4" />
                <h3 className="text-xl font-bold text-[#3A3F46] mb-3">Diagnostic Tests</h3>
                <ul className="space-y-2 text-[#7A8A9E]">
                  <li>• Blood Glucose</li>
                  <li>• Cholesterol Screening</li>
                  <li>• Urinalysis</li>
                  <li>• ECG/EKG</li>
                  <li>• Vision Testing</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 rounded-2xl p-8">
                <Heart className="w-12 h-12 text-[#283692] mb-4" />
                <h3 className="text-xl font-bold text-[#3A3F46] mb-3">Connected Care</h3>
                <ul className="space-y-2 text-[#7A8A9E]">
                  <li>• Telehealth Integration</li>
                  <li>• Real-time Results</li>
                  <li>• Physician Consultations</li>
                  <li>• Digital Health Records</li>
                  <li>• Remote Monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-[#3A3F46] mb-6">How It Works</h2>
              <p className="text-xl text-[#7A8A9E]">Simple, fast, and accurate health screening</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="font-bold text-[#3A3F46] mb-2">Visit Kiosk</h3>
                <p className="text-sm text-[#7A8A9E]">Locate nearest H-POD kiosk in your community</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="font-bold text-[#3A3F46] mb-2">Run Tests</h3>
                <p className="text-sm text-[#7A8A9E]">Complete guided health assessments</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="font-bold text-[#3A3F46] mb-2">Get Results</h3>
                <p className="text-sm text-[#7A8A9E]">Receive instant diagnostic results</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  4
                </div>
                <h3 className="font-bold text-[#3A3F46] mb-2">Consult Doctor</h3>
                <p className="text-sm text-[#7A8A9E]">Connect with healthcare professionals</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-[#3A3F46] mb-6">Why Choose H-POD</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#3A3F46] mb-2">24/7 Accessibility</h3>
                  <p className="text-[#7A8A9E]">Access healthcare screening anytime, no appointments needed</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#3A3F46] mb-2">Secure & Private</h3>
                  <p className="text-[#7A8A9E]">Your health data is encrypted and completely confidential</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#3A3F46] mb-2">Community Based</h3>
                  <p className="text-[#7A8A9E]">Strategically located in underserved areas for maximum impact</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center flex-shrink-0">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#3A3F46] mb-2">Comprehensive Testing</h3>
                  <p className="text-[#7A8A9E]">Wide range of diagnostic tests in one convenient location</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692] to-[#007FFF] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-6">Find an H-POD Kiosk Near You</h2>
            <p className="text-xl mb-8 text-white/90">
              Get started with comprehensive health screening today
            </p>
            <button className="px-8 py-4 rounded-2xl bg-white text-[#283692] font-bold text-lg hover:bg-white/90 transition-all hover:scale-105">
              Locate Nearest Kiosk
            </button>
          </div>
        </section>
      </main>
      <DiaspoFooter />
      <BackToTop />
    </div>
  );
};

export default HPodKiosk;
