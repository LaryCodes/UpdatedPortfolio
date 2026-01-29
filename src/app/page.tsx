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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
      <div className="text-center relative">
        {/* Animated Circles Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border-2 border-yellow-400/20 rounded-full animate-ping"></div>
          <div className="absolute w-24 h-24 border-2 border-cyan-400/20 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Main Loading Circle */}
        <div className="relative mb-8 flex items-center justify-center">
          <div className="w-24 h-24 border-4 border-gray-800 rounded-full relative">
            <div className="absolute inset-0 border-4 border-transparent border-t-yellow-400 border-r-cyan-400 rounded-full animate-spin"></div>
          </div>
          <div className="absolute w-16 h-16 bg-gradient-to-br from-yellow-400 to-cyan-400 rounded-full animate-pulse blur-sm"></div>
          <div className="absolute w-12 h-12 bg-gradient-to-br from-yellow-400 to-cyan-400 rounded-full"></div>
        </div>

        {/* Loading Text */}
        <div className="text-3xl sm:text-4xl font-bold mb-2">
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            MUHAMMAD
          </span>
          {' '}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse" style={{ animationDelay: '0.2s' }}>
            LARAIB
          </span>
        </div>
        
        <div className="text-gray-400 mt-3 text-sm font-medium">
          Loading Portfolio...
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return <Portfolio />;
}