'use client';
import { motion } from 'framer-motion';
import { Award, Globe, Users, Package, Heart, Map } from 'lucide-react';

const REASONS = [
  {
    Icon: Award,
    title: 'Certified Products',
    desc: 'All products meet KEBS, ISO, and GMP standards. We supply only verified, quality-assured chemicals and laboratory solutions.',
    color: 'bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white',
  },
  {
    Icon: Globe,
    title: 'Global Partnerships',
    desc: 'Direct sourcing from 50+ leading manufacturers across Europe, North America, and Asia ensures premium quality and competitive pricing.',
    color: 'bg-acc-50 text-acc-600 group-hover:bg-acc-500 group-hover:text-white',
  },
  {
    Icon: Users,
    title: 'Technical Expertise',
    desc: 'Our team of industry specialists and laboratory experts provides hands-on technical guidance and application support.',
    color: 'bg-green-50 text-green-700 group-hover:bg-green-600 group-hover:text-white',
  },
  {
    Icon: Package,
    title: 'Reliable Supply',
    desc: 'Consistent inventory levels, buffer stock management, and just-in-time delivery minimize disruption to your operations.',
    color: 'bg-purple-50 text-purple-700 group-hover:bg-purple-700 group-hover:text-white',
  },
  {
    Icon: Heart,
    title: 'Customer-Centric Approach',
    desc: 'We work as a long-term strategic partner — tailoring product recommendations, formulations, and logistics to your specific needs.',
    color: 'bg-rose-50 text-rose-700 group-hover:bg-rose-600 group-hover:text-white',
  },
  {
    Icon: Map,
    title: 'Regional Reach',
    desc: 'Distribution network spanning Kenya, Uganda, Tanzania, Rwanda, Ethiopia, and South Sudan with reliable last-mile delivery.',
    color: 'bg-cyan-50 text-cyan-700 group-hover:bg-cyan-600 group-hover:text-white',
  },
];

export default function WhyChoose() {
  return (
    <section className="section-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tag-pill"
          >
            Why Orbitron Sciechem
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-blue-800 text-3xl sm:text-4xl lg:text-5xl mt-4 mb-4"
          >
            Why Industry Leaders{' '}
            <span className="text-orange-gradient">Choose Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-neutral-500 max-w-2xl mx-auto text-lg"
          >
            Six compelling reasons why 500+ companies across East Africa trust Orbitron Sciechem
            as their preferred chemical and laboratory solutions partner.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map(({ Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09 }}
              className="group card p-7 flex flex-col"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${color}`}>
                <Icon size={26} />
              </div>
              <h3 className="font-heading font-bold text-blue-800 text-lg mb-3 group-hover:text-acc-500 transition-colors">
                {title}
              </h3>
              <p className="font-sans text-neutral-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
