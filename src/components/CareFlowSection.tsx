import React, { useState } from 'react';

const CARE_STEPS = [
  { title: 'Registration', description: 'Create your account and add family member details in minutes.', icon: '📝' },
  { title: 'Needs Assessment', description: 'Our team evaluates healthcare requirements and preferences.', icon: '🔍' },
  { title: 'Provider Matching', description: 'Get connected with verified, trusted healthcare professionals.', icon: '🤝' },
  { title: 'Service Coordination', description: 'We handle scheduling, transportation, and all logistics.', icon: '📅' },
  { title: 'Follow-up Care', description: 'Continuous monitoring and support for ongoing health needs.', icon: '💙' },
];

const CareFlowSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-16 px-6 sm:px-12 md:px-20 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 space-y-3">
          <div className="inline-block px-4 py-2 bg-[#007FFF]/10 rounded-full">
            <span className="text-[#007FFF] font-semibold text-sm">HOW IT WORKS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A3F46] tracking-tight">
            Your Care <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Journey</span>
          </h2>
          
          <p className="text-lg text-[#7A8A9E] max-w-2xl mx-auto">
            Five simple steps to ensure your loved ones receive the best care possible.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#283692] via-[#007FFF] to-[#283692] hidden lg:block" />
          
          <div className="space-y-4">
            {CARE_STEPS.map((step, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 cursor-pointer`}
                onClick={() => setActiveStep(activeStep === index ? null : index)}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className={`inline-block p-3 rounded-lg bg-white border-2 ${activeStep === index ? 'border-[#007FFF] shadow-[0_4px_20px_rgba(0,127,255,0.2)]' : 'border-[#007FFF]/20 shadow-[0_2px_10px_rgba(0,0,0,0.05)]'} hover:border-[#007FFF] hover:shadow-[0_4px_20px_rgba(0,127,255,0.2)] transition-all`}>
                    <h3 className="text-lg font-bold text-[#3A3F46] mb-1">{step.title}</h3>
                    <p className="text-xs text-[#7A8A9E]">{step.description}</p>
                  </div>
                </div>

                <div className="hidden lg:flex w-12 h-12 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                  {index + 1}
                </div>

                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareFlowSection;
