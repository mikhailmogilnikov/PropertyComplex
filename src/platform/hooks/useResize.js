import { useState, useEffect } from 'react';

function useResize() {
  const isClient = typeof window === 'object';

  const [windowSize, setWindowSize] = useState({
    winWidth: isClient ? window.innerWidth : 0,
    winHeight: isClient ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const handleResize = () => {
      setWindowSize({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isClient]);

  return windowSize;
}

export default useResize;
