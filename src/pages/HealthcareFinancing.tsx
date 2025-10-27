import React from 'react';
import DiaspoHeader from '@/components/DiaspoHeader';
import DiaspoFooter from '@/components/DiaspoFooter';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import YouTubeVideo from '@/components/YouTubeVideo';
import { Smartphone, DollarSign, Shield, Users, CheckCircle, ArrowRight, FileText } from 'lucide-react';

const HealthcareFinancing: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <DiaspoHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692] to-[#007FFF] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
              <span className="font-semibold text-sm">📱 HEALTHCARE FINANCING APP</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Guaranteeing Quality Medication
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              At DiaspoCare we dedicate ourselves to ensuring that every healthcare dollar you send through our platform is spent as you intended and produces the best quality health outcomes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://supporter.diaspocare.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#283692] font-bold text-lg hover:bg-white/90 transition-all hover:scale-105">
                Supporter Login
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://vendor.diaspocare.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all hover:scale-105">
                Vendor Login
              </a>
            </div>
          </div>
        </section>

        {/* Zero Diversion Section */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#3A3F46] mb-6">
                We Guarantee Zero Diversion of Healthcare Remittances
              </h2>
              <p className="text-xl text-[#7A8A9E] max-w-3xl mx-auto">
                Best health outcomes per dollar sent - ensuring your funds are used exactly as intended
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 rounded-3xl p-10">
                <Shield className="w-16 h-16 text-[#007FFF] mb-6" />
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">Direct Provider Payments</h3>
                <p className="text-lg text-[#7A8A9E] leading-relaxed">
                  Funds go directly to verified healthcare providers. No intermediaries, no cash handling, no diversion. Every dollar reaches its intended destination.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#007FFF]/5 to-[#283692]/5 rounded-3xl p-10">
                <FileText className="w-16 h-16 text-[#283692] mb-6" />
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">Complete Transparency</h3>
                <p className="text-lg text-[#7A8A9E] leading-relaxed">
                  Real-time notifications, detailed reports, and full visibility into every transaction. Know exactly where your money goes and what services are provided.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-[#3A3F46] mb-12 text-center">How It Works</h2>
            <p className="text-xl text-[#7A8A9E] text-center mb-16">Four Easy Steps</p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-bold text-[#3A3F46] mb-2">Register</h3>
                <p className="text-sm text-[#7A8A9E]">Sign up as a supporter and add your beneficiaries</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-bold text-[#3A3F46] mb-2">Choose Provider</h3>
                <p className="text-sm text-[#7A8A9E]">Browse verified healthcare providers in your beneficiary's area</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-bold text-[#3A3F46] mb-2">Get Care</h3>
                <p className="text-sm text-[#7A8A9E]">Beneficiary receives treatment from the provider</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-bold text-[#3A3F46] mb-2">Pay Directly</h3>
                <p className="text-sm text-[#7A8A9E]">Approve and pay the provider directly through the app</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-[#3A3F46] mb-12 text-center">App Features</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#007FFF]/10 hover:border-[#007FFF] transition-all">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">Health Wallets</h3>
                <p className="text-[#7A8A9E] leading-relaxed mb-4">
                  Caring for loved ones from afar is usually a team effort involving several family members. The DiaspoCare family wallet is a special feature that makes this process stress free by allowing a family member to invite others as supporters of a beneficiary and to channel their funds for that beneficiary through the wallet.
                </p>
                <p className="text-[#7A8A9E] leading-relaxed">
                  The wallet permits generation of detailed reports on fund usage, providing their visibility and traceability and ensuring accountability.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#007FFF]/10 hover:border-[#007FFF] transition-all">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#007FFF] to-[#283692] flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">Djangui (Community) Wallet</h3>
                <p className="text-[#7A8A9E] leading-relaxed mb-4">
                  The Djangui wallet is designed for the needs of community groups such as faith-based, nongovernmental or donor organizations, which can participate as supporters or beneficiaries in healthcare funding.
                </p>
                <p className="text-[#7A8A9E] leading-relaxed">
                  Besides ensuring that the right beneficiaries are reached and funds accountability is guaranteed, an important value of the Djangui wallet is in the savings accrued from the elimination of the typical mundane accounting functions.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#007FFF]/10 hover:border-[#007FFF] transition-all">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">Auto-Approval</h3>
                <p className="text-[#7A8A9E] leading-relaxed">
                  Our auto-approval feature helps bridge the gap in timezone difference when supporting our loved ones. A supporter can set the auto-approval of invoices to enable his card or wallet to be charged automatically for transactions upto a certain limit for specific beneficiaries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-[#283692]/10 rounded-full mb-4">
                <span className="text-[#283692] font-semibold text-sm">HEALTHCARE FINANCING</span>
              </div>
              <h2 className="text-4xl font-extrabold text-[#3A3F46] mb-6">
                See How <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">It Works</span>
              </h2>
              <p className="text-xl text-[#7A8A9E]">Watch how we guarantee zero diversion of healthcare funds</p>
            </div>

            <YouTubeVideo 
              videoId="dAyfk6sqPcY"
              title="DiaspoCare Healthcare Financing"
              autoplay={false}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692] to-[#007FFF] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-6">Become a Supporter Today!</h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of diaspora families ensuring quality healthcare for their loved ones
            </p>
            <a href="https://supporter.diaspocare.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-white text-[#283692] font-bold text-lg hover:bg-white/90 transition-all hover:scale-105">
              Register Today
              <ArrowRight className="w-5 h-5" />
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
