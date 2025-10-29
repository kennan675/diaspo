import React, { useState } from 'react';
import DiaspoHeader from '@/components/DiaspoHeader';
import DiaspoFooter from '@/components/DiaspoFooter';
import BackToTop from '@/components/BackToTop';
import YouTubeVideo from '@/components/YouTubeVideo';
import { Activity, Video, Cloud, Gauge, DollarSign, Award, Building2, MapPin, Pill, Building, GraduationCap, Users, ChevronDown, ChevronUp } from 'lucide-react';

const HPodKiosk: React.FC = () => {
  const [parametersExpanded, setParametersExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <DiaspoHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#2D2D2D] via-[#1a1a1a] to-[#000000] text-white overflow-hidden">
          {/* Dark background image overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
                  Healthcare, Anywhere. <span className="text-[#007FFF]">Anytime.</span>
                </h1>
                
                <p className="text-xl text-white/90 mb-10 leading-relaxed">
                  hPod is a smart, portable diagnostic and teleconsultation pod designed to make quality healthcare accessible in Nigeria, Ghana, and Kenya. With the ability to test 50+ health parameters on the spot and connect patients to doctors instantly, hPod is transforming how communities access care.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#007FFF] text-white font-bold text-lg hover:bg-[#006FE6] transition-all hover:scale-105 shadow-xl"
                  >
                    Book a Demo
                  </a>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all hover:scale-105"
                  >
                    Partner with Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 px-6 sm:px-12 md:px-20 bg-gradient-to-b from-white to-[#007FFF]/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-block px-4 py-2 bg-[#283692]/10 rounded-full mb-4">
                <span className="text-[#283692] font-semibold text-sm">🎥 SEE HPOD IN ACTION</span>
              </div>
              <h2 className="text-4xl font-extrabold text-[#3A3F46] mb-4">
                Watch How <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">hPod Works</span>
              </h2>
              <p className="text-xl text-[#7A8A9E]">Transforming healthcare access in underserved communities</p>
            </div>

            <YouTubeVideo 
              videoId="qsz2FGaBqGI"
              title="DiaspoCare hPod - Healthcare Anywhere, Anytime"
              autoplay={false}
            />
          </div>
        </section>

        {/* What is hPod Section */}
        <section className="py-24 px-6 sm:px-12 md:px-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-8">
              What is <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">hPod?</span>
            </h2>
            
            <p className="text-lg text-[#7A8A9E] text-center max-w-5xl mx-auto mb-12 leading-relaxed">
              hPod is DiaspoCare's breakthrough health kiosk that brings together diagnostics, digital health services, and teleconsultation all under one roof. With hPod, you and your loved ones can get quality healthcare locally, even from remote or underserved communities, with the assurance of transparency, speed, and global standards.
            </p>
            
            <div className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-3xl p-8 md:p-12 border-2 border-[#007FFF]/10">
              <h3 className="text-2xl font-bold text-[#3A3F46] mb-6">How hPod works and why it makes a difference:</h3>
              
              <ul className="space-y-4 text-[#7A8A9E]">
                <li className="flex items-start gap-3">
                  <span className="text-[#007FFF] text-xl font-bold mt-1">•</span>
                  <span className="text-lg"><strong>On-site lab testing with real-time diagnostics</strong> so results are fast and actionable.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#007FFF] text-xl font-bold mt-1">•</span>
                  <span className="text-lg"><strong>Virtual consults with licensed doctors</strong>, enabling care even when specialists are far away.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#007FFF] text-xl font-bold mt-1">•</span>
                  <span className="text-lg"><strong>Chronic illness management</strong>: monitor conditions over time with repeat testing and follow-ups.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#007FFF] text-xl font-bold mt-1">•</span>
                  <span className="text-lg"><strong>Connectivity with local pharmacies and health professionals</strong> for medication delivery or in-person services after consults.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#007FFF] text-xl font-bold mt-1">•</span>
                  <span className="text-lg"><strong>Tests are very affordable and cost a fraction of usual tests</strong>. Reduces infrastructure and operational costs while expanding healthcare access to underserved communities.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-24 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-white to-[#007FFF]/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16">
              Key Features of <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">hPod</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 50+ Health Parameters */}
              <div className="group bg-white rounded-3xl p-8 border-2 border-[#283692]/10 hover:border-[#283692] hover:shadow-2xl transition-all text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                  <Activity className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">50+ Health Parameters</h3>
                <p className="text-[#7A8A9E] leading-relaxed">
                  Instant, lab-quality testing for vital signs, biochemistry, hematology, infectious diseases, and chronic illness monitoring.
                </p>
              </div>

              {/* Built-in Teleconsultation */}
              <div className="group bg-white rounded-3xl p-8 border-2 border-[#007FFF]/10 hover:border-[#007FFF] hover:shadow-2xl transition-all text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#007FFF] to-[#283692] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                  <Video className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">Built-in Teleconsultation</h3>
                <p className="text-[#7A8A9E] leading-relaxed">
                  Connect patients with certified doctors in real-time, ensuring timely medical advice and follow-up.
                </p>
              </div>

              {/* Digital Health Records */}
              <div className="group bg-white rounded-3xl p-8 border-2 border-[#283692]/10 hover:border-[#283692] hover:shadow-2xl transition-all text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                  <Cloud className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">Digital Health Records</h3>
                <p className="text-[#7A8A9E] leading-relaxed">
                  All test results are securely stored and accessible, enabling continuity of care and long-term health monitoring.
                </p>
              </div>

              {/* Rapid & Reliable Results */}
              <div className="group bg-white rounded-3xl p-8 border-2 border-[#007FFF]/10 hover:border-[#007FFF] hover:shadow-2xl transition-all text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#007FFF] to-[#283692] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                  <Gauge className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">Rapid & Reliable Results</h3>
                <p className="text-[#7A8A9E] leading-relaxed">
                  Delivers accurate diagnostics within minutes, reducing waiting time and enabling faster treatment decisions.
                </p>
              </div>

              {/* Cost-Effective Solution */}
              <div className="group bg-white rounded-3xl p-8 border-2 border-[#283692]/10 hover:border-[#283692] hover:shadow-2xl transition-all text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">Cost-Effective Solution</h3>
                <p className="text-[#7A8A9E] leading-relaxed">
                  Tests are very affordable and cost a fraction of usual tests. Reduces infrastructure and operational costs while expanding healthcare access to underserved communities.
                </p>
              </div>

              {/* Globally Certified */}
              <div className="group bg-white rounded-3xl p-8 border-2 border-[#007FFF]/10 hover:border-[#007FFF] hover:shadow-2xl transition-all text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#007FFF] to-[#283692] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">Globally Certified</h3>
                <p className="text-[#7A8A9E] leading-relaxed">
                  Certified with ISO 13485, CDSCO MDS license, and IEC compliance for international safety and reliability, offering CE- & US-FDA-approved IVD tests.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Full List of Parameters - Expandable */}
        <section className="py-12 px-6 sm:px-12 md:px-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <button
              onClick={() => setParametersExpanded(!parametersExpanded)}
              className="w-full bg-gradient-to-r from-[#007FFF]/10 to-[#283692]/10 rounded-2xl p-6 border-2 border-[#007FFF]/20 hover:border-[#007FFF]/40 transition-all flex items-center justify-between"
            >
              <span className="text-xl font-bold text-[#3A3F46]">View Full List of Parameters</span>
              {parametersExpanded ? (
                <ChevronUp className="w-6 h-6 text-[#007FFF]" />
              ) : (
                <ChevronDown className="w-6 h-6 text-[#007FFF]" />
              )}
            </button>

            {parametersExpanded && (
              <div className="mt-6 bg-white rounded-2xl p-8 border-2 border-[#007FFF]/10 space-y-6">
                <div>
                  <h4 className="font-bold text-[#3A3F46] mb-2">Vital Signs:</h4>
                  <p className="text-[#7A8A9E]">Weight, Height, BMI, Blood Pressure, Heart Rate, SpO₂, Pulse, Temperature</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#3A3F46] mb-2">Body Composition Analysis:</h4>
                  <p className="text-[#7A8A9E]">Percentage Body Fat, Visceral Fat, Skeletal Muscle Mass, Body Cell Mass, Body Fat Mass, Waist to Hip Ratio, Waist to Height Ratio, Minerals, Protein, Bone Mineral Content, ICW, ECW</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#3A3F46] mb-2">Lipid Profile:</h4>
                  <p className="text-[#7A8A9E]">Total Cholesterol, LDL, HDL, Triglycerides</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#3A3F46] mb-2">Cardiac Health:</h4>
                  <p className="text-[#7A8A9E]">ECG, Troponin</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#3A3F46] mb-2">Infectious Diseases:</h4>
                  <p className="text-[#7A8A9E]">Dengue, Malaria, HIV 1&2, Hepatitis B, Hepatitis C, Syphilis, Typhoid</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#3A3F46] mb-2">Urinalysis & Kidney Health:</h4>
                  <p className="text-[#7A8A9E]">Protein, pH, Blood, Specific Gravity, Ketone, Glucose, Bilirubin, Urobilinogen, Nitrite, Leukocytes, Bile, U-Albumin</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#3A3F46] mb-2">Additional Tests & Tools:</h4>
                  <p className="text-[#7A8A9E]">Blood Glucose, Haemoglobin, Urine Pregnancy Test, Otoscope, Derma Scope, Digital Stethoscope</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Where hPod Can Be Used */}
        <section className="py-24 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#F8F9FA] to-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16">
              Where <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">hPod Can Be Used</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Hospitals & Clinics */}
              <div className="bg-white rounded-3xl p-8 border-2 border-[#007FFF]/10 hover:border-[#007FFF] hover:shadow-xl transition-all text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#007FFF] to-[#283692] flex items-center justify-center mb-4 mx-auto">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#3A3F46]">Hospitals & Clinics</h3>
              </div>

              {/* Rural Health Centers */}
              <div className="bg-white rounded-3xl p-8 border-2 border-[#007FFF]/10 hover:border-[#007FFF] hover:shadow-xl transition-all text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-4 mx-auto">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#3A3F46]">Rural Health Centers</h3>
              </div>

              {/* Pharmacies */}
              <div className="bg-white rounded-3xl p-8 border-2 border-[#007FFF]/10 hover:border-[#007FFF] hover:shadow-xl transition-all text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#007FFF] to-[#283692] flex items-center justify-center mb-4 mx-auto">
                  <Pill className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#3A3F46]">Pharmacies</h3>
              </div>

              {/* Corporates */}
              <div className="bg-white rounded-3xl p-8 border-2 border-[#007FFF]/10 hover:border-[#007FFF] hover:shadow-xl transition-all text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-4 mx-auto">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#3A3F46]">Corporates</h3>
              </div>

              {/* Universities & Schools */}
              <div className="bg-white rounded-3xl p-8 border-2 border-[#007FFF]/10 hover:border-[#007FFF] hover:shadow-xl transition-all text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#007FFF] to-[#283692] flex items-center justify-center mb-4 mx-auto">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#3A3F46]">Universities & Schools</h3>
              </div>

              {/* NGOs & Community Programs */}
              <div className="bg-white rounded-3xl p-8 border-2 border-[#007FFF]/10 hover:border-[#007FFF] hover:shadow-xl transition-all text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#3A3F46]">NGOs & Community Programs</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Global Certifications */}
        <section className="py-24 px-6 sm:px-12 md:px-20 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-16">
              <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Global Certifications & Approvals</span>
            </h2>
            
            <div className="flex flex-wrap items-center justify-center gap-12">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#007FFF]/10 to-[#283692]/10 flex items-center justify-center mb-2">
                  <span className="text-3xl font-bold text-[#007FFF]">CE</span>
                </div>
                <span className="text-sm text-[#7A8A9E]">CE Certified</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#007FFF]/10 to-[#283692]/10 flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold text-[#007FFF]">ISO</span>
                </div>
                <span className="text-sm text-[#7A8A9E]">ISO 13485</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#007FFF]/10 to-[#283692]/10 flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold text-[#007FFF]">FDA</span>
                </div>
                <span className="text-sm text-[#7A8A9E]">US FDA Approved</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#007FFF]/10 to-[#283692]/10 flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold text-[#007FFF]">IEC</span>
                </div>
                <span className="text-sm text-[#7A8A9E]">IEC Compliant</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692] to-[#007FFF] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Ready to Bring hPod to Your Community?
            </h2>
            <p className="text-xl mb-10 text-white/95 max-w-3xl mx-auto">
              Transform healthcare access with our smart diagnostic kiosk. Book a demo or partner with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-white text-[#283692] font-bold text-lg hover:bg-white/90 transition-all hover:scale-105 shadow-xl"
              >
                Schedule a Demo
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-10 py-5 rounded-2xl border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all hover:scale-105"
              >
                Become a Partner
              </a>
            </div>
          </div>
        </section>
      </main>
      <DiaspoFooter />
      <BackToTop />
    </div>
  );
};

export default HPodKiosk;
