'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle, Phone, X } from 'lucide-react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {expanded && (
        <div className="flex flex-col gap-2 items-end animate-in slide-in-from-bottom-4 duration-200">
          <Link
            href="tel:+254742651823"
            className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2.5 rounded-full shadow-lg hover:bg-blue-800 transition-all text-sm font-semibold font-[family-name:var(--font-montserrat)]"
          >
            <Phone size={16} />
            Call Us
          </Link>
          <Link
            href="https://wa.me/254742651823?text=Hello%2C%20I%27m%20interested%20in%20your%20chemical%20products%20and%20solutions."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 whatsapp-green text-white px-4 py-2.5 rounded-full shadow-lg hover:opacity-90 transition-all text-sm font-semibold font-[family-name:var(--font-montserrat)]"
          >
            <MessageCircle size={16} />
            WhatsApp
          </Link>
          <Link
            href="/contact#quote"
            className="flex items-center gap-2 bg-acc-500 text-white px-4 py-2.5 rounded-full shadow-lg hover:bg-acc-600 transition-all text-sm font-semibold font-[family-name:var(--font-montserrat)]"
          >
            Get a Quote
          </Link>
        </div>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="w-14 h-14 rounded-full bg-acc-500 hover:bg-acc-600 text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110 hover:shadow-acc-500/40"
        aria-label="Contact options"
      >
        {expanded ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
