import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import CompanyIntro from '@/components/CompanyIntro';
import Industries from '@/components/Industries';
import Divisions from '@/components/Divisions';
import Applications from '@/components/Applications';
import Infrastructure from '@/components/Infrastructure';
import WhyChoose from '@/components/WhyChoose';
import Process from '@/components/Process';
import Sustainability from '@/components/Sustainability';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Orbitron Sciechem Limited | Industrial Chemicals, Lab Solutions & Food Ingredients Kenya',
  description:
    "East Africa's trusted importer and distributor of industrial chemicals, food ingredients, pharmaceutical raw materials, laboratory equipment. Serving Kenya, Uganda, Tanzania & beyond.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <Industries />
      <Divisions />
      <Applications />
      <Infrastructure />
      <WhyChoose />
      <Process />
      <Sustainability />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}
