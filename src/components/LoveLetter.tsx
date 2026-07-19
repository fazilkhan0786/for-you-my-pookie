import { useState } from 'react';
import { motion } from 'framer-motion';
import { MultiTypewriter } from './Typewriter';
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

const LETTER = [
  'hi, love.',
  '',
  "i don't really know how to start this without sounding like i'm trying too hard.",
  "so i'll just say it the way it sits in my chest.",
  '',
  "some days i look at you and i get this quiet little ache —",
  "not the bad kind. the kind that means",
  '"i can\'t believe you\'re real and somehow you\'re mine."',
  '',
  "you make ordinary tuesdays feel like something worth remembering.",
  "you make the loud parts of my head go soft.",
  "and when you're not around, even the good songs sound a little empty.",
  '',
  "i made this because a text felt too small.",
  "and because i wanted you to have something you could open again",
  "on a day when you need to feel chosen.",
  '',
  "so… come with me for a little bit?",
  "i have more i want to show you.",
  '',
  '— always yours',
];

export default function LoveLetter({ onNext }: Props) {
  const [finished, setFinished] = useState(false);

  return (
    <SceneShell className="flex items-center justify-center px-4 py-24">
      <div className="relative w-full max-w-2xl">
        {/* Soft decorative marks */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 0.4 }}
          className="absolute -top-7 left-2 select-none text-4xl md:-left-4"
        >
          🌷
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 0.7 }}
          className="absolute -top-5 right-2 select-none text-3xl md:-right-2"
        >
          ✨
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="paper relative overflow-hidden rounded-[1.6rem] px-7 py-9 md:px-12 md:py-12"
        >
          {/* Tiny paper corner curl feel */}
          <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rotate-45 bg-gradient-to-br from-rose-100/40 to-transparent" />

          <div className="mb-7 flex items-center justify-between">
            <span className="font-script text-xl text-rose-400/90">something i wrote for you</span>
            <span className="text-[10px] tracking-[0.28em] text-rose-300 uppercase">01</span>
          </div>

          <MultiTypewriter
            lines={LETTER}
            speed={28}
            linePause={380}
            startDelay={700}
            onDone={() => setFinished(true)}
            className="min-h-[420px] font-serif text-[17px] leading-[1.75] text-rose-950/80 md:text-[19px]"
            caretClassName="text-rose-400"
            lineClassName={(line, i) => {
              if (i === 0) return 'font-script text-3xl text-rose-600 md:text-4xl';
              if (line.startsWith('—')) return 'mt-5 text-right font-script text-2xl text-rose-500';
              if (line.startsWith('"')) return 'italic text-rose-800/75';
              return '';
            }}
          />

          {finished && (
            <div className="mt-10 flex justify-center">
              <SoftButton onClick={onNext} delay={0.3}>
                keep going
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                >
                  →
                </motion.span>
              </SoftButton>
            </div>
          )}
        </motion.div>
      </div>
    </SceneShell>
  );
}
