import React, { useState } from 'react';

const FAQS = [
  {
    question: 'How does DiaspoCare work?',
    answer: 'DiaspoCare connects you with verified healthcare providers in your family\'s home country. Simply register, tell us your needs, and we match you with the right providers and coordinate all services.',
  },
  {
    question: 'Which countries do you serve?',
    answer: 'We currently operate in 15+ countries across Africa, Asia, and Latin America. Our network is constantly expanding to serve more diaspora communities.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Pricing varies by service and location. We offer transparent pricing with no hidden fees. Contact us for a personalized quote based on your needs.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We are HIPAA compliant and use bank-level encryption. Your family\'s health information is protected with the highest security standards.',
  },
  {
    question: 'Can I track appointments in real-time?',
    answer: 'Yes! Our platform provides real-time updates on appointments, transportation, and service delivery. You\'ll receive notifications at every step.',
  },
  {
    question: 'What if I need emergency care?',
    answer: 'We offer 24/7 emergency coordination services. Our team can arrange urgent care, ambulance services, and hospital admissions when needed.',
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 sm:px-12 md:px-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-[#007FFF]/10 rounded-full">
            <span className="text-[#007FFF] font-semibold text-sm">FAQ</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#3A3F46] tracking-tight">
            Frequently Asked <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Questions</span>
          </h2>
          
          <p className="text-xl text-[#7A8A9E]">
            Everything you need to know about DiaspoCare
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index}
              className="rounded-2xl border-2 border-[#007FFF]/10 hover:border-[#007FFF]/30 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#007FFF]/5 transition-colors"
              >
                <span className="text-lg font-bold text-[#3A3F46] pr-4">{faq.question}</span>
                <svg 
                  className={`w-6 h-6 text-[#007FFF] transition-transform flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5 text-[#7A8A9E] leading-relaxed animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 border border-[#007FFF]/20">
          <p className="text-lg text-[#3A3F46] mb-4">Still have questions?</p>
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#283692] to-[#007FFF] text-white font-semibold hover:shadow-lg hover:scale-105 transition-all">
            Contact Support →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
