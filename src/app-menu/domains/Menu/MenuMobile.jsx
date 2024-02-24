import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useState } from 'react';
import { NavigationMobile } from '../Navigation';

export const MenuMobile = () => {
  const [expanded, setExpanded] = useState(false);

  const menuVariants = {
    expanded: {
      bottom: 12,
      left: 12,
      width: 'calc(100dvw - 24px)',
      height: 'calc(100dvh - 24px)',
      borderRadius: 36,
    },
    collapsed: {
      bottom: 20,
      left: 'calc((100dvw - 300px) / 2)',
      width: 300,
      height: 64,
      borderRadius: 22,
    },
    hidden: {
      bottom: -100,
      left: 'calc((100dvw - 300px) / 2)',
      width: 300,
      height: 64,
      borderRadius: 22,
    },
  };

  const openMenu = () => {
    setExpanded(true);
  };

  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.menu
        layout
        layoutRoot
        variants={menuVariants}
        initial='hidden'
        animate={expanded ? 'expanded' : 'collapsed'}
        transition={{
          type: 'spring',
          duration: 0.5,
          bounce: 0.05,
        }}
        className='absolute shadow-base bg-white/60 dark:bg-default-50/60 backdrop-blur-3xl flex flex-col origin-bottom'
      >
        <NavigationMobile openMenu={openMenu} closeMenu={closeMenu} />
      </m.menu>
    </LazyMotion>
  );
};
