import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { useRef, useState } from 'react';
import { Skeleton } from '@nextui-org/skeleton';
import clsx from 'clsx';
import { useStore } from '@/platform/providers/StoreProvider/store';
import useResize from '@/platform/hooks/useResize';

const Gallery = observer(() => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { galleryStore } = useStore();
  const imageRef = useRef(null);
  const { winWidth, winHeight } = useResize();

  const handlerClose = () => {
    galleryStore.setImageLink('');
    setIsLoaded(false);
  };

  const imageLink = galleryStore.getImageLink();
  const { width, height, x, y, imageAspect } = galleryStore.getMeasure();
  const isEmpty = galleryStore.checkIsEmpty();

  const imageSize = {
    width: 0,
    height: 0,
  };

  if (typeof window !== 'undefined') {
    const windowAspect = winWidth / winHeight;

    if (windowAspect >= imageAspect) {
      imageSize.height = winHeight * 0.9;
      imageSize.width = imageSize.height * imageAspect;
    } else {
      imageSize.width = winWidth * 0.9;
      imageSize.height = imageSize.width / imageAspect;
    }
  }

  const positionX = (winWidth - imageSize.width) / 2;
  const positionY = (winHeight - imageSize.height) / 2;

  return (
    <AnimatePresence>
      {!isEmpty && (
        <aside className='fixed top-0 left-0 bottom-0 right-0 flex'>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='absolute top-0 left-0 bottom-0 right-0 bg-white/40 dark:bg-black/40 backdrop-blur-3xl z-10'
            onClick={handlerClose}
          />
          <motion.div
            initial={{ width, height, x, y, borderRadius: 0 }}
            animate={{
              x: positionX,
              y: positionY,
              width: imageSize.width,
              height: imageSize.height,
              borderRadius: 12,
            }}
            exit={{ width, height, x, y, borderRadius: 0 }}
            onClick={handlerClose}
            className='overflow-hidden bg-white/50 dark:bg-default/50 shadow-medium z-20 cursor-pointer'
          >
            <Image
              ref={imageRef}
              width={imageSize.width}
              height={imageSize.height}
              quality={100}
              priority
              className={clsx('w-full h-full', {
                hidden: !isLoaded,
                block: isLoaded,
              })}
              src={imageLink}
              onLoad={() => setIsLoaded(true)}
              alt='full width image'
            />
            <Skeleton className='w-full h-full' />
          </motion.div>
        </aside>
      )}
    </AnimatePresence>
  );
});

export default Gallery;
