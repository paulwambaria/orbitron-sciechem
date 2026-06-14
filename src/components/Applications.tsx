'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const U = 'https://images.unsplash.com';

const APPLICATIONS = [
  {
    title: 'Beverages',
    image: `${U}/photo-1534353473418-4cfa0b05e2de?w=300&h=200&fit=crop&q=80`,
    products: ['Citric Acid', 'Ascorbic Acid', 'Sodium Benzoate', 'Potassium Sorbate', 'Flavor Enhancers'],
    href: '/industries/food-beverage',
    accent: 'border-blue-200 hover:border-blue-400',
  },
  {
    title: 'Bakery & Confectionery',
    image: `${U}/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop&q=80`,
    products: ['Calcium Propionate', 'Ascorbic Acid', 'Emulsifiers', 'Acetic Acid', 'Enzymes'],
    href: '/industries/food-beverage',
    accent: 'border-amber-200 hover:border-amber-400',
  },
  {
    title: 'Dairy Processing',
    image: `${U}/photo-1563636619-e9143da7973b?w=300&h=200&fit=crop&q=80`,
    products: ['Lactic Acid', 'Stabilizers', 'Carrageenan', 'Citric Acid', 'Enzymes'],
    href: '/industries/food-beverage',
    accent: 'border-yellow-200 hover:border-yellow-400',
  },
  {
    title: 'Edible Oils & Fats',
    image: `${U}/photo-1474979266404-7eaacbcd87c5?w=300&h=200&fit=crop&q=80`,
    products: ['Vitamin AD3', 'Ascorbic Acid', 'Citric Acid', 'Emulsifiers', 'Antioxidants'],
    href: '/industries/food-beverage',
    accent: 'border-orange-200 hover:border-orange-400',
  },
  {
    title: 'Meat & Poultry',
    image: `${U}/photo-1544025162-d76694265947?w=300&h=200&fit=crop&q=80`,
    products: ['Sodium Benzoate', 'Lactic Acid', 'Sodium Nitrite', 'Acetic Acid', 'Phosphates'],
    href: '/industries/food-beverage',
    accent: 'border-red-200 hover:border-red-400',
  },
  {
    title: 'Food Fortification',
    image: `${U}/photo-1568702846914-96b305d2aaeb?w=300&h=200&fit=crop&q=80`,
    products: ['Vitamin AD3', 'Ascorbic Acid', 'Iron Compounds', 'Fortification Blends', 'Zinc Oxide'],
    href: '/food-ingredients-supplier-kenya',
    accent: 'border-green-200 hover:border-green-400',
  },
  {
    title: 'Industrial Manufacturing',
    image: `${U}/photo-1565793298595-6a879b1d9492?w=300&h=200&fit=crop&q=80`,
    products: ['Caustic Soda', 'Sulfuric Acid', 'Hydrochloric Acid', 'Sodium Silicate', 'Solvents'],
    href: '/industries/manufacturing',
    accent: 'border-slate-200 hover:border-slate-400',
  },
  {
    title: 'Water Treatment',
    image: `${U}/photo-1548407260-da850faa41e3?w=300&h=200&fit=crop&q=80`,
    products: ['Sodium Hypochlorite', 'Alum', 'Ferric Chloride', 'Lime', 'Polymers'],
    href: '/water-treatment-chemicals-kenya',
    accent: 'border-cyan-200 hover:border-cyan-400',
  },
  {
    title: 'Pharmaceuticals',
    image: `${U}/photo-1584308666744-24d5c474f2ae?w=300&h=200&fit=crop&q=80`,
    products: ['Glycerin', 'Sorbitol', 'Ethanol', 'Excipients', 'APIs'],
    href: '/pharmaceutical-raw-materials-kenya',
    accent: 'border-purple-200 hover:border-purple-400',
  },
  {
    title: 'Research & Testing',
    image: `${U}/photo-1582719471384-894fbb16e074?w=300&h=200&fit=crop&q=80`,
    products: ['AR-Grade Reagents', 'HPLC/GC Standards', 'pH Meters', 'Water Testing Kits', 'Titration Kits'],
    href: '/laboratory-equipment-supplier-kenya',
    accent: 'border-indigo-200 hover:border-indigo-400',
  },
  {
    title: 'Petroleum & Energy',
    image: `${U}/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&q=80`,
    products: ['Toluene', 'Xylene', 'Hexane', 'White Spirit', 'Lubricant Additives'],
    href: '/industries/petroleum-energy',
    accent: 'border-neutral-200 hover:border-neutral-400',
  },
  {
    title: 'Agriculture',
    image: `${U}/photo-1500651230702-0e2d8a49d4ad?w=300&h=200&fit=crop&q=80`,
    products: ['Phosphoric Acid', 'Calcium Nitrate', 'Potassium Nitrate', 'Soil Test Kits', 'Micronutrients'],
    href: '/industries/agriculture',
    accent: 'border-lime-200 hover:border-lime-400',
  },
];

export default function Applications() {
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
            Product Applications
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-blue-800 text-3xl sm:text-4xl lg:text-5xl mt-4 mb-4"
          >
            Products for Every{' '}
            <span className="text-orange-gradient">Application</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-neutral-500 max-w-2xl mx-auto text-lg"
          >
            From your production line to your research bench — our portfolio covers
            every application across 12 industry segments.
          </motion.p>
        </div>

        {/* Application grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {APPLICATIONS.map(({ title, image, products, href, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={href}
                className={`group block bg-white border-2 ${accent} rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full`}
              >
                {/* Category photo */}
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                  <h3 className="absolute bottom-3 left-3 font-heading font-bold text-white text-sm drop-shadow-md">
                    {title}
                  </h3>
                </div>

                {/* Products list */}
                <div className="p-4">
                  <ul className="space-y-1.5 mb-3">
                    {products.map((p) => (
                      <li key={p} className="flex items-center gap-1.5 text-neutral-600 text-xs font-sans">
                        <span className="w-1 h-1 rounded-full bg-acc-500 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span className="font-heading font-bold text-acc-500 text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Products <ArrowRight size={11} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Credibility bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 bg-blue-700 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { value: '1,000+', label: 'Products in Catalog' },
            { value: '500+',   label: 'Clients Served Across East Africa' },
            { value: '6',      label: 'Countries in Distribution Network' },
            { value: '12+',    label: 'Industry Applications Covered' },
          ].map(({ value, label }) => (
            <div key={label} className="border-r border-white/15 last:border-0 px-4">
              <div className="font-heading font-black text-acc-400 text-3xl mb-1">{value}</div>
              <div className="font-sans text-blue-200/70 text-sm">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
