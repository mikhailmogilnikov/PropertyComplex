import { useMedia } from 'react-use';
import { useEffect } from 'react';
import { MenuMobile } from './MenuMobile';
import { MenuDesktop } from './MenuDesktop';
import { useStore } from '@/platform/providers/StoreProvider/store';
import { EMenuRoutes } from '@/platform/constants';

export const Menu = () => {
  const isMobile = useMedia('(max-width: 960px)');
  const { menuStore } = useStore();

  const Component = isMobile ? MenuMobile : MenuDesktop;

  useEffect(() => {
    if (isMobile) {
      menuStore.setActiveTab(null);
    } else {
      menuStore.setActiveTab(EMenuRoutes.LIST);
    }
  }, [isMobile]);

  return <Component />;
};
