// components/sections/Footer.tsx
'use client';

import React from 'react';
import { 
  Github, Linkedin, Mail, Phone, MapPin, 
  ArrowUp, Heart, Code, Coffee, Zap,
  ExternalLink, Calendar, Clock, Star
} from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/larycodes',
      icon: Github,
      color: 'hover:text-gray-400',
      followers: '50+'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/larycodes',
      icon: Linkedin,
      color: 'hover:text-blue-400',
      followers: '1K+'
    },
    {
      name: 'Email',
      href: 'mailto:larycodes@gmail.com',
      icon: Mail,
      color: 'hover:text-red-400',
      followers: 'Direct'
    }
  ];

  const quickStats = [
    { label: 'Projects Completed', value: '10+', icon: Code },
    { label: 'Happy Clients', value: '25+', icon: Heart },
    { label: 'Coffee Consumed', value: '∞', icon: Coffee },
    { label: 'Years Experience', value: '2+', icon: Clock }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black/90 border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/50 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,0,0.1)_0%,transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-4xl font-black mb-2">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-cyan-400 bg-clip-text text-transparent">
                  LARYCODES
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-4">
                Agentic-Ai Engineer | Full-Stack Developer
              </p>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Crafting next-generation web applications and AI-powered solutions. 
                Passionate about turning innovative ideas into reality through clean code and cutting-edge technology.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {quickStats.map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-white/10">
                  <div className={`p-2 rounded-lg ${index % 2 === 0 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gradient-to-r from-cyan-400 to-blue-500'}`}>
                    <stat.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-yellow-400" />
                <a href="mailto:larycodes@gmail.com" className="hover:text-yellow-400 transition-colors">
                  larycodes@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-green-400" />
                <a href="tel:+923220237437" className="hover:text-green-400 transition-colors">
                  +92 322 0237437
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Karachi, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Navigation
            </h3>
            <nav className="space-y-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className=" text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Current Status */}
            <div className="mt-8 p-4 rounded-lg bg-gradient-to-r from-green-900/20 to-cyan-900/20 border border-green-500/20">
              <div className="flex items-center gap-2 text-green-400 text-sm mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-medium">Available for work</span>
              </div>
              <p className="text-gray-400 text-xs">
                Currently accepting new projects and collaborations
              </p>
            </div>
          </div>

          {/* Social & Connect */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Let&apos;s Connect
            </h3>
            
            <div className="space-y-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className={`flex items-center gap-4 p-3 rounded-lg bg-black/40 border border-white/10 hover:border-white/30 ${social.color} transition-all duration-300 group`}
                >
                  <div className="p-2 rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 group-hover:from-yellow-400 group-hover:to-cyan-400 transition-all duration-300">
                    <social.icon className="w-4 h-4 group-hover:text-black" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{social.name}</div>
                    <div className="text-xs text-gray-400">{social.followers}</div>
                  </div>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>

            {/* Newsletter/Updates */}
            <div className="p-4 rounded-lg bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20">
              <div className="flex items-center gap-2 text-purple-400 text-sm mb-2">
                <Zap className="w-4 h-4" />
                <span className="font-medium">Stay Updated</span>
              </div>
              <p className="text-gray-400 text-xs mb-3">
                Get notified about new projects and tech insights
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white text-xs rounded-full hover:scale-105 transition-all duration-300"
              >
                <Star className="w-3 h-3" />
                Subscribe
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm mb-1">
                © {currentYear} Muhammad Laraib (LaryCodes). All rights reserved.
              </p>
              <p className="text-gray-500 text-xs flex items-center justify-center md:justify-start gap-1">
                Made with <Heart className="w-3 h-3 text-red-400" /> and <Coffee className="w-3 h-3 text-yellow-400" />
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span>Built with:</span>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-black/40 rounded border border-yellow-400/20 text-yellow-400">Next.js</span>
                <span className="px-2 py-1 bg-black/40 rounded border border-cyan-400/20 text-cyan-400">TypeScript</span>
                <span className="px-2 py-1 bg-black/40 rounded border border-purple-400/20 text-purple-400">Tailwind</span>
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-cyan-400 text-black rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,0,0.3)]"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              <span className="text-sm">Back to Top</span>
            </button>
          </div>
        </div>

        {/* Version Info */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            Portfolio • Last updated: {new Date().toLocaleDateString()} • 
            <span className="text-green-400 ml-1">Status: Active</span>
          </p>
        </div>
      </div>
    </footer>
  );
};