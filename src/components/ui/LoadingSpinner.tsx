// components/ui/LoadingSpinner.tsx
'use client';

export const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="relative">
      <div className="w-20 h-20 border-4 border-yellow-400/30 rounded-full animate-spin border-t-yellow-400"></div>
      <div className="absolute inset-0 w-16 h-16 m-auto border-4 border-cyan-400/30 rounded-full animate-spin border-t-cyan-400 animation-delay-150"></div>
    </div>
  </div>
);