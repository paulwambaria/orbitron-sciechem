'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, FlaskConical, Wheat, Pill, Fuel, Microscope, Beaker } from 'lucide-react';

const DIVISIONS = [
  {
    Icon: FlaskConical,
    title: 'Industrial Chemicals',
    href: '/products?category=industrial',
    products: [
      'Caustic Soda (Flakes / Pearls)',
      'Sodium Hypochlorite',
      'Hydrochloric Acid',
      'Sulfuric Acid',
      'Nitric Acid',
      'Ammonia Solution',
      'Sodium Silicate',
      'Industrial Ethanol & Methanol',
    ],
    description: 'Core industrial process chemicals for manufacturing, cleaning, water treatment, and production.',
    accent: 'border-blue-200 hover:border-blue-400',
    iconBg: 'bg-blue-700',
  },
  {
    Icon: Wheat,
    title: 'Food Processing Chemicals & Additives',
    href: '/products?category=food',
    products: [
      'Citric Acid Monohydrate / Anhydrous',
      'Ascorbic Acid (Vitamin C)',
      'Sodium Benzoate',
      'Potassium Sorbate',
      'Acetic Acid (Food Grade)',
      'Lactic Acid',
      'Calcium Propionate',
      'Vitamin AD3 (Edible Oil Fortification)',
    ],
    description: 'Food-grade ingredients and additives compliant with KEBS, CODEX, and international food safety standards.',
    accent: 'border-acc-200 hover:border-acc-400',
    iconBg: 'bg-acc-500',
  },
  {
    Icon: Pill,
    title: 'Pharmaceutical Raw Materials',
    href: '/products?category=pharma',
    products: [
      'Active Pharmaceutical Ingredients (APIs)',
      'Excipients and Carriers',
      'Solvents for Pharma Formulations',
      'Glycerin (Pharma Grade)',
      'Ethanol (Pharma Grade)',
      'Liquid Glucose',
      'Sorbitol Solution',
    ],
    description: 'GMP-certified pharmaceutical raw materials, excipients, and solvents for drug and nutraceutical manufacturing.',
    accent: 'border-green-200 hover:border-green-400',
    iconBg: 'bg-green-600',
  },
  {
    Icon: Fuel,
    title: 'Petroleum & Solvent Chemicals',
    href: '/products?category=petroleum',
    products: [
      'Solvent Naphtha',
      'Toluene',
      'Xylene',
      'Hexane',
      'White Spirit',
      'Lubricant Additives',
      'Emulsifiers',
      'Detergent Bases',
    ],
    description: 'High-purity petroleum solvents, lubricant additives, and specialty chemicals for the energy and industrial sector.',
    accent: 'border-orange-200 hover:border-orange-400',
    iconBg: 'bg-orange-600',
  },
  {
    Icon: Microscope,
    title: 'Laboratory Equipment & Analytical Reagents',
    href: '/products?category=laboratory',
    products: [
      'Spectrophotometers (UV-VIS, Colorimeters)',
      'pH / Conductivity Meters',
      'Titration Kits & All Other Kits',
      'Reagents (AR / GR Grade)',
      'Water Testing Kits (BOD, COD, Chlorine)',
      'Soil Testing Kits',
      'Microbiology Consumables',
      'HPLC, GC Systems & Sensors',
      'Magnetic Stirrers & Ovens',
      'Refractometers & Incubators',
    ],
    description: 'Complete laboratory instruments, analytical reagents, and consumables for research, QC, and industrial testing.',
    accent: 'border-purple-200 hover:border-purple-400',
    iconBg: 'bg-purple-700',
  },
  {
    Icon: Beaker,
    title: 'Food & Beverage Production Inputs',
    href: '/products?category=food-inputs',
    products: [
      'Flavor Enhancers',
      'Fortification Blends',
      'Enzymes and Stabilizers',
      'Emulsifiers and Anti-Caking Agents',
      'Dairy and Beverage Processing Chemicals',
    ],
    description: 'Specialty functional inputs for beverage production, baking, dairy processing, and food manufacturing.',
    accent: 'border-cyan-200 hover:border-cyan-400',
    iconBg: 'bg-cyan-600',
  },
];

export default function Divisions() {
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
            Our Business Divisions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-blue-800 text-3xl sm:text-4xl lg:text-5xl mt-4 mb-4"
          >
            Six Divisions, One Trusted Source
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-neutral-500 max-w-2xl mx-auto text-lg"
          >
            Comprehensive product portfolios across six specialized business units, sourced from
            leading global manufacturers.
          </motion.p>
        </div>

        {/* Divisions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {DIVISIONS.map(({ Icon, title, href, products, description, accent, iconBg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group bg-white border-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${accent}`}
            >
              {/* Icon + Title */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center shrink-0 shadow-lg`}>
                  <Icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-blue-800 text-base leading-snug">{title}</h3>
                  <p className="font-sans text-neutral-500 text-xs mt-1 leading-relaxed">{description}</p>
                </div>
              </div>

              {/* Products list */}
              <div className="mt-4 mb-5">
                <ul className="space-y-1.5">
                  {products.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-neutral-600 text-sm font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-acc-500 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learn more */}
              <Link
                href={href}
                className="inline-flex items-center gap-1.5 text-acc-500 font-bold font-heading text-sm hover:gap-2.5 transition-all"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/products"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm transition-all"
          >
            Browse Full Product Catalog <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
