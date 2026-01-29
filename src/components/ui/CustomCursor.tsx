// components/ui/CustomCursor.tsx
'use client';

import { useState, useEffect, useRef } from 'react';

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
  const [isDesktop, setIsDesktop] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const mousePos = useRef({ x: 0, y: 0 });

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

  // Optimized mouse tracking with RAF
  useEffect(() => {
    // Only track mouse on desktop
    if (!isDesktop || !cursorRef.current) return;

    const cursor = cursorRef.current;
    let isAnimating = false;

    const updateCursorPosition = () => {
      if (cursor) {
        cursor.style.transform = `translate3d(${mousePos.current.x - 12}px, ${mousePos.current.y - 12}px, 0)`;
      }
      isAnimating = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      if (!isAnimating) {
        isAnimating = true;
        rafRef.current = requestAnimationFrame(updateCursorPosition);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isDesktop]);

  // Don't render on non-desktop devices
  if (!isDesktop) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-50 mix-blend-difference top-0 left-0"
      style={{
        willChange: 'transform',
        transition: 'opacity 0.2s ease'
      }}
    >
      <div className="w-6 h-6 bg-white rounded-full opacity-80"></div>
    </div>
  );
};
