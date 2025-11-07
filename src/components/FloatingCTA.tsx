import React, { useState, useEffect } from 'react';

const callNumber = '+15551234567';
const liveChatUrl = 'https://calendly.com/diaspocare/support';
const emailAddress = 'support@diaspocare.com';

const trackContactEvent = (action: string) => {
  const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (gtag) {
    gtag('event', 'contact_click', {
      event_category: 'engagement',
      event_label: action,
    });
  }
};

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isExpanded ? (
        <div className="bg-white rounded-2xl shadow-lg p-6 w-80 border border-[#007FFF]/20">
          <button 
            onClick={() => setIsExpanded(false)}
            className="absolute top-4 right-4 text-[#7A8A9E] hover:text-[#3A3F46]"
          >
            ✕
          </button>
          
          <h4 className="text-xl font-bold text-[#3A3F46] mb-3">Need Help?</h4>
          <p className="text-[#7A8A9E] mb-4 text-sm">Our care coordinators are ready to assist you.</p>
          
          <div className="space-y-2">
            <a
              href={`tel:${callNumber}`}
              onClick={() => trackContactEvent('call_now')}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#283692] to-[#007FFF] text-white font-semibold hover:shadow-lg transition-all"
            >
              📞 Call Now
            </a>
            <a
              href={liveChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContactEvent('live_chat')}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-[#007FFF] text-[#007FFF] font-semibold hover:bg-[#007FFF]/5 transition-all"
            >
              💬 Live Chat
            </a>
            <a
              href={`mailto:${emailAddress}`}
              onClick={() => trackContactEvent('email_us')}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-[#007FFF] text-[#007FFF] font-semibold hover:bg-[#007FFF]/5 transition-all"
            >
              📧 Email Us
            </a>
          </div>
        </div>
      ) : (
        <button
          onClick={() => {
            setIsExpanded(true);
            trackContactEvent('open_floating_cta');
          }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center text-2xl"
        >
          💬
        </button>
      )}
    </div>
  );
};

export default FloatingCTA;
