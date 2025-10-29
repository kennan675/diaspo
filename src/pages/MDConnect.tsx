import React from 'react';
import DiaspoHeader from '@/components/DiaspoHeader';
import DiaspoFooter from '@/components/DiaspoFooter';
import BackToTop from '@/components/BackToTop';
import { UserPlus, FileText, Upload, MessageSquare, Shield, HelpCircle, Heart, Pill, Scan, ClipboardList, ArrowRight } from 'lucide-react';

const MDConnect: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <DiaspoHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692] via-[#007FFF] to-[#283692] text-white overflow-hidden">
          {/* Background image overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
              Peace of Mind for You and <span className="text-yellow-300">Your Loved Ones</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/95 max-w-4xl mx-auto mb-10 leading-relaxed">
              Ensure your loved ones back home get accurate diagnosis and world-class treatment. DiaspoCare MD Connect brings the best doctors together to provide trusted care from anywhere in the world.
            </p>
            
            <a 
              href="#learn-more" 
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-[#283692] font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Learn More
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </section>

        {/* What is DiaspoCare MD Connect Section */}
        <section id="learn-more" className="py-24 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-white to-[#007FFF]/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-8">
              What is <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">DiaspoCare MD Connect?</span>
            </h2>
            
            <p className="text-xl text-[#7A8A9E] text-center max-w-4xl mx-auto mb-16 leading-relaxed">
              We connect doctors from Europe and the US with your care team back home to collaborate on medical cases, ensuring the best possible care through:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Medication Reconciliation */}
              <div className="group bg-white rounded-3xl p-8 border-2 border-[#283692]/10 hover:border-[#283692] hover:shadow-2xl transition-all">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                  <Pill className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#007FFF] text-center mb-4">Medication Reconciliation</h3>
              </div>

              {/* Imaging & Test Results Analysis */}
              <div className="group bg-white rounded-3xl p-8 border-2 border-[#007FFF]/10 hover:border-[#007FFF] hover:shadow-2xl transition-all">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#007FFF] to-[#283692] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                  <Scan className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#007FFF] text-center mb-4">Imaging & Test Results Analysis</h3>
              </div>

              {/* Diagnosis & Treatment Plan Review */}
              <div className="group bg-white rounded-3xl p-8 border-2 border-[#283692]/10 hover:border-[#283692] hover:shadow-2xl transition-all">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                  <ClipboardList className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#007FFF] text-center mb-4">Diagnosis & Treatment Plan Review</h3>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 px-6 sm:px-12 md:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16">
              <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">How It Works</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="bg-gradient-to-br from-white to-[#283692]/5 rounded-3xl p-8 border-2 border-[#283692]/10 hover:shadow-xl transition-all text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-6 mx-auto">
                  <UserPlus className="w-8 h-8 text-white" />
                </div>
                <p className="text-[#7A8A9E] leading-relaxed">
                  Either you or your loved one's physician creates an account on DiaspoCare MD Connect.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-gradient-to-br from-white to-[#007FFF]/5 rounded-3xl p-8 border-2 border-[#007FFF]/10 hover:shadow-xl transition-all text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#007FFF] to-[#283692] flex items-center justify-center mb-6 mx-auto">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <p className="text-[#7A8A9E] leading-relaxed">
                  Enter patient details, diagnosis info, and specific questions to be reviewed.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-gradient-to-br from-white to-[#283692]/5 rounded-3xl p-8 border-2 border-[#283692]/10 hover:shadow-xl transition-all text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-6 mx-auto">
                  <Upload className="w-8 h-8 text-white" />
                </div>
                <p className="text-[#7A8A9E] leading-relaxed">
                  Upload imaging and test results for review by global specialists.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-gradient-to-br from-white to-[#007FFF]/5 rounded-3xl p-8 border-2 border-[#007FFF]/10 hover:shadow-xl transition-all text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#007FFF] to-[#283692] flex items-center justify-center mb-6 mx-auto">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <p className="text-[#7A8A9E] leading-relaxed">
                  Submit your eConsult request and receive expert recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#F8F9FA] to-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16">
              <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Frequently Asked Questions</span>
            </h2>
            
            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="bg-white rounded-2xl p-8 border-2 border-[#007FFF]/10 hover:border-[#007FFF]/30 transition-all shadow-lg">
                <div className="flex gap-4 items-start">
                  <Shield className="w-6 h-6 text-[#007FFF] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#007FFF] mb-3">
                      Are my loved one's medical records secure and confidential?
                    </h3>
                    <p className="text-[#7A8A9E] leading-relaxed">
                      Yes. DiaspoCare MD Connect complies with all national and international patient privacy and data security regulations.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-2xl p-8 border-2 border-[#007FFF]/10 hover:border-[#007FFF]/30 transition-all shadow-lg">
                <div className="flex gap-4 items-start">
                  <HelpCircle className="w-6 h-6 text-[#007FFF] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#007FFF] mb-3">
                      What kind of cases can I submit for review?
                    </h3>
                    <p className="text-[#7A8A9E] leading-relaxed">
                      Any case where specialist review, expert analysis, or a second opinion will benefit from DiaspoCare MD Connect!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692] to-[#007FFF] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Heart className="absolute top-10 right-20 w-32 h-32" />
            <Heart className="absolute bottom-10 left-20 w-24 h-24" />
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Get Expert Medical Opinions from Anywhere
            </h2>
            <p className="text-xl mb-10 text-white/95 max-w-3xl mx-auto">
              Connect your loved one's care team with world-class specialists for better diagnosis and treatment decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-white text-[#283692] font-bold text-lg hover:bg-white/90 transition-all hover:scale-105 shadow-xl"
              >
                Request a Consultation
                <ArrowRight className="w-6 h-6" />
              </a>
              <a 
                href="#learn-more" 
                className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all hover:scale-105"
              >
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
