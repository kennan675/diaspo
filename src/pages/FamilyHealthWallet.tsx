import React from 'react';
import DiaspoHeader from '@/components/DiaspoHeader';
import DiaspoFooter from '@/components/DiaspoFooter';
import BackToTop from '@/components/BackToTop';
import { Wallet, DollarSign, Settings, Users2, Eye, Clock, ArrowRight, Sparkles, Star } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const FamilyHealthWallet: React.FC = () => {
  const scope = React.useRef<HTMLDivElement | null>(null);
  useScrollReveal(scope);

  return (
    <div ref={scope} className="min-h-screen bg-white">
      <DiaspoHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section
          className="py-24 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-white to-[#007FFF]/5 relative overflow-hidden"
          data-animate="fade-up"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#007FFF]/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#283692]/5 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#283692]/10 to-[#007FFF]/10 rounded-full mb-6 border border-[#007FFF]/20">
              <Wallet className="w-5 h-5 text-[#007FFF]" />
              <span className="text-[#283692] font-bold text-sm">FAMILY HEALTH WALLET</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#3A3F46] mb-8 leading-tight">
              What is a <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Family Health Wallet?</span>
            </h1>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-[#7A8A9E] leading-relaxed mb-10">
              <p className="text-xl">
                Family health wallet enable a supporter to deposit funds in advance to be used for their beneficiaries' medical care.
              </p>
              <p>
                When you live away from your loved ones, they may need urgent medical care at a time you are unreachable due to unavoidable engagements or differences in time zones.
              </p>
              <p>
                With a family health wallet and auto-approved payments, they can get the medical attention they require exactly when they need it, even without your approval.
              </p>
            </div>
            
            <a 
              href="#create-wallet" 
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#283692] to-[#007FFF] text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              CREATE A FAMILY HEALTH WALLET
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </section>


        {/* Why You Should Have Section */}
        <section className="py-24 px-6 sm:px-12 md:px-20 bg-white" data-animate="fade-up">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#3A3F46] mb-16 text-center">
              Why You Should Have a <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Family Health Wallet</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Set Spend Limits */}
              <div className="group bg-gradient-to-br from-white to-[#283692]/5 rounded-3xl p-8 border-2 border-[#283692]/10 hover:border-[#283692] hover:shadow-2xl transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">Set Spend Limits</h3>
                <p className="text-[#7A8A9E] leading-relaxed">
                  As a supporter, you can set a spend limit for each beneficiary per transaction.
                </p>
              </div>

              {/* Auto Approve Transactions */}
              <div className="group bg-gradient-to-br from-white to-[#007FFF]/5 rounded-3xl p-8 border-2 border-[#007FFF]/10 hover:border-[#007FFF] hover:shadow-2xl transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#007FFF] to-[#283692] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">Auto Approve Transactions</h3>
                <p className="text-[#7A8A9E] leading-relaxed">
                  With auto approval, you can automate approval of transactions per beneficiary for amounts equal or below their spend limit.
                </p>
              </div>

              {/* Choose Your Preferred Currency */}
              <div className="group bg-gradient-to-br from-white to-[#283692]/5 rounded-3xl p-8 border-2 border-[#283692]/10 hover:border-[#283692] hover:shadow-2xl transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">Choose Your Preferred Currency</h3>
                <p className="text-[#7A8A9E] leading-relaxed">
                  You can select the currency of the wallet at the time of creation (this cannot be changed after the wallet creation is complete).
                </p>
              </div>

              {/* Invite others to Contribute */}
              <div className="group bg-gradient-to-br from-white to-[#007FFF]/5 rounded-3xl p-8 border-2 border-[#007FFF]/10 hover:border-[#007FFF] hover:shadow-2xl transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#007FFF] to-[#283692] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">Invite others to Contribute</h3>
                <p className="text-[#7A8A9E] leading-relaxed">
                  As a supporter, you can invite other family members and friends to contribute to the wallet directly (they don't have to sign up to contribute).
                </p>
              </div>

              {/* Transparency and Accountability */}
              <div className="group bg-gradient-to-br from-white to-[#283692]/5 rounded-3xl p-8 border-2 border-[#283692]/10 hover:border-[#283692] hover:shadow-2xl transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">Transparency and Accountability</h3>
                <p className="text-[#7A8A9E] leading-relaxed">
                  You will get full visibility of where all the funds in the wallet originated and how they are used.
                </p>
              </div>

              {/* One-time Wallets */}
              <div className="group bg-gradient-to-br from-white to-[#007FFF]/5 rounded-3xl p-8 border-2 border-[#007FFF]/10 hover:border-[#007FFF] hover:shadow-2xl transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#007FFF] to-[#283692] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">One-time Wallets</h3>
                <p className="text-[#7A8A9E] leading-relaxed">
                  You can create a temporary wallet (with an expiry date) to allow friends and family to contribute towards a specific use e.g. to raise funds for a loved one who is undergoing an operation.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Bottom CTA Section */}
        <section
          className="py-24 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#F8F9FA] to-white relative overflow-hidden"
          data-animate="fade-up"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#007FFF]/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#283692]/5 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="mb-8">
              <Star className="w-16 h-16 text-[#007FFF] mx-auto mb-6" />
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#3A3F46] mb-8 leading-tight">
              Gone are the days when you have to call and send text messages to friends and family to help you raise funds for your loved one.
            </h2>
            
            <p className="text-xl text-[#7A8A9E] mb-12 max-w-3xl mx-auto">
              With a simple contribution link, DiaspoCare enables you to get the monetary support you need to care for your loved one's health.
            </p>
            
            <a 
              href="#create-wallet" 
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#283692] to-[#007FFF] text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              CREATE A FAMILY HEALTH WALLET
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </section>
      </main>
      <DiaspoFooter />
      <BackToTop />
    </div>
  );
};

export default FamilyHealthWallet;
