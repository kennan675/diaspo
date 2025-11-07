import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import PageLayout from '@/components/layouts/PageLayout';

const Contact: React.FC = () => {
  return (
    <PageLayout>
      <section
        className="bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 py-20 px-6 sm:px-12 md:px-20"
        data-animate="fade-up"
      >
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-4 inline-block rounded-full border border-[#007FFF]/20 bg-white px-4 py-2 shadow-sm">
            <span className="text-sm font-semibold text-[#283692]">💬 Get In Touch</span>
          </div>
          <h1 className="mb-6 text-5xl font-extrabold text-[#3A3F46] md:text-6xl">
            Contact <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-[#7A8A9E]">
            Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-6 sm:px-12 md:px-20" data-animate="fade-up">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#283692] to-[#007FFF]">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#3A3F46]">Call Us</h3>
              <div className="space-y-3">
                <div>
                  <p className="mb-1 text-sm text-[#7A8A9E]">United States</p>
                  <a href="tel:+16124400892" className="font-semibold text-[#283692] transition-colors hover:text-[#007FFF]">
                    +1 612 440 0892
                  </a>
                </div>
                <div>
                  <p className="mb-1 text-sm text-[#7A8A9E]">Kenya</p>
                  <a href="tel:+254700771125" className="block font-semibold text-[#283692] transition-colors hover:text-[#007FFF]">
                    +254 700 771 125
                  </a>
                  <a href="tel:+254700773074" className="block font-semibold text-[#283692] transition-colors hover:text-[#007FFF]">
                    +254 700 773 074
                  </a>
                </div>
                <div>
                  <p className="mb-1 text-sm text-[#7A8A9E]">Ghana</p>
                  <a href="tel:+233550425321" className="font-semibold text-[#283692] transition-colors hover:text-[#007FFF]">
                    +233 55 042 5321
                  </a>
                </div>
                <div>
                  <p className="mb-1 text-sm text-[#7A8A9E]">Nigeria</p>
                  <a href="tel:+2348058408055" className="font-semibold text-[#283692] transition-colors hover:text-[#007FFF]">
                    +234 805 840 8055
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#283692] to-[#007FFF]">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#3A3F46]">Email Us</h3>
              <p className="mb-4 text-[#7A8A9E]">Send us an email and we'll respond within 24 hours</p>
              <a href="mailto:hello@diaspocare.com" className="text-lg font-semibold text-[#283692] transition-colors hover:text-[#007FFF]">
                hello@diaspocare.com
              </a>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#283692] to-[#007FFF]">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#3A3F46]">Business Hours</h3>
              <div className="space-y-2 text-[#7A8A9E]">
                <p>
                  <span className="font-semibold text-[#3A3F46]">Monday - Friday:</span> 8am - 8pm
                </p>
                <p>
                  <span className="font-semibold text-[#3A3F46]">Saturday:</span> 9am - 5pm
                </p>
                <p>
                  <span className="font-semibold text-[#3A3F46]">Sunday:</span> Closed
                </p>
                <p className="pt-2 text-sm">*All times in respective local time zones</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[#007FFF]/10 bg-white p-12 shadow-xl">
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 text-center">
                <MessageCircle className="mx-auto mb-4 h-16 w-16 text-[#283692]" />
                <h2 className="mb-2 text-3xl font-bold text-[#3A3F46]">Send Us a Message</h2>
                <p className="text-[#7A8A9E]">Fill out the form below and our team will get back to you</p>
              </div>

              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#3A3F46]">First Name</label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-[#007FFF]/20 px-4 py-3 transition-all focus:border-[#007FFF] focus:outline-none focus:ring-2 focus:ring-[#007FFF]/20"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#3A3F46]">Last Name</label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-[#007FFF]/20 px-4 py-3 transition-all focus:border-[#007FFF] focus:outline-none focus:ring-2 focus:ring-[#007FFF]/20"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#3A3F46]">Email Address</label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-[#007FFF]/20 px-4 py-3 transition-all focus:border-[#007FFF] focus:outline-none focus:ring-2 focus:ring-[#007FFF]/20"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#3A3F46]">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full rounded-xl border border-[#007FFF]/20 px-4 py-3 transition-all focus:border-[#007FFF] focus:outline-none focus:ring-2 focus:ring-[#007FFF]/20"
                    placeholder="+1 234 567 8900"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#3A3F46]">Subject</label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-[#007FFF]/20 px-4 py-3 transition-all focus:border-[#007FFF] focus:outline-none focus:ring-2 focus:ring-[#007FFF]/20"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#3A3F46]">Message</label>
                  <textarea
                    rows={6}
                    className="w-full resize-none rounded-xl border border-[#007FFF]/20 px-4 py-3 transition-all focus:border-[#007FFF] focus:outline-none focus:ring-2 focus:ring-[#007FFF]/20"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-[#283692] to-[#007FFF] px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-gradient-to-br from-[#283692]/5 to-[#007FFF]/5 py-20 px-6 sm:px-12 md:px-20"
        data-animate="fade-up"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-[#3A3F46]">Our Locations</h2>
            <p className="text-xl text-[#7A8A9E]">Serving diaspora families across the globe</p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 text-center shadow-lg">
              <MapPin className="mx-auto mb-3 h-8 w-8 text-[#283692]" />
              <h3 className="mb-1 font-bold text-[#3A3F46]">United States</h3>
              <p className="text-sm text-[#7A8A9E]">Minneapolis, MN</p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-lg">
              <MapPin className="mx-auto mb-3 h-8 w-8 text-[#283692]" />
              <h3 className="mb-1 font-bold text-[#3A3F46]">Kenya</h3>
              <p className="text-sm text-[#7A8A9E]">Nairobi</p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-lg">
              <MapPin className="mx-auto mb-3 h-8 w-8 text-[#283692]" />
              <h3 className="mb-1 font-bold text-[#3A3F46]">Ghana</h3>
              <p className="text-sm text-[#7A8A9E]">Accra</p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-lg">
              <MapPin className="mx-auto mb-3 h-8 w-8 text-[#283692]" />
              <h3 className="mb-1 font-bold text-[#3A3F46]">Nigeria</h3>
              <p className="text-sm text-[#7A8A9E]">Lagos</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
