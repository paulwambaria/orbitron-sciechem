'use client';
import { motion } from 'framer-motion';
import {
  MessageSquare, Search, ShieldCheck, PackageCheck, Headphones,
} from 'lucide-react';

const STEPS = [
  {
    step: '01',
    Icon: MessageSquare,
    title: 'Consultation',
    desc: 'Discuss your requirements, industry needs, and technical specifications with our specialists.',
  },
  {
    step: '02',
    Icon: Search,
    title: 'Product Selection',
    desc: 'We identify and recommend the optimal products from our 1,000+ catalog tailored to your application.',
  },
  {
    step: '03',
    Icon: ShieldCheck,
    title: 'Quality Verification',
    desc: 'Every batch undergoes rigorous quality checks — certificates of analysis, COA, and compliance documents provided.',
  },
  {
    step: '04',
    Icon: PackageCheck,
    title: 'Order Fulfillment',
    desc: 'Efficient processing, secure packaging, and timely delivery to your facility anywhere in East Africa.',
  },
  {
    step: '05',
    Icon: Headphones,
    title: 'Technical Support',
    desc: 'Ongoing after-sales support, application guidance, and reorder management by our dedicated team.',
  },
];

export default function Process() {
  return (
    <section className="section-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tag-pill"
          >
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-blue-800 text-3xl sm:text-4xl lg:text-5xl mt-4 mb-4"
          >
            Our Streamlined Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-neutral-500 max-w-2xl mx-auto text-lg"
          >
            A simple, transparent five-step process from first contact to ongoing technical support.
          </motion.p>
        </div>

        {/* Steps — desktop horizontal, mobile vertical */}
        <div className="hidden lg:flex items-start gap-0">
          {STEPS.map(({ step, Icon, title, desc }, i) => (
            <div key={title} className="flex-1 flex flex-col items-center text-center px-3 relative">
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="absolute top-9 left-[calc(50%+36px)] right-[calc(-50%+36px)] h-0.5 bg-gradient-to-r from-blue-200 to-acc-200" />
              )}

              {/* Circle */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, type: 'spring', stiffness: 200 }}
                className="relative w-[72px] h-[72px] rounded-full bg-blue-700 flex flex-col items-center justify-center shadow-lg shadow-blue-200 mb-4 z-10"
              >
                <Icon size={26} className="text-white" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-acc-500 text-white text-[10px] font-black font-heading flex items-center justify-center">
                  {step}
                </span>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + 0.15 }}
                className="font-heading font-bold text-blue-800 text-sm mb-2"
              >
                {title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + 0.25 }}
                className="font-sans text-neutral-500 text-xs leading-relaxed"
              >
                {desc}
              </motion.p>
            </div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="flex lg:hidden flex-col gap-0 relative">
          <div className="absolute left-9 top-9 bottom-9 w-0.5 bg-gradient-to-b from-blue-200 via-acc-200 to-blue-200" />
          {STEPS.map(({ step, Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-5 pb-8 last:pb-0 relative"
            >
              <div className="relative w-[72px] h-[72px] rounded-full bg-blue-700 flex items-center justify-center shadow-lg shadow-blue-200 shrink-0 z-10">
                <Icon size={26} className="text-white" />
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-acc-500 text-white text-[10px] font-black font-heading flex items-center justify-center">
                  {step}
                </span>
              </div>
              <div className="pt-4">
                <h3 className="font-heading font-bold text-blue-800 text-base mb-1">{title}</h3>
                <p className="font-sans text-neutral-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
