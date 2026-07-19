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

const PHOTOS = [
  {
    caption: 'the first us',
    note: 'i still look at this and smile like an idiot.',
    gradient: 'from-rose-300 via-pink-200 to-rose-400',
    icon: '🌸',
    rotate: -2.5,
  },
  {
    caption: 'that golden hour',
    note: 'you said nothing. the sky did all the talking.',
    gradient: 'from-amber-200 via-rose-200 to-orange-300',
    icon: '🌅',
    rotate: 2,
  },
  {
    caption: 'rainy café day',
    note: 'cold hands. warm drinks. your knee against mine.',
    gradient: 'from-stone-200 via-rose-200 to-pink-300',
    icon: '☕',
    rotate: -1.5,
  },
  {
    caption: 'your laugh, mid-frame',
    note: 'this is my favorite version of you. always.',
    gradient: 'from-pink-300 via-rose-300 to-fuchsia-300',
    icon: '💗',
    rotate: 2.5,
  },
  {
    caption: 'our tiny adventure',
    note: 'we got lost. i didn\'t mind even a little.',
    gradient: 'from-sky-200 via-rose-200 to-pink-300',
    icon: '🎈',
    rotate: -2,
  },
  {
    caption: 'an ordinary tuesday',
    note: 'proof that nothing special can still feel like everything.',
    gradient: 'from-rose-200 via-purple-200 to-pink-300',
    icon: '✨',
    rotate: 1.5,
  },
];

export default function Gallery({ onNext }: Props) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <SceneShell className="px-5 py-28">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-[11px] tracking-[0.32em] text-rose-400 uppercase"
        >
          our little album
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
          className="mt-3 text-center font-serif text-4xl text-rose-950/85 md:text-5xl"
        >
          pictures of
          <span className="font-script text-gradient-love"> a feeling</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mx-auto mt-4 max-w-md text-center font-serif text-base italic text-rose-700/60"
        >
          tap a frame. each one has a tiny secret under it.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTOS.map((p, i) => {
            const isActive = active === i;
            return (
              <motion.button
                key={p.caption}
                type="button"
                onClick={() => setActive(isActive ? null : i)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.75 }}
                whileHover={{ y: -6, rotate: 0 }}
                style={{ rotate: p.rotate }}
                className="group relative text-left"
              >
                <div className="rounded-xl bg-white p-2.5 pb-11 shadow-xl shadow-rose-200/40 transition-shadow group-hover:shadow-2xl group-hover:shadow-rose-300/40">
                  <div
                    className={`relative aspect-[4/5] overflow-hidden rounded-lg bg-gradient-to-br ${p.gradient}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.span
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 3.5 + i * 0.2, repeat: Infinity }}
                        className="text-6xl drop-shadow-md"
                      >
                        {p.icon}
                      </motion.span>
                    </div>
                    <div className="absolute left-2.5 top-2.5 rounded-full bg-white/75 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-rose-600 backdrop-blur">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <p className="absolute inset-x-2 bottom-2.5 text-center font-script text-lg text-rose-700">
                    {p.caption}
                  </p>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.96 }}
                      transition={{ duration: 0.35 }}
                      className="absolute -bottom-3 left-3 right-3 z-20 rounded-xl bg-rose-900/90 px-4 py-3 text-center shadow-xl backdrop-blur"
                    >
                      <p className="font-serif text-sm leading-snug text-rose-50">{p.note}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center gap-5"
        >
          <p className="max-w-sm text-center font-serif text-sm italic text-rose-600/70">
            (one day these will be real photos. for now, they're placeholders for every time you made my heart do that little flip.)
          </p>
          <SoftButton onClick={onNext}>and then… our forever →</SoftButton>
        </motion.div>
      </div>
    </SceneShell>
  );
}
