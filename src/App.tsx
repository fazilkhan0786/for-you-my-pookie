import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FloatingHearts from './components/FloatingHearts';
import MusicToggle from './components/MusicToggle';
import Welcome from './components/Welcome';
import LoveLetter from './components/LoveLetter';
import Counter from './components/Counter';
import MemoryLane from './components/MemoryLane';
import WhyILoveYou from './components/WhyILoveYou';
import Gallery from './components/Gallery';
import FutureDreams from './components/FutureDreams';
import FinalSurprise from './components/FinalSurprise';
import QuietPromise from './components/QuietPromise';

/**
 * ============================================================
 *  💖 For You, My Pookie
 *  🧑‍💻 Crafted with love by Mohammad Fazil Firojkhan Malek
 * ============================================================
 */

const SCENES = [
  'welcome',
  'letter',
  'counter',
  'memories',
  'reasons',
  'gallery',
  'promise',
  'dreams',
  'surprise',
] as const;

type SceneId = (typeof SCENES)[number];

export default function App() {
  const [scene, setScene] = useState<SceneId>('welcome');
  const [dir, setDir] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [scene]);

  const go = (to: SceneId) => {
    const from = SCENES.indexOf(scene);
    const next = SCENES.indexOf(to);
    setDir(next >= from ? 1 : -1);
    setScene(to);
  };

  const currentIndex = SCENES.indexOf(scene);
  const isDark = scene === 'dreams' || scene === 'surprise';

  return (
    <div
      className={`noise relative min-h-screen overflow-x-hidden transition-colors duration-1000 ${
        isDark ? 'bg-[#1a1030]' : 'bg-dreamy'
      }`}
    >
      <FloatingHearts count={scene === 'surprise' || scene === 'dreams' ? 0 : 14} dark={isDark} />

      {/* Soft progress — only after welcome */}
      <AnimatePresence>
        {scene !== 'welcome' && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6 }}
            className="fixed top-4 left-1/2 z-40 -translate-x-1/2"
          >
            <div
              className={`flex items-center gap-1.5 rounded-full px-3 py-2 shadow-lg backdrop-blur-xl ${
                isDark
                  ? 'border border-white/15 bg-white/10'
                  : 'border border-white/60 bg-white/55'
              }`}
            >
              {SCENES.map((s, i) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => go(s)}
                  aria-label={`Go to ${s}`}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === currentIndex
                      ? 'w-5 bg-gradient-to-r from-rose-400 to-pink-500'
                      : i < currentIndex
                      ? isDark
                        ? 'w-2 bg-rose-300/70'
                        : 'w-2 bg-rose-300'
                      : isDark
                      ? 'w-2 bg-white/25'
                      : 'w-2 bg-rose-200/70'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <MusicToggle />

      {/* Cinematic scene crossfade */}
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={scene}
          custom={dir}
          initial={{ opacity: 0, y: dir * 22, filter: 'blur(10px)', scale: 0.985 }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
          exit={{ opacity: 0, y: dir * -18, filter: 'blur(8px)', scale: 1.01 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          {scene === 'welcome' && <Welcome onOpen={() => go('letter')} />}
          {scene === 'letter' && <LoveLetter onNext={() => go('counter')} />}
          {scene === 'counter' && <Counter onNext={() => go('memories')} />}
          {scene === 'memories' && <MemoryLane onNext={() => go('reasons')} />}
          {scene === 'reasons' && <WhyILoveYou onNext={() => go('gallery')} />}
          {scene === 'gallery' && <Gallery onNext={() => go('promise')} />}
          {scene === 'promise' && <QuietPromise onNext={() => go('dreams')} />}
          {scene === 'dreams' && <FutureDreams onNext={() => go('surprise')} />}
          {scene === 'surprise' && <FinalSurprise onRestart={() => go('welcome')} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
