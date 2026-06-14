'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section-grad relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #0057B8 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #F58220 0%, transparent 70%)' }} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="tag-pill tag-orange"
        >
          Partner With Us
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading font-black text-white text-4xl sm:text-5xl lg:text-6xl mt-5 mb-5 leading-tight"
        >
          Ready to Power{' '}
          <span className="text-acc-500">Your Industry</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sans text-blue-200/80 text-xl mb-10 leading-relaxed"
        >
          Partner with Orbitron Sciechem Limited for world-class chemical, laboratory and
          industrial solutions. Join 500+ companies across East Africa who trust us daily.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact#quote"
            className="btn-accent inline-flex items-center gap-2 px-9 py-4 rounded-full text-base transition-all shadow-2xl shadow-acc-500/30 hover:shadow-acc-500/50"
          >
            Get a Quote <ArrowRight size={18} />
          </Link>
          <a
            href="https://wa.me/254742651823?text=Hello%2C%20I%27d%20like%20to%20speak%20with%20an%20expert%20about%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white inline-flex items-center gap-2 px-9 py-4 rounded-full text-base transition-all"
          >
            <MessageCircle size={18} /> Talk to an Expert
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-10 border-t border-white/10"
        >
          {[
            { value: '500+', label: 'Active Clients' },
            { value: '1,000+', label: 'Product Lines' },
            { value: '24/7', label: 'Technical Support' },
            { value: '6+', label: 'Countries Served' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-heading font-black text-acc-400 text-2xl">{value}</div>
              <div className="font-sans text-blue-200/50 text-xs mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
