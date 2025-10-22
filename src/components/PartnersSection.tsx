import React from 'react';

const PARTNERS = [
  { name: 'WHO', description: 'World Health Organization Partner' },
  { name: 'UNICEF', description: 'Global Health Initiative' },
  { name: 'Red Cross', description: 'Humanitarian Partner' },
  { name: 'Gates Foundation', description: 'Healthcare Innovation' },
  { name: 'Doctors Without Borders', description: 'Medical Excellence' },
  { name: 'USAID', description: 'Development Partner' },
];

const PartnersSection: React.FC = () => {
  return (
    <section className="py-16 px-6 sm:px-12 md:px-20 bg-white border-y border-[#007FFF]/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#7A8A9E] font-semibold text-sm uppercase tracking-wide mb-4">
            Trusted by Leading Organizations
          </p>
          <h3 className="text-2xl font-bold text-[#3A3F46]">
            Our Global <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Partners</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {PARTNERS.map((partner, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center justify-center p-6 rounded-xl hover:bg-gradient-to-br hover:from-[#283692]/5 hover:to-[#007FFF]/5 transition-all cursor-pointer"
            >
              <div className="w-16 h-16 mb-3 rounded-full bg-gradient-to-br from-[#283692]/20 to-[#007FFF]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-[#283692]">{partner.name[0]}</span>
              </div>
              <div className="text-center">
                <div className="font-bold text-[#3A3F46] text-sm mb-1">{partner.name}</div>
                <div className="text-xs text-[#7A8A9E]">{partner.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
