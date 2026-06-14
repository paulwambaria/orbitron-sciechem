import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Microscope } from 'lucide-react';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Laboratory Equipment Supplier Kenya | Spectrophotometers, pH Meters, Reagents — Orbitron Sciechem',
  description:
    'Kenya\'s trusted laboratory equipment and reagents supplier. Spectrophotometers, pH meters, analytical balances, glassware, water testing kits, and 300+ lab supplies. Nairobi delivery.',
  keywords: [
    'laboratory equipment Kenya', 'spectrophotometer supplier Kenya', 'pH meter Kenya',
    'lab reagents Kenya', 'laboratory supplies Nairobi', 'analytical equipment Kenya',
    'water testing kits Kenya', 'laboratory chemicals Kenya',
  ],
  alternates: { canonical: 'https://orbitronsciechem.com/laboratory-equipment-supplier-kenya' },
};

const CATEGORIES = [
  { cat: 'Analytical Instruments', items: ['UV/Vis Spectrophotometers', 'Atomic Absorption Spectrophotometers', 'Flame Photometers', 'Turbidimeters', 'Colorimeters'] },
  { cat: 'Measurement & Control', items: ['pH Meters (Bench & Portable)', 'Conductivity Meters', 'Dissolved Oxygen Meters', 'Turbidity Meters', 'Temperature Controllers'] },
  { cat: 'Water Testing', items: ['Water Testing Kits (Field)', 'COD Test Kits', 'BOD Measurement Systems', 'Heavy Metal Test Kits', 'Microbiological Test Kits'] },
  { cat: 'Separation Equipment', items: ['Bench-Top Centrifuges', 'Microcentrifuges', 'Vacuum Filtration Systems', 'Chromatography Columns', 'Rotary Evaporators'] },
  { cat: 'Heating & Incubation', items: ['Lab Ovens', 'Incubators (Standard/CO₂)', 'Autoclaves', 'Heating Mantles', 'Hot Plates & Stirrers'] },
  { cat: 'Weighing & Volume', items: ['Analytical Balances', 'Top-Loading Balances', 'Micropipettes (All Sizes)', 'Calibrated Burettes', 'Volumetric Glassware'] },
];

export default function LabEquipmentKenyaPage() {
  return (
    <>
      <section className="section-grad py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="tag-pill tag-orange">Laboratory Equipment · Kenya</span>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl lg:text-6xl mt-5 mb-5 leading-tight">
            Laboratory Equipment <span className="text-acc-500">Supplier in Kenya</span>
          </h1>
          <p className="font-sans text-blue-200/80 text-xl leading-relaxed mb-8">
            Comprehensive laboratory instruments, reagents, and consumables for research
            institutions, hospitals, quality control labs, and educational facilities across Kenya.
          </p>
          <Link href="/contact#quote" className="btn-accent inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm transition-all">
            Get Equipment Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="section-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-heading font-black text-blue-800 text-3xl mb-4">
                  Your Complete Lab Solutions Partner in Kenya
                </h2>
                <div className="font-sans text-neutral-600 leading-relaxed space-y-3">
                  <p>
                    Orbitron Sciechem Limited is a leading laboratory equipment and supplies distributor
                    in Kenya. We serve hospitals, clinical laboratories, research institutions, universities,
                    quality control departments, and industrial testing facilities nationwide.
                  </p>
                  <p>
                    Our laboratory division stocks 300+ items from leading global brands — including
                    instruments, reagents, glassware, consumables, and safety equipment. We also provide
                    installation, calibration, and after-sales maintenance services.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {CATEGORIES.map(({ cat, items }) => (
                  <div key={cat} className="bg-white rounded-2xl p-5 border border-neutral-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <Microscope size={16} className="text-acc-500" />
                      <h3 className="font-heading font-bold text-blue-800 text-sm">{cat}</h3>
                    </div>
                    <ul className="space-y-1.5">
                      {items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-neutral-600 text-xs font-sans">
                          <span className="w-1 h-1 rounded-full bg-acc-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-purple-700 rounded-2xl p-6 text-white">
                <Microscope size={28} className="mb-3 text-purple-300" />
                <h3 className="font-heading font-bold text-lg mb-2">Equipment Consultation</h3>
                <p className="font-sans text-purple-200/80 text-sm mb-4">Not sure what you need? Our lab specialists will advise on the right equipment for your application.</p>
                <Link href="/contact" className="bg-white text-purple-700 font-heading font-bold w-full text-center px-5 py-3 rounded-xl text-sm block hover:bg-purple-50 transition-colors">
                  Talk to a Specialist
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm">
                <h3 className="font-heading font-bold text-blue-800 text-base mb-4">After-Sales Services</h3>
                {[
                  'Professional installation & setup',
                  'Calibration & certification',
                  'Preventive maintenance contracts',
                  'Spare parts & consumables supply',
                  'On-site technical training',
                  'Warranty & repair services',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 py-2 border-b border-neutral-50 last:border-0">
                    <CheckCircle2 size={14} className="text-acc-500 shrink-0" />
                    <span className="font-sans text-neutral-600 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
