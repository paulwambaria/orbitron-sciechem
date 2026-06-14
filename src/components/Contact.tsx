'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', industry: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fieldCls = "w-full border border-neutral-200 rounded-xl px-4 py-3 font-sans text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-white";

  return (
    <section id="contact" className="section-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tag-pill"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-blue-800 text-3xl sm:text-4xl lg:text-5xl mt-4 mb-4"
          >
            Let&apos;s Start a{' '}
            <span className="text-orange-gradient">Conversation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-neutral-500 max-w-2xl mx-auto"
          >
            Whether you need a quote, technical advice, or want to become a partner — our team is
            ready to assist you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {/* Info cards */}
            {[
              {
                Icon: MapPin,
                title: 'Head Office',
                lines: ['Hillpark Business Park, Go-Down 4,', 'Nairobi, Kenya'],
              },
              {
                Icon: Phone,
                title: 'Phone',
                lines: ['+254 742 651 823'],
                href: 'tel:+254742651823',
              },
              {
                Icon: Mail,
                title: 'Email',
                lines: ['info@orbitronsciechem.com'],
                href: 'mailto:info@orbitronsciechem.com',
              },
              {
                Icon: Clock,
                title: 'Business Hours',
                lines: ['Mon – Fri: 8:00 AM – 6:00 PM', 'Saturday: 9:00 AM – 2:00 PM'],
              },
            ].map(({ Icon, title, lines, href }) => (
              <div key={title} className="bg-white rounded-2xl p-5 border border-neutral-100 flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-acc-500" />
                </div>
                <div>
                  <div className="font-heading font-bold text-blue-800 text-sm mb-1">{title}</div>
                  {lines.map((line) =>
                    href ? (
                      <a key={line} href={href} className="font-sans text-neutral-600 text-sm hover:text-acc-500 transition-colors block">
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="font-sans text-neutral-600 text-sm">{line}</p>
                    )
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/254742651823?text=Hello%2C%20I%27m%20interested%20in%20Orbitron%20Sciechem%20products.%20Please%20assist%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1da851] text-white px-5 py-4 rounded-2xl font-heading font-bold text-sm transition-all hover:shadow-lg"
            >
              <MessageCircle size={20} />
              <div>
                <div>WhatsApp Us</div>
                <div className="font-sans font-normal text-xs text-green-100">Quick Response · 24/7</div>
              </div>
            </a>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-gradient-to-br from-blue-50 to-blue-100 h-40 flex flex-col items-center justify-center text-blue-400">
              <MapPin size={32} className="mb-2" />
              <span className="font-sans text-sm text-blue-500">Hillpark Business Park, Nairobi</span>
              <a
                href="https://maps.google.com/?q=Hillpark+Business+Park+Nairobi+Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 font-heading font-bold text-xs text-blue-600 hover:text-acc-500 transition-colors"
              >
                Open in Google Maps →
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            id="quote"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-8">
              <h3 className="font-heading font-bold text-blue-800 text-xl mb-2">Send Us a Message</h3>
              <p className="font-sans text-neutral-500 text-sm mb-6">We respond within 2 business hours.</p>

              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                    <Send size={28} className="text-green-500" />
                  </div>
                  <h4 className="font-heading font-bold text-blue-800 text-lg mb-2">Message Sent!</h4>
                  <p className="font-sans text-neutral-500">Thank you for reaching out. Our team will get back to you within 2 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-heading font-semibold text-neutral-700 text-xs uppercase tracking-wide mb-1.5 block">Full Name *</label>
                      <input
                        type="text" name="name" required value={form.name} onChange={handleChange}
                        placeholder="John Kamau"
                        className={fieldCls}
                      />
                    </div>
                    <div>
                      <label className="font-heading font-semibold text-neutral-700 text-xs uppercase tracking-wide mb-1.5 block">Company Name</label>
                      <input
                        type="text" name="company" value={form.company} onChange={handleChange}
                        placeholder="ABC Industries Ltd"
                        className={fieldCls}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-heading font-semibold text-neutral-700 text-xs uppercase tracking-wide mb-1.5 block">Email Address *</label>
                      <input
                        type="email" name="email" required value={form.email} onChange={handleChange}
                        placeholder="john@company.com"
                        className={fieldCls}
                      />
                    </div>
                    <div>
                      <label className="font-heading font-semibold text-neutral-700 text-xs uppercase tracking-wide mb-1.5 block">Phone Number</label>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+254 7XX XXX XXX"
                        className={fieldCls}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-heading font-semibold text-neutral-700 text-xs uppercase tracking-wide mb-1.5 block">Industry</label>
                    <select name="industry" value={form.industry} onChange={handleChange} className={fieldCls}>
                      <option value="">Select your industry</option>
                      {[
                        'Manufacturing', 'Food & Beverage', 'Pharmaceuticals', 'Water Treatment',
                        'Petroleum & Energy', 'Research / Laboratory', 'Agriculture', 'Government / Institution', 'Other',
                      ].map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-heading font-semibold text-neutral-700 text-xs uppercase tracking-wide mb-1.5 block">Message / Product Inquiry *</label>
                    <textarea
                      name="message" required value={form.message} onChange={handleChange}
                      placeholder="Please describe the products you need, quantities, and any specific requirements..."
                      rows={5}
                      className={`${fieldCls} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm transition-all"
                  >
                    <Send size={16} />
                    Send Message & Request Quote
                  </button>

                  <p className="font-sans text-neutral-400 text-xs text-center">
                    By submitting this form, you agree to our privacy policy. We do not share your information.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
