import React from 'react';
import { Activity, HeartPulse, Eye, LifeBuoy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CareCoordinationSection: React.FC = () => {
  return (
    <section className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-white via-[#283692]/5 to-[#007FFF]/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white rounded-full border border-[#007FFF]/20 shadow-sm mb-4">
            <span className="text-[#283692] font-semibold text-sm">🔄 Comprehensive Care Model</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3A3F46] mb-6">
            Care Coordination – <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Whole Patient Care</span>
          </h2>
          <p className="text-xl text-[#7A8A9E] max-w-3xl mx-auto">
            A complete 360° care approach ensuring your loved ones receive holistic, coordinated healthcare at every stage
          </p>
        </div>

        {/* Interactive Care Circle */}
        <div className="relative max-w-5xl mx-auto mb-16">
          {/* Center Logo/Icon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center shadow-2xl">
              <HeartPulse className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Four Quadrants */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Assessment Quadrant */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-[#283692]/10 hover:border-[#283692]">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#283692]/10 flex items-center justify-center group-hover:bg-[#283692] transition-colors">
                <Activity className="w-6 h-6 text-[#283692] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-[#283692] mb-4">Assessment</h3>
              <ul className="space-y-2 text-[#7A8A9E]">
                <li className="flex items-start gap-2">
                  <span className="text-[#007FFF] mt-1">•</span>
                  <span>Personal Health History</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007FFF] mt-1">•</span>
                  <span>Family Health History</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007FFF] mt-1">•</span>
                  <span>Diagnostic Testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007FFF] mt-1">•</span>
                  <span>Prescription Reconciliation</span>
                </li>
              </ul>
            </div>

            {/* Treatment Quadrant */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-[#007FFF]/10 hover:border-[#007FFF]">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#007FFF]/10 flex items-center justify-center group-hover:bg-[#007FFF] transition-colors">
                <HeartPulse className="w-6 h-6 text-[#007FFF] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-[#007FFF] mb-4">Treatment</h3>
              <ul className="space-y-2 text-[#7A8A9E]">
                <li className="flex items-start gap-2">
                  <span className="text-[#283692] mt-1">•</span>
                  <span>Affordable Medications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#283692] mt-1">•</span>
                  <span>Physical Therapy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#283692] mt-1">•</span>
                  <span>Lifestyle Coaching</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#283692] mt-1">•</span>
                  <span>In-patient & Remote Care</span>
                </li>
              </ul>
            </div>

            {/* Monitoring Quadrant */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-[#007FFF]/10 hover:border-[#007FFF]">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#007FFF]/10 flex items-center justify-center group-hover:bg-[#007FFF] transition-colors">
                <Eye className="w-6 h-6 text-[#007FFF] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-[#007FFF] mb-4">Monitoring</h3>
              <ul className="space-y-2 text-[#7A8A9E]">
                <li className="flex items-start gap-2">
                  <span className="text-[#283692] mt-1">•</span>
                  <span>Video & Voice Visits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#283692] mt-1">•</span>
                  <span>Personal Medical Devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#283692] mt-1">•</span>
                  <span>Prescription & Treatment Compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#283692] mt-1">•</span>
                  <span>Gaps in Care Closure</span>
                </li>
              </ul>
            </div>

            {/* Support Quadrant */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-[#283692]/10 hover:border-[#283692]">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#283692]/10 flex items-center justify-center group-hover:bg-[#283692] transition-colors">
                <LifeBuoy className="w-6 h-6 text-[#283692] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-[#283692] mb-4">Support</h3>
              <ul className="space-y-2 text-[#7A8A9E]">
                <li className="flex items-start gap-2">
                  <span className="text-[#007FFF] mt-1">•</span>
                  <span>Appointment Scheduling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007FFF] mt-1">•</span>
                  <span>Transportation Assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007FFF] mt-1">•</span>
                  <span>Financial Platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007FFF] mt-1">•</span>
                  <span>Refill Management & Delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/care-coordination"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#283692] to-[#007FFF] text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Learn More About Care Coordination
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareCoordinationSection;
