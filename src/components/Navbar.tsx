'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronDown, Menu, X, Phone, Mail, ArrowRight,
  FlaskConical, Pill, Droplets, Fuel, Microscope, Wheat, Building2, Factory, Beaker,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PRODUCTS_SECTIONS = [
  {
    heading: 'Industrial Chemicals',
    href: '/products?category=industrial',
    Icon: FlaskConical,
    items: ['Caustic Soda', 'Sulfuric Acid', 'Hydrochloric Acid', 'Nitric Acid', 'Sodium Silicate', 'Sodium Hypochlorite'],
  },
  {
    heading: 'Food Ingredients',
    href: '/products?category=food',
    Icon: Wheat,
    items: ['Citric Acid', 'Ascorbic Acid', 'Sodium Benzoate', 'Potassium Sorbate', 'Acetic Acid', 'Calcium Propionate'],
  },
  {
    heading: 'Pharmaceutical Solutions',
    href: '/products?category=pharma',
    Icon: Pill,
    items: ['APIs', 'Excipients', 'Pharma Solvents', 'Glycerin', 'Sorbitol', 'Ethanol'],
  },
  {
    heading: 'Laboratory Solutions',
    href: '/products?category=laboratory',
    Icon: Microscope,
    items: ['Spectrophotometers', 'pH Meters', 'Water Testing Kits', 'Reagents', 'Glassware', 'Instrumentation'],
  },
  {
    heading: 'Petroleum & Solvents',
    href: '/products?category=petroleum',
    Icon: Fuel,
    items: ['Toluene', 'Xylene', 'Hexane', 'White Spirit', 'Solvent Naphtha'],
  },
  {
    heading: 'Food & Beverage Inputs',
    href: '/products?category=food-inputs',
    Icon: Beaker,
    items: ['Enzymes', 'Stabilizers', 'Emulsifiers', 'Fortification Blends', 'Flavor Enhancers'],
  },
];

const INDUSTRIES = [
  { label: 'Manufacturing', href: '/industries/manufacturing', Icon: Factory },
  { label: 'Food & Beverage', href: '/industries/food-beverage', Icon: Wheat },
  { label: 'Pharmaceuticals', href: '/industries/pharmaceuticals', Icon: Pill },
  { label: 'Water Treatment', href: '/industries/water-treatment', Icon: Droplets },
  { label: 'Petroleum & Energy', href: '/industries/petroleum-energy', Icon: Fuel },
  { label: 'Research Laboratories', href: '/industries/laboratories', Icon: Microscope },
  { label: 'Agriculture', href: '/industries/agriculture', Icon: Wheat },
  { label: 'Government & Institutions', href: '/industries/government', Icon: Building2 },
];

const SOLUTIONS = [
  'Technical Consulting',
  'Quality Assurance',
  'Logistics & Distribution',
  'Supply Chain Management',
  'Custom Formulations',
];

const ABOUT_LINKS = [
  { label: 'About Orbitron', href: '/about' },
  { label: 'Mission & Vision', href: '/about#mission' },
  { label: 'Certifications', href: '/about#certifications' },
  { label: 'Sustainability', href: '/about#sustainability' },
  { label: 'Our Team', href: '/about#team' },
  { label: 'Careers', href: '/careers' },
];

function OrbLogo({ size = 42 }: { size?: number }) {
  return (
    <Image
      src="/logo.svg"
      alt="Orbitron Sciechem Limited"
      width={size}
      height={size}
      priority
      className="object-contain"
    />
  );
}

export default function Navbar() {
  const [scrolled, setScrolled]           = useState(false);
  const [openMenu, setOpenMenu]           = useState<string | null>(null);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const openMega = useCallback((menu: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(menu);
  }, []);

  const closeMega = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 180);
  }, []);

  const keepOpen = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const dark = !scrolled;
  const linkCls = (key: string) =>
    `flex items-center gap-1 px-3 py-2 text-sm font-semibold font-heading rounded-lg transition-colors cursor-pointer
    ${dark ? 'text-white/90 hover:text-white hover:bg-white/10' : 'text-blue-800 hover:text-acc-500 hover:bg-blue-50'}
    ${openMenu === key ? (dark ? 'text-white bg-white/10' : 'text-acc-500') : ''}`;

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-between bg-blue-800 text-white/85 text-xs px-8 py-2 font-sans">
        <span className="font-medium tracking-wide">Delivering Excellence Worldwide · East Africa&apos;s #1 Chemical Solutions Provider</span>
        <div className="flex items-center gap-6">
          <a href="tel:+254742651823" className="flex items-center gap-1.5 hover:text-acc-400 transition-colors">
            <Phone size={11} /> +254 742 651 823
          </a>
          <a href="mailto:info@orbitronsciechem.com" className="flex items-center gap-1.5 hover:text-acc-400 transition-colors">
            <Mail size={11} /> info@orbitronsciechem.com
          </a>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/98 backdrop-blur-sm shadow-[0_4px_30px_rgba(0,59,122,0.10)]'
            : 'bg-blue-900/95 backdrop-blur-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[4.25rem] flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setMobileOpen(false)}>
            <OrbLogo size={38} />
            <div className="leading-none">
              <span className={`block font-heading font-black text-[0.95rem] tracking-widest ${dark ? 'text-white' : 'text-blue-700'}`}>
                ORBITRON
              </span>
              <span className={`block font-heading font-semibold text-[0.57rem] tracking-[0.22em] ${dark ? 'text-acc-400' : 'text-blue-500'}`}>
                SCIECHEM LIMITED
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-0.5">

            {/* Products */}
            <li onMouseEnter={() => openMega('Products')} onMouseLeave={closeMega}>
              <button className={linkCls('Products')}>
                Products <ChevronDown size={13} className={`transition-transform ${openMenu === 'Products' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openMenu === 'Products' && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.16 }}
                    className="mega-menu absolute left-0 w-screen max-w-4xl p-7 mt-1"
                    style={{ left: '50%', transform: 'translateX(-45%)' }}
                    onMouseEnter={keepOpen} onMouseLeave={closeMega}
                  >
                    <div className="grid grid-cols-3 gap-6">
                      {PRODUCTS_SECTIONS.map((sec) => (
                        <div key={sec.heading}>
                          <Link
                            href={sec.href}
                            className="flex items-center gap-2 text-blue-700 font-bold font-heading text-sm mb-2.5 hover:text-acc-500 transition-colors"
                            onClick={() => setOpenMenu(null)}
                          >
                            <sec.Icon size={14} />
                            {sec.heading}
                          </Link>
                          <ul className="space-y-1">
                            {sec.items.slice(0, 5).map((item) => (
                              <li key={item}>
                                <Link
                                  href={`${sec.href}&q=${encodeURIComponent(item)}`}
                                  className="text-neutral-500 hover:text-blue-700 text-xs block py-0.5 transition-colors font-sans"
                                  onClick={() => setOpenMenu(null)}
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between">
                      <span className="text-xs text-neutral-400 font-sans">1,000+ products across 6 divisions</span>
                      <Link
                        href="/products"
                        className="flex items-center gap-1.5 text-acc-500 font-bold font-heading text-sm hover:gap-2.5 transition-all"
                        onClick={() => setOpenMenu(null)}
                      >
                        View All Products <ArrowRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Industries */}
            <li className="relative" onMouseEnter={() => openMega('Industries')} onMouseLeave={closeMega}>
              <button className={linkCls('Industries')}>
                Industries <ChevronDown size={13} className={`transition-transform ${openMenu === 'Industries' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openMenu === 'Industries' && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.16 }}
                    className="mega-menu p-4 w-72"
                    onMouseEnter={keepOpen} onMouseLeave={closeMega}
                  >
                    <ul className="space-y-0.5">
                      {INDUSTRIES.map((ind) => (
                        <li key={ind.label}>
                          <Link
                            href={ind.href}
                            className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-blue-50 text-neutral-700 hover:text-blue-700 text-sm transition-colors font-sans"
                            onClick={() => setOpenMenu(null)}
                          >
                            <ind.Icon size={14} className="text-acc-500 shrink-0" />
                            {ind.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 pt-3 border-t border-neutral-100">
                      <Link href="/industries" className="flex items-center gap-1 text-acc-500 font-bold font-heading text-sm hover:gap-2 transition-all" onClick={() => setOpenMenu(null)}>
                        All Industries <ArrowRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Solutions */}
            <li className="relative" onMouseEnter={() => openMega('Solutions')} onMouseLeave={closeMega}>
              <button className={linkCls('Solutions')}>
                Solutions <ChevronDown size={13} className={`transition-transform ${openMenu === 'Solutions' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openMenu === 'Solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.16 }}
                    className="mega-menu p-4 w-56"
                    onMouseEnter={keepOpen} onMouseLeave={closeMega}
                  >
                    <ul className="space-y-0.5">
                      {SOLUTIONS.map((s) => (
                        <li key={s}>
                          <Link
                            href={`/solutions/${s.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block px-3 py-2 rounded-lg hover:bg-blue-50 text-neutral-700 hover:text-blue-700 text-sm transition-colors font-sans"
                            onClick={() => setOpenMenu(null)}
                          >
                            {s}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* About */}
            <li className="relative" onMouseEnter={() => openMega('About')} onMouseLeave={closeMega}>
              <button className={linkCls('About')}>
                About <ChevronDown size={13} className={`transition-transform ${openMenu === 'About' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openMenu === 'About' && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.16 }}
                    className="mega-menu p-4 w-52"
                    onMouseEnter={keepOpen} onMouseLeave={closeMega}
                  >
                    <ul className="space-y-0.5">
                      {ABOUT_LINKS.map((l) => (
                        <li key={l.label}>
                          <Link
                            href={l.href}
                            className="block px-3 py-2 rounded-lg hover:bg-blue-50 text-neutral-700 hover:text-blue-700 text-sm transition-colors font-sans"
                            onClick={() => setOpenMenu(null)}
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <Link href="/contact" className={linkCls('')}>Contact</Link>
            </li>
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact#quote"
              className="hidden md:inline-flex items-center btn-accent px-5 py-2.5 rounded-full text-sm transition-all"
            >
              Get a Quote
            </Link>
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${dark ? 'text-white hover:bg-white/10' : 'text-blue-800 hover:bg-blue-50'}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="lg:hidden bg-white border-t border-neutral-100 overflow-hidden"
            >
              <div className="overflow-y-auto max-h-[75vh] px-4 py-4 space-y-1">

                {/* Products accordion */}
                {[
                  { key: 'products', label: 'Products', content: (
                    <div className="pt-2 pb-3 pl-3 space-y-3">
                      {PRODUCTS_SECTIONS.map((sec) => (
                        <div key={sec.heading}>
                          <Link href={sec.href} className="text-blue-600 font-semibold font-heading text-sm block mb-1" onClick={() => setMobileOpen(false)}>
                            {sec.heading}
                          </Link>
                          <div className="text-xs text-neutral-400 font-sans">{sec.items.slice(0, 3).join(' · ')}</div>
                        </div>
                      ))}
                      <Link href="/products" className="text-acc-500 font-bold font-heading text-sm flex items-center gap-1 pt-1" onClick={() => setMobileOpen(false)}>
                        All Products <ArrowRight size={13} />
                      </Link>
                    </div>
                  )},
                  { key: 'industries', label: 'Industries', content: (
                    <div className="pt-2 pb-3 pl-3 grid grid-cols-2 gap-y-1">
                      {INDUSTRIES.map((ind) => (
                        <Link key={ind.label} href={ind.href} className="text-neutral-600 hover:text-blue-700 text-sm py-1 font-sans" onClick={() => setMobileOpen(false)}>
                          {ind.label}
                        </Link>
                      ))}
                    </div>
                  )},
                ].map(({ key, label, content }) => (
                  <div key={key} className="border-b border-neutral-100 last:border-0">
                    <button
                      className="flex items-center justify-between w-full px-3 py-3 text-blue-800 font-bold font-heading text-sm"
                      onClick={() => setMobileSection(mobileSection === key ? null : key)}
                    >
                      {label}
                      <ChevronDown size={15} className={`transition-transform ${mobileSection === key ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileSection === key && content}
                  </div>
                ))}

                {[
                  { label: 'Solutions', href: '/solutions' },
                  { label: 'About Us', href: '/about' },
                  { label: 'Contact', href: '/contact' },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-3 py-3 border-b border-neutral-100 text-blue-800 font-bold font-heading text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="pt-4 pb-2 flex flex-col gap-3">
                  <Link href="/contact#quote" className="btn-accent w-full text-center px-5 py-3 rounded-full text-sm block" onClick={() => setMobileOpen(false)}>
                    Get a Quote
                  </Link>
                  <a href="tel:+254742651823" className="btn-outline-blue w-full text-center px-5 py-3 rounded-full text-sm block">
                    +254 742 651 823
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
