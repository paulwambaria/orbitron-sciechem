'use client';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Scale, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const PILLARS = [
  {
    Icon: Leaf,
    title: 'Responsible Sourcing',
    desc: 'We partner with manufacturers who adhere to environmental and ethical production standards.',
  },
  {
    Icon: Recycle,
    title: 'Environmental Stewardship',
    desc: 'Minimizing environmental impact through eco-conscious logistics and waste reduction initiatives.',
  },
  {
    Icon: Scale,
    title: 'Regulatory Compliance',
    desc: 'Full compliance with local and international chemical safety and environmental regulations.',
  },
  {
    Icon: TrendingUp,
    title: 'Sustainable Growth',
    desc: 'Building long-term partnerships that drive industrial development while protecting our communities.',
  },
];

export default function Sustainability() {
  return (
    <section className="section-grad py-20 lg:py-28 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #F58220 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="tag-pill tag-orange">Sustainability</span>
            <h2 className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6 leading-tight">
              Building a{' '}
              <span className="text-acc-500">Sustainable</span>{' '}
              Future
            </h2>
            <p className="font-sans text-blue-200/80 text-lg leading-relaxed mb-6">
              Orbitron Sciechem is committed to responsible sourcing, environmental stewardship,
              regulatory compliance, and sustainable industrial growth through strategic partnerships
              and innovative supply chain practices.
            </p>
            <p className="font-sans text-blue-200/65 leading-relaxed mb-8">
              We believe that business success and environmental responsibility go hand in hand.
              Our sustainability framework guides every decision — from supplier selection to
              packaging choices and distribution methods.
            </p>
            <Link
              href="/about#sustainability"
              className="btn-accent inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm transition-all"
            >
              Our Sustainability Commitments <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Right: Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {PILLARS.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/8 border border-white/15 rounded-2xl p-5 hover:bg-white/12 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-acc-500/20 flex items-center justify-center mb-3">
                  <Icon size={20} className="text-acc-400" />
                </div>
                <h3 className="font-heading font-bold text-white text-sm mb-2">{title}</h3>
                <p className="font-sans text-blue-200/60 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
