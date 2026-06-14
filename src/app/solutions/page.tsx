import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, FlaskConical, ShieldCheck, Truck, Network, Beaker } from 'lucide-react';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Solutions | Technical, Logistics & Custom Chemical Services — Orbitron Sciechem',
  description:
    'Orbitron Sciechem delivers end-to-end solutions: technical consulting, quality assurance, logistics & distribution, supply chain management, and custom formulations across East Africa.',
};

const SOLUTIONS = [
  {
    id: 'technical-consulting',
    Icon: FlaskConical,
    title: 'Technical Consulting',
    tagline: 'Expert guidance for every chemical challenge',
    desc: 'Our team of chemical engineers and industry specialists work alongside your team to select the right products, optimise formulations, and solve process challenges. From raw material sourcing to final product compliance, we provide actionable expertise that reduces cost and accelerates time-to-market.',
    features: [
      'Product selection & application support',
      'Formulation optimisation',
      'Regulatory & safety compliance guidance',
      'On-site technical assessments',
      'R&D collaboration for new product development',
      'Process troubleshooting & yield improvement',
    ],
    color: 'bg-blue-700',
    light: 'bg-blue-50',
    border: 'border-blue-200',
  },
  {
    id: 'quality-assurance',
    Icon: ShieldCheck,
    title: 'Quality Assurance',
    tagline: 'Certified quality from source to delivery',
    desc: 'Every product we supply undergoes rigorous quality checks aligned with international standards including KEBS, ISO, GMP, and HACCP. We maintain full traceability across our supply chain and provide Certificates of Analysis (CoA) and Safety Data Sheets (SDS) with every shipment.',
    features: [
      'Full Certificate of Analysis (CoA) with every batch',
      'Safety Data Sheets (SDS) for all products',
      'KEBS, ISO & GMP compliant sourcing',
      'Third-party lab testing on request',
      'Lot traceability & documentation',
      'Food-grade and pharmaceutical-grade certification',
    ],
    color: 'bg-green-600',
    light: 'bg-green-50',
    border: 'border-green-200',
  },
  {
    id: 'logistics-distribution',
    Icon: Truck,
    title: 'Logistics & Distribution',
    tagline: 'Reliable delivery across East Africa',
    desc: 'With a modern fleet and established distribution network, we deliver chemicals and laboratory products across Kenya and the wider East African region. Our temperature-controlled and hazmat-compliant logistics ensure your products arrive safely, on time, and fully documented.',
    features: [
      'Same-day and next-day delivery in Nairobi',
      'Upcountry and regional distribution',
      'Hazardous materials (HAZMAT) handling',
      'Temperature-controlled transport available',
      'Bulk tanker delivery for liquid chemicals',
      'Real-time shipment tracking',
    ],
    color: 'bg-acc-500',
    light: 'bg-orange-50',
    border: 'border-orange-200',
  },
  {
    id: 'supply-chain-management',
    Icon: Network,
    title: 'Supply Chain Management',
    tagline: 'Streamlined procurement for your operation',
    desc: 'We act as your single-source chemical procurement partner — consolidating suppliers, managing inventory, and ensuring continuity of supply. Our supply chain management service reduces your procurement overhead and protects against shortages through strategic stocking and global sourcing relationships.',
    features: [
      'Single-source procurement for all chemical needs',
      'Vendor-managed inventory (VMI)',
      'Long-term supply agreements & blanket orders',
      'Import & customs clearance handling',
      'Global supplier network across 20+ countries',
      'Emergency supply & stock-out prevention',
    ],
    color: 'bg-purple-700',
    light: 'bg-purple-50',
    border: 'border-purple-200',
  },
  {
    id: 'custom-formulations',
    Icon: Beaker,
    title: 'Custom Formulations',
    tagline: 'Bespoke chemical blends built for your needs',
    desc: 'When off-the-shelf products are not enough, our formulation team develops custom chemical blends and specialty mixtures tailored to your exact specifications. From cleaning compounds and industrial degreasers to food-grade ingredient mixes, we deliver precision formulations with full technical support.',
    features: [
      'Custom blending & mixing services',
      'Private label packaging available',
      'Small-batch pilot runs to full production',
      'Stability and compatibility testing',
      'Food, pharma & industrial grade options',
      'NDA-protected proprietary formulation development',
    ],
    color: 'bg-cyan-600',
    light: 'bg-cyan-50',
    border: 'border-cyan-200',
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-grad py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="tag-pill tag-orange">Solutions</span>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl lg:text-6xl mt-5 mb-5 leading-tight">
            End-to-End <span className="text-acc-500">Chemical Solutions</span>
          </h1>
          <p className="font-sans text-blue-200/80 text-xl leading-relaxed">
            From sourcing and quality assurance to custom formulations and last-mile delivery —
            Orbitron Sciechem is your complete chemical solutions partner across East Africa.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link href="/contact#quote" className="btn-accent px-7 py-3.5 rounded-full font-heading font-bold text-sm">
              Get a Quote
            </Link>
            <Link href="/contact" className="btn-outline-white px-7 py-3.5 rounded-full font-heading font-bold text-sm">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Quick nav */}
      <div className="bg-white border-b border-neutral-100 sticky top-[5.5rem] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {SOLUTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 font-heading font-semibold text-xs text-blue-700 hover:text-acc-500 bg-blue-50 hover:bg-orange-50 px-4 py-2 rounded-full transition-colors whitespace-nowrap"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Solutions sections */}
      <section className="section-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {SOLUTIONS.map((sol, i) => (
            <div
              key={sol.id}
              id={sol.id}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center scroll-mt-36`}
            >
              {/* Icon block */}
              <div className="shrink-0 flex flex-col items-center lg:items-start gap-6 lg:w-72">
                <div className={`w-20 h-20 rounded-3xl ${sol.color} flex items-center justify-center shadow-xl`}>
                  <sol.Icon size={38} className="text-white" />
                </div>
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-1">{sol.tagline}</p>
                  <h2 className="font-heading font-black text-blue-800 text-3xl lg:text-4xl">{sol.title}</h2>
                </div>
                <Link
                  href="/contact#quote"
                  className="btn-accent px-6 py-3 rounded-full font-heading font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Request This Service <ArrowRight size={15} />
                </Link>
              </div>

              {/* Content */}
              <div className={`flex-1 ${sol.light} rounded-3xl p-8 lg:p-10 border ${sol.border}`}>
                <p className="font-sans text-neutral-600 text-base leading-relaxed mb-8">{sol.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {sol.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                      <span className="font-sans text-sm text-neutral-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
