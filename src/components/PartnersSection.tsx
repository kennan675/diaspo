import React from 'react';

const PARTNERS = [
  { 
    name: 'GoodLife Pharmacy', 
    description: 'Largest Pharmacy Chain in Kenya',
    logo: 'https://www.goodlife.co.ke/wp-content/uploads/2023/03/cropped-Goodlife-logo.png',
    url: 'https://www.goodlife.co.ke/'
  },
  { 
    name: 'Jubilee Health Insurance', 
    description: 'Largest Health Insurer in East Africa',
    logo: 'https://jubileeinsurance.com/ke/wp-content/uploads/sites/2/2020/12/jubilee-logo-1.png',
    url: 'https://jubileeinsurance.com/ke/'
  },
  { 
    name: 'Ecobank', 
    description: 'Pan-African Banking Partner',
    logo: 'https://ecobank.com/upload/images/ecobank-logo.svg',
    url: 'https://ecobank.com/'
  },
];

const PartnersSection: React.FC = () => {
  return (
    <section className="py-16 px-6 sm:px-12 md:px-20 bg-white border-y border-[#007FFF]/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#7A8A9E] font-semibold text-sm uppercase tracking-wide mb-4">
            Trusted Partners Across Africa
          </p>
          <h3 className="text-2xl font-bold text-[#3A3F46]">
            Our Strategic <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Partners</span>
          </h3>
          <p className="text-[#7A8A9E] mt-4">
            Working with 240+ pharmacies across Kenya, Ghana, Nigeria, and Côte d'Ivoire
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {PARTNERS.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white border-2 border-[#007FFF]/10 hover:border-[#007FFF] hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="w-full h-24 mb-4 flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform"
                  onError={(e) => {
                    // Fallback if logo fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `<div class="w-20 h-20 rounded-full bg-gradient-to-br from-[#283692]/20 to-[#007FFF]/20 flex items-center justify-center"><span class="text-3xl font-bold text-[#283692]">${partner.name[0]}</span></div>`;
                  }}
                />
              </div>
              <div className="text-center">
                <div className="font-bold text-[#3A3F46] text-base mb-2">{partner.name}</div>
                <div className="text-sm text-[#7A8A9E]">{partner.description}</div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#7A8A9E] text-sm">
            Plus partnerships with major hospitals, clinics, and healthcare providers across East and West Africa
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
