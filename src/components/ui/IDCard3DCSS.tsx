// components/ui/IDCard3DCSS.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Brain, Code, Database, Cpu, Zap, Shield } from 'lucide-react';

export const IDCard3DCSS = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div className="w-full h-[450px] sm:h-[550px] lg:h-[600px] flex items-center justify-center perspective-1000">
      <div
        className="relative w-64 sm:w-80 lg:w-96 h-[380px] sm:h-[480px] lg:h-[540px] cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsFlipped(!isFlipped)}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: 'transform 0.1s ease-out',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Card Container */}
        <div
          className="relative w-full h-full transition-transform duration-700"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
        >
          {/* Front Face */}
          <div
            className="absolute inset-0 backface-hidden"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl border border-yellow-400/50 shadow-[0_0_60px_rgba(255,255,0,0.4),inset_0_0_60px_rgba(255,255,0,0.1)] overflow-hidden relative">
              {/* Animated Circuit Pattern Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute bg-yellow-400"
                      style={{
                        width: '1px',
                        height: `${Math.random() * 100}%`,
                        left: `${i * 5}%`,
                        top: `${Math.random() * 50}%`,
                        animation: `pulse ${2 + Math.random() * 3}s infinite`
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Holographic Corner Accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-3xl" />
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-3xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cyan-400/50 rounded-br-3xl" />

              {/* Lanyard Hole with Glow */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full border-2 border-yellow-300 shadow-[0_0_20px_rgba(251,191,36,0.8)] flex items-center justify-center z-10">
                <div className="w-4 h-4 bg-black rounded-full" />
              </div>

              {/* Elite Header */}
              <div className="relative mt-4 sm:mt-6 lg:mt-8 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-5 mb-3 sm:mb-4">
                  <Brain className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-yellow-400 animate-pulse flex-shrink-0" />
                  <div className="text-center flex-1 min-w-0 space-y-1 sm:space-y-1.5">
                    <p className="text-yellow-400 text-[10px] sm:text-xs lg:text-sm font-bold tracking-[0.2em] sm:tracking-[0.25em] lg:tracking-[0.3em] drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]">
                      ELITE ACCESS
                    </p>
                    <p className="text-white text-xs sm:text-sm lg:text-base font-black tracking-wide sm:tracking-wider lg:tracking-widest leading-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                      AGENTIC AI ENGINEER
                    </p>
                  </div>
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-cyan-400 animate-pulse flex-shrink-0" />
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-70 shadow-[0_0_8px_rgba(250,204,21,0.4)]" />
              </div>

              {/* Photo with Holographic Frame */}
              <div className="flex justify-center mt-4 sm:mt-6 relative">
                <div className="relative">
                  {/* Rotating Ring */}
                  <div className="absolute inset-0 -m-1.5 sm:-m-2 rounded-xl sm:rounded-2xl border-2 border-transparent bg-gradient-to-r from-yellow-400 via-cyan-400 to-purple-400 animate-spin-slow" style={{ animationDuration: '8s' }} />
                  
                  {/* Photo Container */}
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-xl sm:rounded-2xl overflow-hidden border-3 sm:border-4 border-black shadow-[0_0_20px_rgba(255,255,0,0.3)] sm:shadow-[0_0_30px_rgba(255,255,0,0.3)]">
                    <Image
                      src="/me.png"
                      fill
                      alt="Muhammad Laraib"
                      className="object-cover object-[center_20%]"
                    />
                    {/* Scan Line Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-scan" />
                  </div>

                  {/* Corner Markers */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-yellow-400" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-yellow-400" />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-yellow-400" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-yellow-400" />
                </div>
              </div>

              {/* Identity Section */}
              <div className="px-4 sm:px-6 mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                {/* Name with Glitch Effect */}
                <div className="text-center">
                  <h3 className="text-lg sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 tracking-wide sm:tracking-wider animate-gradient">
                    MUHAMMAD LARAIB
                  </h3>
                </div>

                {/* Title with Icons */}
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-cyan-400">
                  <Code className="w-3 h-3 sm:w-4 sm:h-4" />
                  <p className="text-xs sm:text-sm font-bold tracking-wide">FULL STACK DEVELOPER</p>
                  <Cpu className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>

                {/* Specializations */}
                <div className="flex justify-center gap-1.5 sm:gap-2 flex-wrap">
                  {['Agentic AI', 'LLMs', 'Automation'].map((tag, i) => (
                    <span
                      key={tag}
                      className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-300 font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Divider with Pulse */}
                <div className="relative h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-ping" />
                </div>

                {/* Security Features */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center">
                  <div className="space-y-0.5 sm:space-y-1">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-yellow-400" />
                    <p className="text-[8px] sm:text-[10px] text-gray-400 font-mono">VERIFIED</p>
                  </div>
                  <div className="space-y-0.5 sm:space-y-1">
                    <Database className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-cyan-400" />
                    <p className="text-[8px] sm:text-[10px] text-gray-400 font-mono">ENCRYPTED</p>
                  </div>
                  <div className="space-y-0.5 sm:space-y-1">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-green-400" />
                    <p className="text-[8px] sm:text-[10px] text-gray-400 font-mono">SECURED</p>
                  </div>
                </div>

                {/* ID Number with Holographic Effect */}
                <div className="text-center">
                  <p className="text-[10px] sm:text-xs text-gray-500 font-mono tracking-widest">
                    ID: <span className="text-yellow-400 font-bold">LC-AI-2024-001</span>
                  </p>
                </div>
              </div>

              {/* Shine Effect */}
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(
                    ${rotation.y + 90}deg,
                    transparent 0%,
                    rgba(255, 255, 255, 0.1) 45%,
                    rgba(255, 255, 255, 0.3) 50%,
                    rgba(255, 255, 255, 0.1) 55%,
                    transparent 100%
                  )`
                }}
              />
            </div>
          </div>

          {/* Back Face */}
          <div
            className="absolute inset-0 backface-hidden"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl border border-cyan-400/50 shadow-[0_0_60px_rgba(0,255,255,0.4),inset_0_0_60px_rgba(0,255,255,0.1)] overflow-hidden relative">
              {/* Circuit Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute bg-cyan-400"
                      style={{
                        width: `${Math.random() * 100}%`,
                        height: '1px',
                        top: `${i * 6.67}%`,
                        left: `${Math.random() * 50}%`,
                        animation: `pulse ${2 + Math.random() * 3}s infinite`
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Magnetic Strip */}
              <div className="w-full h-20 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 mt-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
              </div>

              {/* Content */}
              <div className="px-6 mt-8 space-y-4">
                {/* Header */}
                <div className="text-center">
                  <h3 className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 tracking-wider mb-2">
                    CORE COMPETENCIES
                  </h3>
                  <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                </div>

                {/* Tech Stack with Progress */}
                <div className="space-y-3">
                  {[
                    { name: 'Agentic AI Systems', level: 95, icon: Brain, color: 'yellow' },
                    { name: 'Full Stack Development', level: 92, icon: Code, color: 'cyan' },
                    { name: 'LLM Integration', level: 90, icon: Zap, color: 'purple' },
                    { name: 'Cloud Architecture', level: 88, icon: Database, color: 'green' }
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <skill.icon className={`w-3 h-3 text-${skill.color}-400`} />
                          <span className="text-gray-300 font-semibold">{skill.name}</span>
                        </div>
                        <span className={`text-${skill.color}-400 font-bold`}>{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-${skill.color}-400 to-${skill.color}-600 rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Certifications */}
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {['React Expert', 'Next.js Pro', 'Python Dev', 'AI Builder'].map((cert) => (
                    <div
                      key={cert}
                      className="text-center p-2 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50"
                    >
                      <p className="text-[10px] text-gray-400 font-semibold">{cert}</p>
                    </div>
                  ))}
                </div>

                {/* QR Code */}
                <div className="flex justify-center mt-4">
                  <div className="w-20 h-20 bg-white rounded-lg p-1 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    <div className="w-full h-full bg-black rounded grid grid-cols-6 gap-[1px] p-1">
                      {Array.from({ length: 36 }).map((_, i) => (
                        <div
                          key={i}
                          className={`${
                            Math.random() > 0.5 ? 'bg-white' : 'bg-black'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="text-center text-[10px] text-gray-500 font-mono space-y-1">
                  <p>AUTHORIZED • VERIFIED • ELITE</p>
                  <p className="text-cyan-400">larycodes@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <p className="text-sm text-gray-400 font-medium">
          <span className="hidden sm:inline">Hover to tilt • </span>
          <span className="text-yellow-400">Click to flip</span>
        </p>
      </div>
    </div>
  );
};
