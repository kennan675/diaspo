import React from 'react';
import { Heart, HandHeart, Shield, TrendingDown } from 'lucide-react';

const DiaspoCauseSection: React.FC = () => {
  return (
    <section className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white rounded-full border border-[#007FFF]/20 shadow-sm mb-4">
            <span className="text-[#283692] font-semibold text-sm">❤️ DiaspoCause Cares</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3A3F46] mb-6">
            Supporting Our <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Community</span>
          </h2>
          <p className="text-xl text-[#7A8A9E] max-w-3xl mx-auto">
            We know you care about the health of your loved ones, we care too. But what about the people in our community that lack access to someone in the diaspora that can help them pay for their medical care?
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-12 mb-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-[#3A3F46] mb-6 text-center">About DiaspoCause</h3>
            <p className="text-lg text-[#7A8A9E] leading-relaxed mb-8">
              <strong className="text-[#283692]">DiaspoCause</strong> is a non-profit initiative created by DiaspoCare to help address this problem. We leverage the state-of-the-art payment system created for DiaspoCare to connect healthcare providers in Africa with charitable organizations, foundations and concerned individuals anywhere in the world.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5">
                <Shield className="w-12 h-12 text-[#283692] mx-auto mb-4" />
                <h4 className="font-bold text-[#3A3F46] mb-2">Traceable</h4>
                <p className="text-sm text-[#7A8A9E]">Every donation is tracked and accounted for</p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5">
                <Heart className="w-12 h-12 text-[#283692] mx-auto mb-4" />
                <h4 className="font-bold text-[#3A3F46] mb-2">Transparent</h4>
                <p className="text-sm text-[#7A8A9E]">Full visibility into fund usage</p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5">
                <TrendingDown className="w-12 h-12 text-[#283692] mx-auto mb-4" />
                <h4 className="font-bold text-[#3A3F46] mb-2">Minimized Fees</h4>
                <p className="text-sm text-[#7A8A9E]">More funds reach those in need</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-[#7A8A9E] mb-6">
            Our payment system ensures that these charitable funds are <strong className="text-[#283692]">traceable, transparent</strong> and used only for their intended purpose.
          </p>
          <p className="text-lg text-[#7A8A9E] mb-8">
            And because our platform <strong className="text-[#283692]">minimizes transaction fees</strong>, the impact of funds managed by DiaspoCause is maximized in the communities we serve.
          </p>
          <a href="mailto:diaspocause@gmail.com" className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-[#283692] to-[#007FFF] text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            <HandHeart className="w-5 h-5 inline mr-2" />
            Support DiaspoCause
          </a>
        </div>
      </div>
    </section>
  );
};

export default DiaspoCauseSection;
