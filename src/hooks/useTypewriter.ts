import { useEffect, useState } from 'react';

interface Options {
  text: string;
  speed?: number;
  startDelay?: number;
  enabled?: boolean;
  onDone?: () => void;
}

/** Character-by-character typing with a tiny natural jitter. */
export function useTypewriter({
  text,
  speed = 38,
  startDelay = 400,
  enabled = true,
  onDone,
}: Options) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    setDisplayed('');
    setDone(false);

    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const start = setTimeout(() => {
      const tick = () => {
        if (cancelled) return;
        if (i >= text.length) {
          setDone(true);
          onDone?.();
          return;
        }
        // Type 1–2 chars; pause a bit longer on punctuation
        const ch = text[i];
        const next = text.slice(0, i + 1);
        setDisplayed(next);
        i += 1;

        let delay = speed + Math.random() * 28;
        if (ch === '.' || ch === '!' || ch === '?' || ch === '—') delay += 280;
        else if (ch === ',' || ch === ';' || ch === ':') delay += 120;
        else if (ch === ' ') delay += 20;
        else if (ch === '\n') delay += 400;

        timeout = setTimeout(tick, delay);
      };
      tick();
    }, startDelay);

    return () => {
      cancelled = true;
      clearTimeout(start);
      clearTimeout(timeout);
    };
  }, [text, speed, startDelay, enabled]); // eslint-disable-line react-hooks/exhaustive-deps

  return { displayed, done };
}

interface MultiOptions {
  lines: string[];
  speed?: number;
  linePause?: number;
  startDelay?: number;
  enabled?: boolean;
  onDone?: () => void;
}

/** Types multiple lines one after another. */
export function useMultiTypewriter({
  lines,
  speed = 36,
  linePause = 520,
  startDelay = 500,
  enabled = true,
  onDone,
}: MultiOptions) {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [current, setCurrent] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    setLineIndex(0);
    setDisplayedLines([]);
    setCurrent('');
    setDone(false);
  }, [enabled, lines]);

  useEffect(() => {
    if (!enabled || done) return;
    if (lineIndex >= lines.length) {
      setDone(true);
      onDone?.();
      return;
    }

    const text = lines[lineIndex];
    // Empty line = a soft breath
    if (text === '') {
      const t = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, '']);
        setLineIndex((i) => i + 1);
      }, linePause * 0.7);
      return () => clearTimeout(t);
    }

    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;
    let cancelled = false;
    setCurrent('');

    const start = setTimeout(() => {
      const tick = () => {
        if (cancelled) return;
        if (i >= text.length) {
          setDisplayedLines((prev) => [...prev, text]);
          setCurrent('');
          timeout = setTimeout(() => setLineIndex((idx) => idx + 1), linePause);
          return;
        }
        const ch = text[i];
        i += 1;
        setCurrent(text.slice(0, i));

        let delay = speed + Math.random() * 26;
        if (ch === '.' || ch === '!' || ch === '?' || ch === '—') delay += 260;
        else if (ch === ',' || ch === ';') delay += 110;
        else if (ch === ' ') delay += 18;

        timeout = setTimeout(tick, delay);
      };
      tick();
    }, lineIndex === 0 ? startDelay : 80);

    return () => {
      cancelled = true;
      clearTimeout(start);
      clearTimeout(timeout);
    };
  }, [lineIndex, enabled, done, lines, speed, linePause, startDelay]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    displayedLines,
    current,
    lineIndex,
    done,
    isTyping: !done && current.length > 0,
  };
}
