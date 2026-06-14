import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Pill } from 'lucide-react';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Pharmaceutical Raw Materials Kenya | APIs, Excipients & Pharma Solvents — Orbitron Sciechem',
  description:
    'Trusted supplier of pharmaceutical raw materials in Kenya. APIs, excipients, glycerin, sorbitol, ethanol, microcrystalline cellulose and GMP-grade pharma chemicals. COA provided.',
  keywords: [
    'pharmaceutical raw materials Kenya', 'pharma excipients Kenya', 'APIs supplier Kenya',
    'GMP chemicals Kenya', 'glycerin supplier Kenya', 'pharma grade chemicals Nairobi',
    'pharmaceutical ingredients East Africa',
  ],
  alternates: { canonical: 'https://orbitronsciechem.com/pharmaceutical-raw-materials-kenya' },
};

const PRODUCTS = [
  { name: 'Glycerin (Glycerol)', grade: 'USP/BP', desc: 'Solvent, humectant, excipient for oral and topical formulations' },
  { name: 'Sorbitol', grade: 'USP', desc: 'Sweetener, humectant, osmotic laxative excipient' },
  { name: 'Ethanol 96% / 99.9%', grade: 'USP/BP', desc: 'Solvent, disinfectant, excipient for tinctures and extracts' },
  { name: 'Propylene Glycol', grade: 'USP/EP', desc: 'Co-solvent, humectant, plasticizer in oral and topical products' },
  { name: 'PEG (Polyethylene Glycol)', grade: 'USP', desc: 'Excipient for ointments, suppositories, film coatings' },
  { name: 'Microcrystalline Cellulose', grade: 'USP/EP', desc: 'Tablet binder, filler, disintegrant for solid dosage forms' },
  { name: 'Lactose Monohydrate', grade: 'BP/USP', desc: 'Tablet and capsule diluent, carrier for dry powder inhalers' },
  { name: 'Starch (Pharma Grade)', grade: 'BP/USP', desc: 'Binder and disintegrant for tablets and capsules' },
  { name: 'Talc (Pharma Grade)', grade: 'USP/BP', desc: 'Glidant, lubricant in tablet manufacturing' },
  { name: 'Titanium Dioxide', grade: 'USP/EP', desc: 'Opacifier, colorant in tablet coatings and capsules' },
  { name: 'Sodium CMC', grade: 'BP/USP', desc: 'Viscosity modifier, binder in syrups and gels' },
  { name: 'Magnesium Stearate', grade: 'USP/BP', desc: 'Tablet lubricant, flow agent in solid dosage forms' },
];

export default function PharmaRawMaterialsKenyaPage() {
  return (
    <>
      <section className="section-grad py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="tag-pill tag-orange">Pharmaceutical Raw Materials · Kenya</span>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl lg:text-6xl mt-5 mb-5 leading-tight">
            Pharmaceutical Raw Materials <span className="text-acc-500">Supplier in Kenya</span>
          </h1>
          <p className="font-sans text-blue-200/80 text-xl leading-relaxed mb-8">
            GMP-grade pharmaceutical excipients, APIs, and active ingredients for drug manufacturers,
            nutraceutical companies, and compounding pharmacies across Kenya.
          </p>
          <Link href="/contact#quote" className="btn-accent inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm transition-all">
            Request Pharma Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="section-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="font-heading font-black text-blue-800 text-3xl mb-6">
                GMP-Certified Pharma Raw Materials for Kenya&apos;s Drug Industry
              </h2>
              <div className="font-sans text-neutral-600 leading-relaxed space-y-4 mb-8">
                <p>
                  Orbitron Sciechem Limited is a trusted supplier of pharmaceutical raw materials
                  in Kenya, serving drug manufacturers, contract manufacturers, nutraceutical companies,
                  and compounding pharmacies. Our pharma division maintains strict GMP compliance
                  across all product lines.
                </p>
                <p>
                  All pharmaceutical-grade materials are sourced from manufacturers with valid GMP
                  certificates, and are supplied with complete documentation including Certificate of
                  Analysis (COA), Material Safety Data Sheet (MSDS), and Certificate of Origin (COO).
                  We offer both standard and custom packaging options.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-neutral-100 bg-white">
                <table className="w-full">
                  <thead className="bg-neutral-50 border-b border-neutral-100">
                    <tr>
                      {['Product', 'Grade', 'Application'].map((h) => (
                        <th key={h} className="px-5 py-3 text-left font-heading font-bold text-neutral-500 text-xs uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-50">
                    {PRODUCTS.map(({ name, grade, desc }) => (
                      <tr key={name} className="hover:bg-green-50/50 transition-colors">
                        <td className="px-5 py-3 font-sans font-medium text-blue-800 text-sm">{name}</td>
                        <td className="px-5 py-3"><span className="bg-green-50 text-green-700 font-heading font-semibold text-xs px-2.5 py-1 rounded-full">{grade}</span></td>
                        <td className="px-5 py-3 font-sans text-neutral-500 text-xs leading-relaxed">{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-green-600 rounded-2xl p-6 text-white">
                <Pill size={28} className="mb-3 text-green-200" />
                <h3 className="font-heading font-bold text-lg mb-2">Pharma-Grade Quality Guarantee</h3>
                <p className="font-sans text-green-100/80 text-sm mb-4">Every product supplied with full documentation — COA, MSDS, GMP certificate, and COO.</p>
                <Link href="/contact#quote" className="bg-white text-green-700 font-heading font-bold w-full text-center px-5 py-3 rounded-xl text-sm block hover:bg-green-50 transition-colors">
                  Get Pharma Quote
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm">
                <h3 className="font-heading font-bold text-blue-800 text-base mb-4">Compliance Standards</h3>
                {[
                  'USP (United States Pharmacopeia)',
                  'BP (British Pharmacopoeia)',
                  'EP (European Pharmacopoeia)',
                  'WHO GMP Guidelines',
                  'ICH Q7 Active Pharmaceutical Ingredients',
                  'Kenya Pharmacy & Poisons Board',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 py-2 border-b border-neutral-50 last:border-0">
                    <CheckCircle2 size={14} className="text-green-500 shrink-0" />
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
