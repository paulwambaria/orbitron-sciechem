import type { Metadata } from 'next';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact Orbitron Sciechem | Get a Quote · Nairobi, Kenya',
  description:
    'Contact Orbitron Sciechem Limited for product inquiries, quotes, and technical support. Head Office: Hillpark Business Park, Nairobi. Phone: +254 742 651 823.',
};

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="section-grad py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="tag-pill tag-orange">Contact Us</span>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl mt-5 mb-5">
            Let&apos;s Talk <span className="text-acc-500">Business</span>
          </h1>
          <p className="font-sans text-blue-200/80 text-xl leading-relaxed">
            Have a product inquiry, need a quote, or want to discuss a partnership?
            Our team of specialists is ready to assist you.
          </p>
        </div>
      </section>

      <Contact />
    </>
  );
}
