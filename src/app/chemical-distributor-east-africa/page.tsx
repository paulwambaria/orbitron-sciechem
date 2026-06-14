import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Globe, MapPin } from 'lucide-react';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Chemical Distributor East Africa | Kenya, Uganda, Tanzania, Rwanda — Orbitron Sciechem',
  description:
    'Leading chemical distributor in East Africa. Serving Kenya, Uganda, Tanzania, Rwanda, Ethiopia and South Sudan with industrial chemicals, food ingredients, pharmaceutical raw materials and lab solutions.',
  keywords: [
    'chemical distributor East Africa', 'chemical supplier Uganda', 'chemical supplier Tanzania',
    'chemical supplier Rwanda', 'industrial chemicals East Africa', 'chemical distributor Nairobi',
    'chemical importer Kenya', 'multinational chemical company East Africa',
  ],
  alternates: { canonical: 'https://orbitronsciechem.com/chemical-distributor-east-africa' },
};

const COUNTRIES = [
  { name: 'Kenya', flag: '🇰🇪', capital: 'Nairobi', role: 'Head Office & Hub', detail: 'Full product range available. Next-day delivery to major towns.' },
  { name: 'Uganda', flag: '🇺🇬', capital: 'Kampala', role: 'Active Market', detail: 'Regular shipments to Kampala and surrounding regions.' },
  { name: 'Tanzania', flag: '🇹🇿', capital: 'Dar es Salaam', role: 'Active Market', detail: 'Supply to Dar es Salaam, Arusha, and Zanzibar.' },
  { name: 'Rwanda', flag: '🇷🇼', capital: 'Kigali', role: 'Active Market', detail: 'Serving manufacturers and research institutions in Kigali.' },
  { name: 'Ethiopia', flag: '🇪🇹', capital: 'Addis Ababa', role: 'Active Market', detail: 'Supply to industrial facilities and labs in Addis Ababa.' },
  { name: 'South Sudan', flag: '🇸🇸', capital: 'Juba', role: 'Emerging Market', detail: 'Supply of essential chemicals and lab equipment to Juba.' },
];

const ADVANTAGES = [
  'Single-source for all chemical categories',
  'Competitive bulk pricing with volume discounts',
  'Export documentation and customs clearance support',
  'Multilingual technical support team',
  'Express airfreight for urgent requirements',
  'Full quality documentation (COA, MSDS, COO)',
  'Flexible payment terms for established accounts',
  'Regional warehousing reduces lead times',
];

export default function ChemicalDistributorEastAfricaPage() {
  return (
    <>
      <section className="section-grad py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="tag-pill tag-orange">Chemical Distributor · East Africa</span>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl lg:text-6xl mt-5 mb-5 leading-tight">
            East Africa&apos;s Leading <span className="text-acc-500">Chemical Distributor</span>
          </h1>
          <p className="font-sans text-blue-200/80 text-xl leading-relaxed mb-8">
            Orbitron Sciechem Limited serves Kenya, Uganda, Tanzania, Rwanda, Ethiopia, and South
            Sudan with a comprehensive range of industrial chemicals, food ingredients, pharmaceutical
            raw materials, and laboratory solutions.
          </p>
          <Link href="/contact#quote" className="btn-accent inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm transition-all">
            Partner With Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="section-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="font-heading font-black text-blue-800 text-3xl sm:text-4xl mb-4">
              Our East Africa Distribution Network
            </h2>
            <p className="font-sans text-neutral-500 max-w-2xl mx-auto">
              From our Nairobi hub, we distribute to 6 countries across East Africa,
              serving 10+ industry sectors with reliable supply chains.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {COUNTRIES.map(({ name, flag, capital, role, detail }) => (
              <div key={name} className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl">{flag}</span>
                  <div>
                    <h3 className="font-heading font-bold text-blue-800 text-base">{name}</h3>
                    <div className="flex items-center gap-1 text-neutral-400">
                      <MapPin size={11} />
                      <span className="font-sans text-xs">{capital}</span>
                    </div>
                  </div>
                  <span className={`ml-auto text-xs font-heading font-semibold px-2.5 py-1 rounded-full ${
                    role === 'Head Office & Hub'
                      ? 'bg-blue-100 text-blue-700'
                      : role === 'Active Market'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {role}
                  </span>
                </div>
                <p className="font-sans text-neutral-500 text-sm">{detail}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="font-heading font-black text-blue-800 text-3xl mb-6">
                Why Partner With Orbitron Across East Africa?
              </h2>
              <div className="font-sans text-neutral-600 leading-relaxed space-y-4 mb-8">
                <p>
                  As a registered multinational importer and distributor, Orbitron Sciechem is uniquely
                  positioned to serve the diverse chemical and laboratory needs of businesses across
                  East Africa. Our regional expertise, established customs relationships, and
                  comprehensive product portfolio make us the preferred partner for cross-border supply.
                </p>
                <p>
                  Whether you&apos;re a manufacturer in Uganda needing industrial chemicals, a
                  pharmaceutical company in Tanzania seeking GMP excipients, or a research institution
                  in Rwanda requiring laboratory reagents — Orbitron Sciechem delivers with reliability
                  and expertise.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADVANTAGES.map((adv) => (
                  <div key={adv} className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-acc-500 shrink-0 mt-0.5" />
                    <span className="font-sans text-neutral-600 text-sm">{adv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-blue-700 rounded-2xl p-6 text-white">
                <Globe size={28} className="mb-3 text-acc-400" />
                <h3 className="font-heading font-bold text-lg mb-2">Start Cross-Border Supply</h3>
                <p className="font-sans text-blue-200/80 text-sm mb-4">
                  We handle all export documentation, customs clearance, and last-mile delivery.
                  Contact us to establish your supply agreement.
                </p>
                <Link href="/contact#quote" className="btn-accent w-full text-center px-5 py-3 rounded-xl text-sm block">
                  Contact Our Export Team
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm">
                <h3 className="font-heading font-bold text-blue-800 text-base mb-4">Products We Export</h3>
                {[
                  'Industrial Chemicals',
                  'Food Ingredients & Additives',
                  'Pharmaceutical Raw Materials',
                  'Laboratory Equipment & Reagents',
                  'Petroleum Solvents',
                  'Water Treatment Chemicals',
                  'Food & Beverage Inputs',
                ].map((cat) => (
                  <div key={cat} className="flex items-center gap-2 py-2 border-b border-neutral-50 last:border-0">
                    <CheckCircle2 size={14} className="text-acc-500 shrink-0" />
                    <span className="font-sans text-neutral-700 text-sm font-medium">{cat}</span>
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
