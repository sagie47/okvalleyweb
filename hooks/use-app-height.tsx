'use client';

import { useEffect } from 'react';

const useAppHeight = () => {
  useEffect(() => {
    const setAppHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    };

    window.addEventListener('resize', setAppHeight);
    window.addEventListener('orientationchange', setAppHeight);
    window.addEventListener('scroll', setAppHeight);

    setAppHeight();

    return () => {
      window.removeEventListener('resize', setAppHeight);
      window.removeEventListener('orientationchange', setAppHeight);
      window.removeEventListener('scroll', setAppHeight);
    };
  }, []);
};

export default useAppHeight;