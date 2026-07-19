import { useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from './Typewriter';
import SoftButton from './SoftButton';
import SceneShell from './SceneShell';
import Sparkles from './Sparkles';

/**
 * ============================================================
 *  💖 For You, My Pookie
 *  🧑‍💻 Crafted with love by Mohammad Fazil Firojkhan Malek
 * ============================================================
 */

interface Props {
  onNext: () => void;
}

const DREAMS = [
  {
    emoji: '🏠',
    title: 'a small home',
    text: 'warm lights. your books next to mine. a mug that is definitely yours and i\'m not allowed to touch.',
  },
  {
    emoji: '🌊',
    title: 'getting lost on purpose',
    text: 'slow trains. tiny towns. no agenda except finding the best street food and your hand in mine.',
  },
  {
    emoji: '🍝',
    title: 'kitchen disasters',
    text: 'burnt toast. dancing between the counters. music too loud for a wednesday. zero regrets.',
  },
  {
    emoji: '🐶',
    title: 'something soft to love',
    text: 'a ridiculous pet name. two people spoiling one creature. a house that finally feels full.',
  },
  {
    emoji: '🌌',
    title: 'rooftop nights',
    text: 'blankets. quiet. me pointing at stars i definitely made up just to hear you laugh.',
  },
  {
    emoji: '🤍',
    title: 'growing old, still silly',
    text: 'wrinkly hands. the same dumb jokes. still choosing each other like it\'s the easiest thing in the world.',
  },
];

export default function FutureDreams({ onNext }: Props) {
  const [showRest, setShowRest] = useState(false);

  return (
    <SceneShell dark className="overflow-hidden bg-twilight px-5 py-28">
      <Sparkles count={55} />

      <div className="relative mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-[11px] tracking-[0.32em] text-rose-200/80 uppercase"
        >
          looking ahead
        </motion.p>

        <h2 className="mt-3 text-center font-serif text-4xl text-white md:text-5xl">
          <Typewriter
            text="things i dream about with you"
            speed={40}
            startDelay={350}
            caretClassName="text-pink-300"
            onDone={() => setTimeout(() => setShowRest(true), 400)}
            className="text-white"
          />
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: showRest ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="mx-auto mt-4 max-w-md text-center font-serif text-base italic text-rose-100/70"
        >
          none of them are fancy. all of them have you in the middle.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
          {DREAMS.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 24 }}
              animate={showRest ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.14)' }}
              className="glass-dark rounded-2xl p-5 text-white md:p-6"
            >
              <motion.span
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3.2 + i * 0.15, repeat: Infinity }}
                className="inline-block text-3xl"
              >
                {d.emoji}
              </motion.span>
              <h3 className="mt-3 font-serif text-xl text-pink-100">{d.title}</h3>
              <p className="mt-2 font-serif text-[15px] leading-relaxed text-white/75">{d.text}</p>
            </motion.div>
          ))}
        </div>

        {showRest && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="mt-16 flex flex-col items-center text-center"
          >
            <p className="font-script text-3xl text-pink-100 md:text-4xl">
              every single dream starts the same way…
            </p>
            <p className="mt-2 font-serif text-2xl text-white/90">with you, waking up next to me.</p>
            <div className="mt-10">
              <SoftButton onClick={onNext} variant="light" delay={0.3}>
                there's one last thing i need to say →
              </SoftButton>
            </div>
          </motion.div>
        )}
      </div>
    </SceneShell>
  );
}
