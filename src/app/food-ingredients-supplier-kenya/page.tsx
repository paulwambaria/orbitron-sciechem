import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Wheat } from 'lucide-react';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Food Ingredients Supplier Kenya | Citric Acid, Preservatives & Additives — Orbitron Sciechem',
  description:
    'Kenya\'s top food ingredients and additives supplier. Citric acid, ascorbic acid, sodium benzoate, potassium sorbate, enzymes, stabilizers and 150+ food-grade chemicals. KEBS certified.',
  keywords: [
    'food ingredients supplier Kenya', 'food additives Kenya', 'citric acid Kenya',
    'sodium benzoate supplier Kenya', 'food grade chemicals Kenya',
    'food preservatives Kenya', 'food ingredient distributor Nairobi',
  ],
  alternates: { canonical: 'https://orbitronsciechem.com/food-ingredients-supplier-kenya' },
};

const PRODUCTS = [
  { name: 'Citric Acid', grade: 'Monohydrate / Anhydrous', use: 'Acidulant, preservative, flavor enhancer' },
  { name: 'Ascorbic Acid (Vitamin C)', grade: 'Food/Pharma Grade', use: 'Antioxidant, fortification, preservative' },
  { name: 'Sodium Benzoate', grade: 'Food Grade', use: 'Preservative for beverages and condiments' },
  { name: 'Potassium Sorbate', grade: 'Food Grade', use: 'Mold inhibitor in bakery and dairy products' },
  { name: 'Acetic Acid', grade: 'Food Grade', use: 'Vinegar production, condiments, pickling' },
  { name: 'Calcium Propionate', grade: 'Food Grade', use: 'Bread preservative, mold inhibitor' },
  { name: 'Tartaric Acid', grade: 'Food Grade', use: 'Beverages, confectionery, baking powder' },
  { name: 'Fumaric Acid', grade: 'Food Grade', use: 'Acidity regulator in beverages and desserts' },
  { name: 'Sodium Saccharin', grade: 'Food Grade', use: 'Artificial sweetener in beverages and foods' },
  { name: 'Xanthan Gum', grade: 'Food Grade', use: 'Stabilizer, thickener in sauces and dressings' },
  { name: 'Carrageenan', grade: 'Food Grade', use: 'Gelling agent in dairy and processed meats' },
  { name: 'Sodium CMC', grade: 'Food Grade', use: 'Thickener, stabilizer, ice cream, bakery' },
];

export default function FoodIngredientsSupplerKenyaPage() {
  return (
    <>
      <section className="section-grad py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="tag-pill tag-orange">Food Ingredients · Kenya</span>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl lg:text-6xl mt-5 mb-5 leading-tight">
            Food Ingredients <span className="text-acc-500">Supplier in Kenya</span>
          </h1>
          <p className="font-sans text-blue-200/80 text-xl leading-relaxed mb-8">
            Premium food-grade ingredients, additives, and preservatives for Kenya&apos;s food
            and beverage industry. All products are food-grade certified and KEBS compliant.
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
                Kenya&apos;s Premier Food-Grade Chemicals & Ingredients Distributor
              </h2>
              <div className="font-sans text-neutral-600 leading-relaxed space-y-4 mb-8">
                <p>
                  Orbitron Sciechem Limited is a leading supplier of food ingredients and additives
                  to the food and beverage industry in Kenya. We serve bakeries, beverage manufacturers,
                  dairy processors, confectionery companies, and food manufacturers across the country.
                </p>
                <p>
                  All our food-grade chemicals are sourced from internationally certified manufacturers
                  and comply with CODEX Alimentarius, EU food safety standards, and Kenya Bureau of
                  Standards (KEBS) requirements. We supply both retail and bulk quantities with
                  full food safety documentation.
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
                    {PRODUCTS.map(({ name, grade, use }) => (
                      <tr key={name} className="hover:bg-blue-50/50 transition-colors">
                        <td className="px-5 py-3 font-sans font-medium text-blue-800 text-sm">{name}</td>
                        <td className="px-5 py-3"><span className="bg-green-50 text-green-700 font-heading font-semibold text-xs px-2.5 py-1 rounded-full">{grade}</span></td>
                        <td className="px-5 py-3 font-sans text-neutral-500 text-sm">{use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-acc-500 rounded-2xl p-6 text-white">
                <Wheat size={28} className="mb-3 text-white/70" />
                <h3 className="font-heading font-bold text-lg mb-2">Get Food Ingredient Samples</h3>
                <p className="font-sans text-white/80 text-sm mb-4">Request samples before bulk ordering. Technical data sheets available.</p>
                <Link href="/contact#quote" className="bg-white text-acc-600 font-heading font-bold w-full text-center px-5 py-3 rounded-xl text-sm block hover:bg-acc-50 transition-colors">
                  Request Samples
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm">
                <h3 className="font-heading font-bold text-blue-800 text-base mb-4">Our Guarantees</h3>
                {[
                  'KEBS and CODEX compliant products',
                  'Full food safety documentation',
                  'Competitive pricing on bulk orders',
                  'Cold chain where required',
                  'Sample availability before bulk order',
                  'Technical support from food scientists',
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
