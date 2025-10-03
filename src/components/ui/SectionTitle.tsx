// components/ui/SectionTitle.tsx
'use client';

import { GlitchText } from './GlitchText';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  gradientFrom: string;
  gradientTo: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  gradientFrom,
  gradientTo
}) => (
  <div className="text-center mb-16">
    <h2 className="text-5xl md:text-7xl font-black mb-6">
      {/* <GlitchText> */}
        <span className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`}>
          {title}
        </span>
      {/* </GlitchText> */}
    </h2>
    {subtitle && (
      <p className="text-xl text-gray-300">{subtitle}</p>
    )}
  </div>
);