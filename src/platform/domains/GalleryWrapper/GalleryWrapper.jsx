import dynamic from 'next/dynamic';

const DynamicGallery = dynamic(() => import('./Gallery'), {
  ssr: false,
});

export const GalleryWrapper = ({ children }) => (
  <>
    <DynamicGallery />
    {children}
  </>
);
