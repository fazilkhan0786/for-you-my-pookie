import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from './Typewriter';
import SoftButton from './SoftButton';
import SceneShell from './SceneShell';

/**
 * ============================================================
 *  💖 For You, My Pookie
 *  🧑‍💻 Crafted with love by Mohammad Fazil Firojkhan Malek
 * ============================================================
 */

interface Props {
  onNext: () => void;
}

// ⭐ Change this to the day you two started
const START_DATE = new Date('2024-02-14T19:30:00');

function useSince(start: Date) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, now.getTime() - start.getTime());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Counter({ onNext }: Props) {
  const t = useSince(START_DATE);
  const [showBtn, setShowBtn] = useState(false);

  const blocks = [
    { label: 'days', value: t.days },
    { label: 'hours', value: t.hours },
    { label: 'minutes', value: t.minutes },
    { label: 'seconds', value: t.seconds },
  ];

  return (
    <SceneShell className="flex flex-col items-center justify-center px-6 py-24 text-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-5 text-[11px] tracking-[0.32em] text-rose-400 uppercase"
      >
        a little bit of math
      </motion.p>

      <h2 className="max-w-lg font-serif text-3xl leading-snug text-rose-950/85 md:text-5xl">
        <Typewriter
          text="do you know how long it's been?"
          speed={42}
          startDelay={300}
          caretClassName="text-rose-400"
        />
      </h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1.2 }}
        className="mt-5 max-w-md font-serif text-base italic text-rose-700/65 md:text-lg"
      >
        not in a dramatic way. just… every single second of you, quietly counting.
      </motion.p>

      <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
        {blocks.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 2.8 + i * 0.18,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="glass relative w-[7.5rem] rounded-[1.4rem] px-4 py-7 sm:w-36 md:w-40"
          >
            <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-lg opacity-80">
              {['💗', '🌸', '✨', '💕'][i]}
            </span>
            <div className="font-serif text-4xl tabular-nums text-gradient-love md:text-5xl">
              {String(b.value).padStart(2, '0')}
            </div>
            <div className="mt-2 text-[10px] tracking-[0.22em] text-rose-400 uppercase">
              {b.label}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1.2 }}
        onAnimationComplete={() => setShowBtn(true)}
        className="mt-14 max-w-sm"
      >
        <p className="font-script text-2xl text-rose-500 md:text-3xl">
          and i would restart the clock
          <br />
          a thousand times, just to find you again.
        </p>
      </motion.div>

      {showBtn && (
        <div className="mt-10">
          <SoftButton onClick={onNext} delay={0.2}>
            i saved some memories for you →
          </SoftButton>
        </div>
      )}
    </SceneShell>
  );
}
