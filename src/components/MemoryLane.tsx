import { motion } from 'framer-motion';
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

const MEMORIES = [
  {
    when: 'the beginning',
    title: 'that first hello',
    text: "i don't remember what we talked about. i just remember thinking — oh. there you are.",
    emoji: '🌱',
  },
  {
    when: 'early on',
    title: 'the message i almost didn\'t send',
    text: "i rewrote it four times. deleted it twice. then you replied in under a minute and i sat there smiling at my phone like an idiot.",
    emoji: '💬',
  },
  {
    when: 'a random afternoon',
    title: 'we lost track of time',
    text: "coffee got cold. the sun moved. i didn't care. being with you felt like the only clock that mattered.",
    emoji: '☕',
  },
  {
    when: 'a hard day',
    title: 'you stayed',
    text: "you didn't try to fix everything. you just… stayed. and somehow that fixed more than words ever could.",
    emoji: '🌧️',
  },
  {
    when: 'late one night',
    title: 'your laugh in the dark',
    text: "we were both half-asleep and still joking about nothing. i thought — this. this is the sound i want for the rest of my life.",
    emoji: '🌙',
  },
  {
    when: 'right now',
    title: 'still choosing you',
    text: "not out of habit. not because it's easy. because every version of my future looks wrong without you in it.",
    emoji: '💗',
  },
];

export default function MemoryLane({ onNext }: Props) {
  return (
    <SceneShell className="px-5 py-28 md:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-[11px] tracking-[0.32em] text-rose-400 uppercase"
        >
          pressed flowers
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
          className="mt-3 text-center font-serif text-4xl text-rose-950/85 md:text-5xl"
        >
          little moments
          <span className="font-script text-gradient-love"> i keep</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 1 }}
          className="mx-auto mt-4 max-w-md text-center font-serif text-base italic text-rose-700/60"
        >
          not the big cinematic ones. just the ones that quietly rewired my whole heart.
        </motion.p>

        <div className="relative mt-16">
          <div className="absolute bottom-0 left-[18px] top-0 w-px bg-gradient-to-b from-rose-200 via-rose-300 to-rose-200 md:left-1/2 md:-translate-x-px" />

          <div className="space-y-10 md:space-y-14">
            {MEMORIES.map((m, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex pl-12 md:pl-0 ${
                    left ? 'md:justify-start md:pr-[52%]' : 'md:justify-end md:pl-[52%]'
                  }`}
                >
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 18 }}
                    className="absolute left-0 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-base shadow-md shadow-rose-200/80 md:left-1/2 md:-translate-x-1/2"
                  >
                    {m.emoji}
                  </motion.div>

                  <div
                    className={`glass w-full rounded-2xl p-5 md:p-6 ${
                      left ? 'md:mr-6 md:text-right' : 'md:ml-6'
                    }`}
                  >
                    <p className="text-[10px] tracking-[0.22em] text-rose-400 uppercase">
                      {m.when}
                    </p>
                    <h3 className="mt-1.5 font-serif text-xl text-rose-900 md:text-2xl">
                      {m.title}
                    </h3>
                    <p className="mt-2.5 font-serif text-[15px] leading-relaxed text-rose-950/70 md:text-base">
                      {m.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <p className="font-script text-xl text-rose-400">and those are just a few…</p>
          <SoftButton onClick={onNext}>
            wait — there's more about you →
          </SoftButton>
        </motion.div>
      </div>
    </SceneShell>
  );
}
