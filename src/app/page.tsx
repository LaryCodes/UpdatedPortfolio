// app/page.tsx
'use client';

import dynamic from 'next/dynamic';

// Dynamically import the Portfolio component to avoid SSR issues with animations
const Portfolio = dynamic(() => import('../components/Portfolio'), {
  ssr: false,
  loading: () => <LoadingFallback />
});

// Loading fallback component
const LoadingFallback = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        {/* Loading Spinner */}
        <div className="relative mb-8">
          <div className="w-16 h-16 border-4 border-gray-800 rounded-full animate-spin">
            <div className="absolute inset-0 border-4 border-transparent border-t-yellow-400 rounded-full animate-spin"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-cyan-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
          Loading Portfolio...
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return <Portfolio />;
}