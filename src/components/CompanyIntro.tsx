'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, Globe, Award, Users } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const HIGHLIGHTS = [
  { Icon: Globe,        text: 'Global sourcing from 50+ leading manufacturers across Europe, Asia, and North America' },
  { Icon: Award,        text: 'KEBS, ISO, and GMP certified products across all six divisions' },
  { Icon: CheckCircle2, text: 'Consistent inventory with reliable delivery across East Africa' },
  { Icon: Users,        text: 'Dedicated technical specialists for every industry segment we serve' },
];

export default function CompanyIntro() {
  return (
    <section className="section-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="tag-pill">Who We Are</span>
            <h2 className="font-heading font-black text-blue-800 text-3xl sm:text-4xl lg:text-5xl leading-tight mt-4 mb-6">
              Delivering{' '}
              <span className="text-orange-gradient">Excellence</span>{' '}
              Across Africa
            </h2>
            <p className="font-sans text-neutral-600 text-lg leading-relaxed mb-5">
              Orbitron Sciechem Limited is a multinational importer and distributor specializing in
              industrial chemicals, food processing ingredients, laboratory equipment, pharmaceutical
              raw materials, and industrial solutions.
            </p>
            <p className="font-sans text-neutral-500 leading-relaxed mb-8">
              From manufacturing plants and food industries to research laboratories and pharmaceutical
              companies, we provide quality-assured products backed by deep technical expertise and
              global sourcing capabilities. Our mission is to be Africa&apos;s most trusted hub for
              chemical and laboratory solutions — empowering industries through sustainable partnerships.
            </p>

            <div className="space-y-3 mb-8">
              {HIGHLIGHTS.map(({ Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={14} className="text-acc-500" />
                  </div>
                  <p className="font-sans text-neutral-600 text-sm">{text}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm transition-all"
            >
              Learn Our Story <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Right: photo + stat overlays */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="relative"
          >
            {/* Main photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop&q=85"
                alt="Orbitron Sciechem chemical warehouse and distribution facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Dark overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent" />

              {/* Stats overlay inside image */}
              <div className="absolute bottom-0 left-0 right-0 p-6 grid grid-cols-2 gap-4">
                {[
                  { value: '1,000+', label: 'Product Lines' },
                  { value: '500+',   label: 'Active Clients' },
                  { value: '50+',    label: 'Global Partners' },
                  { value: '10+',    label: 'Industries' },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center bg-white/10 backdrop-blur-sm rounded-xl px-3 py-2.5 border border-white/15">
                    <div className="font-heading font-black text-acc-400 text-xl">{value}</div>
                    <div className="font-sans text-blue-100/70 text-xs mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl px-5 py-4 border border-neutral-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-acc-50 flex items-center justify-center">
                  <CheckCircle2 size={20} className="text-acc-500" />
                </div>
                <div>
                  <div className="font-heading font-bold text-blue-800 text-sm">Quality Assured</div>
                  <div className="font-sans text-neutral-400 text-xs">KEBS · ISO · GMP Compliant</div>
                </div>
              </div>
            </div>

            {/* East Africa coverage badge */}
            <div className="absolute -top-5 -right-5 bg-blue-700 rounded-xl shadow-xl px-5 py-4 text-white">
              <div className="font-heading font-bold text-sm">East Africa Coverage</div>
              <div className="font-sans text-blue-200 text-xs mt-0.5">KE · UG · TZ · RW · ET · SS</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
