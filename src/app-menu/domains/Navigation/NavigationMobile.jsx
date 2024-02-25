import clsx from 'clsx';
import { m } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/platform/providers/StoreProvider/store';
import { NavigationRoutes } from './types';

export const NavigationMobile = observer(({ openMenu, closeMenu }) => {
  const { menuStore } = useStore();

  const activeTab = menuStore.getActiveTab();

  return (
    <m.nav
      layout
      className='w-full absolute bottom-0 h-14 flex justify-around items-center'
    >
      {NavigationRoutes.map(({ name, icon: Icon }) => {
        const isActiveTab = activeTab === name;

        const classNames = clsx(
          'w-full h-full flex justify-center items-center',
          {
            'opacity-50': !isActiveTab,
            'opacity-100': isActiveTab,
          },
        );

        const handleClick = () => {
          if (activeTab === name) {
            closeMenu();
          } else {
            openMenu(name);
          }
        };

        return (
          <m.button
            layout
            type='button'
            aria-label={name}
            key={name}
            className={classNames}
            onClick={handleClick}
          >
            <Icon className='w-7 h-7' />
          </m.button>
        );
      })}
    </m.nav>
  );
});
