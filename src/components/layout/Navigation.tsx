// components/layout/Navigation.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Home, User, Code, Briefcase, Mail, 
  Download, Github, Linkedin, MessageCircle,
  Zap, Rocket, Monitor, Brain
} from 'lucide-react';
import { scrollToElement } from '../../lib/utils';
import { personalInfo } from '../../lib/data/personalInfo';
import Link from 'next/link';
import Image from 'next/image';

interface NavigationProps {
  isScrolled: boolean;
  activeSection: string;
}

export const Navigation = ({ isScrolled, activeSection }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/larycodes', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/larycodes', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://wa.me/923220237437', label: 'WhatsApp' }
  ];

  const handleNavigation = (sectionId: string) => {
    scrollToElement(sectionId);
    setIsMobileMenuOpen(false);
  };

  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/v1.pdf';
    link.download = 'Muhammad_Laraib_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
          isMobileMenuOpen ? 'lg:z-50 z-30' : 'z-50'
        } ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
              <div className="relative group flex-shrink-0">
                <a href="/face.jpeg" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/face2.jpeg"
                    width={40}
                    height={40}
                    alt="Muhammad Laraib"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                  /> 
                </a>
                <div className="absolute inset-0 pointer-events-none rounded-lg blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300 bg-gradient-to-r from-yellow-400 to-cyan-400">
                </div>
              </div>

              <div className="flex flex-col min-w-0">
                <h1 className="text-sm sm:text-xl font-semibold sm:font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight truncate">
                  Muhammad Laraib
                </h1>
                <p className="text-xs text-gray-400 leading-tight truncate">Full Stack Developer</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`group relative flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-yellow-400/20 to-cyan-400/20 text-yellow-400 border border-yellow-400/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <IconComponent 
                      className={`w-4 h-4 transition-all duration-300 ${
                        isActive ? 'text-yellow-400' : 'group-hover:scale-110'
                      }`} 
                    />
                    <span className="font-medium">{item.label}</span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-yellow-400 to-cyan-400 rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Social Links */}
              <div className="flex items-center space-x-2">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-white/20 hover:border-yellow-400/50 text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>

              {/* Download CV Button */}
              <button
                onClick={handleDownloadCV}
                className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,0,0.3)]"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full border border-white/20 hover:border-yellow-400/50 text-gray-400 hover:text-yellow-400 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-cyan-400 transition-all duration-300"
             style={{ width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` }}>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Mobile Menu Content */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-gradient-to-b from-gray-900 via-gray-900 to-black border-l border-white/10 shadow-2xl transform transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 h-full flex flex-col">
            
            {/* Mobile Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="relative group">
                  <Image
                    src="/face2.jpeg"
                    width={48}
                    height={48}
                    alt="Muhammad Laraib"
                    className="w-12 h-12 rounded-lg object-cover ring-2 ring-yellow-400/30"
                  />
                  <div className="absolute inset-0 pointer-events-none rounded-lg blur-lg opacity-40 bg-gradient-to-r from-yellow-400 to-cyan-400"></div>
                </div>
                <div>
                  <h2 className="font-bold text-white text-base">Muhammad Laraib</h2>
                  <p className="text-sm text-gray-400">Full Stack Developer</p>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Navigation Items */}
            <div className="space-y-2 mb-8">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`w-full flex items-center space-x-4 px-4 py-4 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-yellow-400/20 to-cyan-400/20 text-yellow-400 border border-yellow-400/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <IconComponent className={`w-5 h-5 ${isActive ? 'text-yellow-400' : ''}`} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Social Links */}
            <div className="mb-8">
              <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-4">Connect</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-white/20 hover:border-yellow-400/50 text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Mobile Download CV Button */}
            <div className="mt-auto">
              <button
                onClick={() => {
                  handleDownloadCV();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,0,0.3)]"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Navigation Dots (Desktop) */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
        <div className="space-y-4">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`group relative block w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-yellow-400 to-cyan-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50 hover:scale-110'
                }`}
                title={item.label}
              >
                <div className={`absolute right-6 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-black/80 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                }`}>
                  {item.label}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};