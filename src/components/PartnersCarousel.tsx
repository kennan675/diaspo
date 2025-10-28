import React from 'react';

interface Partner {
  name: string;
  logo?: string;
  textLogo?: boolean;
}

const partners: Partner[] = [
  { name: 'CP Kenya', textLogo: true },
  { name: 'Ecobank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Ecobank_logo.svg/2560px-Ecobank_logo.svg.png' },
  { name: 'Equity Bank', textLogo: true },
  { name: 'Equity Afia', logo: 'https://equityafya.co.ke/wp-content/uploads/2022/02/Equity-Afya-Logo.png' },
  { name: 'FRETT', textLogo: true },
  { name: 'GoodLife', logo: 'https://www.goodlife.co.ke/wp-content/uploads/2023/03/cropped-Goodlife-logo.png' },
  { name: 'HealthX', textLogo: true },
  { name: 'KPA', textLogo: true },
  { name: 'NephroMed', textLogo: true },
  { name: 'Paystack', logo: 'https://assets-global.website-files.com/5d9bc5d562ffc2869b470941/5e1c8e2197422d6c93b2c4cf_paystack-icon-blue.png' },
  { name: 'SASAdoctor', textLogo: true },
  { name: 'SPROXIL', textLogo: true },
  { name: 'tingg', textLogo: true },
  { name: 'BYON8', textLogo: true },
  { name: 'Bliss Healthcare', textLogo: true },
  { name: 'Dovey Pharma', textLogo: true },
  { name: 'Orion Healthcare', textLogo: true },
  { name: 'SBAR', textLogo: true },
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
            {partner.textLogo ? (
              <div className="px-6 py-4 rounded-lg border-2 border-[#007FFF]/20 bg-gradient-to-br from-white to-[#007FFF]/5 hover:border-[#007FFF]/50 transition-all duration-300 group">
                <div className="text-[#283692] font-bold text-xl text-center group-hover:scale-110 transition-transform">
                  {partner.name}
                </div>
              </div>
            ) : (
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
                    text.className = 'px-6 py-4 rounded-lg border-2 border-[#007FFF]/20 bg-gradient-to-br from-white to-[#007FFF]/5';
                    const nameDiv = document.createElement('div');
                    nameDiv.className = 'text-[#283692] font-bold text-xl text-center';
                    nameDiv.textContent = partner.name;
                    text.appendChild(nameDiv);
                    parent.appendChild(text);
                  }
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersCarousel;
