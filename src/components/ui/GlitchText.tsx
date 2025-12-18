// components/ui/GlitchText.tsx
'use client';

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <span className="relative z-10 drop-shadow-[0_0_10px_rgba(255,255,0,0.3)]">{children}</span>
  </div>
);