import React from 'react';

const TRUST_BADGES = [
  { icon: '🔒', title: 'HIPAA Compliant', description: 'Your data is secure and private' },
  { icon: '✓', title: 'Verified Providers', description: 'All healthcare professionals vetted' },
  { icon: '🌍', title: 'Global Network', description: 'Coverage in 15+ countries' },
  { icon: '⚡', title: 'Fast Response', description: '24/7 support availability' },
  { icon: '💳', title: 'Secure Payments', description: 'Bank-level encryption' },
  { icon: '📱', title: 'Easy Access', description: 'Mobile-friendly platform' },
];

const TrustSection: React.FC = () => {
  return (
    <section className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-b from-white to-[#283692]/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-[#283692]/10 rounded-full mb-4">
            <span className="text-[#283692] font-semibold text-sm">TRUST & SECURITY</span>
          </div>
          <h2 className="text-4xl font-extrabold text-[#3A3F46] mb-4">
            Your Trust is Our <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Priority</span>
          </h2>
          <p className="text-xl text-[#7A8A9E] max-w-3xl mx-auto">
            We maintain the highest standards of security, privacy, and quality care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_BADGES.map((badge, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-white border-2 border-[#007FFF]/10 hover:border-[#007FFF]/30 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,127,255,0.15)] transition-all hover:-translate-y-1"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{badge.icon}</div>
              <h4 className="text-xl font-bold text-[#3A3F46] mb-2">{badge.title}</h4>
              <p className="text-[#7A8A9E]">{badge.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 p-6 rounded-2xl bg-white border border-[#007FFF]/20 shadow-lg">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] border-2 border-white flex items-center justify-center text-white font-bold">
                  {i}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl font-bold text-[#283692]">4.9/5</span>
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-sm text-[#7A8A9E]">Rated by 10,000+ families</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
