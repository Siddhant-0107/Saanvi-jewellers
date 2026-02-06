"use client";

import { useState } from "react";
import Image from "next/image";

const storeInfo = {
  address: "123 Heritage Lane, Jewellers Market, Mumbai, Maharashtra 400001",
  phone: "+91 63941 75639",
  email: "hello@trimurtisaanvi.com",
  whatsapp: "916394175639",
  hours: {
    weekday: "Monday – Saturday: 10:00 AM – 8:00 PM",
    weekend: "Sunday: 11:00 AM – 6:00 PM",
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 bg-gradient-to-b from-purple-950 via-purple-900 to-[#12022a] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-2.jpg"
            alt="Contact Trimurti Saanvi Jewellers"
            fill
            className="object-cover opacity-12"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-950/80 via-purple-900/85 to-[#12022a]" />
        </div>
        <div className="absolute top-1/3 left-1/4 w-[420px] h-[420px] bg-gold-400/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="noise-overlay opacity-[0.03]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold-400 font-semibold mb-5 animate-[fade-in-down_0.8s_ease_both]">
            Get in Touch
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-white leading-[1.1] mb-5 sm:mb-6 animate-[fade-in-down_0.8s_0.15s_ease_both]">
            We&apos;d Love to Hear from You
          </h1>
          <div className="ornament-divider justify-center mb-7 animate-[fade-in-down_0.8s_0.3s_ease_both]">
            <div className="diamond !bg-gold-500" />
          </div>
          <p className="text-[16px] text-white/50 max-w-2xl mx-auto leading-[1.85] animate-[fade-in-down_0.8s_0.4s_ease_both]">
            Whether you&apos;re looking for the perfect piece or wish to schedule
            a private consultation, our team is here to assist you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#12022a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-purple-500/[0.06] rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-gold-500/[0.04] rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Store Info Column */}
            <div className="lg:col-span-2">
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold-400 font-semibold mb-4">
                Visit Our Showroom
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-white font-semibold leading-[1.15] mb-3">
                Experience Luxury
                <br />
                <span className="text-shimmer-gold">in Person</span>
              </h2>
              <div className="ornament-divider justify-start mb-8">
                <div className="diamond" />
              </div>

              <div className="space-y-7">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/[0.06] flex items-center justify-center text-gold-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-base text-white font-semibold mb-1.5">
                      Address
                    </h3>
                    <p className="text-[14px] text-white/40 leading-[1.7]">
                      {storeInfo.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/[0.06] flex items-center justify-center text-gold-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-base text-white font-semibold mb-1.5">
                      Phone
                    </h3>
                    <a
                      href={`tel:${storeInfo.phone}`}
                      className="text-[14px] text-white/40 hover:text-gold-400 transition-colors duration-300"
                    >
                      {storeInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/[0.06] flex items-center justify-center text-gold-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-base text-white font-semibold mb-1.5">
                      Email
                    </h3>
                    <a
                      href={`mailto:${storeInfo.email}`}
                      className="text-[14px] text-white/40 hover:text-gold-400 transition-colors duration-300"
                    >
                      {storeInfo.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/[0.06] flex items-center justify-center text-gold-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-base text-white font-semibold mb-1.5">
                      Store Hours
                    </h3>
                    <p className="text-[14px] text-white/40 leading-[1.7]">
                      {storeInfo.hours.weekday}
                      <br />
                      {storeInfo.hours.weekend}
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-10 luxury-card p-7 bg-white/[0.05] backdrop-blur-sm rounded-2xl border border-white/[0.08]">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-base text-white font-semibold">
                      Chat on WhatsApp
                    </h3>
                    <p className="text-[12px] text-white/40 mt-0.5">
                      Quick replies, usually within minutes
                    </p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${storeInfo.whatsapp}?text=Hello%20Trimurti%20Saanvi!%20I%20would%20like%20to%20inquire%20about%20your%20jewellery%20collections.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 bg-green-500 text-white text-center text-[11px] uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-green-600 transition-colors duration-300 shadow-lg shadow-green-500/20"
                >
                  Start WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-3">
              <div className="bg-white/[0.05] backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl shadow-black/20 p-6 sm:p-8 lg:p-10 border border-white/[0.08]">
                <p className="text-[11px] uppercase tracking-[0.3em] text-gold-400 font-semibold mb-3">
                  Send Us a Message
                </p>
                <h2 className="font-serif text-2xl md:text-3xl text-white font-semibold mb-2.5 leading-[1.15]">
                  Inquiry Form
                </h2>
                <p className="text-[14px] text-white/40 mb-9">
                  Fill in your details and we&apos;ll get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl text-white font-semibold mb-3">
                      Thank You!
                    </h3>
                    <p className="text-[15px] text-white/45 mb-6 leading-[1.7]">
                      We&apos;ve received your inquiry. Our team will reach out to you
                      within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", phone: "", email: "", interest: "", message: "" });
                      }}
                      className="text-[11px] text-gold-400 font-semibold uppercase tracking-[0.2em] hover:text-gold-300 transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold mb-2.5"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-5 py-3.5 bg-white/[0.06] border border-white/[0.1] rounded-xl text-[14px] text-white placeholder:text-white/25 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/15 focus:bg-white/[0.08] transition-all duration-300"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold mb-2.5"
                        >
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 63941 75639"
                          className="w-full px-5 py-3.5 bg-white/[0.06] border border-white/[0.1] rounded-xl text-[14px] text-white placeholder:text-white/25 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/15 focus:bg-white/[0.08] transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold mb-2.5"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-5 py-3.5 bg-white/[0.06] border border-white/[0.1] rounded-xl text-[14px] text-white placeholder:text-white/25 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/15 focus:bg-white/[0.08] transition-all duration-300"
                      />
                    </div>

                    {/* Interest */}
                    <div>
                      <label
                        htmlFor="interest"
                        className="block text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold mb-2.5"
                      >
                        I&apos;m Interested In
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 bg-white/[0.06] border border-white/[0.1] rounded-xl text-[14px] text-white focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/15 focus:bg-white/[0.08] transition-all duration-300 appearance-none"
                      >
                        <option value="">Select a category</option>
                        <option value="gold-jewellery">Gold Jewellery</option>
                        <option value="diamond-jewellery">Diamond Jewellery</option>
                        <option value="bridal-sets">Bridal Sets</option>
                        <option value="custom-design">Custom Design</option>
                        <option value="store-visit">Schedule a Store Visit</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold mb-2.5"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what you're looking for..."
                        className="w-full px-5 py-3.5 bg-white/[0.06] border border-white/[0.1] rounded-xl text-[14px] text-white placeholder:text-white/25 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/15 focus:bg-white/[0.08] transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-[11px] uppercase tracking-[0.2em] font-semibold rounded-full hover:from-gold-600 hover:to-gold-700 transition-all duration-500 shadow-lg shadow-gold-500/20 hover:shadow-xl hover:shadow-gold-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Inquiry"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[420px] bg-purple-950 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-white/[0.06] flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <p className="text-[14px] text-white/60 font-medium">
              Google Maps Integration
            </p>
            <p className="text-[12px] text-white/30 mt-1.5">
              Add your Google Maps embed code here
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
