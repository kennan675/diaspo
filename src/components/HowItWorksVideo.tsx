import React, { useState } from 'react';

const HowItWorksVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 px-6 sm:px-12 md:px-20 bg-gradient-to-b from-[#283692]/5 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
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

        <div className="relative rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.15)] group">
          <div className="relative aspect-video bg-gradient-to-br from-[#283692] to-[#007FFF]">
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/68f82a42889eeaf16721e728_1761094251861_8d44f41e.webp"
              alt="DiaspoCare Demo"
              className="w-full h-full object-cover opacity-60"
            />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:scale-110 hover:bg-white transition-all group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
              >
                {isPlaying ? (
                  <svg className="w-12 h-12 text-[#283692]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg className="w-12 h-12 text-[#283692] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>

            {isPlaying && (
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center animate-fade-in">
                <div className="text-white text-center space-y-4 p-8">
                  <div className="text-6xl mb-4">🎥</div>
                  <p className="text-2xl font-bold">Demo Video Coming Soon</p>
                  <p className="text-lg text-white/80">Experience the full DiaspoCare platform</p>
                  <button 
                    onClick={() => setIsPlaying(false)}
                    className="mt-4 px-6 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/30 transition-all"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            )}
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
