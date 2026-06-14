'use client';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Orbitron Sciechem has consistently supplied us with high-quality industrial chemicals with reliable delivery timelines. Their technical team is always available to provide guidance and support for our manufacturing processes.",
    author: 'Head of Procurement',
    company: 'Leading Manufacturing Company',
    industry: 'Manufacturing',
    rating: 5,
  },
  {
    quote: "Their laboratory solutions have significantly improved our testing capabilities. The equipment quality is exceptional and the after-sales support has been outstanding. We highly recommend Orbitron for any laboratory needs.",
    author: 'Laboratory Director',
    company: 'Research Institution, Nairobi',
    industry: 'Research & Laboratory',
    rating: 5,
  },
  {
    quote: "Excellent customer support and technical guidance throughout our project. Orbitron Sciechem has become our sole-source supplier for food-grade ingredients. Their product range and competitive pricing are unmatched in East Africa.",
    author: 'Operations Manager',
    company: 'Food Processing Company',
    industry: 'Food & Beverage',
    rating: 5,
  },
  {
    quote: "As a pharmaceutical manufacturer, quality and compliance are non-negotiable. Orbitron delivers pharma-grade raw materials with full documentation — COAs, MSDS, and regulatory certificates — every single time.",
    author: 'Quality Assurance Manager',
    company: 'Pharmaceutical Manufacturer',
    industry: 'Pharmaceuticals',
    rating: 5,
  },
  {
    quote: "Our water treatment plant relies on Orbitron Sciechem for all our purification chemicals. Their consistent supply, competitive pricing, and technical expertise have made them an invaluable partner for our operations.",
    author: 'Plant Manager',
    company: 'Water Utility Provider',
    industry: 'Water Treatment',
    rating: 5,
  },
  {
    quote: "Sourcing petroleum solvents has never been easier. Orbitron maintains excellent stock levels and their logistics team ensures delivery on schedule. Five stars for reliability and product quality.",
    author: 'Supply Chain Director',
    company: 'Petroleum Company',
    industry: 'Petroleum & Energy',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tag-pill"
          >
            Client Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-blue-800 text-3xl sm:text-4xl lg:text-5xl mt-4 mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-neutral-500 max-w-2xl mx-auto text-lg"
          >
            Trusted by 500+ companies across East Africa. Here&apos;s what industry leaders say
            about partnering with Orbitron Sciechem.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ quote, author, company, industry, rating }, i) => (
            <motion.div
              key={author}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-white border border-neutral-100 rounded-2xl p-6 hover:shadow-xl hover:border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-acc-500 fill-acc-500" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote size={28} className="text-blue-100 group-hover:text-blue-200 transition-colors mb-3" />

              {/* Quote text */}
              <p className="font-sans text-neutral-600 text-sm leading-relaxed flex-1 mb-5 line-clamp-3">
                &ldquo;{quote}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-neutral-100 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white font-heading font-bold text-sm">
                    {author[0]}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-blue-800 text-sm">{author}</div>
                    <div className="font-sans text-neutral-400 text-xs">{company}</div>
                  </div>
                  <span className="ml-auto tag-pill text-[10px] py-0.5 px-2">{industry}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
