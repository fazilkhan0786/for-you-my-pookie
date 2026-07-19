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

const PROMISES = [
  {
    icon: '🌙',
    title: 'i will keep choosing you',
    text: 'in the ordinary days, the tired days, and the days that feel too big to carry alone.',
  },
  {
    icon: '💌',
    title: 'i will make room for tenderness',
    text: 'for slow kisses, soft laughter, and the kind of silence that feels like safety.',
  },
  {
    icon: '🌤️',
    title: 'i will love your whole heart',
    text: 'the brave parts, the messy parts, and every little piece that makes you beautifully you.',
  },
];

export default function QuietPromise({ onNext }: Props) {
  return (
    <SceneShell className="px-5 py-28">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-[11px] tracking-[0.32em] text-rose-400 uppercase"
        >
          a quiet promise
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
          className="mt-3 text-center font-serif text-4xl text-rose-950/85 md:text-5xl"
        >
          some things i want to be true
          <span className="font-script text-gradient-love"> between us</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mx-auto mt-4 max-w-xl text-center font-serif text-base italic text-rose-700/65"
        >
          this is the part where the air gets softer and my heart says the things it has been saving.
        </motion.p>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {PROMISES.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass rounded-[1.35rem] p-6 text-left"
            >
              <span className="text-3xl">{p.icon}</span>
              <h3 className="mt-3 font-serif text-xl text-rose-900">{p.title}</h3>
              <p className="mt-2 font-serif text-[15px] leading-relaxed text-rose-950/70">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9 }}
          className="mt-14 flex flex-col items-center text-center"
        >
          <p className="max-w-2xl font-script text-2xl leading-relaxed text-rose-500 md:text-3xl">
            and if the world ever feels too loud, i will still be the soft place you come home to.
          </p>
          <div className="mt-8">
            <SoftButton onClick={onNext}>bring me to the sweetest part →</SoftButton>
          </div>
        </motion.div>
      </div>
    </SceneShell>
  );
}
