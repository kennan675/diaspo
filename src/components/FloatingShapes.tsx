import React from 'react';

const FloatingShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient orbs - reduced blur for performance */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#283692]/15 to-[#007FFF]/8 rounded-full blur-xl animate-float-slow will-change-transform" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-purple-500/8 to-[#007FFF]/15 rounded-full blur-xl animate-float-slower will-change-transform" />
    </div>
  );
};

export default FloatingShapes;
