import React from 'react';
import { Users, Heart, Stethoscope, Building2 } from 'lucide-react';

const WhoUsesSection: React.FC = () => {
  return (
    <section className="py-20 px-6 sm:px-12 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3A3F46] mb-6">
            Who Uses <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">DiaspoCare</span>
          </h2>
          <p className="text-xl text-[#7A8A9E] max-w-3xl mx-auto">
            Connecting families, healthcare providers, and communities across borders
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#3A3F46] mb-3">Diaspora Families</h3>
            <p className="text-[#7A8A9E]">
              Africans living abroad who want to support their loved ones' healthcare back home
            </p>
          </div>

          <div className="text-center group">
            <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Heart className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#3A3F46] mb-3">Beneficiaries</h3>
            <p className="text-[#7A8A9E]">
              Loved ones receiving quality healthcare and medication through DiaspoCare
            </p>
          </div>

          <div className="text-center group">
            <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Stethoscope className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#3A3F46] mb-3">Healthcare Providers</h3>
            <p className="text-[#7A8A9E]">
              Verified clinicians and pharmacists delivering quality care to our community
            </p>
          </div>

          <div className="text-center group">
            <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Building2 className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#3A3F46] mb-3">Organizations</h3>
            <p className="text-[#7A8A9E]">
              Charitable organizations and foundations supporting healthcare access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoUsesSection;
