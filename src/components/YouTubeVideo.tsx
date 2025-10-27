import React, { useEffect, useRef, useState } from 'react';

interface YouTubeVideoProps {
  videoId: string;
  title: string;
  autoplay?: boolean;
  className?: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ 
  videoId, 
  title, 
  autoplay = false,
  className = ""
}) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        
        // If video scrolls out of view and was playing, pause it
        if (!entry.isIntersecting && isPlaying && iframeRef.current) {
          // Send pause command to YouTube iframe
          iframeRef.current.contentWindow?.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            '*'
          );
          setIsPlaying(false);
        }
      },
      { threshold: 0.5 } // Video must be 50% visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [isPlaying]);

  // Listen for play/pause events from YouTube
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://www.youtube.com') return;
      
      try {
        const data = JSON.parse(event.data);
        if (data.event === 'onStateChange') {
          // 1 = playing, 2 = paused
          setIsPlaying(data.info === 1);
        }
      } catch (e) {
        // Ignore parsing errors
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div 
      ref={videoRef}
      className={`relative rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.15)] ${className}`}
    >
      <div className="relative aspect-video bg-black">
        <iframe
          ref={iframeRef}
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&enablejsapi=1${autoplay ? '&autoplay=1' : ''}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeVideo;
