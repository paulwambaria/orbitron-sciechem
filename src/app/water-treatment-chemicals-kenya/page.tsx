import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Droplets } from 'lucide-react';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Water Treatment Chemicals Kenya | Chlorine, Alum, Coagulants — Orbitron Sciechem',
  description:
    'Kenya\'s reliable water treatment chemicals supplier. Chlorine, aluminum sulfate (alum), ferric chloride, sodium hypochlorite, pH adjustment chemicals for municipal and industrial water treatment.',
  keywords: [
    'water treatment chemicals Kenya', 'chlorine supplier Kenya', 'aluminum sulfate Kenya',
    'water purification chemicals Kenya', 'sodium hypochlorite Kenya', 'alum supplier Kenya',
    'industrial water treatment chemicals East Africa',
  ],
  alternates: { canonical: 'https://orbitronsciechem.com/water-treatment-chemicals-kenya' },
};

const PRODUCTS = [
  { name: 'Aluminum Sulfate (Alum)', grade: 'Water Treatment', role: 'Coagulant', use: 'Primary coagulant for municipal water treatment plants' },
  { name: 'Ferric Chloride', grade: 'Water Treatment', role: 'Coagulant', use: 'Coagulant for wastewater and sludge treatment' },
  { name: 'Sodium Hypochlorite (12–15%)', grade: 'Industrial', role: 'Disinfectant', use: 'Primary disinfectant for municipal water systems' },
  { name: 'Chlorine (Liquid)', grade: 'Industrial', role: 'Disinfectant', use: 'Bulk disinfection for large water treatment plants' },
  { name: 'Calcium Hypochlorite (HTH)', grade: 'Pool/Water', role: 'Disinfectant', use: 'Swimming pool and water tank disinfection' },
  { name: 'Hydrated Lime (Ca(OH)₂)', grade: 'Water Grade', role: 'pH Adjustment', use: 'pH correction and softening in water treatment' },
  { name: 'Hydrochloric Acid', grade: 'Technical', role: 'pH Reduction', use: 'pH control and resin regeneration in water softeners' },
  { name: 'Polyacrylamide (PAM)', grade: 'Water Treatment', role: 'Flocculant', use: 'Flocculation aid in wastewater treatment' },
  { name: 'Sodium Fluoride', grade: 'Water Grade', role: 'Fluoridation', use: 'Drinking water fluoridation' },
  { name: 'Potassium Permanganate', grade: 'Water Grade', role: 'Oxidant', use: 'Iron/manganese removal, odor control in water' },
];

export default function WaterTreatmentChemicalsKenyaPage() {
  return (
    <>
      <section className="section-grad py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="tag-pill tag-orange">Water Treatment Chemicals · Kenya</span>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl lg:text-6xl mt-5 mb-5 leading-tight">
            Water Treatment Chemicals <span className="text-acc-500">Supplier in Kenya</span>
          </h1>
          <p className="font-sans text-blue-200/80 text-xl leading-relaxed mb-8">
            Supplying effective water purification chemicals to municipal water authorities,
            industrial plants, hotels, hospitals, and water bottling companies across Kenya.
          </p>
          <Link href="/contact#quote" className="btn-accent inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm transition-all">
            Get Water Chemical Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="section-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="font-heading font-black text-blue-800 text-3xl mb-6">
                Complete Water Treatment Chemical Solutions for Kenya
              </h2>
              <div className="font-sans text-neutral-600 leading-relaxed space-y-4 mb-8">
                <p>
                  Orbitron Sciechem Limited provides a comprehensive range of water treatment chemicals
                  to municipal water authorities, county governments, industrial facilities, hotels,
                  hospitals, and water bottling plants across Kenya and East Africa.
                </p>
                <p>
                  Our water treatment chemicals portfolio covers the full treatment cycle —
                  coagulation, flocculation, sedimentation, filtration, disinfection, and pH
                  adjustment. We supply both small quantities and large bulk orders with reliable
                  delivery across Kenya.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-neutral-100 bg-white">
                <table className="w-full">
                  <thead className="bg-neutral-50 border-b border-neutral-100">
                    <tr>
                      {['Product', 'Grade', 'Role', 'Application'].map((h) => (
                        <th key={h} className="px-4 py-3 text-left font-heading font-bold text-neutral-500 text-xs uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-50">
                    {PRODUCTS.map(({ name, grade, role, use }) => (
                      <tr key={name} className="hover:bg-cyan-50/50 transition-colors">
                        <td className="px-4 py-3 font-sans font-medium text-blue-800 text-sm">{name}</td>
                        <td className="px-4 py-3"><span className="bg-cyan-50 text-cyan-700 font-heading font-semibold text-xs px-2 py-1 rounded-full">{grade}</span></td>
                        <td className="px-4 py-3"><span className="bg-blue-50 text-blue-700 font-heading font-semibold text-xs px-2 py-1 rounded-full">{role}</span></td>
                        <td className="px-4 py-3 font-sans text-neutral-500 text-xs leading-relaxed">{use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-cyan-600 rounded-2xl p-6 text-white">
                <Droplets size={28} className="mb-3 text-cyan-200" />
                <h3 className="font-heading font-bold text-lg mb-2">Bulk Chemical Supply</h3>
                <p className="font-sans text-cyan-100/80 text-sm mb-4">We supply bulk water treatment chemicals with tank delivery for large treatment plants.</p>
                <Link href="/contact#quote" className="bg-white text-cyan-700 font-heading font-bold w-full text-center px-5 py-3 rounded-xl text-sm block hover:bg-cyan-50 transition-colors">
                  Get Bulk Quote
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm">
                <h3 className="font-heading font-bold text-blue-800 text-base mb-4">We Serve</h3>
                {[
                  'Municipal water authorities',
                  'County water utilities',
                  'Industrial water treatment plants',
                  'Swimming pool operators',
                  'Hotels and resorts',
                  'Hospitals and healthcare facilities',
                  'Water bottling companies',
                  'Agricultural irrigation systems',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 py-1.5 border-b border-neutral-50 last:border-0">
                    <CheckCircle2 size={13} className="text-acc-500 shrink-0" />
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
