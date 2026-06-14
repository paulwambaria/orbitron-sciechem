import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { products, getProductBySlug, CATEGORY_META, type ProductCategory } from '@/lib/products';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product Not Found | Orbitron Sciechem' };
  return {
    title: `${product.name} | ${product.categoryLabel} | Orbitron Sciechem Limited`,
    description: product.description,
  };
}

const WA_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L0 24l6.335-1.51A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.873 0-3.625-.487-5.146-1.339l-.369-.22-3.763.898.944-3.674-.244-.377A9.961 9.961 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const meta = CATEGORY_META[product.category];
  const waMsg = `Hello Orbitron Sciechem, I would like to request a quote for:\n\n*Product:* ${product.name}\n*Grade:* ${product.grade}\n*CAS:* ${product.cas}\n\nPlease share pricing and availability.`;
  const waHref = `https://wa.me/254742651823?text=${encodeURIComponent(waMsg)}`;

  // Related products: same category, exclude current
  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-2 text-sm font-sans">
          <Link href="/" className="text-neutral-400 hover:text-blue-700 transition-colors">Home</Link>
          <span className="text-neutral-300">/</span>
          <Link href="/products" className="text-neutral-400 hover:text-blue-700 transition-colors">Products</Link>
          <span className="text-neutral-300">/</span>
          <span className="text-blue-700 font-medium">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back link */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-blue-700 text-sm font-sans transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back to Products
        </Link>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
          {/* Left: image */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
              <span className={`absolute top-4 left-4 text-xs font-bold font-heading px-3 py-1.5 rounded-full uppercase tracking-wide ${meta.badge}`}>
                {meta.label}
              </span>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3">
              {['KEBS Approved', 'ISO Compliant', 'GMP Standards'].map((badge) => (
                <div key={badge} className="bg-white border border-neutral-100 rounded-xl p-3 flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-green-500 shrink-0" />
                  <span className="font-heading font-semibold text-blue-800 text-[11px]">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: product info */}
          <div>
            <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-7">
              <h1 className="font-heading font-black text-blue-900 text-2xl sm:text-3xl leading-tight mb-2">
                {product.name}
              </h1>

              {product.cas !== 'N/A' && (
                <p className="font-sans text-neutral-400 text-sm mb-4">CAS Number: <span className="font-medium text-neutral-600">{product.cas}</span></p>
              )}

              {/* Specs row */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold font-heading px-3 py-1.5 rounded-full">
                  {product.grade}
                </span>
                <span className="bg-neutral-100 text-neutral-600 text-xs font-sans px-3 py-1.5 rounded-full">
                  {product.form}
                </span>
              </div>

              <div className="h-px bg-neutral-100 mb-6" />

              <p className="font-sans text-neutral-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Applications */}
              <div className="mb-6">
                <h3 className="font-heading font-bold text-blue-800 text-sm mb-3">Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span key={app} className="text-xs bg-blue-50 border border-blue-100 text-blue-700 font-sans px-3 py-1 rounded-full">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specifications table */}
              {product.specifications && product.specifications.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-heading font-bold text-blue-800 text-sm mb-3">Technical Specifications</h3>
                  <div className="border border-neutral-100 rounded-xl overflow-hidden">
                    {product.specifications.map(({ key, value }, i) => (
                      <div key={key} className={`flex items-center justify-between px-4 py-3 text-sm ${i % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}`}>
                        <span className="font-heading font-semibold text-neutral-600">{key}</span>
                        <span className="font-sans text-neutral-700">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="h-px bg-neutral-100 mb-6" />

              {/* WhatsApp CTA — the ONLY way to request a quote */}
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1da851] text-white font-bold font-heading text-base py-4 rounded-xl transition-colors shadow-lg shadow-green-200"
              >
                {WA_ICON}
                Request Quote via WhatsApp
              </a>
              <p className="font-sans text-neutral-400 text-xs text-center mt-3">
                Our team responds within 30 minutes during business hours (Mon–Fri, 8am–6pm EAT)
              </p>

              {/* Secondary: call */}
              <a
                href="tel:+254742651823"
                className="flex items-center justify-center gap-2 w-full mt-3 border border-neutral-200 hover:border-blue-300 hover:bg-blue-50 text-neutral-600 hover:text-blue-700 font-heading font-semibold text-sm py-3 rounded-xl transition-all"
              >
                Or call +254 742 651 823
              </a>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section>
            <h2 className="font-heading font-black text-blue-800 text-2xl mb-6">
              More from {meta.label}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/products/${rel.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="font-heading font-bold text-blue-800 text-sm mb-1 group-hover:text-acc-500 transition-colors">
                      {rel.name}
                    </h3>
                    <span className="text-xs text-neutral-400 font-sans mb-3">{rel.grade}</span>
                    <span className="mt-auto font-heading font-bold text-acc-500 text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details <ArrowRight size={11} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href={`/products?category=${product.category}`}
                className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm"
              >
                View All {meta.label} <ArrowRight size={16} />
              </Link>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
