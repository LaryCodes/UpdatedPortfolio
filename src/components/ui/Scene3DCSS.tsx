// components/ui/Scene3DCSS.tsx
'use client';

import { useEffect, useRef } from 'react';

export const Scene3DCSS = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const shapes = container.querySelectorAll('.floating-tech');
    let animationId: number;

    const animate = () => {
      const time = Date.now() * 0.001;

      shapes.forEach((shape, index) => {
        const element = shape as HTMLElement;
        const speed = 0.2 + (index * 0.05);
        const yOffset = Math.sin(time * speed + index) * 40;
        const xOffset = Math.cos(time * speed * 0.7 + index) * 20;
        const rotation = Math.sin(time * speed) * 15;

        element.style.transform = `
          translate3d(${xOffset}px, ${yOffset}px, 0)
          rotateZ(${rotation}deg)
        `;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // Your most important tech stack - reduced to 10 key technologies
  const techStack = [
    // Top Row
    { name: 'Next.js', icon: '▲', color: 'white', position: 'top-[15%] left-[15%]' },
    { name: 'React', icon: '⚛', color: 'cyan', position: 'top-[18%] left-[40%]' },
    { name: 'Python', icon: '🐍', color: 'yellow', position: 'top-[12%] left-[65%]' },
    { name: 'TypeScript', icon: 'TS', color: 'blue', position: 'top-[20%] left-[85%]' },
    
    // Middle Row
    { name: 'OpenAI', icon: '🤖', color: 'green', position: 'top-[45%] left-[10%]' },
    { name: 'LangChain', icon: '🦜', color: 'green', position: 'top-[48%] left-[35%]' },
    { name: 'PostgreSQL', icon: '🐘', color: 'blue', position: 'top-[42%] left-[60%]' },
    { name: 'FastAPI', icon: '⚡', color: 'green', position: 'top-[50%] left-[85%]' },
    
    // Bottom Row
    { name: 'Docker', icon: '🐳', color: 'blue', position: 'top-[75%] left-[25%]' },
    { name: 'Git', icon: '⎇', color: 'orange', position: 'top-[78%] left-[70%]' },
  ];

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ perspective: '1500px' }}
    >
      {techStack.map((tech, index) => (
        <div
          key={index}
          className={`floating-tech absolute ${tech.position}`}
          style={{ 
            transformStyle: 'preserve-3d',
            willChange: 'transform'
          }}
        >
          <div className="relative group">
            {/* Tech Icon Container */}
            <div
              className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-${tech.color}-400/20 backdrop-blur-md flex flex-col items-center justify-center relative overflow-hidden transition-all duration-300 hover:scale-110 hover:border-${tech.color}-400/50`}
              style={{
                boxShadow: `0 0 20px rgba(0,0,0,0.5), 0 0 40px ${tech.color === 'white' ? 'rgba(255,255,255,0.1)' : 
                  tech.color === 'cyan' ? 'rgba(6,182,212,0.2)' :
                  tech.color === 'yellow' ? 'rgba(251,191,36,0.2)' :
                  tech.color === 'blue' ? 'rgba(59,130,246,0.2)' :
                  tech.color === 'green' ? 'rgba(16,185,129,0.2)' :
                  tech.color === 'orange' ? 'rgba(249,115,22,0.2)' :
                  tech.color === 'purple' ? 'rgba(168,85,247,0.2)' :
                  tech.color === 'pink' ? 'rgba(236,72,153,0.2)' :
                  tech.color === 'red' ? 'rgba(239,68,68,0.2)' : 'rgba(255,255,255,0.1)'}`
              }}
            >
              {/* Animated Glow Background */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${tech.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`text-lg sm:text-2xl text-${tech.color}-400 relative z-10 font-bold`}>
                {tech.icon}
              </div>
              
              {/* Tech Name */}
              <div className={`text-[6px] sm:text-[8px] text-${tech.color}-400/80 font-semibold mt-0.5 sm:mt-1 relative z-10`}>
                {tech.name}
              </div>

              {/* Corner Accents */}
              <div className={`absolute top-0 left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-t border-l border-${tech.color}-400/30`} />
              <div className={`absolute top-0 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-t border-r border-${tech.color}-400/30`} />
              <div className={`absolute bottom-0 left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-b border-l border-${tech.color}-400/30`} />
              <div className={`absolute bottom-0 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-b border-r border-${tech.color}-400/30`} />
            </div>

            {/* Tooltip on Hover - Desktop only */}
            <div className={`hidden sm:block absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-bold text-${tech.color}-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 px-2 py-1 rounded border border-${tech.color}-400/30`}>
              {tech.name}
            </div>

            {/* Subtle Pulse Ring - Reduced on mobile */}
            <div className={`absolute inset-0 rounded-lg sm:rounded-xl border border-${tech.color}-400/20 animate-ping opacity-10 sm:opacity-20`} style={{ animationDuration: '3s', animationDelay: `${index * 0.2}s` }} />
          </div>
        </div>
      ))}

      {/* Connecting Lines (Data Flow) - Reduced */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Just 3 subtle lines */}
        <line x1="15%" y1="18%" x2="85%" y2="18%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" />
        <line x1="10%" y1="47%" x2="85%" y2="47%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '2s' }} />
        <line x1="25%" y1="77%" x2="70%" y2="77%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '4s' }} />
      </svg>
    </div>
  );
};
