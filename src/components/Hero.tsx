'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const U = 'https://images.unsplash.com';

const SLIDES = [
  {
    image: `${U}/photo-1565793298595-6a879b1d9492?w=1920&h=1080&fit=crop&q=85`,
    badge: 'Industrial Chemicals',
    headline: "Africa's Premier\nIndustrial Chemical Supplier",
    sub: 'Caustic soda, acids, solvents, and specialty chemicals — premium quality, consistent supply across East Africa.',
    cta1: { label: 'Request a Quote', href: '/contact#quote' },
    cta2: { label: 'View Products', href: '/products' },
  },
  {
    image: `${U}/photo-1568702846914-96b305d2aaeb?w=1920&h=1080&fit=crop&q=85`,
    badge: 'Food Ingredients',
    headline: 'Complete Food Ingredient\nSolutions',
    sub: 'KEBS-certified food additives, preservatives, and processing chemicals for manufacturers across Kenya.',
    cta1: { label: 'View Food Products', href: '/products?category=food' },
    cta2: { label: 'Learn More', href: '/about' },
  },
  {
    image: `${U}/photo-1584308666744-24d5c474f2ae?w=1920&h=1080&fit=crop&q=85`,
    badge: 'Pharmaceutical',
    headline: 'GMP-Grade Pharmaceutical\nRaw Materials',
    sub: 'APIs, excipients, pharma-grade solvents, and GMP-compliant ingredients for drug manufacturing.',
    cta1: { label: 'Pharma Products', href: '/products?category=pharma' },
    cta2: { label: 'Get a Quote', href: '/contact#quote' },
  },
  {
    image: `${U}/photo-1581093196277-9b3c75a5d1ae?w=1920&h=1080&fit=crop&q=85`,
    badge: 'Laboratory Solutions',
    headline: 'Complete Laboratory\n& Analytical Solutions',
    sub: 'Spectrophotometers, pH meters, water testing kits, HPLC systems, and analytical reagents.',
    cta1: { label: 'Lab Equipment', href: '/products?category=laboratory' },
    cta2: { label: 'Contact Us', href: '/contact' },
  },
  {
    image: `${U}/photo-1553413077-190dd305871c?w=1920&h=1080&fit=crop&q=85`,
    badge: 'East Africa Coverage',
    headline: 'Your Trusted Distribution\nPartner Across East Africa',
    sub: 'Serving Kenya, Uganda, Tanzania, Rwanda, Ethiopia, and South Sudan with over 1,000 product lines.',
    cta1: { label: 'About Orbitron', href: '/about' },
    cta2: { label: 'Contact Our Team', href: '/contact' },
  },
];

const STATS = [
  { value: 1000, suffix: '+', label: 'Products' },
  { value: 500,  suffix: '+', label: 'Active Clients' },
  { value: 50,   suffix: '+', label: 'Global Partners' },
  { value: 10,   suffix: '+', label: 'Industries Served' },
];

function AnimatedNumber({ target, suffix, started }: { target: number; suffix: string; started: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const step = 16;
    const steps = duration / step;
    let current = 0;
    const inc = target / steps;
    const timer = setInterval(() => {
      current += inc;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, step);
    return () => clearInterval(timer);
  }, [target, started]);
  return <>{count.toLocaleString()}{suffix}</>;
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length), []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 5500);
  }, [next]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const handlePrev = () => { prev(); resetTimer(); };
  const handleNext = () => { next(); resetTimer(); };
  const handleDot = (i: number) => { setCurrent(i); resetTimer(); };

  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden">

      {/* ── Slides ── */}
      <div className="relative flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          {SLIDES.map((slide, i) =>
            i === current ? (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                {/* Background Image */}
                <Image
                  src={slide.image}
                  alt={slide.badge}
                  fill
                  priority={i === 0}
                  className="object-cover object-center"
                  sizes="100vw"
                />

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-900/65 to-blue-900/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />

                {/* Content — bottom-left aligned */}
                <div className="absolute inset-0 flex flex-col justify-end pb-20 pt-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full left-0 right-0">
                  {/* Slide number */}
                  <div className="absolute top-24 right-8 lg:right-16 font-heading font-bold text-white/40 text-sm tracking-widest">
                    {String(i + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
                  </div>

                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    className="inline-flex items-center gap-2 bg-acc-500/20 border border-acc-500/40 text-acc-300 text-xs font-bold font-heading tracking-widest uppercase px-4 py-1.5 rounded-full w-fit mb-5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-acc-500 animate-pulse" />
                    {slide.badge}
                  </motion.div>

                  {/* Headline */}
                  <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.55 }}
                    className="font-heading font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-3xl mb-5 whitespace-pre-line"
                  >
                    {slide.headline}
                  </motion.h1>

                  {/* Subheading */}
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.38, duration: 0.5 }}
                    className="font-sans text-blue-100/85 text-base sm:text-lg max-w-xl leading-relaxed mb-8"
                  >
                    {slide.sub}
                  </motion.p>

                  {/* CTAs */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.45 }}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    <Link
                      href={slide.cta1.href}
                      className="btn-accent inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-acc-500/25 hover:shadow-acc-500/40 w-fit"
                    >
                      {slide.cta1.label} <ArrowRight size={16} />
                    </Link>
                    <Link
                      href={slide.cta2.href}
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all w-fit"
                    >
                      {slide.cta2.label}
                    </Link>
                  </motion.div>

                  {/* Dot indicators */}
                  <div className="flex items-center gap-2 mt-10">
                    {SLIDES.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleDot(idx)}
                        aria-label={`Slide ${idx + 1}`}
                        className={`transition-all duration-300 rounded-full ${
                          idx === current
                            ? 'w-8 h-2 bg-acc-500'
                            : 'w-2 h-2 bg-white/35 hover:bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Arrow buttons */}
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white backdrop-blur-sm transition-all z-10"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white backdrop-blur-sm transition-all z-10"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* ── Stats bar ── */}
      <div ref={statsRef} className="relative bg-blue-900 border-t border-blue-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map(({ value, suffix, label }) => (
              <div key={label} className="text-center">
                <div className="stat-number">
                  <AnimatedNumber target={value} suffix={suffix} started={statsVisible} />
                </div>
                <div className="text-blue-300/70 text-sm font-heading font-semibold mt-1 tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
