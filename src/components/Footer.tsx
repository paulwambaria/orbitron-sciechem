import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

function OrbLogo() {
  return (
    <Image
      src="/logo.svg"
      alt="Orbitron Sciechem Limited"
      width={62}
      height={62}
      className="object-contain"
    />
  );
}

const PRODUCT_LINKS = [
  { label: 'Industrial Chemicals', href: '/products?category=industrial' },
  { label: 'Food Ingredients', href: '/products?category=food' },
  { label: 'Pharmaceutical Solutions', href: '/products?category=pharma' },
  { label: 'Laboratory Solutions', href: '/products?category=laboratory' },
  { label: 'Petroleum & Solvents', href: '/products?category=petroleum' },
  { label: 'Food & Beverage Inputs', href: '/products?category=food-inputs' },
];

const INDUSTRY_LINKS = [
  { label: 'Manufacturing', href: '/industries/manufacturing' },
  { label: 'Food & Beverage', href: '/industries/food-beverage' },
  { label: 'Pharmaceuticals', href: '/industries/pharmaceuticals' },
  { label: 'Water Treatment', href: '/industries/water-treatment' },
  { label: 'Petroleum & Energy', href: '/industries/petroleum-energy' },
  { label: 'Research Laboratories', href: '/industries/laboratories' },
  { label: 'Agriculture', href: '/industries/agriculture' },
];

const COMPANY_LINKS = [
  { label: 'About Orbitron', href: '/about' },
  { label: 'Our Mission & Vision', href: '/about#mission' },
  { label: 'Certifications', href: '/about#certifications' },
  { label: 'Sustainability', href: '/about#sustainability' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Get a Quote', href: '/contact#quote' },
];

const SEO_LINKS = [
  { label: 'Industrial Chemicals Kenya', href: '/industrial-chemicals-kenya' },
  { label: 'Food Ingredients Supplier Kenya', href: '/food-ingredients-supplier-kenya' },
  { label: 'Lab Equipment Supplier Kenya', href: '/laboratory-equipment-supplier-kenya' },
  { label: 'Pharma Raw Materials Kenya', href: '/pharmaceutical-raw-materials-kenya' },
  { label: 'Water Treatment Chemicals', href: '/water-treatment-chemicals-kenya' },
  { label: 'Chemical Distributor East Africa', href: '/chemical-distributor-east-africa' },
];

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      {/* ── Main footer ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <OrbLogo />
              <div className="leading-none">
                <span className="block font-heading font-black text-[0.95rem] tracking-widest text-white">ORBITRON</span>
                <span className="block font-heading font-semibold text-[0.57rem] tracking-[0.22em] text-acc-400">SCIECHEM LIMITED</span>
              </div>
            </Link>
            <p className="font-sans text-blue-200/75 text-sm leading-relaxed mb-5 max-w-xs">
              Africa&apos;s trusted importer and distributor of industrial chemicals, food ingredients,
              pharmaceutical raw materials, laboratory equipment and industrial solutions.
            </p>

            {/* Contact */}
            <div className="space-y-3 text-sm font-sans">
              <div className="flex items-start gap-2.5 text-blue-200/80">
                <MapPin size={15} className="text-acc-500 mt-0.5 shrink-0" />
                <span>Hillpark Business Park, Go-Down 4,<br />Nairobi, Kenya</span>
              </div>
              <a href="tel:+254742651823" className="flex items-center gap-2.5 text-blue-200/80 hover:text-acc-400 transition-colors">
                <Phone size={15} className="text-acc-500 shrink-0" />
                +254 742 651 823
              </a>
              <a href="mailto:info@orbitronsciechem.com" className="flex items-center gap-2.5 text-blue-200/80 hover:text-acc-400 transition-colors">
                <Mail size={15} className="text-acc-500 shrink-0" />
                info@orbitronsciechem.com
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {[
                {
                  href: '#', label: 'LinkedIn',
                  svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
                },
                {
                  href: '#', label: 'Twitter/X',
                  svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
                },
                {
                  href: '#', label: 'Facebook',
                  svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
                },
              ].map(({ href, label, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-blue-800 hover:bg-acc-500 flex items-center justify-center transition-colors text-white"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2">
              {PRODUCT_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="font-sans text-blue-200/70 hover:text-acc-400 text-sm transition-colors block">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">Industries</h4>
            <ul className="space-y-2">
              {INDUSTRY_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="font-sans text-blue-200/70 hover:text-acc-400 text-sm transition-colors block">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2 mb-6">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="font-sans text-blue-200/70 hover:text-acc-400 text-sm transition-colors block">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/254742651823?text=Hello%2C%20I%27m%20interested%20in%20Orbitron%20Sciechem%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white text-sm font-semibold font-heading px-4 py-2.5 rounded-full transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L0 24l6.335-1.51A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.873 0-3.625-.487-5.146-1.339l-.369-.22-3.763.898.944-3.674-.244-.377A9.961 9.961 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* SEO links bar */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
            {SEO_LINKS.map((l) => (
              <Link key={l.label} href={l.href} className="font-sans text-blue-300/50 hover:text-blue-300/80 text-xs transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-800 bg-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-sans text-blue-300/50 text-xs">
            © {new Date().getFullYear()} Orbitron Sciechem Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/privacy-policy" className="font-sans text-blue-300/50 hover:text-blue-300/80 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="font-sans text-blue-300/50 hover:text-blue-300/80 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
