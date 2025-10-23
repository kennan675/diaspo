import React, { useEffect, useRef, useState } from 'react';

const HowItWorksVideo: React.FC = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAutoplay, setShouldAutoplay] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setShouldAutoplay(true);
        } else {
          // Video is out of view, stop autoplay
          setShouldAutoplay(false);
          // Pause the video by reloading iframe without autoplay
          if (iframeRef.current && isVisible) {
            const currentSrc = iframeRef.current.src;
            iframeRef.current.src = currentSrc.replace('&autoplay=1&mute=1', '');
          }
        }
      },
      { threshold: 0.3 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section className="py-24 px-6 sm:px-12 md:px-20 bg-gradient-to-b from-[#283692]/5 to-white">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-2 bg-[#283692]/10 rounded-full">
            <span className="text-[#283692] font-semibold text-sm">SEE IT IN ACTION</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#3A3F46] tracking-tight">
            Watch How <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">DiaspoCare Works</span>
          </h2>
          
          <p className="text-xl text-[#7A8A9E] max-w-3xl mx-auto">
            See how easy it is to coordinate healthcare for your loved ones
          </p>
        </div>

        <div 
          ref={videoRef}
          className={`relative rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.15)] transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <div className="relative aspect-video bg-black">
            <iframe
              ref={iframeRef}
              className="w-full h-full"
              src={`https://www.youtube.com/embed/dAyfk6sqPcY?rel=0&modestbranding=1${shouldAutoplay ? '&autoplay=1&mute=1' : ''}`}
              title="DiaspoCare - How It Works"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <div className="flex items-center gap-4 text-white">
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-1">Platform Overview</h4>
                <p className="text-sm text-white/80">2:30 min • Product Demo</p>
              </div>
              <div className="flex gap-2">
                <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold">HD</div>
                <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold">EN</div>
              </div>
            </div>
          </div>
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
