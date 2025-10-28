import React from 'react';

const partners = [
  { name: 'CP Kenya', logo: 'https://logo.clearbit.com/cpkenya.com' },
  { name: 'Ecobank', logo: 'https://seeklogo.com/images/E/ecobank-logo-7D8B8E0F7E-seeklogo.com.png' },
  { name: 'Equity Bank', logo: 'https://logo.clearbit.com/equitybankgroup.com' },
  { name: 'Equity Afia', logo: 'https://equityafya.co.ke/wp-content/uploads/2022/02/Equity-Afya-Logo.png' },
  { name: 'FRETT Technologies', logo: 'https://logo.clearbit.com/frett.com' },
  { name: 'GoodLife Pharmacy', logo: 'https://logo.clearbit.com/goodlife.co.ke' },
  { name: 'HealthX', logo: 'https://logo.clearbit.com/healthx.africa' },
  { name: 'Kenya Pharmaceutical Association', logo: 'https://logo.clearbit.com/kpa.or.ke' },
  { name: 'NephroMed', logo: 'https://logo.clearbit.com/nephromed.co.ke' },
  { name: 'Paystack', logo: 'https://logo.clearbit.com/paystack.com' },
  { name: 'SASAdoctor', logo: 'https://logo.clearbit.com/sasadoctor.com' },
  { name: 'SPROXIL', logo: 'https://logo.clearbit.com/sproxil.com' },
  { name: 'tingg by Cellulant', logo: 'https://logo.clearbit.com/tingg.africa' },
  { name: 'BYON8', logo: 'https://logo.clearbit.com/byon8.com' },
  { name: 'Bliss Healthcare', logo: 'https://logo.clearbit.com/blisshealthcare.co.ke' },
  { name: 'Dovey Pharma', logo: 'https://logo.clearbit.com/doveypharma.com' },
  { name: 'Orion Healthcare', logo: 'https://logo.clearbit.com/orionhealthcare.co.ke' },
  { name: 'SBAR', logo: 'https://logo.clearbit.com/sbar.co.ke' },
];

const PartnersCarousel: React.FC = () => {
  // Duplicate partners array for seamless loop
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <div className="relative overflow-hidden py-8 bg-white">
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="flex animate-scroll">
        {duplicatedPartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex-shrink-0 mx-8 flex items-center justify-center"
            style={{ width: '200px', height: '100px' }}
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              onError={(e) => {
                // Fallback to text if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const text = document.createElement('div');
                  text.className = 'text-[#3A3F46] font-bold text-center px-4';
                  text.textContent = partner.name;
                  parent.appendChild(text);
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersCarousel;
