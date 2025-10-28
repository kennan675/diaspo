import React from 'react';

const partners = [
  { name: 'CP Kenya', logo: '/partners/cp-kenya.png' },
  { name: 'Ecobank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Ecobank_logo.svg/2560px-Ecobank_logo.svg.png' },
  { name: 'Equity Bank', logo: '/partners/equity-bank.png' },
  { name: 'Equity Afia', logo: 'https://equityafya.co.ke/wp-content/uploads/2022/02/Equity-Afya-Logo.png' },
  { name: 'FRETT Technologies', logo: '/partners/frett.png' },
  { name: 'GoodLife Pharmacy', logo: 'https://www.goodlife.co.ke/wp-content/uploads/2023/03/cropped-Goodlife-logo.png' },
  { name: 'HealthX', logo: '/partners/healthx.png' },
  { name: 'Kenya Pharmaceutical Association', logo: '/partners/kpa.png' },
  { name: 'NephroMed', logo: '/partners/nephromed.png' },
  { name: 'Paystack', logo: 'https://assets-global.website-files.com/5d9bc5d562ffc2869b470941/5e1c8e2197422d6c93b2c4cf_paystack-icon-blue.png' },
  { name: 'SASAdoctor', logo: '/partners/sasadoctor.png' },
  { name: 'SPROXIL', logo: '/partners/sproxil.png' },
  { name: 'tingg by Cellulant', logo: '/partners/tingg.png' },
  { name: 'BYON8', logo: '/partners/byon8.png' },
  { name: 'Bliss Healthcare', logo: '/partners/bliss.png' },
  { name: 'Dovey Pharma', logo: '/partners/dovey.png' },
  { name: 'Orion Healthcare', logo: '/partners/orion.png' },
  { name: 'SBAR', logo: '/partners/sbar.png' },
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
          animation: scroll 20s linear infinite;
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
