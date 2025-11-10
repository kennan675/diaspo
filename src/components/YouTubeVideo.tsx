import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Play } from 'lucide-react';

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
  className = "",
}) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const pendingCommandRef = useRef<{ func: string; args: unknown[] } | null>(null);
  const playerId = useMemo(() => `youtube-${videoId}`, [videoId]);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  const postMessageToPlayer = useCallback(
    (message: Record<string, unknown>) => {
      if (!iframeRef.current?.contentWindow) return;
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ id: playerId, ...message }),
        'https://www.youtube.com'
      );
    },
    [playerId]
  );

  const sendPlayerCommand = useCallback(
    (func: string, args: unknown[] = []) => {
      postMessageToPlayer({ event: 'command', func, args });
    },
    [postMessageToPlayer]
  );

  const queueOrSendCommand = useCallback(
    (func: string, args: unknown[] = []) => {
      if (playerReady && iframeRef.current?.contentWindow) {
        sendPlayerCommand(func, args);
      } else {
        pendingCommandRef.current = { func, args };
      }
    },
    [playerReady, sendPlayerCommand]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio || 0;
        const shouldBeVisible = ratio >= 0.25;
        setIsVisible(shouldBeVisible);

        if (!shouldBeVisible && hasInteracted) {
          queueOrSendCommand('pauseVideo');
          setIsPlaying(false);
          setShowOverlay(true);
        }
      },
      {
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        rootMargin: '0px 0px -25% 0px',
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [hasInteracted, queueOrSendCommand]);

  // Listen for play/pause events from YouTube
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://www.youtube.com') return;
      
      try {
        const data = JSON.parse(event.data);
        if (data?.id && data.id !== playerId) return;

        if (data?.event === 'onReady') {
          setPlayerReady(true);
        }

        if (data?.event === 'onStateChange') {
          switch (data.info) {
            case 1: // playing
              setIsPlaying(true);
              setShowOverlay(false);
              setHasInteracted(true);
              break;
            case 0: // ended
            case 2: // paused
            case 5: // cued
              setIsPlaying(false);
              setShowOverlay(true);
              break;
            default:
              break;
          }
        }
      } catch (e) {
        // Ignore parsing errors
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [playerId]);

  useEffect(() => {
    if (playerReady && pendingCommandRef.current) {
      const { func, args } = pendingCommandRef.current;
      pendingCommandRef.current = null;
      sendPlayerCommand(func, args);
    }
  }, [playerReady, sendPlayerCommand]);

  useEffect(() => {
    if (isVisible && autoplay) {
      setHasInteracted(true);
      setShowOverlay(false);
      queueOrSendCommand('playVideo');
    }
  }, [autoplay, isVisible, queueOrSendCommand]);

  const origin = typeof window !== 'undefined' ? window.location.origin : undefined;
  const baseSrc = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&enablejsapi=1&playsinline=1${autoplay ? '&autoplay=1' : ''}`;
  const embedSrc = origin ? `${baseSrc}&origin=${encodeURIComponent(origin)}` : baseSrc;

  const handlePlayClick = () => {
    setHasInteracted(true);
    setShowOverlay(false);
    sendPlayerCommand('playVideo');
  };

  const overlayLabel = hasInteracted ? 'Resume' : 'Play Story';

  return (
    <div 
      ref={videoRef}
      className={`relative overflow-hidden rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} ${className}`}
    >
      <div className="relative aspect-video bg-black">
        <iframe
          ref={iframeRef}
          id={playerId}
          className="w-full h-full"
          src={embedSrc}
          title={title}
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => {
            postMessageToPlayer({ event: 'listening' });
            ['onStateChange', 'onReady'].forEach((eventName) =>
              postMessageToPlayer({ event: 'command', func: 'addEventListener', args: [eventName] })
            );
            if (!autoplay) {
              queueOrSendCommand('pauseVideo');
            }
          }}
        ></iframe>
        <div
          className={`pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.4),transparent_68%)] transition-opacity duration-700 ${showOverlay ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden
        />
        <button
          type="button"
          aria-label={overlayLabel}
          onClick={handlePlayClick}
          className={`group absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[linear-gradient(160deg,rgba(15,23,42,0.55),rgba(15,23,42,0.15))] text-white transition-all duration-600 ease-out ${showOverlay ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-3'}`}
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-primary shadow-[0_1.5rem_3.5rem_rgba(15,23,42,0.35)] transition-transform duration-300 group-hover:scale-110">
            <Play className="h-7 w-7" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.4em]">{overlayLabel}</span>
        </button>
      </div>
    </div>
  );
};

export default YouTubeVideo;
