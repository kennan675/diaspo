import React from 'react';
import PartnersCarousel from './PartnersCarousel';

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
            Working with 1900+ healthcare providers across Kenya, Ghana, Nigeria, and Côte d'Ivoire
          </p>
        </div>

        <PartnersCarousel />

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
