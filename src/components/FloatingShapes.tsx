import React from 'react';

const FloatingShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#283692]/20 to-[#007FFF]/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/10 to-[#007FFF]/20 rounded-full blur-3xl animate-float-slower" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-[#007FFF]/15 to-purple-400/10 rounded-full blur-2xl animate-float-medium" />
      
      {/* Small floating particles */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-[#007FFF]/30 rounded-full animate-float-fast" />
      <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-purple-500/30 rounded-full animate-float-medium" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-[#283692]/20 rounded-full animate-float-slow" style={{ animationDelay: '2s' }} />
      
      {/* Animated lines */}
      <div className="absolute top-0 left-1/4 w-px h-1/3 bg-gradient-to-b from-transparent via-[#007FFF]/20 to-transparent animate-slide-down" />
      <div className="absolute top-1/4 right-1/3 w-px h-1/3 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-slide-down" style={{ animationDelay: '1.5s' }} />
    </div>
  );
};

export default FloatingShapes;
