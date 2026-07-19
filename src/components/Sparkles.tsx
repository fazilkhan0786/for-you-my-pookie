import { useMemo } from 'react';

/**
 * ============================================================
 *  💖 For You, My Pookie
 *  🧑‍💻 Crafted with love by Mohammad Fazil Firojkhan Malek
 * ============================================================
 */

export default function Sparkles({ count = 40 }: { count?: number }) {
  const sparkles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 1 + Math.random() * 3,
      delay: Math.random() * 3,
      duration: 1.5 + Math.random() * 2.5,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="twinkle absolute rounded-full bg-white"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            boxShadow: '0 0 6px 1px rgba(255,255,255,0.9), 0 0 12px 2px rgba(255,200,220,0.6)',
          }}
        />
      ))}
    </div>
  );
}
