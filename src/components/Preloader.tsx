'use client';
import { useState, useEffect } from 'react';

const CHEMICALS = [
  'H₂O', 'NaOH', 'HCl', 'H₂SO₄', 'NaCl', 'NH₃',
  'KNO₃', 'C₆H₁₂O₆', 'Fe₂O₃', 'NaHCO₃', 'HNO₃',
  'CaCO₃', 'Mg(OH)₂', 'K₂SO₄', 'C₂H₅OH',
];

export default function Preloader() {
  const [phase, setPhase] = useState<'in' | 'hold' | 'out'>('in');
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 600);
    const t2 = setTimeout(() => setPhase('out'),  2900);
    const t3 = setTimeout(() => setGone(true),     3550);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (gone) return null;

  return (
    <>
      <style>{`
        @keyframes orb-cw  { to { transform: rotate(360deg);  } }
        @keyframes orb-ccw { to { transform: rotate(-360deg); } }

        @keyframes float-up {
          0%   { transform: translateY(0)     scale(0.85); opacity: 0;   }
          15%  { opacity: 0.55; }
          80%  { opacity: 0.3; }
          100% { transform: translateY(-110px) scale(1.1);  opacity: 0;   }
        }

        @keyframes logo-pop {
          0%   { transform: scale(0.4); opacity: 0; filter: brightness(2) blur(4px); }
          60%  { transform: scale(1.07); opacity: 1; filter: brightness(1) blur(0); }
          100% { transform: scale(1);    opacity: 1; filter: brightness(1) blur(0); }
        }

        @keyframes fade-up {
          from { transform: translateY(14px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }

        @keyframes bar-fill {
          from { width: 0%;    opacity: 0.4; }
          to   { width: 100%;  opacity: 1;   }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 10px 2px rgba(245,130,32,0.6); }
          50%       { box-shadow: 0 0 22px 6px rgba(245,130,32,1);   }
        }

        .preloader-root {
          transition: opacity 650ms cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>

      <div
        className="preloader-root fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden select-none"
        style={{
          background: 'linear-gradient(145deg, #00112E 0%, #002B6E 55%, #001A4A 100%)',
          opacity: phase === 'out' ? 0 : 1,
        }}
      >
        {/* ── Subtle grid ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(74,144,217,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,217,0.12) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />

        {/* ── Floating chemical formulas ── */}
        {CHEMICALS.map((chem, i) => (
          <span
            key={chem}
            className="absolute pointer-events-none font-mono font-bold text-blue-300/40"
            style={{
              left:   `${(i * 6.5 + 3) % 88}%`,
              bottom: `${(i * 9  + 5) % 45}%`,
              fontSize: `${11 + (i % 4) * 3}px`,
              animation: `float-up ${2.4 + (i % 4) * 0.4}s ease-in-out ${i * 0.18}s infinite`,
            }}
          >
            {chem}
          </span>
        ))}

        {/* ── Rings + Logo ── */}
        <div className="relative flex items-center justify-center" style={{ width: 260, height: 260 }}>

          {/* Outer ring — clockwise, orange accent */}
          <div
            className="absolute rounded-full"
            style={{
              inset: 0,
              border: '2px solid transparent',
              borderTopColor:   'rgba(245,130,32,0.9)',
              borderRightColor: 'rgba(245,130,32,0.25)',
              animation: 'orb-cw 1.8s linear infinite',
            }}
          />

          {/* Outer satellite dot */}
          <div
            className="absolute rounded-full"
            style={{
              width: 260, height: 260,
              animation: 'orb-cw 1.8s linear infinite',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '50%', right: -5,
                transform: 'translateY(-50%)',
                width: 10, height: 10,
                borderRadius: '50%',
                background: '#F58220',
                animation: 'pulse-glow 1.8s ease-in-out infinite',
              }}
            />
          </div>

          {/* Inner ring — counter-clockwise, blue */}
          <div
            className="absolute rounded-full"
            style={{
              inset: 24,
              border: '1.5px solid transparent',
              borderTopColor:  'rgba(107,173,236,0.7)',
              borderLeftColor: 'rgba(107,173,236,0.2)',
              animation: 'orb-ccw 1.2s linear infinite',
            }}
          />

          {/* Logo */}
          <img
            src="/logo.png"
            alt="Orbitron Sciechem"
            width={150}
            height={150}
            style={{
              position: 'relative', zIndex: 10,
              animation: 'logo-pop 0.85s cubic-bezier(0.34,1.56,0.64,1) 0.15s both',
              filter: 'drop-shadow(0 0 24px rgba(43,117,204,0.55))',
            }}
          />
        </div>

        {/* ── Company name ── */}
        <div
          className="mt-7 text-center"
          style={{ animation: 'fade-up 0.7s ease 0.65s both' }}
        >
          <p className="font-heading font-black text-white tracking-[0.28em] text-xl">
            ORBITRON SCIECHEM
          </p>
          <p className="font-sans text-blue-300/60 tracking-[0.4em] text-[0.6rem] mt-1.5 uppercase">
            Industrial Chemicals &amp; Lab Solutions
          </p>
        </div>

        {/* ── Progress bar ── */}
        <div
          className="mt-7 rounded-full overflow-hidden"
          style={{
            width: 180, height: 3,
            background: 'rgba(255,255,255,0.08)',
            animation: 'fade-up 0.5s ease 0.9s both',
          }}
        >
          <div
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #2B75CC, #F58220, #2B75CC)',
              borderRadius: 9999,
              animation: 'bar-fill 2.55s cubic-bezier(0.4,0,0.2,1) 0.35s both',
            }}
          />
        </div>

        {/* ── East Africa tag ── */}
        <p
          className="mt-4 font-sans text-blue-400/40 text-[0.6rem] tracking-widest uppercase"
          style={{ animation: 'fade-up 0.5s ease 1.1s both' }}
        >
          East Africa&apos;s #1 Chemical Solutions Provider
        </p>
      </div>
    </>
  );
}
