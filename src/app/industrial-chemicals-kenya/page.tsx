import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FlaskConical } from 'lucide-react';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Industrial Chemicals Kenya | Caustic Soda, Sulfuric Acid & More — Orbitron Sciechem',
  description:
    'Leading industrial chemicals supplier in Kenya. Caustic soda, sulfuric acid, hydrochloric acid, sodium silicate, sodium hypochlorite and 200+ more. Nairobi delivery. Get a quote today.',
  keywords: [
    'industrial chemicals Kenya', 'caustic soda Kenya', 'sulfuric acid Kenya',
    'hydrochloric acid supplier Kenya', 'chemical distributor Nairobi',
    'sodium silicate Kenya', 'industrial chemical suppliers East Africa',
  ],
  alternates: { canonical: 'https://orbitronsciechem.com/industrial-chemicals-kenya' },
};

const PRODUCTS = [
  { name: 'Caustic Soda (NaOH)', uses: 'Soap making, paper, textiles, water treatment, food processing' },
  { name: 'Sulfuric Acid', uses: 'Battery acid, fertilizers, chemical manufacturing, metal processing' },
  { name: 'Hydrochloric Acid', uses: 'Metal cleaning, pH control, food processing, water treatment' },
  { name: 'Nitric Acid', uses: 'Fertilizer production, explosives, electronics, metal finishing' },
  { name: 'Sodium Silicate', uses: 'Detergents, cement, paper, automotive, construction adhesives' },
  { name: 'Sodium Hypochlorite', uses: 'Disinfection, water treatment, bleaching, sanitation' },
  { name: 'Hydrogen Peroxide', uses: 'Bleaching, disinfection, wastewater treatment, food processing' },
  { name: 'Phosphoric Acid', uses: 'Fertilizers, food acidulant, metal treatment, dental products' },
  { name: 'Acetic Acid (Glacial)', uses: 'Vinegar production, PVA glue, textile dyeing, pharmaceuticals' },
  { name: 'Ammonia Solution', uses: 'Fertilizers, cleaning agents, refrigeration, pH control' },
];

export default function IndustrialChemicalsKenyaPage() {
  return (
    <>
      <section className="section-grad py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="tag-pill tag-orange">Industrial Chemicals · Kenya</span>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl lg:text-6xl mt-5 mb-5 leading-tight">
            Industrial Chemicals <span className="text-acc-500">Supplier in Kenya</span>
          </h1>
          <p className="font-sans text-blue-200/80 text-xl leading-relaxed mb-8">
            Orbitron Sciechem Limited is Kenya&apos;s leading importer and distributor of industrial
            chemicals — supplying manufacturers, processors, and institutions across East Africa.
          </p>
          <Link href="/contact#quote" className="btn-accent inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm transition-all">
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="section-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="font-heading font-black text-blue-800 text-3xl mb-6">
                Kenya&apos;s Trusted Industrial Chemical Distributor
              </h2>
              <div className="font-sans text-neutral-600 leading-relaxed space-y-4 mb-8">
                <p>
                  Orbitron Sciechem Limited is the premier supplier of industrial chemicals in Kenya,
                  serving manufacturers, food processors, water utilities, and industrial facilities
                  across Nairobi, Mombasa, Kisumu, and upcountry Kenya.
                </p>
                <p>
                  We source our industrial chemicals directly from certified international manufacturers
                  in Europe, Asia, and the Americas — ensuring consistent quality, competitive pricing,
                  and reliable supply. Every chemical shipment comes with full documentation including
                  Certificates of Analysis (COA) and Material Safety Data Sheets (MSDS).
                </p>
                <p>
                  With strategic warehousing in Nairobi&apos;s Hillpark Business Park and an efficient
                  distribution network, we ensure next-day delivery within Nairobi and 2–3 day delivery
                  to all major towns in Kenya.
                </p>
              </div>

              <h3 className="font-heading font-bold text-blue-800 text-xl mb-4">Our Industrial Chemical Range</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {PRODUCTS.map(({ name, uses }) => (
                  <div key={name} className="bg-white rounded-xl p-4 border border-neutral-100">
                    <div className="flex items-start gap-2 mb-1">
                      <CheckCircle2 size={15} className="text-acc-500 shrink-0 mt-0.5" />
                      <div className="font-heading font-bold text-blue-800 text-sm">{name}</div>
                    </div>
                    <div className="font-sans text-neutral-500 text-xs leading-relaxed pl-5">{uses}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-blue-700 rounded-2xl p-6 text-white">
                <FlaskConical size={28} className="mb-3 text-acc-400" />
                <h3 className="font-heading font-bold text-lg mb-2">Get a Quick Quote</h3>
                <p className="font-sans text-blue-200/80 text-sm mb-4">Tell us what you need and we&apos;ll get back to you within 2 hours.</p>
                <Link href="/contact#quote" className="btn-accent w-full text-center px-5 py-3 rounded-xl text-sm block">
                  Request Quote
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm">
                <h3 className="font-heading font-bold text-blue-800 text-base mb-4">Why Buy From Us?</h3>
                {[
                  'KEBS and ISO compliant products',
                  'Competitive bulk pricing',
                  'Reliable stock availability',
                  'Full COA and MSDS documentation',
                  'Same-day delivery in Nairobi',
                  '24/7 technical support',
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
