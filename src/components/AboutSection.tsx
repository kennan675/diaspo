import React from 'react';
import { Target, Eye, BookOpen, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 sm:px-12 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#283692]/10 to-[#007FFF]/10 rounded-full mb-4">
            <span className="text-[#283692] font-semibold text-sm">📖 About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3A3F46] mb-6">
            Our <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Story</span>
          </h2>
        </div>

        {/* Vision and Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-[#283692] to-[#007FFF] rounded-3xl p-10 text-white">
            <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-xl text-white/90 leading-relaxed">
              To increase access to quality affordable medication and health care services through technology and advocacy.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#007FFF] to-[#283692] rounded-3xl p-10 text-white">
            <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-xl text-white/90 leading-relaxed">
              To support at least 20 million Africans currently excluded from the health care system to have access to affordable quality medicines and health services through DiaspoCare by 2040.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 rounded-3xl p-12 mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-[#3A3F46]">Our Story</h3>
          </div>
          
          <div className="space-y-6 text-lg text-[#7A8A9E] leading-relaxed">
            <p>
              <strong className="text-[#283692]">DiaspoCare, founded in 2020</strong>, is the brainchild of a group of Africans living in the United States who are concerned about their powerlessness over the persistent diversion of the funds they sent back home for health care of loved ones and about the associated dire consequences, particularly for chronic disease sufferers.
            </p>
            
            <p>
              The lack of access to quality medication and healthcare services was the other core reason DiaspoCare was founded. This is a major challenge in Africa, where counterfeit medicines permeate the supply chain and patients incur huge costs in importing rare medication.
            </p>
            
            <p>
              Africans living in the diaspora as well as the ones living away from their loved ones, have the moral obligation to support and care for them. How? By paying for their loved ones' medical care. The DiaspoCare team understands that <strong className="text-[#283692]">good health is essential to live a high quality life</strong>; and peace of mind is a necessity for anyone caring for their family.
            </p>
          </div>
        </div>

        {/* Operating Countries */}
        <div className="bg-white rounded-3xl p-12 mb-16 shadow-xl border border-[#007FFF]/10">
          <h3 className="text-3xl font-bold text-[#3A3F46] mb-8 text-center">Where We Operate</h3>
          <p className="text-lg text-[#7A8A9E] text-center mb-8 max-w-2xl mx-auto">
            DiaspoCare currently operates in 4 countries, bridging healthcare gaps and connecting diaspora families with quality care.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5">
              <div className="text-5xl mb-3">🇰🇪</div>
              <h4 className="font-bold text-[#3A3F46] text-xl">Kenya</h4>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5">
              <div className="text-5xl mb-3">🇺🇬</div>
              <h4 className="font-bold text-[#3A3F46] text-xl">Uganda</h4>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5">
              <div className="text-5xl mb-3">🇬🇭</div>
              <h4 className="font-bold text-[#3A3F46] text-xl">Ghana</h4>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5">
              <div className="text-5xl mb-3">🇺🇸</div>
              <h4 className="font-bold text-[#3A3F46] text-xl">USA</h4>
            </div>
          </div>
        </div>

        {/* How We Deliver */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-[#3A3F46] mb-6">How DiaspoCare Delivers on its Promises</h3>
          <p className="text-lg text-[#7A8A9E] max-w-3xl mx-auto mb-12">
            Partnerships are a crucial pillar in DiaspoCare's strategy. Led by the commitment to ensure our clients receive holistic and innovative medical care, DiaspoCare's partnership network is driven by the nature of DiaspoCare's work, the environment of its operations, and its health care cost-reduction goals.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white shadow-lg border border-[#007FFF]/10">
              <Users className="w-12 h-12 text-[#283692] mx-auto mb-4" />
              <h4 className="font-bold text-[#3A3F46] mb-2">Clinicians & Healthcare Specialists</h4>
              <p className="text-sm text-[#7A8A9E]">Expert medical professionals</p>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-lg border border-[#007FFF]/10">
              <Users className="w-12 h-12 text-[#283692] mx-auto mb-4" />
              <h4 className="font-bold text-[#3A3F46] mb-2">Pharmacists</h4>
              <p className="text-sm text-[#7A8A9E]">Verified medication providers</p>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-lg border border-[#007FFF]/10">
              <Users className="w-12 h-12 text-[#283692] mx-auto mb-4" />
              <h4 className="font-bold text-[#3A3F46] mb-2">Insurance Companies</h4>
              <p className="text-sm text-[#7A8A9E]">Coverage partners</p>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-lg border border-[#007FFF]/10">
              <Users className="w-12 h-12 text-[#283692] mx-auto mb-4" />
              <h4 className="font-bold text-[#3A3F46] mb-2">Communities</h4>
              <p className="text-sm text-[#7A8A9E]">Diaspora and local support</p>
            </div>
          </div>
        </div>

        {/* Our Solutions */}
        <div className="bg-gradient-to-br from-[#283692] to-[#007FFF] rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-6 text-center">Effective & Seamless Healthcare Solutions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
              <p className="text-lg">High quality and standard care</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
              <p className="text-lg">Affordable and cost-effective</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
              <p className="text-lg">Built for Africans to address core health issues</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
              <p className="text-lg">Include uninsured or under-insured populations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
