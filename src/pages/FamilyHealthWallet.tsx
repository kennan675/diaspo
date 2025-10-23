import React from 'react';
import DiaspoHeader from '@/components/DiaspoHeader';
import DiaspoFooter from '@/components/DiaspoFooter';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import { Wallet, Clock, Shield, Users, CheckCircle, ArrowRight } from 'lucide-react';

const FamilyHealthWallet: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <DiaspoHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692] to-[#007FFF] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
              <span className="font-semibold text-sm">💳 FAMILY HEALTH WALLET</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Family Health Wallets
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ensure your loved ones get immediate medical care, even when you're unreachable
            </p>
          </div>
        </section>

        {/* What is Section */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#3A3F46] mb-6">
                  What is a Family Health Wallet?
                </h2>
                <p className="text-lg text-[#7A8A9E] leading-relaxed mb-6">
                  Family health wallet enable a supporter to deposit funds in advance to be used for their beneficiaries' medical care.
                </p>
                <p className="text-lg text-[#7A8A9E] leading-relaxed mb-6">
                  When you live away from your loved ones, they may need urgent medical care at a time you are unreachable due to unavoidable engagements or differences in time zones.
                </p>
                <p className="text-lg text-[#7A8A9E] leading-relaxed">
                  With a family health wallet and auto-approved payments, they can get the medical attention they require exactly when they need it, even without your approval.
                </p>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-[#283692]/10 to-[#007FFF]/10 rounded-3xl p-12">
                  <Wallet className="w-24 h-24 text-[#007FFF] mx-auto mb-6" />
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-[#007FFF] flex-shrink-0" />
                      <span className="text-[#3A3F46] font-medium">Pre-funded healthcare account</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-[#007FFF] flex-shrink-0" />
                      <span className="text-[#3A3F46] font-medium">Auto-approved payments</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-[#007FFF] flex-shrink-0" />
                      <span className="text-[#3A3F46] font-medium">24/7 emergency access</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-[#007FFF] flex-shrink-0" />
                      <span className="text-[#3A3F46] font-medium">Complete transparency</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why You Should Have Section */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-[#3A3F46] mb-12 text-center">
              Why You Should Have a Family Health Wallet
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">Immediate Access</h3>
                <p className="text-[#7A8A9E] leading-relaxed">
                  No delays waiting for approval. Your loved ones can access funds instantly for urgent medical needs, regardless of time zones or your availability.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#007FFF] to-[#283692] flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">Zero Diversion</h3>
                <p className="text-[#7A8A9E] leading-relaxed">
                  Funds are guaranteed to be used only for healthcare purposes. Direct payment to verified healthcare providers ensures accountability.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">Family Collaboration</h3>
                <p className="text-[#7A8A9E] leading-relaxed">
                  Multiple family members can contribute to the same wallet. Track contributions and expenses together with complete visibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-[#3A3F46] mb-12 text-center">How It Works</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#3A3F46] mb-3">Create Your Wallet</h3>
                  <p className="text-lg text-[#7A8A9E]">
                    Register as a supporter and set up a family health wallet for your beneficiaries.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#3A3F46] mb-3">Deposit Funds</h3>
                  <p className="text-lg text-[#7A8A9E]">
                    Add funds to the wallet in advance. Set spending limits and auto-approval rules.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#3A3F46] mb-3">Beneficiaries Get Care</h3>
                  <p className="text-lg text-[#7A8A9E]">
                    Your loved ones visit any verified healthcare provider and receive treatment immediately.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#3A3F46] mb-3">Track Everything</h3>
                  <p className="text-lg text-[#7A8A9E]">
                    Receive instant notifications and view detailed reports of all transactions and healthcare services provided.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692] to-[#007FFF] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-6">Ready to Set Up Your Family Health Wallet?</h2>
            <p className="text-xl mb-8 text-white/90">
              Give your loved ones the gift of immediate access to quality healthcare
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#app-download" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#283692] font-bold text-lg hover:bg-white/90 transition-all hover:scale-105">
                Get Started Today
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

export default FamilyHealthWallet;
