import React from 'react'

const Spinner = () => {
  return (
    <div className="flex justify-center items-center py-8" role="status" aria-live="polite">
      <span className="sr-only" style={{
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0 0 0 0)",
        whiteSpace: "nowrap",
        border: 0
      }}>Loading recipes…</span>

      <svg
        width="100"
        height="64"
        viewBox="0 0 100 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Pan base */}
        <ellipse cx="42" cy="42" rx="34" ry="14" fill="#111827" opacity="0.95" />
        <ellipse cx="42" cy="38" rx="28" ry="10" fill="#1f2937" />

        {/* Pan rim */}
        <path d="M12 36 C12 30, 72 30, 72 36" fill="none" stroke="#374151" strokeWidth="3" strokeLinecap="round" />

        {/* Handle */}
        <rect x="72" y="34" width="26" height="8" rx="3" fill="#111827" />
        <rect x="86" y="34" width="12" height="8" rx="2" fill="#374151" />

        {/* Contents (simmer/glow) */}
        <g className="pan-contents">
          <circle cx="36" cy="34" r="6" fill="#f59e0b" opacity="0.95" />
          <circle cx="46" cy="36" r="4" fill="#fbbf24" opacity="0.95" />
        </g>

        {/* Bubbles (floating and fading) */}
        <g className="bubbles" fill="#fff" opacity="0.9">
          <circle className="b1" cx="30" cy="28" r="2.4" />
          <circle className="b2" cx="38" cy="26" r="1.8" />
          <circle className="b3" cx="46" cy="24" r="2.2" />
        </g>

        {/* Steam (three curved lines) */}
        <g className="steam" stroke="#e5e7eb" strokeWidth="1.6" strokeLinecap="round" fill="none">
          <path className="s1" d="M32 14 C30 10, 34 8, 32 4" />
          <path className="s2" d="M40 16 C38 12, 42 10, 40 6" />
          <path className="s3" d="M48 14 C46 10, 50 8, 48 4" />
        </g>
      </svg>

      <style>{`
        /* subtle pan "simmer" scale to feel alive */
        svg { transform-origin: 50% 50%; animation: pan-breathe 1800ms ease-in-out infinite; }
        @keyframes pan-breathe {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-1.5px) scale(1.005); }
          100% { transform: translateY(0) scale(1); }
        }

        /* steam floats up and fades */
        .steam .s1 { animation: steam 1800ms ease-in-out infinite; animation-delay: 0ms; }
        .steam .s2 { animation: steam 1800ms ease-in-out infinite; animation-delay: 200ms; }
        .steam .s3 { animation: steam 1800ms ease-in-out infinite; animation-delay: 400ms; }
        @keyframes steam {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 0.9; }
          55% { transform: translateY(-10px) scale(1.05); opacity: 0.6; }
          100% { transform: translateY(-22px) scale(1.12); opacity: 0; }
        }

        /* bubbles: tiny upward movement with fade */
/* staggered delays for continuous motion */
        .bubbles .b1 { animation: bubble 1200ms ease-in-out infinite; animation-delay: 0ms; transform-origin: center; }
        .bubbles .b2 { animation: bubble 1200ms ease-in-out infinite; animation-delay: 180ms; transform-origin: center; }
        .bubbles .b3 { animation: bubble 1200ms ease-in-out infinite; animation-delay: 340ms; transform-origin: center; }
        @keyframes bubble {
          0% { transform: translateY(0) scale(1); opacity: 0.95; }
          40% { opacity: 0.9; transform: translateY(-8px) scale(1.08); }
          100% { transform: translateY(-18px) scale(1.15); opacity: 0; }
        }

        /* simple fallback sr-only (if not using tailwind util) */
        .sr-only { position: absolute !important; width: 1px !important; height: 1px !important; padding: 0 !important; margin: -1px !important; overflow: hidden !important; clip: rect(0 0 0 0) !important; white-space: nowrap !important; border: 0 !important; }
      `}</style>
    </div>
  )
}

export default Spinner
