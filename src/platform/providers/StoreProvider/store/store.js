import { createContext, useContext } from 'react';
import MenuStore from './stores/menu.store';
import DatabaseStore from './stores/database.store';
import GalleryStore from './stores/gallery.store';

const store = {
  menuStore: new MenuStore(),
  databaseStore: new DatabaseStore(),
  galleryStore: new GalleryStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => useContext(StoreContext);

export { store };
