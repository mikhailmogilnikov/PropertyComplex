import { AnimatePresence, m } from 'framer-motion';

export const Swiper = ({ expanded, panEvent }) => {
  function onPan(event, info) {
    const { y } = info.delta;
    if (y > 30) {
      panEvent();
    }
  }

  return (
    <AnimatePresence>
      {expanded && (
        <m.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          drag='y'
          whileTap={{ scale: 1.2 }}
          dragConstraints={{ top: null, bottom: 0 }}
          dragSnapToOrigin
          dragElastic={{ bottom: 0.05 }}
          onPan={onPan}
          className='absolute self-center top-0 mx-auto w-36 h-16 flex items-start justify-center pt-3'
        >
          <m.div className='w-14 h-1 rounded-full bg-black/10 dark:bg-white/10' />
        </m.button>
      )}
    </AnimatePresence>
  );
};
