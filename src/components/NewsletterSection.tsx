import React, { useState } from 'react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#007FFF]/10 via-white to-[#283692]/10">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-white shadow-[0_8px_40px_rgba(0,0,0,0.1)] border border-[#007FFF]/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#283692]/10 to-[#007FFF]/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 p-8 sm:p-12 text-center space-y-6">
            <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-[#283692]/10 to-[#007FFF]/10">
              <svg className="w-12 h-12 text-[#007FFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#3A3F46]">
              Stay Connected with <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">DiaspoCare</span>
            </h3>
            
            <p className="text-lg text-[#7A8A9E] max-w-2xl mx-auto">
              Get healthcare tips, platform updates, and exclusive offers delivered to your inbox.
            </p>

            {subscribed ? (
              <div className="py-4 px-6 rounded-xl bg-green-50 border border-green-200 text-green-700 font-semibold">
                ✓ Successfully subscribed! Check your inbox.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-6 py-4 rounded-xl border-2 border-[#007FFF]/20 focus:border-[#007FFF] focus:outline-none text-[#3A3F46] placeholder:text-[#7A8A9E]"
                />
                <button 
                  type="submit"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#283692] to-[#007FFF] text-white font-bold hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap"
                >
                  Subscribe →
                </button>
              </form>
            )}

            <p className="text-sm text-[#7A8A9E]">
              🔒 We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
