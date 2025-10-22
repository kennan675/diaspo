import React from 'react';
import { Stethoscope, Activity, TestTube, Video, Clock, MapPin } from 'lucide-react';

const HPodKioskSection: React.FC = () => {
  return (
    <section id="hpod" className="py-20 px-6 sm:px-12 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#283692]/10 to-[#007FFF]/10 rounded-full mb-4">
            <span className="text-[#283692] font-semibold text-sm">🏥 H-POD Technology</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3A3F46] mb-6">
            DiaspoCare <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Diagnostic Kiosk</span>
          </h2>
          <p className="text-xl text-[#7A8A9E] max-w-3xl mx-auto">
            Experience the future of healthcare with our innovative diagnostic kiosk. Get accurate health assessments and connect with world-class medical professionals from anywhere in the world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-[#3A3F46] mb-6">Advanced Diagnostic Technology</h3>
            <p className="text-lg text-[#7A8A9E] mb-6">
              Ensure your loved ones back home receive the best possible care with our advanced diagnostic technology and expert medical network.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center flex-shrink-0">
                  <TestTube className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#3A3F46] mb-1">Invasive & Non-Invasive Tests</h4>
                  <p className="text-sm text-[#7A8A9E]">Comprehensive diagnostic testing capabilities for accurate health assessments</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center flex-shrink-0">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#3A3F46] mb-1">Remote Consultations</h4>
                  <p className="text-sm text-[#7A8A9E]">Connect with healthcare professionals virtually through the kiosk</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center flex-shrink-0">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#3A3F46] mb-1">Real-Time Results</h4>
                  <p className="text-sm text-[#7A8A9E]">Instant diagnostic results shared with you and healthcare providers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#283692] to-[#007FFF] rounded-3xl p-12 text-white">
              <Stethoscope className="w-24 h-24 mx-auto mb-6 opacity-20" />
              <h4 className="text-2xl font-bold text-center mb-4">H-POD Kiosk Features</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 flex-shrink-0" />
                  <span>Available 24/7 for health monitoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <span>Strategically located in communities</span>
                </li>
                <li className="flex items-center gap-3">
                  <Activity className="w-5 h-5 flex-shrink-0" />
                  <span>Comprehensive health screening</span>
                </li>
                <li className="flex items-center gap-3">
                  <Video className="w-5 h-5 flex-shrink-0" />
                  <span>Integrated telehealth capabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 rounded-3xl p-12">
          <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">Transform Healthcare Access</h3>
          <p className="text-lg text-[#7A8A9E] max-w-2xl mx-auto mb-6">
            Our H-POD diagnostic kiosks bring advanced healthcare technology to underserved communities, ensuring everyone has access to quality medical diagnostics.
          </p>
          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#283692] to-[#007FFF] text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            Learn More About H-POD
          </button>
        </div>
      </div>
    </section>
  );
};

export default HPodKioskSection;
