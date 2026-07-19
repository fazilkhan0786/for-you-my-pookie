import { useMemo } from 'react';

/**
 * ============================================================
 *  💖 For You, My Pookie
 *  🧑‍💻 Crafted with love by Mohammad Fazil Firojkhan Malek
 * ============================================================
 */

export default function FloatingHearts({
  count = 14,
  dark = false,
}: {
  count?: number;
  dark?: boolean;
}) {
  const hearts = useMemo(() => {
    const emojis = ['💗', '💕', '🌸', '✨', '🌷', '💘'];
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      emoji: emojis[i % emojis.length],
      left: ((i * 37 + 13) % 97) + 1.5,
      delay: (i * 1.1) % 14,
      duration: 16 + (i % 7) * 2.2,
      size: 12 + (i % 5) * 4,
      opacity: 0.35 + (i % 4) * 0.1,
    }));
  }, [count]);

  if (count <= 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {hearts.map((h) => (
        <span
          key={h.id}
          className="heart-float"
          style={{
            left: `${h.left}%`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            fontSize: `${h.size}px`,
            opacity: h.opacity,
            filter: dark
              ? 'drop-shadow(0 0 6px rgba(255,182,209,0.7))'
              : 'drop-shadow(0 2px 4px rgba(214,58,111,0.18))',
          }}
        >
          {h.emoji}
        </span>
      ))}
    </div>
  );
}
