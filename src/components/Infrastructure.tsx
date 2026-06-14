'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Warehouse, Globe, Truck, ShieldCheck, Headphones, Package,
  CheckCircle2, ArrowRight,
} from 'lucide-react';

const STATS = [
  { value: 1000, suffix: '+', label: 'Products Stocked' },
  { value: 500,  suffix: '+', label: 'Active Clients' },
  { value: 50,   suffix: '+', label: 'Global Partners' },
  { value: 10,   suffix: '+', label: 'Industries Served' },
  { value: 6,    suffix: '',  label: 'Countries Covered' },
  { value: 24,   suffix: '/7', label: 'Technical Support' },
];

const TABS = [
  {
    id: 'warehousing',
    Icon: Warehouse,
    label: 'Strategic Warehousing',
    tagline: 'Safe Storage. Ready Inventory.',
    description:
      'Our Nairobi-based warehousing facility at Hillpark Business Park is purpose-built for the safe handling and storage of industrial chemicals, food-grade ingredients, pharmaceutical raw materials, and laboratory equipment. Temperature-controlled zones, segregated chemical storage bays, and full KEBS compliance ensure product integrity from receipt to dispatch.',
    capabilities: [
      'Climate-controlled storage zones for sensitive products',
      'Segregated chemical storage with hazmat compliance',
      'Real-time inventory management system',
      'FIFO (First In, First Out) stock rotation',
      'Dedicated pharmaceutical-grade storage area',
      'Buffer stock maintained for fast-moving products',
      'Security surveillance and access control 24/7',
    ],
    highlight: { value: '1,000+', label: 'Products in Active Stock' },
  },
  {
    id: 'sourcing',
    Icon: Globe,
    label: 'Global Sourcing Network',
    tagline: 'World-Class Manufacturers. Local Delivery.',
    description:
      'Orbitron Sciechem maintains strategic partnerships with over 50 certified manufacturers across Europe, North America, Asia, and the Middle East. Our global sourcing network ensures access to the highest-quality chemicals and laboratory solutions at competitive pricing — without compromising on certification standards, traceability, or supply reliability.',
    capabilities: [
      'Direct partnerships with 50+ global manufacturers',
      'Sourcing from Germany, China, India, USA, and Netherlands',
      'All suppliers hold ISO, GMP, and REACH certifications',
      'Multi-supplier strategy ensures zero stock-out risk',
      'Annual supplier audits and quality reviews',
      'Flexible import terms — FCL, LCL, and airfreight',
      'Competitive pricing through volume-based contracts',
    ],
    highlight: { value: '50+', label: 'Certified Global Manufacturing Partners' },
  },
  {
    id: 'quality',
    Icon: ShieldCheck,
    label: 'Quality Assurance',
    tagline: 'Every Batch. Every Time.',
    description:
      'Our quality assurance framework covers the entire supply chain — from supplier qualification and incoming inspection to final delivery verification. Every shipment is accompanied by a Certificate of Analysis (COA), Material Safety Data Sheet (MSDS), and Certificate of Origin (COO). We ensure full compliance with KEBS, ISO, GMP, and international pharmacopoeial standards.',
    capabilities: [
      'Incoming goods inspection on every shipment',
      'Certificate of Analysis (COA) provided for all products',
      'MSDS and SDS documentation for every chemical',
      'Certificate of Origin (COO) available on request',
      'Batch traceability from manufacturer to end-user',
      'KEBS, ISO, GMP, USP, BP, and EP compliance verified',
      'Third-party testing available for critical applications',
    ],
    highlight: { value: '100%', label: 'Products Supplied with Full Documentation' },
  },
  {
    id: 'logistics',
    Icon: Truck,
    label: 'Logistics & Distribution',
    tagline: 'Efficient Delivery. Across East Africa.',
    description:
      'Our logistics infrastructure ensures reliable, on-time delivery to clients across East Africa. From same-day delivery within Nairobi to multi-country export shipments, we manage every aspect of freight, customs clearance, and last-mile delivery. Our fleet and logistics partnerships support both small orders and full container loads.',
    capabilities: [
      'Same-day delivery within Nairobi and Environs',
      '2–3 day delivery to all major Kenya towns',
      'Cross-border supply to Uganda, Tanzania, Rwanda, Ethiopia',
      'Own fleet vehicles for local urban delivery',
      'Freight forwarding partnerships for international orders',
      'Customs clearance and export documentation support',
      'Cold-chain logistics for temperature-sensitive products',
    ],
    highlight: { value: '6', label: 'East African Countries in Distribution Network' },
  },
  {
    id: 'support',
    Icon: Headphones,
    label: 'Technical Support',
    tagline: 'Expert Guidance. Always Available.',
    description:
      'Our technical team comprises industry specialists in industrial chemistry, food science, pharmaceutical sciences, and laboratory instrumentation. We provide application support, product selection guidance, troubleshooting assistance, and on-site technical services. From initial product inquiry to long-term operational support, our experts are a true extension of your team.',
    capabilities: [
      'Dedicated technical specialists per industry segment',
      'Product selection and application guidance',
      'Laboratory equipment installation and calibration',
      'On-site technical visits and demonstrations',
      'Formulation and process consulting',
      '24/7 WhatsApp and phone support for urgent queries',
      'Regular client training and product seminars',
    ],
    highlight: { value: '24/7', label: 'Technical Support Availability' },
  },
  {
    id: 'supply-chain',
    Icon: Package,
    label: 'Supply Chain Management',
    tagline: 'End-to-End Procurement. Simplified.',
    description:
      'We offer comprehensive supply chain management services that take the complexity out of chemical procurement. From needs assessment and supplier negotiation to order tracking and delivery confirmation, Orbitron Sciechem acts as your single-source chemical procurement partner — reducing administrative burden, supplier risk, and total cost of ownership.',
    capabilities: [
      'Single-source procurement for multiple product categories',
      'Vendor-managed inventory (VMI) programs',
      'Procurement planning and demand forecasting support',
      'Long-term supply agreements and framework contracts',
      'Order tracking and shipment status updates',
      'ERP integration for large institutional clients',
      'Annual procurement reviews and cost optimization',
    ],
    highlight: { value: '500+', label: 'Clients on Long-Term Supply Agreements' },
  },
];

function AnimatedCount({ target, suffix, started }: { target: number; suffix: string; started: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    const duration = 2000;
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
  return <>{count}{suffix}</>;
}

export default function Infrastructure() {
  const [activeTab, setActiveTab]   = useState('warehousing');
  const [started, setStarted]       = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const activeData = TABS.find((t) => t.id === activeTab)!;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.2 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-navy py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tag-pill tag-orange"
          >
            Infrastructure & Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-5xl mt-4 mb-3"
          >
            The Building Blocks of{' '}
            <span className="text-acc-500">Reliable Supply</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-blue-200/70 max-w-2xl mx-auto text-lg"
          >
            World-class warehousing, global sourcing, logistics, and technical capabilities
            that underpin every product we deliver across East Africa.
          </motion.p>
        </div>

        {/* Stats row */}
        <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-14">
          {STATS.map(({ value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center bg-white/5 border border-white/10 rounded-xl py-5 px-2"
            >
              <div className="font-heading font-black text-3xl lg:text-4xl text-acc-500">
                <AnimatedCount target={value} suffix={suffix} started={started} />
              </div>
              <div className="font-heading font-semibold text-blue-200/60 text-xs mt-1 tracking-wide">{label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tabbed capabilities — PCP India style */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">

          {/* Tab navigation */}
          <div className="flex overflow-x-auto border-b border-white/10 scrollbar-none">
            {TABS.map(({ id, Icon, label }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-5 py-4 whitespace-nowrap text-sm font-heading font-semibold transition-all border-b-2 shrink-0 ${
                  activeTab === id
                    ? 'border-acc-500 text-acc-400 bg-white/5'
                    : 'border-transparent text-blue-200/55 hover:text-blue-200/90 hover:bg-white/3'
                }`}
              >
                <Icon size={15} />
                {label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="p-7 lg:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
              >
                {/* Left: Content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-acc-500/20 flex items-center justify-center">
                      <activeData.Icon size={20} className="text-acc-400" />
                    </div>
                    <div>
                      <div className="font-sans text-acc-400 text-xs font-semibold uppercase tracking-wider">{activeData.tagline}</div>
                    </div>
                  </div>

                  <h3 className="font-heading font-black text-white text-2xl lg:text-3xl mb-4">
                    {activeData.label}
                  </h3>
                  <p className="font-sans text-blue-200/70 leading-relaxed mb-7">
                    {activeData.description}
                  </p>

                  {/* Highlight stat */}
                  <div className="inline-flex items-center gap-4 bg-acc-500/10 border border-acc-500/30 rounded-xl px-5 py-4">
                    <div className="font-heading font-black text-acc-400 text-3xl">{activeData.highlight.value}</div>
                    <div className="font-sans text-blue-200/70 text-sm leading-snug">{activeData.highlight.label}</div>
                  </div>
                </div>

                {/* Right: Capabilities list */}
                <div className="bg-white/4 border border-white/8 rounded-xl p-6">
                  <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-5 h-0.5 bg-acc-500 inline-block" />
                    Key Capabilities
                  </h4>
                  <ul className="space-y-3">
                    {activeData.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-3">
                        <CheckCircle2 size={15} className="text-acc-500 shrink-0 mt-0.5" />
                        <span className="font-sans text-blue-200/75 text-sm leading-relaxed">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <a
            href="/contact#quote"
            className="inline-flex items-center gap-2 btn-accent px-8 py-4 rounded-full text-sm transition-all"
          >
            Discuss Your Supply Requirements <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
