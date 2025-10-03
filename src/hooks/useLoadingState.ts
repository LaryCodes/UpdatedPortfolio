// hooks/useLoadingState.ts
'use client';

import { useState, useEffect } from 'react';

export const useLoadingState = (delay: number = 1000) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isLoaded;
};