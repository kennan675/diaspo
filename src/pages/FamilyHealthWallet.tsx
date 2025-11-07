import React from 'react';
import { Wallet, DollarSign, Settings, Users2, Eye, Clock, ArrowRight, Sparkles, Star } from 'lucide-react';
import PageLayout from '@/components/layouts/PageLayout';

const FamilyHealthWallet: React.FC = () => {
  return (
    <PageLayout>
      <section
        className="relative overflow-hidden bg-gradient-to-br from-white to-[#007FFF]/5 py-24 px-6 sm:px-12 md:px-20"
        data-animate="fade-up"
      >
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#007FFF]/5 filter blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#283692]/5 filter blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#007FFF]/20 bg-gradient-to-r from-[#283692]/10 to-[#007FFF]/10 px-5 py-2.5">
            <Wallet className="h-5 w-5 text-[#007FFF]" />
            <span className="text-sm font-bold text-[#283692]">FAMILY HEALTH WALLET</span>
          </div>

          <h1 className="mb-8 text-5xl font-extrabold leading-tight text-[#3A3F46] sm:text-6xl lg:text-7xl">
            What is a <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Family Health Wallet?</span>
          </h1>

          <div className="mx-auto mb-10 max-w-4xl space-y-6 text-lg leading-relaxed text-[#7A8A9E]">
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
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#283692] to-[#007FFF] px-10 py-5 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
          >
            CREATE A FAMILY HEALTH WALLET
            <ArrowRight className="h-6 w-6" />
          </a>
        </div>
      </section>

      <section className="bg-white py-24 px-6 sm:px-12 md:px-20" data-animate="fade-up">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center text-4xl font-extrabold text-[#3A3F46] sm:text-5xl">
            Why You Should Have a <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Family Health Wallet</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-3xl border-2 border-[#283692]/10 bg-gradient-to-br from-white to-[#283692]/5 p-8 transition-all hover:border-[#283692] hover:shadow-2xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#283692] to-[#007FFF] transition-transform group-hover:scale-110">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#3A3F46]">Set Spend Limits</h3>
              <p className="leading-relaxed text-[#7A8A9E]">
                As a supporter, you can set a spend limit for each beneficiary per transaction.
              </p>
            </div>

            <div className="group rounded-3xl border-2 border-[#007FFF]/10 bg-gradient-to-br from-white to-[#007FFF]/5 p-8 transition-all hover:border-[#007FFF] hover:shadow-2xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#007FFF] to-[#283692] transition-transform group-hover:scale-110">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#3A3F46]">Auto Approve Transactions</h3>
              <p className="leading-relaxed text-[#7A8A9E]">
                With auto approval, you can automate approval of transactions per beneficiary for amounts equal or below their spend limit.
              </p>
            </div>

            <div className="group rounded-3xl border-2 border-[#283692]/10 bg-gradient-to-br from-white to-[#283692]/5 p-8 transition-all hover:border-[#283692] hover:shadow-2xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#283692] to-[#007FFF] transition-transform group-hover:scale-110">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#3A3F46]">Choose Your Preferred Currency</h3>
              <p className="leading-relaxed text-[#7A8A9E]">
                You can select the currency of the wallet at the time of creation (this cannot be changed after the wallet creation is complete).
              </p>
            </div>

            <div className="group rounded-3xl border-2 border-[#007FFF]/10 bg-gradient-to-br from-white to-[#007FFF]/5 p-8 transition-all hover:border-[#007FFF] hover:shadow-2xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#007FFF] to-[#283692] transition-transform group-hover:scale-110">
                <Users2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#3A3F46]">Invite others to Contribute</h3>
              <p className="leading-relaxed text-[#7A8A9E]">
                As a supporter, you can invite other family members and friends to contribute to the wallet directly (they don't have to sign up to contribute).
              </p>
            </div>

            <div className="group rounded-3xl border-2 border-[#283692]/10 bg-gradient-to-br from-white to-[#283692]/5 p-8 transition-all hover:border-[#283692] hover:shadow-2xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#283692] to-[#007FFF] transition-transform group-hover:scale-110">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#3A3F46]">Transparency and Accountability</h3>
              <p className="leading-relaxed text-[#7A8A9E]">
                You will get full visibility of where all the funds in the wallet originated and how they are used.
              </p>
            </div>

            <div className="group rounded-3xl border-2 border-[#007FFF]/10 bg-gradient-to-br from-white to-[#007FFF]/5 p-8 transition-all hover:border-[#007FFF] hover:shadow-2xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#007FFF] to-[#283692] transition-transform group-hover:scale-110">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#3A3F46]">One-time Wallets</h3>
              <p className="leading-relaxed text-[#7A8A9E]">
                You can create a temporary wallet (with an expiry date) to allow friends and family to contribute towards a specific use e.g. to raise funds for a loved one who is undergoing an operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#F8F9FA] to-white py-24 px-6 sm:px-12 md:px-20"
        data-animate="fade-up"
      >
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-[#007FFF]/5 filter blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-[#283692]/5 filter blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-8">
            <Star className="mx-auto mb-6 h-16 w-16 text-[#007FFF]" />
          </div>

          <h2 className="mb-8 text-4xl font-extrabold leading-tight text-[#3A3F46] sm:text-5xl lg:text-6xl">
            Gone are the days when you have to call and send text messages to friends and family to help you raise funds for your loved one.
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-xl text-[#7A8A9E]">
            With a simple contribution link, DiaspoCare enables you to get the monetary support you need to care for your loved one's health.
          </p>

          <a
            href="#create-wallet"
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#283692] to-[#007FFF] px-10 py-5 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
          >
            CREATE A FAMILY HEALTH WALLET
            <ArrowRight className="h-6 w-6" />
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default FamilyHealthWallet;
