import { useState, useEffect } from 'react';

export const useResize = () => {
  const isClient = typeof window === 'object';

  const [windowSize, setWindowSize] = useState({
    width: isClient ? window.innerWidth : 0,
    height: isClient ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isClient]);

  return windowSize;
};

export const useDetectMobile = () => {
  const { width } = useResize();
  const [isMobile, setIsMobile] = useState(width < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};
