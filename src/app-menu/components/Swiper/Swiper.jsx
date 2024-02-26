import { m } from 'framer-motion';

export const Swiper = ({ panEvent }) => {
  function onPan(event, info) {
    const { y } = info.delta;
    if (y > 30) {
      panEvent();
    }
  }

  return (
    <m.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4 } }}
      exit={{ opacity: 0 }}
      drag='y'
      whileTap={{ scale: 1.2 }}
      dragConstraints={{ top: null, bottom: 0 }}
      dragSnapToOrigin
      dragElastic={{ bottom: 0.05 }}
      onPan={onPan}
      className='absolute self-center -top-2 mx-auto w-56 h-20 flex items-start justify-center pt-5'
    >
      <m.div className='w-14 h-1 rounded-full backdrop-invert backdrop-blur-sm' />
    </m.button>
  );
};
