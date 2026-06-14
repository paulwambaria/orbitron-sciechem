'use client';
import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ArrowRight, Filter, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { products, CATEGORY_META, type ProductCategory } from '@/lib/products';

const WHATSAPP_BASE = 'https://wa.me/254742651823?text=';

function waLink(productName: string, grade: string) {
  const msg = `Hello Orbitron Sciechem, I am interested in *${productName}* (${grade}). Please send me pricing and availability.`;
  return WHATSAPP_BASE + encodeURIComponent(msg);
}

const ALL_CATS: { value: ProductCategory | 'all'; label: string }[] = [
  { value: 'all',          label: 'All Products' },
  { value: 'industrial',   label: 'Industrial Chemicals' },
  { value: 'food',         label: 'Food Ingredients' },
  { value: 'pharma',       label: 'Pharmaceutical' },
  { value: 'petroleum',    label: 'Petroleum & Solvents' },
  { value: 'laboratory',   label: 'Lab Equipment' },
  { value: 'food-inputs',  label: 'Food & Beverage' },
];

const WA_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L0 24l6.335-1.51A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.873 0-3.625-.487-5.146-1.339l-.369-.22-3.763.898.944-3.674-.244-.377A9.961 9.961 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

const VALID_CATS: (ProductCategory | 'all')[] = ['all', 'industrial', 'food', 'pharma', 'petroleum', 'laboratory', 'food-inputs'];

function ProductsPage() {
  const searchParams = useSearchParams();
  const urlCat = searchParams.get('category') as ProductCategory | 'all' | null;
  const initialCat: ProductCategory | 'all' = urlCat && VALID_CATS.includes(urlCat) ? urlCat : 'all';

  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>(initialCat);
  const [search, setSearch] = useState('');

  // Sync when URL changes (e.g. hero banner navigates with ?category=...)
  useEffect(() => {
    const cat = searchParams.get('category') as ProductCategory | 'all' | null;
    if (cat && VALID_CATS.includes(cat)) setActiveCategory(cat);
    else setActiveCategory('all');
  }, [searchParams]);

  const filtered = useMemo(() => {
    let list = products;
    if (activeCategory !== 'all') list = list.filter((p) => p.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.cas.toLowerCase().includes(q) ||
          p.grade.toLowerCase().includes(q) ||
          p.applications.some((a) => a.toLowerCase().includes(q))
      );
    }
    return list;
  }, [activeCategory, search]);

  return (
    <main className="min-h-screen">
      {/* ── Page Hero ── */}
      <div className="relative bg-gradient-to-br from-blue-900 to-blue-950 pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 molecule-bg opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-acc-500/20 border border-acc-500/40 text-acc-300 text-xs font-bold font-heading tracking-widest uppercase px-4 py-1.5 rounded-full mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-acc-500" />
            Product Catalog
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-5xl mb-4"
          >
            Over 1,000 Products Across Six Divisions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-blue-200/80 text-lg max-w-2xl mx-auto"
          >
            Browse our catalog and request pricing directly via WhatsApp — our team typically
            responds within 30 minutes during business hours.
          </motion.p>
        </div>
      </div>

      {/* ── Filters ── */}
      <div className="sticky top-16 z-30 bg-white border-b border-neutral-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            {/* Search */}
            <div className="relative w-full sm:w-72">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Search by name, CAS, or application…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-9 py-2.5 border border-neutral-200 rounded-full text-sm font-sans text-neutral-700 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600">
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Category chips */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <Filter size={13} className="text-neutral-400 shrink-0" />
              {ALL_CATS.map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => setActiveCategory(value)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold font-heading transition-all ${
                    activeCategory === value
                      ? 'bg-blue-700 text-white shadow-sm'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Product Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Meta row */}
        <div className="flex items-center justify-between mb-8">
          <p className="font-sans text-neutral-500 text-sm">
            Showing <span className="font-semibold text-blue-800">{filtered.length}</span>{' '}
            {filtered.length === 1 ? 'product' : 'products'}
            {activeCategory !== 'all' && ` · ${CATEGORY_META[activeCategory]?.label}`}
          </p>
          <a
            href="https://wa.me/254742651823?text=Hello%2C%20please%20send%20me%20your%20full%20product%20catalog%20and%20price%20list."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1da851] text-white text-xs font-bold font-heading px-4 py-2 rounded-full transition-colors"
          >
            {WA_ICON} Request Full Catalog
          </a>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-heading font-bold text-blue-800 text-xl mb-2">No products found</p>
            <p className="font-sans text-neutral-500 text-sm mb-6">Try a different search term or category filter.</p>
            <button
              onClick={() => { setSearch(''); setActiveCategory('all'); }}
              className="btn-primary px-6 py-3 rounded-full text-sm"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product, i) => {
              const meta = CATEGORY_META[product.category];
              return (
                <motion.div
                  key={product.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.04, 0.4) }}
                  className="group bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  {/* Product image */}
                  <div className="relative h-44 overflow-hidden shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                    <span className={`absolute top-2.5 left-2.5 text-[10px] font-bold font-heading px-2.5 py-1 rounded-full uppercase tracking-wide ${meta.badge}`}>
                      {meta.label}
                    </span>
                    {product.featured && (
                      <span className="absolute top-2.5 right-2.5 bg-acc-500 text-white text-[10px] font-bold font-heading px-2 py-0.5 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-heading font-bold text-blue-800 text-sm leading-snug mb-2 group-hover:text-acc-600 transition-colors line-clamp-2">
                      {product.name}
                    </h3>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      <span className="text-[11px] bg-blue-50 text-blue-600 font-heading font-semibold px-2 py-0.5 rounded-full">
                        {product.grade.split(' / ')[0]}
                      </span>
                      <span className="text-[11px] bg-neutral-100 text-neutral-500 font-sans px-2 py-0.5 rounded-full">
                        {product.form.split(' / ')[0]}
                      </span>
                    </div>

                    {product.cas !== 'N/A' && product.cas !== 'Various' && (
                      <p className="font-sans text-neutral-400 text-[10px] mb-2">CAS: {product.cas.split(' / ')[0]}</p>
                    )}

                    <p className="font-sans text-neutral-500 text-xs leading-relaxed mb-4 flex-1 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Action buttons */}
                    <div className="flex gap-2 mt-auto">
                      <a
                        href={waLink(product.name, product.grade)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1da851] text-white text-[11px] font-bold font-heading py-2.5 rounded-xl transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {WA_ICON} Get Quote
                      </a>
                      <Link
                        href={`/products/${product.slug}`}
                        className="flex items-center justify-center gap-1 border border-blue-200 hover:border-blue-400 hover:bg-blue-50 text-blue-600 text-[11px] font-heading font-bold px-3 py-2.5 rounded-xl transition-all"
                      >
                        Details <ArrowRight size={10} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-heading font-black text-white text-xl md:text-2xl mb-2">
              Can&apos;t find what you&apos;re looking for?
            </h3>
            <p className="font-sans text-blue-200/80 text-sm max-w-md">
              This catalog shows a selection of our full portfolio. Contact us for custom sourcing,
              bulk pricing, and products not listed here.
            </p>
          </div>
          <a
            href="https://wa.me/254742651823?text=Hello%2C%20I%27m%20looking%20for%20a%20specific%20chemical%20product%20not%20listed%20in%20your%20catalog.%20Can%20you%20help%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1da851] text-white font-bold font-heading px-7 py-3.5 rounded-full transition-colors shadow-lg text-sm"
          >
            {WA_ICON} WhatsApp Our Team
          </a>
        </motion.div>
      </div>
    </main>
  );
}

// useSearchParams() requires Suspense in Next.js App Router
import { Suspense } from 'react';
function ProductsPageFallback() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-blue-700 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="font-sans text-neutral-500 text-sm">Loading products…</p>
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<ProductsPageFallback />}>
      <ProductsPage />
    </Suspense>
  );
}
