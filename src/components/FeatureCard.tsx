import React, { useState } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#007FFF]/10 shadow-[0_4px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,127,255,0.15)] transition-all duration-300 hover:-translate-y-2 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10">
        <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-[#283692]/10 to-[#007FFF]/10 p-4 group-hover:scale-110 transition-transform">
          <img src={icon} alt={title} className="w-full h-full object-contain" />
        </div>
        
        <h3 className="text-2xl font-bold text-[#3A3F46] mb-3 group-hover:text-[#283692] transition-colors">
          {title}
        </h3>
        
        <p className="text-[#7A8A9E] leading-relaxed">
          {description}
        </p>

        <div className={`mt-4 flex items-center text-[#007FFF] font-semibold transition-all ${isHovered ? 'translate-x-2' : ''}`}>
          Learn more 
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
