import { PiUserCircleBold, PiListMagnifyingGlassBold } from 'react-icons/pi';
import { TbMap2 } from 'react-icons/tb';
import { EMenuRoutes } from '@/platform/constants';

export const NavigationRoutes = [
  {
    name: EMenuRoutes.LIST,
    icon: PiListMagnifyingGlassBold,
  },
  {
    name: EMenuRoutes.LOCATIONS,
    icon: TbMap2,
  },
  {
    name: EMenuRoutes.PROFILE,
    icon: PiUserCircleBold,
  },
];
