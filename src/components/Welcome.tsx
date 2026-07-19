import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from './Typewriter';
import SceneShell from './SceneShell';

/**
 * ============================================================
 *  💖 For You, My Pookie
 *  🧑‍💻 Crafted with love by Mohammad Fazil Firojkhan Malek
 * ============================================================
 */

interface Props {
  onOpen: () => void;
}

export default function Welcome({ onOpen }: Props) {
  const [step, setStep] = useState<'hello' | 'ready' | 'opening'>('hello');

  const handleOpen = () => {
    setStep('opening');
    setTimeout(onOpen, 1600);
  };

  return (
    <SceneShell className="flex flex-col items-center justify-center px-6 text-center">
      <AnimatePresence mode="wait">
        {step !== 'opening' && (
          <motion.div
            key="content"
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ duration: 0.9 }}
            className="flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4 }}
              className="mb-8 flex items-center gap-3 text-[11px] tracking-[0.35em] text-rose-400 uppercase"
            >
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-rose-300" />
              just for you
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-rose-300" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="font-serif text-5xl leading-[1.15] text-rose-950/85 md:text-7xl"
            >
              hey you.
            </motion.div>

            <div className="mt-5 max-w-md font-script text-4xl text-gradient-love md:text-5xl">
              <Typewriter
                text="my pookie."
                speed={90}
                startDelay={1100}
                caretClassName="text-rose-400"
                onDone={() => setTimeout(() => setStep('ready'), 600)}
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: step === 'ready' ? 1 : 0 }}
              transition={{ duration: 1.1 }}
              className="mt-10 max-w-sm"
            >
              <p className="font-serif text-lg leading-relaxed text-rose-900/60 md:text-xl">
                I stayed up making this for you.
                <br />
                No reason. Just… because I missed saying
                all the soft things out loud.
              </p>
            </motion.div>

            {/* Envelope */}
            <motion.button
              type="button"
              onClick={handleOpen}
              disabled={step !== 'ready'}
              initial={{ opacity: 0, y: 24 }}
              animate={{
                opacity: step === 'ready' ? 1 : 0,
                y: step === 'ready' ? 0 : 24,
              }}
              transition={{ duration: 0.9, delay: 0.2 }}
              whileHover={{ scale: 1.04, y: -6 }}
              whileTap={{ scale: 0.98 }}
              className="group relative mt-14 cursor-pointer disabled:pointer-events-none"
            >
              <div className="relative h-40 w-60 md:h-48 md:w-72">
                {/* Body */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl bg-gradient-to-br from-[#fff5f8] via-[#ffe4ec] to-[#ffd0e0] shadow-[0_25px_60px_-15px_rgba(214,58,111,0.35)]">
                  {/* Flap */}
                  <div
                    className="absolute inset-x-0 top-0 h-[52%]"
                    style={{
                      background: 'linear-gradient(180deg, #ffc9dc 0%, #ffb3d0 100%)',
                      clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                    }}
                  />
                  {/* Inner fold lines */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background:
                        'linear-gradient(135deg, transparent 49.5%, rgba(214,58,111,0.15) 50%, transparent 50.5%), linear-gradient(225deg, transparent 49.5%, rgba(214,58,111,0.15) 50%, transparent 50.5%)',
                    }}
                  />
                  {/* Wax seal */}
                  <motion.div
                    animate={{ rotate: [0, 4, -4, 0], scale: [1, 1.04, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute left-1/2 top-[46%] flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 via-rose-500 to-rose-700 text-xl shadow-[0_8px_30px_rgba(214,58,111,0.55)] pulse-glow md:h-16 md:w-16 md:text-2xl"
                  >
                    ♡
                  </motion.div>
                </div>
              </div>

              <motion.p
                animate={{ y: [0, -5, 0], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.4, repeat: Infinity }}
                className="mt-7 font-script text-2xl text-rose-500"
              >
                open me
              </motion.p>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Opening burst */}
      <AnimatePresence>
        {step === 'opening' && (
          <motion.div
            key="burst"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: [0.4, 1.6, 2.4], opacity: [0, 1, 0] }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute text-7xl"
          >
            💕
          </motion.div>
        )}
      </AnimatePresence>
    </SceneShell>
  );
}
