// components/ui/AnimatedBackground.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const rafRef = useRef<number>();

  useEffect(() => {
    // Detect mobile
    setIsMobile(window.innerWidth < 768);
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Responsive canvas sizing
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    
    // Drastically reduced particle count - 15 on mobile, 30 on desktop
    const particleCount = window.innerWidth < 768 ? 15 : 30;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1, // Slower speed
        vy: (Math.random() - 0.5) * 1,
        size: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? '#FFFF00' : '#00FFFF'
      });
    }
    
    let lastTime = 0;
    const fps = isMobile ? 30 : 60; // 30fps on mobile, 60fps on desktop
    const interval = 1000 / fps;
    
    const animate = (currentTime: number) => {
      if (!isVisible) return; // Pause when not visible
      
      const deltaTime = currentTime - lastTime;
      
      if (deltaTime >= interval) {
        lastTime = currentTime - (deltaTime % interval);
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
          particle.x += particle.vx;
          particle.y += particle.vy;
          
          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
          
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color + '40';
          ctx.fill();
        });
      }
      
      rafRef.current = requestAnimationFrame(animate);
    };
    animate(0);

    const handleResize = () => {
      resizeCanvas();
      setIsMobile(window.innerWidth < 768);
    };

    // Intersection Observer to pause when not visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (canvas) {
      observer.observe(canvas);
    }

    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      observer.disconnect();
    };
  }, [isVisible, isMobile]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none opacity-20"
      style={{ willChange: isVisible ? 'contents' : 'auto' }}
    />
  );
};
