// components/ui/GlitchText.tsx
'use client';

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <span className="relative z-10">{children}</span>
    <span 
      className="absolute top-0 left-0 text-cyan-50 opacity-0 animate-pulse" 
      style={{ transform: 'translate(-2px, -1px)' }}
    >
      {children}
    </span>
    <span 
      className="absolute top-0 left-0 text-yellow-400 opacity-70 animate-pulse" 
      style={{ transform: 'translate(2px, 1px)' }}
    >
      {children}
    </span>
  </div>
);