import { StoreContext, useStore } from './store';
import items from '../../../../public/data/items';
import rooms from '../../../../public/data/rooms';
import locations from '../../../../public/data/locations.json';

export const GlobalStoreProvider = ({ children }) => {
  const store = useStore();

  store.databaseStore.setLocations(locations);
  store.databaseStore.setRooms(rooms);
  store.databaseStore.setItems(items);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
