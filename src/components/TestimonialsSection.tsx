import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '@/lib/constants';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692] to-[#007FFF] relative overflow-hidden">

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
            <span className="text-white font-semibold text-sm">TESTIMONIALS</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Families Worldwide
          </h2>
        </div>

        <div className="relative min-h-[300px]">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ${
                index === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
              }`}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.2)]">
                <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white/30"
                  />
                  <div className="text-center sm:text-left">
                    <h4 className="text-2xl font-bold text-white">{testimonial.name}</h4>
                    <p className="text-white/80">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-xl text-white/90 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
