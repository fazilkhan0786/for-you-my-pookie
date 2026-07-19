import { useMultiTypewriter, useTypewriter } from '../hooks/useTypewriter';

/**
 * ============================================================
 *  💖 For You, My Pookie
 *  🧑‍💻 Crafted with love by Mohammad Fazil Firojkhan Malek
 * ============================================================
 */

interface SingleProps {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  caretClassName?: string;
  onDone?: () => void;
  showCaret?: boolean;
}

/** Single-block character typing. */
export function Typewriter({
  text,
  speed = 38,
  startDelay = 400,
  className = '',
  caretClassName = 'text-rose-500',
  onDone,
  showCaret = true,
}: SingleProps) {
  const { displayed, done } = useTypewriter({ text, speed, startDelay, onDone });

  return (
    <span className={className}>
      {displayed}
      {showCaret && !done && (
        <span className={`inline-block w-[0.5ch] animate-pulse ${caretClassName}`}>|</span>
      )}
    </span>
  );
}

interface MultiProps {
  lines: string[];
  speed?: number;
  linePause?: number;
  startDelay?: number;
  className?: string;
  lineClassName?: string | ((line: string, index: number) => string);
  caretClassName?: string;
  onDone?: () => void;
  showCaret?: boolean;
}

/** Multi-line character typing — feels like someone writing to you live. */
export function MultiTypewriter({
  lines,
  speed = 36,
  linePause = 520,
  startDelay = 500,
  className = '',
  lineClassName = '',
  caretClassName = 'text-rose-500',
  onDone,
  showCaret = true,
}: MultiProps) {
  const { displayedLines, current, done } = useMultiTypewriter({
    lines,
    speed,
    linePause,
    startDelay,
    onDone,
  });

  const resolveClass = (line: string, index: number) => {
    if (typeof lineClassName === 'function') return lineClassName(line, index);
    return lineClassName;
  };

  return (
    <div className={className}>
      {displayedLines.map((line, i) => (
        <p
          key={`done-${i}`}
          className={`${line === '' ? 'h-4' : ''} ${resolveClass(line, i)}`}
        >
          {line}
        </p>
      ))}
      {!done && current !== undefined && (
        <p className={resolveClass(current, displayedLines.length)}>
          {current}
          {showCaret && (
            <span className={`inline-block w-[0.5ch] animate-pulse ${caretClassName}`}>|</span>
          )}
        </p>
      )}
    </div>
  );
}
