import { LazyMotion, domMax } from 'framer-motion';
import { GalleryWrapper } from '@/platform/domains/GalleryWrapper';

export const Wrappers = ({ children }) => (
  <LazyMotion features={domMax}>
    <GalleryWrapper>{children}</GalleryWrapper>
  </LazyMotion>
);
