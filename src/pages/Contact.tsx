import React from 'react';
import DiaspoHeader from '@/components/DiaspoHeader';
import DiaspoFooter from '@/components/DiaspoFooter';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <DiaspoHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white rounded-full border border-[#007FFF]/20 shadow-sm mb-4">
              <span className="text-[#283692] font-semibold text-sm">💬 Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#3A3F46] mb-6">
              Contact <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-[#7A8A9E] max-w-3xl mx-auto">
              Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Phone Numbers */}
              <div className="bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 rounded-2xl p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">Call Us</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-[#7A8A9E] mb-1">United States</p>
                    <a href="tel:+16124400892" className="text-[#283692] hover:text-[#007FFF] font-semibold">
                      +1 612 440 0892
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-[#7A8A9E] mb-1">Kenya</p>
                    <a href="tel:+254700771125" className="text-[#283692] hover:text-[#007FFF] font-semibold block">
                      +254 700 771 125
                    </a>
                    <a href="tel:+254700773074" className="text-[#283692] hover:text-[#007FFF] font-semibold block">
                      +254 700 773 074
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-[#7A8A9E] mb-1">Ghana</p>
                    <a href="tel:+233550425321" className="text-[#283692] hover:text-[#007FFF] font-semibold">
                      +233 55 042 5321
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-[#7A8A9E] mb-1">Nigeria</p>
                    <a href="tel:+2348058408055" className="text-[#283692] hover:text-[#007FFF] font-semibold">
                      +234 805 840 8055
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 rounded-2xl p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">Email Us</h3>
                <p className="text-[#7A8A9E] mb-4">Send us an email and we'll respond within 24 hours</p>
                <a href="mailto:hello@diaspocare.com" className="text-[#283692] hover:text-[#007FFF] font-semibold text-lg">
                  hello@diaspocare.com
                </a>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 rounded-2xl p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#283692] to-[#007FFF] flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3A3F46] mb-4">Business Hours</h3>
                <div className="space-y-2 text-[#7A8A9E]">
                  <p><span className="font-semibold text-[#3A3F46]">Monday - Friday:</span> 8am - 8pm</p>
                  <p><span className="font-semibold text-[#3A3F46]">Saturday:</span> 9am - 5pm</p>
                  <p><span className="font-semibold text-[#3A3F46]">Sunday:</span> Closed</p>
                  <p className="text-sm pt-2">*All times in respective local time zones</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-12 border border-[#007FFF]/10">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <MessageCircle className="w-16 h-16 text-[#283692] mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-[#3A3F46] mb-2">Send Us a Message</h2>
                  <p className="text-[#7A8A9E]">Fill out the form below and our team will get back to you</p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#3A3F46] mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-[#007FFF]/20 focus:border-[#007FFF] focus:outline-none focus:ring-2 focus:ring-[#007FFF]/20 transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#3A3F46] mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-[#007FFF]/20 focus:border-[#007FFF] focus:outline-none focus:ring-2 focus:ring-[#007FFF]/20 transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#3A3F46] mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-[#007FFF]/20 focus:border-[#007FFF] focus:outline-none focus:ring-2 focus:ring-[#007FFF]/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#3A3F46] mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-[#007FFF]/20 focus:border-[#007FFF] focus:outline-none focus:ring-2 focus:ring-[#007FFF]/20 transition-all"
                      placeholder="+1 234 567 8900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#3A3F46] mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-[#007FFF]/20 focus:border-[#007FFF] focus:outline-none focus:ring-2 focus:ring-[#007FFF]/20 transition-all"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#3A3F46] mb-2">Message</label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-[#007FFF]/20 focus:border-[#007FFF] focus:outline-none focus:ring-2 focus:ring-[#007FFF]/20 transition-all resize-none"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 rounded-2xl bg-gradient-to-r from-[#283692] to-[#007FFF] text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section (Placeholder) */}
        <section className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-[#3A3F46] mb-4">Our Locations</h2>
              <p className="text-xl text-[#7A8A9E]">Serving diaspora families across the globe</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <MapPin className="w-8 h-8 text-[#283692] mx-auto mb-3" />
                <h3 className="font-bold text-[#3A3F46] mb-1">United States</h3>
                <p className="text-sm text-[#7A8A9E]">Minneapolis, MN</p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <MapPin className="w-8 h-8 text-[#283692] mx-auto mb-3" />
                <h3 className="font-bold text-[#3A3F46] mb-1">Kenya</h3>
                <p className="text-sm text-[#7A8A9E]">Nairobi</p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <MapPin className="w-8 h-8 text-[#283692] mx-auto mb-3" />
                <h3 className="font-bold text-[#3A3F46] mb-1">Ghana</h3>
                <p className="text-sm text-[#7A8A9E]">Accra</p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <MapPin className="w-8 h-8 text-[#283692] mx-auto mb-3" />
                <h3 className="font-bold text-[#3A3F46] mb-1">Nigeria</h3>
                <p className="text-sm text-[#7A8A9E]">Lagos</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <DiaspoFooter />
      <BackToTop />
    </div>
  );
};

export default Contact;
