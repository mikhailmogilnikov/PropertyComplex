import { makeAutoObservable } from 'mobx';

class MenuStore {
  constructor() {
    this.activeTab = null;
    this.activeRoom = 0;
    makeAutoObservable(this);
  }

  setActiveTab(tab) {
    if (tab !== this.activeTab) {
      this.activeTab = tab;
    }
  }

  setActiveRoom(room) {
    if (room !== this.activeRoom) {
      this.activeRoom = room;
    }
  }

  getActiveTab() {
    return this.activeTab;
  }

  getActiveRoom() {
    return this.activeRoom;
  }
}

export default MenuStore;
