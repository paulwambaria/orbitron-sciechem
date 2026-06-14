import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { products, CATEGORY_META, type ProductCategory } from '@/lib/products';
import CTA from '@/components/CTA';

const U = 'https://images.unsplash.com';

type IndustryInfo = {
  title: string;
  subtitle: string;
  desc: string;
  longDesc: string;
  categories: ProductCategory[];
  image: string;
  features: string[];
  waMsg: string;
  seoUrl?: string;
};

const INDUSTRIES: Record<string, IndustryInfo> = {
  manufacturing: {
    title: 'Manufacturing',
    subtitle: 'Industrial Process Chemicals & Solvents',
    desc: 'Process chemicals, industrial solvents, and specialty additives for manufacturing sectors across East Africa.',
    longDesc:
      'From soap and detergent production to metal pickling, textile dyeing, and paper processing — Orbitron Sciechem supplies the full range of industrial chemicals manufacturers need. Our products include caustic soda, hydrochloric acid, sulfuric acid, ammonia solution, sodium silicate, and industrial solvents, all delivered with full safety documentation.',
    categories: ['industrial'],
    image: `${U}/photo-1565793298595-6a879b1d9492?w=1200&h=450&fit=crop&q=80`,
    features: [
      'Soap & Detergent Manufacturing',
      'Metal Cleaning & Pickling',
      'Textile Processing & Dyeing',
      'Paper & Pulp Production',
      'Industrial Cleaning & Sanitation',
      'pH Control & Neutralization',
    ],
    waMsg:
      'Hello Orbitron Sciechem, I represent a manufacturing company and need industrial chemicals. Please share your product catalog and pricing.',
    seoUrl: '/industrial-chemicals-kenya',
  },
  'food-beverage': {
    title: 'Food & Beverage',
    subtitle: 'Food Grade Ingredients & Processing Aids',
    desc: 'Premium food-grade ingredients, preservatives, emulsifiers, and production inputs for the food and beverage industry.',
    longDesc:
      "Orbitron Sciechem supplies East Africa's food and beverage industry with CODEX and KEBS-approved additives, preservatives, acidulants, fortification blends, enzymes, and flavor systems. Every product is sourced from certified manufacturers with full traceability and complies with local and international food safety regulations.",
    categories: ['food', 'food-inputs'],
    image: `${U}/photo-1568702846914-96b305d2aaeb?w=1200&h=450&fit=crop&q=80`,
    features: [
      'Beverage Formulation & Preservation',
      'Bakery & Confectionery Production',
      'Dairy Processing & Stabilization',
      'Edible Oils & Fats Fortification',
      'Meat & Poultry Preservation',
      'Flour, Salt & Oil Fortification Programs',
    ],
    waMsg:
      'Hello Orbitron Sciechem, I represent a food and beverage company. Please share your food ingredients catalog and pricing.',
    seoUrl: '/food-ingredients-supplier-kenya',
  },
  pharmaceuticals: {
    title: 'Pharmaceuticals',
    subtitle: 'GMP Pharmaceutical Raw Materials & Excipients',
    desc: 'GMP-certified pharmaceutical raw materials, excipients, and solvents for drug and nutraceutical manufacturers.',
    longDesc:
      'We supply USP/BP-grade excipients, solvents, and APIs to pharmaceutical manufacturers across East Africa. All pharmaceutical products come with Certificates of Analysis (CoA), Material Safety Data Sheets (MSDS), and GMP compliance certificates from source manufacturers.',
    categories: ['pharma'],
    image: `${U}/photo-1584308666744-24d5c474f2ae?w=1200&h=450&fit=crop&q=80`,
    features: [
      'Tablet & Capsule Excipients',
      'Oral Liquid Formulation Solvents',
      'Topical & Injectable Grade Materials',
      'API Synthesis & Intermediates',
      'Nutraceutical Manufacturing',
      'Pharmaceutical QC & Testing',
    ],
    waMsg:
      'Hello Orbitron Sciechem, I need GMP pharmaceutical raw materials. Please share your pharma catalog with CoA details.',
    seoUrl: '/pharmaceutical-raw-materials-kenya',
  },
  'water-treatment': {
    title: 'Water Treatment',
    subtitle: 'Water Purification & Treatment Chemicals',
    desc: 'Water treatment chemicals for municipalities, utilities, and industrial facilities across East Africa.',
    longDesc:
      'Orbitron Sciechem supplies water treatment chemicals that meet NEMA and KEBS standards. Our range covers the full treatment cycle — coagulation, flocculation, disinfection, and pH adjustment — for municipal water works, wastewater treatment plants, industrial cooling systems, and borehole treatment programs.',
    categories: ['industrial'],
    image: `${U}/photo-1548407260-da850faa41e3?w=1200&h=450&fit=crop&q=80`,
    features: [
      'Municipal Drinking Water Purification',
      'Wastewater & Effluent Treatment',
      'Industrial Cooling Tower Water',
      'Swimming Pool Sanitation',
      'Borehole & Dam Treatment',
      'NEMA Compliance Documentation',
    ],
    waMsg:
      'Hello Orbitron Sciechem, I need water treatment chemicals. Please share your catalog and pricing.',
    seoUrl: '/water-treatment-chemicals-kenya',
  },
  'petroleum-energy': {
    title: 'Petroleum & Energy',
    subtitle: 'Petroleum Solvents & Specialty Chemicals',
    desc: 'High-purity petroleum solvents, lubricant additives, and specialty chemicals for the energy and petroleum sectors.',
    longDesc:
      'Our petroleum chemicals portfolio serves refineries, fuel blenders, paint manufacturers, rubber processors, and adhesive producers. All solvents are supplied to exact purity specifications with full safety data sheets and certificates of analysis.',
    categories: ['petroleum'],
    image: `${U}/photo-1558618666-fcd25c85cd64?w=1200&h=450&fit=crop&q=80`,
    features: [
      'Fuel Blending & Lubricant Production',
      'Solvent Extraction Processes',
      'Paint & Coatings Manufacturing',
      'Adhesives & Rubber Processing',
      'Industrial Degreasing & Cleaning',
      'Laboratory Analytical Applications',
    ],
    waMsg:
      'Hello Orbitron Sciechem, I need petroleum solvents and specialty energy chemicals. Please share your catalog and pricing.',
  },
  laboratories: {
    title: 'Research Laboratories',
    subtitle: 'Laboratory Equipment & Analytical Reagents',
    desc: 'Advanced laboratory instruments, analytical reagents, and scientific consumables for research and testing facilities.',
    longDesc:
      'We supply universities, research institutes, government laboratories, food testing labs, water quality facilities, and pharmaceutical QC departments with the equipment and reagents they need. Our laboratory solutions span from basic consumables to sophisticated UV-VIS spectrophotometers and HPLC systems.',
    categories: ['laboratory'],
    image: `${U}/photo-1581093196277-9b3c75a5d1ae?w=1200&h=450&fit=crop&q=80`,
    features: [
      'Food Safety & Quality Testing',
      'Water Quality Analysis',
      'Pharmaceutical QC & Release Testing',
      'Environmental Monitoring',
      'Agricultural & Soil Analysis',
      'Clinical & Diagnostic Laboratories',
    ],
    waMsg:
      'Hello Orbitron Sciechem, I need laboratory equipment and reagents. Please share your lab solutions catalog.',
    seoUrl: '/laboratory-equipment-supplier-kenya',
  },
  agriculture: {
    title: 'Agriculture',
    subtitle: 'Agro-Chemical Solutions & Soil Testing',
    desc: 'Soil testing kits, water quality tools, and specialty agro-chemicals for modern farming operations across East Africa.',
    longDesc:
      'Orbitron Sciechem supports farmers, cooperatives, and agricultural extension services with precision soil and water testing equipment, fertilizer inputs, and field diagnostic kits. Our products help optimize crop yields and support sustainable farming practices across the East African region.',
    categories: ['laboratory'],
    image: `${U}/photo-1500651230702-0e2d8a49d4ad?w=1200&h=450&fit=crop&q=80`,
    features: [
      'Soil NPK & pH Testing Kits',
      'Irrigation Water Quality Analysis',
      'Crop Protection Chemistry',
      'Post-harvest Treatment Solutions',
      'Fertilizer Production Inputs',
      'Field Diagnostic Rapid Test Kits',
    ],
    waMsg:
      'Hello Orbitron Sciechem, I need agro-chemical solutions and soil testing kits. Please share your agricultural product catalog.',
  },
  government: {
    title: 'Government & Institutions',
    subtitle: 'Bulk Institutional Chemical & Lab Supply',
    desc: 'Bulk chemical and laboratory supply for government agencies, hospitals, universities, and public institutions.',
    longDesc:
      'Orbitron Sciechem supports institutional procurement across East Africa. We supply government laboratories, public hospitals, universities, and parastatals with chemicals, laboratory equipment, and consumables — with full documentation for LPO and tender processes.',
    categories: ['industrial', 'laboratory', 'pharma'],
    image: `${U}/photo-1486406146926-c627a92ad1ab?w=1200&h=450&fit=crop&q=80`,
    features: [
      'Government Laboratory Chemicals',
      'Public Hospital & Clinic Supplies',
      'University Research Reagents',
      'LPO & Tender Processing Support',
      'Regulatory-Compliant Documentation',
      'Long-term Institutional Supply Agreements',
    ],
    waMsg:
      'Hello Orbitron Sciechem, I represent a government or institutional buyer. Please share your institutional procurement process and pricing.',
  },
};

export function generateStaticParams() {
  return Object.keys(INDUSTRIES).map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ind = INDUSTRIES[slug];
  if (!ind) return { title: 'Industry Not Found' };
  return {
    title: `${ind.title} Chemicals & Solutions | Orbitron Sciechem Kenya`,
    description: ind.desc,
  };
}

const WA_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L0 24l6.335-1.51A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.873 0-3.625-.487-5.146-1.339l-.369-.22-3.763.898.944-3.674-.244-.377A9.961 9.961 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const ind = INDUSTRIES[slug];
  if (!ind) notFound();

  const waHref = `https://wa.me/254742651823?text=${encodeURIComponent(ind.waMsg)}`;

  const relevantProducts = products
    .filter((p) => ind.categories.includes(p.category))
    .slice(0, 9);

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-2 text-sm font-sans text-neutral-500">
          <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
          <span className="text-neutral-300">/</span>
          <Link href="/industries" className="hover:text-blue-700 transition-colors">Industries</Link>
          <span className="text-neutral-300">/</span>
          <span className="text-blue-700 font-medium">{ind.title}</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative h-[340px] sm:h-[400px] overflow-hidden">
        <Image
          src={ind.image}
          alt={ind.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-1.5 text-blue-200/70 hover:text-white text-sm font-sans mb-5 transition-colors"
          >
            <ArrowLeft size={15} /> All Industries
          </Link>
          <span className="inline-flex items-center gap-2 bg-acc-500/20 border border-acc-500/30 text-acc-300 text-xs font-bold font-heading tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 w-fit">
            {ind.subtitle}
          </span>
          <h1 className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-5xl mb-4 max-w-xl">
            {ind.title} Solutions
          </h1>
          <p className="font-sans text-blue-200/80 text-base sm:text-lg max-w-xl leading-relaxed">
            {ind.desc}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Description + Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-heading font-black text-blue-800 text-2xl sm:text-3xl mb-5">
              Our {ind.title} Portfolio
            </h2>
            <p className="font-sans text-neutral-600 leading-relaxed text-[15px] mb-8">
              {ind.longDesc}
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1da851] text-white font-bold font-heading px-7 py-3.5 rounded-full transition-colors shadow-lg text-sm"
            >
              {WA_ICON} Request a Quote via WhatsApp
            </a>
            {ind.seoUrl && (
              <Link
                href={ind.seoUrl}
                className="ml-4 inline-flex items-center gap-1 text-blue-700 hover:text-acc-500 font-heading font-bold text-sm transition-colors"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            )}
          </div>

          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-7">
            <h3 className="font-heading font-bold text-blue-800 text-lg mb-5">
              Applications We Serve
            </h3>
            <ul className="space-y-3">
              {ind.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <span className="font-sans text-neutral-700 text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 pt-6 border-t border-neutral-100">
              <p className="font-sans text-neutral-500 text-xs mb-3">Trusted by companies across East Africa</p>
              <div className="flex flex-wrap gap-2">
                {['Kenya', 'Uganda', 'Tanzania', 'Rwanda', 'Ethiopia', 'South Sudan'].map((c) => (
                  <span key={c} className="text-[11px] bg-blue-50 text-blue-700 font-heading font-bold px-2.5 py-1 rounded-full">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        {relevantProducts.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-heading font-black text-blue-800 text-2xl">
                Products for {ind.title}
              </h2>
              <Link
                href={`/products?category=${ind.categories[0]}`}
                className="hidden sm:inline-flex items-center gap-1.5 text-acc-500 hover:text-acc-600 font-heading font-bold text-sm transition-colors"
              >
                View All <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relevantProducts.map((product) => {
                const meta = CATEGORY_META[product.category];
                const waMsg = `Hello Orbitron Sciechem, I am interested in *${product.name}* (${product.grade}). Please send me pricing and availability.`;
                return (
                  <div
                    key={product.slug}
                    className="group bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    <div className="relative h-44 overflow-hidden shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                      <span className={`absolute top-2.5 left-2.5 text-[10px] font-bold font-heading px-2.5 py-1 rounded-full uppercase tracking-wide ${meta.badge}`}>
                        {meta.label}
                      </span>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="font-heading font-bold text-blue-800 text-sm mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="font-sans text-neutral-500 text-xs leading-relaxed mb-4 flex-1 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex gap-2 mt-auto">
                        <a
                          href={`https://wa.me/254742651823?text=${encodeURIComponent(waMsg)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1da851] text-white text-[11px] font-bold font-heading py-2.5 rounded-xl transition-colors"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L0 24l6.335-1.51A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.873 0-3.625-.487-5.146-1.339l-.369-.22-3.763.898.944-3.674-.244-.377A9.961 9.961 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                          Get Quote
                        </a>
                        <Link
                          href={`/products/${product.slug}`}
                          className="flex items-center justify-center gap-1 border border-blue-200 hover:border-blue-400 hover:bg-blue-50 text-blue-600 text-[11px] font-heading font-bold px-3 py-2.5 rounded-xl transition-all"
                        >
                          Details <ArrowRight size={10} />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-8">
              <Link
                href={`/products?category=${ind.categories[0]}`}
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold font-heading px-7 py-3.5 rounded-full transition-colors text-sm"
              >
                Browse All {ind.title} Products <ArrowRight size={16} />
              </Link>
            </div>
          </section>
        )}
      </div>

      <CTA />
    </main>
  );
}
