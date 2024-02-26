import { m } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { EMenuRoutes } from '@/platform/constants';
import { List } from '../List';
import { Locations } from '../Locations';
import { Profile } from '../Profile';
import { Room } from '../Room';
import { useStore } from '@/platform/providers/StoreProvider/store';

export const MenuRouter = observer(() => {
  const { menuStore } = useStore();
  const activeTab = menuStore.getActiveTab();

  const renderActiveTab = () => {
    switch (activeTab) {
      case EMenuRoutes.LIST:
        return <List />;
      case EMenuRoutes.LOCATIONS:
        return <Locations />;
      case EMenuRoutes.PROFILE:
        return <Profile />;
      case EMenuRoutes.ROOM:
        return <Room />;
      default:
        return null;
    }
  };

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      layout
      className='w-full h-[calc(100%-56px)]'
    >
      {renderActiveTab()}
    </m.div>
  );
});
