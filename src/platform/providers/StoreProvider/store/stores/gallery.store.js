import { makeAutoObservable } from 'mobx';

const initialMeasure = {
  width: 0,
  height: 0,
  top: 0,
  left: 0,
};

class GalleryStore {
  constructor() {
    this.imageLink = '';
    this.measure = initialMeasure;
    makeAutoObservable(this);
  }

  setImageLink(imageLink) {
    this.imageLink = imageLink;
  }

  setMeasure(measure) {
    this.measure = measure;
  }

  getImageLink() {
    return this.imageLink;
  }

  getMeasure() {
    return this.measure;
  }

  checkIsEmpty() {
    return this.imageLink === '';
  }
}

export default GalleryStore;
