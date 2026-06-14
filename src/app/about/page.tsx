import type { Metadata } from 'next';
import { CheckCircle2, Globe, Award, Leaf, Users, Target, Eye } from 'lucide-react';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'About Orbitron Sciechem Limited | Our Story, Mission & Vision',
  description:
    'Learn about Orbitron Sciechem Limited — Africa\'s trusted chemical and laboratory solutions partner. Our mission, vision, certifications, and commitment to sustainability.',
};

const CERTIFICATIONS = [
  'Kenya Bureau of Standards (KEBS) Compliant',
  'ISO Quality Management Standards',
  'GMP (Good Manufacturing Practice) Certified Products',
  'Food Safety HACCP Compliance',
  'Environmental Health & Safety (EHS) Standards',
  'International Chemical Safety Cards (ICSC) Compliant',
];

const TEAM_VALUES = [
  { Icon: Target,   title: 'Purpose-Driven',    desc: 'Every decision is guided by our mission to empower industries across Africa.' },
  { Icon: Award,    title: 'Excellence',         desc: 'We uphold the highest standards in product quality and service delivery.' },
  { Icon: Users,    title: 'Partnership',        desc: 'We build long-term relationships with clients, suppliers, and communities.' },
  { Icon: Globe,    title: 'Global Thinking',    desc: 'We source globally and act locally — bridging international quality with regional needs.' },
  { Icon: Leaf,     title: 'Sustainability',     desc: 'We are committed to responsible sourcing and environmental stewardship.' },
  { Icon: CheckCircle2, title: 'Integrity',      desc: 'We operate with full transparency, honesty, and professional accountability.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-grad py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="tag-pill tag-orange">About Orbitron Sciechem</span>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl lg:text-6xl mt-5 mb-6 leading-tight">
            Africa&apos;s Most Trusted <span className="text-acc-500">Chemical & Lab Solutions</span> Hub
          </h1>
          <p className="font-sans text-blue-200/80 text-xl leading-relaxed">
            A multinational importer and distributor with a singular mission: to deliver
            reliable, affordable, and globally benchmarked chemicals and laboratory solutions
            that power Africa&apos;s industrial growth.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="tag-pill">Our Story</span>
              <h2 className="font-heading font-black text-blue-800 text-3xl sm:text-4xl mt-4 mb-6">
                Built on Trust, Powered by Expertise
              </h2>
              <div className="space-y-4 font-sans text-neutral-600 leading-relaxed">
                <p>
                  Orbitron Sciechem Limited was founded with a clear vision: to bridge the gap
                  between world-class chemical and laboratory solutions and the rapidly growing
                  industries of East Africa. From our headquarters in Nairobi, Kenya, we serve
                  clients across the region and beyond.
                </p>
                <p>
                  As both an importer and distributor, we eliminate the complexities of global
                  procurement — providing local access to internationally certified products with
                  the technical support that industry demands. Our team of specialists brings
                  deep domain knowledge across industrial chemicals, food science, pharmaceutical
                  sciences, and laboratory instrumentation.
                </p>
                <p>
                  Today, we supply 1,000+ product lines across 6 business divisions to 500+
                  clients in over 10 industry sectors, making us one of East Africa&apos;s most
                  comprehensive chemical and laboratory solutions providers.
                </p>
              </div>
            </div>

            <div id="mission" className="space-y-6">
              {/* Vision */}
              <div className="bg-blue-50 rounded-2xl p-7 border border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                  <Eye size={22} className="text-blue-700" />
                  <h3 className="font-heading font-bold text-blue-800 text-lg">Our Vision</h3>
                </div>
                <p className="font-sans text-neutral-600 leading-relaxed">
                  To be Africa&apos;s most trusted and expansive hub for chemical and laboratory
                  solutions, empowering industries through sustainable partnerships and
                  quality-assured products.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-acc-50 rounded-2xl p-7 border border-acc-200">
                <div className="flex items-center gap-3 mb-3">
                  <Target size={22} className="text-acc-600" />
                  <h3 className="font-heading font-bold text-blue-800 text-lg">Our Mission</h3>
                </div>
                <p className="font-sans text-neutral-600 leading-relaxed">
                  To deliver reliable, affordable, and globally benchmarked chemicals and
                  laboratory solutions that support industrial growth, food security, healthcare,
                  and scientific innovation across Africa.
                </p>
              </div>

              {/* Core focus */}
              <div className="bg-white rounded-2xl p-7 border border-neutral-100 shadow-sm">
                <h3 className="font-heading font-bold text-blue-800 text-base mb-4">Key Metrics</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: '1,000+', label: 'Products' },
                    { value: '500+', label: 'Clients' },
                    { value: '50+', label: 'Partners' },
                  ].map(({ value, label }) => (
                    <div key={label} className="text-center">
                      <div className="font-heading font-black text-acc-500 text-2xl">{value}</div>
                      <div className="font-sans text-neutral-500 text-xs mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="tag-pill">Our Values</span>
            <h2 className="font-heading font-black text-blue-800 text-3xl sm:text-4xl mt-4 mb-4">The Principles That Guide Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_VALUES.map(({ Icon, title, desc }) => (
              <div key={title} className="card p-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-acc-500" />
                </div>
                <h3 className="font-heading font-bold text-blue-800 text-base mb-2">{title}</h3>
                <p className="font-sans text-neutral-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="tag-pill">Quality & Compliance</span>
            <h2 className="font-heading font-black text-blue-800 text-3xl sm:text-4xl mt-4 mb-4">Certifications & Standards</h2>
            <p className="font-sans text-neutral-500 max-w-2xl mx-auto">
              Every product we supply meets rigorous international quality and safety standards.
              Our commitment to compliance is unwavering.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert} className="flex items-center gap-3 bg-blue-50 rounded-xl px-5 py-4 border border-blue-100">
                <CheckCircle2 size={18} className="text-acc-500 shrink-0" />
                <span className="font-sans text-blue-800 text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
