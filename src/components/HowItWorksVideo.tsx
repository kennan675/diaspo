import React, { useState, useEffect, useRef } from 'react';
import YouTubeVideo from './YouTubeVideo';

const HowItWorksVideo: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 sm:px-12 md:px-20 bg-gradient-to-b from-[#283692]/5 to-white">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-2 bg-[#283692]/10 rounded-full">
            <span className="text-[#283692] font-semibold text-sm">SEE IT IN ACTION</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#3A3F46] tracking-tight">
            Watch How <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">DiaspoCare Works</span>
          </h2>
          
          <p className="text-xl text-[#7A8A9E] max-w-3xl mx-auto">
            See how easy it is to coordinate healthcare for your loved ones - click play to watch
          </p>
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <YouTubeVideo 
            videoId="dAyfk6sqPcY"
            title="DiaspoCare - How It Works"
            autoplay={false}
          />
        </div>

        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {['Easy Registration', 'Provider Matching', 'Real-time Updates'].map((feature, index) => (
            <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#007FFF]/10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <span className="font-semibold text-[#3A3F46]">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksVideo;
