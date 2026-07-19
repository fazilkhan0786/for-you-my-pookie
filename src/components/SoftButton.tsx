import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * ============================================================
 *  💖 For You, My Pookie
 *  🧑‍💻 Crafted with love by Mohammad Fazil Firojkhan Malek
 * ============================================================
 */

interface Props {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'solid' | 'ghost' | 'light';
  className?: string;
  delay?: number;
}

export default function SoftButton({
  children,
  onClick,
  variant = 'solid',
  className = '',
  delay = 0,
}: Props) {
  const base =
    'relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-[15px] font-medium tracking-wide transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300';

  const styles =
    variant === 'solid'
      ? 'bg-gradient-to-r from-rose-400 via-rose-500 to-pink-500 text-white shadow-[0_10px_40px_-10px_rgba(214,58,111,0.55)] hover:shadow-[0_16px_50px_-10px_rgba(214,58,111,0.65)]'
      : variant === 'light'
      ? 'bg-white text-rose-600 shadow-xl shadow-rose-500/20 hover:bg-pink-50'
      : 'border border-rose-200/80 bg-white/40 text-rose-700 backdrop-blur-md hover:bg-white/70';

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </motion.button>
  );
}
