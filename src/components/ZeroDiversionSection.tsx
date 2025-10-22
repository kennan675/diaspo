import React from 'react';
import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';

const ZeroDiversionSection: React.FC = () => {
  return (
    <section id="solutions" className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white rounded-full border border-[#007FFF]/20 shadow-sm mb-4">
            <span className="text-[#283692] font-semibold text-sm">🛡️ Our Guarantee</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3A3F46] mb-6">
            Guaranteeing <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Zero Diversion</span> of Healthcare Funds
          </h2>
          <p className="text-xl text-[#7A8A9E] max-w-3xl mx-auto">
            Track every dollar you send for your loved ones' medical care. Our transparent system ensures funds are used only for their intended purpose.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#3A3F46] mb-3">100% Transparent</h3>
            <p className="text-[#7A8A9E]">
              Real-time tracking of all transactions. See exactly where your money goes, every time.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-6">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#3A3F46] mb-3">Direct Payments</h3>
            <p className="text-[#7A8A9E]">
              Funds go directly to verified healthcare providers, eliminating intermediaries.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#3A3F46] mb-3">Full Visibility</h3>
            <p className="text-[#7A8A9E]">
              Monitor medication purchases, appointments, and healthcare services in real-time.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#3A3F46] mb-3">Verified Providers</h3>
            <p className="text-[#7A8A9E]">
              All pharmacists and clinicians are thoroughly vetted and certified professionals.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <blockquote className="text-2xl font-semibold text-[#283692] italic max-w-3xl mx-auto">
            "I am happy to finally track the money I send home for my mother's medication"
          </blockquote>
          <p className="text-[#7A8A9E] mt-2">- DiaspoCare Supporter</p>
        </div>
      </div>
    </section>
  );
};

export default ZeroDiversionSection;
