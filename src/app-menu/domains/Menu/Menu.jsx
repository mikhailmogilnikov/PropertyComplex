import { MenuMobile } from './MenuMobile';
import { MenuDesktop } from './MenuDesktop';
import { useDetectMobile } from '@/platform/hooks/useResize';

export const Menu = () => {
  const isMobile = useDetectMobile();
  const Component = isMobile ? MenuMobile : MenuDesktop;

  return <Component />;
};
