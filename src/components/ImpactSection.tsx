import React from 'react';
import { TrendingUp, Users, Globe, Heart } from 'lucide-react';

const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="py-20 px-6 sm:px-12 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#283692]/10 to-[#007FFF]/10 rounded-full mb-4">
            <span className="text-[#283692] font-semibold text-sm">📊 Our Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3A3F46] mb-6">
            Making a <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Real Difference</span>
          </h2>
          <p className="text-xl text-[#7A8A9E] max-w-3xl mx-auto">
            Since DiaspoCare was founded in 2020, we have taken up the challenge to deliver a solution that seamlessly connects Africans living away from home with their loved ones' healthcare providers.
          </p>
        </div>

        {/* By the Numbers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 hover:shadow-lg transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-5xl font-extrabold text-[#283692] mb-2">50K+</div>
            <div className="text-[#7A8A9E] font-medium">Families Served</div>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 hover:shadow-lg transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="text-5xl font-extrabold text-[#283692] mb-2">2K+</div>
            <div className="text-[#7A8A9E] font-medium">Healthcare Providers</div>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 hover:shadow-lg transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <div className="text-5xl font-extrabold text-[#283692] mb-2">15+</div>
            <div className="text-[#7A8A9E] font-medium">Countries</div>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 hover:shadow-lg transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="text-5xl font-extrabold text-[#283692] mb-2">100%</div>
            <div className="text-[#7A8A9E] font-medium">Transparent Tracking</div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-[#283692] to-[#007FFF] rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Now, supporters can easily pay for their loved ones' medical care from anywhere in the world, and their beneficiaries can easily access quality healthcare from clinics, hospitals and pharmacies near them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
