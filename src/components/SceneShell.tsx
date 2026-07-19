import type { ReactNode } from 'react';

/**
 * ============================================================
 *  💖 For You, My Pookie
 *  🧑‍💻 Crafted with love by Mohammad Fazil Firojkhan Malek
 * ============================================================
 */

interface Props {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

/** Layout shell for each scene (page transitions live in App). */
export default function SceneShell({ children, className = '' }: Props) {
  return <div className={`relative min-h-screen w-full ${className}`}>{children}</div>;
}
