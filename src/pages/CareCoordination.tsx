import React from 'react';
import DiaspoHeader from '@/components/DiaspoHeader';
import DiaspoFooter from '@/components/DiaspoFooter';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import YouTubeVideo from '@/components/YouTubeVideo';
import { Activity, HeartPulse, Eye, LifeBuoy, Phone, Users, FileText, Heart, Wallet, CheckCircle, ArrowRight } from 'lucide-react';

const CareCoordination: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <DiaspoHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692] to-[#007FFF] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Care Coordination</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                A holistic approach to healthcare that puts your loved ones at the center of coordinated, comprehensive care
              </p>
            </div>
          </div>
        </section>

        {/* Video Section - FIRST */}
        <section className="py-16 px-6 sm:px-12 md:px-20 bg-gradient-to-b from-white to-[#283692]/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-block px-4 py-2 bg-[#283692]/10 rounded-full mb-4">
                <span className="text-[#283692] font-semibold text-sm">🎥 HOW IT WORKS</span>
              </div>
              <h2 className="text-4xl font-extrabold text-[#3A3F46] mb-4">
                Care Coordination <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">in Action</span>
              </h2>
              <p className="text-xl text-[#7A8A9E]">See how our care coordination model works for families</p>
            </div>

            <YouTubeVideo 
              videoId="dAyfk6sqPcY"
              title="DiaspoCare Care Coordination"
              autoplay={false}
            />
          </div>
        </section>

        {/* Whole Patient Care Section */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-[#3A3F46] mb-6">
                Whole Patient Care <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Model</span>
              </h2>
              <p className="text-xl text-[#7A8A9E] max-w-3xl mx-auto">
                Our care coordination model consists of four interconnected phases
              </p>
            </div>

            <div className="space-y-12">
              {/* Assessment */}
              <div className="bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 rounded-3xl p-12">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center flex-shrink-0">
                    <Activity className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-[#283692] mb-4">1. Assessment</h3>
                    <p className="text-lg text-[#7A8A9E] mb-6">
                      Comprehensive evaluation of your loved one's health status
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#007FFF] flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-[#3A3F46] mb-1">Personal Health History</h4>
                          <p className="text-sm text-[#7A8A9E]">Complete medical history documentation</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#007FFF] flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-[#3A3F46] mb-1">Family Health History</h4>
                          <p className="text-sm text-[#7A8A9E]">Genetic factors evaluation</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#007FFF] flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-[#3A3F46] mb-1">Diagnostic Testing</h4>
                          <p className="text-sm text-[#7A8A9E]">Comprehensive laboratory screenings</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#007FFF] flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-[#3A3F46] mb-1">Prescription Reconciliation</h4>
                          <p className="text-sm text-[#7A8A9E]">Review current medications</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Treatment */}
              <div className="bg-gradient-to-br from-[#007FFF]/5 to-[#283692]/5 rounded-3xl p-12">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#007FFF] to-[#283692] flex items-center justify-center flex-shrink-0">
                    <HeartPulse className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-[#007FFF] mb-4">2. Treatment</h3>
                    <p className="text-lg text-[#7A8A9E] mb-6">
                      Personalized treatment plans with quality care options
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#283692] flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-[#3A3F46] mb-1">Affordable Medications</h4>
                          <p className="text-sm text-[#7A8A9E]">Quality, cost-effective drugs</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#283692] flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-[#3A3F46] mb-1">Physical Therapy</h4>
                          <p className="text-sm text-[#7A8A9E]">Rehabilitation programs</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#283692] flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-[#3A3F46] mb-1">Lifestyle Coaching</h4>
                          <p className="text-sm text-[#7A8A9E]">Wellness guidance</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#283692] flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-[#3A3F46] mb-1">In-patient & Remote Care</h4>
                          <p className="text-sm text-[#7A8A9E]">Facility and home care</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Monitoring */}
              <div className="bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 rounded-3xl p-12">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center flex-shrink-0">
                    <Eye className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-[#283692] mb-4">3. Monitoring</h3>
                    <p className="text-lg text-[#7A8A9E] mb-6">
                      Continuous health progress tracking
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#007FFF] flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-[#3A3F46] mb-1">Video & Voice Visits</h4>
                          <p className="text-sm text-[#7A8A9E]">Telehealth consultations</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#007FFF] flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-[#3A3F46] mb-1">Personal Medical Devices</h4>
                          <p className="text-sm text-[#7A8A9E]">Remote health monitoring</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#007FFF] flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-[#3A3F46] mb-1">Treatment Compliance</h4>
                          <p className="text-sm text-[#7A8A9E]">Ensuring medications followed</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#007FFF] flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-[#3A3F46] mb-1">Gaps in Care Closure</h4>
                          <p className="text-sm text-[#7A8A9E]">Addressing missed opportunities</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support */}
              <div className="bg-gradient-to-br from-[#007FFF]/5 to-[#283692]/5 rounded-3xl p-12">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#007FFF] to-[#283692] flex items-center justify-center flex-shrink-0">
                    <LifeBuoy className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-[#007FFF] mb-4">4. Support</h3>
                    <p className="text-lg text-[#7A8A9E] mb-6">
                      Comprehensive support services
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#283692] flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-[#3A3F46] mb-1">Appointment Scheduling</h4>
                          <p className="text-sm text-[#7A8A9E]">Easy healthcare visit booking</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#283692] flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-[#3A3F46] mb-1">Transportation Assistance</h4>
                          <p className="text-sm text-[#7A8A9E]">Help getting to appointments</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#283692] flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-[#3A3F46] mb-1">Financial Platform</h4>
                          <p className="text-sm text-[#7A8A9E]">Transparent payment system</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#283692] flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-[#3A3F46] mb-1">Refill Management</h4>
                          <p className="text-sm text-[#7A8A9E]">Automated prescription delivery</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Intake Process */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-[#3A3F46] mb-6">
                Patient Intake <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Process</span>
              </h2>
              <p className="text-xl text-[#7A8A9E] max-w-3xl mx-auto">
                How family members initiate care coordination for their loved ones
              </p>
            </div>

            {/* Process Flow */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] text-white font-bold text-lg mb-4">1</div>
                <Users className="w-10 h-10 text-[#283692] mb-3" />
                <h3 className="font-bold text-[#3A3F46] mb-2">Family Members Initiate</h3>
                <p className="text-sm text-[#7A8A9E]">"I'm worried about my loved one back home"</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] text-white font-bold text-lg mb-4">2</div>
                <Phone className="w-10 h-10 text-[#007FFF] mb-3" />
                <h3 className="font-bold text-[#3A3F46] mb-2">Call Center / Mobile App</h3>
                <p className="text-sm text-[#7A8A9E]">Multiple ways to reach care coordinators</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] text-white font-bold text-lg mb-4">3</div>
                <FileText className="w-10 h-10 text-[#283692] mb-3" />
                <h3 className="font-bold text-[#3A3F46] mb-2">Needs Assessment</h3>
                <p className="text-sm text-[#7A8A9E]">Understanding care requirements</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] text-white font-bold text-lg mb-4">4</div>
                <Heart className="w-10 h-10 text-[#007FFF] mb-3" />
                <h3 className="font-bold text-[#3A3F46] mb-2">Health Assessment</h3>
                <p className="text-sm text-[#7A8A9E]">Evaluation by nurse/clinical officer</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] text-white font-bold text-lg mb-4">5</div>
                <FileText className="w-10 h-10 text-[#283692] mb-3" />
                <h3 className="font-bold text-[#3A3F46] mb-2">Personalized Care Plan</h3>
                <p className="text-sm text-[#7A8A9E]">Health history, medications, appointments, conditions, care activities</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] text-white font-bold text-lg mb-4">6</div>
                <Wallet className="w-10 h-10 text-[#007FFF] mb-3" />
                <h3 className="font-bold text-[#3A3F46] mb-2">Payment & Health Wallet</h3>
                <p className="text-sm text-[#7A8A9E]">Secure payment and digital health wallet</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692] to-[#007FFF] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-6">Ready to Start Care Coordination?</h2>
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
