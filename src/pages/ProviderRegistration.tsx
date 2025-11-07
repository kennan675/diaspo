import React, { useState } from 'react';
import DiaspoHeader from '@/components/DiaspoHeader';
import DiaspoFooter from '@/components/DiaspoFooter';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import { Building2, User, Mail, Phone, MapPin, FileText, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ProviderRegistration: React.FC = () => {
  const [formData, setFormData] = useState({
    providerType: '',
    facilityName: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    address: '',
    licenseNumber: '',
    yearsOfOperation: '',
    services: [] as string[],
    additionalInfo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your interest! We will review your application and get back to you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceToggle = (service: string) => {
    setFormData({
      ...formData,
      services: formData.services.includes(service)
        ? formData.services.filter(s => s !== service)
        : [...formData.services, service]
    });
  };

  const scope = React.useRef<HTMLDivElement | null>(null);
  useScrollReveal(scope);

  return (
    <div ref={scope} className="min-h-screen bg-white">
      <ScrollProgress />
      <DiaspoHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section
          className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692] to-[#007FFF] text-white"
          data-animate="fade-up"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
              <span className="font-semibold text-sm">🌐 Provider Registration</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Join DiaspoCare Network
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Partner with us to provide quality healthcare services to diaspora families and their loved ones across Africa
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          className="py-12 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5"
          data-animate="fade-up"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-[#3A3F46] text-center mb-8">Why Join DiaspoCare?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <CheckCircle className="w-12 h-12 text-[#007FFF] mb-4" />
                <h3 className="text-xl font-bold text-[#3A3F46] mb-2">Expand Your Reach</h3>
                <p className="text-[#7A8A9E]">Connect with diaspora families worldwide and grow your patient base</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <CheckCircle className="w-12 h-12 text-[#007FFF] mb-4" />
                <h3 className="text-xl font-bold text-[#3A3F46] mb-2">Guaranteed Payments</h3>
                <p className="text-[#7A8A9E]">Direct, transparent payments with zero fund diversion</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <CheckCircle className="w-12 h-12 text-[#007FFF] mb-4" />
                <h3 className="text-xl font-bold text-[#3A3F46] mb-2">Digital Platform</h3>
                <p className="text-[#7A8A9E]">Access modern tools for patient management and coordination</p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-white" data-animate="fade-up">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-[#007FFF]/10 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-[#3A3F46] mb-8 text-center">Provider Application Form</h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Provider Type */}
                <div>
                  <label className="block text-sm font-bold text-[#3A3F46] mb-3">
                    <Building2 className="w-4 h-4 inline mr-2" />
                    Provider Type *
                  </label>
                  <select
                    name="providerType"
                    value={formData.providerType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#007FFF]/20 focus:border-[#007FFF] focus:outline-none transition-all"
                  >
                    <option value="">Select provider type</option>
                    <option value="pharmacy">Pharmacy</option>
                    <option value="clinic">Clinic</option>
                    <option value="hospital">Hospital</option>
                    <option value="diagnostic">Diagnostic Laboratory</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Facility Name */}
                <div>
                  <label className="block text-sm font-bold text-[#3A3F46] mb-3">Facility/Organization Name *</label>
                  <input
                    type="text"
                    name="facilityName"
                    value={formData.facilityName}
                    onChange={handleChange}
                    required
                    placeholder="Enter facility name"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#007FFF]/20 focus:border-[#007FFF] focus:outline-none transition-all"
                  />
                </div>

                {/* Contact Person */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#3A3F46] mb-3">
                      <User className="w-4 h-4 inline mr-2" />
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="John"
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#007FFF]/20 focus:border-[#007FFF] focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#3A3F46] mb-3">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Doe"
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#007FFF]/20 focus:border-[#007FFF] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#3A3F46] mb-3">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#007FFF]/20 focus:border-[#007FFF] focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#3A3F46] mb-3">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+254 700 000 000"
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#007FFF]/20 focus:border-[#007FFF] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#3A3F46] mb-3">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Country *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#007FFF]/20 focus:border-[#007FFF] focus:outline-none transition-all"
                    >
                      <option value="">Select country</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Tanzania">Tanzania</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#3A3F46] mb-3">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder="Nairobi"
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#007FFF]/20 focus:border-[#007FFF] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-bold text-[#3A3F46] mb-3">Physical Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Street address, building, floor"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#007FFF]/20 focus:border-[#007FFF] focus:outline-none transition-all"
                  />
                </div>

                {/* License Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#3A3F46] mb-3">
                      <FileText className="w-4 h-4 inline mr-2" />
                      License/Registration Number *
                    </label>
                    <input
                      type="text"
                      name="licenseNumber"
                      value={formData.licenseNumber}
                      onChange={handleChange}
                      required
                      placeholder="License number"
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#007FFF]/20 focus:border-[#007FFF] focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#3A3F46] mb-3">Years in Operation *</label>
                    <input
                      type="number"
                      name="yearsOfOperation"
                      value={formData.yearsOfOperation}
                      onChange={handleChange}
                      required
                      placeholder="5"
                      min="0"
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#007FFF]/20 focus:border-[#007FFF] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Services Offered */}
                <div>
                  <label className="block text-sm font-bold text-[#3A3F46] mb-3">Services Offered * (Select all that apply)</label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {['Consultations', 'Prescriptions', 'Diagnostic Tests', 'In-Patient Care', 'Emergency Services', 'Pharmacy Services', 'Laboratory Services', 'Imaging Services'].map((service) => (
                      <label key={service} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          className="w-5 h-5 text-[#007FFF] rounded focus:ring-[#007FFF]"
                        />
                        <span className="text-[#3A3F46]">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-sm font-bold text-[#3A3F46] mb-3">Additional Information</label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us more about your facility, specializations, or any questions you have..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#007FFF]/20 focus:border-[#007FFF] focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-12 py-4 rounded-2xl bg-gradient-to-r from-[#283692] to-[#007FFF] text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                  >
                    Submit Application
                  </button>
                  <p className="text-sm text-[#7A8A9E] mt-4">
                    * Required fields. We'll review your application and contact you within 48 hours.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section
          className="py-12 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5"
          data-animate="fade-up"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">Have Questions?</h3>
            <p className="text-[#7A8A9E] mb-6">
              Our team is here to help you through the registration process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:hello@diaspocare.com" className="px-6 py-3 rounded-xl bg-white text-[#007FFF] font-semibold border-2 border-[#007FFF]/20 hover:bg-[#007FFF]/5 transition-all">
                Email Us
              </a>
              <a href="/contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#283692] to-[#007FFF] text-white font-semibold hover:scale-105 transition-all">
                Contact Page
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

export default ProviderRegistration;
