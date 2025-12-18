// components/ui/CustomCursor.tsx
'use client';

import { useState, useEffect } from 'react';

const DESKTOP_BREAKPOINT = 768;

/**
 * Detects if the current device is a desktop based on:
 * - Viewport width >= 768px
 * - Non-touch device (pointer: fine or no coarse pointer)
 */
const checkIsDesktop = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const isWideEnough = window.innerWidth >= DESKTOP_BREAKPOINT;
  const isTouchDevice = window.matchMedia?.('(pointer: coarse)')?.matches ?? false;
  
  return isWideEnough && !isTouchDevice;
};

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  // Device detection effect
  useEffect(() => {
    // SSR safety check
    if (typeof window === 'undefined') return;

    // Initial detection
    setIsDesktop(checkIsDesktop());

    // Handle resize for dynamic viewport changes
    const handleResize = () => {
      setIsDesktop(checkIsDesktop());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mouse tracking effect
  useEffect(() => {
    // Only track mouse on desktop
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDesktop]);

  // Don't render on non-desktop devices
  if (!isDesktop) {
    return null;
  }

  return (
    <div
      className="fixed pointer-events-none z-50 mix-blend-difference"
      style={{
        left: mousePosition.x - 12,
        top: mousePosition.y - 12,
        transition: 'all 0.1s ease'
      }}
    >
      <div className="w-6 h-6 bg-white rounded-full opacity-80"></div>
    </div>
  );
};
