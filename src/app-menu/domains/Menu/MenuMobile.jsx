import { m } from 'framer-motion';
import { useState } from 'react';
import { NavigationMobile } from '../Navigation';
import { useStore } from '@/platform/providers/StoreProvider/store';
import { MenuVariantsMobile } from '@/app-menu/constants/variants';
import { transitions } from '@/platform/constants';
import { Swiper } from '@/app-menu/components/Swiper';

export const MenuMobile = () => {
  const [expanded, setExpanded] = useState(false);
  const { menuStore } = useStore();

  const openMenu = (tab) => {
    setExpanded(true);
    menuStore.setActiveTab(tab);
  };

  const closeMenu = () => {
    setExpanded(false);
    menuStore.setActiveTab(null);
  };

  return (
    <>
      {expanded && (
        <m.div
          onClick={closeMenu}
          className='fixed bottom-0 left-0 right-0 top-0 cursor-pointer'
        />
      )}
      <m.menu
        layout
        layoutRoot
        variants={MenuVariantsMobile}
        initial='hidden'
        animate={expanded ? 'expanded' : 'collapsed'}
        transition={transitions.primary}
        className='fixed shadow-base bg-white/60 dark:bg-default-50/60 backdrop-blur-3xl flex flex-col z-20'
      >
        <NavigationMobile openMenu={openMenu} closeMenu={closeMenu} />
        <Swiper expanded={expanded} panEvent={closeMenu} />
      </m.menu>
    </>
  );
};
