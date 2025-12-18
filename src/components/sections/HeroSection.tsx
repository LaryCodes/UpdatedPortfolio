// components/sections/HeroSection.tsx
'use client';

import React from 'react';
import { Github, Linkedin, Mail, MessageCircle, Rocket, Download } from 'lucide-react';
import { GlitchText } from '../ui/GlitchText';
import { useTypingAnimation } from '../../hooks/useTypingAnimation';
import { useLoadingState } from '../../hooks/useLoadingState';
import { personalInfo } from '../../lib/data/personalInfo';
import Link from 'next/link';
import Image from 'next/image';

export const HeroSection = () => {
  const isLoaded = useLoadingState(1000);
  const { currentText } = useTypingAnimation({
    texts: personalInfo.roles,
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDuration: 2000
  });

  const socialIcons = {
    Github,
    Linkedin, 
    Mail,
    MessageCircle
  };

  return (
    <section id="home" className="min-h-screen mt-14 flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-transparent to-gray-900/20 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className={`transition-all duration-2000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
            
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1 space-y-6">
              
              {/* Main Title with Glitch Effect */}
              <div className="space-y-4">
                <GlitchText className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none">
                  <span className="bg-gradient-to-r from-white via-yellow-400 to-cyan-400 bg-clip-text text-transparent">
                    {personalInfo.brandName.toUpperCase()}
                  </span>
                </GlitchText>
            
                {/* Animated Role */}
                <div className="h-12 sm:h-16">
                  <span className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-light text-gray-300">
                    {currentText}
                    <span className="animate-ping text-yellow-400">|</span>
                  </span>
                </div>
              </div>

              {/* Bio Description */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {personalInfo.bio.split(' ').map((word, index) => {
                  const highlightWords = ['next-generation', 'AI-powered', 'cutting-edge'];
                  const isHighlight = highlightWords.some(hw => word.toLowerCase().includes(hw.toLowerCase()));
              
                  if (isHighlight) {
                   if (word.toLowerCase().includes('next-generation')) {
                     return <span key={index} className="text-yellow-400 font-semibold">{word} </span>;
                   } else if (word.toLowerCase().includes('ai-powered')) {
                      return <span key={index} className="text-cyan-400 font-semibold">{word} </span>;
                    } else if (word.toLowerCase().includes('cutting-edge')) {
                     return <span key={index} className="text-purple-400 font-semibold">{word} </span>;
                    }
                  }
                 return word + ' ';
                })}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
                <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full font-bold text-black hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,0,0.5)] w-full sm:w-auto">
                  <Link href={'#projects'}>
                  <span className="flex items-center justify-center gap-2">
                    <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    View Projects
                  </span>
                  </Link>
                </button>
                
                <button className="group relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-400 rounded-full font-bold text-cyan-400 hover:bg-cyan-400 hover:text-black hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,255,0.3)] w-full sm:w-auto">
                  <a href='/v1.pdf' download={true} className="flex items-center justify-center gap-2">
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    Download CV
                  </a>
                </button>
              </div>

              {/* Social Links - Mobile: Center, Desktop: Left */}
              <div className="flex justify-center lg:justify-start space-x-4 pt-4">
                {personalInfo.socialLinks.map((social, index) => {
                  const IconComponent = socialIcons[social.icon as keyof typeof socialIcons];
                  const colors = [
                    'hover:text-gray-400',
                    'hover:text-blue-400', 
                    'hover:text-red-400',
                    'hover:text-green-400'
                  ];
                  
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full border border-white/20 hover:border-white/60 ${colors[index]} transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm`}
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
            
            {/* Right Column - Lanyard ID Card */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative flex flex-col items-center">
                {/* Lanyard Strap - hidden on mobile, visible on larger screens */}
                <div className="relative hidden sm:block">
                  {/* Strap going up and out of view */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-32 sm:-top-40 w-4 sm:w-5 h-32 sm:h-40 bg-gradient-to-b from-yellow-500 to-yellow-400 rounded-t-full" />
                  
                  {/* Clip/Hook */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-3 z-20">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full border-2 border-gray-500 shadow-lg flex items-center justify-center">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-600 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* ID Card */}
                <div className="relative w-52 sm:w-64 lg:w-72 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border-2 border-yellow-400/50 shadow-[0_0_40px_rgba(255,255,0,0.2)] overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,0,0.3)] hover:border-cyan-400/50">
                  
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 sm:py-3">
                    <p className="text-black text-xs sm:text-sm font-bold text-center tracking-wider">DEVELOPER ID</p>
                  </div>
                  
                  {/* Card Body */}
                  <div className="p-4 sm:p-6 flex flex-col items-center space-y-3 sm:space-y-4">
                    {/* Profile Photo */}
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-xl overflow-hidden border-2 border-white/20 shadow-lg">
                      <Image
                        src="/me.png"
                        fill
                        alt="Muhammad Laraib"
                        className="object-cover object-[center_20%]"
                      />
                    </div>
                    
                    {/* Name */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white text-center">
                      {personalInfo.name}
                    </h3>
                    
                    {/* Title */}
                    <p className="text-xs sm:text-sm text-cyan-400 font-medium text-center">
                      Full Stack Developer
                    </p>
                    
                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
                    
                    {/* Barcode-like decoration */}
                    <div className="flex gap-0.5 sm:gap-1 items-end h-6 sm:h-8">
                      {[3, 5, 2, 6, 4, 3, 5, 2, 6, 4, 3, 5, 2, 4].map((h, i) => (
                        <div 
                          key={i} 
                          className="w-1 sm:w-1.5 bg-white/30 rounded-sm"
                          style={{ height: `${h * 4}px` }}
                        />
                      ))}
                    </div>
                    
                    {/* ID Number */}
                    <p className="text-[10px] sm:text-xs text-gray-500 font-mono tracking-widest">
                      ID: LC-2024-001
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { label: 'Projects Completed', value: '10+' },
                { label: 'Technologies Mastered', value: '15+' },
                { label: 'Awards Won', value: '3' },
                { label: 'Years Experience', value: '2+' }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center p-4 rounded-lg backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-gradient-to-b from-yellow-400 to-cyan-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};