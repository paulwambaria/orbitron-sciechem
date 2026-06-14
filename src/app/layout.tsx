import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import Chatbot from "@/components/Chatbot";
import Preloader from "@/components/Preloader";
import { OrganizationSchema } from "@/components/SchemaOrg";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Orbitron Sciechem Limited | Industrial Chemicals & Laboratory Solutions Kenya",
    template: "%s | Orbitron Sciechem Limited",
  },
  description:
    "Africa's trusted importer and distributor of industrial chemicals, food ingredients, pharmaceutical raw materials, laboratory equipment and industrial solutions. Serving East Africa and beyond.",
  keywords: [
    "industrial chemicals Kenya",
    "food ingredients supplier Kenya",
    "laboratory equipment Kenya",
    "pharmaceutical raw materials Kenya",
    "water treatment chemicals Kenya",
    "chemical distributor East Africa",
    "Orbitron Sciechem",
    "chemical solutions Nairobi",
    "industrial solutions East Africa",
  ],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://orbitronsciechem.com",
    siteName: "Orbitron Sciechem Limited",
    title: "Orbitron Sciechem Limited | Africa's Trusted Chemical & Lab Solutions Partner",
    description:
      "Supplying world-class industrial chemicals, food ingredients, laboratory equipment, pharmaceutical raw materials and technical solutions across East Africa and beyond.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbitron Sciechem Limited | Industrial Chemicals & Lab Solutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://orbitronsciechem.com" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} h-full antialiased`}>
      <head>
        <OrganizationSchema />
      </head>
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <Preloader />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
        <Chatbot />
      </body>
    </html>
  );
}
