import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * ============================================================
 *  💖 For You, My Pookie
 *  🧑‍💻 Crafted with love by Mohammad Fazil Firojkhan Malek
 * ============================================================
 */

const AUDIO_SRC = 'https://cdn.pixabay.com/audio/2022/10/25/audio_946bcab50f.mp3';

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.volume = 0.28;
    audio.preload = 'none';
    const onErr = () => setAvailable(false);
    audio.addEventListener('error', onErr);
    audioRef.current = audio;
    return () => {
      audio.removeEventListener('error', onErr);
      audio.pause();
    };
  }, []);

  const toggle = async () => {
    if (!audioRef.current || !available) return;
    try {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        await audioRef.current.play();
        setPlaying(true);
      }
    } catch {
      setAvailable(false);
    }
  };

  if (!available) return null;

  return (
    <motion.button
      type="button"
      onClick={toggle}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, duration: 0.7 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/55 text-base shadow-lg backdrop-blur-xl"
      aria-label={playing ? 'Pause music' : 'Play soft music'}
      title={playing ? 'pause the music' : 'a little background music ♫'}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={playing ? 'on' : 'off'}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.2 }}
        >
          {playing ? '♫' : '♪'}
        </motion.span>
      </AnimatePresence>
      {playing && (
        <span className="absolute inset-0 rounded-full border border-rose-300/50 animate-ping opacity-30" />
      )}
    </motion.button>
  );
}
