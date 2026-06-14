'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const U = 'https://images.unsplash.com';

const INDUSTRIES = [
  {
    title: 'Manufacturing',
    desc: 'Industrial process chemicals, solvents, and additives for all manufacturing sectors.',
    href: '/industries/manufacturing',
    image: `${U}/photo-1565793298595-6a879b1d9492?w=500&h=300&fit=crop&q=80`,
    tag: 'Industrial Chemicals',
  },
  {
    title: 'Food & Beverage',
    desc: 'Premium food ingredients, additives, preservatives, and processing chemicals.',
    href: '/industries/food-beverage',
    image: `${U}/photo-1568702846914-96b305d2aaeb?w=500&h=300&fit=crop&q=80`,
    tag: 'Food Additives',
  },
  {
    title: 'Pharmaceuticals',
    desc: 'APIs, excipients, pharma-grade solvents, and GMP-compliant raw materials.',
    href: '/industries/pharmaceuticals',
    image: `${U}/photo-1584308666744-24d5c474f2ae?w=500&h=300&fit=crop&q=80`,
    tag: 'Pharma Grade',
  },
  {
    title: 'Water Treatment',
    desc: 'Effective water purification chemicals, coagulants, and disinfection solutions.',
    href: '/industries/water-treatment',
    image: `${U}/photo-1548407260-da850faa41e3?w=500&h=300&fit=crop&q=80`,
    tag: 'Water Chemicals',
  },
  {
    title: 'Petroleum & Energy',
    desc: 'Petroleum solvents, lubricant additives, and specialty chemicals for the energy sector.',
    href: '/industries/petroleum-energy',
    image: `${U}/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop&q=80`,
    tag: 'Petroleum Chemicals',
  },
  {
    title: 'Research Laboratories',
    desc: 'Advanced laboratory equipment, analytical reagents, and scientific supplies.',
    href: '/industries/laboratories',
    image: `${U}/photo-1581093196277-9b3c75a5d1ae?w=500&h=300&fit=crop&q=80`,
    tag: 'Lab Equipment',
  },
  {
    title: 'Agriculture',
    desc: 'Agro-chemical solutions, soil conditioners, and testing solutions for farming.',
    href: '/industries/agriculture',
    image: `${U}/photo-1500651230702-0e2d8a49d4ad?w=500&h=300&fit=crop&q=80`,
    tag: 'Agro-Chemicals',
  },
  {
    title: 'Government & Institutions',
    desc: 'Bulk laboratory and industrial chemical supply for public institutions and parastatals.',
    href: '/industries/government',
    image: `${U}/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop&q=80`,
    tag: 'Institutional Supply',
  },
];

export default function Industries() {
  return (
    <section className="section-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tag-pill"
          >
            Industries We Serve
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-blue-800 text-3xl sm:text-4xl lg:text-5xl mt-4 mb-4"
          >
            Powering Every Industry
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-neutral-500 max-w-2xl mx-auto text-lg"
          >
            From manufacturing to healthcare, we supply quality-assured products and technical
            solutions to over 10 diverse industry segments.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map(({ title, desc, href, image, tag }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <Link href={href} className="group block bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                {/* Industry photo */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/20 to-transparent" />
                  {/* Tag badge */}
                  <span className="absolute top-3 left-3 bg-acc-500 text-white text-[10px] font-bold font-heading px-2.5 py-1 rounded-full uppercase tracking-wide">
                    {tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading font-bold text-blue-800 text-base mb-2 group-hover:text-acc-500 transition-colors">
                    {title}
                  </h3>
                  <p className="font-sans text-neutral-500 text-sm leading-relaxed mb-4">{desc}</p>
                  <span className="font-heading font-bold text-acc-500 text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore Solutions <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
