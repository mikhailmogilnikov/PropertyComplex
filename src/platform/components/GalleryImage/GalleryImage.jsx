'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/platform/providers/StoreProvider/store';

export const GalleryImage = observer(
  ({ width: imgWidth = 384, height: imgHeight = 216, imageLink }) => {
    const { galleryStore } = useStore();
    const [galleryFader, setFader] = useState(false);
    const ref = useRef(null);

    const galleryLink = galleryStore.getImageLink();
    const isOpenedInGallery = galleryLink === imageLink;

    useEffect(() => {
      if (!isOpenedInGallery) {
        setTimeout(() => {
          setFader(false);
        }, 300);
      }
    }, [isOpenedInGallery]);

    const handleOpenGallery = () => {
      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const { naturalWidth, naturalHeight } = element;
      const imageAspect = naturalWidth / naturalHeight;
      const { width, height, x, y } = rect;

      setFader(true);

      galleryStore.setMeasure({
        width,
        height,
        x,
        y,
        imageAspect,
      });
      galleryStore.setImageLink(imageLink);
    };

    return (
      <>
        <Image
          ref={ref}
          onClick={handleOpenGallery}
          src={imageLink}
          width={imgWidth}
          height={imgHeight}
          className={clsx('cursor-pointer w-auto h-auto', {
            hidden: galleryFader,
            block: !galleryFader,
          })}
          alt='Room photo'
        />
        <div
          style={{ width: `${imgWidth}px`, height: `${imgHeight}px` }}
          className={clsx('bg-black/10 dark:bg-white/10', {
            hidden: !galleryFader,
            block: galleryFader,
          })}
        />
      </>
    );
  },
);
