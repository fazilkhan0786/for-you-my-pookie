import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const REASONS = [
  {
    emoji: '☕',
    title: 'your morning voice',
    text: "half-asleep, a little croaky, somehow still the softest sound i know.",
  },
  {
    emoji: '🌻',
    title: 'how you notice things',
    text: "a tired barista. a sad song in a store. me, when i think i'm hiding it well.",
  },
  {
    emoji: '🧸',
    title: 'you feel like home',
    text: "not the house kind. the 'i can finally put my shoulders down' kind.",
  },
  {
    emoji: '🌧️',
    title: 'your quiet strength',
    text: "you carry so much and still leave room to be gentle with everyone else.",
  },
  {
    emoji: '🍓',
    title: 'your ridiculous little habits',
    text: "the face you make when you're thinking. the way you hum without noticing.",
  },
  {
    emoji: '🌙',
    title: 'how safe i feel with you',
    text: "like the world can be loud and weird and i still have somewhere to land.",
  },
  {
    emoji: '✨',
    title: 'your mind',
    text: "i could listen to you talk about anything. literally anything. try me.",
  },
  {
    emoji: '💗',
    title: 'you make me softer',
    text: "not weaker. just… better. kinder. more like the person i want to be.",
  },
  {
    emoji: '🎀',
    title: 'and honestly?',
    text: "even the things that drive me a little crazy. i'd miss them if they were gone.",
  },
];

export default function WhyILoveYou({ onNext }: Props) {
  const [opened, setOpened] = useState<number[]>([]);

  const open = (i: number) => {
    setOpened((prev) => (prev.includes(i) ? prev : [...prev, i]));
  };

  const allOpen = opened.length === REASONS.length;

  return (
    <SceneShell className="px-5 py-28">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-[11px] tracking-[0.32em] text-rose-400 uppercase"
        >
          a small confession
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
          className="mt-3 text-center font-serif text-4xl text-rose-950/85 md:text-5xl"
        >
          things about you
          <span className="font-script text-gradient-love"> i never say enough</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mx-auto mt-4 max-w-md text-center font-serif text-base italic text-rose-700/60"
        >
          tap each one. i hid a piece of my heart under every little heart.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {REASONS.map((r, i) => {
            const isOpen = opened.includes(i);
            return (
              <motion.button
                key={r.title}
                type="button"
                onClick={() => open(i)}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.06, 0.4), duration: 0.7 }}
                whileHover={{ y: isOpen ? -2 : -4, scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                className="relative h-48 cursor-pointer text-left perspective-[800px]"
              >
                <AnimatePresence mode="wait">
                  {!isOpen ? (
                    <motion.div
                      key="closed"
                      exit={{ opacity: 0, rotateY: 70, scale: 0.96 }}
                      transition={{ duration: 0.35 }}
                      className="flex h-full w-full flex-col items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-rose-200/90 via-pink-100 to-rose-300/90 shadow-lg shadow-rose-200/50"
                    >
                      <motion.span
                        animate={{ scale: [1, 1.12, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.1 }}
                        className="text-4xl"
                      >
                        💝
                      </motion.span>
                      <span className="mt-3 font-script text-lg text-rose-600/90">open me</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="open"
                      initial={{ opacity: 0, rotateY: -70, scale: 0.96 }}
                      animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="flex h-full w-full flex-col items-center justify-center rounded-[1.4rem] glass px-5 py-4 text-center"
                    >
                      <span className="text-3xl">{r.emoji}</span>
                      <h3 className="mt-2.5 font-serif text-lg text-rose-900">{r.title}</h3>
                      <p className="mt-2 font-serif text-sm leading-relaxed text-rose-950/70">
                        {r.text}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          {!allOpen ? (
            <p className="text-sm text-rose-400/80">
              {opened.length === 0
                ? 'go on… pick one'
                : `${opened.length} of ${REASONS.length} · keep going, love`}
            </p>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center gap-5"
            >
              <p className="font-script text-2xl text-rose-500 md:text-3xl">
                and that's still not even half of it.
              </p>
              <SoftButton onClick={onNext}>one more soft thing →</SoftButton>
            </motion.div>
          )}
        </div>
      </div>
    </SceneShell>
  );
}
