import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#007FFF]/5 to-[#283692]/10">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(40,54,146,0.15)_0%,_transparent_50%)] animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(0,127,255,0.15)_0%,_transparent_50%)] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        </div>
      </div>

      {/* Floating medical icons */}
      <div className="absolute inset-0">
        {/* Heart pulse 1 */}
        <div className="absolute top-20 left-20 animate-float" style={{ animationDelay: '0s', animationDuration: '15s' }}>
          <svg className="w-8 h-8 text-[#007FFF]/20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>

        {/* Heart pulse 2 */}
        <div className="absolute top-1/4 right-40 animate-float" style={{ animationDelay: '3s', animationDuration: '18s' }}>
          <svg className="w-12 h-12 text-[#283692]/15" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>

        {/* Medical cross 1 */}
        <div className="absolute bottom-1/4 left-1/3 animate-float" style={{ animationDelay: '5s', animationDuration: '20s' }}>
          <div className="w-10 h-10 flex items-center justify-center text-[#007FFF]/20 font-bold text-3xl">+</div>
        </div>

        {/* Medical cross 2 */}
        <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '7s', animationDuration: '16s' }}>
          <div className="w-8 h-8 flex items-center justify-center text-[#283692]/15 font-bold text-2xl">+</div>
        </div>

        {/* Heart pulse 3 */}
        <div className="absolute bottom-32 right-20 animate-float" style={{ animationDelay: '2s', animationDuration: '14s' }}>
          <svg className="w-10 h-10 text-[#007FFF]/20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
      </div>

      {/* Connection lines - representing diaspora connections */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgb(40,54,146)', stopOpacity: 0.1 }} />
            <stop offset="100%" style={{ stopColor: 'rgb(0,127,255)', stopOpacity: 0.05 }} />
          </linearGradient>
        </defs>
        
        {/* Animated connection lines */}
        <path d="M 10 20 Q 200 100 400 180" stroke="url(#line1)" strokeWidth="2" fill="none" className="animate-draw" />
        <path d="M 500 50 Q 700 150 900 80" stroke="url(#line1)" strokeWidth="2" fill="none" className="animate-draw" style={{ animationDelay: '2s' }} />
        <path d="M 100 300 Q 300 400 500 350" stroke="url(#line1)" strokeWidth="2" fill="none" className="animate-draw" style={{ animationDelay: '4s' }} />
        <path d="M 700 400 Q 900 300 1100 380" stroke="url(#line1)" strokeWidth="2" fill="none" className="animate-draw" style={{ animationDelay: '1s' }} />
      </svg>

      {/* Pulse waves */}
      <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full border-2 border-[#007FFF]/10 animate-ping" style={{ animationDuration: '3s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full border-2 border-[#283692]/10 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />

      {/* Heartbeat line animation */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-96 h-24 opacity-10">
        <svg viewBox="0 0 400 100" className="w-full h-full">
          <polyline
            points="0,50 50,50 60,20 70,80 80,50 400,50"
            fill="none"
            stroke="#007FFF"
            strokeWidth="2"
            className="animate-heartbeat"
          />
        </svg>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.15;
          }
          25% {
            transform: translate(20px, -30px) rotate(5deg);
            opacity: 0.25;
          }
          50% {
            transform: translate(0, -50px) rotate(-5deg);
            opacity: 0.2;
          }
          75% {
            transform: translate(-20px, -30px) rotate(3deg);
            opacity: 0.25;
          }
        }

        @keyframes draw {
          0% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-400px);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-draw {
          animation: draw 10s ease-in-out infinite;
        }

        .animate-heartbeat {
          animation: heartbeat 5s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
