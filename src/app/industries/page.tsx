import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Factory, Wheat, Pill, Droplets, Fuel, Microscope, Sprout, Building2 } from 'lucide-react';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Industries We Serve | Chemical & Lab Solutions for Every Sector',
  description:
    'Orbitron Sciechem serves manufacturing, food & beverage, pharmaceuticals, water treatment, petroleum, research laboratories, agriculture, and government sectors across East Africa.',
};

const INDUSTRIES = [
  {
    Icon: Factory,
    title: 'Manufacturing',
    href: '/industries/manufacturing',
    desc: 'Comprehensive process chemicals, solvents, and industrial additives for all manufacturing sectors — from textiles to metal processing.',
    products: ['Caustic Soda', 'Sulfuric Acid', 'Hydrochloric Acid', 'Sodium Silicate', 'Solvents', 'Lubricants'],
    color: 'bg-blue-700',
  },
  {
    Icon: Wheat,
    title: 'Food & Beverage',
    href: '/industries/food-beverage',
    desc: 'Premium food-grade ingredients, preservatives, stabilizers, and processing aids meeting international food safety standards.',
    products: ['Citric Acid', 'Sodium Benzoate', 'Ascorbic Acid', 'Stabilizers', 'Emulsifiers', 'Enzymes'],
    color: 'bg-acc-500',
  },
  {
    Icon: Pill,
    title: 'Pharmaceuticals',
    href: '/industries/pharmaceuticals',
    desc: 'GMP-certified APIs, excipients, pharma-grade solvents, and packaging materials for drug and nutraceutical manufacturing.',
    products: ['Glycerin', 'Sorbitol', 'Lactose', 'Microcrystalline Cellulose', 'Ethanol', 'PEG'],
    color: 'bg-green-600',
  },
  {
    Icon: Droplets,
    title: 'Water Treatment',
    href: '/industries/water-treatment',
    desc: 'Effective coagulants, flocculants, disinfectants, and pH adjustment chemicals for municipal and industrial water treatment.',
    products: ['Aluminum Sulfate', 'Chlorine', 'Sodium Hypochlorite', 'Ferric Chloride', 'Lime', 'Polymers'],
    color: 'bg-cyan-600',
  },
  {
    Icon: Fuel,
    title: 'Petroleum & Energy',
    href: '/industries/petroleum-energy',
    desc: 'High-purity petroleum solvents, process chemicals, and specialty additives for the energy and petroleum sector.',
    products: ['Toluene', 'Xylene', 'Hexane', 'White Spirit', 'Solvent Naphtha', 'MEK'],
    color: 'bg-orange-600',
  },
  {
    Icon: Microscope,
    title: 'Research Laboratories',
    href: '/industries/laboratories',
    desc: 'Advanced laboratory instruments, analytical reagents, certified reference materials, and consumables for research facilities.',
    products: ['Spectrophotometers', 'pH Meters', 'Analytical Reagents', 'Glassware', 'Centrifuges', 'Balances'],
    color: 'bg-purple-700',
  },
  {
    Icon: Sprout,
    title: 'Agriculture',
    href: '/industries/agriculture',
    desc: 'Agro-chemical solutions, soil conditioners, foliar fertilizers, and testing chemicals supporting modern farming operations.',
    products: ['Phosphoric Acid', 'Potassium Nitrate', 'Calcium Nitrate', 'Soil Testing Kits', 'pH Buffers'],
    color: 'bg-lime-600',
  },
  {
    Icon: Building2,
    title: 'Government & Institutions',
    href: '/industries/government',
    desc: 'Bulk chemical and laboratory supply for public health facilities, government laboratories, universities, and institutions.',
    products: ['Laboratory Reagents', 'Disinfectants', 'Testing Kits', 'Industrial Chemicals', 'Lab Equipment'],
    color: 'bg-slate-700',
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-grad py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="tag-pill tag-orange">Industries</span>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl lg:text-6xl mt-5 mb-5 leading-tight">
            Serving Every <span className="text-acc-500">Industry</span> with Excellence
          </h1>
          <p className="font-sans text-blue-200/80 text-xl leading-relaxed">
            From manufacturing floors to research labs — Orbitron Sciechem delivers
            specialized solutions for 10+ industry segments across East Africa.
          </p>
        </div>
      </section>

      {/* Industries grid */}
      <section className="section-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {INDUSTRIES.map(({ Icon, title, href, desc, products, color }) => (
              <Link
                key={title}
                href={href}
                className="group bg-white rounded-2xl p-7 border border-neutral-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 flex gap-5"
              >
                <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center shrink-0 shadow-lg`}>
                  <Icon size={26} className="text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="font-heading font-bold text-blue-800 text-xl mb-2 group-hover:text-acc-500 transition-colors">{title}</h2>
                  <p className="font-sans text-neutral-500 text-sm leading-relaxed mb-4">{desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {products.slice(0, 4).map((p) => (
                      <span key={p} className="font-sans text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full">{p}</span>
                    ))}
                  </div>
                  <span className="font-heading font-bold text-acc-500 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Solutions <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
