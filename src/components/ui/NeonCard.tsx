// components/ui/NeonCard.tsx
'use client';

interface NeonCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'yellow' | 'cyan';
}

export const NeonCard: React.FC<NeonCardProps> = ({ 
  children, 
  className = "", 
  glowColor = "yellow" 
}) => {
  const glowClass = glowColor === "yellow" 
    ? "shadow-[0_0_50px_rgba(255,255,0,0.3)] border-yellow-400/50"
    : "shadow-[0_0_50px_rgba(0,255,255,0.3)] border-cyan-400/50";
  
  return (
    <div className={`bg-black/60 backdrop-blur-xl border-2 rounded-2xl p-6 hover:scale-105 transition-all duration-500 ${glowClass} ${className}`}>
      {children}
    </div>
  );
};