import React from 'react';

interface VideoBackgroundProps {
  videoUrl?: string;
  fallbackImage?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  videoUrl = '/hero-video.mp4',
  fallbackImage = '/hero-background.png',
  overlay = true,
  overlayOpacity = 0.6
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={fallbackImage}
      >
        <source src={videoUrl} type="video/mp4" />
        {/* Fallback to image if video doesn't load */}
        <img 
          src={fallbackImage} 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </video>
      
      {/* Gradient Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#283692]/60 via-[#007FFF]/40 to-purple-900/50"
          style={{ opacity: overlayOpacity }}
        />
      )}
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
    </div>
  );
};

export default VideoBackground;
